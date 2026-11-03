'use strict';
document.getElementById('year').textContent=new Date().getFullYear();
const objects=[...document.querySelectorAll('.reference-object')];
const groups=[...document.querySelectorAll('.object-year-group')];
const form=document.getElementById('reference-filters');
const search=document.getElementById('object-search'),year=document.getElementById('object-year'),type=document.getElementById('object-type');
const normalize=s=>s.toLocaleLowerCase('ru').replaceAll('ё','е');
function objectWord(n){return new Intl.PluralRules('ru').select(n)==='one'?'объект':new Intl.PluralRules('ru').select(n)==='few'?'объекта':'объектов';}
function filterObjects(){const query=normalize(search.value.trim());let count=0;objects.forEach(object=>{object.hidden=!(year.value==='all'||object.dataset.year===year.value)||!(type.value==='all'||object.dataset.type===type.value)||!normalize(object.textContent).includes(query);if(!object.hidden)count++});groups.forEach(group=>{const visible=[...group.querySelectorAll('.reference-object')].filter(o=>!o.hidden).length;group.hidden=!visible;group.querySelector('.object-year-heading>span').textContent=visible+' '+objectWord(visible)});document.getElementById('object-status').textContent='Показано объектов: '+count+' из '+objects.length;document.getElementById('object-empty').hidden=count!==0;}
form.addEventListener('submit',e=>e.preventDefault());form.addEventListener('input',filterObjects);form.addEventListener('change',filterObjects);form.addEventListener('reset',()=>setTimeout(filterObjects,0));
function revealObject(id){const object=document.getElementById(id);if(!object||!object.classList.contains('reference-object'))return;form.reset();search.value='';year.value='all';type.value='all';filterObjects();object.open=true;object.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
document.querySelectorAll('[data-open-object]').forEach(link=>link.addEventListener('click',()=>revealObject('object-'+link.dataset.openObject)));
window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#object-'))revealObject(location.hash.slice(1));});
if(location.hash.startsWith('#object-'))revealObject(location.hash.slice(1));
