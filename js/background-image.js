
let pgName = getPageName()

function getPageName(){
    
    let pageName = window.location.pathname
    pageName = pageName.split("/").pop();
    pageName = pageName.substr(0, pageName.length - 5)
    
    if(pageName == "index"){
        pageName = "home"
    }

    return pageName
}