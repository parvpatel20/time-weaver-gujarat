import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Calendar, TrendingUp, MapPin } from 'lucide-react';
const pipavavImage = '/assets/pipavav_port.png';

const PipavavPortDetail = () => {
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
              Pipavav Port (APM Terminals Pipavav)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              India’s First Private Port and a Key Gateway for Global Maritime Trade
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={pipavavImage}
              alt="Pipavav Port"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">~25 MTPA</div>
                  <p className="text-sm text-muted-foreground">Cargo Capacity</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1996</div>
                  <p className="text-sm text-muted-foreground">Year Commissioned</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Private Pioneer</div>
                  <p className="text-sm text-muted-foreground">India’s First Private Port</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* OVERVIEW */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Pipavav Port, officially known as APM Terminals Pipavav, is one of India’s most
                  important and efficiently managed private seaports. Situated on the southwest
                  coast of Gujarat along the Arabian Sea, this multi-purpose port handles containers,
                  bulk cargo, liquid cargo, Ro-Ro services, and intermodal logistics.
                </p>
                <p className="text-muted-foreground mb-4">
                  Known for reliability and world-class operational standards, Pipavav serves as a
                  strategic gateway connecting India’s industrial heartland with global shipping
                  routes, supporting international trade across sectors like FMCG, automobiles,
                  petrochemicals, agriculture, and manufacturing.
                </p>

                {/* HISTORY */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Pipavav Port holds the distinction of being **India’s first private port**, marking a
                  major shift in the country’s maritime policy by allowing private-sector participation
                  in port infrastructure. It began operations in the mid-1990s and later partnered
                  with APM Terminals — a global leader in port management based in the Netherlands.
                </p>
                <p className="text-muted-foreground mb-4">
                  This partnership brought advanced port-handling systems, safety practices, and
                  international best standards, transforming Pipavav into a modern and competitive port.
                </p>

                {/* LOCATION ADVANTAGE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Strategic Location</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Located near major shipping lanes heading to Europe, Middle East, and Africa</li>
                  <li>Close to Gujarat’s industrial belt — Rajkot, Jamnagar, Bhavnagar, and Ahmedabad</li>
                  <li>Rail and road connectivity to North and Central India</li>
                  <li>Proximity to large manufacturing clusters like Sanand, Saurashtra region, and Dholera SIR</li>
                </ul>

                {/* INFRASTRUCTURE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Port Infrastructure</h2>
                <p className="text-muted-foreground mb-4">
                  Pipavav has developed strong, modern port facilities capable of handling diverse
                  cargo types. The port infrastructure supports high-efficiency turnaround times and
                  secure maritime operations.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Dedicated container terminal with advanced cranes</li>
                  <li>Bulk cargo berths for coal, fertilizers, and minerals</li>
                  <li>Oil and liquid cargo handling facilities</li>
                  <li>Ro-Ro terminal for automobiles and large machinery</li>
                  <li>Extensive storage yards and warehousing</li>
                  <li>On-dock rail terminal linked to Indian Railways</li>
                </ul>

                {/* CARGO HANDLING */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Major Cargo Handled</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Containerized goods (FMCG, textiles, electronics)</li>
                  <li>Automobiles (Ro-Ro exports & imports)</li>
                  <li>Fertilizers and agricultural products</li>
                  <li>Coal, cement, and dry bulk goods</li>
                  <li>Liquid cargo including chemicals and edible oils</li>
                  <li>Steel coils, pipes, and heavy machinery</li>
                </ul>

                {/* ECONOMIC SIGNIFICANCE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Pipavav Port supports industrial, agricultural, and automotive exports, acting as a
                  catalyst for economic growth in Gujarat and India. Its efficient operations reduce
                  logistics costs, making Indian goods more globally competitive.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Supports Saurashtra's industries and SEZ zones</li>
                  <li>Important hub for automobile export logistics</li>
                  <li>Connects India's manufacturing corridor to global markets</li>
                  <li>Enhances agricultural exports including cotton, spices, and food products</li>
                  <li>Boosts employment in port-linked industries</li>
                </ul>

                {/* MODERN DEVELOPMENTS */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Container terminal upgrades with automated stacking systems</li>
                  <li>Digitized port operations & smart logistics management</li>
                  <li>Safety and environmental sustainability initiatives</li>
                  <li>Expansion of berths for higher capacity vessels</li>
                </ul>

                {/* ENGINEERING */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Deep-draft, all-weather port design</li>
                  <li>Modern breakwater to protect vessels and berths</li>
                  <li>Efficient Ro-Ro ramps for vehicle handling</li>
                  <li>Rail siding inside port for seamless container transfer</li>
                </ul>

                {/* CHALLENGES */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Competition from larger ports like Mundra and Kandla</li>
                  <li>Weather-related operational pauses during cyclones</li>
                  <li>Need for continuous dredging to maintain draft levels</li>
                  <li>Expanding infrastructure to meet increasing demand</li>
                </ul>

                {/* FUTURE PLANS */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Growth Plans
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Berth expansion for larger container ships</li>
                  <li>Additional liquid cargo handling capabilities</li>
                  <li>Integration with Dedicated Freight Corridor (DFC)</li>
                  <li>Automation of yard operations and gate systems</li>
                  <li>Enhanced rail connectivity to North India</li>
                </ul>

              </div>
            </CardContent>
          </Card>

          {/* INTERESTING FACTS */}
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Interesting Facts</h3>
              <ul className="space-y-3">
                {[
                  'Pipavav is India’s first operational private port.',
                  'It is operated by APM Terminals, one of the world’s largest port operators.',
                  'The port supports both container and Ro-Ro (vehicle) operations.',
                  'Pipavav Port is directly connected to the Western Dedicated Freight Corridor.',
                  'The port played a major role in boosting Saurashtra’s textile and engineering exports.',
                  'It maintains one of the highest operational efficiency standards among Indian ports.'
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

export default PipavavPortDetail;
