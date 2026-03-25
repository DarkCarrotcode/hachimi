// ==UserScript==
// @name         禁用视频暂停（blur + visibility）
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  覆盖 onblur 和 visibility API，防止后台暂停
// @author       You
// @match        *://labsafe.hit.edu.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 覆盖 window.onblur
    window.onblur = null;

    // 覆盖 Page Visibility API
    Object.defineProperty(document, 'hidden', { get: () => false });
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
})();