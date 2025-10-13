import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, TrendingUp } from 'lucide-react';
import nh8Image from '@/assets/nh8-highway.jpg';

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
              Delhi-Mumbai Economic Corridor through Gujarat
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={nh8Image}
              alt="NH-8 Highway passing through Gujarat"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
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
                  <div className="text-2xl font-display font-bold text-accent">4-6 Lanes</div>
                  <p className="text-sm text-muted-foreground">Width</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  National Highway 8, now known as NH-48, is one of India's most important national highways, 
                  connecting Delhi to Mumbai. This strategic corridor passes through several major cities in 
                  Gujarat including Ahmedabad, Vadodara, Surat, and Vapi, serving as the economic lifeline of 
                  western India.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Significance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Originally constructed as a simple road connecting major cities, NH-8 has evolved into a 
                  modern expressway. The Gujarat section was among the first to be upgraded to four-lane and 
                  six-lane standards in the 1990s and 2000s, setting the benchmark for highway development in India.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Major Cities Connected</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Ahmedabad:</strong> Commercial capital of Gujarat, major junction point</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Vadodara:</strong> Cultural and industrial hub, railway junction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Surat:</strong> Diamond and textile city, major trade center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Vapi:</strong> Industrial town near Gujarat-Maharashtra border</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Economic Impact</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  NH-8 is crucial for Gujarat's economy, facilitating the movement of goods between major ports 
                  like Kandla and Mundra to Delhi and northern markets. The highway supports industries along 
                  its route including textiles, chemicals, pharmaceuticals, and automobiles.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Developments</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Recent upgrades include electronic toll collection (FASTag), improved service areas, 
                  enhanced safety features, and intelligent traffic management systems. The highway now 
                  features rest stops, fuel stations, and emergency services at regular intervals.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Interesting Facts</h3>
              <ul className="space-y-3">
                {[
                  'NH-8 was one of the first highways in India to have electronic toll collection',
                  'The Gujarat section handles some of the highest freight traffic in the country',
                  'Several industrial corridors and Special Economic Zones are located along NH-8',
                  'The highway is being developed as part of the Delhi-Mumbai Industrial Corridor project',
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
