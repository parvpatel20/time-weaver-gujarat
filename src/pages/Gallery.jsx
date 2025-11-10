import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Image } from 'lucide-react';

// ROAD IMAGES
import bullockCart from '@/assets/bullock_cart.png';
import horseCart from '@/assets/Horse_cart.png';
import barodaCarriage from '@/assets/Horse-drawn carriage in Baroda.png';
import oldGsrtc from '@/assets/old_gsrtc.png';

// RAIL IMAGES
import junagadhOld from '@/assets/junagadh_old_station.png';
import kalupurOld from '@/assets/kalupur_old_station.jpg';
import steamTrain from '@/assets/old_steam_train.png';
import metro from '@/assets/gujarat_metro.png';
import doubleDecker from '@/assets/double_decker_gujarat.png';

// WATER IMAGES
import kandlaHistoric from '@/assets/historic_kandla.png';
import veravalBoats from '@/assets/veraval_boats.png';

// AIR IMAGES
import oldAirport from '@/assets/ahmedabad_old_airport.png';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Road', 'Rail', 'Water', 'Air'];

  const galleryItems = [
    // ROAD
    {
      category: 'Road',
      title: 'Bullock Cart',
      description: 'Traditional two-wheel cart pulled by oxen used across rural Gujarat.',
      image: bullockCart,
    },
    {
      category: 'Road',
      title: 'Horse Cart',
      description: 'Commonly used for goods and passenger mobility in old Gujarat.',
      image: horseCart,
    },
    {
      category: 'Road',
      title: 'Horse-Drawn Carriage, Baroda',
      description: 'Royal-era carriage widely seen in the Baroda princely state.',
      image: barodaCarriage,
    },
    {
      category: 'Road',
      title: 'Old Red GSRTC Bus',
      description: 'Early GSRTC bus that established statewide road connectivity.',
      image: oldGsrtc,
    },

    // RAIL
    {
      category: 'Rail',
      title: 'Junagadh Old Station',
      description: 'Historic Junagadh railway station from the princely era.',
      image: junagadhOld,
    },
    {
      category: 'Rail',
      title: 'Kalupur Old Station',
      description: 'Old British-era Ahmedabad Kalupur station.',
      image: kalupurOld,
    },
    {
      category: 'Rail',
      title: 'Steam Locomotive',
      description: 'Vintage steam engine used widely across Gujarat’s railway routes.',
      image: steamTrain,
    },
    {
      category: 'Rail',
      title: 'Gujarat Metro',
      description: 'Modern rapid transit connecting Ahmedabad and Gandhinagar.',
      image: metro,
    },
    {
      category: 'Rail',
      title: 'Double Decker Train – Gujarat',
      description: 'Iconic double-decker train operating through major Gujarat routes.',
      image: doubleDecker,
    },

    // WATER
    {
      category: 'Water',
      title: 'Historic Kandla Port',
      description: 'Early development era of Gujarat’s largest cargo port.',
      image: kandlaHistoric,
    },
    {
      category: 'Water',
      title: 'Veraval Fishing Boats',
      description: 'Traditional boats supporting coastal livelihood.',
      image: veravalBoats,
    },

    // AIR
    {
      category: 'Air',
      title: 'Ahmedabad Old Airport',
      description: 'Historic terminal of Sardar Vallabhbhai Patel International Airport.',
      image: oldAirport,
    },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch =
      selectedCategory === 'All' || item.category === selectedCategory;

    const searchMatch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
          <Image className="h-16 w-16 mx-auto text-accent" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Transport History Gallery
          </h1>
          <p className="text-lg text-muted-foreground italic">
            Explore Gujarat’s rich evolution across all transport modes.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="max-w-xl mx-auto mb-10 flex items-center gap-3">
          <Input
            placeholder="Search images..."
            className="focus-visible:ring-accent"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button className="bg-accent hover:bg-accent/80 text-accent-foreground">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat)}
              className="min-w-[100px]"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </div>
              </div>

              {/* Text Section */}
              <CardContent className="p-6 space-y-3">
                <h3 className="text-2xl font-display font-bold">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Gallery;
