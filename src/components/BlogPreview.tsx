
import { Calendar, Clock, ArrowRight, Rocket, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'El Viaje de SolBit: De Idea a Realidad',
      excerpt: 'Descubrí cómo nació SolBit y los primeros pasos en nuestro camino emprendedor.',
      date: '15 Enero 2025',
      readTime: '5 min',
      category: 'Startup',
      icon: Rocket,
      featured: true
    },
    {
      id: 2,
      title: 'NAVES Argentina 2025: Una Oportunidad Única',
      excerpt: 'Nuestra experiencia siendo seleccionados para el programa de aceleración más prestigioso del país.',
      date: '10 Enero 2025',
      readTime: '7 min',
      category: 'Programa',
      icon: Target,
      featured: false
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestro <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Seguí nuestro proceso de creación, aprendizajes y actualizaciones sobre el desarrollo de SolBit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <Card 
                key={post.id} 
                className={`group cursor-pointer border-0 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  post.featured 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20' 
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
                  
                  <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
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

        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/blog">
              Ver todos los posts
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
