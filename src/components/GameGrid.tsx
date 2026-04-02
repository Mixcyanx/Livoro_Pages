import GameCard from './GameCard';
import { GAME_MODES } from '../constants/gameModes';

export default function GameGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAME_MODES.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  );
}
