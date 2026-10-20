'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-phone').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('+79086622802');
    status.textContent = 'Номер скопирован. До связи в MAX!';
  } catch {
    status.textContent = 'Скопируй номер вручную: +7 908 66 22 802';
  }
});
