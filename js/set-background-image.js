
onload = () => {
    pageLoad()
}

function pageLoad(){
    let pageName = getPageName()
    let sWidth = getScreenWidth()
    let imgPath =  getImagePath(sWidth, pageName)
    // setNav(pageName)
    
    setBackgroundImg(imgPath)
    }

onresize = () => {
    pageLoad()
  
}

function getImagePath(sWidth, pageName){

    
    let screenType
    
    if(sWidth <= 768){
        screenType = "mobile"
    } else if(sWidth > 768 && sWidth <= 1080){
        screenType = "tablet"
    } else {
        screenType = "desktop"
    }

    let imagePath = "assets/" + pageName + "/background-" + pageName + "-" + screenType + ".jpg"
    return imagePath

    }

    function getScreenWidth(){

        let screenWidth = window.screen.width
        return screenWidth
    }

    function getPageName(){
        
        let pageName = window.location.pathname
        pageName = pageName.split("/").pop();
        pageName = pageName.substring(0, pageName.length - 5)
        
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


   


