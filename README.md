# Elementor Carousel Center Mode and Extra Features

This script integrates a Swiper slider within an Elementor carousel. It allows dynamic updates to the Swiper instance, including settings such as `centeredSlides` and `slidesPerView`. The slider can loop and uses the Swiper.js library for smooth functionality.

## Features
- **Swiper Slider Integration**: Implements Swiper as the core library for the Elementor carousel.
- **Centered Slides**: The slides are centered in the view.
- **Dynamic Parameter Update**: Updates Swiper settings dynamically on page load, such as the number of slides visible and centered alignment.

## Requirements
- This code assumes that the Swiper library is already included in your project.
- The swiper container should have the class `swiper` inside the `#winSlide` element.

## Usage
1. Include the Swiper library in your project if it is not already included.
2. Place this script on the page where you want the Elementor carousel to be enhanced with Swiper functionality.
3. Customize the Swiper settings as per your needs by modifying the parameters in the script.
4. Ensure the slider container has the `swiper` class and is inside the `#winSlide` element.

## Example
```html
<div id="winSlide">
    <div class="swiper">
        <!-- Slider Content -->
    </div>
</div>
