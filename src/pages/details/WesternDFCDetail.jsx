import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WesternDFCDetail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Link to="/rail-transport" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Rail
      </Link>
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">Western Dedicated Freight Corridor</h1>
          <p className="text-muted-foreground">A modern freight corridor optimizing logistics and container traffic across western India, improving efficiency for ports and industries.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WesternDFCDetail;
