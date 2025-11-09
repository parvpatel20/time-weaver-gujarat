import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, Calendar, TrendingUp, Users } from "lucide-react";
import vadodaraAirportImage from "@/assets/vad_air.png";

const VadodaraAirportDetail = () => {
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
              Vadodara Airport (Harna Airport)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Gujarat’s First Green Terminal & A Major Air Gateway for Central Gujarat
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={vadodaraAirportImage}
              alt="Vadodara Airport"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Card */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Plane className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1.5+ Million</div>
                  <p className="text-sm text-muted-foreground">Annual Passengers</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">2016</div>
                  <p className="text-sm text-muted-foreground">New Terminal Inaugurated</p>
                </div>

                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Green Terminal</div>
                  <p className="text-sm text-muted-foreground">India’s 2nd Eco-Friendly Airport</p>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Vadodara Airport, located in Harni, is a major domestic aviation hub serving the
                  cultural, industrial, and educational capital of Gujarat. Known for its modern
                  architecture and eco-friendly design, the airport is one of India's first
                  fully green airports, emphasizing sustainability and energy efficiency.
                </p>
                <p className="text-muted-foreground mb-4">
                  It is widely used by business travelers, students, industrial employees,
                  tourists, and professionals due to Vadodara’s strong presence in engineering,
                  petrochemicals, pharmaceuticals, and academia.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Vadodara has had aviation operations since the early 1950s, but the modern
                  transformation began with the inauguration of the new integrated terminal in 2016.
                </p>
                <p className="text-muted-foreground mb-4">
                  The new terminal was built with advanced green concepts, including solar power,
                  natural lighting, and sustainable materials, making it the second green airport
                  in India after Kochi.
                </p>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Connectivity & Destinations
                </h2>
                <p className="text-muted-foreground mb-4">
                  Vadodara Airport offers excellent connectivity to major business and metro cities.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Major Domestic Routes:</strong> Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata</li>
                  <li><strong>High Business Traffic:</strong> To Mumbai, Bengaluru & Hyderabad</li>
                  <li><strong>Future International Potential:</strong> Gulf sector flights expected in future</li>
                  <li><strong>Special Demand:</strong> Dubai, Abu Dhabi & Singapore connectivity</li>
                </ul>

                {/* Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Airport Infrastructure
                </h2>
                <p className="text-muted-foreground mb-4">
                  Vadodara Airport is known for its clean design, efficient operations,
                  and sustainable engineering.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Runway length: 2,500 meters (suitable for narrow-body jets)</li>
                  <li>New eco-friendly terminal with contemporary architecture</li>
                  <li>Modern ATC tower and updated navigation systems</li>
                  <li>Cargo terminal supporting industrial shipments</li>
                  <li>Energy-efficient lighting & solar-powered systems</li>
                  <li>Spacious interiors with art that reflects Vadodara’s rich culture</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Serving as the aviation hub for Central Gujarat, Vadodara Airport contributes to
                  the region’s economic growth by supporting:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Industrial giants like ONGC, IOCL, GSFC, GAIL</li>
                  <li>Manufacturing & engineering sector exports</li>
                  <li>Pharmaceutical & chemical industry mobility</li>
                  <li>Business travel for corporate headquarters in the region</li>
                  <li>Academic travel for MSU Vadodara & other institutes</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Enhanced passenger facilities and seating zones</li>
                  <li>Automated luggage & security systems</li>
                  <li>Digital flight information and smart passenger flow</li>
                  <li>New apron space for additional aircraft parking</li>
                  <li>Improved runway lighting for safer night operations</li>
                </ul>

                {/* Engineering */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Sustainability Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Sustainable design with solar energy systems</li>
                  <li>Terminal built with eco-friendly materials</li>
                  <li>Natural daylight through large glass façades</li>
                  <li>Rainwater harvesting systems</li>
                  <li>High-efficiency HVAC systems for energy conservation</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Runway length limits wide-body international aircraft</li>
                  <li>Increasing traffic pressure due to business travel</li>
                  <li>Demand for international flights exceeding current capacity</li>
                  <li>Limited cargo capacity compared to larger airports</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Outlook
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Runway extension plans for future international operations</li>
                  <li>Upgraded cargo terminal for industrial shipments</li>
                  <li>New flight routes to Gulf & Southeast Asia (proposed)</li>
                  <li>Passenger terminal expansion for higher yearly capacity</li>
                  <li>Integration with Vadodara’s improved road network</li>
                </ul>

              </div>
            </CardContent>
          </Card>

          {/* Interesting Facts */}
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Interesting Facts
              </h3>
              <ul className="space-y-3">
                {[
                  "Vadodara Airport is India’s second green airport after Kochi.",
                  "It is known for its beautiful glass architecture and eco-friendly terminal.",
                  "The airport handles heavy business traffic due to Vadodara’s industrial hubs.",
                  "Originally planned for international flights—expansion is under discussion.",
                  "The airport features large art installations showcasing Vadodara’s culture.",
                  "It is one of the cleanest and most efficient airports in Central Gujarat."
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

export default VadodaraAirportDetail;
