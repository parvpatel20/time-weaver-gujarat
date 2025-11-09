import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Calendar, Users, Train } from 'lucide-react';
import stationImage from '@/assets/ahm_junc.png';

const AhmedabadJunctionDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        <Link to="/rail-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Rail Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Ahmedabad Junction (ADI)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Western India’s Busiest Railway Hub Connecting the Entire Nation
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={stationImage}
              alt="Ahmedabad Junction Railway Station"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Card */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Quick Info Boxes */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Train className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">12+ Platforms</div>
                  <p className="text-sm text-muted-foreground">Major Rail Hub</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1900</div>
                  <p className="text-sm text-muted-foreground">Year Opened</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">3+ Lakh/Day</div>
                  <p className="text-sm text-muted-foreground">Daily Passengers</p>
                </div>
              </div>

              {/* ENHANCED CONTENT */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Ahmedabad Junction (ADI), also known as Kalupur Railway Station, is one of India’s
                  busiest and most strategically important railway stations. It serves as the
                  primary railway hub for Gujarat, connecting the state to every major region of
                  India including Delhi, Mumbai, Chennai, Kolkata, Jaipur, Hyderabad, Bengaluru,
                  and North-East India.
                </p>
                <p className="text-muted-foreground mb-4">
                  As the headquarters of the Western Railway’s Ahmedabad Division, the station
                  handles long-distance superfast trains, mail/express routes, Vande Bharat
                  Express, Shatabdi services, and high-volume passenger commuting within Gujarat.
                </p>

                {/* Historical Significance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Significance</h2>
                <p className="text-muted-foreground mb-4">
                  Built in the early 1900s under the Bombay, Baroda & Central India Railway (BB&CI),
                  Ahmedabad Junction quickly emerged as a major stop due to the city's growth as a
                  textile, trade, and industrial powerhouse.  
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the decades, the station underwent multiple expansions, electrification,
                  introduction of broad-gauge lines, and integration into the national highway and
                  metro networks. Today, it is one of the most advanced stations within Western
                  Railway.
                </p>

                {/* Network Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Network Connectivity</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>North India:</strong> Delhi, Jaipur, Chandigarh, Jammu, Lucknow</li>
                  <li><strong>South India:</strong> Chennai, Bengaluru, Hyderabad, Kochi</li>
                  <li><strong>West India:</strong> Mumbai, Pune, Goa, Ratlam</li>
                  <li><strong>East India:</strong> Kolkata, Patna, Bhubaneswar, Guwahati</li>
                  <li><strong>Gujarat Network:</strong> Vadodara, Surat, Rajkot, Bhuj, Veraval, Dwarka</li>
                </ul>

                {/* Platforms & Facilities */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Station Infrastructure</h2>
                <p className="text-muted-foreground mb-4">
                  Ahmedabad Junction is equipped with modern passenger amenities and robust
                  rail-handling infrastructure. With more than 12 platforms connected through
                  multiple foot overbridges and escalators, the station efficiently handles one
                  of Western Railway’s largest daily traffic volumes.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>12+ platforms with automatic announcement and display systems</li>
                  <li>Dedicated arrival and departure blocks</li>
                  <li>Fully electrified tracks and modern signalling</li>
                  <li>VIP lounges, AC waiting rooms, retiring rooms</li>
                  <li>Food courts, book stalls, ATMs, pharmacy kiosks</li>
                  <li>Large parking zones and EV charging facilities</li>
                </ul>

                {/* Economic & Social Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Economic Importance</h2>
                <p className="text-muted-foreground mb-4">
                  Ahmedabad Junction is a critical gateway for Gujarat’s freight, tourism, trade,
                  and employment mobility. The station enables industrial migration between
                  Ahmedabad, Surat, Mumbai, and Delhi while supporting tourism to heritage sites
                  like Sabarmati Ashram, Kankaria, Adalaj, and Sardar Patel’s landmarks.
                </p>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Integration with Ahmedabad Metro (Kalupur Metro Station)</li>
                  <li>Platform extensions for long 22+ coach trains</li>
                  <li>Digital display boards and AI-based train monitoring</li>
                  <li>Installation of CCTV, surveillance systems, and crowd control technologies</li>
                  <li>Upgraded LED lighting and energy-efficient power systems</li>
                </ul>

                {/* Engineering Highlights */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Engineering Highlights</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Broad-gauge track integration with multi-directional routes</li>
                  <li>Advanced interlocking for safe high-speed train movement</li>
                  <li>Heavy-duty bridges supporting freight locomotives</li>
                  <li>Large yard for train maintenance, shunting, and cleaning</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Managing peak-hour congestion during festival and holiday seasons</li>
                  <li>Balancing passenger and freight routes simultaneously</li>
                  <li>Infrastructure pressure due to rapid urban expansion</li>
                  <li>Coordination with Metro construction and city traffic</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Redevelopment
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Complete redevelopment into a world-class station under the Amrit Bharat Scheme</li>
                  <li>Integration with Bullet Train (Mumbai–Ahmedabad High-Speed Rail)</li>
                  <li>New multi-level concourse for crowd management</li>
                  <li>More escalators, lifts, and passenger mobility systems</li>
                  <li>Smart traffic integration with expressways and metro</li>
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
                  'Ahmedabad Junction is one of India’s oldest and largest railway stations.',
                  'It handles more than 160+ trains daily.',
                  'The station serves as a major stop for Vande Bharat and Shatabdi Express.',
                  'It is directly linked with Ahmedabad Metro’s Kalupur Station.',
                  'A full world-class redevelopment project is underway.',
                  'The station connects Gujarat to every major region of India.'
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

export default AhmedabadJunctionDetail;
