 'use client';
 
 import { useEffect } from 'react';
 
 const CALENDLY_WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js';
 
 interface CalendlyEmbedProps {
   url: string;
  height?: number | string;
   minWidth?: number;
 }
 
 export function CalendlyEmbed({ url, height = 700, minWidth = 320 }: CalendlyEmbedProps) {
   useEffect(() => {
     // Load Calendly script once.
     const existing = document.querySelector(`script[src="${CALENDLY_WIDGET_SRC}"]`);
     if (existing) return;
 
     const script = document.createElement('script');
     script.src = CALENDLY_WIDGET_SRC;
     script.async = true;
     document.body.appendChild(script);
   }, []);
 
   return (
     <div
       className="calendly-inline-widget w-full"
       data-url={url}
       style={{ minWidth, height }}
     />
   );
 }
