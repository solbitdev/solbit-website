
import { Target, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestra <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Misión</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SolBit nace con la visión de democratizar la tecnología, haciendo que las herramientas digitales 
            más avanzadas sean accesibles para PyMEs y emprendedores que buscan crecer y competir en el mercado actual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Enfoque en Resultados</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cada solución que desarrollamos está diseñada para generar un impacto real y medible en tu negocio.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Comunidad Emprendedora</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creemos en construir una comunidad donde emprendedores puedan crecer juntos y compartir experiencias.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="bg-indigo-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pasión por la Innovación</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nos mueve la pasión por crear tecnología que realmente mejore la vida de las personas y sus negocios.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Por qué SolBit?</h3>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Estamos participando en NAVES Argentina 2025, el programa de aceleración más prestigioso del país, 
            lo que nos permite acceder a mentorías de clase mundial y validar nuestras ideas con expertos de la industria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold mb-2">🚀 Startup en Crecimiento</h4>
              <p className="opacity-90">Formamos parte del ecosistema emprendedor más dinámico de Argentina</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🎯 Enfoque Humano</h4>
              <p className="opacity-90">Entendemos los desafíos reales porque los hemos vivido en primera persona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
