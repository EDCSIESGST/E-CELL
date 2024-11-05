import React, { useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Gallery() {
    useEffect(() => {
        const galleryThumbs = new Swiper('.gallery.thumb .swiper-container', {
            speed: 900,
            effect: 'slide',
            spaceBetween: 12,
            grabCursor: false,
            simulateTouch: true,
            loop: false,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.gallery.thumb .swiper-next-button',
                prevEl: '.gallery.thumb .swiper-prev-button',
            },
            breakpoints: {
                320: { slidesPerView: 2, spaceBetween: 10 },
                414: { slidesPerView: 3, spaceBetween: 10 },
                768: { slidesPerView: 5, spaceBetween: 10 },
                1024: { slidesPerView: 7, spaceBetween: 10 }
            },
            on: {
                init: function () {
                    let containerThumbWidth = document.querySelector('.gallery.thumb').offsetWidth;
                    let totalThumbWidth = 0;
                    document.querySelectorAll('.gallery.thumb .swiper-container .swiper-wrapper .swiper-slide').forEach(slide => {
                        let thumbWidth = slide.offsetWidth;
                        totalThumbWidth += thumbWidth;
                    });
                    if (totalThumbWidth < containerThumbWidth) {
                        document.querySelectorAll('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').forEach(button => button.classList.add('hide'));
                    } else {
                        document.querySelectorAll('.gallery.thumb .swiper-next-button, .gallery.thumb .swiper-prev-button').forEach(button => button.classList.remove('hide'));
                    }
                }
            }
        });

        const galleryFull = new Swiper('.gallery.full .swiper-container', {
            speed: 900,
            effect: 'slide',
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: { delay: 7000, disableOnInteraction: false, stopOnLastSlide: false },
            keyboard: { enabled: true },
            grabCursor: false,
            simulateTouch: false,
            loop: true,
            navigation: {
                nextEl: '.gallery.full .swiper-next-button',
                prevEl: '.gallery.full .swiper-prev-button',
            },
            thumbs: { swiper: galleryThumbs },
            on: {
                slideChangeTransitionStart: function () {
                    document.querySelectorAll('.gallery.full .swiper-slide .overlay').forEach(overlay => overlay.classList.remove('show'));
                },
                slideChangeTransitionEnd: function () {
                    document.querySelector('.gallery.full .swiper-slide-active .overlay').classList.add('show');
                }
            }
        });

        // Loader fade out
        window.onload = () => {
            setTimeout(() => {
                document.querySelector('.loader').style.display = 'none';
            }, 1000);
        };
    }, []);

    return (
        <div>
            

            <div className="gallery-wrapper">
                <div className="content">
                    <div className="gallery full">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* Your gallery full swiper slides here */}
                            </div>
                        </div>
                        <div className="swiper-next-button">
                            <em className="material-icons">chevron_right</em>
                        </div>
                        <div className="swiper-prev-button">
                            <em className="material-icons">chevron_left</em>
                        </div>
                    </div>

                    <div className="gallery thumb">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {/* Your gallery thumb swiper slides here */}
                            </div>
                        </div>
                        <div className="swiper-next-button">
                            <em className="material-icons">arrow_right_alt</em>
                        </div>
                        <div className="swiper-prev-button">
                            <em className="material-icons">arrow_left_alt</em>
                        </div>
                    </div>
                </div>
            </div>

            <div className="signature">
                <h3>plugin &amp; author</h3>
                <a href="https://swiperjs.com/" target="_blank" rel="noopener noreferrer">swiper slide</a>
                <em>|</em>
                <a href="https://www.instagram.com/jackcohle/" target="_blank" rel="noopener noreferrer">jackcohle</a>
            </div>
        </div>
    );
}

export default Gallery;
