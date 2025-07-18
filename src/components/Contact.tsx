
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contacto">
      <Card className="border-0 bg-white dark:bg-gray-800 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
            <Mail className="h-6 w-6 mr-3 text-blue-600" />
            Contactanos
          </CardTitle>
          <CardDescription>
            ¿Tenés una pregunta o querés saber más sobre SolBit? ¡Nos encantaría escucharte!
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Asunto
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿De qué querés hablar?"
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Contanos más sobre tu consulta..."
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Enviar Mensaje
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Otras formas de contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-600" />
                <span>juan@solbit.com.ar</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-600" />
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-600" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
