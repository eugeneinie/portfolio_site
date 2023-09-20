function hamburgerIcon(x) {
    x.classList.toggle("change");
}

function dropdownMenu() {
    dropdownMenuEl.style.display = dropdownMenuEl.style.display === 'block' ? 'none' : 'block';
}

const hambIcon  = document.querySelector('.container')
const dropdownMenuEl = document.getElementById('dropdown_menu')
// Add an event listener to the hamburgerIcon
hambIcon.addEventListener('click', dropdownMenu)