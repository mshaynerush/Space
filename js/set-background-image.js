
onload = () =>{
    let pageName = getPageName()
    let sWidth = getScreenWidth()
    

    let imgPath =  getImagePath(pageName, sWidth)
    
    setBackgroundImg(imgPath)
}

onresize = () => {
    let pageName = getPageName()
    let sWidth = getScreenWidth()
    

    let imgPath =  getImagePath(pageName, sWidth)
    console.log(imgPath)
    setBackgroundImg(imgPath)
}

function getImagePath(pageName, sWidth){


    let screenType
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
