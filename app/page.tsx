'use client';

import ClientBrain3D from '@/components/ClientBrain3D';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Add a consciousness hub quick access button
    const addQuickAccess = () => {
      const quickAccess = document.createElement('div');
      quickAccess.innerHTML = `
        <div style="position: fixed; top: 20px; right: 20px; z-index: 9999;">
          <a href="/hub.html" style="
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 1.5rem;
            background: rgba(20, 20, 40, 0.9);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(100, 255, 218, 0.3);
            border-radius: 50px;
            color: #64ffda;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(100, 255, 218, 0.1);
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 30px rgba(100, 255, 218, 0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(100, 255, 218, 0.1)'">
            🧠 Consciousness Hub
          </a>
        </div>
      `;
      document.body.appendChild(quickAccess);
    };

    const timer = setTimeout(addQuickAccess, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <ClientBrain3D />;
}
