import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, TrendingUp } from 'lucide-react';
import gsrtcImage from '@/assets/gsrtc_network.png';

const GSRTCDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        <Link to="/road-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Road Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              GSRTC Network
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Connecting Every Corner of Gujarat Through India’s Most Reliable State Transport Service
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={gsrtcImage}
              alt="GSRTC Bus Network"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Facts */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <MapPin className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">125+ Depots</div>
                  <p className="text-sm text-muted-foreground">Across Gujarat</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1960</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">8,000+ Buses</div>
                  <p className="text-sm text-muted-foreground">Active Fleet</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Gujarat State Road Transport Corporation (GSRTC) is one of India’s largest and most
                  dependable state-run bus networks. With thousands of buses operating daily, GSRTC
                  connects remote villages, district headquarters, industrial zones, pilgrimage sites,
                  wildlife sanctuaries, tourist destinations, and major urban centers across Gujarat.
                </p>
                <p className="text-muted-foreground mb-4">
                  The network ensures affordable, safe, and accessible transportation for citizens regardless
                  of geography or region, making it an essential component of Gujarat’s mobility ecosystem.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Historical Development
                </h2>
                <p className="text-muted-foreground mb-4">
                  Established in 1960 after the formation of the state of Gujarat, GSRTC began with a
                  modest fleet inherited from the Bombay State Transport system. Over the decades,
                  it expanded dramatically as Gujarat industrialized and urbanized at record pace.
                </p>
                <p className="text-muted-foreground mb-4">
                  GSRTC introduced innovations much ahead of many other states—including computerized
                  ticketing, online reservations, live GPS tracking, and premium intercity bus services.
                </p>

                {/* Coverage */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Network Coverage
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span>Connects <strong>all 33 districts</strong> of Gujarat.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span>Serves <strong>14,000+ villages</strong> with daily operations.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span>Links <strong>inter-state destinations</strong> like Mumbai, Udaipur, Mt. Abu, and Indore.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span>Operates across <strong>Western Ghats, deserts, coasts, farmlands, and urban belts</strong>.</span>
                  </li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic & Social Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  GSRTC ensures workforce mobility across industrial hubs like Surat, Vapi, Ankleshwar,
                  Vadodara, Sanand, and Rajkot. Thousands of workers, students, pilgrims, and travelers
                  rely on it daily.
                </p>
                <p className="text-muted-foreground mb-4">
                  The corporation also plays a key role in tourism—connecting temples (Dwarka, Somnath,
                  Ambaji), wildlife reserves (Gir, Velavadar), coastal towns (Mandvi, Dwarka), and heritage
                  cities (Ahmedabad, Champaner).
                </p>

                {/* Modernization */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <p className="text-muted-foreground mb-4">
                  GSRTC has modernized its operations with digital ticketing, mobile applications,
                  GPS-based vehicle tracking, automated fare collection, advanced depots, and
                  premium AC services such as Volvo, Sleeper Coach, Gurjarnagari, and Express services.
                </p>

                {/* New Section – Fleet Types */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Fleet Categories & Services
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Volvo/Scania AC Buses for long-distance comfort travel.</li>
                  <li>Express & Gurjarnagari buses for fast intercity services.</li>
                  <li>Sleeper Coaches for overnight journeys.</li>
                  <li>Local village-to-town shuttle services.</li>
                  <li>School/college special services in select districts.</li>
                </ul>

                {/* Engineering & Operations */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Operational Efficiency & Infrastructure
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>125+ depots with full mechanical and maintenance facilities.</li>
                  <li>GPS-enabled fleet management for safety and on-time performance.</li>
                  <li>Automated vehicle monitoring through central control rooms.</li>
                  <li>Heavily optimized route planning for fuel and time efficiency.</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Operational Challenges
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Managing heavy passenger load during festivals and seasons.</li>
                  <li>Maintaining fleet quality across long rural routes.</li>
                  <li>Balancing low fares with rising fuel and maintenance costs.</li>
                  <li>Ensuring safety during monsoon and desert weather conditions.</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Expansion & Modernization Plans
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Introduction of electric buses on major urban routes.</li>
                  <li>Expansion of premium AC sleeper services.</li>
                  <li>New depots and modern bus terminals across districts.</li>
                  <li>AI-enabled vehicle monitoring for safety and predictive maintenance.</li>
                </ul>

                {/* Sustainability */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Environmental & Sustainability Efforts
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Solar-powered lighting at major depots and terminals.</li>
                  <li>Plans for EV charging infrastructure across bus stations.</li>
                  <li>Introduction of hybrid and CNG buses in select areas.</li>
                  <li>Green depots with waste management and rainwater harvesting.</li>
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
                  'GSRTC carries more than 25 lakh passengers daily.',
                  'It operates one of India’s largest express and sleeper coach networks.',
                  'The Surat–Ahmedabad–Vadodara triangle sees the highest ridership.',
                  'GSRTC was among the first in India to launch online ticket booking.',
                  'It connects remote regions such as desert zones of Kutch and tribal belts of Dang.',
                  'Premium bus categories like Volvo and Sleeper Coach operate round-the-clock.'
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

export default GSRTCDetail;
