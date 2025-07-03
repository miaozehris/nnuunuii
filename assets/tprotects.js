// 禁止右鍵，但放行留言板
document.addEventListener("contextmenu", function (e) {
  if (!e.target.closest('#cusdis_thread')) e.preventDefault();
});

// 禁止選字，但放行留言板
document.addEventListener("selectstart", function (e) {
  if (!e.target.closest('#cusdis_thread')) e.preventDefault();
});

// 禁止複製，但放行留言板
document.addEventListener("copy", function (e) {
  if (!e.target.closest('#cusdis_thread')) {
    e.preventDefault();
    alert("僅供閱覽");
  }
});

// 偵測爬蟲 UA（user-agent）
if (/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
  document.write("Access denied.");
  window.stop?.(); // 停止加載
}
