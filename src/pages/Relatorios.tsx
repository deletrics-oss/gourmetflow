import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { DollarSign, ShoppingBag, TrendingUp, Calendar as CalendarIcon, BarChart3 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/lib/supabase";

export default function Relatorios() {
  const [period, setPeriod] = useState<number>(7);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [period]);

  const loadData = async () => {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - period);

      const { data, error } = await supabase
        .from('orders' as any)
        .select('*')
        .gte('created_at', startDate.toISOString())
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Erro ao carregar relatórios:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalRevenue = orders.reduce((acc, o) => acc + (o.total || 0), 0);
  const totalOrders = orders.length;
  const avgTicket = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const ordersPerDay = totalOrders / period;

  const ordersByType = {
    delivery: orders.filter(o => o.delivery_type === 'delivery').length,
    pickup: orders.filter(o => o.delivery_type === 'pickup').length,
    dine_in: orders.filter(o => o.delivery_type === 'dine_in').length,
  };

  const maxOrdersByType = Math.max(ordersByType.delivery, ordersByType.pickup, ordersByType.dine_in, 1);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Relatórios</h1>
          </div>
          <p className="text-muted-foreground">Análise de desempenho do seu negócio</p>
        </div>
      </div>

      <Tabs defaultValue="7" className="mb-6" onValueChange={(v) => setPeriod(parseInt(v))}>
        <TabsList>
          <TabsTrigger value="7">Últimos 7 dias</TabsTrigger>
          <TabsTrigger value="15">Últimos 15 dias</TabsTrigger>
          <TabsTrigger value="30">Últimos 30 dias</TabsTrigger>
          <TabsTrigger value="60">Últimos 60 dias</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Faturamento Total</p>
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">R$ {totalRevenue.toFixed(2)}</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Total de Pedidos</p>
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">{totalOrders}</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Ticket Médio</p>
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">R$ {avgTicket.toFixed(2)}</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Pedidos/Dia</p>
            <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-orange-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">{ordersPerDay.toFixed(1)}</p>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Pedidos por Dia</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            {totalOrders > 0 ? `${totalOrders} pedidos nos últimos ${period} dias` : 'Sem dados para exibir'}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Pedidos por Tipo</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-sm">Delivery</span>
              </div>
              <div className="w-full max-w-xs">
                <div 
                  className="h-3 bg-primary rounded-full transition-all" 
                  style={{ width: `${(ordersByType.delivery / maxOrdersByType) * 100}%` }}
                ></div>
              </div>
              <span className="ml-3 text-sm font-medium w-8 text-right">{ordersByType.delivery}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                <span className="text-sm">Retirada</span>
              </div>
              <div className="w-full max-w-xs">
                <div 
                  className="h-3 bg-purple-500 rounded-full transition-all" 
                  style={{ width: `${(ordersByType.pickup / maxOrdersByType) * 100}%` }}
                ></div>
              </div>
              <span className="ml-3 text-sm font-medium w-8 text-right">{ordersByType.pickup}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Salão</span>
              </div>
              <div className="w-full max-w-xs">
                <div 
                  className="h-3 bg-green-500 rounded-full transition-all" 
                  style={{ width: `${(ordersByType.dine_in / maxOrdersByType) * 100}%` }}
                ></div>
              </div>
              <span className="ml-3 text-sm font-medium w-8 text-right">{ordersByType.dine_in}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
