import { Card, CardContent } from '@/components/ui/card';
import { Ship, Anchor, Waves } from 'lucide-react';

const WaterTransport = () => {
  const ancientPorts = [
    {
      name: 'Lothal',
      period: '2600 BCE',
      description: 'Ancient Indus Valley dockyard, one of world\'s earliest ports',
    },
    {
      name: 'Dholavira',
      period: '2650 BCE',
      description: 'Major Harappan trading hub with water management systems',
    },
  ];

  const modernPorts = [
    {
      name: 'Kandla Port',
      established: '1950s',
      feature: 'Major commercial port, free trade zone',
    },
    {
      name: 'Mundra Port',
      established: '1998',
      feature: 'India\'s largest private port by cargo',
    },
    {
      name: 'Mandvi Port',
      established: 'Ancient',
      feature: 'Historic shipbuilding center',
    },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Ship className="h-20 w-20 mx-auto text-accent animate-float" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Water Transport of Gujarat
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            "Gateway of India's Sea Trade – from ancient Lothal to modern mega-ports"
          </p>
        </div>

        {/* Ancient Maritime Trade */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-card to-accent/5 border-accent/20">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <Waves className="h-12 w-12 text-accent" />
                <h2 className="text-4xl font-display font-bold">
                  Ancient Maritime Heritage
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gujarat's maritime history dates back over 4,500 years to the Indus Valley
                Civilization. The ancient ports of Lothal and Dholavira were sophisticated
                trading centers that connected India with Mesopotamia, Egypt, and the Persian Gulf.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ancient Ports */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Ancient Port Cities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ancientPorts.map((port, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-display font-bold">{port.name}</h3>
                    <span className="text-xl font-display text-accent">{port.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground">{port.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Archaeological evidence shows advanced docking systems, warehouses, and
                      trade connections spanning thousands of kilometers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Modern Ports */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8">
            Modern Ports & Harbors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {modernPorts.map((port, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8 space-y-4">
                  <Anchor className="h-12 w-12 text-accent" />
                  <h3 className="text-2xl font-display font-bold">{port.name}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Established: <span className="font-semibold text-foreground">{port.established}</span>
                    </p>
                    <p className="text-base">{port.feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trade Routes Map */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-4xl font-display font-bold text-center mb-6">
                Historic Trade Routes
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-accent">
                    Ancient Era
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Connected to Mesopotamian ports via Persian Gulf</li>
                    <li>• Trade with Egypt through Red Sea routes</li>
                    <li>• Exported textiles, gems, and spices</li>
                    <li>• Imported precious metals and luxury goods</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-accent">
                    Modern Era
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Major container shipping hub</li>
                    <li>• Oil and gas import terminals</li>
                    <li>• Export of manufactured goods globally</li>
                    <li>• Connected to international shipping lanes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shipbuilding Heritage */}
        <section className="mb-20">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Shipbuilding Tradition
          </h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">
                Mandvi, a coastal town in Kutch, has been famous for its traditional wooden
                shipbuilding for centuries. Master craftsmen continue to build ships using
                age-old techniques passed down through generations.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Traditional wooden dhows still crafted today',
                  'Ships exported to Middle Eastern countries',
                  'UNESCO recognition for maritime heritage',
                ].map((fact, index) => (
                  <div key={index} className="text-center p-4 bg-accent/5 rounded-lg">
                    <p className="font-medium">{fact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Economic Impact */}
        <section>
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Economic Significance
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: '40%+', label: 'India\'s cargo through Gujarat ports' },
              { stat: '3', label: 'Major international ports' },
              { stat: '4500+', label: 'Years of maritime history' },
              { stat: '#1', label: 'State by port cargo volume' },
            ].map((item, index) => (
              <Card key={index} className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="text-4xl font-display font-bold text-accent">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default WaterTransport;
