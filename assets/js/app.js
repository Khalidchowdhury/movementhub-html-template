
$(document).ready(function () {

    // Back to Top
    const backToTopButton = $("#backToTopBtn");

    if (backToTopButton.length) {
        // Scrool Events
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 150) {
                backToTopButton.addClass("show");
            } else {
                backToTopButton.removeClass("show");
            }
        });

        // Click Events
        backToTopButton.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 'smooth');
        });
    }

    // AOS
    AOS.init({
        duration: 1000,
        offset: 120,
        once: true
    });

    // Slick Slider
    const assetSlider = $('.asset-slider');

    if (assetSlider.length) {
        assetSlider.slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 3 } },
                { breakpoint: 992, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }
            ]
        });

        assetSlider.on('init', function (event, slick) {
            AOS.refresh();
        });
    }

    // Bootstrap Modal
    const assetModal = $('#assetModal');

    if (assetModal.length) {
        assetModal.on('show.bs.modal', function (event) {
            const button = $(event.relatedTarget);
            const title = button.data('title');
            const imgSrc = button.data('img');
            const modal = $(this);

            modal.find('.modal-title').text(title);
            modal.find('#modalImage').attr('src', imgSrc);
        });
    }

    // Type js
    let typedInstance = null;
    const carousel = document.getElementById('heroSlider');

    function startTypewriter() {
        if (typedInstance) {
            typedInstance.destroy();
        }

        const activeSlide = document.querySelector('#heroSlider .carousel-item.active .main-title');

        if (activeSlide) {
            const textToType = activeSlide.getAttribute('data-title');
            typedInstance = new Typed(activeSlide, {
                strings: [textToType],
                typeSpeed: 80,
                showCursor: true,
                cursorChar: '|',
                loop: false
            });
        }
    }

    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', startTypewriter);
        startTypewriter();
    }
});