# hachimi
哈基米实验安全防暂停
# 实验室安全视频防暂停油猴脚本

## 功能
防止哈基米实验安全视频在切换到其他标签页或最小化窗口时自动暂停。

## 安装
1. 安装 Tampermonkey 或 Violentmonkey 扩展。
2. 点击 [脚本文件](https://raw.githubusercontent.com/你的用户名/仓库名/main/脚本文件名.user.js) 安装。
3. 刷新目标网页即可生效。
## 原理
覆盖 `window.onblur` 和 Page Visibility API，使网站无法检测到页面失焦。
