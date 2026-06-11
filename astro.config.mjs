// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ★ここから追加
  site: 'https://wan-dog.github.io', // あなたのGitHubのベースURL
  base: '/homepage',                 // 公開したいURLの末尾（リポジトリ名）
  // ★ここまで追加
});

