import { Card, CardContent } from '@/components/ui/card';
import { Train, Zap, Calendar } from 'lucide-react';

const RailTransport = () => {
  const milestones = [
    { year: '1860', event: 'First railway line in Gujarat region' },
    { year: '1930s', event: 'Western Railway headquarters established in Ahmedabad' },
    { year: '1950s', event: 'Electrification of major routes begins' },
    { year: '2023', event: 'Bullet Train corridor Mumbai-Ahmedabad announced' },
  ];

  const stations = [
    { name: 'Ahmedabad Junction', heritage: 'British-era architecture, major junction' },
    { name: 'Vadodara Junction', heritage: 'Historic station with royal connections' },
    { name: 'Surat Station', heritage: 'Key commercial transport hub' },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Train className="h-20 w-20 mx-auto text-accent animate-pulse-glow" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Rail Transport of Gujarat
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            From steam engines to bullet trains – a journey through Gujarat's railway heritage
          </p>
        </div>

        {/* British Legacy */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-card to-muted/30 border-accent/20">
            <CardContent className="p-12">
              <h2 className="text-4xl font-display font-bold mb-6 text-center">
                The British Railway Legacy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
                The British introduced railways to Gujarat in the mid-19th century, transforming
                trade and connectivity. The Western Railway, headquartered in Ahmedabad, became
                one of India's most important railway zones, connecting Gujarat to the rest of the nation.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8 flex items-center gap-3">
            <Calendar className="h-10 w-10 text-accent" />
            Historical Milestones
          </h2>
          <div className="space-y-6">
            {milestones.map((item, index) => (
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

        {/* Heritage Stations */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Heritage Railway Stations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stations.map((station, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <Train className="h-12 w-12 text-accent" />
                  <h3 className="text-2xl font-display font-bold">{station.name}</h3>
                  <p className="text-muted-foreground">{station.heritage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Bullet Train Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Zap className="h-16 w-16 text-accent animate-pulse-glow" />
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  The Future: Bullet Train
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto text-center">
                Gujarat is set to be connected by India's first high-speed rail corridor from
                Mumbai to Ahmedabad. This 508 km route will reduce travel time to just 2-3 hours,
                marking a new era in Indian transportation.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-accent">320 km/h</div>
                  <p className="text-muted-foreground mt-2">Maximum Speed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-accent">508 km</div>
                  <p className="text-muted-foreground mt-2">Total Distance</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-accent">2-3 hrs</div>
                  <p className="text-muted-foreground mt-2">Travel Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Fun Facts */}
        <section>
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Railway Trivia
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Western Railway headquartered in Ahmedabad handles millions of passengers annually',
              'Gujarat has several heritage trains showcasing vintage locomotives',
              'The state has over 5,000 km of railway track',
              'Ahmedabad Metro connects the city with modern rapid transit',
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

export default RailTransport;
