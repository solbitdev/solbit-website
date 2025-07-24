import { Heart, Linkedin, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              SolBit
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Desarrollamos soluciones tecnológicas simples, accesibles y
              automatizadas para PyMEs y emprendedores.
            </p>
            {/* <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <a
                href="https://instagram.com/solbitdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#inicio")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#sobre-nosotros")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#progreso")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Progreso
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#fundador")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Fundador
                </button>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span className="text-sm">info@solbit.com.ar</span>
              </div>
              {/* <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span className="text-sm">+54 9 11 6459-9095</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* NAVES Badge */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <a href="https://www.macro.com.ar/naves" target="_blank">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2 mr-3">
                  <div className="text-white font-bold text-sm">NAVES</div>
                </div>
                <span className="text-gray-300 text-sm">
                  Participantes del programa NAVES Argentina 2025
                </span>
              </div>
            </a>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} SolBit. Todos los derechos reservados.
              </p>
              {/* <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end">
                Hecho con <Heart className="h-3 w-3 mx-1 text-red-500" /> en
                Argentina
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
