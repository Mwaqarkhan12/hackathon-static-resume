let skills = document.querySelector('.skills') as HTMLElement

let but = document.getElementById('but') as HTMLButtonElement


but.addEventListener('click',()=>{
if(skills.style.display === 'block'){
skills.style.display = 'none'
}else{
    skills.style.display = 'block'
}

});