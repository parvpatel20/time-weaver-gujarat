import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Image, FileAudio, Archive, X } from 'lucide-react';

const Archives = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewItem, setPreviewItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const archiveCategories = ['All', 'Documents', 'Records', 'Audio'];

  const archives = [
    {
      type: 'Documents',
      title: 'History of Railways in Gujarat',
      year: '1855–1951',
      description: 'PDF on the expansion, blueprint, and legacy of Gujarat’s railway network, including BB&CI and Gaekwad lines.',
      format: 'PDF',
      icon: FileText,
      url: 'https://wr.indianrailways.gov.in/cris/uploads/files/1395221839141-history.pdf'
    },
    {
      type: 'Documents',
      title: 'Bhavnagar Division: Saurashtra Railways',
      year: '1880–1956',
      description: 'Historic record of Bhavnagar railway construction, integration, and operational geography in Gujarat.',
      format: 'PDF',
      icon: FileText,
      url: 'https://wr.indianrailways.gov.in/cris/uploads/files/1430199860555-About%20us.pdf'
    },
    {
      type: 'Documents',
      title: 'A History of Indian Railways',
      year: '1988',
      description: 'Book offering a comprehensive survey of railways in India, with emphasis on Gujarat’s historical development.',
      format: 'PDF',
      icon: FileText,
      url: 'https://archive.org/download/historyofindianr00gskh/historyofindianr00gskh.pdf'
    },
    {
      type: 'Documents',
      title: 'GSRTC Road Transport History',
      year: '1960–2008',
      description: 'Archival PDF chronicling the evolution and achievements of Gujarat State Road Transport Corporation.',
      format: 'PDF',
      icon: FileText,
      url: 'https://www.scribd.com/document/127556475/gujarat-state-corporation-transpotation'
    },
    {
      type: 'Records',
      title: 'Gujarat Maritime Trade Records',
      year: 'Pre-Independence',
      description: 'Official exhibition of Jamnagar and Porbandar port records illustrating maritime trade of princely states.',
      format: 'Web Exhibit',
      icon: Archive,
      url: 'https://archives.iima.ac.in/exhibitions/Maritime-Trade-Of-Gujarats-Princely_States.html'
    },
    {
      type: 'Records',
      title: 'Ports and Trade Routes of Medieval Gujarat',
      year: 'Medieval',
      description: 'Academic study and downloadable document mapping Gujarat’s port locations, trade routes, and revenue records.',
      format: 'PDF',
      icon: Archive,
      url: 'https://www.academia.edu/94753072/Ports_and_Trade_Routes_of_Medieval_Gujarat'
    },
    {
      type: 'Documents',
      title: 'Lothal Excavation and Port Heritage',
      year: '1955–1960',
      description: 'Gujarat Tourism and ASI official report: Lothal’s archaeological findings of the world’s oldest dockyard.',
      format: 'Web Page',
      icon: Image,
      url: 'https://www.gujarattourism.com/central-zone/ahmedabad/lothal.html'
    },
    {
      type: 'Audio',
      title: 'Mandvi Shipbuilding Oral History',
      year: '2022',
      description: 'Documentary video and oral interviews about the centuries-old tradition of shipbuilding in Mandvi, Kutch.',
      format: 'YouTube Audio/Video',
      icon: FileAudio,
      url: 'https://www.youtube.com/watch?v=ijD_SKh4cKQ'
    },
    {
      type: 'Audio',
      title: 'GSRTC Bus Memories',
      year: '2022',
      description: 'Gujarati-language video/audio archive recalling GSRTC bus history and passenger experiences.',
      format: 'YouTube Audio/Video',
      icon: FileAudio,
      url: 'https://www.youtube.com/watch?v=EjByR2ZeHVI'
    },
    {
      type: 'Documents',
      title: 'History of Indian Railways (DFCCIL)',
      year: '1832–Present',
      description: 'Timeline of historic milestones, developments, and engineering feats of Indian Railways.',
      format: 'PDF',
      icon: FileText,
      url: 'https://www.scribd.com/document/854991252/History-of-Indian-Railways-English-freematerialdfccil'
    }
  ];

  // Apply category filter and search query (searches title, description, and type)
  const filteredArchives = (filter === 'All' ? archives : archives.filter((item) => item.type === filter))
    .filter((item) => {
      if (!searchQuery || searchQuery.trim() === '') return true;
      const q = searchQuery.trim().toLowerCase();
      return (
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.type && item.type.toLowerCase().includes(q))
      );
    });

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredArchives.length / itemsPerPage));
  const paginatedArchives = filteredArchives.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Category counts for UI
  const counts = archiveCategories.reduce((acc, cat) => {
    acc[cat] = cat === 'All' ? archives.length : archives.filter((a) => a.type === cat).length;
    return acc;
  }, {});

  const canEmbed = (url, format) => {
    if (!url) return false;
    const u = url.toLowerCase();
    if (format && format.toLowerCase().includes('pdf')) return true;
    if (u.includes('.pdf')) return true;
    if (u.includes('youtube.com') || u.includes('youtu.be')) return true;
    return false;
  }

  const openPreview = (item) => {
    if (canEmbed(item.url, item.format)) {
      setPreviewItem(item);
    } else {
      // fallback: open in new tab
      window.open(item.url, '_blank', 'noopener');
    }
  };

  const closePreview = () => setPreviewItem(null);

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
            Preserving Gujarat's Transport Heritage – Documents, Video, Audio & Records
          </p>
        </div>

        {/* Filter Buttons */}
        {/* Filter Buttons (first row) and Search Controls (second row) */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {archiveCategories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => { setFilter(category); setCurrentPage(1); }}
                className="min-w-[140px]"
              >
                {category} <span className="ml-2 text-sm text-muted-foreground">({counts[category] || 0})</span>
              </Button>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search archives by title, description or type..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full md:w-[720px] px-4 py-3 rounded-2xl border border-border bg-input text-base placeholder:text-muted-foreground shadow-sm focus:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
                aria-label="Search archives"
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
        </div>

        {/* Archives Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {paginatedArchives.map((item, index) => (
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

                {/* Title + year */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">{item.title}</h3>
                  {item.year ? <div className="text-sm text-muted-foreground mt-1">{item.year}</div> : null}
                </div>

                <div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{item.type}</span>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => openPreview(item)}>
                      <Download className="h-4 w-4" />
                      Open Source
                    </Button>
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground underline">
                      External
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preview Modal (top-level) */}
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={closePreview} />
            <div className="relative z-10 w-11/12 md:w-3/4 lg:w-2/3 max-h-[85vh] bg-card rounded-lg overflow-hidden shadow-2xl">
              <div className="p-4 flex items-center justify-between border-b border-border">
                <div>
                  <div className="text-sm text-muted-foreground">{previewItem.type} • {previewItem.format}</div>
                  <h3 className="text-lg font-bold">{previewItem.title}</h3>
                </div>
                <div>
                  <Button variant="ghost" onClick={closePreview}>Close</Button>
                </div>
              </div>
              <div className="p-4">
                {previewItem.url && (previewItem.format && previewItem.format.toLowerCase().includes('pdf') || previewItem.url.toLowerCase().includes('.pdf')) ? (
                  <iframe src={previewItem.url} title={previewItem.title} className="w-full h-[70vh]" />
                ) : previewItem.url && (previewItem.url.includes('youtube.com') || previewItem.url.includes('youtu.be')) ? (
                  <div className="w-full h-[70vh]">
                    <iframe
                      title={previewItem.title}
                      className="w-full h-full"
                      src={(function(){
                        const u = previewItem.url;
                        if(u.includes('watch?v=')) return u.replace('watch?v=', 'embed/');
                        if(u.includes('youtu.be/')) return u.replace('youtu.be/', 'www.youtube.com/embed/');
                        return u;
                      })()}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <p className="text-muted-foreground">Preview not available. <a href={previewItem.url} target="_blank" rel="noreferrer" className="underline">Open in new tab</a></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

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

        {/* (Oral Histories and Contribute sections removed per request) */}
      </div>
    </main>
  );
};

export default Archives;
