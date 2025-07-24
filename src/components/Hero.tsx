import { ArrowRight, Rocket, Code, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.querySelector("#contacto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Bienvenido a{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              SolBit
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Desarrollamos soluciones tecnológicas{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              simples
            </span>
            ,
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              {" "}
              accesibles
            </span>{" "}
            y
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {" "}
              automatizadas
            </span>{" "}
            para PyMEs y emprendedores
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            {/* <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button> */}

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#sobre-nosotros")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full font-semibold text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Conocer Más
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Tecnología Simple
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Soluciones intuitivas que realmente funcionan
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Innovación Accesible
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Precios justos para todos los emprendedores
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Rocket className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Automatización
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimiza tu tiempo y aumenta tu productividad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
