import React from 'react';
import "./sponsors.css"
function SponsorSection() {
    return (
        <section id="sponsors">
            <h3>OUR SPONSORS</h3>

            {/* Event Partner Section */}
            <div className="card-panel hoverable">
                <div className="container">
                    <p>
                        <section className="grayscale">
                            <div className="row" id="eventsp">
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/eventspartner.png" alt="Event Partner" />
                                    <h3>EVENT PARTNER</h3>
                                </div>
                            </div>
                        </section>
                    </p>
                </div>
            </div>

            {/* Education Partner Section */}
            <div className="card-panel hoverable">
                <div className="container">
                    <p>
                        <section className="grayscale">
                            <div className="row" id="respon">
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img src="./Assets/sponsors webp/education parter - Copy.png" alt="Education Partner" />
                                    <h6>EDUCATION PARTNER</h6>
                                </div>
                            </div>
                        </section>
                    </p>
                </div>
            </div>

            {/* Voucher and Magazine Partners Section */}
            <div className="card-panel hoverable">
                <div className="container">
                    <p>
                        <section className="grayscale">
                            <div className="row">
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/logo - artistic affairs.PNG" alt="Voucher Partner" />
                                    <h6>VOUCHER PARTNER</h6>
                                </div>
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/TEOI logo png 922.png" alt="Magazine Partner" />
                                    <h6>MAGAZINE PARTNER</h6>
                                </div>
                            </div>
                        </section>
                    </p>
                </div>
            </div>

            {/* Media and Ecosystem Partners Section */}
            <div className="card-panel hoverable">
                <div className="container">
                    <p>
                        <section className="grayscale">
                            <div className="row">
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/Light Themed Logo 2000x2000.png" alt="Media Partner" />
                                    <h6>MEDIA PARTNER</h6>
                                </div>
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/001-lwt-logo.webp" alt="Ecosystem Partner" />
                                    <h6>ECOSYSTEM PARTNER</h6>
                                </div>
                            </div>
                        </section>
                    </p>
                </div>
            </div>

            {/* Goodies Partners Section */}
            <h3>GOODIES PARTNER</h3>
            <div className="card-panel hoverable">
                <div className="container">
                    <p>
                        <section className="grayscale">
                            <div className="row">
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/goodies partner.png"  />
                                </div>
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500" id="liljoy">
                                    <img className="responsive-img" src="./Assets/sponsors webp/IMG_0820.jpg"  />
                                </div>
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <img className="responsive-img" src="./Assets/sponsors webp/kalatmakam logo.png"  />
                                </div>
                            </div>
                        </section>
                    </p>
                </div>
            </div>

            {/* Previous Sponsors Section */}
            <h3>PREVIOUS SPONSORS</h3>
            <div className="card-panel hoverable">
                <div className="container">
                    <p>
                        <section className="grayscale">
                            <div className="row">
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <a href="#">
                                        <img className="responsive-img" src="./Assets/sponsors webp/maestromusic-01.webp"  />
                                    </a>
                                </div>
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <a href="#" target="_blank">
                                        <img className="responsive-img" src="./Assets/sponsors webp/prlogo.webp"  />
                                    </a>
                                </div>
                                <div className="col s4" data-aos="fade-up" data-aos-duration="1500">
                                    <a href="#">
                                        <img className="responsive-img" src="./Assets/sponsors webp/prlogo2.webp"  />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SponsorSection;
