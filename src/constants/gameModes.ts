export interface GameMode {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const GAME_MODES: GameMode[] = [
  {
    id: 1,
    title: "知識問答",
    description: "挑戰大腦極限，結合復健動作與知識測驗，讓學習更有趣。",
    image: "https://picsum.photos/seed/quiz/800/600"
  },
  {
    id: 2,
    title: "電繪手指",
    description: "精細動作訓練，透過螢幕繪圖提升手指靈活度與手眼協調。",
    image: "https://picsum.photos/seed/drawing/800/600"
  },
  {
    id: 3,
    title: "超市購物",
    description: "模擬真實生活場景，訓練記憶力、計畫能力與日常執行功能。",
    image: "https://picsum.photos/seed/shopping/800/600"
  },
  {
    id: 4,
    title: "氣球地雷",
    description: "快速反應訓練，在閃避障礙的同時精準擊破目標，提升專注力。",
    image: "https://picsum.photos/seed/balloon/800/600"
  },
  {
    id: 5,
    title: "龜兔賽跑",
    description: "下肢力量與節奏訓練，透過步伐控制帶領角色衝向終點。",
    image: "https://picsum.photos/seed/race/800/600"
  },
  {
    id: 6,
    title: "姿勢對決",
    description: "全身協調性挑戰，精準模仿指定姿勢，強化核心與平衡感。",
    image: "https://picsum.photos/seed/pose/800/600"
  }
];
