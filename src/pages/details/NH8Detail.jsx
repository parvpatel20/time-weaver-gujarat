import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, TrendingUp } from 'lucide-react';
const nh8Image = '/assets/nh8.png';

const NH8Detail = () => {
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
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              National Highway 8 (NH-8)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              The Strategic Delhi–Mumbai Corridor Passing Through Gujarat
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={nh8Image}
              alt="NH-8 Highway passing through Gujarat"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* MAIN CONTENT */}
          <Card>
            <CardContent className="p-8 space-y-6">
              {/* Info Boxes */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <MapPin className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1,428 km</div>
                  <p className="text-sm text-muted-foreground">Total Length</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1965</div>
                  <p className="text-sm text-muted-foreground">Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">4–6 Lanes</div>
                  <p className="text-sm text-muted-foreground">Width</p>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  National Highway 8, now renumbered as NH-48, is one of India’s most important
                  transportation arteries. Stretching between Delhi and Mumbai, the highway passes
                  through the industrial heart of Gujarat, linking major centers such as Ahmedabad,
                  Vadodara, Surat, and Vapi. This corridor forms the backbone of the
                  Delhi–Mumbai Economic Corridor (DMEC) and supports one of the highest freight
                  movements in India.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NH-8 plays a decisive role in connecting ports, manufacturing clusters, economic
                  zones, and trade hubs, making it the lifeline of Western India’s logistics and
                  industrial network.
                </p>

                {/* Historical Significance */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Historical Significance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Originally a modest roadway, NH-8 witnessed major transformation during the 1990s
                  and early 2000s as part of the Golden Quadrilateral project. Gujarat became one of
                  the first states where NH-8 was expanded into a modern four- and six-lane highway.
                  These upgrades set national benchmarks for high-speed corridors, safety features,
                  and industrial access highways.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Today, NH-8 stands as a symbol of India’s infrastructural progress, supporting
                  millions of commuters and businesses every day.
                </p>

                {/* Major Cities */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Major Cities Connected
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Ahmedabad:</strong> A major commercial, IT, and industrial hub.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Vadodara:</strong> Known for petrochemicals, engineering, and connectivity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Surat:</strong> World’s diamond and textile capital with massive freight movement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Vapi:</strong> Home to one of Asia’s largest industrial estates.</span>
                  </li>
                </ul>

                {/* Economic Impact */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Impact
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NH-8 is crucial to Gujarat’s economic dominance. It integrates ports such as Kandla,
                  Mundra, Pipavav, and Hazira with northern India. The corridor supports major
                  industries like textiles (Surat), pharmaceuticals (Vadodara), automobiles (Sanand),
                  chemicals (Vapi), and engineering units across the state.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The highway directly supports millions of MSMEs and enables faster movement of raw
                  materials, finished goods, and export freight. NH-8 is also a major driver for
                  tourism, connecting several cultural, historical, and natural sites across Gujarat.
                </p>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Modern Developments
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The highway continues to be upgraded with advanced features including FASTag
                  e-tolling, intelligent traffic management systems (ITMS), improved crash barriers,
                  emergency response infrastructure, and modern rest zones equipped with food courts,
                  fuel stations, and EV charging facilities.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Several upcoming logistics parks, freight terminals, and smart industrial nodes
                  along the Delhi–Mumbai Industrial Corridor (DMIC) are directly connected to NH-8.
                </p>

                {/* NEW SECTION – Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Features
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>High-strength pavement designed for long-term freight durability.</li>
                  <li>Multiple flyovers, service lanes, and underpasses to reduce congestion.</li>
                  <li>Dedicated truck lay-bys and rest zones for commercial vehicles.</li>
                  <li>Efficient drainage systems enabling all-weather movement.</li>
                  <li>Wide medians and noise barriers near urban settlements.</li>
                </ul>

                {/* NEW SECTION – Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Construction Challenges
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Managing large-scale urban density around cities like Ahmedabad and Surat.</li>
                  <li>Maintaining traffic flow during major widening and repair works.</li>
                  <li>Land acquisition complexities along thick industrial belts.</li>
                  <li>Integration with rail overbridges, canals, and city bypasses.</li>
                  <li>Handling high-volume heavy vehicle traffic during construction phases.</li>
                </ul>

                {/* NEW SECTION – Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Plans & Upcoming Enhancements
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Expansion of select stretches into six- or eight-lane expressway standards.</li>
                  <li>Development of logistics hubs in Sanand, Bharuch, and Vapi.</li>
                  <li>Solar-powered smart lighting on major segments.</li>
                  <li>Fully automated, AI-enabled toll collection systems.</li>
                  <li>Extension of EV fast-charging corridors along the highway.</li>
                </ul>

                {/* NEW SECTION – Environmental Initiatives */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Environmental & Sustainability Initiatives
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Plantation of lakhs of trees along medians and shoulders.</li>
                  <li>Use of recycled plastic in pavement layers on select stretches.</li>
                  <li>Rainwater harvesting pits and recharge structures.</li>
                  <li>Energy-efficient LED and solar-powered systems at tolls.</li>
                  <li>Noise barriers installed before residential and school zones.</li>
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
                  'NH-8 handles one of the highest freight movements in India, especially between Surat and Vapi.',
                  'One of the first highways in India to implement FASTag-based tolling.',
                  'Home to several Special Economic Zones and industrial clusters along its corridor.',
                  'Major automobile companies use NH-8 to transport vehicles from Gujarat to northern India.',
                  'A crucial link in the Delhi–Mumbai Industrial Corridor (DMIC).',
                  'Advanced flexible pavement technology increases the durability of the busiest sections.'
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

export default NH8Detail;
