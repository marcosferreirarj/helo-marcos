/* Menu mobile */
const ham=document.querySelector('.hamburger');
if(ham){
  ham.addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('open');
  });
}

/* Copiar endereço */
function copyAddress(){
  const text='R. Sidauva V. Maia, 82-122 - Jardim D Aldeia, Itaocara - RJ, 28570-000';
  navigator.clipboard?.writeText(text).then(()=>alert('Endereço copiado!')).catch(()=>prompt('Copie o endereço:',text));
}

/* RSVP (comentado no HTML) */
function submitRSVP(e){
  e.preventDefault();
  const nome=document.getElementById('nome').value.trim();
  alert('Obrigadx, '+nome+'! RSVP registrado.');
  e.target.reset();
}
