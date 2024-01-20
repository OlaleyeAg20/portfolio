let menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('ulist')
menuBtn.addEventListener('click', function(){
 menu.style.display = 'block'
})
function close(){
 menu.style.display = 'none'
}
let closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener('click', function(){
 close()
})
 
