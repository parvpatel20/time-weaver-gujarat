import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Image, FileAudio, Archive } from 'lucide-react';

const Archives = () => {
  const [filter, setFilter] = useState('All');

  const archiveCategories = ['All', 'Documents', 'Photos', 'Records', 'Audio'];

  const archives = [
    {
      type: 'Documents',
      title: 'Railway Blueprint Collection',
      year: '1860-1950',
      description: 'Original British-era railway station blueprints and construction documents',
      format: 'PDF',
      icon: FileText,
      url: 'https://www.google.com/search?q=british+railway+blueprint+gujarat+pdf'
    },
    {
      type: 'Photos',
      title: 'GSRTC Historical Photos',
      year: '1960-2000',
      description: 'Evolution of Gujarat State Road Transport buses through decades',
      format: 'JPG',
      icon: Image,
      url: 'https://www.google.com/search?q=GSRTC+historical+photos'
    },
    {
      type: 'Records',
      title: 'Port Trade Records',
      year: '1900-1980',
      description: 'Shipping manifests and trade records from Mandvi and Kandla ports',
      format: 'PDF',
      icon: Archive,
      url: 'https://www.google.com/search?q=Kandla+port+trade+records+pdf'
    },
    {
      type: 'Audio',
      title: 'Oral History: Railway Workers',
      year: '1980s',
      description: 'Interviews with retired railway employees sharing their experiences',
      format: 'MP3',
      icon: FileAudio,
      url: 'https://www.google.com/search?q=railway+workers+oral+history+audio'
    },
    {
      type: 'Documents',
      title: 'Aviation Development Plans',
      year: '1970-1990',
      description: 'Government documents on civil aviation expansion in Gujarat',
      format: 'PDF',
      icon: FileText,
      url: 'https://www.google.com/search?q=Gujarat+aviation+development+plan+pdf'
    },
    {
      type: 'Photos',
      title: 'Lothal Excavation Photos',
      year: '1954-1963',
      description: 'Archaeological documentation of ancient port discovery',
      format: 'JPG',
      icon: Image,
      url: 'https://www.google.com/search?q=Lothal+excavation+photos'
    },
    {
      type: 'Records',
      title: 'Highway Construction Reports',
      year: '1990-2010',
      description: 'Official reports on major highway and expressway development',
      format: 'PDF',
      icon: Archive,
      url: 'https://www.google.com/search?q=Gujarat+highway+construction+report+pdf'
    },
    {
      type: 'Audio',
      title: 'Ship Captain Memoirs',
      year: '1970s',
      description: 'Recorded stories from traditional shipbuilders of Mandvi',
      format: 'MP3',
      icon: FileAudio,
      url: 'https://www.google.com/search?q=Mandvi+shipbuilding+oral+history'
    },
  ];

  const filteredArchives =
    filter === 'All' ? archives : archives.filter((item) => item.type === filter);

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <Archive className="h-16 w-16 mx-auto text-accent" />
          <h1 className="text-5xl md:text-6xl font-display font-bold">
            Digital Archives
          </h1>
          <p className="text-xl text-muted-foreground italic font-display max-w-3xl mx-auto">
            Preserving Gujarat's Transport Heritage – Documents, Photos & Records
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {archiveCategories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className="min-w-[120px]"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Archives Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {filteredArchives.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <item.icon className="h-12 w-12 text-accent" />
                  <span className="text-xs bg-muted px-3 py-1 rounded-full">
                    {item.format}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{item.type}</span>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Open Source
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Oral Histories Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-display font-bold mb-8 text-center">
            Oral History Collection
          </h2>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
            <CardContent className="p-12 space-y-6">
              <p className="text-lg text-foreground leading-relaxed text-center max-w-4xl mx-auto">
                Listen to firsthand accounts from railway workers, port officials, bus drivers,
                and shipbuilders who witnessed Gujarat's transport transformation. These audio
                recordings capture invaluable memories and insights from the past century.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { title: 'Railway Stories', duration: '45 min', year: '1980s' },
                  { title: 'Port Memories', duration: '32 min', year: '1970s' },
                  { title: 'Bus Drivers Tales', duration: '28 min', year: '1990s' },
                ].map((audio, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="p-6 space-y-3">
                      <FileAudio className="h-10 w-10 text-accent" />
                      <h3 className="font-display font-semibold text-lg">{audio.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{audio.duration}</span>
                        <span>{audio.year}</span>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Play Audio
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contribute Section */}
        <section>
          <Card className="bg-gradient-to-br from-card to-muted/30">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-display font-bold">
                Have Historical Materials?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you have old photographs, documents, or stories related to Gujarat's transport
                history, we'd love to hear from you. Help us preserve this valuable heritage for
                future generations.
              </p>
              <Button size="lg" className="mt-4">
                Submit Your Materials
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Archives;
