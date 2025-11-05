import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Anchor, Zap, Leaf, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { User, Clock, Plane, TrendingUp, MapPin } from 'lucide-react';

const ArticleGreenPorts = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <Link to="/articles" className="text-accent hover:underline flex items-center mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
      </Link>
      <Card className="shadow-2xl border-l-8 border-green-500/70 bg-card/80">
        <CardContent className="p-10 md:p-16 space-y-8">
          <Badge variant="secondary" className="bg-green-600/10 text-green-500 px-4 py-1 text-sm font-bold">
            Maritime Innovation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            The Rise of Green Ports: Kandla and Mundra's Sustainable Future
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground border-b pb-4">
            <span className="flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Aarav Singhal</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 12 min read</span>
            <span className="flex items-center gap-2"><Leaf className="h-4 w-4 text-accent" /> April 1, 2024</span>
          </div>

          <p className="text-xl leading-relaxed text-foreground">
            Gujarat, home to India's longest coastline, is not just a hub for traditional maritime trade—it is pioneering a sustainable revolution. The ports of Kandla (Deendayal Port) and Mundra are transitioning into 'Green Ports,' a global standard focusing on environmental conservation and energy efficiency.
          </p>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">Solar Power: The Energy Shift</h2>
            <p className="text-muted-foreground">
              A key component of this transition is the massive deployment of solar energy. Mundra Port, one of the world's largest private ports, has installed substantial solar capacity to power its operations, from container handling to warehousing. This move drastically reduces its carbon footprint and operational costs, setting a benchmark for other Indian ports.
            </p>

            <h2 className="text-3xl font-bold text-accent">Water and Waste Management</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-green-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Zap className="h-5 w-5 text-green-500" /> Shore-to-Ship Power</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Plans are underway to implement Shore-to-Ship Power facilities, allowing berthed vessels to switch off diesel generators and plug into the port's greener electrical grid, drastically cutting local air pollution.
                </p>
              </Card>
              <Card className="p-6 bg-green-500/5">
                <h3 className="text-xl font-semibold flex items-center gap-2"><Shield className="h-5 w-5 text-green-500" /> Environmental Protection</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Advanced sewage treatment plants and zero-discharge mechanisms are being implemented to ensure water used in port operations is treated and reused, protecting the sensitive coastal ecology of the Gulf of Kutch.
                </p>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-accent">The Future: LNG Bunkering</h2>
            <p className="text-muted-foreground">
              Looking ahead, the next big leap is the establishment of LNG (Liquefied Natural Gas) bunkering facilities. As shipping companies adopt cleaner fuels, Gujarat's ports are strategically positioning themselves to become a major refuelling stop along international shipping routes, solidifying their role as global, sustainable maritime leaders.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleGreenPorts;