
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const frontendTech = [
  { name: 'React', description: 'UI component library' },
  { name: 'Vite', description: 'Fast build tool' },
  { name: 'TanStack Query', description: 'Data fetching & caching' },
  { name: 'Zustand', description: 'State management' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS' },
  { name: 'shadcn/ui', description: 'UI component system' },
];

const backendTech = [
  { name: 'FastAPI', description: 'Modern Python framework' },
  { name: 'SQLAlchemy', description: 'ORM for databases' },
  { name: 'PostgreSQL', description: 'Relational database' },
  { name: 'UV', description: 'Fast Python package installer' },
  { name: 'Ruff', description: 'Fast Python linter' },
  { name: 'Swagger', description: 'API documentation' },
];

const devOpsTech = [
  { name: 'Docker', description: 'Containerization' },
  { name: 'Kong', description: 'API Gateway' },
  { name: 'Redis', description: 'In-memory data store' },
  { name: 'ELK Stack', description: 'Logging & monitoring' },
  { name: 'GitHub Actions', description: 'CI/CD pipelines' },
  { name: 'Kubernetes', description: 'Container orchestration' },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Tech Stack</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            HorizonX integrates best-in-class libraries and tools to ensure your application 
            is robust, maintainable, and scalable.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
            
            <TabsContent value="frontend">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {frontendTech.map((tech) => (
                  <Card key={tech.name} className="border border-horizonx-200 hover:border-horizonx-400 transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="backend">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {backendTech.map((tech) => (
                  <Card key={tech.name} className="border border-horizonx-200 hover:border-horizonx-400 transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="devops">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {devOpsTech.map((tech) => (
                  <Card key={tech.name} className="border border-horizonx-200 hover:border-horizonx-400 transition-colors">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
