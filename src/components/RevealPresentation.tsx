'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

interface RevealPresentationProps {
  children: React.ReactNode;
  config?: Reveal.Options;
}

export default function RevealPresentation({ 
  children, 
  config = {} 
}: RevealPresentationProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      // Initialize Reveal.js
      revealRef.current = new Reveal(deckRef.current, {
        hash: true,
        controls: true,
        progress: true,
        center: true,
        transition: 'slide',
        ...config,
      });

      revealRef.current.initialize();
    }

    // Cleanup on unmount
    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, [config]);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {children}
      </div>
    </div>
  );
}