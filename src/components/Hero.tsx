
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container relative z-10">
        <div className="blur-container">
          <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight gradient-text animate-fade-in">
              Supercharge Your React & FastAPI Development
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              HorizonX is a high-performance, full-stack boilerplate that combines React with FastAPI, 
              enabling rapid development of scalable microservice applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <Button size="lg" className="gap-2 hover-scale">
                Get Started <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover-scale">
                <Github size={18} /> Star on GitHub
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex -space-x-2 mr-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-horizonx-${200 + (i * 100)}`}></div>
                ))}
              </div>
              <span>
                <strong className="font-medium text-foreground">2,500+</strong> developers already using HorizonX
              </span>
            </div>
          </div>
        </div>
        
        {/* Stacked Terminals - 3D Effect */}
        <div className="mx-auto max-w-4xl mt-12 relative perspective-1000 animate-fade-in" style={{animationDelay: '0.5s'}}>
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={cn(
                "absolute w-full bg-black/80 backdrop-blur-md rounded-xl border shadow-lg overflow-hidden",
                i === 0 ? "z-30 opacity-100" : 
                i === 1 ? "z-20 opacity-90 translate-y-2 scale-[0.98]" : 
                "z-10 opacity-80 translate-y-4 scale-[0.96]"
              )}
              style={{
                borderColor: i === 0 ? 'rgba(139, 92, 246, 0.3)' : 
                            i === 1 ? 'rgba(139, 92, 246, 0.2)' : 
                            'rgba(139, 92, 246, 0.1)',
                boxShadow: `0 ${4 + i * 2}px ${10 + i * 5}px rgba(109, 40, 217, 0.${3 - i})`
              }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white/70 text-sm font-mono">{i === 0 ? "example.tsx" : i === 1 ? "api.py" : "docker-compose.yml"}</span>
              </div>
              {i === 0 && (
                <pre className="p-4 text-sm overflow-x-auto text-green-300 font-mono">
                  <code>{`// HorizonX makes it simple to integrate React with FastAPI
import { useQuery } from '@tanstack/react-query';
import { create } from 'zustand';

// Define your store with Zustand
const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

// Use TanStack Query for data fetching
export const UserProfile = () => {
  const { user, setUser } = useStore();
  
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const res = await fetch('/api/user');
      return res.json();
    },
  });

  return (
    <div className="p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold">Welcome, {data?.name}</h2>
      {/* Your component content */}
    </div>
  );
}`}</code>
                </pre>
              )}
              {i === 1 && (
                <pre className="p-4 text-sm overflow-x-auto text-blue-300 font-mono">
                  <code>{`# FastAPI backend with SQLAlchemy and PostgreSQL
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from .database import get_db
from .models import User
from .schemas import UserCreate, UserResponse

app = FastAPI()

@app.post("/api/users/", response_model=UserResponse)
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = User(name=user.name, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@app.get("/api/users/", response_model=List[UserResponse])
async def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = db.query(User).offset(skip).limit(limit).all()
    return users`}</code>
                </pre>
              )}
              {i === 2 && (
                <pre className="p-4 text-sm overflow-x-auto text-yellow-200 font-mono">
                  <code>{`# Docker Compose configuration for HorizonX
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app

  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/horizonx
    depends_on:
      - db

  db:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=horizonx
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

  kong:
    image: kong:latest
    environment:
      - KONG_DATABASE=off
      - KONG_DECLARATIVE_CONFIG=/etc/kong/kong.yml
    volumes:
      - ./kong:/etc/kong
    ports:
      - "8001:8001"
      - "8000:8000"

volumes:
  postgres_data:`}</code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-horizonx-400/20 via-background to-background"></div>
    </section>
  );
};
