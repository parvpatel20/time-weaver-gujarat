import { ArrowRight, Train, Ship, Plane, Car } from 'lucide-react';
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
      color: 'text-accent',
    },
    {
      title: 'Railways',
      icon: Train,
      description: 'British legacy to bullet trains',
      path: '/rail-transport',
      color: 'text-accent',
    },
    {
      title: 'Waterways',
      icon: Ship,
      description: 'Ancient ports to modern harbors',
      path: '/water-transport',
      color: 'text-accent',
    },
    {
      title: 'Airways',
      icon: Plane,
      description: 'Evolution of aviation in Gujarat',
      path: '/air-transport',
      color: 'text-accent',
    },
  ];

  const quickLinks = [
    { name: 'Gallery', path: '/gallery' },
    { name: 'Archives', path: '/archives' },
    { name: 'Articles', path: '/articles' },
    { name: 'Virtual Tour', path: '/virtual-tour' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'About', path: '/about' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Evolution of transport in India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight">
              Wheels of Time
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-display italic">
              India's Transport Evolution
            </p>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
              From ancient trade routes to futuristic travel – journey through centuries of innovation
              and discover how Gujarat became India's transport hub.
            </p>
            <Link to="/road-transport">
              <Button size="lg" className="group">
                Explore Gujarat's Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-vintage-paper" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-display font-bold text-center mb-16 animate-fade-in">
            India's Transport Milestones
          </h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-accent to-transparent animate-pulse-glow" />
            <div className="space-y-16">
              {[
                { year: '2600 BCE', event: 'Indus Valley boats and trade networks', icon: '⚓', side: 'left' },
                { year: '1500s', event: 'Bullock carts dominate land transport', icon: '🐂', side: 'right' },
                { year: '1853', event: 'First railway line in India', icon: '🚂', side: 'left' },
                { year: '1932', event: 'Air India founded (formerly Tata Airlines)', icon: '✈️', side: 'right' },
                { year: '2023', event: 'Bullet Train corridor announced', icon: '🚄', side: 'left' },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${milestone.side === 'left' ? 'justify-start' : 'justify-end'} animate-fade-in`} style={{ animationDelay: `${index * 0.15}s` }}>
                  <Card className={`w-5/12 group relative overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 ${milestone.side === 'right' ? 'text-right' : ''} bg-gradient-to-br from-card to-accent/5 border-accent/20`}>
                    <CardContent className="p-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 text-8xl opacity-5">{milestone.icon}</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-4xl font-display font-bold text-accent mb-3 group-hover:scale-110 transition-transform">{milestone.year}</div>
                      <p className="text-lg text-foreground font-medium">{milestone.event}</p>
                    </CardContent>
                  </Card>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg animate-pulse-glow`} style={{ top: `${index * 16 + 8}rem` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transport Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Explore by Transport Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportCategories.map((category, index) => (
              <Link key={index} to={category.path}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="flex justify-center">
                      <category.icon className={`h-16 w-16 ${category.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h3 className="text-2xl font-display font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <ArrowRight className="h-5 w-5 mx-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gujarat Spotlight */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-display font-bold">
                Gujarat: India's Transport Hub
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover how Gujarat evolved from ancient maritime trade routes at Lothal and Dholavira
                to becoming a modern transport powerhouse with world-class ports, expressways, and the
                upcoming bullet train corridor.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>Major ports: Kandla, Mundra, and Mandvi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>Western Railway headquarters in Ahmedabad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>International airport connecting to global destinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>Extensive highway network including NH-8</span>
                </li>
              </ul>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={gujaratMap}
                alt="Gujarat transport hubs map"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            More to Explore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Button
                  variant="outline"
                  className="w-full h-20 text-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {link.name}
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
