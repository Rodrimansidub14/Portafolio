"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ScrollNav({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Implementar lógica para cambiar de página
        switch (router.pathname) {
          case '/':
            router.push('/about');
            break;
          case '/about':
            router.push('/projects');
            break;
          case '/projects':
            router.push('/');
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router]);

  return <>{children}</>;
}


