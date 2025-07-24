import { Calendar, CheckCircle, Clock, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Timeline = () => {
  const timelineItems = [
    {
      date: "Junio 2025",
      title: "Inicio del Proyecto",
      description:
        "Conceptualización de SolBit y aplicación a NAVES Argentina 2025",
      status: "completed",
      icon: Rocket,
    },
    {
      date: "Julio 2025",
      title: "Aceptación en NAVES",
      description:
        "Seleccionados para participar en el programa de aceleración más prestigioso de Argentina",
      status: "in-progress",
      icon: Clock,
    },
    {
      date: "Septiembre 2025",
      title: "Investigación de Mercado",
      description:
        "Análisis profundo de necesidades de PyMEs y validación de hipótesis iniciales",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "Octubre 2025",
      title: "Desarrollo del MVP",
      description:
        "Construcción del producto mínimo viable con las funcionalidades core",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "Noviembre 2025",
      title: "Primeras Validaciones",
      description: "Testeo con usuarios beta y primeros feedbacks del mercado",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "Diciembre 2025",
      title: "Iteración y Mejoras",
      description: "Refinamiento del producto basado en feedback de usuarios",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "Enero 2026",
      title: "Lanzamiento Beta",
      description:
        "Apertura de la plataforma para early adopters seleccionados",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "Marzo 2026",
      title: "Lanzamiento Oficial",
      description:
        "Disponibilidad completa de la plataforma para el público general",
      status: "upcoming",
      icon: Calendar,
    },
    {
      date: "Junio 2026",
      title: "Expansión",
      description:
        "Escalamiento y nuevas funcionalidades basadas en demanda del mercado",
      status: "upcoming",
      icon: Calendar,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500 animate-pulse";
      case "upcoming":
        return "bg-gray-300 dark:bg-gray-600";
      default:
        return "bg-gray-300";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-500 hover:bg-green-600">
            Completado
          </Badge>
        );
      case "in-progress":
        return (
          <Badge variant="default" className="bg-blue-500 hover:bg-blue-600">
            En Progreso
          </Badge>
        );
      case "upcoming":
        return <Badge variant="outline">Próximamente</Badge>;
      default:
        return null;
    }
  };

  return (
    <section id="progreso" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestro{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Progreso
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Seguí el desarrollo de SolBit desde sus inicios hasta el lanzamiento
            oficial
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 ${getStatusColor(
                      item.status
                    )} transition-all duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        {getStatusBadge(item.status)}
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {item.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 Participantes de NAVES Argentina 2025
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              NAVES es el programa de aceleración más prestigioso de Argentina,
              que nos brinda acceso a mentores de clase mundial, inversores y
              una red de contactos invaluable para el crecimiento de SolBit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
