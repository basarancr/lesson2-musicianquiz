document.querySelectorAll('.true').forEach((item, index) => {
    item.addEventListener('click', function() {
        let trueTextElements = document.querySelectorAll('.truetext');
        trueTextElements[index].textContent = 'Perfect!';
        trueTextElements[index].classList.add('perfectStyle');
    });
});


document.querySelectorAll('.false').forEach((item, index) => {
    item.addEventListener('click', function() {
        let trueTextElements = document.querySelectorAll('.falsetext');
        trueTextElements[index].textContent = 'Oh No!';
        trueTextElements[index].classList.add('perfectStyle2');
    });
});


