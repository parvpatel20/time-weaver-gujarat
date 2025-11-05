import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, Calendar, Users, MapPin, Train, Landmark } from 'lucide-react';
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
              Gateway to Gujarat’s Railway Network
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
                  Ahmedabad Railway Junction, also known as Kalupur Railway Station, is one of India’s
                  oldest and most significant railway stations. Built during the British era in 1863,
                  it was a part of the Bombay, Baroda, and Central India Railway (BB&CI). Its grand
                  design symbolizes the era when railway architecture reflected both functionality and
                  colonial grandeur.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Architectural Heritage</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The station’s architectural beauty combines practicality with British Victorian charm:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Red-brick facade with arched corridors and tall columns.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Victorian-style clock tower that has become a city landmark.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Cast-iron railings, large wooden doors, and stone-carved motifs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>High ceilings and well-ventilated halls suited for Gujarat’s tropical climate.</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Strategic Importance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ahmedabad Junction is the headquarters of Western Railway and serves as a vital link
                  connecting Gujarat to every major region of India. It handles more than 150 trains daily
                  — from luxury expresses like Shatabdi and Tejas to freight services powering the state’s
                  industries. The station acts as a bridge between the industrial west and the cultural north.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Major Connections</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The junction offers seamless connectivity to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Mumbai, Delhi, Kolkata, Chennai – Pan-India metros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Jaipur, Jodhpur, Udaipur – Rajasthan’s royal destinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Surat, Vadodara, Rajkot – Gujarat’s key industrial zones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✦</span>
                    <span>Pune, Indore, Bhopal – Central India connectivity</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Location & Accessibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Located in the Kalupur area of Ahmedabad, the station is centrally positioned and easily
                  accessible from every part of the city. The Ahmedabad Metro (Kalupur station) connects directly,
                  and major bus routes, taxis, and app-based cabs make commuting smooth for travelers. It is just
                  9 km away from Sardar Vallabhbhai Patel International Airport.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Facilities Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Despite its vintage appearance, the station is equipped with state-of-the-art passenger facilities:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Train className="h-5 w-5 text-accent mt-1" />
                    <span>Digital information boards and real-time train status displays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Train className="h-5 w-5 text-accent mt-1" />
                    <span>Air-conditioned waiting halls and premium lounges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Train className="h-5 w-5 text-accent mt-1" />
                    <span>Wi-Fi-enabled premises with charging zones and kiosks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Train className="h-5 w-5 text-accent mt-1" />
                    <span>Food courts, bookstalls, and heritage café in the concourse area</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Future Developments</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ahmedabad Junction is part of India’s modernization initiatives under Amrit Bharat Station Scheme.
                  Plans include redevelopment with smart ticketing, multi-level parking, and integration with the
                  upcoming Mumbai–Ahmedabad Bullet Train corridor, making it one of the most advanced stations in Western India.
                </p>

                <h2 className="text-3xl font-display font-bold mb-4 mt-8">Nearby Attractions</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Within a short radius, travelers can explore Ahmedabad’s cultural richness:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Landmark className="h-5 w-5 text-accent mt-1" />
                    <span>Sabarmati Ashram – The peaceful home of Mahatma Gandhi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Landmark className="h-5 w-5 text-accent mt-1" />
                    <span>Manek Chowk – Famous for its night street food market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Landmark className="h-5 w-5 text-accent mt-1" />
                    <span>Teen Darwaza & Bhadra Fort – Heritage structures from medieval Ahmedabad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Landmark className="h-5 w-5 text-accent mt-1" />
                    <span>Law Garden Market – Known for local handicrafts and traditional attire</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-4">Did You Know?</h3>
              <ul className="space-y-3">
                {[
                  'The station is named after the Kalupur locality in Ahmedabad.',
                  'It was part of the Bombay, Baroda and Central India Railway established in 1855.',
                  'The building’s heritage facade is protected under the Archaeological Department.',
                  'It manages operations for the entire Western Railway zone headquartered here.',
                  'The upcoming bullet train corridor will connect Mumbai to Ahmedabad in just 2 hours.',
                  'The station’s architecture has inspired several modern railway terminal designs in India.',
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
