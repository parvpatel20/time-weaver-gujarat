import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, Calendar, TrendingUp, MapPin } from "lucide-react";
const suratAirportImage = '/assets/surat_air.png';

const SuratAirportDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        <Link to="/air-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Air Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Surat Airport
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              The Fastest-Growing Airport of Gujarat — Supporting the Diamond & Textile Capital of India
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={suratAirportImage}
              alt="Surat Airport"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Highlight Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Plane className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">3+ Million</div>
                  <p className="text-sm text-muted-foreground">Annual Passengers</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">2007</div>
                  <p className="text-sm text-muted-foreground">Commercial Relaunch</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Fastest Growth</div>
                  <p className="text-sm text-muted-foreground">Among Indian Tier-2 Airports</p>
                </div>
              </div>

              {/* Rich Content */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Surat Airport, located at Magdalla in Gujarat, is the primary air gateway for
                  the rapidly growing diamond, textile, and industrial sectors of Surat.
                  Recognized as one of the fastest-growing airports in India, it has seen
                  remarkable progress in passenger traffic, runway development, and flight frequency.
                </p>
                <p className="text-muted-foreground mb-4">
                  The airport serves business travelers, exporters, domestic tourists, students, and
                  NRI communities who frequently travel between Surat and metro cities across India.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Originally constructed in the 1970s, Surat Airport operated limited civilian flights
                  until 2007, when it was officially revived with major upgrades and new commercial routes.
                </p>
                <p className="text-muted-foreground mb-4">
                  Since then, the airport has grown exponentially, supported by strong industrial demand
                  and continuous efforts from local businesses and the Airport Authority of India.
                </p>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Connectivity & Destinations
                </h2>
                <p className="text-muted-foreground mb-4">
                  Surat Airport offers a mix of business-heavy domestic routes and regional connectivity.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Major Domestic Routes:</strong> Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Goa</li>
                  <li><strong>Regional Connectivity:</strong> Ahmedabad, Bhavnagar, and Udaipur</li>
                  <li><strong>International (Proposed/Seasonal):</strong> Dubai & Sharjah demand is rising</li>
                  <li><strong>Future Demand:</strong> Direct flights to Singapore, Europe, and Gulf</li>
                </ul>

                {/* Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Airport Infrastructure
                </h2>
                <p className="text-muted-foreground mb-4">
                  Surat Airport features modern infrastructure designed to meet the growing needs
                  of one of India’s busiest industrial cities.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Runway length of 2,905 meters—capable of handling Airbus A321</li>
                  <li>Newly expanded terminal with increased passenger capacity</li>
                  <li>Night landing facilities with advanced lighting systems</li>
                  <li>State-of-the-art ATC tower and aircraft navigation systems</li>
                  <li>Cargo terminal supporting textile & diamond shipments</li>
                  <li>Multiple boarding gates and modern waiting areas</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Economic Importance</h2>
                <p className="text-muted-foreground mb-4">
                  Surat Airport is essential for keeping pace with the economic scale of the city,
                  known globally as India’s diamond polishing capital and a major textile center.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Supports multi-billion-dollar diamond exports</li>
                  <li>Enables quick movement for textile & garment industries</li>
                  <li>Boosts startup ecosystem & business travel</li>
                  <li>Critical for NRI travel from Europe, Africa, and Middle East</li>
                  <li>Enhances regional tourism and industrial connectivity</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>New terminal expansion for 5+ million annual passengers</li>
                  <li>Upgraded runway with extended taxiways</li>
                  <li>Advanced baggage handling & security systems</li>
                  <li>Improved pick-up/drop lanes & parking zones</li>
                  <li>Digital passenger guidance and information systems</li>
                </ul>

                {/* Engineering */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Airport designed on reclaimed land along the Tapti Riverbank</li>
                  <li>High-strength apron area for heavy aircraft parking</li>
                  <li>Energy-efficient terminal with modern ventilation</li>
                  <li>Smart runway surface for all-weather operations</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>High passenger growth leading to capacity pressure</li>
                  <li>Need for long-haul international flight infrastructure</li>
                  <li>Demand for larger wide-body compatible runway</li>
                  <li>Traffic congestion during peak business hours</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Vision
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Major terminal expansion under Adani Airports</li>
                  <li>Upgrading runway for wide-body international flights</li>
                  <li>New cargo terminal for textiles, diamonds & e-commerce</li>
                  <li>International flights to Gulf, Singapore & Europe</li>
                  <li>Integration with high-speed road network</li>
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
                  "Surat Airport recorded one of India’s highest passenger growth rates.",
                  "The airport serves the world’s largest diamond polishing hub.",
                  "It once handled only a few flights per week; now it handles dozens daily.",
                  "Surat’s business community played a key role in reviving the airport.",
                  "Runway and terminal upgrades are ongoing for international expansion.",
                  "Surat is expected to get direct international routes in the coming years."
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

export default SuratAirportDetail;
