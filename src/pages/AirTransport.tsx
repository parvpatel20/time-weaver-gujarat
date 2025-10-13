import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Wind, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import airportImage from '@/assets/ahmedabad-airport.jpg';

const AirTransport = () => {
  const timeline = [
    { year: '1930s', event: 'Early airstrips established in Gujarat' },
    { year: '1960s', event: 'Civil aviation expansion begins' },
    { year: '1991', event: 'Ahmedabad Airport becomes international' },
    { year: '2010', event: 'Renamed Sardar Vallabhbhai Patel International Airport' },
    { year: 'Future', event: 'Green airports and drone transport initiatives' },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Plane className="h-20 w-20 mx-auto text-accent animate-pulse-glow" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Air Transport of Gujarat
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            From early airstrips to modern international hubs – Gujarat takes flight
          </p>
        </div>

        {/* Early Aviation */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-card to-accent/5 border-accent/20">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <Wind className="h-12 w-12 text-accent" />
                <h2 className="text-4xl font-display font-bold">
                  Early Aviation History
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gujarat's aviation journey began in the 1930s with small airstrips serving
                military and postal services. The post-independence era saw rapid growth as
                Ahmedabad emerged as a major commercial aviation hub connecting western India
                to the world.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Aviation Milestones
          </h2>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="text-4xl font-display font-bold text-accent min-w-[140px] text-center">
                    {item.year}
                  </div>
                  <div className="h-full w-1 bg-accent rounded-full" />
                  <p className="text-lg text-foreground pt-2">{item.event}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sardar Vallabhbhai Patel International Airport */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-4xl font-display font-bold text-center mb-6">
                Sardar Vallabhbhai Patel International Airport
              </h2>
              <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-center mb-8">
                Named after India's first Deputy Prime Minister, this airport serves as Gujarat's
                primary international gateway. It connects Ahmedabad to major cities across Asia,
                Middle East, Europe, and beyond.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl font-display font-bold text-accent mb-2">8th</div>
                  <p className="text-muted-foreground">Busiest airport in India</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl font-display font-bold text-accent mb-2">100+</div>
                  <p className="text-muted-foreground">Destinations connected</p>
                </div>
                <div className="text-center p-6 bg-card rounded-lg">
                  <div className="text-4xl font-display font-bold text-accent mb-2">11M+</div>
                  <p className="text-muted-foreground">Annual passengers (2019)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Other Airports */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Regional Airports
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Surat Airport', feature: 'Domestic hub for South Gujarat' },
              { name: 'Vadodara Airport', feature: 'International connectivity' },
              { name: 'Rajkot Airport', feature: 'Serves Saurashtra region' },
            ].map((airport, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <Plane className="h-12 w-12 text-accent" />
                  <h3 className="text-2xl font-display font-bold">{airport.name}</h3>
                  <p className="text-muted-foreground">{airport.feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Future of Aviation */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-card to-muted/30 border-accent/20">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Rocket className="h-16 w-16 text-accent animate-float" />
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  Future Innovations
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-center mb-8">
                Gujarat is embracing sustainable aviation with plans for green airports,
                electric aircraft ground support, and exploring drone delivery systems for
                urban and rural connectivity.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-lg space-y-3">
                  <h3 className="text-xl font-display font-semibold text-accent">
                    Green Aviation
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Solar-powered airport facilities</li>
                    <li>• Sustainable aviation fuel initiatives</li>
                    <li>• Carbon-neutral airport operations</li>
                  </ul>
                </div>
                <div className="p-6 bg-card rounded-lg space-y-3">
                  <h3 className="text-xl font-display font-semibold text-accent">
                    Technology Integration
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Drone delivery networks</li>
                    <li>• Advanced air traffic management</li>
                    <li>• Digital passenger experience</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Aviation Facts */}
        <section>
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Aviation Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Gujarat accounts for significant domestic and international air traffic',
              'Multiple airlines operate regular flights to Gulf countries',
              'State government promoting UDAN scheme for regional connectivity',
              'Growing cargo operations supporting Gujarat\'s export economy',
            ].map((fact, index) => (
              <Card key={index} className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 flex items-start gap-3">
                  <span className="text-accent text-2xl">✦</span>
                  <p className="text-lg">{fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AirTransport;
