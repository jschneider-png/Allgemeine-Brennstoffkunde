document.addEventListener('click',e=>{
  const b=e.target.closest('[data-check]'); if(!b)return;
  const q=b.closest('.quiz-question'); const right=q.dataset.answer;
  const chosen=q.querySelector('input:checked'); const f=q.querySelector('.quiz-feedback');
  if(!chosen){f.textContent='Bitte zuerst eine Antwort auswählen.';f.className='quiz-feedback wrong';return}
  if(chosen.value===right){f.textContent='Richtig.';f.className='quiz-feedback correct'}
  else{f.textContent='Noch nicht. Prüfe Fachtext oder Merksatz und versuche es erneut.';f.className='quiz-feedback wrong'}
});
