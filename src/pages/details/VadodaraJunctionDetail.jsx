import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Train, Calendar, Users, MapPin } from 'lucide-react';
import vadodaraImage from '@/assets/vadodara_junc.png';

const VadodaraJunctionDetail = () => {
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
              Vadodara Junction (BRC)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Western Railway’s Strategic Junction Connecting India’s Busy Mumbai–Delhi Route
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={vadodaraImage}
              alt="Vadodara Junction Railway Station"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Detail Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Highlight Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Train className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">7 Platforms</div>
                  <p className="text-sm text-muted-foreground">Major Rail Hub</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1861</div>
                  <p className="text-sm text-muted-foreground">Year Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1.2+ Lakh/Day</div>
                  <p className="text-sm text-muted-foreground">Daily Passengers</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Vadodara Junction (BRC) is one of India’s most important railway junctions,
                  strategically located on the busy Mumbai–Delhi mainline. It serves as a central
                  connection point for Western Railway, linking major economic, cultural, and
                  industrial regions across India.
                </p>
                <p className="text-muted-foreground mb-4">
                  The station is known for its efficient operations, modern facilities,
                  and high passenger handling capacity, making it a key mobility hub in Gujarat.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Background</h2>
                <p className="text-muted-foreground mb-4">
                  Built in 1861 during the early expansion of the Bombay, Baroda and Central India
                  Railway (BB&CI), Vadodara Junction has played a crucial role in connecting Gujarat
                  with Mumbai and North India. Over the decades, it evolved into a multi-platform,
                  fully electrified, high-traffic junction supporting long-distance mail, express,
                  and premium trains.
                </p>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Connectivity</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>North India:</strong> Delhi, Jaipur, Kota, Chandigarh</li>
                  <li><strong>West India:</strong> Mumbai, Surat, Ahmedabad, Rajkot, Bhuj</li>
                  <li><strong>Central India:</strong> Indore, Bhopal, Nagpur</li>
                  <li><strong>South India:</strong> Hyderabad, Bengaluru, Chennai</li>
                  <li><strong>East India:</strong> Patna, Varanasi, Howrah</li>
                </ul>

                {/* Station Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Station Infrastructure</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>7 high-capacity platforms with LED indicators</li>
                  <li>Fully electrified double and triple-line sections</li>
                  <li>Modern signalling integrated with Western Railway’s control system</li>
                  <li>Multiple foot overbridges and escalators</li>
                  <li>AC waiting rooms, retiring rooms, and passenger lounges</li>
                  <li>Large circulating area and organized parking zones</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Significance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Vadodara Junction plays a critical role in supporting Gujarat’s industrial economy.
                  It directly links petrochemical zones, manufacturing clusters, ports, and trade hubs.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Vital for industries in Nandesari, Bharuch, Ankleshwar, and Dahej</li>
                  <li>Supports tourism to Champaner, Statue of Unity, and Vadodara Palace</li>
                  <li>Enables daily intercity commuting to Ahmedabad and Surat</li>
                </ul>

                {/* Modern Enhancements */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Modern Developments
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Digital signboards and automated announcement systems</li>
                  <li>AI-supported control room for train monitoring</li>
                  <li>CCTV surveillance coverage for full safety</li>
                  <li>Upgraded LED lighting across platforms and premises</li>
                </ul>

                {/* Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering Highlights
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Complex multi-line junction connecting four main corridors</li>
                  <li>High-speed route suitable for Vande Bharat and Rajdhani trains</li>
                  <li>Electrified tracks with modern interlocking systems</li>
                  <li>Dedicated depot for locomotive and coach maintenance</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Operational Challenges
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Managing heavy traffic between Ahmedabad–Vadodara–Surat</li>
                  <li>Balancing freight and passenger train schedules</li>
                  <li>Peak-hour congestion during festive seasons</li>
                  <li>Urban expansion around the station area</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Upgrades & Redevelopment
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Redevelopment under the Amrit Bharat Station Scheme</li>
                  <li>Integration with upcoming Bullet Train route (Mumbai–Ahmedabad HSR)</li>
                  <li>Multi-level concourse design for crowd management</li>
                  <li>Enhanced automation, digital ticketing, and smart surveillance</li>
                  <li>New platforms and upgraded passenger areas</li>
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
                  'Vadodara Junction is one of the oldest operational stations in India (est. 1861).',
                  'It lies on the busiest railway corridor: Mumbai–Delhi route.',
                  'Handled one of India’s earliest electrified rail sections.',
                  'Acts as a key halt for Rajdhani Express and Vande Bharat trains.',
                  'It is the headquarters of the Vadodara Railway Division.',
                  'The station handles over 160 trains per day.'
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

export default VadodaraJunctionDetail;
