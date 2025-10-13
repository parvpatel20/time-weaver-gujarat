import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plane, Calendar, Users } from 'lucide-react';
import airportImage from '@/assets/ahmedabad-airport.jpg';

const SVPIAirportDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/air-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Air Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Sardar Vallabhbhai Patel International Airport
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Gujarat's primary international gateway in Ahmedabad
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={airportImage}
              alt="SVPI Airport terminal"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Plane className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">Intl Hub</div>
                  <p className="text-sm text-muted-foreground">Long-haul connectivity</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1991</div>
                  <p className="text-sm text-muted-foreground">International Status</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">11M+</div>
                  <p className="text-sm text-muted-foreground">Annual Passengers (2019)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default SVPIAirportDetail;


