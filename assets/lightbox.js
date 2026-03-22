function openLightbox(imgEl) {
  var lb  = document.getElementById('lightbox');
  var lbi = document.getElementById('lightbox-img');
  lbi.src = imgEl.src;
  lbi.alt = imgEl.alt || '图片预览';
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e.target === document.getElementById('lightbox')) {
    closeLightboxDirect();
  }
}

function closeLightboxDirect() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightboxDirect();
});
