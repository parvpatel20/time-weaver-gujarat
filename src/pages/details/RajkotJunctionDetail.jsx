import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Train, Calendar, Users, MapPin } from 'lucide-react';
import rajkotImage from '@/assets/Rajkot_junc.png';

const RajkotJunctionDetail = () => {
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
              Rajkot Junction (RJT)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              A Vital Railway Hub Connecting Saurashtra’s Economic & Cultural Heart
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={rajkotImage}
              alt="Rajkot Junction Railway Station"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Card */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Train className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">5 Platforms</div>
                  <p className="text-sm text-muted-foreground">Railway Hub of Saurashtra</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1890s</div>
                  <p className="text-sm text-muted-foreground">Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">80,000+/Day</div>
                  <p className="text-sm text-muted-foreground">Daily Footfall</p>
                </div>
              </div>

              {/* Main Rich Content */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  Rajkot Junction (RJT) is one of the most prominent railway stations in the
                  Saurashtra region of Gujarat. Located at the heart of Rajkot city, the station
                  serves as a critical rail link connecting industrial towns, coastal ports,
                  pilgrimage destinations, and major cities like Ahmedabad, Mumbai, and Delhi.
                </p>
                <p className="text-muted-foreground mb-4">
                  Rajkot Junction plays a central role in regional mobility, supporting textile,
                  engineering, jewellery, and manufacturing sectors, along with tourism and
                  pilgrimage travel across Saurashtra.
                </p>

                {/* Historical Background */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Historical Background
                </h2>
                <p className="text-muted-foreground mb-4">
                  The station was originally developed in the late 19th century under princely rule,
                  and later expanded under the Kathiawar Railway system. Post-independence, it became
                  part of Western Railway and underwent continuous upgrades in track capacity,
                  signalling technology, and passenger amenities.
                </p>

                {/* Connectivity */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Connectivity Network</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Ahmedabad Route:</strong> Surendranagar, Viramgam</li>
                  <li><strong>Mumbai Route:</strong> Bhavnagar, Surat via coastal corridor</li>
                  <li><strong>North India:</strong> Jaipur, Delhi, Jodhpur, Lucknow</li>
                  <li><strong>Central India:</strong> Vadodara, Indore</li>
                  <li><strong>Coastal & Port Routes:</strong> Porbandar, Okha, Veraval</li>
                  <li><strong>Pilgrimage Routes:</strong> Dwarka, Somnath, Palitana</li>
                </ul>

                {/* Station Infrastructure */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Station Infrastructure
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rajkot Junction balances high passenger traffic with freight operations, supported
                  by modern platform infrastructure and efficient route management.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>5 platforms with broad-gauge electrified tracks</li>
                  <li>New foot overbridges, escalators, and modern concourse areas</li>
                  <li>Digital passenger display boards & automated announcement systems</li>
                  <li>AC waiting rooms, lounges, and retiring rooms</li>
                  <li>Dedicated parcel office and freight-handling zones</li>
                  <li>Large parking and pickup/drop space</li>
                </ul>

                {/* Economic Importance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic & Cultural Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Rajkot is a major industrial and commercial city, and its railway station plays a
                  pivotal role in enabling:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Transport of auto parts, machine tools, and engineering goods</li>
                  <li>Movement of textiles and small-scale industry products</li>
                  <li>Pilgrimage travel to Somnath, Dwarka, and Palitana</li>
                  <li>Tourism to Gir National Park and coastal towns</li>
                </ul>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Electrification of major routes for faster train operations</li>
                  <li>New high-speed compatible track alignments</li>
                  <li>Upgraded lighting, CCTV surveillance, and safety systems</li>
                  <li>Improved concourse and better entry/exit points</li>
                </ul>

                {/* Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Engineering Highlights</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Complex junction linking inland and coastal corridors</li>
                  <li>Electrified tracks suitable for superfast and express trains</li>
                  <li>Advanced interlocking for efficient routing</li>
                  <li>Dedicated maintenance and shunting yards</li>
                </ul>

                {/* Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Current Challenges</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Growing passenger volume during peak tourism seasons</li>
                  <li>Balancing freight and passenger movement on shared lines</li>
                  <li>Urban density around the station limiting expansion</li>
                  <li>Increasing demand for more direct long-distance trains</li>
                </ul>

                {/* Future Upgrades */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Developments & Expansion Plans
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Redevelopment under Amrit Bharat Station Scheme</li>
                  <li>New terminals and expanded circulating areas</li>
                  <li>More escalators, lifts, and waiting lounges</li>
                  <li>Integration with improved city bus and BRTS routes</li>
                  <li>Increased long-distance connectivity with Delhi and South India</li>
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
                  'Rajkot Junction is one of the most important stations of the Saurashtra region.',
                  'It was originally part of the historic Kathiawar Railway network.',
                  'Nearly 80,000+ passengers use Rajkot Junction every day.',
                  'The station connects both coastal and inland routes of Gujarat.',
                  'Rajkot is a key halt for trains heading towards Somnath and Dwarka.',
                  'Modern redevelopment plans aim to transform it into a world-class station.'
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

export default RajkotJunctionDetail;
