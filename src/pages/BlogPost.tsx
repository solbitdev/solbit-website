
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Heart, MessageCircle, Rocket, Target, Lightbulb, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mock data - en una aplicación real, esto vendría de una API o CMS
  const blogPosts = {
    1: {
      id: 1,
      title: 'El Viaje de SolBit: De Idea a Realidad',
      excerpt: 'Descubrí cómo nació SolBit y los primeros pasos en nuestro camino emprendedor dentro del programa NAVES Argentina 2025.',
      content: `
        <h2>El Origen de la Idea</h2>
        <p>Todo comenzó en julio de 2024, cuando me di cuenta de que las pequeñas y medianas empresas argentinas estaban luchando por mantenerse competitivas en un mundo cada vez más digitalizado. Veía constantemente cómo emprendedores brillantes tenían ideas fantásticas, pero carecían de las herramientas tecnológicas necesarias para llevarlas al siguiente nivel.</p>
        
        <h2>El Problema que Identificamos</h2>
        <p>Las soluciones existentes en el mercado eran demasiado complejas, costosas o diseñadas pensando en grandes corporaciones. Las PyMEs necesitaban algo diferente: herramientas simples, accesibles y que realmente resolvieran sus problemas más urgentes.</p>
        
        <blockquote>"No se trataba solo de crear otro software más, sino de democratizar el acceso a la tecnología de automatización empresarial."</blockquote>
        
        <h2>Los Primeros Pasos</h2>
        <p>Comenzamos con una investigación exhaustiva del mercado argentino. Hablamos con más de 100 emprendedores y dueños de PyMEs para entender sus dolor points más críticos:</p>
        <ul>
          <li>Gestión manual de inventarios y ventas</li>
          <li>Falta de automatización en procesos repetitivos</li>
          <li>Dificultad para acceder a herramientas de análisis de datos</li>
          <li>Sistemas desintegrados que no se comunican entre sí</li>
        </ul>
        
        <h2>El Desarrollo del MVP</h2>
        <p>Con esta información, comenzamos a desarrollar nuestro Producto Mínimo Viable (MVP). Nos enfocamos en tres pilares fundamentales:</p>
        
        <h3>1. Simplicidad</h3>
        <p>Cada funcionalidad debe ser intuitiva. Si necesitas un manual para usarla, no estamos cumpliendo nuestro objetivo.</p>
        
        <h3>2. Accesibilidad</h3>
        <p>Tanto en términos de precio como de usabilidad. Las PyMEs no pueden permitirse soluciones enterprise, necesitan algo que se ajuste a su realidad.</p>
        
        <h3>3. Efectividad</h3>
        <p>No agregamos funcionalidades "porque se ven bien". Cada feature debe resolver un problema real y generar valor tangible.</p>
        
        <h2>El Camino hacia NAVES</h2>
        <p>Aplicar a NAVES Argentina 2025 fue un momento decisivo. Entre miles de aplicaciones, ser seleccionados validó no solo nuestra idea, sino también nuestra ejecución y visión de futuro.</p>
        
        <p>Este programa nos brinda acceso a mentores de clase mundial, una red de contactos invaluable y, más importante aún, la oportunidad de acelerar nuestro crecimiento de manera sostenible.</p>
        
        <h2>Lo que Viene</h2>
        <p>Estamos en un momento emocionante. Con el respaldo de NAVES, planificamos:</p>
        <ul>
          <li>Finalizar el desarrollo de nuestra plataforma principal</li>
          <li>Lanzar un programa piloto con 50 PyMEs argentinas</li>
          <li>Expandir nuestro equipo con talento local</li>
          <li>Establecer partnerships estratégicos</li>
        </ul>
        
        <p>Este es solo el comienzo de un viaje que esperamos transforme la manera en que las PyMEs argentinas acceden y utilizan la tecnología.</p>
      `,
      date: '15 Enero 2025',
      readTime: '5 min',
      category: 'Startup',
      icon: Rocket,
      tags: ['emprendimiento', 'startup', 'tecnología', 'NAVES'],
      author: 'Juan García'
    },
    2: {
      id: 2,
      title: 'NAVES Argentina 2025: Una Oportunidad Única',
      excerpt: 'Nuestra experiencia siendo seleccionados para el programa de aceleración más prestigioso del país y qué significa para SolBit.',
      content: `
        <h2>¿Qué es NAVES Argentina?</h2>
        <p>NAVES es el programa de aceleración de startups más prestigioso de Argentina, desarrollado en conjunto entre el sector público y privado para impulsar el ecosistema emprendedor nacional. Cada año, selecciona a los proyectos más prometedores del país para brindarles mentorship, financiamiento y acceso a una red única de contactos.</p>
        
        <h2>El Proceso de Selección</h2>
        <p>El proceso fue intenso y desafiante. Comenzó con una aplicación detallada donde tuvimos que demostrar:</p>
        <ul>
          <li>La viabilidad técnica y comercial de SolBit</li>
          <li>El potencial de mercado y escalabilidad</li>
          <li>Nuestro modelo de negocio y proyecciones financieras</li>
          <li>El impacto social y económico que podríamos generar</li>
        </ul>
        
        <blockquote>"De más de 3,000 aplicaciones, solo 100 proyectos fueron seleccionados. Estar entre ellos es un honor y una responsabilidad."</blockquote>
        
        <h2>Lo que NAVES Significa para SolBit</h2>
        
        <h3>Validación del Mercado</h3>
        <p>Ser seleccionados por un panel de expertos valida nuestra hipótesis de que existe una necesidad real en el mercado argentino para soluciones como SolBit.</p>
        
        <h3>Acceso a Mentores de Clase Mundial</h3>
        <p>El programa nos conecta con entrepreneurs exitosos, ejecutivos de grandes corporaciones y expertos en diversas áreas que pueden acelerar nuestro aprendizaje y crecimiento.</p>
        
        <h3>Red de Contactos</h3>
        <p>Formar parte de la comunidad NAVES significa acceso a una red de founders, inversores y partners potenciales que sería muy difícil construir de otra manera.</p>
        
        <h3>Financiamiento y Recursos</h3>
        <p>El programa incluye financiamiento inicial y acceso a recursos técnicos y humanos que nos permiten enfocarnos en lo que realmente importa: construir un gran producto.</p>
        
        <h2>Nuestros Objetivos en NAVES</h2>
        
        <h3>Corto Plazo (3-6 meses)</h3>
        <ul>
          <li>Finalizar el desarrollo de nuestro MVP</li>
          <li>Validar product-market fit con 20 PyMEs piloto</li>
          <li>Establecer nuestro modelo de pricing definitivo</li>
          <li>Construir un equipo de 5 personas</li>
        </ul>
        
        <h3>Mediano Plazo (6-12 meses)</h3>
        <ul>
          <li>Lanzar oficialmente SolBit al mercado argentino</li>
          <li>Conseguir nuestros primeros 500 usuarios activos</li>
          <li>Establecer partnerships con cámaras empresariales</li>
          <li>Preparar una ronda de inversión Serie A</li>
        </ul>
        
        <h2>El Ecosistema Emprendedor Argentino</h2>
        <p>NAVES no es solo un programa, es un catalizador para todo el ecosistema emprendedor argentino. Al participar, no solo estamos acelerando SolBit, sino también contribuyendo al desarrollo de un ambiente más favorable para la innovación en el país.</p>
        
        <h2>Responsabilidad y Compromiso</h2>
        <p>Con esta oportunidad viene una gran responsabilidad. No solo hacia nosotros mismos y nuestros futuros usuarios, sino hacia todo el ecosistema que está invirtiendo en nosotros.</p>
        
        <p>Estamos comprometidos a demostrar que las startups argentinas pueden competir a nivel global, que podemos crear soluciones tecnológicas de clase mundial desde Argentina y para el mundo.</p>
        
        <h2>Siguiendo el Viaje</h2>
        <p>Este blog será nuestro diario durante esta aventura. Compartiremos nuestros aprendizajes, desafíos y victorias para que otros emprendedores puedan beneficiarse de nuestra experiencia.</p>
        
        <p>El viaje recién comienza, y no podríamos estar más emocionados por lo que viene.</p>
      `,
      date: '10 Enero 2025',
      readTime: '7 min',
      category: 'Programa',
      icon: Target,
      tags: ['NAVES', 'aceleración', 'inversión', 'startup'],
      author: 'Juan García'
    }
    // Podríamos agregar más posts aquí...
  };

  // Convert string id to number and safely access the post
  const postId = id ? parseInt(id, 10) : null;
  const post = postId && blogPosts[postId as keyof typeof blogPosts] ? blogPosts[postId as keyof typeof blogPosts] : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Enlace copiado",
        description: "El enlace del post ha sido copiado al portapapeles.",
      });
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post no encontrado</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">El post que buscas no existe o ha sido removido.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Blog
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = post.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <Badge variant="outline" className="text-sm">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
                <div>Por {post.author}</div>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:text-blue-900 dark:prose-blockquote:text-blue-100">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Me gusta
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comentar
                </Button>
              </div>
              
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </footer>

          {/* Related Posts */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Posts Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(blogPosts)
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => {
                  const RelatedIcon = relatedPost.icon;
                  return (
                    <Card key={relatedPost.id} className="border-0 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                            <RelatedIcon className="h-4 w-4 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {relatedPost.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <Link to={`/blog/${relatedPost.id}`}>
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {relatedPost.excerpt.substring(0, 100)}...
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
