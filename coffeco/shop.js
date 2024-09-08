
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        const name = box.querySelector('h2').textContent.toLowerCase();
        if (name.includes(query)) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
});

document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('search-input').value = ''; 
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.style.display = 'flex'; 
    });
});

document.querySelectorAll('.like-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('liked');
        
});
});




//
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const orderButtons = document.querySelectorAll('.btn');

  
    orderButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
        });
    });

    
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});

function shop() {
    window.location.href = 'index.html';
}










