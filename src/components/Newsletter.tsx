
import { useState } from 'react';
import { Send, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresá tu email.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate newsletter subscription
    toast({
      title: "¡Suscripción exitosa!",
      description: "Te mantendremos al tanto de todas las novedades de SolBit.",
    });
    
    // Reset form
    setEmail('');
  };

  return (
    <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <Bell className="h-6 w-6 mr-3 text-purple-600" />
          Newsletter
        </CardTitle>
        <CardDescription>
          Mantente al día con todas las novedades de SolBit y nuestro progreso en NAVES Argentina 2025
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            <Send className="h-4 w-4 mr-2" />
            Suscribirse
          </Button>
        </form>

        <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué vas a recibir?</h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>• Actualizaciones sobre el desarrollo de SolBit</li>
            <li>• Novedades del programa NAVES Argentina</li>
            <li>• Tips y consejos para emprendedores</li>
            <li>• Acceso anticipado a nuevas funcionalidades</li>
          </ul>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            Enviamos emails máximo 2 veces por semana. Podés desuscribirte cuando quieras.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Newsletter;
