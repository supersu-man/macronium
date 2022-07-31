var toggle = document.getElementById('themeSwitch')

if (localStorage.getItem('dark-theme')) {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
    toggle.setAttribute('checked', 'true')
} 

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        localStorage.setItem('dark-theme', true)
    } else {
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
        localStorage.removeItem('dark-theme')
    }
})