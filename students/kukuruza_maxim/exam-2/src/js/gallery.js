const galleryBtn = document.querySelector('#button');
const hiddenImages = document.querySelectorAll('.hidden-item');
let isHidden = true;

galleryBtn.addEventListener('click', () => {
    galleryBtn.textContent = isHidden ? 'See Less' : 'See More';

    isHidden = !isHidden;
    hiddenImages.forEach(item => item.classList.toggle('hidden'));
});

export default galleryBtn;
