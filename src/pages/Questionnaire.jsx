import React, { useMemo, useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem as Radio } from '@/components/ui/radio-group';
import { Rating } from '@/components/ui/rating';

// Enhanced Questionnaire: same theme/colors but improved spacing, visual hierarchy and micro-interactions
const Questionnaire = () => {
  const [form, setForm] = useState({
    name: '',
    ageGroup: '',
    city: '',
    // knowledge questions removed (quiz handles knowledge)
    freq: '',
    mostUsed: [],
    satisfaction: 0,
    commuteTime: '',
    longMode: '',
    q7: '',
    interest: '',
    navEase: 0,
    extras: [],
    suggestions: '',
    preservationPriority: '',
    supportFunding: '',
    accessibility: 0,
    contentDepth: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const ageOptions = ['Under 18', '18-25', '26-40', '41-60', '60+'];
  const cities = ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara', 'Other'];

  function update(field, value) {
    setForm((s) => {
      const cur = s[field];
      // shallow equality check for primitives and simple arrays
      if (Array.isArray(cur) && Array.isArray(value)) {
        if (cur.length === value.length && cur.every((v, i) => v === value[i])) return s;
      } else if (cur === value) {
        return s;
      }
      return { ...s, [field]: value };
    });
  }

  function toggleArray(field, value) {
    setForm((s) => {
      const prev = s[field] || [];
      const arr = new Set(prev);
      if (arr.has(value)) arr.delete(value); else arr.add(value);
      const next = Array.from(arr);
      // compare
      if (prev.length === next.length && prev.every((v, i) => v === next[i])) return s;
      return { ...s, [field]: next };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire up API call or persistence
    console.log('Form submitted', form);
  }

  const completion = useMemo(() => {
    const keys = [
      'name','ageGroup','city',
      // knowledge removed
      'freq','mostUsed','satisfaction','commuteTime','longMode',
      'q7','interest','preservationPriority','supportFunding',
      'navEase','extras','accessibility','contentDepth','suggestions'
    ];
    const filled = keys.reduce((acc, k) => acc + (Array.isArray(form[k]) ? (form[k].length > 0) : !!form[k]) , 0);
    return Math.round((filled / keys.length) * 100);
  }, [form]);

  if (submitted) {
    return (
      <main className="container mx-auto p-6">
        <Card className="rounded-2xl shadow-xl overflow-hidden">
          <CardContent className="p-12 text-center bg-card">
            <h1 className="text-3xl font-bold text-accent">Thank you!</h1>
            <p className="text-muted-foreground mt-2">Your feedback helps us improve the Transport History of Gujarat website.</p>
            <div className="mt-6">
              <Button size="lg" asChild>
                <a href="/" className="w-full inline-block text-center">Back to Home</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-6 md:p-10">
      <header className="mb-8">
        <div className="bg-gradient-to-br from-accent/8 to-accent/4 rounded-2xl p-8 md:p-4 text-center">
          <BookOpen className="h-20 w-20 mx-auto text-accent animate-pulse-slow" />
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mt-4">Questionnaire</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">Takes about 2 minutes. Your responses are anonymous.</p>
          <div className="mt-4">
          </div>
        </div>

        {/* Progress bar (kept below the hero for clarity) */}
        <div className="mt-6 md:mt-8 max-w-2xl mx-auto text-center">
          <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span className="font-medium">{completion}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div className="h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-accent to-primary" style={{ width: `${completion}%` }} />
          </div>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Grouped layout: two-column on wide screens, single column on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-4 section-title"><span className="section-accent" /> <span>User information</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name (optional)</label>
                    <Input placeholder="Your name" value={form.name} onChange={(e) => update('name', e.target.value)} className="input-enhanced" />
                    <p className="text-xs text-muted-foreground mt-1">Leave blank to stay anonymous.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Age group</label>
                    <Select value={form.ageGroup} onValueChange={(v) => update('ageGroup', v)}>
                      <SelectTrigger>
                        <SelectValue>{form.ageGroup || 'Select age group'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {ageOptions.map((a) => (<SelectItem key={a} value={a}>{a}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">City</label>
                    <Select value={form.city} onValueChange={(v) => update('city', v)}>
                      <SelectTrigger>
                        <SelectValue>{form.city || 'Select city'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="hidden md:block" />
                </div>
              </CardContent>
            </Card>

            {/* Knowledge section removed — quiz page covers knowledge questions */}

              <Card className="rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-2 section-title"><span className="section-accent" /> <span>Your Transport Usage in Daily Life</span></h2>
                <p className="lead mb-4">Tell us how you use transport and how satisfied you are.</p>

                  <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">1. How often do you use public transport?</label>
                    <RadioGroup value={form.freq} onValueChange={(v) => update('freq', v)}>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="daily" /> <span>Daily</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="weekly" /> <span>Weekly</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="monthly" /> <span>Monthly</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="never" /> <span>Never</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="occasionally" /> <span>Occasionally</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="seasonal" /> <span>Seasonally (festivals/trips)</span></label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">2. Which transport do you use the most? (choose any)</label>
                    <div className="flex flex-wrap gap-3">
                      <label className="inline-flex items-center"><Checkbox checked={form.mostUsed.includes('bus')} onCheckedChange={() => toggleArray('mostUsed','bus')} /> <span className="ml-2">Bus</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.mostUsed.includes('train')} onCheckedChange={() => toggleArray('mostUsed','train')} /> <span className="ml-2">Train</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.mostUsed.includes('car')} onCheckedChange={() => toggleArray('mostUsed','car')} /> <span className="ml-2">Car</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.mostUsed.includes('motorbike')} onCheckedChange={() => toggleArray('mostUsed','motorbike')} /> <span className="ml-2">Motorbike</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.mostUsed.includes('other')} onCheckedChange={() => toggleArray('mostUsed','other')} /> <span className="ml-2">Other</span></label>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">3. Satisfaction Rating</label>
                    <div className="flex items-center gap-4">
                      <Rating value={form.satisfaction} onChange={(v) => update('satisfaction', v)} max={5} />
                      <span className="text-sm text-muted-foreground">{form.satisfaction} / 5</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">4. Typical one-way commute time</label>
                    <RadioGroup value={form.commuteTime} onValueChange={(v) => update('commuteTime', v)}>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"><Radio value="lt30" /> <span>Less than 30 minutes</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"><Radio value="30-60" /> <span>30–60 minutes</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"><Radio value="gt60" /> <span>More than 60 minutes</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"><Radio value="work-from-home" /> <span>Work from home / no commute</span></label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">5. Preferred mode for long-distance travel</label>
                    <Select value={form.longMode} onValueChange={(v) => update('longMode', v)}>
                      <SelectTrigger>
                        <SelectValue>{form.longMode || 'Select mode'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="train">Train</SelectItem>
                        <SelectItem value="bus">Bus</SelectItem>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="flight">Flight</SelectItem>
                        <SelectItem value="ship">Ship/Ferry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-2 section-title"><span className="section-accent" /> <span>Your Opinions</span></h2>
                <p className="lead mb-4">Tell us what you think about Gujarat's transport history and priorities.</p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">6. Do you think Gujarat has preserved its transport history well?</label>
                    <RadioGroup value={form.q7} onValueChange={(v) => update('q7', v)}>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="yes" /> <span>Yes</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="no" /> <span>No</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="partially" /> <span>Partially</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="dontknow" /> <span>Don't know</span></label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">7. Which area interests you the most?</label>
                    <RadioGroup value={form.interest} onValueChange={(v) => update('interest', v)}>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="railways" /> <span>Railways</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="roads" /> <span>Roads</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="ports" /> <span>Ports</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="aviation" /> <span>Aviation</span></label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">8. What should be the top priority for preserving transport history?</label>
                    <RadioGroup value={form.preservationPriority} onValueChange={(v) => update('preservationPriority', v)}>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="preservation" /> <span>Preservation (archives, artifacts)</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="exhibition" /> <span>Public exhibition & museums</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="education" /> <span>Education & school programs</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="digitization" /> <span>Digitization & online archives</span></label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">9. Would you support increased funding for transport heritage projects?</label>
                    <RadioGroup value={form.supportFunding} onValueChange={(v) => update('supportFunding', v)}>
                      <div className="flex flex-wrap gap-3">
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="yes" /> <span>Yes</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="no" /> <span>No</span></label>
                        <label className="inline-flex items-center gap-3 p-2 rounded-md hover:bg-popover transition"> <Radio value="depends" /> <span>Depends on project</span></label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <CardContent className="p-6 bg-card">
                <h2 className="text-2xl font-semibold mb-2 section-title"><span className="section-accent" /> <span>Feedback About Our Website</span></h2>
                <p className="lead mb-4">Help us improve the site experience.</p>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">10. How easy is the website to navigate?</label>
                    <div className="flex items-center gap-4">
                      <Rating value={form.navEase} onChange={(v) => update('navEase', v)} max={5} />
                      <span className="text-sm text-muted-foreground">{form.navEase} / 5</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">11. What more would you like to see?</label>
                    <div className="flex flex-wrap gap-3">
                      <label className="inline-flex items-center"><Checkbox checked={form.extras.includes('old-maps')} onCheckedChange={() => toggleArray('extras','old-maps')} /> <span className="ml-2">Old maps</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.extras.includes('vintage-buses')} onCheckedChange={() => toggleArray('extras','vintage-buses')} /> <span className="ml-2">Vintage buses</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.extras.includes('photos')} onCheckedChange={() => toggleArray('extras','photos')} /> <span className="ml-2">Photos</span></label>
                      <label className="inline-flex items-center"><Checkbox checked={form.extras.includes('archives')} onCheckedChange={() => toggleArray('extras','archives')} /> <span className="ml-2">Archives</span></label>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">12. How accessible is the website to you?</label>
                    <div className="flex items-center gap-4">
                      <Rating value={form.accessibility} onChange={(v) => update('accessibility', v)} max={5} />
                      <span className="text-sm text-muted-foreground">{form.accessibility} / 5</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-popover border border-border">
                    <label className="block font-medium mb-2">13. How would you rate the depth of content?</label>
                    <Select value={form.contentDepth} onValueChange={(v) => update('contentDepth', v)}>
                      <SelectTrigger>
                        <SelectValue>{form.contentDepth || 'Choose one'}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="more">More detail</SelectItem>
                        <SelectItem value="less">Less detail</SelectItem>
                        <SelectItem value="about">About right</SelectItem>
                        <SelectItem value="visuals">More visuals</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block font-medium mb-2">14. Your suggestions</label>
                    <Textarea placeholder="Any suggestions or comments" value={form.suggestions} onChange={(e) => update('suggestions', e.target.value)} rows={5} />
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right column: sticky summary & submit */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card className="card-visual">
                <CardContent className="p-6 bg-card">
                  <h3 className="text-lg font-semibold mb-2 text-accent">Quick summary</h3>
                  <p className="text-sm text-muted-foreground mb-3">Completion: <span className="font-medium">{completion}%</span></p>
                  <div className="text-sm text-muted-foreground mb-4">Selected city: <span className="font-medium text-accent">{form.city || '—'}</span></div>
                  <ul className="text-sm space-y-2">
                    <li>Most used: <span className="font-medium">{form.mostUsed.join(', ') || '—'}</span></li>
                    <li>Interest: <span className="font-medium">{form.interest || '—'}</span></li>
                    <li>Commute: <span className="font-medium">{form.commuteTime || '—'}</span></li>
                    <li>Long-mode: <span className="font-medium">{form.longMode || '—'}</span></li>
                    <li>Satisfaction: <span className="font-medium">{form.satisfaction ? `${form.satisfaction} / 5` : '—'}</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-visual">
                <CardContent className="p-6 bg-card">
                  <h3 className="text-lg font-semibold mb-4 text-accent">Ready to submit?</h3>
                  <p className="text-sm text-muted-foreground mb-4">We respect your privacy — responses are used only to improve the site.</p>
                  <Button size="lg" type="submit" className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 transition">Submit Response</Button>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground text-center">By submitting you agree to our <a className="underline">privacy policy</a>.</div>
            </div>
          </aside>
        </div>
      </form>
    </main>
  );
};

export default Questionnaire;
