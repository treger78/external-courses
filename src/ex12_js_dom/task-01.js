const imagesArray = [
  'assets/images/img_nature.jpg',
  'assets/images/img_snow.jpg',
  'assets/images/img_mountains.jpg',
  'assets/images/img_cat.jpg',
  'assets/images/img_dog.jpg',
];

const slideshowContainer = document.getElementsByClassName('slideshowContainer')[0];

for (let i = 0; i < imagesArray.length; i += 1) {
  slideshowContainer.insertAdjacentHTML(
    'beforeend',
    `
    <div class="slide fade">
      <div class="numberText"><span class="currentSlide">${i + 1}</span>/<span class="totalSlides">${imagesArray.length}</span></div>
      <div class="imgContainer">
        <img class="img" src="${imagesArray[i]}" />
      </div>
    </div>
    `,
  );
}

let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName('slide');

  if (n > slides.length) slideIndex = 1;

  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];

prev.addEventListener('click', () => plusSlides(-1));

prev.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') plusSlides(-1);
});

next.addEventListener('click', () => plusSlides(1));

next.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') plusSlides(1);
});
