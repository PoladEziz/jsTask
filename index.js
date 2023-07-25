// 9 a qeder oxuyaq slayti
// mehsul kartalimiza yaxinlasdiranda arxa fon goy reng olsun
// btn ye basanda mehsullarda yazilsin ki mehsul bitibdir


let h1=document.querySelectorAll('.mehsullar')
let btn=document.querySelector('.mehsul_btn')
btn.addEventListener('click',change)
function change() {
    console.log('sadsad');
    h1.innerText=('mehsul bitib')

}


