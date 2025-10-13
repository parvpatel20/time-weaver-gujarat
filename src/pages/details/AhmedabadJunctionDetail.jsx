import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Calendar, Users } from 'lucide-react';
import stationImage from '@/assets/ahmedabad-junction.jpg';

const AhmedabadJunctionDetail = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Link to="/rail-transport">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Rail Transport
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Ahmedabad Railway Junction
            </h1>
            <p className="text-xl text-muted-foreground italic font-display">
              Gateway to Gujarat's Railway Network
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={stationImage}
              alt="Ahmedabad Railway Junction - British colonial architecture"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Building className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">12</div>
                  <p className="text-sm text-muted-foreground">Platforms</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Calendar className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">1863</div>
                  <p className="text-sm text-muted-foreground">Established</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <Users className="h-8 w-8 mx-auto text-accent mb-2" />
                  <div className="text-2xl font-display font-bold text-accent">150K+</div>
                  <p className="text-sm text-muted-foreground">Daily Passengers</p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-display font-bold mb-4">Historical Background</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ahmedabad Railway Junction, also known as Kalupur Railway Station, is one of the oldest 
                  railway stations in India. Built during the British era in 1863, it showcases magnificent 
                  Victorian architecture with red brick construction and ornate details that reflect the 
                  grandeur of 19th-century railway engineering.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Architectural Heritage</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The station building is a fine example of British colonial architecture, featuring:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Distinctive red brick facade with arched windows and doorways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Victorian-style clock tower visible from across the city</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Ornamental ironwork and decorative elements typical of the era</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>High ceilings and spacious waiting halls designed for tropical climate</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Strategic Importance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As the headquarters of the Western Railway zone, Ahmedabad Junction serves as a critical 
                  hub connecting Gujarat to major cities across India. The station handles over 150 trains 
                  daily, including express trains, superfast services, and local passenger trains.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Major Connections</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The junction provides direct connectivity to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Mumbai, Delhi, Kolkata, Chennai - Major metro cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Jaipur, Udaipur, Jodhpur - Rajasthan tourist circuits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Vadodara, Surat, Rajkot - Gujarat industrial centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Pune, Indore, Bhopal - Central India</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Modern Amenities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While preserving its heritage architecture, the station has been upgraded with modern facilities 
                  including air-conditioned waiting rooms, food courts, digital displays, Wi-Fi connectivity, 
                  and improved passenger amenities. The station also houses the Railway Museum showcasing the 
                  history of Indian Railways.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Did You Know?</h3>
              <ul className="space-y-3">
                {[
                  'The station is named after the Kalupur area where it is located',
                  'It was built by the Bombay, Baroda and Central India Railway company',
                  'The station building is over 160 years old and is a protected heritage structure',
                  'Western Railway headquarters located here manages one of India\'s busiest railway zones',
                  'The station is being developed to become a stop on India\'s first bullet train corridor',
                ].map((fact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent text-2xl">✦</span>
                    <span className="text-lg">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default AhmedabadJunctionDetail;
