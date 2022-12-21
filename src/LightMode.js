import './Styles/DarkMode.css'


const LightMode = () => {
    let clickedClass = 'clicked'
    const body = document.body
    const lightTheme = 'light'
    const darkTheme= 'dark'
    let theme;

    if (localStorage) {
        theme = localStorage.getItem('theme')
    }
    
if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
} else {
    body.classList.add(darkTheme)
}

    return ( 

     );
}
 
export default LightMode ;
