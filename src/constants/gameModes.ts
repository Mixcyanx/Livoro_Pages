export interface GameMode {
  id: number;
  title: string;
  description: string;
  video: string;
}

export const GAME_MODES: GameMode[] = [
  {
    id: 1,
    title: "知識問答",
    description: "挑戰大腦極限，結合復健動作與知識測驗，讓學習更有趣。",
    video: "https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/TF.mp4"
  },
  {
    id: 2,
    title: "電匯手指",
    description: "精細動作訓練，透過螢幕繪圖提升手指靈活度與手眼協調。",
    video: "https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/FD.mp4"
  },
  {
    id: 3,
    title: "超市購物",
    description: "模擬真實生活場景，訓練記憶力、計畫能力與日常執行功能。",
    video: "https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/SM.mp4"
  },
  {
    id: 4,
    title: "氣球地雷",
    description: "快速反應訓練，在閃避障礙的同時精準擊破目標，提升專注力。",
    video: "https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/BM.mp4"
  },
  {
    id: 5,
    title: "龜兔賽跑",
    description: "下肢力量與節奏訓練，透過步伐控制帶領角色衝向終點。",
    video: "https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/RC.mp4"
  },
  {
    id: 6,
    title: "姿勢對決",
    description: "全身協調性挑戰，精準模仿指定姿勢，強化核心與平衡感。",
    video: "https://github.com/Mixcyanx/Livoro_Pages/raw/main/assets/video/PS.mp4"
  }
];
