const studentsFormDiv = document.getElementById('studentsForm')
const lecturesFormDiv = document.getElementById('lecturesForm')
const othersFormDiv = document.getElementById('othersForm')
const btnStudents = document.getElementById('btnStudents')
const btnLectures = document.getElementById('btnLectures')
const btnOthers = document.getElementById('btnOthers')


function activeStudent(){
    btnStudents.classList.add("activeBtn")
    btnLectures.classList.remove("activeBtn")
    btnOthers.classList.remove("activeBtn")
    studentsFormDiv.style.display = 'block'
    studentsFormDiv.classList.add("showForm")
    lecturesFormDiv.style.display = 'none'
    othersFormDiv.style.display = 'none'
}

function activeLectures(){
    btnStudents.classList.remove("activeBtn")
    btnOthers.classList.remove("activeBtn")
    lecturesFormDiv.classList.remove('showForm')
    lecturesFormDiv.classList.remove('showForm')
    lecturesFormDiv.classList.remove('showForm')
    studentsFormDiv.style.display = 'none'
    othersFormDiv.style.display = 'none'
    lecturesFormDiv.style.display = 'block'
    lecturesFormDiv.classList.add('showForm')
    btnLectures.classList.add("activeBtn")

}

function activeOthers(){
    btnStudents.classList.remove("activeBtn")
    btnLectures.classList.remove("activeBtn")
    lecturesFormDiv.classList.remove('showForm')
    lecturesFormDiv.classList.remove('showForm')
    lecturesFormDiv.classList.remove('showForm')
    studentsFormDiv.style.display = 'none'
    othersFormDiv.style.display = 'block'
    lecturesFormDiv.style.display = 'none'
    othersFormDiv.classList.add('showForm')
    btnOthers.classList.add("activeBtn")

}



// function getTx(){
//     var style = window.getComputedStyle(handBurgerICon)
//     var mat = new WebKitCSSMatrix(style.transform)
//     return mat.m41;
// }


function toggleSideMenu (){
    const sideBtnDiv = document.getElementsByClassName('sideBtn_container')[0];
    const handBurgerICon = document.getElementsByClassName('icon_menu')[0];
    //handBurgerICon.style.transform = 'translateX(0)';
    
}


