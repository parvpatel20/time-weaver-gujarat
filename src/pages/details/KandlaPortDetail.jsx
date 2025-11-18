import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Calendar, TrendingUp, MapPin } from 'lucide-react';
const kandlaImage = '/assets/kandla-port.jpg';

const KandlaPortDetail = () => {
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
              Kandla Port (Deendayal Port)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              India’s Largest and Busiest Port in Cargo Handling
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={kandlaImage}
              alt="Kandla Port"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Detail Card */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">115+ MTPA</div>
                  <p className="text-sm text-muted-foreground">Annual Cargo Capacity</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1950</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">India’s No. 1</div>
                  <p className="text-sm text-muted-foreground">Cargo Handling Port</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Kandla Port, renamed as Deendayal Port in 2017, is India’s largest port by cargo
                  handled and one of the most strategically important maritime gateways. Located on
                  the Gulf of Kachchh in Gujarat, the port serves as a major hub for crude oil,
                  petroleum products, chemicals, food grains, coal, and containers.
                </p>
                <p className="text-muted-foreground mb-4">
                  Its location near industrial regions, SEZ zones, and trade corridors makes it the
                  backbone of India’s western maritime trade and a crucial component of the nation’s
                  logistics ecosystem.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Historical Background
                </h2>
                <p className="text-muted-foreground mb-4">
                  Kandla Port was constructed in the early 1950s after the loss of Karachi Port during
                  the partition of India. It quickly emerged as a replacement deep-water port on the
                  western coast and played an essential role in India’s early industrialization.
                </p>
                <p className="text-muted-foreground mb-4">
                  The port's strategic significance increased with the discovery of oil fields, 
                  the expansion of petrochemical industries, and the rapid development of Gujarat’s 
                  coastline as a global trade zone.
                </p>

                {/* Location Advantage */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Strategic Location Advantage
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Located close to major global shipping routes</li>
                  <li>Nearest Indian port to the Middle East and Europe routes</li>
                  <li>Direct highway and rail connectivity with northern and western India</li>
                  <li>In proximity to Mundra, Gandhidham, Kandla SEZ, and Dholera SIR</li>
                </ul>

                {/* Port Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Port Infrastructure & Facilities
                </h2>
                <p className="text-muted-foreground mb-4">
                  Kandla Port features extensive port infrastructure designed for high-volume,
                  multi-commodity maritime operations.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>13+ berths with deep-draft docking capacity</li>
                  <li>Oil jetties for handling liquid cargo</li>
                  <li>Dedicated container handling terminals</li>
                  <li>Huge tank farms, storage yards, and warehouses</li>
                  <li>Fully mechanized cargo handling equipment</li>
                  <li>Rail-linked cargo yard and multi-model logistics connectivity</li>
                </ul>

                {/* Cargo Handling */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Cargo Handled</h2>
                <p className="text-muted-foreground mb-4">
                  Kandla Port is India’s largest dry cargo handler and one of the biggest oil-import
                  hubs, moving millions of tonnes of goods annually.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Petroleum and crude oil products</li>
                  <li>Coal, lignite, and dry bulk cargo</li>
                  <li>Timber logs and steel products</li>
                  <li>Chemicals, edible oils, and fertilizers</li>
                  <li>Containerized cargo and general goods</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Kandla Port serves as a powerful engine for India’s maritime economy and contributes
                  significantly to Gujarat’s industrial output.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Supports industries in Kutch, Saurashtra, and North Gujarat</li>
                  <li>Backbone for Indian oil and petrochemical movement</li>
                  <li>Major export-import hub for North Indian states</li>
                  <li>Boosts Kandla and Mundra SEZ development</li>
                  <li>Critical link for India’s international maritime trade</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Deep-draft expansion for mega vessels</li>
                  <li>Container terminal upgrades with automation</li>
                  <li>Advanced radar, navigation, and safety systems</li>
                  <li>Smart port management with real-time tracking</li>
                </ul>

                {/* Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Designed for cyclone and tidal resilience</li>
                  <li>Deep-water all-weather port infrastructure</li>
                  <li>Highly mechanized cargo systems</li>
                  <li>Large-scale dredging and expansion capacity</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>High siltation requiring continuous dredging</li>
                  <li>Managing peak-season freight congestion</li>
                  <li>Environmental impact & coastal protection</li>
                  <li>Balancing traditional and modern port operations</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Growth Plans
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Expansion under Sagarmala Project</li>
                  <li>New oil jetties & container berths</li>
                  <li>Integration with Dedicated Freight Corridor (DFC)</li>
                  <li>Automation & AI-based cargo management</li>
                  <li>Eco-friendly port modernization initiatives</li>
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
                  'Kandla Port is India’s largest port in terms of cargo handled.',
                  'It was built after India lost Karachi Port during partition.',
                  'One of the closest Indian ports to Middle Eastern trade routes.',
                  'Integrated with Western Dedicated Freight Corridor (DFC).',
                  'Nearby SEZ makes it a major export–import hub.',
                  'The port originally rose to prominence due to oil imports.'
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

export default KandlaPortDetail;
