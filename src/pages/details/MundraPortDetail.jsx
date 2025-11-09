import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Calendar, TrendingUp, MapPin } from 'lucide-react';
import mundraImage from '@/assets/mundra-port.jpg';

const MundraPortDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        <Link to="/water-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Water Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Mundra Port
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              India’s Largest Private Port & A Global Gateway for Trade and Logistics
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={mundraImage}
              alt="Mundra Port"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">200+ MTPA</div>
                  <p className="text-sm text-muted-foreground">Cargo Handling Capacity</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1998</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">India’s No. 1</div>
                  <p className="text-sm text-muted-foreground">Private Commercial Port</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* OVERVIEW */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Mundra Port, operated by Adani Ports and SEZ Limited (APSEZ), is India’s largest
                  private commercial port and one of the fastest-growing seaports in Asia. Located on the
                  Gulf of Kachchh in Gujarat, Mundra Port is a world-class maritime gateway connecting
                  India to Europe, the Middle East, Africa, and Southeast Asia.
                </p>
                <p className="text-muted-foreground mb-4">
                  Built with cutting-edge technology and deep-draft capabilities, Mundra Port handles
                  containers, crude oil, automobiles, coal, LNG, bulk cargo, fertilizers, and more. It
                  plays a crucial role in India’s international trade and logistics backbone.
                </p>

                {/* HISTORY */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Established in 1998, Mundra began as a small captive jetty and expanded rapidly into a
                  multi-commodity, multi-terminal integrated port. Over the years, under APSEZ, it has
                  become India’s most technologically advanced port and a global benchmark in private
                  maritime infrastructure.
                </p>
                <p className="text-muted-foreground mb-4">
                  The development of Mundra Port acted as the foundation for the creation of Mundra SEZ,
                  one of India’s largest industrial zones.
                </p>

                {/* LOCATION ADVANTAGE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Strategic Location Advantage
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Direct access to major international shipping routes</li>
                  <li>Nearest Indian port to Gulf nations and European lanes</li>
                  <li>Excellent road and rail connectivity to northern India via DFC</li>
                  <li>Close to Kandla, Gandhidham, Bhuj, and major industrial hubs of Kutch</li>
                </ul>

                {/* INFRASTRUCTURE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Port Infrastructure</h2>
                <p className="text-muted-foreground mb-4">
                  Mundra Port boasts some of the most advanced maritime and cargo-handling
                  infrastructure in India, enabling large-scale, multi-commodity operations.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Deep-draft berths allowing large container and bulk vessels</li>
                  <li>Dedicated terminals for containers, dry bulk, liquid cargo, and Ro-Ro</li>
                  <li>World-class container terminal with automated systems</li>
                  <li>Massive warehousing, storage yards, and tank farms</li>
                  <li>Specialized LNG terminal with state-of-the-art safety technology</li>
                  <li>Integrated railway connectivity inside the port premises</li>
                </ul>

                {/* CARGO HANDLING */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Major Cargo Handled</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Containerized cargo</li>
                  <li>Crude oil & petroleum products</li>
                  <li>Coal & lignite for power plants</li>
                  <li>LNG and LPG</li>
                  <li>Fertilizers, food grains, and edible oils</li>
                  <li>Automobiles & heavy machinery (Ro-Ro)</li>
                </ul>

                {/* ECONOMIC SIGNIFICANCE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Mundra Port is a critical contributor to India’s maritime economy and Gujarat’s
                  industrial growth. It handles a significant portion of India’s total EXIM trade.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Supports logistics for North and West India’s supply chain</li>
                  <li>Backbone for petrochemical, coal, and manufacturing industries</li>
                  <li>Boosts Gujarat’s SEZ, MSME, and export businesses</li>
                  <li>Enables large-scale energy imports (coal, LNG, oil)</li>
                  <li>Strengthens India’s global shipping connectivity</li>
                </ul>

                {/* MODERN DEVELOPMENTS */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Asia’s largest coal and container handling capacity</li>
                  <li>Integration with Western Dedicated Freight Corridor (DFC)</li>
                  <li>Automated cranes, scanners, and RTGC machinery</li>
                  <li>AI-based logistics and real-time cargo management</li>
                </ul>

                {/* ENGINEERING */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Deep-draft, all-weather port design</li>
                  <li>Smart marine control tower with advanced navigation systems</li>
                  <li>World-class breakwater construction for wave protection</li>
                  <li>Heavy-duty berths for bulk & container mega vessels</li>
                </ul>

                {/* CHALLENGES */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Managing heavy coal and container traffic simultaneously</li>
                  <li>Environmental concerns around coastal areas</li>
                  <li>Balancing rapid industrial growth with ecological sustainability</li>
                </ul>

                {/* FUTURE PLANS */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Growth Plans
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Massive port expansion under Sagarmala Project</li>
                  <li>New container and liquid cargo terminals</li>
                  <li>Enhanced Ro-Ro and automobile logistics hubs</li>
                  <li>AI-automated logistics and smart port systems</li>
                  <li>Expansion of Mundra SEZ with new industrial clusters</li>
                </ul>

              </div>
            </CardContent>
          </Card>

          {/* Interesting Facts */}
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Interesting Facts</h3>
              <ul className="space-y-3">
                {[
                  'Mundra is India’s largest private commercial port.',
                  'It handles more cargo than many major Indian ports combined.',
                  'The port has Asia’s largest coal import terminal.',
                  'Mundra Port is directly connected to the Dedicated Freight Corridor.',
                  'It operates India’s largest SEZ—Mundra SEZ.',
                  'The port can handle some of the world’s largest container vessels.'
                ].map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✦</span>
                    <span className="text-lg">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </main>
  );
};

export default MundraPortDetail;
