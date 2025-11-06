import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, ShoppingBag, TrendingUp, Clock, Package, ChefHat, Truck, CheckCircle2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";

export default function Pedidos() {
  const { orders, updateOrderStatus } = useApp();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayOrders = orders.filter((o) => new Date(o.createdAt) >= today);
  const totalRevenue = todayOrders.reduce((sum, o) => sum + o.total, 0);
  const averageTicket = todayOrders.length > 0 ? totalRevenue / todayOrders.length : 0;

  const newOrders = orders.filter((o) => o.status === "new");
  const preparingOrders = orders.filter((o) => o.status === "preparing");
  const readyOrders = orders.filter((o) => o.status === "ready");
  const completedOrders = todayOrders.filter((o) => o.status === "completed");

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Painel de Pedidos</h1>
        <p className="text-muted-foreground">Gerencie seus pedidos em tempo real</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Faturamento Hoje</p>
              <p className="text-2xl font-bold">R$ {totalRevenue.toFixed(2)}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pedidos Hoje</p>
              <p className="text-2xl font-bold">{todayOrders.length}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
              <ShoppingBag className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ticket Médio</p>
              <p className="text-2xl font-bold">R$ {averageTicket.toFixed(2)}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Aguardando</p>
              <p className="text-2xl font-bold">{newOrders.length}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </Card>
      </div>

      <Tabs defaultValue="novos" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="novos" className="data-[state=active]:bg-status-new data-[state=active]:text-status-new-foreground">
            <Package className="h-4 w-4 mr-2" />
            Novos
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">{newOrders.length}</span>
          </TabsTrigger>
          <TabsTrigger value="preparo" className="data-[state=active]:bg-status-preparing data-[state=active]:text-status-preparing-foreground">
            <ChefHat className="h-4 w-4 mr-2" />
            Em Preparo
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">{preparingOrders.length}</span>
          </TabsTrigger>
          <TabsTrigger value="pronto" className="data-[state=active]:bg-status-ready data-[state=active]:text-status-ready-foreground">
            <Truck className="h-4 w-4 mr-2" />
            Saiu / Pronto
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">{readyOrders.length}</span>
          </TabsTrigger>
          <TabsTrigger value="concluidos" className="data-[state=active]:bg-status-completed data-[state=active]:text-status-completed-foreground">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Concluídos
            <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">{completedOrders.length}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="novos" className="mt-6">
          {newOrders.length === 0 ? (
            <Card className="p-12 text-center">
              <Package className="h-16 w-16 text-muted-foreground/20 mb-4 mx-auto" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido novo</p>
              <p className="text-sm text-muted-foreground">Os pedidos confirmados aparecerão aqui</p>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {newOrders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">#{order.number}</h3>
                      {order.table && <Badge variant="outline" className="mt-2">Mesa {order.table}</Badge>}
                    </div>
                    <Badge className="bg-status-new text-status-new-foreground">{order.deliveryType}</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center mb-4">
                    <span className="font-bold">Total:</span>
                    <span className="text-xl font-bold">R$ {order.total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full" onClick={() => updateOrderStatus(order.id, "preparing")}>
                    Iniciar Preparo
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="preparo" className="mt-6">
          {preparingOrders.length === 0 ? (
            <Card className="p-12 text-center">
              <ChefHat className="h-16 w-16 text-muted-foreground/20 mb-4 mx-auto" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido em preparo</p>
              <p className="text-sm text-muted-foreground">Os pedidos em produção aparecerão aqui</p>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {preparingOrders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">#{order.number}</h3>
                      {order.table && <Badge variant="outline" className="mt-2">Mesa {order.table}</Badge>}
                    </div>
                    <Badge className="bg-status-preparing text-status-preparing-foreground">{order.deliveryType}</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => updateOrderStatus(order.id, "ready")}>
                    Marcar como Pronto
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="pronto" className="mt-6">
          {readyOrders.length === 0 ? (
            <Card className="p-12 text-center">
              <Truck className="h-16 w-16 text-muted-foreground/20 mb-4 mx-auto" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido pronto</p>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {readyOrders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">#{order.number}</h3>
                    <Badge className="bg-status-ready text-status-ready-foreground">{order.deliveryType}</Badge>
                  </div>
                  <Button className="w-full" onClick={() => updateOrderStatus(order.id, "completed")}>
                    Finalizar Pedido
                  </Button>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="concluidos" className="mt-6">
          {completedOrders.length === 0 ? (
            <Card className="p-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-muted-foreground/20 mb-4 mx-auto" />
              <p className="text-xl font-medium text-muted-foreground mb-2">Nenhum pedido concluído hoje</p>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {completedOrders.map((order) => (
                <Card key={order.id} className="p-4">
                  <h3 className="text-lg font-bold mb-2">#{order.number}</h3>
                  <p className="text-sm text-muted-foreground">R$ {order.total.toFixed(2)}</p>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
