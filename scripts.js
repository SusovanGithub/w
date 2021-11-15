function projectDivViewer(choice, el) {
    var div1 = document.getElementById('projects_publication');
    var div2 = document.getElementById('projects_webapp');
    var div3 = document.getElementById('projects_personal');

    var pn_1 = document.getElementById('pn-1');
    var pn_2 = document.getElementById('pn-2');
    var pn_3 = document.getElementById('pn-3');

    pn_1.classList.remove('active');
    pn_2.classList.remove('active');
    pn_3.classList.remove('active');
    
    el.classList.toggle('active');

    if (choice == 1) {
        div1.style.display='block';
        div2.style.display='none';
        div3.style.display='none';
        
    } else if (choice == 2) {
        div2.style.display='block';
        div1.style.display='none';
        div3.style.display='none';        
    } else {
        div3.style.display='block';
        div1.style.display='none';
        div2.style.display='none';
    }
}

function navActiveToggler(el) {
    var nav_1 = document.getElementById('nav-1');
    var nav_2 = document.getElementById('nav-2');
    var nav_3 = document.getElementById('nav-3');
    var nav_4 = document.getElementById('nav-4');
    var nav_5 = document.getElementById('nav-5');
    var nav_6 = document.getElementById('nav-6');

    nav_1.classList.remove('active');
    nav_2.classList.remove('active');
    nav_3.classList.remove('active');
    nav_4.classList.remove('active');
    nav_5.classList.remove('active');
    nav_6.classList.remove('active');

    el.classList.toggle('active');
}

function onTop() {
    var nav_1 = document.getElementById('nav-1');
    var nav_2 = document.getElementById('nav-2');
    var nav_3 = document.getElementById('nav-3');
    var nav_4 = document.getElementById('nav-4');
    var nav_5 = document.getElementById('nav-5');
    var nav_6 = document.getElementById('nav-6');

    nav_1.classList.remove('active');
    nav_2.classList.remove('active');
    nav_3.classList.remove('active');
    nav_4.classList.remove('active');
    nav_5.classList.remove('active');
    nav_6.classList.remove('active');

    nav_1.classList.toggle('active');
}