import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Calendar } from 'lucide-react';
import vintageCart from '@/assets/vintage-bullock-cart.jpg';
import heroImage from '@/assets/hero-transport-evolution.jpg';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Road', 'Rail', 'Water', 'Air'];

  const galleryItems = [
    {
      category: 'Road',
      title: 'Vintage Bullock Cart',
      era: 'Historic',
      year: '1900s',
      description: 'Traditional transport on Gujarat roads',
      image: vintageCart,
    },
    {
      category: 'Rail',
      title: 'Transport Evolution',
      era: 'Historic to Modern',
      year: 'Various',
      description: 'Journey from steam to electric',
      image: heroImage,
    },
    {
      category: 'Road',
      title: 'Modern Expressway',
      era: 'Modern',
      year: '2020s',
      description: 'Multi-lane highway infrastructure',
      image: heroImage,
    },
    {
      category: 'Water',
      title: 'Kandla Port',
      era: 'Modern',
      year: '1950s-Present',
      description: 'Major commercial shipping hub',
      image: heroImage,
    },
    {
      category: 'Air',
      title: 'Sardar Patel Airport',
      era: 'Modern',
      year: '1991-Present',
      description: 'International aviation gateway',
      image: heroImage,
    },
    {
      category: 'Rail',
      title: 'Heritage Station',
      era: 'Historic',
      year: '1800s',
      description: 'British-era railway architecture',
      image: heroImage,
    },
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Image className="h-16 w-16 mx-auto text-accent" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Visual Gallery
          </h1>
          <p className="text-xl text-muted-foreground italic font-display">
            Then & Now – A Journey Through Time
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="min-w-[100px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {item.era}
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-accent font-semibold">{item.year}</p>
                <p className="text-muted-foreground">{item.description}</p>
                <div className="pt-3 border-t border-border">
                  <span className="text-xs bg-muted px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Then & Now Comparison Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-display font-bold text-center mb-12">
            Comparing Eras
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-card to-muted/30">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-3xl font-display font-bold text-accent">
                  Then
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Manual and animal-powered transport</li>
                  <li>• Narrow unpaved roads and tracks</li>
                  <li>• Small wooden ships and boats</li>
                  <li>• Basic airstrips for military use</li>
                  <li>• Steam locomotives on limited routes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-3xl font-display font-bold text-accent">
                  Now
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Electric and hybrid vehicles</li>
                  <li>• Multi-lane expressways and smart highways</li>
                  <li>• World-class ports handling mega ships</li>
                  <li>• International airports with modern terminals</li>
                  <li>• High-speed rail and metro systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Note */}
        <div className="mt-12 text-center">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                This gallery showcases historical and modern transport images. Many photographs
                are preserved in archives and museums across Gujarat, documenting the state's
                remarkable transformation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
