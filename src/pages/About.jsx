import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Heart, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">

          {/* ✅ Added big logo here */}
          <img
            src="/logo.png"
            alt="Wheels of Time Logo"
            className="w-40 h-40 mx-auto object-contain drop-shadow-lg"
          />

          <h1 className="text-5xl md:text-6xl font-display font-bold">
            About Wheels of Time
          </h1>
          <p className="text-xl text-muted-foreground italic font-display">
            Preserving and celebrating Gujarat's transport legacy
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-12 w-12 text-accent" />
                <h2 className="text-4xl font-display font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                Wheels of Time is dedicated to documenting, preserving, and sharing the rich
                transport heritage of Gujarat. From ancient maritime trade routes to cutting-edge
                bullet trains, we believe every mode of transport tells a story of human ingenuity,
                economic growth, and cultural evolution.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Through interactive content, archival materials, and educational resources, we aim
                to inspire appreciation for how transportation has shaped Gujarat's past and
                continues to drive its future.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Historical Archives',
                description:
                  'Digitized documents, photographs, and records from museums and government archives',
              },
              {
                title: 'Gallery',
                description:
                  'A curated visual collection featuring rare photographs, transport artifacts, historical vehicles, and landmark moments from Gujarat’s transport evolution.',
              },
              {
                title: 'Educational Content',
                description:
                  'Articles, timelines, and stories that bring transport history to life',
              },
              {
                title: 'Interactive Learning',
                description:
                  'Quizzes and activities to engage students and history enthusiasts',
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-display font-bold text-accent">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Credits */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-12 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-12 w-12 text-accent" />
                <h2 className="text-4xl font-display font-bold">Acknowledgments</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This project would not be possible without the generous support and contributions
                from various organizations and individuals:
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Gujarat State Archives for providing historical documents and photographs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Archaeological Survey of India for Lothal and Dholavira materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>GSRTC for access to vintage bus photographs and operational history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Western Railway archives and heritage department</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Gujarat Maritime Board for port documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Local historians, researchers, and community members</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Wheels of Time. Dedicated to preserving Gujarat's transport heritage for future
            generations.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
