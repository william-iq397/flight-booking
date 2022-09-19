const menuIcon = document.getElementById('menu_icon');
const unOrderedList = document.getElementById('unorderlist');
const logo = document.querySelector('#logo');
const listItems = document.querySelectorAll('.nav_bar li');





menuIcon.addEventListener('click',() => {
    if(unOrderedList.classList.contains('hide_nav')) {
        unOrderedList.style.display = 'flex';
        unOrderedList.style.flexDirection = 'column'
        unOrderedList.style.gap = '1rem'
        unOrderedList.style.marginLeft = '1em'
        unOrderedList.removeAttribute('class', 'hide_nav');
        unOrderedList.style.textAlign = 'left';
        logo.style.display = 'none';
    } else {
        unOrderedList.style.display = 'none';
        unOrderedList.setAttribute('class', 'hide_nav');
        logo.style.display = 'block';
    }
});


