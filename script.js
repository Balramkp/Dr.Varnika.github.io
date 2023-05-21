// sider navbar
const check_slide = document.getElementById('check_slide');
const tri_line = document.getElementById('tri_line')

tri_line.addEventListener('click', ()=>{
    
 
    if (check_slide.style.left === '40%') {
        check_slide.style.left = '0%';
      }
    else {
        check_slide.style.left = '40%';
      }
})




//   images slider
const sliders = document.querySelectorAll('.slider');
const cardWidth = document.querySelector('.card').offsetWidth;
let positions = Array.from(sliders).map(() => 0);
let autoSlideIntervals = [];

// Function to move the slider to the next card
const moveToNextCard = (sliderIndex) => {
  positions[sliderIndex] -= cardWidth;
  const slider = sliders[sliderIndex];
  if (positions[sliderIndex] < -(cardWidth * (slider.children.length - 1))) {
    positions[sliderIndex] = 0;
  }
  slider.style.transform = `translateX(${positions[sliderIndex]}px)`;
};

// Start the auto slider for each row
const startAutoSlider = () => {
  autoSlideIntervals = Array.from(sliders).map((slider, index) =>
    setInterval(() => moveToNextCard(index), 2000) // Adjust the duration as needed (in milliseconds)
  );
};

// Pause the auto slider when hovering over a card
const pauseAutoSlider = () => {
  autoSlideIntervals.forEach((interval) => clearInterval(interval));
};

// Resume the auto slider when not hovering over a card
const resumeAutoSlider = () => {
  startAutoSlider();
};

// Add event listeners to each card slider
sliders.forEach((slider, index) => {
  slider.addEventListener('mouseenter', pauseAutoSlider);
  slider.addEventListener('mouseleave', resumeAutoSlider);
});

// Start the auto slider initially
startAutoSlider();