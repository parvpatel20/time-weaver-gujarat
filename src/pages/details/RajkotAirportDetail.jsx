import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, Calendar, TrendingUp, MapPin } from "lucide-react";
const rajkotAirportImage = '/assets/raj_air.png';

const RajkotAirportDetail = () => {
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
              Rajkot International Airport (Hirasar Airport)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Gujarat’s New Generation Airport Designed for Global Connectivity & Future Growth
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={rajkotAirportImage}
              alt="Rajkot International Airport"
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
                  <div className="text-2xl font-display font-bold text-accent">2,500+ Acres</div>
                  <p className="text-sm text-muted-foreground">Airport Area</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">2023</div>
                  <p className="text-sm text-muted-foreground">Year Commissioned</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">International Ready</div>
                  <p className="text-sm text-muted-foreground">Wide-Body Compatible</p>
                </div>
              </div>

              {/* In-Depth Text */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Rajkot International Airport, located near Hirasar village on the Rajkot–Ahmedabad
                  highway, is Gujarat’s newest and one of India’s most modern greenfield airports. 
                  Built to meet future aviation demand, it replaces the old Rajkot Airport which was
                  constrained by city limits.
                </p>
                <p className="text-muted-foreground mb-4">
                  The airport is designed to handle international flights, wide-body aircraft, and 
                  significantly higher passenger traffic, making it a major aviation hub for the 
                  Saurashtra region.
                </p>

                {/* Reason for New Airport */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Why a New Airport Was Needed
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Old airport was inside city limits — no expansion possible</li>
                  <li>Runway unable to accommodate larger aircraft</li>
                  <li>Rapid industrial growth in Rajkot requiring better logistics</li>
                  <li>Surge in business travelers and regional mobility</li>
                </ul>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Connectivity & Routes</h2>
                <p className="text-muted-foreground mb-4">
                  Rajkot International Airport connects major metro cities and will gradually expand
                  into international routes.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Domestic:</strong> Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata</li>
                  <li><strong>High-Demand Routes:</strong> Pune, Chennai, Ahmedabad</li>
                  <li><strong>Future International Potential:</strong> Dubai, Doha, Muscat</li>
                  <li><strong>Industrial Demand:</strong> Export & business flights for engineering sectors</li>
                </ul>

                {/* Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Airport Infrastructure
                </h2>
                <p className="text-muted-foreground mb-4">
                  The airport has been built with world-class infrastructure suitable for 
                  next-generation aviation operations.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Runway length: 3,040 meters — supports wide-body jets (Boeing 777, Airbus A330)</li>
                  <li>Modern glass-and-steel terminal with cultural art installations</li>
                  <li>Multiple aerobridges and aircraft parking bays</li>
                  <li>Advanced baggage handling & security systems</li>
                  <li>Green building with energy-efficient systems</li>
                  <li>Large cargo terminal for industrial exports</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic & Industrial Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rajkot’s booming engineering, automobile, casting, and pharmaceutical industries 
                  rely heavily on fast air logistics. This airport strengthens those sectors by 
                  offering:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Faster business travel between metro cities</li>
                  <li>Direct air corridor for exports</li>
                  <li>Support for foreign investment and industrial expansion</li>
                  <li>Boost to tourism around Saurashtra (Gir, Dwarka, Somnath)</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Smart terminal automation & digital passenger systems</li>
                  <li>Wide-body aircraft compatible apron</li>
                  <li>New cargo village for industrial shipments</li>
                  <li>Solar-powered systems for sustainability</li>
                  <li>Enhanced road access from Rajkot city</li>
                </ul>

                {/* Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Greenfield airport designed from scratch</li>
                  <li>All-weather runway with CAT-I ILS</li>
                  <li>Earthquake-resistant terminal structure</li>
                  <li>Natural light-focused architectural design</li>
                  <li>Eco-friendly HVAC and water management systems</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Need to increase flight frequency to meet rising demand</li>
                  <li>Distance from Rajkot city (~30 km)</li>
                  <li>First phase handles limited international operations</li>
                  <li>Future expansions depend on passenger growth</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Vision
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>International flights to Gulf & Southeast Asia</li>
                  <li>Wider cargo operations for industrial exports</li>
                  <li>New passenger terminal phase expansion</li>
                  <li>Integration with expressways & future bullet train corridor</li>
                  <li>Business aviation and MRO (maintenance) facilities</li>
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
                  "Rajkot International Airport is one of India's newest greenfield airports.",
                  "It can handle wide-body international aircraft — unlike the old city airport.",
                  "The airport covers over 2,500 acres, making it one of Gujarat’s largest aviation projects.",
                  "The terminal design includes art inspired by Rajkot’s culture and heritage.",
                  "It is expected to become a major aviation hub for the entire Saurashtra region.",
                  "Located on NH-27, it has excellent connectivity to key industrial zones."
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

export default RajkotAirportDetail;
