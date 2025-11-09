import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Calendar, TrendingUp } from 'lucide-react';
import bhavnagarImage from '@/assets/bhav_port.png';

const BhavnagarPortDetail = () => {
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
              Bhavnagar Port
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              A Historic Maritime Hub of Saurashtra with Strategic Coastal Importance
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={bhavnagarImage}
              alt="Bhavnagar Port"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Card */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">6+ MTPA</div>
                  <p className="text-sm text-muted-foreground">Cargo Handling Capacity</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1723</div>
                  <p className="text-sm text-muted-foreground">Year Originated</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Historic Trade</div>
                  <p className="text-sm text-muted-foreground">Gulf & East Africa Routes</p>
                </div>
              </div>

              {/* Rich Content */}
              <div className="prose prose-lg max-w-none">

                {/* OVERVIEW */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Bhavnagar Port, located on the western coast of Gujarat along the Gulf of Khambhat,
                  is one of India’s oldest ports with a history of over 300 years. The port has played
                  a vital role in maritime trade across Saurashtra, especially with the Gulf nations,
                  East Africa, and domestic coastal routes.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, Bhavnagar Port is known for coastal shipping, salt exports, chemical
                  industries, shipbreaking activities, and serving as a key maritime gateway for the
                  Saurashtra region.
                </p>

                {/* HISTORY */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Established in the early 18th century by the Bhavnagar princely state, the port
                  became a major maritime trade centre for cotton, spices, diamonds, and handicrafts.
                </p>
                <p className="text-muted-foreground mb-4">
                  During the British era, Bhavnagar port became one of the busiest princely ports,
                  connecting Indian merchants to East Africa, Oman, and the Arabian Peninsula. In
                  modern times, the region expanded with the world-famous **Alang Shipbreaking Yard**,
                  one of the largest ship recycling yards globally.
                </p>

                {/* LOCATION ADVANTAGE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Strategic Location</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Located centrally on the Gulf of Khambhat</li>
                  <li>Acts as a gateway for Saurashtra’s industrial belt</li>
                  <li>Connected to Bhavnagar, Ahmedabad, Bagodara, and Dholera SIR</li>
                  <li>Proximity to Alang — world’s largest shipbreaking yard</li>
                </ul>

                {/* INFRASTRUCTURE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Port Infrastructure</h2>
                <p className="text-muted-foreground mb-4">
                  Bhavnagar Port has been upgraded over time to accommodate modern cargo operations
                  while maintaining its role as a coastal and bulk-handling port.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Deep-water anchorage for medium-sized vessels</li>
                  <li>Dedicated berths for dry bulk cargo</li>
                  <li>Storage yards for salt, coal, and minerals</li>
                  <li>Liquid cargo facilities for petrochemicals and oils</li>
                  <li>Mechanized loading/unloading equipment</li>
                  <li>Rail siding and road connectivity to national highways</li>
                </ul>

                {/* CARGO HANDLING */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Major Cargo Handled</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Salt exports (Bhavnagar is India’s salt production hub)</li>
                  <li>Coal and lignite</li>
                  <li>Chemicals and petro-products</li>
                  <li>Construction materials and heavy machinery</li>
                  <li>Fertilizers and minerals</li>
                  <li>Shipbreaking scrap from Alang</li>
                </ul>

                {/* ECONOMIC SIGNIFICANCE */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Economic Importance</h2>
                <p className="text-muted-foreground mb-4">
                  Bhavnagar Port has historically served as an anchor for Saurashtra’s economy. Its
                  contribution spans trade, industry, and employment generation.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Supports one of the world’s largest shipbreaking zones (Alang)</li>
                  <li>Key export point for Gujarat’s salt industry</li>
                  <li>Serves petrochemical & chemical industries around Bhavnagar</li>
                  <li>Supports agriculture trade for cotton and groundnuts</li>
                  <li>Facilitates coastal shipping to Mumbai, Goa, and southern ports</li>
                </ul>

                {/* MODERN DEVELOPMENTS */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>New cargo handling equipment and dredging projects</li>
                  <li>Expansion of berths and modernization programs</li>
                  <li>Integration with Gujarat Maritime Board's digital systems</li>
                  <li>Enhanced coastal shipping for faster intra-state logistics</li>
                </ul>

                {/* ENGINEERING FEATURES */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Specialized design to handle tidal variations of Gulf of Khambhat</li>
                  <li>Breakwaters and protected berths for monsoon operations</li>
                  <li>Tanker-compatible liquid cargo infrastructure</li>
                  <li>Heavy-duty yards for shipbreaking scrap storage</li>
                </ul>

                {/* CHALLENGES */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Challenges
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>High siltation in the Gulf requiring continuous dredging</li>
                  <li>Weather challenges during monsoons</li>
                  <li>Competition from larger modern ports like Mundra & Pipavav</li>
                  <li>Need for modernization to meet global port standards</li>
                </ul>

                {/* FUTURE PLANS */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Growth Plans
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Integration with future Dholera industrial corridor</li>
                  <li>Deepening of channels for larger vessels</li>
                  <li>Development of new container-handling facilities</li>
                  <li>Port-led industrialization under Sagarmala</li>
                  <li>Expansion of liquid cargo terminals</li>
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
                  'Bhavnagar Port is more than 300 years old.',
                  'It served as one of the most active princely ports in Western India.',
                  'It is the closest port to Alang Shipbreaking Yard — the largest in the world.',
                  'Bhavnagar is one of India’s biggest salt-producing regions.',
                  'The port was once famous for trade with East Africa and the Gulf.',
                  'It continues to be a crucial node for coastal shipping and regional trade.'
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

export default BhavnagarPortDetail;
