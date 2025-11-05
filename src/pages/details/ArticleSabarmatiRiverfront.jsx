import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Map, Ship, Sunset, ArrowLeft, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleSabarmatiRiverfront = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <Link to="/articles" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
      </Link>
      <Card className="shadow-2xl border-l-8 border-purple-500/70 bg-card/80">
        <CardContent className="p-10 md:p-16 space-y-8">
          <Badge variant="secondary" className="bg-purple-600/10 text-purple-500 px-4 py-1 text-sm font-bold">
            Urban Planning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            Sabarmati Riverfront: Beyond Aesthetics, A Transport & Cultural Hub
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b pb-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Vivek Lalla</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 8 min read</span>
            <span className="flex items-center gap-2"><Sunset className="h-4 w-4 text-accent" /> December 10, 2023</span>
          </div>

          <p className="text-xl leading-relaxed text-foreground">
            The Sabarmati Riverfront Development Project is celebrated globally for urban revitalization, but its core strength lies in its strategic integration into Ahmedabad’s transport network, providing connectivity alongside recreation.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">The Lower and Upper Promenades</h2>
            <p className="text-muted-foreground">
              The project cleverly separated traffic flow: the upper level handles fast-moving road transport, while the lower promenade offers a dedicated, non-motorized pathway for pedestrians and cyclists. This separation has facilitated safe, alternative commuting routes, especially for short-distance travel within the city.
            </p>

            <h2 className="text-3xl font-bold text-accent">Multimodal Integration Points</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-purple-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Ship className="h-5 w-5 text-purple-500" /> Water Transport Potential</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  While primarily for recreation, the planning includes provisions for future intra-city water taxi services, utilizing the constant water level maintained by the barrages for innovative transport solutions.
                </p>
              </Card>
              <Card className="p-6 bg-purple-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Map className="h-5 w-5 text-purple-500" /> Connecting BRTS and Metro</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The Riverfront acts as a central node, with key BRTS and soon-to-be-operational Metro stations (like Paldi and Ashram Road) located within walking distance, making it the perfect transfer point for multimodal commuters.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-accent">A New Cultural Corridor</h2>
            <p className="text-muted-foreground">
              By connecting historical markets, the Gujarat High Court, and cultural landmarks, the Riverfront transforms a previously neglected river bank into a vibrant corridor where transport efficiency meets cultural exchange, truly setting a precedent for urban development.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleSabarmatiRiverfront;