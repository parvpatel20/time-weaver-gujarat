import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Train, Zap, Calendar, ArrowRight, MapPin, Users, TrendingUp, Building2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RailTransport = () => {
  const [activeSection, setActiveSection] = useState('timeline');

  const milestones = [
    { 
      year: '1854', 
      event: 'First Indian Railway',
      description: 'India\'s first railway line connects Mumbai to Thane, marking the beginning of rail era in the Indian subcontinent'
    },
    { 
      year: '1860s', 
      event: 'Bombay, Baroda & Central India Railway (BB&CI)',
      description: 'First railway line in Gujarat region established, connecting major trading centers and ports to inland areas'
    },
    { 
      year: '1880s-1900s', 
      event: 'Railway Expansion Era',
      description: 'Rapid expansion of railway network across Gujarat. Major junctions established at Ahmedabad, Vadodara, Surat, and Rajkot'
    },
    { 
      year: '1930s', 
      event: 'Western Railway Headquarters',
      description: 'Western Railway zone established with headquarters in Ahmedabad, becoming one of India\'s most important railway divisions'
    },
    { 
      year: '1950s-1970s', 
      event: 'Post-Independence Electrification',
      description: 'Major routes electrified. Indian Railways reorganized. Suburban rail systems developed around major cities'
    },
    { 
      year: '2000s', 
      event: 'Modern Railway Infrastructure',
      description: 'Upgrading of stations, introduction of modern signaling systems, Ahmedabad Metro launched'
    },
    { 
      year: '2020s', 
      event: 'High-Speed Rail Era',
      description: 'Mumbai-Ahmedabad Bullet Train project underway. Regional Rapid Transit Systems planned for urban areas'
    },
  ];

  const historicalPeriods = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Colonial Railway Era',
      period: '1860s-1947',
      content: 'The British introduced railways primarily for commercial and administrative purposes. Gujarat became a crucial junction with major lines connecting Mumbai to Delhi and southern India. The British-built infrastructure included impressive stations with Indo-Victorian architecture. Railway workshops were established in major cities, creating employment opportunities. Ports like Surat and Bhavnagar were connected to inland markets, revolutionizing trade patterns.'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Railway Junction Development',
      period: '1880s-1930s',
      content: 'Gujarat saw development of major railway junctions at Ahmedabad, Vadodara, and Surat. These became important transshipment points for goods and passengers. Ahmedabad emerged as a railway hub connecting cotton mills to markets. Railway colonies were built to house workers and officials, creating new urban settlements. The infrastructure facilitated the growth of industries dependent on rail transport.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Electrification & Modernization',
      period: '1950s-2000s',
      content: 'After Independence, railway electrification transformed Gujarat\'s transport. Major routes like Ahmedabad-Vadodara-Bombay were electrified, reducing operational costs and increasing capacity. Diesel locomotives gradually replaced steam engines. High-speed diesel multiple units (DMUs) improved passenger comfort. Freight lines were modernized to handle container traffic. Railway signaling systems became computer-controlled, improving safety and efficiency.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Contemporary & Future',
      period: '2000s-Present',
      content: 'Gujarat railways entered a new phase with metro systems in Ahmedabad and Surat. The state developed dedicated freight corridors to facilitate logistics. Suburban rail networks expanded to support city growth. Regional Rapid Transit Systems (RRTS) were planned for better connectivity. The Mumbai-Ahmedabad Bullet Train project represents the pinnacle of modern railway technology. Smart stations with real-time information systems emerged.'
    }
  ];

  const majorStations = [
    {
      name: 'Ahmedabad Junction',
      established: '1864',
      description: 'The primary railway station and headquarters of Western Railway zone. Built during the British era with impressive Victorian architecture.',
      features: ['Heritage building', 'Western Railway HQ', 'Major junction', 'Historic platforms']
    },
    {
      name: 'Vadodara Junction',
      established: '1875',
      description: 'Historic railway station featuring Indo-Saracenic architecture. Built during the princely state era, maintaining its royal heritage.',
      features: ['Royal architecture', 'Strategic junction', 'Heritage monument', 'International heritage site']
    },
    {
      name: 'Surat Railway Station',
      established: '1880',
      description: 'Important junction connecting southern Gujarat to northern India. Serves as gateway to South Gujarat region.',
      features: ['Major junction', 'Port connectivity', 'Commercial hub', 'Passenger traffic center']
    },
    {
      name: 'Rajkot Junction',
      established: '1899',
      description: 'Key railway station in western Gujarat connecting to major industrial and agricultural areas.',
      features: ['Regional hub', 'Industrial connectivity', 'Freight center', 'Agricultural trade']
    }
  ];

  const railwayLines = [
    {
      name: 'Mumbai-Ahmedabad Line',
      length: '536 km',
      established: '1881',
      significance: 'Primary trunk route connecting two major metropolitan areas',
      traffic: 'Heavy passenger and freight traffic',
      slug: 'mumbai-ahmedabad-line'
      ,imageUrl: '/src/assets/mumbai_ahmedabad_placeholder.jpg'
    },
    {
      name: 'Ahmedabad-Vadodara-Bombay',
      length: '175 km',
      established: '1864',
      significance: 'One of India\'s oldest and busiest railway corridors',
      traffic: 'Millions of passengers annually',
      slug: 'ahmedabad-vadodara-bombay'
      ,imageUrl: '/src/assets/ahmedabad_vadodara_placeholder.jpg'
    },
    {
      name: 'Gujarat Broad Gauge Network',
      length: '5,000+ km',
      established: 'Continuous expansion from 1860s',
      significance: 'Comprehensive network connecting all major cities',
      traffic: 'Pan-state connectivity',
      slug: 'gujarat-broad-gauge'
      ,imageUrl: '/src/assets/gujarat_broad_gauge_placeholder.jpg'
    },
    {
      name: 'Western Dedicated Freight Corridor',
      length: '1,500+ km',
      established: '2019 onwards',
      significance: 'Modern freight transport optimized for logistics',
      traffic: 'Containers, coal, agriculture, manufactured goods',
      slug: 'western-dfc'
      ,imageUrl: '/src/assets/western_dfc_placeholder.jpg'
    }
  ];

  const economicImpact = [
    {
      metric: '5,000+',
      label: 'km of railway track',
      description: 'Comprehensive railway network across all districts'
    },
    {
      metric: '50+',
      label: 'Major railway stations',
      description: 'Connecting cities and towns across Gujarat'
    },
    {
      metric: '100+ Million',
      label: 'Annual passengers',
      description: 'Western Railway serves millions yearly'
    },
    {
      metric: '₹10,000+ Cr',
      label: 'Annual freight value',
      description: 'Logistics and cargo transport contribution'
    }
  ];

  const bulletTrainSpecs = [
    { label: 'Maximum Speed', value: '320 km/h', detail: 'Fastest in India' },
    { label: 'Total Distance', value: '508 km', detail: 'Mumbai-Ahmedabad corridor' },
    { label: 'Travel Time', value: '2-3 hours', detail: 'vs 6+ hours by other transport' },
    { label: 'Cost', value: '₹1.08 Lakh Cr', detail: 'Total project investment' }
  ];

  const navigate = useNavigate();

  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Hero - high contrast overlay, similar to RoadTransport */}
        <div className="relative mb-20 rounded-xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.01]">
          <img
            src="/src/assets/Rail_Transport.jpg"
            alt="Historic Rail Transport in Gujarat"
            className="w-full h-[520px] object-cover object-center transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[1px] flex items-center justify-center">
            <div className="relative z-10 max-w-5xl text-center px-6 space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight drop-shadow-lg animate-fade-in">
                Rail Transport of Gujarat
              </h1>
              <p className="text-xl text-gray-200 italic max-w-4xl mx-auto drop-shadow-md">
                "From steam locomotives to bullet trains – discover the railways that transformed commerce and society."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats (aligned with RoadTransport) */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {economicImpact.map((s, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-xl border border-border text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] animate-slide-in"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-1">{s.metric}</div>
                <div className="font-semibold text-base text-foreground uppercase tracking-wider">{s.label}</div>
                <div className="mt-2 text-sm text-muted-foreground italic">{s.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-24 bg-muted/20 rounded-xl p-10 border-l-8 border-primary shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-primary">A Journey on the Rails</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Railways transformed Gujarat from a collection of isolated regions into an integrated economic powerhouse. From the first steam locomotives in the 1860s to today's electrified networks and tomorrow's bullet trains, railways have been the backbone of Gujarat's industrial and commercial development.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            The Western Railway Zone, headquartered in Ahmedabad, stands as a testament to this transformation, serving as one of India's most important railway divisions with millions of passengers and countless freight operations annually.
          </p>
        </section>

        {/* British Legacy */}
        <section className="mb-24">
          <Card className="hover:shadow-2xl transition-all duration-300 bg-card border border-border">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6 text-center text-foreground">
                The British Railway Legacy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
                The British introduced railways to Gujarat in the mid-19th century, transforming trade and connectivity. The Bombay, Baroda & Central India Railway (BB&CI) and later the Great Indian Peninsula Railway (GIPR) became the primary operators. These colonial-era railways were built with impressive architecture reflecting the engineering prowess of the time, featuring iconic stations that still stand as heritage monuments today.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">1860s</div>
                  <p className="text-muted-foreground">First railways introduced to Gujarat region</p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">536 km</div>
                  <p className="text-muted-foreground">First trunk route established by 1881</p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">1947</div>
                  <p className="text-muted-foreground">Independence: Railway reorganization begins</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Periods */}
        <section className="mb-24" id="historical-periods">
          <h2 className="text-4xl font-extrabold mb-12 text-center border-b-2 border-border pb-4">
            Historical Periods of Railway Development
          </h2>
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

        {/* Timeline Section */}
        <section id="timeline" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12">Evolution Timeline: Tracks of Change 🚆</h2>
          <div className="relative border-l-4 border-primary/50 space-y-12 ml-4 md:ml-12">
            {milestones.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-16">
                <div className="absolute -left-3.5 md:-left-5 top-1 bg-primary border-4 border-background w-7 h-7 rounded-full shadow-md z-10 flex items-center justify-center">
                    <Calendar className="h-3 w-3 text-primary-foreground" />
                </div>
                
                <Card className="hover:shadow-xl transition-shadow border border-border transform hover:scale-[1.01] bg-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="text-3xl font-extrabold text-primary md:min-w-[150px] md:text-right">
                        {item.year}
                      </div>
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

        {/* Railway Lines */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Major Railway Lines & Routes</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {railwayLines.map((line, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card border-border">
                <div className="relative h-40 overflow-hidden">
                  {line.imageUrl ? (
                    <img src={line.imageUrl} alt={line.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <Train className="w-12 h-12 text-primary/50" />
                    </div>
                  )}
                  <div className="absolute top-2 left-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {line.significance}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2 text-center">{line.name}</h3>
                    <p className="text-sm text-foreground mb-3 text-center font-medium">Length: <b>{line.length}</b></p>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">{line.significance} — {line.traffic}</p>
                  <Button variant="ghost" className="w-full group/btn text-primary hover:bg-primary/10" onClick={() => navigate(`/details/${line.slug}`)}>
                    Read Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Heritage Stations */}
        <section id="stations" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Heritage Railway Stations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {majorStations.map((station, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {station.name}
                    </h3>
                    <p className="text-sm text-primary font-semibold">Established: {station.established}</p>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{station.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {station.features.map((feature, i) => (
                        <span key={i} className="bg-muted/20 text-foreground text-xs px-3 py-1 rounded-full font-semibold border border-border">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bullet Train Section */}
        <section className="mb-24">
          <Card className="hover:shadow-2xl transition-all duration-300 bg-card border border-border">
            <CardContent className="p-12 space-y-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Zap className="h-16 w-16 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">The Future: Bullet Train</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-center">
                Gujarat is set to lead India into the high-speed rail era with the Mumbai-Ahmedabad Bullet Train project. This 508 km corridor will connect two of India's most important cities, reducing travel time from 6+ hours to just 2-3 hours.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mt-10">
                {bulletTrainSpecs.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary">{spec.value}</div>
                    <p className="text-muted-foreground mt-2">{spec.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{spec.detail}</p>
                  </div>
                ))}
              </div>

              <div className="bg-muted/10 rounded-lg p-8 border border-border mt-8">
                <h3 className="text-2xl font-bold mb-4">Project Highlights</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Advanced safety systems with minimal accident risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Eco-friendly electric power with zero emissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Expected completion by 2027-2028</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Will handle 1.1 million passengers annually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Stations in Mumbai, Surat, and Ahmedabad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Will boost regional economy and tourism</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Modern Infrastructure */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Modern Railway Infrastructure
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Urban Transit Systems</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <p className="font-semibold">Ahmedabad Metro</p>
                      <p className="text-sm text-muted-foreground">Modern rapid transit connecting city periphery to center</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <p className="font-semibold">Surat Metro</p>
                      <p className="text-sm text-muted-foreground">Recently operational, serving commercial hub</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <p className="font-semibold">Suburban Rail Networks</p>
                      <p className="text-sm text-muted-foreground">Planned for major cities for better commuting</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Technology & Innovation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <p className="font-semibold">Smart Signaling Systems</p>
                      <p className="text-sm text-muted-foreground">Computer-controlled for precision and safety</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <p className="font-semibold">Dedicated Freight Corridors</p>
                      <p className="text-sm text-muted-foreground">Modern logistics infrastructure for commerce</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <div>
                      <p className="font-semibold">Real-Time Information Systems</p>
                      <p className="text-sm text-muted-foreground">Digital displays and mobile apps for travelers</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Railway Trivia */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Railway Trivia & Fascinating Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                fact: 'Western Railway headquartered in Ahmedabad handles millions of passengers annually',
                detail: 'Over 100 million passengers served yearly across the zone'
              },
              {
                icon: <Building2 className="h-6 w-6" />,
                fact: 'Gujarat has several heritage trains showcasing vintage locomotives',
                detail: 'Preservation of railway history through steam locomotive journeys'
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                fact: 'The state has over 5,000 km of railway track',
                detail: 'Comprehensive network connecting all major cities and towns'
              },
              {
                icon: <Train className="h-6 w-6" />,
                fact: 'Ahmedabad and Surat have modern metro systems',
                detail: 'Urban rapid transit revolutionizing city commuting'
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                fact: 'Railway freight contributes ₹10,000+ crores annually',
                detail: 'Major logistics hub for national commerce'
              },
              {
                icon: <Zap className="h-6 w-6" />,
                fact: 'Major routes are fully electrified',
                detail: 'Eco-friendly operations with reduced carbon footprint'
              },
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
          <h2 className="text-3xl font-bold mb-4 text-primary">Explore More Transport History 🌍</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn about how roads, air transport, and maritime routes shaped Gujarat's development alongside railways.
          </p>
          <CTAs navigate={navigate} />
        </section>

      </div>
    </main>
  );
};

export default RailTransport;

function CTAs() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button onClick={() => navigate('/road-transport')} className="bg-accent text-accent-foreground hover:bg-accent/90" aria-label="Go to Rail Transport">
        Road Transport
      </Button>
      <Button variant="outline" onClick={() => navigate('/air-transport')} aria-label="Go to Air Transport">
        Air Transport
      </Button>
      <Button variant="outline" onClick={() => navigate('/water-transport')} aria-label="Go to Water Transport">
        Water Transport
      </Button>
    </div>
  );
}