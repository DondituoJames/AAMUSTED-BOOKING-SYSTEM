const studentFormDiv = document.getElementById('stform');
const lectureFormDiv = document.getElementById('lecform');
const otherFormDiv = document.getElementById('otherform');

const btnStudentDiv = document.getElementById('stlogin')
const btnLecturesDiv = document.getElementById('leform')
const btnOthersDiv = document.getElementById('oform');

const handburger_menu = document.getElementById('hand_menu');
const handburger_menuDiv = document.getElementsByClassName('btnChangeForm')[0];
function stformLoaded(){
    lectureFormDiv.classList.add('hide')
    otherFormDiv.classList.add('hide')
    studentFormDiv.classList.remove('hide')
    studentFormDiv.classList.add('showDiv')
    btnStudentDiv.classList.add('activeBtn1')
    btnLecturesDiv.classList.remove('activeBtn2')
    btnOthersDiv.classList.remove('activeBtn3')
}

function lectureformLoaded(){
    studentFormDiv.classList.add('hide')
    otherFormDiv.classList.add('hide')
    lectureFormDiv.classList.remove('hide')
    lectureFormDiv.classList.add('showDiv')
    btnStudentDiv.classList.remove('activeBtn1')
    btnLecturesDiv.classList.add('activeBtn2')
    btnOthersDiv.classList.remove('activeBtn3')
}
function otherformLoaded(){
    studentFormDiv.classList.add('hide')
    lectureFormDiv.classList.add('hide')
    otherFormDiv.classList.remove('hide')
    otherFormDiv.classList.add('showDiv')
    btnStudentDiv.classList.remove('activeBtn1')
    btnLecturesDiv.classList.remove('activeBtn2')
    btnOthersDiv.classList.add('activeBtn3')
   
}

const counsellorDiv = document.getElementById('counsellor_type')
function fetchCounsellorList(){
    if(counsellorDiv.value === 'friend'){
        document.querySelector('.user_counsellor_choice').classList.remove('hide')
        document.querySelector('.user_counsellor_choice').classList.add('showDiv')
        document.querySelector('.user_counsellor_choice').classList.remove('hideDive')
    }else{
        document.querySelector('.user_counsellor_choice').classList.add('hide')
        document.querySelector('.user_counsellor_choice').classList.add('hideDive')
    }
}



