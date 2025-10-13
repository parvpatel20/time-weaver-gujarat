import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, TrendingUp } from 'lucide-react';
import mundraImage from '@/assets/mundra-port.jpg';

const MundraPortDetail = () => {
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
              Mundra Port
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              India's largest private port by cargo
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={mundraImage}
              alt="Mundra Port operations"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Deep Draft</div>
                  <p className="text-sm text-muted-foreground">Accommodates large vessels</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <TrendingUp className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">High Throughput</div>
                  <p className="text-sm text-muted-foreground">Major cargo volumes</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Ship className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Container Hub</div>
                  <p className="text-sm text-muted-foreground">Modern terminals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default MundraPortDetail;


