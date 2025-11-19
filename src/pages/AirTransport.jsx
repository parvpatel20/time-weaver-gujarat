import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Wind, Rocket, ArrowRight, MapPin, TrendingUp, Users, Zap, CalendarDays } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AirTransport = () => {
  const timeline = [
    {
      year: '1930s',
      event: 'Early Aviation Era',
      description: 'Small airstrips established in Ahmedabad and other cities for military and postal services. Pioneering aviators establish first commercial connections.'
    },
    {
      year: '1940s-1950s',
      event: 'Civil Aviation Expansion',
      description: 'Post-independence, Indian Airlines begins operations. Ahmedabad becomes regional hub. Air routes connect Gujarat to major Indian cities.'
    },
    {
      year: '1960s-1980s',
      event: 'Growth & Modernization',
      description: 'Airport infrastructure modernized. Jet aircraft introduced on major routes. Ahmedabad airport expands to accommodate increasing traffic.'
    },
    {
      year: '1991-2005',
      event: 'Liberalization & International Growth',
      description: 'Economic liberalization opens aviation sector. Ahmedabad Airport becomes international hub. Multiple airlines begin operations.'
    },
    {
      year: '2010-2015',
      event: 'Rebranding & Expansion',
      description: 'Renamed Sardar Vallabhbhai Patel International Airport. New terminal built. Infrastructure upgraded for international standards.'
    },
    {
      year: '2015-Present',
      event: 'Modern Aviation Era',
      description: 'Regional connectivity expansion via UDAN scheme. Cargo operations growth. Smart airport initiatives. Electric ground support vehicles deployed.'
    },
  ];

  const historicalPeriods = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: 'Pioneer Aviation Era',
      period: '1930s-1950s',
      content: 'Gujarat\'s aviation journey began with small grass airstrips serving military operations and postal services. Early aviators faced numerous challenges flying in primitive conditions. The first commercial flights carried mail and select passengers. Post-independence, aviation was seen as crucial for national integration. Ahmedabad emerged as a natural hub due to its geographic location and industrial importance. Indian Airlines began regional services connecting Gujarat to other states.'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Regional Hub Development',
      period: '1960s-1990s',
      content: 'Ahmedabad airport infrastructure improved significantly during this period. Jet aircraft replaced older prop-based planes. Domestic routes expanded to connect major Indian cities. Tourism began driving aviation growth. The airport became a crucial transit point for western and central India. Multiple terminals were constructed to handle increasing passenger volumes. Airlines established maintenance and operational bases in Ahmedabad.'
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: 'International Gateway Era',
      period: '1990s-2010s',
      content: 'Economic liberalization opened aviation to private operators. Gulf countries became major destinations for Gujarat travelers and workers. International flights from Ahmedabad connected to Middle East, Southeast Asia, and Europe. The airport underwent complete modernization with state-of-the-art facilities. Free trade agreements and business growth drove air cargo expansion. Sardar Vallabhbhai Patel International Airport became India\'s gateway to global commerce.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Smart & Sustainable Aviation',
      period: '2010s-Present',
      content: 'Modern airport management systems enhance efficiency and passenger experience. Regional connectivity improved through UDAN (Regional Connectivity Scheme). Cargo operations grew exponentially supporting export industries. Sustainability initiatives including solar power and waste management. Digital ticketing and biometric systems streamline operations. Plans for electric aircraft and green aviation fuel. Cargo hubs established to support logistics and e-commerce sectors.'
    }
  ];

  const airports = [
    {
      name: 'Sardar Vallabhbhai Patel International Airport',
      city: 'Ahmedabad',
      established: '1937',
      description: 'Gujarat\'s primary international airport serving as the main gateway for the state. Named after India\'s first Deputy Prime Minister, this airport connects Ahmedabad to major cities across Asia, Middle East, Europe, and beyond.',
      status: 'International',
      passengers: '11M+',
      destinations: '100+',
      significance: 'Primary gateway for Gujarat',
      slug: 'svpi-airport',
      imageUrl: '/assets/sardar_air.png'
    },
    {
      name: 'Surat International Airport',
      city: 'Surat',
      established: '2008',
      description: 'South Gujarat\'s aviation hub serving the diamond and textile hub of Surat. Connects business travelers and tourists to major domestic and international destinations.',
      status: 'International',
      passengers: '2M+',
      destinations: '25+',
      significance: 'South Gujarat gateway'
      ,slug: 'surat-airport',
      imageUrl: '/assets/surat_air.png'
    },
    {
      name: 'Vadodara Airport',
      city: 'Vadodara',
      established: '1962',
      description: 'Central Gujarat\'s airport connecting the historical city of Vadodara. Serves regional connectivity for passenger and cargo operations.',
      status: 'Domestic',
      passengers: '0.5M+',
      destinations: '10+',
      significance: 'Regional connector'
      ,slug: 'vadodara-airport',
      imageUrl: '/assets/vad_air.png'
    },
    {
      name: 'Rajkot Airport',
      city: 'Rajkot',
      established: '1935',
      description: 'Western Gujarat\'s airport serving the Saurashtra region. Important for regional connectivity and agricultural product exports.',
      status: 'Domestic',
      passengers: '0.3M+',
      destinations: '5+',
      significance: 'Western Gujarat hub'
      ,slug: 'rajkot-airport',
      imageUrl: '/assets/raj_air.png'
    }
  ];

  const economicImpact = [
    {
      metric: '11M+',
      label: 'Annual passengers at SVPI Airport',
      description: '8th busiest airport in India'
    },
    {
      metric: '$8 trillion+',
      label: 'Annual air cargo value',
      description: 'Supporting export economy'
    },
    {
      metric: '300,000+',
      label: 'Direct & indirect employment',
      description: 'Aviation sector employment in Gujarat'
    }
  ];

  const airlines = [
    {
      name: 'Air India',
      status: 'National Carrier',
      routes: 'Domestic and international flights',
      destinations: 'Middle East, Southeast Asia, Europe'
    },
    {
      name: 'IndiGo',
      status: 'Low-cost Carrier',
      routes: 'Extensive domestic network',
      destinations: 'Major Indian cities and selected international'
    },
    {
      name: 'SpiceJet',
      status: 'Budget Carrier',
      routes: 'Regional and domestic connectivity',
      destinations: 'Pan-India connectivity'
    },
    {
      name: 'Gulf Airlines',
      status: 'International',
      routes: 'Gulf region connections',
      destinations: 'Dubai, Abu Dhabi, Doha, Riyadh'
    }
  ];

  const navigate = useNavigate();

  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Hero - high contrast overlay */}
        <div className="relative mb-20 rounded-xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.01]">
          <img
            src="/assets/Air_Transport.jpg"
            alt="Air Transport of Gujarat"
            className="w-full h-[520px] object-cover object-center transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[1px] flex items-center justify-center">
            <div className="relative z-10 max-w-5xl text-center px-6 space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight drop-shadow-lg animate-fade-in">
                Air Transport of Gujarat
              </h1>
              <p className="text-xl text-gray-200 italic max-w-4xl mx-auto drop-shadow-md">
                From early airstrips to modern international hubs — discover the skies that connected Gujarat to the world.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {economicImpact.map((s, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03]">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">{s.metric}</div>
                <div className="font-semibold text-base text-foreground uppercase tracking-wider">{s.label}</div>
                <div className="mt-2 text-sm text-muted-foreground italic">{s.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-24 bg-muted/20 rounded-xl p-10 border-l-8 border-primary shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-primary">Taking Flight: Gujarat's Aviation Journey</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Gujarat's aviation history spans nearly a century, from primitive grass airstrips to state-of-the-art international terminals. The state has evolved into India's western aviation gateway, connecting millions of passengers annually to destinations across the globe.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Today, Sardar Vallabhbhai Patel International Airport in Ahmedabad stands as the 8th busiest airport in India, serving as a crucial hub for business, tourism, and trade. The aviation sector has become instrumental in Gujarat's economic growth and global connectivity.
          </p>
        </section>

        {/* Early Aviation */}
        <section className="mb-24">
          <Card className="hover:shadow-2xl transition-all duration-300 bg-card border border-border">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <Wind className="h-12 w-12 text-primary" />
                <h2 className="text-4xl font-bold">Early Aviation History</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                Gujarat's aviation journey began in the 1930s with small airstrips serving military and postal services. Pioneering aviators faced numerous challenges flying in primitive conditions with basic navigation equipment. The post-independence era saw rapid growth as Ahmedabad emerged as a major commercial aviation hub.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">1937</div>
                  <p className="text-muted-foreground">Ahmedabad Airport established</p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">1948</div>
                  <p className="text-muted-foreground">Indian Airlines begins operations</p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">1991</div>
                  <p className="text-muted-foreground">International airport status granted</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Periods */}
        <section id="historical-periods" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center border-b-2 border-border pb-4">Historical Periods of Aviation Development</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {historicalPeriods.map((period, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-card border border-border transform hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary bg-muted/40 p-3 rounded-full">{period.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{period.title}</h3>
                      <p className="text-sm text-primary font-medium mt-1">{period.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{period.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12">Aviation Milestones</h2>
          <div className="relative border-l-4 border-primary/50 space-y-12 ml-4 md:ml-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-16">
                <div className="absolute -left-3.5 md:-left-5 top-1 bg-primary border-4 border-background w-7 h-7 rounded-full shadow-md z-10 flex items-center justify-center">
                    <CalendarDays className="h-3 w-3 text-primary-foreground" />
                </div>
                <Card className="hover:shadow-xl transition-shadow border border-border transform hover:scale-[1.01] bg-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="text-3xl font-extrabold text-primary md:min-w-[150px] md:text-right">{item.year}</div>
                      <div className="flex-1 border-l-2 md:border-l-0 md:pl-4 pl-4 border-border">
                        <h3 className="text-2xl font-bold mb-1 text-foreground">{item.event}</h3>
                        <p className="text-muted-foreground text-base">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Airports */}
        <section id="airports" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Major Airports & Connectivity</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {airports.map((airport, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  {airport.imageUrl ? (
                    <img src={airport.imageUrl} alt={airport.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <Plane className="w-12 h-12 text-primary/50" />
                    </div>
                  )}
                  <div className="absolute top-2 left-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {airport.significance}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2 text-center">{airport.name}</h3>
                    <p className="text-sm text-foreground mb-3 text-center font-medium">{airport.city} • Established <b>{airport.established}</b></p>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">{airport.description}</p>
                  <div className="space-y-3 bg-muted/10 rounded-lg p-3 border border-border mt-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase">Status</p>
                      <p className="text-sm font-semibold">{airport.status}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase">Annual Passengers</p>
                        <p className="text-sm text-muted-foreground">{airport.passengers}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground uppercase">Destinations</p>
                        <p className="text-sm text-muted-foreground">{airport.destinations}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group/btn text-primary hover:bg-primary/10 mt-4" onClick={() => navigate(`/details/${airport.slug}`)}>
                    Read Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* SVPI Airport Details */}
        <section className="mb-24">
          <Card className="hover:shadow-2xl transition-all duration-300 bg-card border border-border">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-4xl font-bold text-center mb-6">Sardar Vallabhbhai Patel International Airport</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-8">Named after India's first Deputy Prime Minister, this airport serves as Gujarat's primary international gateway. It connects Ahmedabad to major cities across Asia, Middle East, Europe, and beyond.</p>
              <div className="grid md:grid-cols-4 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8th</div>
                  <p className="text-muted-foreground">Busiest Airport in India</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Destinations Connected</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">11M+</div>
                  <p className="text-muted-foreground">Annual Passengers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Airlines Operating</p>
                </div>
              </div>

              <div className="bg-muted/10 rounded-lg p-8 border border-border mt-8">
                <h3 className="text-2xl font-bold mb-4">Key Features & Facilities</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span><span className="text-muted-foreground">Modern terminal with international standards</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span><span className="text-muted-foreground">Advanced cargo handling facilities</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span><span className="text-muted-foreground">Free Trade Zone for duty-free operations</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span><span className="text-muted-foreground">Multi-level parking and transportation hub</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span><span className="text-muted-foreground">Solar power and green initiatives</span></li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span><span className="text-muted-foreground">Biometric and digital systems</span></li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Airlines Operating */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Airlines Operating from Gujarat</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {airlines.map((airline, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{airline.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Classification</p>
                      <p className="text-foreground">{airline.status}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Routes</p>
                      <p className="text-foreground">{airline.routes}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground uppercase">Key Destinations</p>
                      <p className="text-foreground">{airline.destinations}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future of Aviation */}
        <section className="mb-24">
          <Card className="hover:shadow-2xl transition-all duration-300 bg-card border border-border">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Rocket className="h-16 w-16 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">The Future of Aviation</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center mb-8">Gujarat is embracing sustainable aviation with plans for green airports, electric aircraft ground support, drone delivery systems, and regional rapid air mobility.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-muted/10 border border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-primary">Green Aviation Initiatives</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Solar-powered airport facilities and systems</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Sustainable aviation fuel (SAF) initiatives</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Carbon-neutral airport operations target</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Electric ground support vehicles deployment</span></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/10 border border-border">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-primary">Technology Integration</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Drone delivery networks for last-mile logistics</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Advanced air traffic management systems</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">AI-powered passenger experience optimization</span></li>
                      <li className="flex items-start gap-3"><span className="text-primary font-bold">•</span><span className="text-muted-foreground">Regional rapid air mobility corridors</span></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Aviation Facts */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Aviation Highlights & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Plane className="h-6 w-6" />, fact: 'SVPI Airport is India\'s 8th busiest airport', detail: 'Handles over 11 million passengers annually' },
              { icon: <MapPin className="h-6 w-6" />, fact: 'Gujarat has 4 operational public airports', detail: 'Providing connectivity across all regions' },
              { icon: <TrendingUp className="h-6 w-6" />, fact: 'Cargo operations grew 300% in last decade', detail: 'Supporting export-driven economy' },
              { icon: <Users className="h-6 w-6" />, fact: 'Over 300,000 jobs in aviation sector', detail: 'Direct and indirect employment' },
              { icon: <Wind className="h-6 w-6" />, fact: 'UDAN scheme connects 15+ smaller cities', detail: 'Affordable regional connectivity initiative' },
              { icon: <Zap className="h-6 w-6" />, fact: 'Multiple airlines operate Gulf routes', detail: 'Major corridor for overseas workers' },
            ].map((item, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-primary mt-1">{item.icon}</div>
                    <p className="font-semibold text-base text-foreground">{item.fact}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/10 rounded-xl p-12 text-center border border-primary/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Explore More Transport History</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Learn about how roads, railways, and maritime routes shaped Gujarat's development alongside aviation.</p>
          <CTAs navigate={navigate} />
        </section>

      </div>
    </main>
  );
};

export default AirTransport;

function CTAs({ navigate }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <Button onClick={() => navigate('/road-transport')} className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-md hover:shadow-xl transition-all" aria-label="Go to Road Transport">Road Transport</Button>
      <Button variant="outline" onClick={() => navigate('/rail-transport')} className="text-lg px-8 py-6 hover:bg-muted/30 transition-colors border-border" aria-label="Go to Rail Transport">Rail Transport</Button>
      <Button variant="outline" onClick={() => navigate('/water-transport')} className="text-lg px-8 py-6 hover:bg-muted/30 transition-colors border-border" aria-label="Go to Water Transport">Water Transport</Button>
    </div>
  );
}