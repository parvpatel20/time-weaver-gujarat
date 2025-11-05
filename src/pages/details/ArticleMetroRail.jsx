import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Train, Clock, Map, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const ArticleMetroRail = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <Link to="/articles" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
      </Link>
      <Card className="shadow-2xl border-l-8 border-red-500/70 bg-card/80">
        <CardContent className="p-10 md:p-16 space-y-8">
          <Badge variant="secondary" className="bg-red-600/10 text-red-500 px-4 py-1 text-sm font-bold">
            Urban Transit
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Metro Rail Revolution: Ahmedabad-Gandhinagar's Rapid Urban Future
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b pb-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Nidhi Karia</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 6 min read</span>
            <span className="flex items-center gap-2"><Train className="h-4 w-4 text-accent" /> January 5, 2024</span>
          </div>

          <p className="text-xl leading-relaxed text-foreground">
            The GIFT City-Gandhinagar-Ahmedabad Metro project marks a monumental step in modernizing urban transport in Gujarat. Beyond easing congestion, the metro redefines the lifestyle and economic synergy between the capital region and the commercial hub.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">Phase I: The Foundation</h2>
            <p className="text-muted-foreground">
              Phase I successfully connected key nodes, including Vastral and Thaltej, providing rapid, air-conditioned transit that has quickly become essential for daily commuters. The metro integrates modern, high-tech systems with a focus on punctuality and safety, setting a new standard for public transport in the state.
            </p>

            <h2 className="text-3xl font-bold text-accent">Phase II: Bridging the Capital</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-red-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Map className="h-5 w-5 text-red-500" /> Connecting GIFT City</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The extension to GIFT City and Gandhinagar is critical, establishing a seamless link between Gujarat's financial, educational, and political centers. This integration is crucial for the state's global profile.
                </p>
              </Card>
              <Card className="p-6 bg-red-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Users className="h-5 w-5 text-red-500" /> Social Impact</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The metro facilitates greater labor mobility, allowing residents to access better employment and education opportunities across the twin cities without the reliance on private vehicles, significantly reducing pollution.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-accent">Future Multimodal Integration</h2>
            <p className="text-muted-foreground">
              Future plans include integrating the metro stations directly with the Indian Railways network and developing feeder bus services (BRTS and GSRTC), creating a truly multimodal transport ecosystem capable of serving the high-density urban sprawl efficiently.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleMetroRail;