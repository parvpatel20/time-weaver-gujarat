import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Play, Volume2, Info } from 'lucide-react';

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const tourLocations = [
    {
      name: 'GSRTC Bus Depot',
      location: 'Ahmedabad',
      description: 'Explore the operations of one of India\'s largest state transport systems.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      highlights: ['Vintage bus collection', 'Modern electric buses', 'Maintenance facilities'],
    },
    {
      name: 'Lothal Archaeological Site',
      location: 'Saragwala Village',
      description: 'Walk through the 4,500-year-old ancient port of Lothal.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      highlights: ['Ancient dockyard', 'Warehouse ruins', 'Museum artifacts'],
    },
    {
      name: 'Kandla Port',
      location: 'Kutch',
      description: 'Virtual tour of one of India\'s major ports.',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      highlights: ['Container operations', 'Ship loading', 'Free trade zone'],
    },
  ];

  const currentLocation = tourLocations[selectedLocation];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <MapPin className="h-16 w-16 mx-auto text-accent" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Virtual Tour
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            Explore Gujarat's transport landmarks from anywhere
          </p>
        </div>

        {/* Main Tour Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Location Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-2xl font-display font-bold mb-4">Select Location</h2>
            {tourLocations.map((location, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all ${
                  selectedLocation === index
                    ? 'border-accent shadow-lg'
                    : 'hover:shadow-md hover:-translate-y-1'
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className={`h-5 w-5 mt-1 ${
                        selectedLocation === index ? 'text-accent' : 'text-muted-foreground'
                      }`}
                    />
                    <div>
                      <h3 className="font-display font-semibold">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">{location.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tour Display */}
          <div className="lg:col-span-2 space-y-6">
            {/* Virtual Tour Frame */}
            <Card className="overflow-hidden">
              <div className="relative bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Play className="h-20 w-20 mx-auto text-accent animate-pulse-glow" />
                  <p className="text-lg text-muted-foreground">Virtual Tour Player</p>
                  <Button size="lg">
                    Start Tour
                  </Button>
                </div>
              </div>
            </Card>

            {/* Tour Info */}
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl font-display font-bold mb-2">
                      {currentLocation.name}
                    </h2>
                    <p className="text-accent font-semibold flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {currentLocation.location}
                    </p>
                  </div>
                  {currentLocation.audioAvailable && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Volume2 className="h-4 w-4" />
                      Audio Guide
                    </Button>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentLocation.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-accent" />
                    Tour Highlights
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {currentLocation.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">✦</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">Start Guided Tour</Button>
                  <Button variant="outline" className="flex-1">
                    Free Exploration
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-display font-bold">
              Immersive Experience
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Our virtual tours feature high-resolution 360° photography, ambient sounds from each
              location, and expert voice-over narration providing historical context and fascinating
              details about Gujarat's transport heritage.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-display font-semibold text-lg mb-2">360° Views</h3>
                <p className="text-sm text-muted-foreground">
                  Explore locations from every angle
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-display font-semibold text-lg mb-2">Audio Guides</h3>
                <p className="text-sm text-muted-foreground">
                  Professional narration in multiple languages
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="font-display font-semibold text-lg mb-2">Interactive Hotspots</h3>
                <p className="text-sm text-muted-foreground">
                  Click to discover hidden details
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default VirtualTour;
