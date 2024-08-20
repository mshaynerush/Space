
onload = () => {
    
    
    let pageName = getPageName()
    let sWidth = getScreenWidth()
    let pathSource = getPathSource(pageName)
    let imgPath =  getImagePath(sWidth, pathSource)
    setNav(pathSource)
    
    setBackgroundImg(imgPath)
}

onresize = () => {

    let pageName = getPageName()
    let sWidth = getScreenWidth()
    let pathSource = getPathSource(pageName)
    let imgPath =  getImagePath(sWidth, pathSource)
    setNav(pathSource)
    setBackgroundImg(imgPath)
}

function getImagePath(sWidth, pathSource){

    
    let screenType
    
    if(sWidth <= 768){
        screenType = "mobile"
    } else if(sWidth > 768 && sWidth <= 1080){
        screenType = "tablet"
    } else {
        screenType = "desktop"
    }

    let imagePath = "assets/" + pathSource + "/background-" + pathSource + "-" + screenType + ".jpg"
    return imagePath

    }

    function getScreenWidth(){

        let screenWidth = window.screen.width
        return screenWidth
    }

    function getPageName(){
        
        let pageName = window.location.pathname
        pageName = pageName.split("/").pop();
        pageName = pageName.substr(0, pageName.length - 5)
        
        if(pageName == "index"){
            pageName = "home"   
        }

        return pageName
    }

    function setBackgroundImg(imgPath){
        const bgImgTarget = document.querySelector('body')

        bgImgTarget.setAttribute(
            "background",  imgPath
        ) 

    }

function setNav(pathSource){
    console.log(pathSource)
    let navStack = ''
    switch(pathSource){
        case "home":
        navStack =                
        '<li class="nav-item active"><span class="nav-numbers">00 </span><a href="index.html">HOME</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">01 </span><a href="moon.html">DESTINATION</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">02 </span><a href="commander.html">CREW</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">03 </span><a href="vehicle.html">TECHNOLOGY</a></li>'
        break
        
        case "destination":
        navStack =                
        '<li class="nav-item"><span class="nav-numbers">00 </span><a href="index.html">HOME</a></li>' +
        '<li class="nav-item active"><span class="nav-numbers">01 </span><a href="moon.html">DESTINATION</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">02 </span><a href="commander.html">CREW</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">03 </span><a href="vehicle.html">TECHNOLOGY</a></li>'
        break

        case "crew":
        navStack =              
        '<li class="nav-item"><span class="nav-numbers">00 </span><a href="index.html">HOME</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">01 </span><a href="moon.html">DESTINATION</a></li>' +
        '<li class="nav-item active"><span class="nav-numbers">02 </span><a href="commander.html">CREW</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">03 </span><a href="vehicle.html">TECHNOLOGY</a></li>'
        break

        case "technology":
        navStack =                
        '<li class="nav-item"><span class="nav-numbers">00 </span><a href="index.html">HOME</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">01 </span><a href="moon.html">DESTINATION</a></li>' +
        '<li class="nav-item"><span class="nav-numbers">02 </span><a href="commander.html">CREW</a></li>' +
        '<li class="nav-item active"><span class="nav-numbers">03 </span><a href="vehicle.html">TECHNOLOGY</a></li>'
        break

        default:
            break

    }

    let pageNav = document.getElementById('pageNav')
    pageNav.innerHTML = 

        '<div class="logo">' +
            '<img src="assets/shared/logo.svg" alt="logo">' +
        '</div>' +
        '<div class="hamburger-menu">' +
            '<img src="assets/shared/icon-hamburger.svg" alt="Toggle Menu">' +
        '</div>' +
        '<div class="line"></div>' +
        '<div class="desktop-menu">' +
            '<ul class="desktop-nav">' +
                navStack +
            '</ul>' +
        '</div>'
}

function getPathSource(pageName){

    let pathSource
    switch(pageName){

        case "home":
            pathSource = "home"
            break

        case "vehicle":
        case "spaceport":
        case "capsule":
            pathSource = "technology"

            break

        case "mars":
        case "moon":
        case "europa":
        case "titan":
            pathSource = "destination"
            break

        case "commander":
        case "engineer":
        case "pilot":
        case "specialist":
            pathSource = "crew"
            break

        default:
            break
    
    }
    return pathSource
}