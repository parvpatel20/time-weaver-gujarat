import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, Calendar, Users, MapPin } from 'lucide-react';
import airportImage from '@/assets/sardar_air.png';

const SVPIAirportDetail = () => {
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
              Sardar Vallabhbhai Patel International Airport
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Gujarat’s Premier International Gateway Connecting the World with Ahmedabad
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={airportImage}
              alt="Sardar Vallabhbhai Patel International Airport"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Highlight Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Plane className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">10+ Million</div>
                  <p className="text-sm text-muted-foreground">Annual Passengers</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1937</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">2 Terminals</div>
                  <p className="text-sm text-muted-foreground">Domestic + International</p>
                </div>
              </div>

              {/* In-Depth Content */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Sardar Vallabhbhai Patel International Airport (SVPI Airport), located in Ahmedabad–Gandhinagar
                  region, is Gujarat’s busiest international airport and one of India’s
                  top air travel hubs. It handles millions of domestic and international passengers annually,
                  connecting Gujarat with major global and national destinations.
                </p>
                <p className="text-muted-foreground mb-4">
                  The airport serves tourists, business travelers, professionals, students, and NRIs,
                  making it a vital transportation hub for western India.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Established in 1937, the airport initially operated small aircraft and later transformed
                  into a major aviation center during the post-independence era. Over the years, the
                  airport expanded runways, terminals, cargo facilities, and international connectivity.
                </p>
                <p className="text-muted-foreground mb-4">
                  It was renamed in honor of Sardar Vallabhbhai Patel, India’s first Deputy Prime Minister
                  and one of the most influential freedom fighters.
                </p>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Connectivity & Destinations</h2>
                <p className="text-muted-foreground mb-4">
                  The airport connects Ahmedabad to major cities across India and to international hubs
                  across the globe, especially the Middle East and Southeast Asia.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Domestic:</strong> Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Pune, Goa</li>
                  <li><strong>International:</strong> Dubai, Abu Dhabi, Doha, Muscat, Singapore</li>
                  <li><strong>Seasonal/Haj Travel:</strong> Jeddah and Medina</li>
                  <li><strong>Long-Term Expansion Plans:</strong> Europe and direct U.S. connectivity</li>
                </ul>

                {/* Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Airport Infrastructure</h2>
                <p className="text-muted-foreground mb-4">
                  SVPI Airport features modern aviation infrastructure with separate terminals for international
                  and domestic operations.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Two terminals (T1 – Domestic, T2 – International)</li>
                  <li>3,489-meter runway compatible with wide-body aircraft</li>
                  <li>Advanced ATC tower and radar systems</li>
                  <li>24x7 operations with modern navigation systems</li>
                  <li>Cargo handling facility with cold storage and logistics support</li>
                  <li>Multiple lounges, duty-free shops, restaurants, and retail outlets</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Economic Importance</h2>
                <p className="text-muted-foreground mb-4">
                  As Gujarat’s economic and cultural capital, Ahmedabad relies heavily on the airport
                  for business, startup growth, industrial outreach, global trade, and tourism.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Supports textile, pharma, chemical, and diamond industries</li>
                  <li>Enables international business and investor mobility</li>
                  <li>Important for NRI traffic from North America, UK, and Gulf nations</li>
                  <li>Crucial for IT, startup ecosystem, and academic institutions</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>AI-powered surveillance and crowd monitoring</li>
                  <li>Upgraded terminal interiors and seating zones</li>
                  <li>New aerobridges and boarding gates</li>
                  <li>Improved baggage handling and check-in systems</li>
                  <li>Enhanced public transport connections including BRTS and Metro</li>
                </ul>

                {/* Engineering */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Engineering Highlights</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Runway capable of handling Boeing 747 and Airbus A330 aircraft</li>
                  <li>High-speed taxiways for efficient aircraft movement</li>
                  <li>Modern firefighting and rescue facilities</li>
                  <li>Energy-efficient lighting and terminal design</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Increasing passenger load beyond existing terminal capacity</li>
                  <li>Limited peak-hour slot availability</li>
                  <li>Traffic congestion at airport access roads</li>
                  <li>Need for more international long-haul connectivity</li>
                </ul>

                {/* Future Expansion */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Developments
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Expansion of T2 terminal under Adani Airports management</li>
                  <li>Development of new apron areas for more aircraft parking</li>
                  <li>Integration with Ahmedabad Metro Phase-II</li>
                  <li>Direct connectivity with Dholera International Airport (future)</li>
                  <li>Increased international flight network to Europe & East Asia</li>
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
                  'SVPI Airport is one of the top busiest airports in Western India.',
                  'It was originally built in 1937 and expanded significantly post-independence.',
                  'It handles more than 350 flights weekly, including international routes.',
                  'The airport played a crucial role in Gujarat’s tourism and global business boom.',
                  'Named after Sardar Vallabhbhai Patel, “The Iron Man of India.”',
                  'It will be complemented by the upcoming Dholera International Airport.'
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

export default SVPIAirportDetail;
