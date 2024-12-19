document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const totalSlides = galleryItems.length;

    // Get button elements
    const btnPrev = document.getElementById('prev_btn');
    const btnNext = document.getElementById('next_btn');

    // Update slide position
    function updateSlide() {
        galleryTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        // update button states
        btnPrev.style.opacity = currentIndex === 0 ? "0.5" : "1";
        btnNext.style.opacity = currentIndex >= totalSlides - 1 ? "0.5" : "1";
    }


    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateSlide();
        }
    }

    // Previous slide function
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide();
        }
    }

    // Add click event listeners to buttons
    btnPrev.addEventListener("click", prevSlide);
    btnNext.addEventListener("click", nextSlide);

    // Initialize slider
    updateSlide();

    
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const bookingForm = document.getElementById('bookingForm');

    openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    });

// Закрытие модального окна
    closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    });

// Закрытие окна при клике
    window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    });

// Обработка отправки формы
    bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Спасибо за запись на мастер-класс!');
  modal.style.display = 'none';
  bookingForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(function() {
        var myMap = new ymaps.Map("map", {
            center: [55.699467, 37.625594],
            zoom: 14
        });

        var myPlacemark = new ymaps.Placemark([55.699467, 37.625594], {
            hintContent: 'Гончарная мастерская',
            balloonContent: 'Мы здесь!'
        });

        myMap.geoObjects.add(myPlacemark);
    });
});