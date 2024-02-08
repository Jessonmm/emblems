document.addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.classList.contains('gallary-item')){
        const src=e.target.getAttribute('src');
        console.log(src);
        document.querySelector('.modal-img').src=src; 
        var myModal=new bootstrap.Modal(document.getElementById('gallary-modal'));
        myModal.show()
    }
})
