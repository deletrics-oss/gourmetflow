-- Customers & Suppliers + Public web order policies

-- Create customers table
CREATE TABLE IF NOT EXISTS public.customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  cpf text,
  address jsonb,
  notes text
);

-- Unique index on phone for quick upsert
CREATE UNIQUE INDEX IF NOT EXISTS customers_phone_key ON public.customers (phone);

-- Create suppliers table
CREATE TABLE IF NOT EXISTS public.suppliers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  name text NOT NULL,
  phone text,
  email text,
  cnpj_cpf text,
  address jsonb,
  notes text
);

-- Enable RLS
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.suppliers ENABLE ROW LEVEL SECURITY;

-- Timestamp trigger function already exists: public.update_updated_at_column
-- Attach triggers
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_update_customers_updated_at'
  ) THEN
    CREATE TRIGGER trg_update_customers_updated_at
    BEFORE UPDATE ON public.customers
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'trg_update_suppliers_updated_at'
  ) THEN
    CREATE TRIGGER trg_update_suppliers_updated_at
    BEFORE UPDATE ON public.suppliers
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
  END IF;
END $$;

-- Policies for customers
DROP POLICY IF EXISTS "Staff can manage customers" ON public.customers;
CREATE POLICY "Staff can manage customers"
ON public.customers
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role));

DROP POLICY IF EXISTS "Public can insert customers" ON public.customers;
CREATE POLICY "Public can insert customers"
ON public.customers
FOR INSERT
WITH CHECK (true);

-- Policies for suppliers (staff only)
DROP POLICY IF EXISTS "Staff can manage suppliers" ON public.suppliers;
CREATE POLICY "Staff can manage suppliers"
ON public.suppliers
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'manager'::app_role));

-- PUBLIC ORDER POLICIES to allow web checkout
-- Allow public to insert orders (web + QR code)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='orders' AND policyname='Public can create orders'
  ) THEN
    CREATE POLICY "Public can create orders"
    ON public.orders
    FOR INSERT
    WITH CHECK (true);
  END IF;
END $$;

-- Allow public to read orders (needed for "Meus Pedidos" and PDV listing)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='orders' AND policyname='Anyone can view orders (public)'
  ) THEN
    CREATE POLICY "Anyone can view orders (public)"
    ON public.orders
    FOR SELECT
    USING (true);
  END IF;
END $$;

-- Allow public to insert/select order_items
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='order_items' AND policyname='Public can insert order_items'
  ) THEN
    CREATE POLICY "Public can insert order_items"
    ON public.order_items
    FOR INSERT
    WITH CHECK (true);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='order_items' AND policyname='Anyone can view order_items (public)'
  ) THEN
    CREATE POLICY "Anyone can view order_items (public)"
    ON public.order_items
    FOR SELECT
    USING (true);
  END IF;
END $$;