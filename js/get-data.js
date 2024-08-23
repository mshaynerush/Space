const role = document.getElementById('role')
const name = document.getElementById('name')
const desc = document.getElementById('desc')
const portraitImg = document.getElementById('portraitImgContainer')
const landscapeImg = document.getElementById('landscapeImgContainer')
const crewImg = document.getElementById('landscapeCrewImgContainer')
const destinationImg = document.getElementById('ImgContainer')
const distance = document.getElementById('distanceInfo')
const travel = document.getElementById('travelInfo')

let ItemId
let techLinks = document.querySelectorAll  ('.tech-nav-item')
let crewLinks = document.querySelectorAll  ('.nav-dot')
let destLinks = document.querySelectorAll  ('.dest-nav-item')

destLinks.forEach((destLink) =>{
    destLink.addEventListener('click', (e) =>{
        setActiveDest(e)
        let d = e.target.dataset.url
        setDestinationData(d)
    })
});

techLinks.forEach((techLink) =>{
    techLink.addEventListener('click', (e) =>{
        setActiveTech(e)
        let t = e.target.dataset.url
        setTechData(t)
    })
});

crewLinks.forEach((crewLink) =>{
    crewLink.addEventListener('click', (e) =>{
        unsetActiveCrew()
        e.target.classList.add('active-nav-dot')
        let c = e.target.dataset.url
        setCrewData(c)
    })
});


function setDestinationData(d){
    

    switch(d){
        case "moon":
            ItemId = 0
            break

        case "mars":
            ItemId = 1
            break

        case "europa":
            ItemId = 2
            break

        case "titan":
            ItemId = 3
            break
        
        default:
            break;
    }
    
    getDestData(ItemId, name, desc, destinationImg, distance, travel)

}

function setCrewData(c){
    

    switch(c){
        case "commander":
            ItemId = 0
            break

        case "specialist":
            ItemId = 1
            break

        case "pilot":
            ItemId = 2
            break

        case "engineer":
            ItemId = 3
            break
        
        default:
            break;
    }

    getCrewData(ItemId, role, name, desc, crewImg, landscapeImg)

}

function setTechData(t){
    

    switch(t){
        case "vehicle":
            ItemId = 0
            break

        case "spaceport":
            ItemId = 1
            break

        case "capsule":
            ItemId = 2
            break
        
        default:
            break;
    }

    getTechData(ItemId, name, desc, portraitImg, landscapeImg)

}

function getDestData(ItemId, name, desc, destinationImg, distance, travel){
    
    fetch('data.json')
        .then(response => response.json())
        .then(json => {
            destData = json.destinations
            name.innerHTML = '<h3>' + destData[ItemId].name.toUpperCase() + '<h3>'
            desc.innerHTML = '<p>' + destData[ItemId].description + '</p>'
            destinationImg.innerHTML = "<img src='" + destData[ItemId].images['png'] + "' id='destImg' class='dest-img'>"
            distance.innerHTML = destData[ItemId].distance.toUpperCase()
            travel.innerHTML = destData[ItemId].travel.toUpperCase()
        })

}


function getCrewData(ItemId, role, name, desc, crewImg){
    
    fetch('data.json')
        .then(response => response.json())
        .then(json => {
            crew = json.crew
            role.innerHTML = '<h4>' + crew[ItemId].role.toUpperCase() + '<h4>'
            name.innerHTML = '<h3>' + crew[ItemId].name.toUpperCase() + '<h3>'
            desc.innerHTML = '<p>' + crew[ItemId].bio + '</p>'
            crewImg.innerHTML = "<img src='" + crew[ItemId].images['png'] + "' class='crew-img'>"
        })
}

function getTechData(ItemId, name, desc, portraitImg, landscapeImg){
    
    fetch('data.json')
        .then(response => response.json())
        .then(json => {
            tech = json.technology
            name.innerHTML = '<h3>' + tech[ItemId].name.toUpperCase() + '<h3>'
            desc.innerHTML = '<p>' + tech[ItemId].description + '</p>'
            portraitImg.innerHTML = "<img src='" + tech[ItemId].images["portrait"] + "' id='portraitImg' class='portrait-img'>"
            landscapeImg.innerHTML = "<img src='" + tech[ItemId].images['landscape'] + "' id='landscapeImg' class='landscape-img'>"
        })
}

function setActiveDest(e){
    let activeLink = document.getElementsByClassName('active-dest')
    activeLink[0].classList.remove('active-dest')
    let destLink = e.target
    destLink.classList.add('active-dest')
}

function unsetActiveCrew(){

    let aLinks = document.querySelectorAll('.active-nav-dot')
    aLinks.forEach(aLink => {
        aLink.classList.remove('active-nav-dot')
    })
    
}   

function setActiveTech(e){
    let activeLink = document.getElementsByClassName('active-tech')
    activeLink[0].classList.remove('active-tech')
    let techLink = e.target
    techLink.classList.add('active-tech')
}
