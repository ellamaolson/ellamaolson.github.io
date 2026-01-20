 'use client';
 
import { useEffect, useRef } from 'react';
 
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}
 
 interface CalendlyEmbedProps {
   url: string;
  height?: number | string;
   minWidth?: number;
 }
 
 export function CalendlyEmbed({ url, height = 700, minWidth = 320 }: CalendlyEmbedProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Prevent duplicates if the component re-renders.
    el.innerHTML = '';
 
    const tryInit = () => {
      if (!mountRef.current) return false;
      const Calendly = window.Calendly;
      if (!Calendly?.initInlineWidget) return false;
      Calendly.initInlineWidget({ url, parentElement: mountRef.current });
      return true;
    };

    if (tryInit()) return;

    // Calendly script is loaded globally at the end of <body>; poll briefly until available.
    const intervalId = window.setInterval(() => {
      if (tryInit()) window.clearInterval(intervalId);
    }, 100);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
    }, 10_000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [url]);
 
   return (
     <div
      ref={mountRef}
      className="w-full"
       style={{ minWidth, height }}
     />
   );
 }
