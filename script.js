const btn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        btn.innerText = '≡';
    } else {
        btn.innerText = 'X';
    }
});

const btnSubir = document.getElementById("btn-subir");

btnSubir.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
