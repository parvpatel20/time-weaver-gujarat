import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Map, TrendingUp, DollarSign, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User, Clock } from 'lucide-react';

const ArticleGoldenQuadrilateral = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <Link to="/articles" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
      </Link>
      <Card className="shadow-2xl border-l-8 border-amber-500/70 bg-card/80">
        <CardContent className="p-10 md:p-16 space-y-8">
          <Badge variant="secondary" className="bg-amber-600/10 text-amber-500 px-4 py-1 text-sm font-bold">
            Infrastructure
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            The Golden Quadrilateral: Gujarat's Road to Industrial Prosperity
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b pb-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Prof. Hemant Rao</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 9 min read</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 text-accent" /> February 20, 2024</span>
          </div>

          <p className="text-xl leading-relaxed text-foreground">
            The Golden Quadrilateral (GQ) project—linking India's four major metros—transformed the nation, but its impact on Gujarat's logistics and industrial landscape was arguably the most profound. Gujarat’s portion of the GQ became the spine connecting its ports and industrial clusters to the lucrative northern markets.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">The Logistics Revolution</h2>
            <p className="text-muted-foreground">
              The introduction of modern, multi-lane highways (NH-8) connecting Ahmedabad, Vadodara, and eventually Mumbai, slashed transit times by over 40%. This dramatically lowered transportation costs for goods manufactured in Gujarat’s industrial estates (like Vapi, Hazira, and Ankleshwar), boosting their competitiveness nationwide.
            </p>

            <h2 className="text-3xl font-bold text-accent">Catalyst for Industrial Corridors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-amber-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><TrendingUp className="h-5 w-5 text-amber-500" /> Industrial Proximity</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  The highway's proximity accelerated the establishment of new industrial and manufacturing parks immediately adjacent to the corridor, creating employment hubs and easing supply chain management.
                </p>
              </Card>
              <Card className="p-6 bg-amber-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><DollarSign className="h-5 w-5 text-amber-500" /> Export Efficiency</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Connecting directly to major ports like Mundra and Kandla, the GQ enabled seamless movement of export cargo, enhancing Gujarat's status as India’s leading export-oriented state.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-accent">Future Integration: DMIC</h2>
            <p className="text-muted-foreground">
              The GQ now forms the backbone of the Delhi-Mumbai Industrial Corridor (DMIC) in Gujarat, acting as the major feeder road system for the freight corridor. This synergy between modern rail freight and high-speed road networks promises an even greater era of economic growth and logistical efficiency.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleGoldenQuadrilateral;