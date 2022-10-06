//hide an unhide navbar onscroll 


  

    //const mathesQuery = window.matchMedia("(max-width: 1210px)");
    const match2 = window.matchMedia("(max-width:500px)");


    function handedevice(e){
        if(e.matches){
            const navbar = document.querySelector('.navbar');
            let lastScrollY = window.scrollY;
            window.addEventListener('scroll', () =>{
                if(lastScrollY < window.scrollY){
                    navbar.style.display = 'none'
                }else{
                    navbar.style.display = "flex"
                }
            })
        }
    }

//mathesQuery.addListener(handedevice);
match2.addListener(handedevice);
handedevice(match2)







//widthScreen.addEventListener('scroll', hideNav(widthScreen));

