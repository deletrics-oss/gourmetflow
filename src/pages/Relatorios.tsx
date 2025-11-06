import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, ShoppingBag, TrendingUp, Calendar as CalendarIcon, BarChart3 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Relatorios() {
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

      <Tabs defaultValue="7dias" className="mb-6">
        <TabsList>
          <TabsTrigger value="7dias">Últimos 7 dias</TabsTrigger>
          <TabsTrigger value="15dias">Últimos 15 dias</TabsTrigger>
          <TabsTrigger value="30dias">Últimos 30 dias</TabsTrigger>
          <TabsTrigger value="60dias">Últimos 60 dias</TabsTrigger>
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
          <p className="text-3xl font-bold">R$ 0.00</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Total de Pedidos</p>
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-blue-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">0</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Ticket Médio</p>
            <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-purple-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">R$ 0.00</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Pedidos/Dia</p>
            <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center">
              <CalendarIcon className="h-5 w-5 text-orange-500" />
            </div>
          </div>
          <p className="text-3xl font-bold">0.0</p>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Pedidos por Dia</h3>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Sem dados para exibir
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
                <div className="h-3 bg-primary rounded-full w-full"></div>
              </div>
              <span className="ml-3 text-sm font-medium w-8 text-right">0</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                <span className="text-sm">Retirada</span>
              </div>
              <div className="w-full max-w-xs">
                <div className="h-3 bg-purple-500 rounded-full w-full"></div>
              </div>
              <span className="ml-3 text-sm font-medium w-8 text-right">0</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Salão</span>
              </div>
              <div className="w-full max-w-xs">
                <div className="h-3 bg-green-500 rounded-full w-full"></div>
              </div>
              <span className="ml-3 text-sm font-medium w-8 text-right">0</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
