import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

export function useReveal(config: Reveal.Options = {}) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
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

    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, [config]);

  return {
    deckRef,
    reveal: revealRef.current,
  };
}