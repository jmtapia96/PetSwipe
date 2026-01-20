const btn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

btn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        btn.innerText = '☰';
    } else {
        btn.innerText = '✕';
    }
});
