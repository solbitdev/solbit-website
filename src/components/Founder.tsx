import { Github, Linkedin, Mail, Code, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Founder = () => {
  return (
    <section
      id="fundador"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Conocé al{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fundador
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image and Info */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
              <div className="relative w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-600 dark:text-gray-400">
                    JG
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Juan García
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              Desarrollador & Fundador de SolBit
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <Button variant="outline" size="sm" className="rounded-full">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Founder Story */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Experiencia Técnica
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Con más de 5 años de experiencia en desarrollo de software,
                  Juan se especializa en crear soluciones tecnológicas que
                  realmente resuelven problemas del mundo real.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Pasión por Ayudar
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Su motivación principal es democratizar el acceso a la
                  tecnología, haciendo que las herramientas digitales avanzadas
                  sean accesibles para todos los emprendedores.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-indigo-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Visión Clara
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Cree firmemente que la tecnología debe ser simple, accesible y
                  que genere un impacto positivo real en la vida de las personas
                  y sus negocios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
              "Mi objetivo no es solo crear tecnología, sino construir
              herramientas que realmente empoderen a emprendedores y PyMEs para
              alcanzar su máximo potencial."
            </blockquote>
            <cite className="text-lg font-semibold">
              — Juan García, Fundador de SolBit
            </cite>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Años de Experiencia
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Proyectos Completados
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
              1
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Startup en NAVES
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              ∞
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Pasión por Innovar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
