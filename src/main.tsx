
import { createRoot } from 'react-dom/client';
import { LazyMotion, domAnimation } from 'framer-motion';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <LazyMotion features={domAnimation}>
    <App />
  </LazyMotion>
);
