import React from 'react';
import { motion } from 'motion/react';
import { GameMode } from '../constants/gameModes';

interface GameCardProps {
  game: GameMode;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group cursor-pointer border-neon-blue/20 hover:border-neon-blue/50 transition-colors duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {game.description}
        </p>
        
        <div className="mt-4 flex items-center text-xs font-bold tracking-widest text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          EXPLORE MODE <span className="ml-2">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
