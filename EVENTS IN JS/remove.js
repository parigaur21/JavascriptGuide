//removeChild

document.querySelector('#btn').addEventListener('click',function(e){
console.log(e.target.tagName);
if(e.target.tagName === 'IMG'){
    console.log(e.target.id);
    let removeIt = e.target.parentNode
    removeIt.remove()
}
})
