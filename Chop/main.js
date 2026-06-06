const navbar = document.querySelector('.Nav-bar')

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.background = '#080808'
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)'
    } else {
        navbar.style.background = 'var(--border)'
        navbar.style.boxShadow = 'none'
    }
})

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
    })
}, { threshold: 0.4 })

observer.observe(document.querySelector('.featured'))
observer.observe(document.querySelector('.types'))
observer.observe(document.querySelector('.mission'))

const backToTop = document.getElementById('backToTop')

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible')
    } else {
        backToTop.classList.remove('visible')
    }
})

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})