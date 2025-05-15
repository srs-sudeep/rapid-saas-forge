
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Zap, Database, Server, GitBranch, Code, Lock } from 'lucide-react';

const features = [
  {
    title: 'Full-Stack Integration',
    description: 'Seamlessly connect React frontend with FastAPI backend using pre-configured TanStack Query patterns.',
    icon: <Code className="h-10 w-10 text-horizonx-600" />,
  },
  {
    title: 'Microservice Ready',
    description: 'Built-in support for microservice architecture with Kong API Gateway and Docker containerization.',
    icon: <Server className="h-10 w-10 text-horizonx-600" />,
  },
  {
    title: 'High Performance',
    description: 'Lightning-fast development and runtime performance with Vite, UV, Ruff, and optimized SQLAlchemy.',
    icon: <Zap className="h-10 w-10 text-horizonx-600" />,
  },
  {
    title: 'Scalable State Management',
    description: 'Effortlessly manage application state with Zustand stores and React Query for server state.',
    icon: <GitBranch className="h-10 w-10 text-horizonx-600" />,
  },
  {
    title: 'Enterprise-Grade Database',
    description: 'Production-ready PostgreSQL integration with SQLAlchemy ORM for robust data management.',
    icon: <Database className="h-10 w-10 text-horizonx-600" />,
  },
  {
    title: 'Secure by Default',
    description: 'Implements best security practices with authentication, authorization, and data protection built in.',
    icon: <Lock className="h-10 w-10 text-horizonx-600" />,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Build Modern Applications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            HorizonX combines the best tools and practices from both frontend and backend development 
            to provide a complete solution for building robust applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-3 mb-4 bg-primary/10 self-start rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
