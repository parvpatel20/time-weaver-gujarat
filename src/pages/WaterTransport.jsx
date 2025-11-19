import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Ship, Anchor, Waves, ArrowRight, MapPin, TrendingUp, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const WaterTransport = () => {
  const timeline = [
    {
      year: '2600-1900 BCE',
      event: 'Indus Valley Maritime Trade',
      description: 'Lothal and Dholavira serve as sophisticated trading ports connecting to Mesopotamia, Egypt, and Persia. Advanced docking systems and warehouses evidence early maritime engineering.'
    },
    {
      year: '1600-1800',
      event: 'Medieval & Mughal Era',
      description: 'Gujarat ports flourish under Mughal rule. Surat becomes gateway to Arabian trade. Persian, Arab, and European traders establish communities. Spice and textile trade reaches peak.'
    },
    {
      year: '1800-1947',
      event: 'British Colonial Period',
      description: 'British establish organized port infrastructure. Kandla, Bhavnagar, and Porbandar modernized. Steam ships replace traditional vessels. Port cities become major commercial centers.'
    },
    {
      year: '1950-1980',
      event: 'Post-Independence Development',
      description: 'Major ports nationalized and expanded. Kandla Port established as industrial hub. Port infrastructure upgraded for container ships. Maritime traffic increases significantly.'
    },
    {
      year: '1980-2010',
      event: 'Modern Port Era',
      description: 'Private ports develop (Mundra, Pipavav). Container terminals modernized. Specialized cargo facilities built. Port automation increases efficiency. Gujarat becomes India\'s maritime hub.'
    },
    {
      year: '2010-Present',
      event: 'Smart Port Development',
      description: 'Digital port management systems deployed. Environmental sustainability measures. Mega-container ships accommodated. Coastal special economic zones developed. Smart shipping technology integration.'
    },
  ];

  const historicalPeriods = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Ancient Maritime Era',
      period: '2600 BCE - 1600 CE',
      content: 'Gujarat\'s maritime history spans over 4,500 years. Lothal, one of the world\'s oldest known ports, housed sophisticated docking systems and warehouses. Archaeological evidence reveals trade connections stretching from Mesopotamia to Egypt. Harappan merchants sailed sophisticated vessels and engaged in international commerce. Spices, textiles, and precious stones were the primary exports. The ports served as cultural bridges between civilizations.'
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: 'Medieval & Islamic Period',
      period: '1600-1750',
      content: 'Surat emerged as India\'s premier port under Mughal rule, earning the title "Gateway to Arabia." Arab, Persian, and European traders established thriving communities. Dhows and traditional sailing vessels dominated the Arabian Sea. Trade monopolies were granted to powerful merchant guilds. The port infrastructure supported millions in annual commerce. Cultural synthesis created unique Indo-Islamic maritime traditions.'
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: 'Colonial Industrial Era',
      period: '1800-1947',
      content: 'The British systematically modernized Gujarat\'s ports for colonial commerce. Steamships gradually replaced sailing vessels. Dock facilities were expanded with cranes, warehouses, and railway connections. Kandla Port was developed as a free trade zone. The introduction of container systems revolutionized cargo handling. Colonial engineering transformed traditional ports into modern commercial centers.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Contemporary & Future',
      period: '1950-Present',
      content: 'Independent India invested heavily in maritime infrastructure. Kandla Port became a major hub under national ownership. Private ports like Mundra revolutionized India\'s shipping capacity. Gujarat now handles over 40% of India\'s total cargo. Mega-container ships and specialized terminals serve diverse industries. Digital port management and environmental initiatives represent the future of maritime trade.'
    }
  ];

  const ancientPorts = [
    {
      name: 'Lothal',
      period: '2600 BCE',
      description: 'Ancient Indus Valley dockyard, one of world\'s earliest ports with advanced maritime technology',
      details: 'Features synchronized docking basin with tidal gates, sophisticated warehouse system, and evidence of international trade spanning 4,000+ km'
    },
    {
      name: 'Dholavira',
      period: '2650 BCE',
      description: 'Major Harappan trading hub with advanced water management and maritime systems',
      details: 'Archaeological remains show water storage systems, trading posts, and maritime connections to Persian Gulf and Arabian ports'
    },
    {
      name: 'Bhrigukaccha (Broach)',
      period: '500 BCE',
      description: 'Major port city mentioned in ancient texts, gateway to Narmada River trade',
      details: 'Connected inland trade routes to maritime routes, served as capital for Satavahana dynasty, famous for bead manufacturing'
    },
    {
      name: 'Cambay',
      period: '1000 CE',
      description: 'Medieval port known for diamond and textile trade, connected to Arabian networks',
      details: 'Center of gem cutting industry, flourished under Islamic sultanates, served as major export center for Indian goods'
    }
  ];

  const modernPorts = [
    {
      name: 'Kandla Port',
      established: '1950',
      cargo: 'Multi-purpose cargo, containers',
      description: 'India\'s first major port post-independence, designated as free trade zone. Handles diverse cargo including petroleum, coal, and containers. Strategic location for North-West trade routes.',
      traffic: '40+ million tonnes annually',
      significance: 'Primary hub for Western India'
      ,slug: 'kandla-port',
      imageUrl: '/assets/kand_port.png'
    },
    {
      name: 'Mundra Port',
      established: '1998',
      cargo: 'Containers, coal, oil, general cargo',
      description: 'India\'s largest private port by cargo volume. State-of-the-art container terminals and specialized facilities. Major gateway for international trade.',
      traffic: '150+ million tonnes annually',
      significance: 'Asia\'s leading private port by efficiency'
      ,slug: 'mundra-port',
      imageUrl: '/assets/mun_port.png'
    },
    {
      name: 'Pipavav Port',
      established: '2000',
      cargo: 'Containers, automobiles, break-bulk',
      description: 'Private container terminal revolutionizing India\'s container traffic. World-class infrastructure for automotive shipments and general cargo.',
      traffic: '2+ million containers annually',
      significance: 'Gateway for South Gujarat & Rajasthan'
      ,slug: 'pipavav-port',
      imageUrl: '/assets/pipavav_port.png'
    },
    {
      name: 'Bhavnagar Port',
      established: '1967',
      cargo: 'Coal, salt, general cargo',
      description: 'Major port in South Gujarat, gateway to agricultural hinterland. Important for domestic coastal shipping and energy sector.',
      traffic: '1+ million tonnes annually',
      significance: 'Hub for agricultural & coal export'
      ,slug: 'bhavnagar-port',
      imageUrl: '/assets/bhav_port.png'
    }
  ];

  const tradeRoutes = [
    {
      period: 'Ancient Era (2600 BCE - 1600 CE)',
      routes: [
        'Lothal ↔ Mesopotamian ports via Persian Gulf',
        'Dholavira ↔ Egyptian ports via Arabian Sea',
        'Coastal routes to Southeast Asian kingdoms',
        'Narmada River connection to inland trade'
      ]
    },
    {
      period: 'Medieval Era (1600-1800)',
      routes: [
        'Surat ↔ Mecca and Arabian Peninsula',
        'Gujarat ↔ Persian Gulf trading networks',
        'Coastal trade with Southeast Asia',
        'Indian spice route to European markets'
      ]
    },
    {
      period: 'Modern Era (1800-Present)',
      routes: [
        'Global container shipping networks',
        'Energy imports (oil, coal, LNG)',
        'Automotive export corridors',
        'Cross-continental trade lanes'
      ]
    }
  ];

  const economicImpact = [
    {
      metric: '40%+',
      label: 'India\'s cargo through Gujarat ports',
      description: 'Largest maritime cargo hub in India'
    },
    {
      metric: '49',
      label: '1 Major port and 48 non major ports',
      description: 'Including private and public ports'
    },
    {
      metric: '4,500+',
      label: 'Years of maritime history',
      description: 'From Indus Valley to present'
    },
    {
      metric: '₹50,000+ Cr',
      label: 'Annual maritime commerce',
      description: 'International trade value'
    }
  ];

  const shipbuildingHeritage = [
    {
      location: 'Mandvi, Kutch',
      tradition: 'Traditional Wooden Shipbuilding',
      details: 'Master craftsmen continue building dhows using age-old techniques. Ships are exported to Middle Eastern countries. UNESCO recognition for maritime heritage.',
      history: 'Centuries-old tradition, family-operated enterprises, exported vessels to Arabian Peninsula and East Africa'
    },
    {
      location: 'Modern Shipyards',
      tradition: 'Contemporary Ship Manufacturing',
      details: 'Industrial-scale shipbuilding with modern technology. Vessels for commercial, defense, and offshore industries. Integration with global supply chains.',
      history: 'Established 1970s-2000s, serves Indian Navy and commercial shipping, exports to international markets'
    }
  ];
  const navigate = useNavigate();

  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Hero */}
        <div className="relative mb-20 rounded-xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.01]">
          <img
            src="/assets/Water_Transport.webp"
            alt="Historic Water Transport in Gujarat"
            className="w-full h-[520px] object-cover object-center transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[1px] flex items-center justify-center">
            <div className="relative z-10 max-w-5xl text-center px-6 space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight drop-shadow-lg animate-fade-in">
                Water Transport of Gujarat
              </h1>
              <p className="text-xl text-gray-200 italic max-w-4xl mx-auto drop-shadow-md">
                "From ancient maritime empires to modern mega-ports — discover the waters that connected civilizations and commerce."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
          <h2 className="text-3xl font-bold mb-6 text-primary">Maritime Gateway to the World</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Gujarat's maritime heritage spans over 4,500 years, making it one of the world's oldest maritime trading regions. From the sophisticated docks of ancient Lothal to today's mega-container ports, water transport has been the lifeblood of Gujarat's economy and connectivity.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            Today, Gujarat handles over 40% of India's total maritime cargo, serving as the nation's primary gateway to global trade. The state's ports connect international shipping lanes, drive industrial growth, and sustain millions of livelihoods.
          </p>
        </section>

        {/* Ancient Maritime Heritage */}
        <section className="mb-24">
          <Card className="hover:shadow-2xl transition-all duration-300 bg-card border border-border">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <Waves className="h-12 w-12 text-primary" />
                <h2 className="text-4xl font-bold">Ancient Maritime Heritage</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
                Gujarat's maritime history dates back over 4,500 years to the Indus Valley Civilization. The ancient ports of Lothal and Dholavira were sophisticated trading centers that connected India with Mesopotamia, Egypt, and the Persian Gulf.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">4,500+</div>
                  <p className="text-muted-foreground">Years of maritime heritage</p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">12+</div>
                  <p className="text-muted-foreground">Ancient ports identified</p>
                </div>
                <div className="bg-muted/20 rounded-lg p-6 text-center border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">Global</div>
                  <p className="text-muted-foreground">Trade connections reached</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Historical Periods */}
        <section id="historical-periods" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center border-b-2 border-border pb-4">Historical Periods of Maritime Development</h2>
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
          <h2 className="text-4xl font-extrabold mb-12">Evolution Timeline: Harbors & Routes 🌊</h2>
          <div className="relative border-l-4 border-primary/50 space-y-12 ml-4 md:ml-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-16">
                <div className="absolute -left-3.5 md:-left-5 top-1 bg-primary border-4 border-background w-7 h-7 rounded-full shadow-md z-10 flex items-center justify-center">
                    <Calendar className="h-3 w-3 text-primary-foreground" />
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

        {/* Ancient Ports */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Ancient Port Cities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ancientPorts.map((port, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{port.name}</h3>
                    <span className="text-lg font-bold text-primary">{port.period}</span>
                  </div>
                  <p className="text-lg text-foreground mb-4">{port.description}</p>
                  <div className="bg-muted/10 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground">{port.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modern Ports */}
        <section id="ports" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Modern Ports & Harbors</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {modernPorts.map((port, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  {port.imageUrl ? (
                    <img src={port.imageUrl} alt={port.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                      <Ship className="w-12 h-12 text-primary/50" />
                    </div>
                  )}
                  <div className="absolute top-2 left-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {port.significance}
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2 text-center">{port.name}</h3>
                    <p className="text-sm text-foreground mb-3 text-center font-medium">Established: <b>{port.established}</b></p>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">{port.description}</p>
                  <div className="space-y-3 bg-muted/10 rounded-lg p-3 border border-border mt-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase">Primary Cargo</p>
                      <p className="text-sm">{port.cargo}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase">Annual Traffic</p>
                      <p className="text-sm text-muted-foreground">{port.traffic}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group/btn text-primary hover:bg-primary/10 mt-4" onClick={() => navigate(`/details/${port.slug}`)}>
                    Read Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trade Routes */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Historic Trade Routes Through the Ages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tradeRoutes.map((era, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">{era.period}</h3>
                  <ul className="space-y-3">
                    {era.routes.map((route, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold">→</span>
                        <span className="text-muted-foreground text-sm">{route}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Shipbuilding Heritage */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Shipbuilding Heritage & Traditions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {shipbuildingHeritage.map((heritage, index) => (
              <Card key={index} className="bg-card border border-border hover:shadow-2xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{heritage.location}</h3>
                  <h4 className="text-lg font-semibold mb-4">{heritage.tradition}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{heritage.details}</p>
                  <div className="bg-muted/10 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">History:</span> {heritage.history}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fascinating Facts */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Maritime Facts & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Ship className="h-6 w-6" />,
                fact: 'Lothal is one of the world\'s oldest known docks',
                detail: 'Built around 2600 BCE with advanced tidal management systems'
              },
              {
                icon: <MapPin className="h-6 w-6" />,
                fact: 'Gujarat handles 40%+ of India\'s total maritime cargo',
                detail: 'Leading maritime hub serving global trade networks'
              },
              {
                icon: <Waves className="h-6 w-6" />,
                fact: 'Mundra Port handles 150+ million tonnes annually',
                detail: 'Asia\'s largest private port by efficiency and throughput'
              },
              {
                icon: <Users className="h-6 w-6" />,
                fact: 'Mandvi shipbuilding tradition spans centuries',
                detail: 'Master craftsmen still build traditional wooden dhows'
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                fact: 'Gujarat ports employ over 300,000 people',
                detail: 'Direct and indirect employment in maritime sector'
              },
              {
                icon: <Zap className="h-6 w-6" />,
                fact: 'Smart port initiatives with AI and automation',
                detail: 'Real-time tracking and digital cargo management systems'
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

        {/* Then & Now */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">Then & Now</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/30 hover:shadow-xl transition-shadow bg-card/70">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b pb-4 border-destructive/20">
                  <Ship className="h-8 w-8 text-destructive" />
                  <h3 className="text-2xl font-extrabold text-destructive">Ancient & Medieval Era</h3>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-sm uppercase tracking-wider text-destructive">Maritime Methods:</p>
                  <ul className="space-y-2 text-foreground">
                    <li><b>Wooden sailing vessels</b> and dhows</li>
                    <li>Manual docking and cargo handling</li>
                    <li>Trade dependent on monsoon winds</li>
                    <li>Spice and textile exports dominated</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 rounded p-4 text-sm border-l-4 border-destructive">
                  <p className="font-bold mb-2 text-destructive">Trade Scope:</p>
                  <p>Regional networks across Arabian Sea and Persian Gulf</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:shadow-xl transition-shadow bg-card/70">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b pb-4 border-primary/20">
                  <Anchor className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-extrabold text-primary">Modern Era</h3>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-sm uppercase tracking-wider text-primary">Maritime Methods:</p>
                  <ul className="space-y-2 text-foreground">
                    <li>Mega-container ships and tankers</li>
                    <li>Automated cargo handling systems</li>
                    <li>Year-round operations and global networks</li>
                    <li>Digital navigation and tracking systems</li>
                  </ul>
                </div>
                <div className="bg-primary/10 rounded p-4 text-sm border-l-4 border-primary">
                  <p className="font-bold mb-2 text-primary">Trade Scope:</p>
                  <p>Global networks connecting 6 continents and 100+ countries</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/10 rounded-xl p-12 text-center border border-primary/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">Explore More Transport History 🌍</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Learn about how roads, railways, and air transport shaped Gujarat's development alongside maritime trade.</p>
          <CTAs navigate={navigate} />
        </section>

      </div>
    </main>
  );
};

export default WaterTransport;

function CTAs({ navigate }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <Button
        onClick={() => navigate('/road-transport')}
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-md hover:shadow-xl transition-all"
        aria-label="Go to Road Transport"
      >
        Road Transport
      </Button>
      <Button
        variant="outline"
        onClick={() => navigate('/rail-transport')}
        className="text-lg px-8 py-6 hover:bg-muted/30 transition-colors border-border"
        aria-label="Go to Rail Transport"
      >
        Rail Transport
      </Button>
      <Button
        variant="outline"
        onClick={() => navigate('/air-transport')}
        className="text-lg px-8 py-6 hover:bg-muted/30 transition-colors border-border"
        aria-label="Go to Air Transport"
      >
        Air Transport
      </Button>
    </div>
  );
}