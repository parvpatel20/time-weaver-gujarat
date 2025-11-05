import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BhavnagarPortDetail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Link to="/water-transport" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Water
      </Link>
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Bhavnagar Port</h1>
          <p className="text-muted-foreground">Bhavnagar Port is an important coastal port in South Gujarat handling agricultural and energy-related exports and regional shipping.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default BhavnagarPortDetail;
