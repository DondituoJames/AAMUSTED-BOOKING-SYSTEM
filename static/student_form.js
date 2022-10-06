const coInput = document.getElementById('college');
const engineering = document.getElementById('departmentcoe');
const science = document.getElementById('departmentcos');
const built = document.getElementById('departmentcabe');
const reDiv = document.querySelector('.afterDep');
function fetchDepartment(){
    if(coInput.value === 'cos'){
        engineering.classList.add('hide');
        engineering.classList.add('hideDiv')
        built.classList.add('hide');
        built.classList.add('hideDiv')
        science.classList.remove('hide');
        science.classList.add('showDiv')
    }else if(coInput.value === 'coe'){
        science.classList.add('hide');
        science.classList.add('hideDiv');
        built.classList.add('hide');
        built.classList.add('hideDiv');
        engineering.classList.remove('hide');
        engineering.classList.add('showDiv')
    }else if(coInput.value === 'cabe'){
        science.classList.add('hide');
        science.classList.add('hideDiv');
        engineering.classList.add('hide');
        engineering.classList.add('hideDiv');
        built.classList.remove('hide');
        built.classList.add('showDiv')
    }

    if(coInput.value !== ''){
        reDiv.classList.remove('hide')
    }else{
        reDiv.classList.add('hide')
    }
}


//populate specific problem area
const problemCat = document.querySelector('#problemCat');
const academicList = document.querySelector('#academic');
const businessList = document.querySelector('#business');
const healthList = document.querySelector('#health');
const politicsList = document.querySelector('#politics');
const socialList = document.querySelector('#social');
const otherList = document.querySelector('#other');

function fetchProlemList(){
    if(problemCat.value === 'academic'){
        businessList.classList.add('hideDiv');
        businessList.classList.add('hide');
        healthList.classList.add('hideDiv');
        healthList.classList.add('hide');
        politicsList.classList.add('hideDiv');
        politicsList.classList.add('hide');
        socialList.classList.add('hideDiv');
        socialList.classList.add('hide');
        otherList.classList.add('hideDiv');
        otherList.classList.add('hide');
        academicList.classList.remove('hide');
        academicList.classList.add('showDiv');
        
    }else if(problemCat.value === 'business'){
        healthList.classList.add('hideDiv');
        healthList.classList.add('hide');
        politicsList.classList.add('hideDiv');
        politicsList.classList.add('hide');
        socialList.classList.add('hideDiv');
        socialList.classList.add('hide');
        otherList.classList.add('hideDiv');
        otherList.classList.add('hide');
        academicList.classList.add('hide');
        academicList.classList.add('hideDiv');
        businessList.classList.remove('hide');
        businessList.classList.add('showDiv')
    }else if(problemCat.value === 'health'){
        politicsList.classList.add('hideDiv');
        politicsList.classList.add('hide');
        socialList.classList.add('hideDiv');
        socialList.classList.add('hide');
        otherList.classList.add('hideDiv');
        otherList.classList.add('hide');
        academicList.classList.add('hide');
        academicList.classList.add('hideDiv');
        businessList.classList.add('hide');
        businessList.classList.add('hideDiv');
        healthList.classList.remove('hide');
        healthList.classList.add('showDiv');
    }else if(problemCat.value === 'politics'){
        socialList.classList.add('hideDiv');
        socialList.classList.add('hide');
        otherList.classList.add('hideDiv');
        otherList.classList.add('hide');
        academicList.classList.add('hide');
        academicList.classList.add('hideDiv');
        businessList.classList.add('hide');
        businessList.classList.add('hideDiv');
        healthList.classList.add('hide');
        healthList.classList.add('hideDiv');
        politicsList.classList.remove('hide');
        politicsList.classList.add('showDiv');
    }
    else if(problemCat.value === 'social'){
        otherList.classList.add('hideDiv');
        otherList.classList.add('hide');
        academicList.classList.add('hide');
        academicList.classList.add('hideDiv');
        businessList.classList.add('hide');
        businessList.classList.add('hideDiv');
        healthList.classList.add('hide');
        healthList.classList.add('hideDiv');
        politicsList.classList.add('hide');
        politicsList.classList.add('shideDiv');
        socialList.classList.remove('hide');
        socialList.classList.add('showDiv');
    }else if(problemCat.value === 'other'){
        academicList.classList.add('hide');
        academicList.classList.add('hideDiv');
        businessList.classList.add('hide');
        businessList.classList.add('hideDiv');
        healthList.classList.add('hide');
        healthList.classList.add('hideDiv');
        politicsList.classList.add('hide');
        politicsList.classList.add('shideDiv');
        socialList.classList.add('hide');
        socialList.classList.add('hideDiv');
        otherList.classList.remove('hide');
        otherList.classList.add('showDiv');
    }
}

const counsellorDiv = document.getElementById('counsellor-choice');
function fetchCounsellorList(){
    if(counsellorDiv.value === 'casual'){
        document.querySelector('#counsellor_name').classList.remove('hide')
        document.querySelector('#counsellor_name').classList.add('showDiv')
        document.querySelector('#counsellor_name').classList.remove('hideDive')
    }else{
        document.querySelector('#counsellor_name').classList.add('hide')
        document.querySelector('#counsellor_name').classList.add('hideDive')
    }
}