
import { useState } from "react";
import { Calculator, Shield, Users, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

  const services = [
    {
      icon: Calculator,
      title: "Préstamos Personales",
      description: "Desde $5,000 hasta $100,000 con tasas competitivas",
      rate: "5.99% - 24.99% APR",
      features: ["Aprobación en 24 horas", "Sin penalidades por pago anticipado", "Términos flexibles"]
    },
    {
      icon: Shield,
      title: "Inversiones",
      description: "Portfolio diversificado para maximizar tu crecimiento",
      rate: "Comisión 0.25% - 1.50%",
      features: ["Gestión profesional", "Diversificación automática", "Rebalanceo trimestral"]
    },
    {
      icon: Users,
      title: "Seguros",
      description: "Protege lo que más importa con cobertura integral",
      rate: "Desde $25/mes",
      features: ["Cobertura 24/7", "Claims rápidos", "Múltiples opciones"]
    }
  ];

  const testimonials = [
    {
      name: "María García",
      role: "Empresaria",
      content: "Obtuve mi préstamo comercial en 48 horas. El proceso fue transparente y el equipo muy profesional.",
      amount: "$75,000 préstamo comercial"
    },
    {
      name: "Carlos Mendoza",
      role: "Ingeniero",
      content: "Mi portfolio de inversiones ha crecido 12% este año. La gestión automática es excelente.",
      amount: "$150,000 en inversiones"
    },
    {
      name: "Ana Rodríguez",
      role: "Doctora",
      content: "El seguro de vida me da tranquilidad total. El proceso de solicitud fue muy simple.",
      amount: "$500,000 cobertura"
    }
  ];

  const certifications = [
    { name: "FDIC Insured", description: "Depósitos asegurados hasta $250,000" },
    { name: "256-bit SSL", description: "Encriptación de grado militar" },
    { name: "SOC 2 Certified", description: "Auditoría de seguridad independiente" },
    { name: "Licensed NMLS", description: "Licencia #123456789" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              FinSecure
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#rates" className="text-gray-700 hover:text-blue-600 transition-colors">Tasas</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Nosotros</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            Aplicar Ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 bg-clip-text text-transparent">
            Tu Futuro Financiero
            <br />
            Comienza Aquí
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Préstamos, inversiones y seguros diseñados para impulsar tus metas. 
            Transparencia total, tasas competitivas y servicio excepcional.
          </p>
          
          {/* Quick Calculator */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Calculadora de Préstamo</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label htmlFor="amount">Monto del Préstamo</Label>
                <Input
                  id="amount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="term">Plazo (años)</Label>
                <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 años</SelectItem>
                    <SelectItem value="20">20 años</SelectItem>
                    <SelectItem value="30">30 años</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rate">Tasa de Interés (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-600 mb-2">Pago Mensual Estimado</p>
              <p className="text-4xl font-bold text-blue-600">${calculateMonthlyPayment()}</p>
              <Button className="mt-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Obtener Pre-Aprobación
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones financieras completas para individuos y empresas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader className="text-center">
                  <service.icon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-sm px-3 py-1">
                      {service.rate}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <ShieldCheck className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rates & Fees Section */}
      <section id="rates" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Tasas y Comisiones Transparentes</h2>
            <p className="text-xl text-gray-600">Sin sorpresas, sin costos ocultos</p>
          </div>

          <Tabs defaultValue="loans" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="loans">Préstamos</TabsTrigger>
              <TabsTrigger value="investments">Inversiones</TabsTrigger>
              <TabsTrigger value="insurance">Seguros</TabsTrigger>
            </TabsList>
            
            <TabsContent value="loans" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Tasas de Préstamos Actuales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Préstamo Personal (36 meses)</span>
                      <span className="font-semibold text-blue-600">5.99% - 24.99% APR</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Préstamo Auto (60 meses)</span>
                      <span className="font-semibold text-blue-600">3.49% - 18.99% APR</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Préstamo Hipotecario (30 años)</span>
                      <span className="font-semibold text-blue-600">6.25% - 8.50% APR</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      *Las tasas varían según el perfil crediticio. Sin penalidades por pago anticipado.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="investments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Comisiones de Inversión</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Gestión de Portfolio Básico</span>
                      <span className="font-semibold text-green-600">0.25%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Gestión Premium</span>
                      <span className="font-semibold text-green-600">0.75%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Gestión VIP</span>
                      <span className="font-semibold text-green-600">1.50%</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      *Sin comisiones de entrada o salida. Rebalanceo automático incluido.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insurance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Primas de Seguros</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Seguro de Vida ($100k cobertura)</span>
                      <span className="font-semibold text-purple-600">Desde $25/mes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Seguro de Salud Individual</span>
                      <span className="font-semibold text-purple-600">Desde $89/mes</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Seguro de Auto</span>
                      <span className="font-semibold text-purple-600">Desde $45/mes</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      *Precios basados en perfil estándar. Cotización personalizada disponible.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Seguridad y Confianza</h2>
          <p className="text-xl mb-12 opacity-90">Tu información y dinero están protegidos con los más altos estándares</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm opacity-80">{cert.description}</p>
              </div>
            ))}
          </div>
          
          <Separator className="bg-white/20 my-12" />
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-green-400">$2.5B+</h4>
              <p className="opacity-80">En préstamos procesados</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-400">50,000+</h4>
              <p className="opacity-80">Clientes satisfechos</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-green-400">15 años</h4>
              <p className="opacity-80">De experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Casos de Éxito Reales</h2>
            <p className="text-xl text-gray-600">Descubre cómo hemos ayudado a nuestros clientes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {testimonial.amount}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Proceso Simple en 3 Pasos</h2>
            <p className="text-xl text-gray-600">De la aplicación a la aprobación en minutos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-20 w-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Aplica Online</h3>
              <p className="text-gray-600">Completa tu aplicación en 5 minutos. Proceso 100% digital y seguro.</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Revisión Instantánea</h3>
              <p className="text-gray-600">Nuestro sistema evalúa tu solicitud y te da una respuesta en minutos.</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Recibe Fondos</h3>
              <p className="text-gray-600">Una vez aprobado, recibe tus fondos en tu cuenta en 24 horas.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3">
              Comenzar Aplicación
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">FinSecure</span>
              </div>
              <p className="text-gray-400 mb-4">
                Tu partner confiable en servicios financieros. Transparencia, seguridad y excelencia desde 2009.
              </p>
              <div className="text-sm text-gray-500">
                <p>NMLS ID: #123456789</p>
                <p>Equal Housing Lender</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Préstamos Personales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Préstamos Hipotecarios</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inversiones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seguros</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Calculadoras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Educación Financiera</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 1-800-FIN-SECURE</li>
                <li>✉️ info@finsecure.com</li>
                <li>📍 123 Financial St, NYC</li>
                <li>🕒 Lun-Vie 9AM-6PM EST</li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-gray-700 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FinSecure. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Regulaciones</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`${isChatOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 mb-4`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold">Asesor Financiero</span>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <div className="p-4 h-64 bg-gray-50 overflow-y-auto">
            <div className="bg-white rounded-lg p-3 mb-3 shadow-sm">
              <p className="text-sm text-gray-700">¡Hola! Soy Ana, tu asesora financiera. ¿En qué puedo ayudarte hoy?</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3 mb-3 ml-8">
              <p className="text-sm text-gray-700">Hola, me interesa un préstamo personal</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-700">Perfecto! Te puedo ayudar con eso. ¿Cuál sería el monto que necesitas?</p>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input placeholder="Escribe tu mensaje..." className="flex-1 text-sm" />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Enviar
              </Button>
            </div>
          </div>
        </div>
        
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full h-14 w-14 shadow-2xl"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
