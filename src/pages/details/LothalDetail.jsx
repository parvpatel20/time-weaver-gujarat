import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Anchor, Calendar } from 'lucide-react';
import lothalImage from '@/assets/lothal-port.jpg';

const LothalDetail = () => {
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
              Lothal Ancient Port
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Indus Valley dockyard, one of the earliest known in the world
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={lothalImage}
              alt="Lothal archaeological dockyard"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Anchor className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Dockyard</div>
                  <p className="text-sm text-muted-foreground">Advanced maritime structures</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">2600 BCE</div>
                  <p className="text-sm text-muted-foreground">Harappan Period</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Anchor className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Trade</div>
                  <p className="text-sm text-muted-foreground">Links to Mesopotamia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default LothalDetail;


