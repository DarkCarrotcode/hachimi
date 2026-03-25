# hachimi
哈基米实验安全防暂停
# 实验室安全视频防暂停油猴脚本

## 功能
防止哈基米实验安全视频在切换到其他标签页或最小化窗口时自动暂停。

## 安装
1. 确保已安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展。
2. 点击下方链接安装脚本：
[![安装脚本](https://img.shields.io/badge/安装脚本-点击这里-brightgreen)](https://raw.githubusercontent.com/DarkCarrotcode/hachimi/main/禁用视频暂停（blur+visibility）.user.js)) 安装。
3. 刷新目标网页即可生效。
## 原理
覆盖 `window.onblur` 和 Page Visibility API，使网站无法检测到页面失焦。
