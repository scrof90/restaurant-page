const e={createElement:(e,t,...n)=>{const c=document.createElement(e);return t&&(c.innerHTML=t),0!==n.length&&[...n].forEach((e=>c.classList.add(e))),c},appendChildren:(e,...t)=>{[...t].forEach((t=>e.appendChild(t)))}},t=[{href:'https://www.artstation.com/artwork/aa6R8',text:'Background art by Renaud ROCHE'},{href:'https://www.artstation.com/artwork/nlKG6',text:'Additional art by J.Otto Szatmari'}];function n(e,t,n){const c=document.createElement('div');return c.classList.add('tab',t),e&&c.classList.add('active'),c.textContent=n,c}function c(e){const t=document.createElement('li'),n=function(e,t){const n=document.createElement('a');return n.classList.add('attribution'),n.href=e,n.textContent=t,n}(e.href,e.text);return t.appendChild(n),t}function a(){const t=document.querySelector('.js-content');t.innerHTML='';const n=function(){const e=document.createElement('img');return e.classList.add('img-home'),e.src='img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg',e.alt='Bar - Space Station by J.Otto Szatmari',e}(),c=o('h2','Welcome to Saul Dyson\'s Bar!'),a=o('p','With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy.'),r=o('p','We are always open'),s=o('p','All species are welcome<y>*</y>'),i=o('p','<y>*</y>the Ur-Quan will be forcefully escorted from the premises','bottom-text');e.appendChildren(t,n,c,a,r,s,i)}function o(e,t,n){const c=document.createElement(e);return c.innerHTML=t,n&&c.classList.add(n),c}const r=[{name:'Improbable Burger',imgSrc:'img/menu-items/improbable-burger.jpg',desc:'Made by careful manipulation of probability waves we made the most perfect burger in Sol, conjured straight from the vacuum of space.'}];function s(){const t=document.querySelector('.js-content');t.innerHTML='',r.forEach((n=>{const c=function(t,n,c){const a=e.createElement('div',null,'menu-item','blue-border'),o=e.createElement('h2',t),r=e.createElement('img',null,'img-home');r.src=n;const s=e.createElement('p',c);return e.appendChildren(a,o,r,s),a}(n.name,n.imgSrc,n.desc);t.appendChild(c)}))}!function(){const a=document.querySelector('body'),o=function(){const e=document.createElement('header'),t=function(){const e=document.createElement('h1');return e.textContent='Saul Dyson\'s Bar',e}();return e.appendChild(t),e}(),r=function(){const t=document.createElement('nav'),c=n(!0,'js-home','Home'),a=n(!1,'js-menu','Menu'),o=n(!1,'js-contacts','Contacts');return e.appendChildren(t,c,a,o),t}(),s=function(){const e=document.createElement('main'),t=function(){const e=document.createElement('div');return e.classList.add('content','blue-border','js-content'),e}();return e.appendChild(t),e}(),i=function(){const n=document.createElement('footer'),a=function(){const e=document.createElement('ul');return t.map(c).forEach((t=>e.appendChild(t))),e}(),o=function(){const e=document.createElement('a');e.href='https://github.com/scrof90';const t=function(){const e=document.createElement('img');return e.classList.add('my-github'),e.src='https://avatars.githubusercontent.com/u/46364597?v=4',e.alt='@scrof90',e}();return e.appendChild(t),e}();return e.appendChildren(n,a,o),n}();e.appendChildren(a,o,r,s,i)}(),a(),function(){const e=document.querySelector('.js-home'),t=document.querySelector('.js-menu'),n=document.querySelector('.js-contacts');e.addEventListener('click',(e=>{e.target.classList.add('active'),t.classList.remove('active'),n.classList.remove('active'),a()})),t.addEventListener('click',(t=>{t.target.classList.add('active'),e.classList.remove('active'),n.classList.remove('active'),s()})),n.addEventListener('click',(n=>{n.target.classList.add('active'),e.classList.remove('active'),t.classList.remove('active'),function(){const e=document.querySelector('.js-content');e.innerHTML='',e.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat vel cum temporibus nesciunt.Veniam qui numquam nulla iure consequuntur corporis iusto.Deleniti alias ad ipsum quibusdam illo ipsam a cupiditate.'}()}))}();
