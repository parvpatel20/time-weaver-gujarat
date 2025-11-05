import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PipavavPortDetail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Link to="/water-transport" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Water
      </Link>
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Pipavav Port</h1>
          <p className="text-muted-foreground">Pipavav Port is a modern container terminal serving South Gujarat and Rajasthan with a focus on automotive and container shipments.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PipavavPortDetail;
