import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Calendar, TrendingUp } from 'lucide-react';
import portImage from '@/assets/kandla-port.jpg';

const KandlaPortDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/water-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Water Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Kandla Port
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Gateway to Northwest India's Maritime Trade
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={portImage}
              alt="Kandla Port - Modern commercial seaport operations"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">115+ MT</div>
                  <p className="text-sm text-muted-foreground">Annual Cargo</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1950s</div>
                  <p className="text-sm text-muted-foreground">Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">#1</div>
                  <p className="text-sm text-muted-foreground">Major Port</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-display font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kandla Port, officially known as Deendayal Port, is one of India's major ports and the 
                  largest port in Gujarat. Located in the Kutch district on the Gulf of Kutch, it serves 
                  as the primary maritime gateway for northwestern India, handling diverse cargo ranging 
                  from crude oil and petroleum products to grains, salt, and chemicals.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Historical Development</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kandla Port was developed in the 1950s as a replacement for Karachi Port, which became 
                  part of Pakistan after partition. The port was strategically important for India's trade, 
                  especially for serving the northern and northwestern hinterland. Over the decades, it has 
                  grown into one of the country's most important commercial ports.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Infrastructure & Facilities</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Container Terminal:</strong> Modern facilities for containerized cargo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Oil Terminal:</strong> Handles crude oil and petroleum products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Dry Cargo Berths:</strong> For bulk commodities like grains and minerals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Free Trade Warehousing Zone:</strong> India's first such facility</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Special Economic Zone</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kandla hosts India's first Free Trade Warehousing Zone (FTWZ), established to promote 
                  international trade and commerce. The zone offers various fiscal incentives and has 
                  become a major hub for import-export businesses, particularly in the gems and jewelry 
                  sector.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Cargo Handling</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Major cargo categories handled at Kandla Port include:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Crude oil and petroleum products - largest share of cargo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Food grains - major import point for wheat and edible oils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Salt and chemicals - supporting Gujarat's chemical industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Containers and general cargo - diverse manufactured goods</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Future Expansion</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The port is undergoing significant expansion and modernization to increase capacity and 
                  improve efficiency. Plans include deeper draft berths for larger vessels, mechanized cargo 
                  handling systems, and improved rail and road connectivity to the hinterland.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Port Statistics</h3>
              <ul className="space-y-3">
                {[
                  'Renamed Deendayal Port in 2017 after Pandit Deendayal Upadhyaya',
                  'Handles over 115 million tonnes of cargo annually',
                  'Connected to major cities via national highways and railway lines',
                  'Houses India\'s largest grain silo complex',
                  'Strategic importance for India\'s energy security through oil imports',
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

export default KandlaPortDetail;
