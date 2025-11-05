import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, TrendingUp, MapPin, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User, Clock } from 'lucide-react';

const ArticleUdanScheme = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <Link to="/articles" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
      </Link>
      <Card className="shadow-2xl border-l-8 border-blue-500/70 bg-card/80">
        <CardContent className="p-10 md:p-16 space-y-8">
          <Badge variant="secondary" className="bg-blue-600/10 text-blue-500 px-4 py-1 text-sm font-bold">
            Aviation & Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            UDAN Scheme: Bringing Air Travel to Gujarat's Tier-II Cities
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b pb-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Jigna Shah</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 7 min read</span>
            <span className="flex items-center gap-2"><Plane className="h-4 w-4 text-accent" /> March 15, 2024</span>
          </div>

          <p className="text-xl leading-relaxed text-foreground">
            The <b>Ude Desh ka Aam Naagrik (UDAN)</b> scheme is a testament to the democratization of air travel in India. For Gujarat, a state with widespread industrial and commercial activity outside its main metros, UDAN has been a crucial catalyst for regional economic growth.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">Connecting the Industrial Heartland</h2>
            <p className="text-muted-foreground">
              Before UDAN, cities like Bhavnagar, Porbandar, and Kandla had limited or unreliable air links. The scheme subsidized regional flights, making air tickets affordable (capped at around ₹2,500 per seat/hour) and incentivizing airlines to operate on previously unserved or underserved routes. This drastically reduced travel time for business executives and tourists.
            </p>

            <h2 className="text-3xl font-bold text-accent">Economic Impact Multiplier</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-blue-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><TrendingUp className="h-5 w-5 text-blue-500" /> Boost to Tourism</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The direct flight connectivity to places like Porbandar (Mahatma Gandhi’s birthplace) and Keshod (gateway to Gir forest) has directly benefited local tourism and hospitality sectors.
                </p>
              </Card>
              <Card className="p-6 bg-blue-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-500" /> Infrastructure Development</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The viability gap funding provided by the scheme necessitated the upgrade of existing airstrips and terminals, modernizing aviation infrastructure across the state in compliance with civil aviation standards.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-accent">The Future of Regional Air</h2>
            <p className="text-muted-foreground">
              The success of UDAN in Gujarat has paved the way for more phases, focusing now on heliports and seaplanes (like the service near the Statue of Unity) to link even more remote locations. It is a long-term strategy for equitable regional development, ensuring that 'flying is for everyone.'
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleUdanScheme;