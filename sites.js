'use strict';
document.getElementById('year').textContent=new Date().getFullYear();
const cards=[...document.querySelectorAll('.site-card')];
const buttons=[...document.querySelectorAll('[data-filter]')];
buttons.forEach(button=>button.addEventListener('click',()=>{const filter=button.dataset.filter;buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));let count=0;cards.forEach(card=>{card.hidden=filter!=='all'&&card.dataset.kind!==filter;if(!card.hidden)count++});document.getElementById('filter-status').textContent='Показано сайтов: '+count+' из '+cards.length;}));
