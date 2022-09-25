//slick slider
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        arrows: false,
       
    });
  });

const $1 = document.querySelector.bind(document);
const $$2 = document.querySelectorAll.bind(document);
const viewGalleryBtn = $1('.js-submit-gallery a')
const navList = $$2('.nav-list li')
const contents = $$2('.content>div')
    navList.forEach(navItem => {
       
        navItem.onclick = function(){
            removeContent();
        //thêm active và xóa active trên navlist
            $1('a.ac').classList.remove('ac')
            $1('div.ac').classList.remove('ac')
            navItem.querySelector('a').classList.add('ac')
            navItem.querySelector('div').classList.add('ac')
        //thêm active content mỗi khi click vào navItem tương ứng   
            $1(`.${navItem.innerText.toLowerCase()}`).classList.add('active')  
            if(navItem.innerText ==='Gallery'){
                
            }}
    });
    //hàm xóa active content
    function removeContent() {contents.forEach(contentItem=>{
    contentItem.classList.remove('active');  
    })};
    //hàm click vào nút View Gallery
    
    viewGalleryBtn.onclick = function(){
        removeContent();
        console.log(viewGalleryBtn)
        $1('.gallery').classList.add('active')  
    } 
//loader
const preloader = $1('.preloader')
window.addEventListener('load',vanish)
function vanish(){
    preloader.classList.add('disppear')
}