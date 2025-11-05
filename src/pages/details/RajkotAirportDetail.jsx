import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RajkotAirportDetail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Link to="/air-transport" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Air
      </Link>
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Rajkot Airport</h1>
          <p className="text-muted-foreground">Rajkot Airport serves the Saurashtra region with domestic connectivity and supports regional economic activity.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RajkotAirportDetail;
