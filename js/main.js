(function () {
    function increaseThePhoto() {
        if (event.target.tagName === 'IMG') {
            console.log(event.target.className,event.target.tagName )
            if (document.querySelectorAll('.increased').length===0 ){
            event.target.nextElementSibling.classList.toggle('increased');
            event.target.nextElementSibling.classList.toggle('is-hidden');
            document.body.classList.toggle('fixed-body');
            }
            if (event.target.classList.contains('increased')){
                event.target.classList.toggle('increased');
                event.target.classList.toggle('is-hidden');
                document.body.classList.toggle('fixed-body');
            }
        }
    }
    let photoList;
    photoList = document.querySelector('.screenshots-list');
    photoList.addEventListener('click', increaseThePhoto)
})(); 