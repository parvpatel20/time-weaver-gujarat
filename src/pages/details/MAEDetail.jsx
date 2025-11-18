import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, TrendingUp } from 'lucide-react';
const maHighwayImage = '/assets/mum_ahm_exp.png';

const MAEDetail = () => {
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
              Mumbai–Ahmedabad Highway (NH-48)
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              The High-Speed Economic Corridor Between Gujarat and Maharashtra
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={maHighwayImage}
              alt="Mumbai Ahmedabad Highway"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Main Content */}
          <Card>
            <CardContent className="p-8 space-y-6">

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <MapPin className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">508 km</div>
                  <p className="text-sm text-muted-foreground">Total Stretch (Mumbai–Ahmedabad)</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1950s</div>
                  <p className="text-sm text-muted-foreground">Initial Development</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">6–8 Lanes</div>
                  <p className="text-sm text-muted-foreground">Widening & Upgrades</p>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">

                {/* Overview */}
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Mumbai–Ahmedabad Highway, a crucial segment of National Highway 48 (formerly NH-8),
                  is one of India’s busiest and most economically significant road corridors.  
                  It connects Maharashtra’s financial capital, Mumbai, with Gujarat’s commercial hub,
                  Ahmedabad, enabling seamless passenger and freight movement across Western India.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The highway passes through major regions including Thane, Palghar, Vapi, Valsad, Surat,
                  Bharuch, Vadodara, Anand, and finally Ahmedabad. It serves as the backbone of
                  industrial logistics, tourism mobility, and trade movement between the two states.
                </p>

                {/* History */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Historical Significance
                </h2>
                <p className="text-muted-foreground mb-4">
                  Built in the 1950s as part of India’s early national highway network, the
                  Mumbai–Ahmedabad stretch quickly grew into one of the heaviest-use road corridors.
                  It was among the first in India to undergo major four-lane and six-lane
                  expansions under the Golden Quadrilateral and National Highway Development Programme.
                </p>
                <p className="text-muted-foreground mb-4">
                  Its strategic relevance increased further when industries across Gujarat and
                  Maharashtra expanded rapidly in petrochemicals, textiles, automobiles, ports,
                  and engineering sectors.
                </p>

                {/* Major Cities */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Major Cities & Industrial Zones
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Mumbai:</strong> India’s financial capital and global commerce hub.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Surat:</strong> One of the world’s biggest textile and diamond polishing centers.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Vadodara:</strong> A petrochemical powerhouse with major industries.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✦</span>
                    <span><strong>Vapi:</strong> Asia’s prominent chemical and manufacturing cluster.</span>
                  </li>
                </ul>

                {/* Economic Impact */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Economic Importance
                </h2>
                <p className="text-muted-foreground mb-4">
                  The highway supports some of the highest freight traffic in India. It connects major
                  ports like JNPT, Hazira, and Dholera with industrial estates across Gujarat.
                  The corridor facilitates movement of textiles, chemicals, automobiles, FMCG,
                  pharmaceuticals, and export goods to domestic and international markets.
                </p>
                <p className="text-muted-foreground mb-4">
                  It is also essential for inter-state tourism—connecting Mumbai with popular
                  destinations like Daman, Silvassa, Valsad, Vadodara, Anand, and Ahmedabad.
                </p>

                {/* Modern Developments */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Modern Upgrades
                </h2>
                <p className="text-muted-foreground mb-4">
                  Upgrades include FASTag tolling, new multi-lane flyovers, improved service lanes,
                  LED lighting, emergency helplines, median barriers, better signage, and modern
                  roadside facilities. Several sections now meet expressway-grade safety and comfort
                  standards.
                </p>

                {/* Engineering Features */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Engineering & Design Features
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Long multi-lane bridges over major rivers like Narmada and Tapi.</li>
                  <li>Well-designed bypasses around high-density cities like Surat and Vadodara.</li>
                  <li>Dedicated service lanes in industrial zones for safe entry/exit.</li>
                  <li>Modern pavement technology for heavy commercial traffic.</li>
                  <li>Crash barriers, rumble strips, and advanced road markings.</li>
                </ul>

                {/* Construction Challenges */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Construction Challenges
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>High congestion in urban stretches like Thane and Ahmedabad outskirts.</li>
                  <li>Managing industrial traffic in Vapi, Valsad, and Ankleshwar zones.</li>
                  <li>Land acquisition around heavily populated areas.</li>
                  <li>Merging the highway with complex urban road networks.</li>
                  <li>Maintaining flow on India’s busiest highway during upgrades.</li>
                </ul>

                {/* Future Plans */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Future Plans & Expansion
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Integration with the upcoming Mumbai–Ahmedabad Bullet Train project.</li>
                  <li>Possible conversion of key sections into controlled-access expressway zones.</li>
                  <li>New interchanges near Bharuch, Surat, and Palghar.</li>
                  <li>Dedicated EV charging and green mobility corridor.</li>
                  <li>Improved logistics connectivity to JNPT and Dholera SIR.</li>
                </ul>

                {/* Environment */}
                <h2 className="text-3xl font-display font-bold mb-4 mt-8">
                  Environmental & Sustainability Initiatives
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Tree plantation along medians and shoulders for environmental balance.</li>
                  <li>Use of recycled materials for road construction in select segments.</li>
                  <li>Solar-powered lighting near toll plazas and junctions.</li>
                  <li>Noise barriers near residential clusters for safety and comfort.</li>
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
                  'This highway is one of the busiest freight corridors in India.',
                  'It connects two of India’s largest economic powerhouses: Mumbai and Ahmedabad.',
                  'Many industrial cities like Vapi and Surat grew rapidly due to this corridor.',
                  'It forms a part of the historic NH-8 and now NH-48.',
                  'Goods worth billions of rupees move daily through this stretch.',
                  'It is aligned with the upcoming Delhi–Mumbai Industrial Corridor (DMIC).'
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

export default MAEDetail;
