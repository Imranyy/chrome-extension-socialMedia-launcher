
//input logics
const formOne =document.querySelector('#one')
formOne.addEventListener('submit',(e)=>{
  e.preventDefault()
  const media=formOne.media.value
  const username=formOne.username.value
  localStorage.setItem('username',username);
  localStorage.setItem('media',media);
        window.open(`https://${localStorage.getItem('media')}.com/${localStorage.getItem('username')}`, '_blank');
        formOne.reset();
         });