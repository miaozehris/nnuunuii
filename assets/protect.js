// 禁止右鍵
document.addEventListener("contextmenu", function (e) {
});

// 禁止選字
document.addEventListener("selectstart", function (e) {
});

// 禁止複製
document.addEventListener("copy", function (e) {
    alert("僅供閱覽");
});

// 偵測爬蟲 UA（user-agent）
if (/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
  document.write("Access denied.");
  window.stop?.(); // 停止加載
}
