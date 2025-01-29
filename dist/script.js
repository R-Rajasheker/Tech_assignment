const sidemenu=document.querySelector('#sidemenu');
const navBar=document.querySelector("nav");
const navLinks=document.querySelector("nav ul");
function openMenu(){
    sidemenu.style.transform='translateX(-16rem)';
}

function closeMenu(){
    sidemenu.style.transform='translateX(16rem)';
}

window.addEventListener('scroll',()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-slate-400','bg-opacity-50','backdrop-blur-xl','shadow-sm');
        navLinks.classList.remove('bg-slate-400','bg-opacity-50','shadow-sm');
    }
    else{
        navBar.classList.remove('bg-slate-400','bg-opacity-50','backdrope-blur-xl','shadow-sm'); 
        navLinks.classList.add('bg-white','bg-opacity-50','shadow-sm');
    }
})

if(localStorage.theme ==='dark'||(!('theme' in localStorage)&& window.matchMedia('(prefers-color-scheme:dark)').matches)){
    document.documentElement.classList.add('dark')
}else{
    document.documentElement.classList.remove('dark')
}
function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme='dark';
    }
    else{
        localStorage.theme='light';
    }
}


const html = document.documentElement; // Select the <html> element
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // Add click event listener to the button
    themeToggleBtn.addEventListener('click', () => {
      // Toggle the 'dark' class on <html>
      html.classList.toggle('dark');
      
      // Optional: Change button text based on the theme
      themeToggleBtn.textContent = html.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });