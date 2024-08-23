
    const mobMenu = document.getElementById('mobileNav')
    const navBtn = document.getElementById('hamburgerMenu')
    const closeBtn = document.getElementById('closeBtn')

    navBtn.addEventListener('click', () => {
        mobMenu.classList.toggle('active-mobile-nav')
        closeBtn.classList.toggle('hidden')
    })

    closeBtn.addEventListener('click', () => {
        mobMenu.classList.toggle('active-mobile-nav')
        closeBtn.classList.toggle('hidden')
    })