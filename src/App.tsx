/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BackgroundVideo from './components/BackgroundVideo';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';

export default function App() {
  return (
    <main className="min-h-screen relative">
      <BackgroundVideo />
      
      <div className="relative z-20">
        <Hero />
        <GameGrid />
        
        <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/10 mx-4">
          <p>© 2026 LIVORO 智慧復健與認知訓練遊戲系統. All Rights Reserved.</p>
        </footer>
      </div>
    </main>
  );
}
