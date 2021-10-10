document.querySelectorAll('.poems_button').forEach(button =>{
    button.addEventListener('click', () => {
        //const poemsContent = button.nextElementSibling;
    
        button.classList.toggle('poems_button--active');
    
        // if (button.classList.contains('poems_button--active')){
        //     poemsContent.style.maxHeight = poemsContent.scrollHeight + 'px';
        // } else {
        //     poemsContent.style.maxHeight = 0;
        // }
    });
        });