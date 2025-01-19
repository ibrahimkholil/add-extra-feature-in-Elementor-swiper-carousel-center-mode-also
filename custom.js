<script>
;((w) => {
    // Declare a variable to store the swiper instance
    let swiperInstance;
    
    // Define the selector for the swiper container inside #winSlide
    const swiperSelector = '#winSlide .swiper';

    // Event listener for the window load event
    w.addEventListener('load', () => {
        // Get the swiper element using the defined selector
        const swiperElement = document.querySelector(swiperSelector);
        
        // Check if the swiper instance exists
        swiperInstance = swiperElement?.swiper;

        console.log('Swiper Instance:', swiperInstance);

        // If the swiper instance exists, update the swiper parameters
        if (swiperInstance) {
            // Set centeredSlides to true
            swiperInstance.params.centeredSlides = true;
            
            // Update the slidesPerView parameter to 3 (example)
            swiperInstance.params.slidesPerView = 3;
            
            // Update swiper layout with the new parameters
            swiperInstance.update();
        } else {
            // Warn the user if swiper instance is not found
            console.warn('Swiper instance not found for:', swiperSelector);
        }
    });
})(window);
</script>
