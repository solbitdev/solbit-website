import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Heart,
  Target,
  Award,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FounderPage = () => {
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

  const skills = [
    "React & TypeScript",
    "Node.js",
    "Python",
    "Cloud Computing (AWS, GCP)",
    "Bases de Datos",
    "API Development",
    "DevOps",
    "Product Management",
    "Lean Startup",
    "Agile Methodologies",
  ];

  const achievements = [
    {
      icon: Award,
      title: "Seleccionado para NAVES Argentina 2025",
      description:
        "Uno de los 100+ proyectos seleccionados entre miles de aplicaciones para el programa de aceleración más prestigioso del país.",
      date: "2024",
    },
    {
      icon: Code,
      title: "50+ Proyectos Completados",
      description:
        "Desde aplicaciones web hasta sistemas complejos, con un historial probado de entrega exitosa.",
      date: "2019-2024",
    },
    {
      icon: Users,
      title: "Líder de Equipos Técnicos",
      description:
        "Experiencia liderando equipos de desarrollo en startups y empresas de tecnología.",
      date: "2021-2024",
    },
    {
      icon: TrendingUp,
      title: "Mentor en Comunidades Tech",
      description:
        "Activo mentor en comunidades de desarrolladores y emprendedores tecnológicos en Argentina.",
      date: "2022-Presente",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Impacto Social",
      description:
        "Creo que la tecnología debe servir para mejorar la vida de las personas y democratizar oportunidades.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Accesible",
      description:
        "Las mejores soluciones son aquellas que cualquier persona puede entender y usar sin complicaciones.",
    },
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description:
        "Cada línea de código debe resolver un problema real y generar valor tangible para los usuarios.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image and Basic Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30"></div>
                  <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                      <img className="rounded-full" src="avatar.jpeg" alt="" />
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Juan García
                </h1>
                <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                  Desarrollador & Fundador de SolBit
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Desarrollador Full-Stack | Emprendedor
                </p>

                <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                  <a
                    href="https://www.linkedin.com/in/fullsnacker/"
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/fullsnacker" target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href="mailto:jmgarcia@solbit.com.ar" target="_blank">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Contacto
                    </Button>
                  </a>
                </div>
              </div>

              {/* Introduction */}
              <div className="space-y-6">
                <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Mi Historia
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      Comenzé mi carrera como desarrollador hace más de 10 años,
                      trabajando en proyectos que van desde clientes personales
                      hasta empresas consolidadas. Lo que siempre me ha motivado
                      es la capacidad de la tecnología para resolver problemas
                      reales.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Después de años viendo cómo las PyMEs argentinas luchan
                      por acceder a herramientas tecnológicas efectivas y
                      asequibles, decidí crear SolBit: una plataforma que
                      democratiza el acceso a soluciones de automatización y
                      gestión empresarial.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Mis{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Valores
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={value.title}
                    className="border-0 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Logros y{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Experiencia
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 bg-white dark:bg-gray-800"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h3>
                            <Badge variant="outline">{achievement.date}</Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section> */}

        {/* Skills Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Habilidades{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Técnicas
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic leading-relaxed">
                "Mi objetivo no es solo crear tecnología, sino construir
                herramientas que realmente empoderen a emprendedores y PyMEs
                para alcanzar su máximo potencial. Cada desafío es una
                oportunidad para innovar y generar impacto positivo."
              </blockquote>
              <cite className="text-xl font-semibold">
                — Juan García, Fundador de SolBit
              </cite>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Años de Experiencia
                </div>
              </div>
              {/* <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Proyectos Completados
                </div>
              </div> */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  1
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Startup en NAVES
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                  ∞
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  Pasión por Innovar
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FounderPage;
