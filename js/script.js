// Footer copyright year.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Copy-to-clipboard button for each bibtex snippet.
// The .snippet .btn rules in css/style.css style these; clipboard.js does the copying.
document.querySelectorAll('.snippet').forEach((snippet) => {
  const code = snippet.querySelector('code');
  if (!code) return;

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'btn';
  btn.setAttribute('aria-label', 'Copy bibtex to clipboard');
  btn.innerHTML = '<i class="bi bi-clipboard"></i>';
  snippet.appendChild(btn);

  btn.addEventListener('click', () => {
    btn.innerHTML = '<i class="bi bi-check-lg"></i>';
    setTimeout(() => {
      btn.innerHTML = '<i class="bi bi-clipboard"></i>';
    }, 1200);
  });
});

new ClipboardJS('.snippet .btn', {
  text: (trigger) => trigger.closest('.snippet').querySelector('code').textContent,
});
