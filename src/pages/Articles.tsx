import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const articles = [
    {
      title: 'How Gujarat Became India\'s Trade Gateway',
      author: 'Dr. Priya Mehta',
      date: 'October 15, 2023',
      readTime: '8 min read',
      excerpt:
        'Explore the strategic factors that transformed Gujarat into one of India\'s most important commercial hubs, from its ancient ports to modern infrastructure.',
      category: 'History',
    },
    {
      title: 'The Untold Story of Lothal Port',
      author: 'Rajesh Sharma',
      date: 'September 22, 2023',
      readTime: '6 min read',
      excerpt:
        'Dive deep into the archaeological wonders of Lothal, one of the world\'s earliest known docks, and its significance in ancient maritime trade.',
      category: 'Ancient History',
    },
    {
      title: 'Bullet Train: Gujarat\'s Leap into the Future',
      author: 'Sneha Patel',
      date: 'August 30, 2023',
      readTime: '10 min read',
      excerpt:
        'An in-depth look at India\'s first high-speed rail corridor connecting Mumbai and Ahmedabad, and its potential impact on Gujarat\'s economy and connectivity.',
      category: 'Modern Development',
    },
    {
      title: 'GSRTC: The People\'s Lifeline',
      author: 'Amit Kumar',
      date: 'July 18, 2023',
      readTime: '7 min read',
      excerpt:
        'The story of Gujarat State Road Transport Corporation and how it connects millions across the state, from remote villages to bustling cities.',
      category: 'Road Transport',
    },
    {
      title: 'Shipbuilding Heritage of Mandvi',
      author: 'Kamal Joshi',
      date: 'June 5, 2023',
      readTime: '9 min read',
      excerpt:
        'Discover the centuries-old tradition of wooden shipbuilding in Mandvi, where master craftsmen continue to create vessels using time-honored techniques.',
      category: 'Maritime Culture',
    },
    {
      title: 'Western Railway: The Colonial Legacy',
      author: 'Dr. Anjali Desai',
      date: 'May 12, 2023',
      readTime: '11 min read',
      excerpt:
        'How British railway infrastructure shaped modern Gujarat, from station architecture to the economic transformation of cities like Ahmedabad and Vadodara.',
      category: 'Railway History',
    },
  ];

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <BookOpen className="h-16 w-16 mx-auto text-accent" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Articles & Stories
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            In-depth explorations of Gujarat's transport heritage
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
          <CardContent className="p-12">
            <div className="mb-4">
              <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {articles[0].title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {articles[0].author}
              </span>
              <span>•</span>
              <span>{articles[0].date}</span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {articles[0].readTime}
              </span>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-6 max-w-4xl">
              {articles[0].excerpt}
            </p>
            <Button size="lg" className="group">
              Read Full Article
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {articles.slice(1).map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 space-y-4">
                <div>
                  <span className="text-xs bg-muted px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <p className="text-muted-foreground">{article.excerpt}</p>
                <Button variant="outline" className="group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Submit Story Section */}
        <Card className="bg-gradient-to-br from-card to-muted/30">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-4xl font-display font-bold">Share Your Story</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a personal story, memory, or insight about Gujarat's transport history? We
              welcome contributions from the community to help preserve and share these important
              narratives.
            </p>
            <Link to="/about">
              <Button size="lg" className="mt-4">
                Submit Your Story
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Articles;
