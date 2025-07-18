
import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Rocket, Lightbulb, Target, TrendingUp, Users, Zap, Shield, Globe, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const blogPosts = [
    {
      id: 1,
      title: 'El Viaje de SolBit: De Idea a Realidad',
      excerpt: 'Descubrí cómo nació SolBit y los primeros pasos en nuestro camino emprendedor dentro del programa NAVES Argentina 2025.',
      content: 'La historia completa de cómo una simple idea se convirtió en una startup con potencial de transformar el ecosistema tecnológico argentino...',
      date: '15 Enero 2025',
      readTime: '5 min',
      category: 'Startup',
      icon: Rocket,
      featured: true,
      tags: ['emprendimiento', 'startup', 'tecnología']
    },
    {
      id: 2,
      title: 'NAVES Argentina 2025: Una Oportunidad Única',
      excerpt: 'Nuestra experiencia siendo seleccionados para el programa de aceleración más prestigioso del país y qué significa para SolBit.',
      content: 'Ser parte de NAVES Argentina representa una oportunidad increíble para acelerar el crecimiento de SolBit...',
      date: '10 Enero 2025',
      readTime: '7 min',
      category: 'Programa',
      icon: Target,
      featured: false,
      tags: ['NAVES', 'aceleración', 'inversión']
    },
    {
      id: 3,
      title: 'Tecnología Simple: Menos es Más',
      excerpt: 'Por qué creemos que la simplicidad es la clave para crear herramientas tecnológicas efectivas que realmente ayuden a las PyMEs.',
      content: 'En un mundo saturado de soluciones complejas, nosotros apostamos por la simplicidad...',
      date: '5 Enero 2025',
      readTime: '4 min',
      category: 'Filosofía',
      icon: Lightbulb,
      featured: false,
      tags: ['UX', 'simplicidad', 'PyMEs']
    },
    {
      id: 4,
      title: 'El Potencial del Mercado PyME en Argentina',
      excerpt: 'Análisis del mercado argentino de pequeñas y medianas empresas y las oportunidades de digitalización.',
      content: 'Argentina cuenta con más de 600.000 PyMEs que representan el 70% del empleo del país...',
      date: '2 Enero 2025',
      readTime: '8 min',
      category: 'Mercado',
      icon: TrendingUp,
      featured: false,
      tags: ['mercado', 'Argentina', 'digitalización']
    },
    {
      id: 5,
      title: 'Construyendo un Equipo de Alto Rendimiento',
      excerpt: 'Cómo estamos formando un equipo diverso y talentoso para impulsar el crecimiento de SolBit.',
      content: 'Un gran producto necesita un gran equipo. Te contamos cómo estamos construyendo el nuestro...',
      date: '28 Diciembre 2024',
      readTime: '6 min',
      category: 'Equipo',
      icon: Users,
      featured: false,
      tags: ['equipo', 'talento', 'cultura']
    },
    {
      id: 6,
      title: 'Innovación y Automatización: El Futuro es Hoy',
      excerpt: 'Exploramos las últimas tendencias en automatización y cómo SolBit está posicionándose en este mercado.',
      content: 'La automatización no es el futuro, es el presente. Y las PyMEs argentinas necesitan acceder a ella...',
      date: '25 Diciembre 2024',
      readTime: '7 min',
      category: 'Tecnología',
      icon: Zap,
      featured: false,
      tags: ['automatización', 'IA', 'innovación']
    }
  ];

  const categories = ['Todos', 'Startup', 'Programa', 'Filosofía', 'Mercado', 'Equipo', 'Tecnología'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Blog de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SolBit</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Seguí nuestro viaje emprendedor, aprendizajes y actualizaciones sobre el desarrollo de nuestra startup
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <Input
                type="text"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = post.icon;
                return (
                  <Card 
                    key={post.id} 
                    className={`group cursor-pointer border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                      post.featured 
                        ? 'md:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20' 
                        : 'bg-white dark:bg-gray-800'
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className={`p-2 rounded-lg ${
                            post.featured 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              post.featured ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                            }`} />
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        {post.featured && (
                          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            Destacado
                          </Badge>
                        )}
                      </div>
                      
                      <CardTitle className={`group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 ${
                        post.featured ? 'text-xl md:text-2xl' : 'text-lg'
                      }`}>
                        {post.title}
                      </CardTitle>
                      
                      <CardDescription className={`${post.featured ? 'text-base' : 'text-sm'}`}>
                        {post.excerpt}
                      </CardDescription>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <Button 
                          asChild
                          variant="ghost" 
                          size="sm" 
                          className="group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                        >
                          <Link to={`/blog/${post.id}`}>
                            Leer más
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No se encontraron posts que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
