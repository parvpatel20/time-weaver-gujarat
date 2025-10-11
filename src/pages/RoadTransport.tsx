import { Card, CardContent } from '@/components/ui/card';
import { Truck, Bus, Car } from 'lucide-react';
import vintageCart from '@/assets/vintage-bullock-cart.jpg';

const RoadTransport = () => {
  const timeline = [
    { year: '1900s', event: 'Bullock carts and camel carts dominate Gujarat roads' },
    { year: '1960s', event: 'Gujarat State Road Transport Corporation (GSRTC) established' },
    { year: '2000s', event: 'Major expressways and highway development' },
    { year: '2020s', event: 'Introduction of electric buses and sustainable transport' },
  ];

  const highways = [
    { name: 'NH-8', description: 'Delhi-Mumbai highway passing through Gujarat' },
    { name: 'NH-47', description: 'Ahmedabad-Rajkot corridor' },
    { name: 'Expressways', description: 'Modern expressways connecting major cities' },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Road Transport of Gujarat
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            "From bullocks to buses – Gujarat's roads have seen it all"
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-2xl">
          <img
            src={vintageCart}
            alt="Vintage bullock cart on Gujarat roads"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Evolution Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-3xl font-display font-bold text-accent min-w-[120px]">
                    {item.year}
                  </div>
                  <p className="text-lg text-foreground pt-1">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Major Highways */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Major Highways
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {highways.map((highway, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8 text-center space-y-3">
                  <Truck className="h-12 w-12 mx-auto text-accent" />
                  <h3 className="text-2xl font-display font-bold">{highway.name}</h3>
                  <p className="text-muted-foreground">{highway.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vintage vs Modern */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Then & Now
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-display font-bold">Historic Era</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Bullock carts for local transport</li>
                  <li>• Camel carts in Kutch region</li>
                  <li>• Narrow unpaved roads</li>
                  <li>• Trade routes connecting villages</li>
                  <li>• Manual toll collection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Bus className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-display font-bold">Modern Era</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• GSRTC bus network across Gujarat</li>
                  <li>• Multi-lane expressways</li>
                  <li>• Electric and CNG buses</li>
                  <li>• Smart toll systems (FASTag)</li>
                  <li>• Connected to national highway network</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fun Facts */}
        <section>
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Fascinating Facts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                fact: 'Gujarat has over 73,000 km of road network',
              },
              {
                fact: 'GSRTC operates one of India\'s largest state transport services',
              },
              {
                fact: 'The Mumbai-Ahmedabad expressway is a major economic corridor',
              },
            ].map((item, index) => (
              <Card key={index} className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium">{item.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default RoadTransport;
