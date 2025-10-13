import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Clock, Calendar } from 'lucide-react';

const GujaratTradeGateway = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/articles">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-4">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              History
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              How Gujarat Became India's Trade Gateway
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Dr. Priya Mehta
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                October 15, 2023
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <Card>
              <CardContent className="p-8">
                <p className="text-xl text-muted-foreground leading-relaxed mb-6 italic">
                  From ancient Indus Valley ports to modern mega-terminals, Gujarat's journey to becoming 
                  India's premier trade hub is a testament to geography, vision, and enterprise.
                </p>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Ancient Foundations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gujarat's story as a trade gateway begins over 4,500 years ago with the Indus Valley 
                  Civilization. The ancient port of Lothal, discovered in 1954, reveals sophisticated 
                  dockyard engineering that facilitated maritime trade with Mesopotamia, Egypt, and the 
                  Persian Gulf. Archaeological evidence shows that Gujarati traders exported precious stones, 
                  textiles, and agricultural products while importing metals and luxury goods.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The strategic location of Gujarat's coastline along the Arabian Sea made it a natural 
                  meeting point for trade routes connecting the East with the West. Cities like Dholavira 
                  and Bharuch emerged as important trading centers, establishing patterns of commerce that 
                  would persist for millennia.
                </p>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Medieval Maritime Dominance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During the medieval period, Gujarat's ports flourished under various dynasties. The 
                  Sultanate period (1297-1573) saw unprecedented growth in maritime trade. Cambay (modern 
                  Khambhat) became one of the most important ports in the Indian Ocean, trading in textiles, 
                  diamonds, and spices.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gujarati merchants established trading networks spanning from Southeast Asia to East Africa. 
                  The state's shipbuilding industry, particularly in Mandvi, gained international renown for 
                  producing sturdy wooden dhows that could navigate long-distance oceanic routes. These ships 
                  carried Gujarat's famous textiles - including the celebrated Patola silk and block-printed 
                  cottons - to markets across the globe.
                </p>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Colonial Era Transformation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The arrival of European powers brought new dimensions to Gujarat's trade. The Portuguese, 
                  British, and Dutch all sought to control Gujarat's ports. The British development of railways 
                  in the 19th century revolutionized inland connectivity, linking Gujarat's ports to northern 
                  India's markets.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ahmedabad emerged as a major industrial center, earning the moniker "Manchester of the East" 
                  for its textile mills. The city's strategic location along the Mumbai-Delhi railway corridor 
                  made it a crucial node in India's transport network. Surat, historically important for 
                  maritime trade, adapted to become a major textile processing and diamond cutting center.
                </p>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Post-Independence Growth</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After independence, Gujarat's strategic importance grew exponentially. The development of 
                  Kandla Port in the 1950s compensated for the loss of Karachi (now in Pakistan) and provided 
                  northern India with a major seaport. The state government's pro-business policies encouraged 
                  industrial development, leading to the establishment of major industrial zones.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The 1990s liberalization era saw Gujarat capitalize on its advantages. The state attracted 
                  significant investment in port infrastructure, with Mundra Port becoming India's largest 
                  private port. The establishment of Special Economic Zones (SEZs) and industrial corridors 
                  further enhanced Gujarat's appeal as an investment destination.
                </p>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Modern Infrastructure Revolution</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Today, Gujarat handles approximately 40% of India's maritime cargo. The state boasts:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Over 40 ports, including major ones at Kandla, Mundra, Pipavav, and Hazira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Excellent road connectivity with national highways and expressways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Strong railway network connecting to all major Indian cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Multiple international airports facilitating air cargo</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">The Bullet Train Era</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gujarat is set to host India's first high-speed rail corridor connecting Mumbai to Ahmedabad. 
                  This 508-kilometer route will reduce travel time to just 2-3 hours, potentially transforming 
                  the economic landscape of western India. The project represents Gujarat's continued commitment 
                  to maintaining its position at the forefront of India's transport infrastructure.
                </p>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Key Success Factors</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Several factors explain Gujarat's success as India's trade gateway:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Geographic Advantage:</strong> Long coastline with natural harbors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Entrepreneurial Culture:</strong> Strong tradition of trade and business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Infrastructure Investment:</strong> Continuous upgradation of ports, roads, and railways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Industrial Diversification:</strong> From petrochemicals to pharmaceuticals to diamonds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span><strong>Policy Support:</strong> Business-friendly governance and ease of doing business</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mt-8 mb-4">Looking Ahead</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gujarat continues to invest heavily in transport infrastructure. The Delhi-Mumbai Industrial 
                  Corridor, passing through Gujarat, promises to create new manufacturing and logistics hubs. 
                  Plans for coastal economic zones, expansion of airport capacity, and development of inland 
                  waterways indicate that Gujarat's role as India's premier trade gateway will only strengthen 
                  in the coming decades.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From ancient brick-lined dockyards to modern automated container terminals, Gujarat's journey 
                  reflects India's own evolution as a trading nation. The state's ability to adapt to changing 
                  times while leveraging its geographic and cultural advantages serves as a model for regional 
                  economic development. As India emerges as a global economic powerhouse, Gujarat's strategic 
                  position ensures it will remain at the heart of the nation's trade and commerce.
                </p>
              </CardContent>
            </Card>
          </div>
        </article>
      </div>
    </main>
  );
};

export default GujaratTradeGateway;
