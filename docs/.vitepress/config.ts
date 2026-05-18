import { defineConfig } from 'vitepress'

export default defineConfig({
  // 關鍵修正：解決 GitHub Pages 樣式走樣與 404 找不到 CSS/JS 的問題
  base: '/my-docs/',

  title: "我的文件庫",
  description: "多文章範例",
  themeConfig: {
    // 1. 頂部導航列 (選填)
    nav: [
      { text: '首頁', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    // 2. 側邊欄：這就是「多文章」的選單結構
    sidebar: [
      {
        text: '入門指南',
        items: [
          { text: '關於本站', link: '/intro' },
          { text: '快速上手', link: '/getting-started' }
        ]
      }
    ],

    // 3. 社交連結
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
