import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MAEDetail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Link to="/road-transport" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Roads
      </Link>
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Mumbai-Ahmedabad Expressway (MAE)</h1>
          <p className="text-muted-foreground">A modern 6-lane expressway reducing travel time between Ahmedabad and Mumbai and forming a high-speed economic corridor.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MAEDetail;
