import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, TrendingUp } from 'lucide-react';
const nh44Image = '/assets/nh44.png';

const NH44Detail = () => {
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
              National Highway 44 (NH-44)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              India’s Longest North–South Corridor Connecting Kashmir to Kanyakumari
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={nh44Image}
              alt="NH-44 Highway"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* MAIN CONTENT */}
          <Card>
            <CardContent className="p-8 space-y-6">
              
              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <MapPin className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">4,112 km</div>
                  <p className="text-sm text-muted-foreground">Total Length</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1950s</div>
                  <p className="text-sm text-muted-foreground">Originally Developed</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">4–8 Lanes</div>
                  <p className="text-sm text-muted-foreground">Width</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-4">
                  National Highway 44 (NH-44) is India’s longest and most important highway,
                  stretching from Srinagar in Jammu & Kashmir to Kanyakumari at the southern tip
                  of Tamil Nadu. Covering 4,112 km, NH-44 passes through 11 states and connects
                  major metropolitan cities, economic zones, agricultural belts, and cultural hubs.
                </p>
                <p className="text-muted-foreground mb-4">
                  As the backbone of India’s North–South connectivity, NH-44 carries enormous
                  freight movement and plays a critical role in national logistics, defense
                  mobility, tourism, and interstate trade.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Historical Development
                </h2>
                <p className="text-muted-foreground mb-4">
                  NH-44 is the result of merging multiple old highways including NH-1, NH-2,
                  NH-3, NH-7, and others. Over decades, it evolved from narrow single-lane roads
                  into a modern multilane corridor under the National Highway Development
                  Programme (NHDP) and Bharat Mala projects.
                </p>
                <p className="text-muted-foreground mb-4">
                  The project included constructing tunnels in Jammu–Srinagar, flyovers in
                  northern and central India, bypasses around large cities, and upgrading
                  sections to world-class expressway standards.
                </p>

                {/* Major Cities */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Major Cities Connected
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Srinagar:</strong> Gateway to Kashmir Valley and border regions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Delhi:</strong> Capital city and central administrative hub.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Agra:</strong> Tourism and industrial center (Taj Mahal city).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Bengaluru:</strong> India’s IT capital and startup hub.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Madurai:</strong> Cultural capital of Tamil Nadu.</span>
                  </li>
                </ul>

                {/* Economic Impact */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  NH-44 is a lifeline for national logistics. It links agricultural states like
                  Punjab and Haryana with consumer markets in the south. It enables industrial
                  distribution from Bengaluru and Chennai to northern India and supports
                  tourism-intensive regions such as Kashmir, Himachal Pradesh, Agra, and the south.
                </p>
                <p className="text-muted-foreground mb-4">
                  The corridor also supports defense movement, especially in Jammu & Kashmir,
                  making it strategically vital for national security.
                </p>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <p className="text-muted-foreground mb-4">
                  Major upgrades include FASTag tolling, interchange-based junctions,
                  LED-lit highway zones, emergency call systems, trauma-care units, and
                  multiple bypasses around major cities. Several stretches now follow
                  expressway standards with controlled access, safer curves, and improved
                  gradient engineering.
                </p>

                {/* NEW SECTION — Engineering */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Features
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Some of India’s longest road tunnels, including the Chenani–Nashri Tunnel.</li>
                  <li>High-gradient engineering in Himalayan terrain for all-weather access.</li>
                  <li>Flyovers, cloverleaf junctions, and cable-stayed bridges in several states.</li>
                  <li>Dedicated wildlife corridors with underpasses and eco-bridges.</li>
                </ul>

                {/* NEW SECTION — Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Construction Challenges
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Snowfall, landslides, and extreme terrain in Jammu–Srinagar stretch.</li>
                  <li>Managing expansion in densely populated regions like Delhi and Bengaluru.</li>
                  <li>Coordinating with forest and environmental regulations.</li>
                  <li>Maintaining continuous traffic flow on India’s busiest corridor.</li>
                </ul>

                {/* NEW SECTION — Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Plans & Expansion
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Upgrading several segments to 8-lane expressway standards.</li>
                  <li>Construction of additional tunnels between Jammu and Srinagar for full all-weather access.</li>
                  <li>Dedicated EV charging corridors along the North–South alignment.</li>
                  <li>Integration with Bharatmala freight corridors and logistics parks.</li>
                </ul>

                {/* NEW SECTION — Environment */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Environmental & Sustainability Initiatives
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Installation of wildlife crossings in forest zones.</li>
                  <li>Plantation of trees along service lanes and medians.</li>
                  <li>Use of recycled materials for road base layers.</li>
                  <li>Solar-powered street lighting near major toll plazas.</li>
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
                  'NH-44 is India’s longest highway, stretching over 4,100 km.',
                  'It connects 11 states from the Himalayas to the Indian Ocean.',
                  'The Chenani–Nashri tunnel on NH-44 is India’s longest road tunnel.',
                  'NH-44 carries one of the highest passenger and freight volumes in the country.',
                  'It passes through all major climatic zones of India—from snow to deserts to coastal plains.',
                  'NH-44 integrates multiple iconic routes including the old NH-1 and NH-7.',
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

export default NH44Detail;
