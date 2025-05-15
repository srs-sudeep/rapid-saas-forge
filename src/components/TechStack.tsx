
import React, { useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Collapsible, 
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const frontendTech = [
  { name: 'React', description: 'UI component library', level: 90 },
  { name: 'Vite', description: 'Fast build tool', level: 95 },
  { name: 'TanStack Query', description: 'Data fetching & caching', level: 85 },
  { name: 'Zustand', description: 'State management', level: 80 },
  { name: 'Tailwind CSS', description: 'Utility-first CSS', level: 90 },
  { name: 'shadcn/ui', description: 'UI component system', level: 88 },
];

const backendTech = [
  { name: 'FastAPI', description: 'Modern Python framework', level: 92 },
  { name: 'SQLAlchemy', description: 'ORM for databases', level: 88 },
  { name: 'PostgreSQL', description: 'Relational database', level: 90 },
  { name: 'UV', description: 'Fast Python package installer', level: 85 },
  { name: 'Ruff', description: 'Fast Python linter', level: 82 },
  { name: 'Swagger', description: 'API documentation', level: 78 },
];

const devOpsTech = [
  { name: 'Docker', description: 'Containerization', level: 94 },
  { name: 'Kong', description: 'API Gateway', level: 87 },
  { name: 'Redis', description: 'In-memory data store', level: 89 },
  { name: 'ELK Stack', description: 'Logging & monitoring', level: 83 },
  { name: 'GitHub Actions', description: 'CI/CD pipelines', level: 86 },
  { name: 'Kubernetes', description: 'Container orchestration', level: 80 },
];

export const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRefs.current) {
      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });
    }

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach((card) => {
          if (card) observer.unobserve(card);
        });
      }
    };
  }, []);

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Built with Modern Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            HorizonX integrates best-in-class libraries and tools to ensure your application 
            is robust, maintainable, and scalable.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
            
            <TabsContent value="frontend">
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {frontendTech.map((tech, i) => (
                      <CarouselItem key={tech.name} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card 
                            ref={el => cardRefs.current[i] = el}
                            className="opacity-0 translate-y-10 transition-all duration-500 ease-out border border-horizonx-200 hover:border-horizonx-400 hover:shadow-lg hover:shadow-horizonx-500/20"
                          >
                            <CardContent className="p-6 flex flex-col items-center">
                              <div className="w-16 h-16 mb-4 rounded-full bg-horizonx-100 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-horizonx-500/20 flex items-center justify-center">
                                  <div className="w-8 h-8 rounded-full bg-horizonx-600 flex items-center justify-center text-white font-bold">
                                    {tech.name.charAt(0)}
                                  </div>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                              <p className="text-sm text-center text-muted-foreground mb-4">{tech.description}</p>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div 
                                  className="bg-horizonx-500 h-2.5 rounded-full animate-pulse-slow" 
                                  style={{ width: `${tech.level}%` }}
                                ></div>
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">Efficiency: {tech.level}%</div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>

              <Collapsible className="w-full">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">View key frontend features</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                      <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden">
                  <div className="p-4 mt-2 border rounded-md bg-muted/50 text-sm space-y-2">
                    <p><strong>Lightning-fast rendering</strong> with optimized React components</p>
                    <p><strong>Smart data fetching</strong> patterns with automatic caching and refetching</p>
                    <p><strong>Type-safe development</strong> with full TypeScript support</p>
                    <p><strong>Beautiful UI components</strong> with shadcn/ui and Tailwind CSS</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </TabsContent>
            
            <TabsContent value="backend">
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {backendTech.map((tech, i) => (
                      <CarouselItem key={tech.name} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card 
                            ref={el => cardRefs.current[i + 6] = el}
                            className="opacity-0 translate-y-10 transition-all duration-500 ease-out border border-horizonx-200 hover:border-horizonx-400 hover:shadow-lg hover:shadow-horizonx-500/20"
                          >
                            <CardContent className="p-6 flex flex-col items-center">
                              <div className="w-16 h-16 mb-4 rounded-full bg-horizonx-100 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-horizonx-500/20 flex items-center justify-center">
                                  <div className="w-8 h-8 rounded-full bg-horizonx-600 flex items-center justify-center text-white font-bold">
                                    {tech.name.charAt(0)}
                                  </div>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                              <p className="text-sm text-center text-muted-foreground mb-4">{tech.description}</p>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div 
                                  className="bg-horizonx-500 h-2.5 rounded-full animate-pulse-slow" 
                                  style={{ width: `${tech.level}%` }}
                                ></div>
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">Efficiency: {tech.level}%</div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>

              <Collapsible className="w-full">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">View key backend features</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                      <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden">
                  <div className="p-4 mt-2 border rounded-md bg-muted/50 text-sm space-y-2">
                    <p><strong>Asynchronous processing</strong> for maximum throughput</p>
                    <p><strong>Automatic API documentation</strong> with Swagger/OpenAPI</p>
                    <p><strong>Robust data validation</strong> with Pydantic schemas</p>
                    <p><strong>Database migrations</strong> with Alembic for smooth deployment</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </TabsContent>
            
            <TabsContent value="devops">
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {devOpsTech.map((tech, i) => (
                      <CarouselItem key={tech.name} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card 
                            ref={el => cardRefs.current[i + 12] = el}
                            className="opacity-0 translate-y-10 transition-all duration-500 ease-out border border-horizonx-200 hover:border-horizonx-400 hover:shadow-lg hover:shadow-horizonx-500/20"
                          >
                            <CardContent className="p-6 flex flex-col items-center">
                              <div className="w-16 h-16 mb-4 rounded-full bg-horizonx-100 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-horizonx-500/20 flex items-center justify-center">
                                  <div className="w-8 h-8 rounded-full bg-horizonx-600 flex items-center justify-center text-white font-bold">
                                    {tech.name.charAt(0)}
                                  </div>
                                </div>
                              </div>
                              <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                              <p className="text-sm text-center text-muted-foreground mb-4">{tech.description}</p>
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div 
                                  className="bg-horizonx-500 h-2.5 rounded-full animate-pulse-slow" 
                                  style={{ width: `${tech.level}%` }}
                                ></div>
                              </div>
                              <div className="mt-2 text-xs text-muted-foreground">Efficiency: {tech.level}%</div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>

              <Collapsible className="w-full">
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm font-medium">View key DevOps features</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                      <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden">
                  <div className="p-4 mt-2 border rounded-md bg-muted/50 text-sm space-y-2">
                    <p><strong>One-command deployment</strong> with Docker Compose</p>
                    <p><strong>Smart API routing</strong> with Kong Gateway</p>
                    <p><strong>Comprehensive monitoring</strong> with ELK stack</p>
                    <p><strong>Scalable infrastructure</strong> with Kubernetes support</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
