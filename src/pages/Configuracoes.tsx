import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Settings, MapPin, Clock, CreditCard, Printer, Info, Palette, Volume2, DollarSign } from "lucide-react";
import { ThemeSelector } from "@/components/ThemeSelector";
import { AudioManager } from "@/components/AudioManager";

export default function Configuracoes() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Settings className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">Configurações</h1>
        </div>
        <p className="text-muted-foreground">Configure seu estabelecimento e formas de operação</p>
      </div>

      <Tabs defaultValue="informacoes" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="informacoes" className="gap-2">
            <Info className="h-4 w-4" />
            Informações
          </TabsTrigger>
          <TabsTrigger value="endereco" className="gap-2">
            <MapPin className="h-4 w-4" />
            Endereço
          </TabsTrigger>
          <TabsTrigger value="entrega" className="gap-2">
            <Clock className="h-4 w-4" />
            Entrega
          </TabsTrigger>
          <TabsTrigger value="horarios" className="gap-2">
            <Clock className="h-4 w-4" />
            Horários
          </TabsTrigger>
          <TabsTrigger value="pagamento" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Pagamento
          </TabsTrigger>
          <TabsTrigger value="impressora" className="gap-2">
            <Printer className="h-4 w-4" />
            Impressora
          </TabsTrigger>
          <TabsTrigger value="aparencia" className="gap-2">
            <Palette className="h-4 w-4" />
            Aparência
          </TabsTrigger>
          <TabsTrigger value="audios" className="gap-2">
            <Volume2 className="h-4 w-4" />
            Alertas Sonoros
          </TabsTrigger>
          <TabsTrigger value="integracao" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Integrações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="informacoes">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Dados do Estabelecimento</h3>
                <p className="text-sm text-muted-foreground">Informações básicas do seu negócio</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome do Estabelecimento *</Label>
                <Input id="nome" placeholder="Ex: Pizzaria Bella Napoli" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="(11) 98765-4321" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" placeholder="@seurestaurante" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="segmento">Segmento</Label>
                <Input id="segmento" placeholder="Ex: Pizzaria, Hamburgueria, Japonês" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ ou CPF</Label>
                <Input id="cnpj" placeholder="00.000.000/0000-00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="responsavel">Nome do Responsável</Label>
                <Input id="responsavel" placeholder="Nome completo" />
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <Info className="h-4 w-4" />
              Salvar Informações
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="endereco">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold">Endereço</h3>
                <p className="text-sm text-muted-foreground">Localização do seu estabelecimento</p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP *</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="logradouro">Logradouro (rua, avenida, etc.) *</Label>
                  <Input id="logradouro" placeholder="Avenida Consolação Elisabeto Foleiro" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="numero">Número *</Label>
                  <Input id="numero" placeholder="2000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complemento">Complemento</Label>
                  <Input id="complemento" placeholder="Ex: apartamento" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro *</Label>
                  <Input id="bairro" placeholder="Centro" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input id="cidade" placeholder="São Paulo" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estado">Estado *</Label>
                  <Input id="estado" placeholder="SP" maxLength={2} />
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Deseja ocultar o endereço para seus clientes?
                </p>
                <p className="text-xs text-muted-foreground">
                  Se o endereço aparecer nas informações do seu estabelecimento no Cardápio Digital
                </p>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm mb-3">
                  Deseja informar latitude e longitude do seu estabelecimento manualmente?
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  Clique no mapa para ajustar a localização exata
                </p>
                <div className="bg-slate-200 dark:bg-slate-800 h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6411%2C-23.5528%2C-46.6311%2C-23.5428&layer=mapnik"
                    className="w-full h-full border-0"
                    title="Mapa de localização"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input id="latitude" placeholder="-23.550520" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input id="longitude" placeholder="-46.633308" />
                  </div>
                </div>
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <MapPin className="h-4 w-4" />
              Salvar Endereço
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="entrega">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">Zonas de Entrega</h3>
                <p className="text-sm text-muted-foreground">Configure áreas de atendimento e taxas</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Modo de entrega</h4>
                <p className="text-sm text-muted-foreground mb-3">Selecione as opções que melhor representam as modalidades de entrega/retirada da sua loja.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="delivery" defaultChecked className="h-4 w-4" />
                    <Label htmlFor="delivery" className="flex flex-col">
                      <span className="font-medium">Entrega</span>
                      <span className="text-sm text-muted-foreground">O pedido chega até o cliente por um entregador.</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="pickup" defaultChecked className="h-4 w-4" />
                    <Label htmlFor="pickup" className="flex flex-col">
                      <span className="font-medium">Retirada na loja</span>
                      <span className="text-sm text-muted-foreground">O cliente vai até a loja e retira o pedido.</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dine-in" className="h-4 w-4" />
                    <Label htmlFor="dine-in" className="flex flex-col">
                      <span className="font-medium">Consumo no local</span>
                      <span className="text-sm text-muted-foreground">O cliente vai até a loja e consome no local.</span>
                    </Label>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Valor mínimo para pedidos</Label>
                  <Input placeholder="Ex: R$ 20,00" />
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tempo de Entrega</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="min-delivery">Mínimo (minutos) *</Label>
                    <Input id="min-delivery" type="number" defaultValue="30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-delivery">Máximo (minutos) *</Label>
                    <Input id="max-delivery" type="number" defaultValue="60" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Tempo de Retirada</h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="min-pickup">Mínimo (minutos) *</Label>
                    <Input id="min-pickup" type="number" defaultValue="20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-pickup">Máximo (minutos) *</Label>
                    <Input id="max-pickup" type="number" defaultValue="40" />
                  </div>
                </div>
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <Clock className="h-4 w-4" />
              Salvar Configurações
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="horarios">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-orange-500" />
              <div>
                <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
                <p className="text-sm text-muted-foreground">Configure quando seu estabelecimento está aberto</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="timezone">Fuso horário</Label>
                <Input id="timezone" defaultValue="América/São Paulo" disabled />
              </div>

              <div className="space-y-3">
                <Label>Modo de funcionamento</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="mode" id="always" className="h-4 w-4" />
                    <Label htmlFor="always" className="flex flex-col">
                      <span className="font-medium">Sempre disponível</span>
                      <span className="text-sm text-muted-foreground">Seu estabelecimento sempre aparecerá aberto</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" name="mode" id="schedule" defaultChecked className="h-4 w-4" />
                    <Label htmlFor="schedule" className="flex flex-col">
                      <span className="font-medium">Disponível em dias e horários específicos</span>
                      <span className="text-sm text-muted-foreground">Escolha quando seu estabelecimento aparecerá aberto</span>
                    </Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Dias da semana</h4>
                <div className="space-y-4">
                  {['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map((day) => (
                    <div key={day} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <Label className="font-medium">{day}</Label>
                        <Button variant="outline" size="sm">Adicionar horário</Button>
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                        <Input type="time" defaultValue="09:00" />
                        <Input type="time" defaultValue="17:00" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <Clock className="h-4 w-4" />
              Salvar Horários
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="pagamento">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold">Formas de Pagamento</h3>
                <p className="text-sm text-muted-foreground">Configure as opções de pagamento aceitas</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Pagamento Online</h4>
                <p className="text-sm text-muted-foreground mb-3">Conta bancária para recebimento das vendas</p>
                <Input placeholder="Configurar conta bancária" />
              </div>

              <div>
                <h4 className="font-semibold mb-3">Pagamento Offline</h4>
                <p className="text-sm text-muted-foreground mb-3">Selecione as formas de pagamento permitidas no momento da entrega ou no caixa.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="cash" defaultChecked className="h-4 w-4" />
                    <Label htmlFor="cash">Dinheiro</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="card" defaultChecked className="h-4 w-4" />
                    <Label htmlFor="card">Cartão</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Com quais bandeiras você trabalha?</h4>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Cartão de Débito e Crédito</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mastercard-credit" defaultChecked className="h-4 w-4" />
                      <Label htmlFor="mastercard-credit">Mastercard Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="visa-credit" defaultChecked className="h-4 w-4" />
                      <Label htmlFor="visa-credit">Visa Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="mastercard-debit" className="h-4 w-4" />
                      <Label htmlFor="mastercard-debit">Mastercard Débito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="visa-debit" className="h-4 w-4" />
                      <Label htmlFor="visa-debit">Visa Débito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="elo-credit" className="h-4 w-4" />
                      <Label htmlFor="elo-credit">Elo Crédito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="elo-debit" className="h-4 w-4" />
                      <Label htmlFor="elo-debit">Elo Débito</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <p className="text-sm font-medium text-muted-foreground">Vale Refeição e Alimentação</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="alelo-meal" className="h-4 w-4" />
                      <Label htmlFor="alelo-meal">Alelo refeição</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="ticket-meal" className="h-4 w-4" />
                      <Label htmlFor="ticket-meal">Ticket refeição</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="sodexo-meal" className="h-4 w-4" />
                      <Label htmlFor="sodexo-meal">Sodexo refeição</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="vr-meal" className="h-4 w-4" />
                      <Label htmlFor="vr-meal">VR refeição</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <CreditCard className="h-4 w-4" />
              Salvar Configurações
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="impressora">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Printer className="h-6 w-6 text-purple-500" />
              <div>
                <h3 className="text-lg font-semibold">Impressora</h3>
                <p className="text-sm text-muted-foreground">Configure a impressão de pedidos</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg text-center">
                <Printer className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Baixe o aplicativo para configurar sua impressora</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A instalação e conexão da impressora pode ser realizada pelo aplicativo no Android.
                </p>
                <Button>Baixar Aplicativo</Button>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Configurações de Impressão</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="auto-print" className="h-4 w-4 mt-1" />
                    <Label htmlFor="auto-print" className="flex flex-col">
                      <span className="font-medium">Permitir impressão automática dos pedidos feitos pelo Garçom</span>
                      <span className="text-sm text-muted-foreground">Ao ativar, o sistema imprime automaticamente cada pedido feito pelo garçom no aplicativo.</span>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="auto-close" className="h-4 w-4 mt-1" />
                    <Label htmlFor="auto-close" className="flex flex-col">
                      <span className="font-medium">Permitir imprimir automaticamente conferência ao fechar mesa ou comanda</span>
                      <span className="text-sm text-muted-foreground">Permitir que conferência de fechamento seja impressa de forma automática.</span>
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="include-table" className="h-4 w-4 mt-1" />
                    <Label htmlFor="include-table">Incluir informações de mesa ou comanda em pedidos de consumo local</Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="group-items" className="h-4 w-4 mt-1" />
                    <Label htmlFor="group-items">Agrupar os itens do pedido na impressão da comanda e economizar papel</Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="addon-names" className="h-4 w-4 mt-1" />
                    <Label htmlFor="addon-names">Adicionar o nome dos grupos de adicionais na impressão</Label>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Personalize o cabeçalho e o rodapé da impressão de pedidos</h4>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="header">Cabeçalho</Label>
                    <Input id="header" placeholder="Para entrega" maxLength={40} />
                    <p className="text-xs text-muted-foreground">0/40</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="footer">Rodapé</Label>
                    <Input id="footer" defaultValue="Agradecemos o seu pedido" maxLength={40} />
                    <p className="text-xs text-muted-foreground">0/40</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Exibir notificação chamativa na comanda quando for:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notify-delivery" className="h-4 w-4" />
                    <Label htmlFor="notify-delivery">Para entrega</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notify-pickup" className="h-4 w-4" />
                    <Label htmlFor="notify-pickup">Retirada no local</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notify-dine" className="h-4 w-4" />
                    <Label htmlFor="notify-dine">Consumo no local</Label>
                  </div>
                </div>
              </div>
            </div>

            <Button className="mt-6 gap-2">
              <Printer className="h-4 w-4" />
              Salvar Configurações
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Personalização Visual</h3>
                <p className="text-sm text-muted-foreground">Configure a aparência do sistema</p>
              </div>
            </div>
            <ThemeSelector />
          </Card>
        </TabsContent>

        <TabsContent value="audios">
          <Card className="p-6">
            <AudioManager />
          </Card>
        </TabsContent>

        <TabsContent value="integracao">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-lg font-semibold">Integrações de Pagamento</h3>
                <p className="text-sm text-muted-foreground">Configure APIs de pagamento</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  PagHiper
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Integração com PagHiper para boletos e PIX
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="paghiper-api-key">API Key</Label>
                    <Input
                      id="paghiper-api-key"
                      type="password"
                      placeholder="Cole sua chave API do PagHiper"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paghiper-token">Token</Label>
                    <Input
                      id="paghiper-token"
                      type="password"
                      placeholder="Cole seu token do PagHiper"
                    />
                  </div>
                  <Button className="gap-2">
                    <DollarSign className="h-4 w-4" />
                    Salvar Configuração PagHiper
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">WhatsApp API</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Configure a API do WhatsApp para notificações
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-api-key">API Key WhatsApp</Label>
                    <Input
                      id="whatsapp-api-key"
                      type="password"
                      placeholder="Cole sua chave API do WhatsApp"
                    />
                  </div>
                  <Button className="gap-2">
                    <Settings className="h-4 w-4" />
                    Salvar Configuração WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
