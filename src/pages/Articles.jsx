import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, User, ArrowRight, TrendingUp, Anchor, Bus, Train, Plane, Map, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const articles = [
    {
      title: 'Century-old rail link from Gujarat\'s princely past gets a broad-gauge makeover',
      author: 'Indian Express Team',
      date: '2025-09-03',
      readTime: '9 min read',
      excerpt:
        'This piece traces the history and transformation of Baroda’s historic metre-gauge rail lines in Gujarat, culminating in their broad-gauge conversion to enhance connectivity and economic opportunity.',
      category: 'Railways/History',
      route: 'https://indianexpress.com/article/long-reads/century-old-rail-link-from-gujarats-princely-past-gets-a-broad-gauge-makeover-10229221/',
    },
    {
      title: 'Gujarat – Transportation Network',
      author: 'Gujrat PCS Exam Notes Editorial Team',
      date: '2018-01-15',
      readTime: '12 min read',
      excerpt:
        'Details Gujarat’s mammoth network of highways, roads, bridges, railway stations, and the evolution of state-wide infrastructure including historic bridges and modern projects.',
      category: 'Roadways/Infrastructure',
      route: 'https://gujarat.pscnotes.com/gujrat-geography/gujarat-transportation-network/',
    },
    {
      title: 'Gujarat had first mooted metro project in 1987',
      author: 'Times of India (Ahmedabad News)',
      date: '2012-09-16',
      readTime: '8 min read',
      excerpt:
        'A historical retrospective of Gujarat’s early plans for a metro rail system, tracing policy and planning roots back to the late 1980s.',
      category: 'Metro/Urban Transit',
      route: 'https://timesofindia.indiatimes.com/city/ahmedabad/gujarat-had-first-mooted-metro-project-in-1987/articleshow/16428775.cms',
    },
    {
      title: 'Gujarat State Road Transport Corporation – Wikipedia',
      author: 'Wikipedia Community',
      date: '2008-06-10',
      readTime: '7 min read',
      excerpt:
        'Contains the history and development of GSRTC and its critical role in Gujarat’s road-based public transport ecosystem.',
      category: 'Roadways/Buses',
      route: 'https://en.wikipedia.org/wiki/Gujarat_State_Road_Transport_Corporation',
    },
    {
      title: 'Ahmedabad Metro – Wikipedia',
      author: 'Wikipedia Community',
      date: '2025-Update',
      readTime: '8 min read',
      excerpt:
        'Comprehensive timeline and background of Ahmedabad Metro, its phases, expansions, and transformative impact on Gujarat’s urban transit scene.',
      category: 'Metro/Urban Transit',
      route: 'https://en.wikipedia.org/wiki/Ahmedabad_Metro',
    },
    {
      title: 'Gujarat State Corporation Transportation (Scribd)',
      author: 'Kalol Institute Of Management',
      date: '2025-05-03',
      readTime: '12 min read',
      excerpt:
        'Research study of the history, evolution, and public challenges faced by GSRTC, Gujarat’s backbone transportation agency.',
      category: 'Roadways/Institutional History',
      route: 'https://www.scribd.com/document/127556475/gujarat-state-corporation-transpotation',
    },
    {
      title: 'Bridges in Gujarat (Section within PCS Notes)',
      author: 'Gujrat PCS Exam Notes Editorial Team',
      date: '2018-01-15',
      readTime: '7 min read',
      excerpt:
        'History of iconic bridges such as Ellis Bridge, Golden Bridge, Nehru Bridge, and Subhash Bridge, which have played critical roles in Gujarat’s road and transport development.',
      category: 'Bridge/Road History',
      route: 'https://gujarat.pscnotes.com/gujrat-geography/gujarat-transportation-network/',
    },
    {
      title: 'Urban rail transit in India (Gujarat Section) – Wikipedia',
      author: 'Wikipedia Community',
      date: 'Updated',
      readTime: '6 min read',
      excerpt:
        'Overview of the development, phases, and impact of urban rail projects including metro and suburban systems in Gujarat.',
      category: 'Railways/Urban Transit',
      route: 'https://en.wikipedia.org/wiki/Urban_rail_transit_in_India',
    },
    {
      title: 'Gujarat: Transportation in Gujarat – Your guide to trains, flights, and buses',
      author: 'Poojn.in (Editorial Team)',
      date: '2025-04-14',
      readTime: '7 min read',
      excerpt:
        'An up-to-date guide covering the spectrum of rail, road, and air transport options available for travelers across the state, with contextual references to development.',
      category: 'Multimodal/History & Guide',
      route: 'https://www.poojn.in/post/26145/transportation-in-gujarat-your-guide-to-trains-flights-and-buses',
    },
    {
      title: 'ETV Bharat – Gujarat, Haryana, Punjab top in transport infrastructure',
      author: 'ETV Bharat Editorial Team',
      date: '2021-11-07',
      readTime: '5 min read',
      excerpt:
        'Compares Gujarat’s transport infrastructure achievements in rail, road, and warehousing; highlights the state’s leadership in national connectivity.',
      category: 'Infrastructure/Comparative',
      route: 'https://www.etvbharat.com/english/bharat/gujarat-haryana-punjab-top-in-transport-infrastructure/na20211108193206580',
    }
  ];

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  // Search + pagination for articles (filter like Archives)
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter by search query (title, excerpt, author, category)
  const filteredArticles = (searchQuery && searchQuery.trim() !== '')
    ? otherArticles.filter((a) => {
        const q = searchQuery.trim().toLowerCase();
        return (
          (a.title && a.title.toLowerCase().includes(q)) ||
          (a.excerpt && a.excerpt.toLowerCase().includes(q)) ||
          (a.author && a.author.toLowerCase().includes(q)) ||
          (a.category && a.category.toLowerCase().includes(q))
        );
      })
    : otherArticles;

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));
  const paginatedArticles = filteredArticles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getIconForCategory = (category) => {
    switch (category) {
      case 'Ancient History': return <Anchor className="h-4 w-4 text-accent" />;
      case 'Road Transport': return <Bus className="h-4 w-4 text-accent" />;
      case 'Railway History': return <Train className="h-4 w-4 text-accent" />;
      case 'Maritime Innovation': return <TrendingUp className="h-4 w-4 text-accent" />;
      case 'Aviation & Policy': return <Plane className="h-4 w-4 text-accent" />;
      case 'Infrastructure': return <Map className="h-4 w-4 text-accent" />;
      case 'Urban Transit': return <Train className="h-4 w-4 text-accent" />;
      case 'Urban Planning': return <Map className="h-4 w-4 text-accent" />;
      default: return <BookOpen className="h-4 w-4 text-accent" />;
    }
  }

  return (
    <main className="min-h-screen py-12 bg-background/95">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <BookOpen className="h-16 w-16 mx-auto text-accent animate-pulse-slow" />
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-foreground tracking-tight">
            Transport Narratives
          </h1>
          <p className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
            In-depth explorations of Gujarat's transport heritage, innovation, and future
          </p>
        </div>

        {/* Featured Article */}
        <Card className="mb-12 bg-gradient-to-br from-accent/10 to-accent/5 border-l-4 border-accent/70 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500">
          <CardContent className="p-12">
            <div className="mb-4">
              <span className="bg-accent/80 text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                Featured: {featuredArticle.category}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
              {featuredArticle.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-accent" />
                {featuredArticle.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                {featuredArticle.readTime}
              </span>
              <span>•</span>
              <span>{featuredArticle.date}</span>
            </div>
            <p className="text-lg text-foreground leading-relaxed mb-6 max-w-4xl">
              {featuredArticle.excerpt}
            </p>
            {featuredArticle.route && featuredArticle.route.startsWith('http') ? (
              <a href={featuredArticle.route} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group bg-accent hover:bg-accent/90 transition-colors">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            ) : (
              <Link to={featuredArticle.route}>
                <Button size="lg" className="group bg-accent hover:bg-accent/90 transition-colors">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>

        {/* Search + Articles Grid (paginated; 2 per row) */}
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles by title, excerpt, author or category..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full md:w-[720px] px-4 py-3 rounded-2xl border border-border bg-input text-base placeholder:text-muted-foreground shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
                aria-label="Search articles"
              />

              <div className="flex items-center gap-2">
                {searchQuery ? (
                  <Button
                    variant="ghost"
                    onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                    className="p-2"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </Button>
                ) : null}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {paginatedArticles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-2 border-transparent hover:border-accent/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold bg-muted px-3 py-1 rounded-full text-accent flex items-center gap-1">
                    {getIconForCategory(article.category)}
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 min-h-[60px]">{article.excerpt}</p>
                
                <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <User className="h-3 w-3" />
                        By {article.author}
                    </span>
                    {article.route && article.route.startsWith('http') ? (
                      <a href={article.route} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" className="group/btn text-accent p-0 h-auto hover:text-accent/80">
                          Read <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    ) : (
                      <Link to={article.route}>
                        <Button variant="ghost" className="group/btn text-accent p-0 h-auto hover:text-accent/80">
                          Read <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button variant="outline" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
            Prev
          </Button>
          <div className="text-sm text-muted-foreground">Page {currentPage} of {totalPages}</div>
          <Button variant="outline" onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Articles;