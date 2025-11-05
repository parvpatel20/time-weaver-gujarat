import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NH44Detail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Link to="/road-transport" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Roads
      </Link>
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-4">NH-44 (Srinagar-Kanyakumari)</h1>
          <p className="text-muted-foreground">One of India\'s longest national highways, connecting the length of the country and passing through Gujarat as a critical north-south corridor.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NH44Detail;
