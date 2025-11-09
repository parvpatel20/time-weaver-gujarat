import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Train, Calendar, Users, MapPin } from 'lucide-react';
import suratImage from '@/assets/Surat_junc.png';

const SuratRailwayStationDetail = () => {
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
              Surat Railway Station (ST)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              One of India’s Busiest Diamond & Textile City Railway Hubs
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={suratImage}
              alt="Surat Railway Station"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Card */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Train className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">5 Platforms</div>
                  <p className="text-sm text-muted-foreground">High-Traffic Zone</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1860s</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">2.5+ Lakh/Day</div>
                  <p className="text-sm text-muted-foreground">Daily Footfall</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Surat Railway Station (ST) is one of Western Railway’s busiest and most commercially
                  significant stations. Located on the Mumbai–Delhi mainline, it handles massive
                  passenger and freight movement due to Surat’s identity as India’s diamond-polishing
                  centre and the textile capital of the country.
                </p>
                <p className="text-muted-foreground mb-4">
                  The station connects Surat with every major metro and industrial region of India,
                  serving lakhs of daily travelers including workers, traders, students, and long-distance passengers.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Surat Railway Station was established during the early phase of the Bombay–Baroda &
                  Central India Railway (BB&CI). It played a major role in enabling cotton, silk,
                  and diamond trade during colonial and post-independence periods.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, the station is entirely electrified, modernized, and integrated with India’s
                  busiest railway corridors.
                </p>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Connectivity</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Mumbai Route:</strong> Vapi, Virar, Thane, Dadar, Mumbai Central</li>
                  <li><strong>Delhi Route:</strong> Vadodara, Ratlam, Kota, Mathura</li>
                  <li><strong>Gujarat Network:</strong> Ahmedabad, Bhuj, Rajkot, Jamnagar</li>
                  <li><strong>Southern India:</strong> Pune, Bengaluru, Hyderabad, Chennai</li>
                  <li><strong>Eastern India:</strong> Patna, Howrah, Bhubaneswar</li>
                </ul>

                {/* Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Station Infrastructure</h2>
                <p className="text-muted-foreground mb-4">
                  Known for high operational efficiency, Surat station handles more than 160 trains
                  daily with limited platform capacity, thanks to advanced signalling and strict
                  schedule management.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>5 major platforms with wide circulating areas</li>
                  <li>Modern foot overbridges & escalators</li>
                  <li>Full LED lighting & automated announcement systems</li>
                  <li>Renovated booking & reservation counters</li>
                  <li>AC waiting rooms, lounge areas, retiring rooms</li>
                  <li>Large parking facilities & organized drop zones</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Economic Importance</h2>
                <p className="text-muted-foreground mb-4">
                  Surat depends heavily on railway connectivity for its vibrant textile and diamond
                  industries. Thousands of workers commute daily between Surat and industrial zones
                  such as Vapi, Ankleshwar, Navsari, and Bharuch.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Crucial for textile exports through nearby ports</li>
                  <li>Supports diamond trade mobility with Mumbai</li>
                  <li>Enables interstate travel for large migrant communities</li>
                  <li>Connects Surat’s SEZs and industrial parks to the nation</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>New skywalk and multi-level footbridges</li>
                  <li>AI-supported passenger information display boards</li>
                  <li>24/7 CCTV surveillance & control room integration</li>
                  <li>Development of smart ticketing and QR-based access</li>
                </ul>

                {/* Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Engineering Highlights</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Located on India’s busiest electrified double-line corridor</li>
                  <li>High-speed compatible infrastructure for Vande Bharat trains</li>
                  <li>Advanced route interlocking for fast turnaround times</li>
                  <li>Dedicated freight management to reduce passenger route delays</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Operational Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Managing heavy crowd movement during peak textile trading seasons</li>
                  <li>Balancing local commuter trains with long-distance services</li>
                  <li>Limited platform space despite massive passenger load</li>
                  <li>Urban congestion around the station area</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Upgrades & Redevelopment
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Complete redevelopment under Amrit Bharat Station Scheme</li>
                  <li>Integration with Surat Metro Phase 1 & 2</li>
                  <li>New concourse building with segregated entry/exit</li>
                  <li>Additional footbridges, escalators & elevators</li>
                  <li>Improved multimodal transit with BRTS & GSRTC</li>
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
                  'Surat is one of India’s highest revenue-generating railway stations.',
                  'It lies on the Mumbai–Delhi Golden Corridor, India’s busiest rail route.',
                  'Over 160+ trains pass daily through just 5 platforms.',
                  'Surat is a key halt for Vande Bharat, Shatabdi, and Duronto trains.',
                  'The station handles passengers from over 20 states daily.',
                  'Redevelopment will transform it into a world-class multimodal hub.'
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

export default SuratRailwayStationDetail;
