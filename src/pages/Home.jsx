import { ArrowRight, Train, Ship, Plane, Car, Sparkles, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-transport-evolution.jpg';
import gujaratMap from '@/assets/gujarat-map-hubs.jpg';

const Home = () => {
  const transportCategories = [
    {
      title: 'Roadways',
      icon: Car,
      description: 'From bullock carts to expressways',
      path: '/road-transport',
      gradient: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
      bgHover: 'group-hover:bg-orange-500/10',
    },
    {
      title: 'Railways',
      icon: Train,
      description: 'British legacy to bullet trains',
      path: '/rail-transport',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      bgHover: 'group-hover:bg-blue-500/10',
    },
    {
      title: 'Waterways',
      icon: Ship,
      description: 'Ancient ports to modern harbors',
      path: '/water-transport',
      gradient: 'from-teal-500/20 to-emerald-500/20',
      iconColor: 'text-teal-600 dark:text-teal-400',
      bgHover: 'group-hover:bg-teal-500/10',
    },
    {
      title: 'Airways',
      icon: Plane,
      description: 'Evolution of aviation in Gujarat',
      path: '/air-transport',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      bgHover: 'group-hover:bg-purple-500/10',
    },
  ];

  const quickLinks = [
    { name: 'Gallery', path: '/gallery', icon: '🖼️' },
    { name: 'Archives', path: '/archives', icon: '📚' },
    { name: 'Articles', path: '/articles', icon: '📰' },
    // { name: 'Virtual Tour', path: '/virtual-tour', icon: '🎭' },
    { name: 'Quiz', path: '/quiz', icon: '🎯' },
    { name: 'About', path: '/about', icon: 'ℹ️' },
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Animated Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-blue-500/20 animate-pulse" style={{ animationDuration: '8s' }} />
        
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Evolution of transport in India"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms] blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background dark:from-black/90 dark:via-black/70 backdrop-blur-sm" />
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/30 dark:bg-amber-300/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 dark:bg-amber-400/10 backdrop-blur-sm rounded-full border border-amber-500/30 dark:border-amber-400/20">
              <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                A Journey Through Centuries
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-[0.95] tracking-tight drop-shadow-2xl">
              Wheels of Time
            </h1>
            
            <p className="text-3xl md:text-4xl text-amber-200 dark:text-amber-300 font-display font-bold italic drop-shadow-lg">
              India's Transport Evolution
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/road-transport">
                <Button size="lg" className="group h-14 px-8 text-lg font-bold bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
                  Explore Gujarat's Journey
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-amber-50/50 via-orange-50/30 to-background dark:from-gray-900 dark:via-gray-800/50 dark:to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 dark:bg-amber-400/10 rounded-full border border-amber-500/20 dark:border-amber-400/20 mb-4">
              <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-bold text-amber-900 dark:text-amber-200">HISTORICAL TIMELINE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 dark:text-white animate-fade-in">
              India's Transport Milestones
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Trace the remarkable journey from ancient civilizations to modern innovations
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-transparent dark:from-amber-400 dark:via-orange-400" />
            
            <div className="space-y-24">
              {[
                { year: '2600 BCE', event: 'Indus Valley boats and trade networks', icon: '⚓', side: 'left', color: 'from-teal-500 to-cyan-500' },
                { year: '1500s', event: 'Bullock carts dominate land transport', icon: '🐂', side: 'right', color: 'from-amber-500 to-orange-500' },
                { year: '1853', event: 'First railway line in India', icon: '🚂', side: 'left', color: 'from-blue-500 to-indigo-500' },
                { year: '1932', event: 'Air India founded (formerly Tata Airlines)', icon: '✈️', side: 'right', color: 'from-purple-500 to-pink-500' },
                { year: '2023', event: 'Bullet Train corridor announced', icon: '🚄', side: 'left', color: 'from-green-500 to-emerald-500' },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${milestone.side === 'left' ? 'justify-start' : 'justify-end'} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className={`w-5/12 group relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 ${milestone.side === 'right' ? 'text-right' : ''} border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800`}>
                    <CardContent className="p-8 relative overflow-hidden">
                      {/* Background Gradient Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Large Icon Background */}
                      <div className="absolute top-0 right-0 text-9xl opacity-5 group-hover:opacity-10 transition-opacity group-hover:scale-110 duration-500">{milestone.icon}</div>
                      
                      {/* Year Badge */}
                      <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${milestone.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl font-display font-black text-white drop-shadow-lg">{milestone.year}</span>
                      </div>
                      
                      <p className="text-lg text-gray-700 dark:text-gray-200 font-bold leading-relaxed">{milestone.event}</p>
                    </CardContent>
                  </Card>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-white dark:border-gray-900 shadow-xl group-hover:scale-125 transition-transform duration-300 z-10`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transport Categories - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-gray-50/50 to-background dark:from-background dark:via-gray-900/50 dark:to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 dark:text-white">
              Explore by Transport Type
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Deep dive into each transportation mode's fascinating history
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportCategories.map((category, index) => (
              <Link key={index} to={category.path}>
                <Card className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden relative ${category.bgHover}`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <CardContent className="p-10 text-center space-y-6 relative z-10">
                    {/* Icon Container with Glow Effect */}
                    <div className="flex justify-center relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className="relative bg-gray-100 dark:bg-gray-700 rounded-full p-6 group-hover:scale-110 transition-transform duration-500">
                        <category.icon className={`h-16 w-16 ${category.iconColor} group-hover:animate-pulse`} strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-display font-black text-gray-900 dark:text-white group-hover:scale-105 transition-transform duration-300">
                      {category.title}
                    </h3>
                    
                    <p className="text-base text-gray-600 dark:text-gray-300 font-semibold leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span>Explore More</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gujarat Spotlight - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50/50 to-background dark:from-gray-900 dark:via-amber-950/20 dark:to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/5 dark:bg-orange-400/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 dark:bg-amber-400/10 rounded-full border border-amber-500/20 dark:border-amber-400/20">
                <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-bold text-amber-900 dark:text-amber-200">REGIONAL FOCUS</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 dark:text-white leading-tight">
                Gujarat: India's Transport Hub
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                Discover how Gujarat evolved from ancient maritime trade routes at Lothal and Dholavira
                to becoming a modern transport powerhouse with world-class ports, expressways, and the
                upcoming bullet train corridor.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🚢', text: 'Major ports: Kandla, Mundra, Mandvi' },
                  { icon: '🚂', text: 'Western Railway HQ in Ahmedabad' },
                  { icon: '✈️', text: 'International airport connections' },
                  { icon: '🛣️', text: 'Extensive highway network (NH-8)' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-lg transition-all duration-300 group">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                    <span className="text-gray-700 dark:text-gray-200 font-bold leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-in group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="relative">
                <img
                  src={gujaratMap}
                  alt="Gujarat transport hubs map"
                  className="rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 px-6 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl border-2 border-amber-500/20 dark:border-amber-400/20">
                  <p className="text-sm font-bold text-gray-600 dark:text-gray-300">Transport Network</p>
                  <p className="text-2xl font-black text-amber-600 dark:text-amber-400">Gujarat State</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Links - Enhanced */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-background dark:from-gray-900 dark:to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-display font-black text-gray-900 dark:text-white">
              More to Explore
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Continue your journey through India's transportation heritage
            </p>
          </div>

          {/* Horizontal quick-links row — single line with horizontal scroll on small screens */}
          <div className="flex gap-4 overflow-x-auto py-2 px-2 md:px-0 items-stretch md:gap-6 md:justify-between">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="flex-shrink-0 md:flex-1 md:w-1/5">
                <Button
                  variant="default"
                  className="w-full h-44 md:h-40 px-6 rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-800 dark:to-gray-900 hover:from-amber-400 hover:to-amber-500 dark:hover:from-amber-600 dark:hover:to-amber-500 text-gray-900 dark:text-white border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-3"
                >
                  <span className="text-5xl md:text-4xl lg:text-5xl transform transition-transform duration-300">{link.icon}</span>
                  <span className="text-lg md:text-xl font-extrabold">{link.name}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;