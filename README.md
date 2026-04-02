# LIVORO 智慧復健與認知訓練遊戲系統

這是一個專為 LIVORO 遊戲系統設計的高質感、科技感沉浸式發布介紹頁（Landing Page）。

## 專案特點
- **遊戲主選單視覺**：採用暗色系、科技感、玻璃擬態與霓虹發光效果。
- **全螢幕背景影片**：支援自動播放、循環播放，並具備備援背景圖機制。
- **響應式設計 (RWD)**：完美適配手機、平板、16:9 螢幕及 21:9 超寬螢幕。
- **流暢動畫**：使用 Framer Motion 實現進場淡入、Stagger 效果與互動回饋。

## 本機開發環境啟動
1. 安裝依賴：
   ```bash
   npm install
   ```
2. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

## 資源替換說明
- **背景影片**：請將影片檔案放入 `public/assets/video/` 目錄，並在 `src/components/BackgroundVideo.tsx` 中修改路徑。建議使用 5 分鐘左右的暗色調短片。
- **遊戲圖片**：請將圖片放入 `public/assets/images/`，並在 `src/constants/gameModes.ts` 中更新對應的路徑。
- **備援背景圖**：若影片載入失敗，系統會自動顯示 `public/assets/images/fallback-bg.jpg`。

## GitHub 上傳與部署流程

### 1. 初始化 Git 與上傳 GitHub
1. 初始化 Git：
   ```bash
   git init
   ```
2. 建立第一個 commit：
   ```bash
   git add .
   git commit -m "Initial commit: LIVORO Landing Page"
   ```
3. 連接遠端 GitHub repository：
   ```bash
   git branch -M main
   git remote add origin <您的_GITHUB_REPO_URL>
   ```
4. 推送到 GitHub：
   ```bash
   git push -u origin main
   ```

### 2. 版本更新方式
```bash
git add .
git commit -m "更新內容說明"
git push
```

### 3. 部署到 Firebase Hosting
1. 安裝 Firebase CLI：
   ```bash
   npm install -g firebase-tools
   ```
2. 登入 Firebase：
   ```bash
   firebase login
   ```
3. 初始化 Hosting：
   ```bash
   firebase init hosting
   ```
   - 選擇您的專案。
   - Public directory 請輸入 `dist`。
   - Configure as a single-page app? 選擇 `Yes`。
   - Set up automatic builds and deploys with GitHub? 建議選擇 `Yes` 以實現自動部署。
4. 部署：
   ```bash
   npm run build
   firebase deploy
   ```

### 5. GitHub Pages 注意事項
如果您的 GitHub Pages 網址包含子路徑（例如 `https://<username>.github.io/<repo-name>/`），請確保 `vite.config.ts` 中的 `base` 設定正確。
目前專案已設定為 `base: './'`（相對路徑），這在大多數情況下都能正常運作。
如果頁面依然顯示空白，請將 `base` 修改為您的儲存庫名稱，例如：`base: '/Livoro_Pages/'`。

---
*LIVORO - 重新定義智慧復健體驗*
