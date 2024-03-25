let showMoreButtonElements = document.querySelectorAll('.showMoreButton__element');
let showMoreButton = document.querySelector('.showMoreButton__button');
let showMoreImage = document.querySelector('.showMoreButton__image');
let swiperWrapper = document.querySelector('.swiper-wrapper');

for (let i = 0; i < showMoreButtonElements.length; i++) {
    showMoreButtonElements[i].addEventListener('click', function() {
        if (showMoreButton.textContent === 'Показать все') {
            swiperWrapper.style.height = '100%';
            showMoreButton.textContent = 'Скрыть';
            showMoreImage.style.transform = 'rotate(-180deg)';
    
        } else {
            swiperWrapper.style.height = '160px';
            showMoreButton.textContent = 'Показать все';
            showMoreImage.style.transform = 'rotate(0deg)';
        }
    })
}
