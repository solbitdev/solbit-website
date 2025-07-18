import { useState, useEffect } from "react";
import { Moon, Sun, Rocket, Calendar, Target, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const ComingSoon = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Header with dark mode toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              SolBit
            </span>
          </div>

          {/* <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Rocket className="h-20 w-20 text-blue-600 mx-auto mb-6" />
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SolBit
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4">
                Próximamente
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Estamos desarrollando soluciones tecnológicas simples,
                accesibles y automatizadas para PyMEs y emprendedores.
              </p>
            </div>

            {/* Key Features Preview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Simples
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Soluciones fáciles de usar y entender
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Accesibles
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Precios justos para todos los negocios
                </p>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <Calendar className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Automatizadas
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Procesos que funcionan sin intervención
                </p>
              </div>
            </div>

            {/* NAVES Badge */}
            <div className="mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full px-6 py-3 border border-blue-200 dark:border-blue-700">
                <Rocket className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 dark:text-blue-300 font-medium">
                  Participantes de NAVES Argentina 2025
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <section className="py-16 px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Mantente informado
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sé el primero en conocer nuestro lanzamiento y novedades
              </p>
            </div>
            <Newsletter />
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComingSoon;
