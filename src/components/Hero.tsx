import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 neon-text">
          LIVORO
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-neon-blue/80 mb-6 tracking-widest">
          智慧復健 × 認知訓練遊戲系統
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
          結合 AI 感測技術與沉浸式遊戲體驗，為復健之路注入動力與趣味。
          重新定義訓練，讓進步看得見。
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 210, 255, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-bold rounded-full transition-all duration-300 hover:bg-neon-blue hover:text-black"
        >
          立即體驗
        </motion.button>
      </motion.div>
    </section>
  );
}
