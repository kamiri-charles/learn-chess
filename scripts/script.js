document.addEventListener('DOMContentLoaded', () => {
    
    /* Navbar logic */
    const glass = document.getElementById('glass');
    const nav = document.getElementById('nav');
    const menu = document.getElementById('menu');
    
    
    menu.addEventListener('click', () => {
        
        if (nav.classList.contains('hidden')) {
            // If the nav is not visible, make it visible
            nav.classList.remove('hidden');
            menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            // If the nav is visible, make it not visible
            nav.classList.add('hidden');
            menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
    
    
    glass.addEventListener('click', () => {
        nav.classList.add('hidden');
        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
    
    
    /* Advanced moves page logic */
    const move_icons = document.getElementsByClassName('move_icon');

    for (let i = 0; i < move_icons.length; i++) {
        move_icons[i].addEventListener('click', () => {
            /* If parent elment is inactive, then activate */
            if (move_icons[i].parentElement.parentElement.classList.contains('active')) {
                move_icons[i].parentElement.parentElement.classList.remove('active');
                move_icons[i].innerHTML = '<i class="fas fa-angle-down"></i>';
            } else {
                move_icons[i].parentElement.parentElement.classList.add('active');
                move_icons[i].innerHTML = '<i class="fas fa-xmark"></i>';

                /* If parent element is active, then deactivate all other elements */
                for (let j = 0; j < move_icons.length; j++) {
                    if (j != i) {
                        move_icons[j].parentElement.parentElement.classList.remove('active');
                        move_icons[j].innerHTML = '<i class="fas fa-angle-down"></i>';
                    }
                }
            }

        })
    }
})