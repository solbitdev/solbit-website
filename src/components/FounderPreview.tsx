import {
  Github,
  Linkedin,
  Mail,
  Code,
  Heart,
  Target,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FounderPreview = () => {
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
              <div className="relative w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-600 dark:text-gray-400">
                    <img className="rounded-full" src="avatar.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Juan García
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-6">
              Desarrollador & Fundador de SolBit
            </p>

            <Button asChild className="mb-6">
              <Link to="/fundador">
                Conocer más sobre Juan
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Brief Description */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-blue-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    10+ Años de Experiencia
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Especializado en crear soluciones tecnológicas que realmente
                  resuelven problemas del mundo real.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Visión Clara
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Democratizar el acceso a la tecnología para emprendedores y
                  PyMEs argentinas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderPreview;
