import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Bus, Car, ArrowRight, Map, TrendingUp, Users, Zap, CalendarDays, Mountain, Route } from 'lucide-react'; // Added Route, Mountain
import { useNavigate } from 'react-router-dom';

// --- Component Definition ---

const RoadTransport = () => {
  const navigate = useNavigate();

  // 1. Data arrays updated with placeholder image URLs
  const timeline = [
    { year: '1000-1600 CE', event: 'Ancient Trade Routes', description: 'Bullock carts traverse Silk Road extensions. Gujarat\'s ports connect to Arabian Sea trade. Routes link Ahmedabad, Vadodara, and Surat with distant markets.' },
    { year: '1600-1800', event: 'Mughal Era Roads', description: 'Construction of post roads and dak routes (courier system). Royal highways facilitate administration and commerce. Caravanserais established along major routes.' },
    { year: '1800-1947', event: 'British Colonial Period', description: 'Grand Trunk Road network expansion. Introduction of wheeled carriages and early motorized transport. First automobiles appear in Ahmedabad and Vadodara.' },
    { year: '1950-1975', event: 'Post-Independence Development', description: 'GSRTC established (1960). National Highway network planned. Road expansion to connect villages with cities. Introduction of commercial trucking.' },
    { year: '1980-2005', event: 'Modern Highway Era', description: 'NH-8 (Delhi-Mumbai) completion. Construction of expressways and bypasses. Urban road modernization. Implementation of toll systems.' },
    { year: '2006-Present', event: 'Smart & Sustainable Transport', description: 'Mumbai-Ahmedabad Expressway operationalization. Electric buses introduction. Smart traffic management systems. FASTag toll technology deployment.' },
  ];

  const highways = [
    { 
      name: 'NH-8 (Delhi-Mumbai Highway)', 
      description: 'Spanning 1,450 km, this national highway passes through Gujarat, connecting northern and western India. A vital economic corridor for trade and commerce.', 
      length: '1,450 km', 
      significance: 'Primary Trade Route',
      slug: 'nh8',
      imageUrl: '/assets/nh8.png' // Placeholder
    },
    { 
      name: 'NH-44 (Srinagar-Kanyakumari)', 
      description: 'Connects North India to South India passing through Gujarat. Critical for national commerce and tourism.', 
      length: '3,745 km (India\'s longest)', 
      significance: 'North-South Connector',
      slug: 'nh44',
      imageUrl: '/assets/nh44.png' // Placeholder
    },
    { 
      name: 'Mumbai-Ahmedabad Expressway', 
      description: 'A 6-lane expressway built to reduce travel time between Mumbai and Ahmedabad. Gateway of Gujarat project.', 
      length: '396 km', 
      significance: 'Economic Growth Corridor',
      slug: 'mae',
      imageUrl: '/assets/mum_ahm_exp.png' // Placeholder
    },
    { 
      name: 'GSRTC Network', 
      description: 'Gujarat State Road Transport Corporation operates one of India\'s largest state transport services connecting every corner of Gujarat.', 
      length: '73,000+ km', 
      significance: 'Regional Connectivity',
      slug: 'gsrtc',
      imageUrl: '/assets/gsrtc_network.png' // Placeholder
    },
  ];

  const historicalPeriods = [
    { icon: <Users className="h-8 w-8" />, title: 'Ancient Trade Era', period: '1000 BCE - 1600 CE', content: 'Gujarat was the gateway to India\'s maritime trade. Ancient routes connected the ports of Lothal, Bhrigukaccha, and Cambay to Rome, Arabia, and Southeast Asia. Bullock carts carried spices, textiles, and precious goods across desert routes. Caravanserais provided rest stops for traders.' },
    { icon: <Map className="h-8 w-8" />, title: 'Mughal Administration', period: '1600-1750', content: 'The Mughal Empire built organized road systems. Dak routes (courier roads) connected administrative centers. Royal highways facilitated communication and military movement. Post offices were established every 10-12 km. Merchant routes flourished under relative peace and security.' },
    { icon: <Truck className="h-8 w-8" />, title: 'Colonial Infrastructure', period: '1800-1947', content: 'The British systematically developed road networks for commercial and military purposes. Grand Trunk Road extensions reached Gujarat\'s major cities. Railways initially competed with roads, but eventually complemented them. Early automobiles began replacing traditional transport. The first motorized vehicles arrived in Ahmedabad in the early 1900s.' },
    { icon: <TrendingUp className="h-8 w-8" />, title: 'Modern Development', period: '1950-Present', content: 'Independent India invested in comprehensive road networks. National Highways were planned and constructed systematically. GSRTC (1960) revolutionized public transport. Toll roads improved maintenance. Smart highways with real-time traffic management emerged. Today, Gujarat has one of India\'s most developed road networks.' }
  ];

  const economicImpact = [
    { metric: '73,000+', label: 'km of Road Network', description: 'Comprehensive connectivity across all districts' },
    { metric: '₹50,000+', label: 'Crores in Logistics Value', description: 'Annual commercial activity through roads' },
    { metric: '500+', label: 'GSRTC Bus Fleet', description: 'Serving millions of passengers daily' },
    { metric: '24/7', label: 'Highway Connectivity', description: 'All-weather road access to major cities' }
  ];
  
  const majorCities = [
    { name: 'Ahmedabad', role: 'Major hub for NH-8 and expressway connections' },
    { name: 'Vadodara', role: 'Strategic junction, connects multiple national highways' },
    { name: 'Surat', role: 'Commercial center and gateway to southern Gujarat' },
    { name: 'Rajkot', role: 'Regional hub, connects western Gujarat districts' },
    { name: 'Jamnagar', role: 'Port city, links maritime trade to inland routes' },
  ];

  const funFacts = [
    { icon: <Map className="h-6 w-6" />, fact: 'Gujarat has over 73,000 km of road network', detail: 'One of the highest road densities among Indian states' },
    { icon: <Bus className="h-6 w-6" />, fact: 'GSRTC operates one of India\'s largest state transport services', detail: 'Carries over 50 million passengers annually' },
    { icon: <TrendingUp className="h-6 w-6" />, fact: 'The Mumbai-Ahmedabad expressway reduced travel time by 60%', detail: 'Economic corridor boosting regional commerce' },
    { icon: <Zap className="h-6 w-8" />, fact: 'Gujarat leads in electric bus adoption in India', detail: 'Over 5,000 e-buses operational across cities' },
    { icon: <Truck className="h-6 w-6" />, fact: 'NH-8 is one of Asia\'s busiest highways', detail: 'Handles millions of commercial vehicles annually' },
    { icon: <Users className="h-6 w-6" />, fact: 'Roads employ over 200,000 people in transport sector', detail: 'Including drivers, mechanics, and logistics professionals' },
  ];


  return (
    <main className="min-h-screen py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* --- 1. Header & Hero Image Section (High Contrast Overlay) --- */}
        <div className="relative mb-20 rounded-xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.01]">
          {/* Note: /assets/Road_Transport.jpg must be accessible */}
          <img 
            src="/assets/Road_Transport.jpg" 
            alt="Historic Road Transport in Gujarat" 
            className="w-full h-[520px] object-cover object-center transition-all duration-700 opacity-80 group-hover:opacity-100" 
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[1px] flex items-center justify-center">
            <div className="relative z-10 max-w-5xl text-center px-6 space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight drop-shadow-lg animate-fade-in">
                Road Transport of Gujarat
              </h1>
              <p className="text-xl text-gray-200 italic max-w-4xl mx-auto drop-shadow-md">
                "From ancient trade routes to <b>modern expressways</b> – discover the roads that shaped commerce and civilization."
              </p>
            </div>
          </div>
        </div>
        
        {/* --- 2. Quick Stats (Clear Metric Emphasis) --- */}
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

        {/* --- 3. Introduction (Subtle background and Border) --- */}
        <section className="mb-24 bg-muted/20 rounded-xl p-10 border-l-8 border-primary shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-primary">A Journey Through Time</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Gujarat's road network tells the story of <b>commerce, culture, and connectivity</b> spanning millennia. From the ancient bullock cart routes that connected the Indus Valley to the modern expressways linking metropolitan centers, roads have been the arteries of Gujarat's prosperity.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            The transformation from dusty trading trails to <b>smart, multi-lane expressways</b> reflects not just technological progress, but the evolution of Gujarat as a leading economic state in India.
          </p>
        </section>

        {/* --- 4. Historical Periods (Icon Enhancement and Readability) --- */}
        <section id="historical-periods" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center border-b-2 border-border pb-4">
            Historical Periods of Road Development 📜
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {historicalPeriods.map((period, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 bg-card border border-border transform hover:-translate-y-1"
              >
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

        {/* --- 5. Detailed Timeline (Visual Timeline Structure) --- */}
        <section id="timeline" className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12">
            Evolution Timeline: The Road to Modernity 🛣️
          </h2>
          <div className="relative border-l-4 border-primary/50 space-y-12 ml-4 md:ml-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-16">
                <div className="absolute -left-3.5 md:-left-5 top-1 bg-primary border-4 border-background w-7 h-7 rounded-full shadow-md z-10 flex items-center justify-center">
                    <CalendarDays className="h-3 w-3 text-primary-foreground" />
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

        {/* --- 6. Major Highways (Now includes image section) --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Major Highways & Transport Networks 🔗
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {highways.map((highway, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card border-border"
              >
                {/* Image Section - Placeholder Implementation */}
                <div className="relative h-40 overflow-hidden">
                    {/* Placeholder image tag - Replace with actual image source */}
                    {highway.imageUrl ? (
                        <img 
                            src={highway.imageUrl} 
                            alt={highway.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                    ) : (
                        // Attractive gradient placeholder when image is missing
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10">
                            <Route className="w-12 h-12 text-primary/50" />
                        </div>
                    )}
                    <div className="absolute top-2 left-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        {highway.significance}
                    </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2 text-center">
                      {highway.name}
                    </h3>
                    <p className="text-sm text-foreground mb-3 text-center font-medium">Length: <b>{highway.length}</b></p>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">{highway.description}</p>
                  <Button variant="ghost" className="w-full group/btn text-primary hover:bg-primary/10" onClick={() => navigate(`/details/${highway.slug}`)}>
                    Read Details
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* --- 7. Major Cities Connected (Clean, Readable List) --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-8 text-center">
            Key Cities Connected by Roads 🏙️
          </h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {majorCities.map((city, index) => (
              <Card 
                key={index} 
                className="bg-muted/20 border-border hover:bg-muted/40 transition-colors text-center p-6 shadow-md"
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{city.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{city.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* --- 8. Vintage vs Modern (Semantic Color Contrast) --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Then & Now: A Contrast in Transport 🔄
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="border-destructive/30 hover:shadow-xl transition-shadow bg-card/70">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b pb-4 border-destructive/20">
                  <Car className="h-8 w-8 text-destructive" />
                  <h3 className="text-2xl font-extrabold text-destructive">Historic Era (Past)</h3>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-sm uppercase tracking-wider text-destructive">Primary Transport Methods:</p>
                  <ul className="space-y-3 text-foreground list-disc pl-5">
                    <li><b>Bullock carts</b> for local and regional transport</li>
                    <li>Camel carts in Kutch and desert regions</li>
                    <li>Horse-drawn carriages for elite travelers</li>
                    <li><b>Narrow, unpaved roads</b> (often seasonal)</li>
                    <li>Manual toll collection at checkpoints</li>
                  </ul>
                </div>
                <div className="bg-destructive/10 rounded p-4 text-sm border-l-4 border-destructive">
                  <p className="font-bold mb-2 text-destructive">Travel Time Fact:</p>
                  <p>Ahmedabad to Mumbai took <b>2-3 weeks</b> by cart</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:shadow-xl transition-shadow bg-card/70">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3 border-b pb-4 border-primary/20">
                  <Bus className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-extrabold text-primary">Modern Era (Present)</h3>
                </div>
                <div className="space-y-4">
                  <p className="font-bold text-sm uppercase tracking-wider text-primary">Current Transport Methods:</p>
                  <ul className="space-y-3 text-foreground list-disc pl-5">
                    <li>GSRTC network with <b>500+ modern buses</b></li>
                    <li><b>Multi-lane expressways</b> and bypasses</li>
                    <li>Electric and CNG buses for sustainability</li>
                    <li><b>Smart toll systems</b> (FASTag technology)</li>
                    <li>Real-time traffic management systems</li>
                  </ul>
                </div>
                <div className="bg-primary/10 rounded p-4 text-sm border-l-4 border-primary">
                  <p className="font-bold mb-2 text-primary">Travel Time Fact:</p>
                  <p>Ahmedabad to Mumbai now takes <b>6-8 hours</b> by bus/car</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- 9. Fun Facts (Clear Contrast and Hover) --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Fascinating Facts & Achievements 💡
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-xl transition-shadow p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary bg-muted/40 p-3 rounded-lg flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-extrabold text-lg leading-snug mb-1 text-foreground">{item.fact}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* --- 10. Challenges & Solutions (Checkmark/X Icon and Semantic Colors) --- */}
        <section className="mb-24">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Challenges & Modern Solutions ✅
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="border-destructive/30 hover:shadow-lg transition-shadow bg-card/70">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-destructive">Historical Challenges</h3>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-extrabold mt-1 text-lg">✗</span>
                    <span className="font-medium">Poor road connectivity in rural areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-extrabold mt-1 text-lg">✗</span>
                    <span className="font-medium">Lack of standardized road maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-extrabold mt-1 text-lg">✗</span>
                    <span className="font-medium">Safety concerns on unmaintained roads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive font-extrabold mt-1 text-lg">✗</span>
                    <span className="font-medium">Traffic congestion in major cities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:shadow-lg transition-shadow bg-card/70">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Modern Solutions</h3>
                <ul className="space-y-4 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-extrabold mt-1 text-lg">✓</span>
                    <span className="font-medium">Comprehensive rural road development programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-extrabold mt-1 text-lg">✓</span>
                    <span className="font-medium">Systematic maintenance through toll collection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-extrabold mt-1 text-lg">✓</span>
                    <span className="font-medium">Safety features: street lights, barriers, markings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-extrabold mt-1 text-lg">✓</span>
                    <span className="font-medium">Smart traffic management and AI-based systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- 11. Call to Action --- */}
        <section className="bg-primary/10 rounded-xl p-12 text-center border border-primary/30 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Explore More Transport History 🌍
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn about how railways, air transport, and maritime routes shaped Gujarat's development.
          </p>
          <CTAs navigate={navigate} />
        </section>
      </div>
    </main>
  );
};

export default RoadTransport;

// --- Helper Component for CTAs ---
function CTAs({ navigate }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <Button 
        onClick={() => navigate('/rail-transport')} 
        className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-md hover:shadow-xl transition-all" 
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
      <Button 
        variant="outline" 
        onClick={() => navigate('/water-transport')} 
        className="text-lg px-8 py-6 hover:bg-muted/30 transition-colors border-border"
        aria-label="Go to Water Transport"
      >
        Water Transport
      </Button>
    </div>
  );
}