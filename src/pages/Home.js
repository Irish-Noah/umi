import { React, useRef, useState, useEffect } from 'react';
import './Home.css';

// all the images
import yummy1 from '../assets/gallery/yummy.jpg';
import yummy2 from '../assets/gallery/yummy2.jpg';
import yummy3 from '../assets/gallery/yummy3.jpg';
import yummy4 from '../assets/gallery/yummy4.jpg';
import yummy5 from '../assets/gallery/yummy5.jpg';
import yummy6 from '../assets/gallery/yummy6.jpg';
import yummy7 from '../assets/gallery/yummy7.jpg';
import yummy8 from '../assets/gallery/yummy8.jpg';


import rich from '../assets/pfps/richrich.png';
import handsome from '../assets/pfps/handsomedevil.png';
import myladee from '../assets/pfps/myladee.png';
import teresa from '../assets/pfps/teresa.png';
import becky from '../assets/pfps/becky.png';
import mari from '../assets/pfps/mari.png';
import paul from '../assets/pfps/paul.png';
import emily from '../assets/pfps/emily.png'

export default function Home() {
  const reviewContainerRef = useRef(null);
  const photoGalleryRef = useRef(null);

  const [canScrollPhotosLeft, setCanScrollPhotosLeft] = useState(false);
  const [canScrollPhotosRight, setCanScrollPhotosRight] = useState(true);

  const [canScrollReviewsLeft, setCanScrollReviewsLeft] = useState(false);
  const [canScrollReviewsRight, setCanScrollReviewsRight] = useState(true);

  const scrollLeft = () => {
    reviewContainerRef.current.scrollBy({ left: -345, behavior: 'smooth' });
  };

  const scrollRight = () => {
    reviewContainerRef.current.scrollBy({ left: 345, behavior: 'smooth' });
  };

  const updateScrollState = (ref, setLeft, setRight) => {
    const el = ref.current;
    if (!el) return;

    setLeft(el.scrollLeft > 0);
    setRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const handlePhotoScroll = () => updateScrollState(photoGalleryRef, setCanScrollPhotosLeft, setCanScrollPhotosRight);
    const handleReviewScroll = () => updateScrollState(reviewContainerRef, setCanScrollReviewsLeft, setCanScrollReviewsRight);

    const photoEl = photoGalleryRef.current;
    const reviewEl = reviewContainerRef.current;

    if (photoEl) photoEl.addEventListener('scroll', handlePhotoScroll);
    if (reviewEl) reviewEl.addEventListener('scroll', handleReviewScroll);

    // Initial check
    handlePhotoScroll();
    handleReviewScroll();

    return () => {
      if (photoEl) photoEl.removeEventListener('scroll', handlePhotoScroll);
      if (reviewEl) reviewEl.removeEventListener('scroll', handleReviewScroll);
    };
  }, []);

  return (
    <div className='container'>
  
        
      <h1>Welcome to Umi Sushi!</h1>
      <p>
      Experience the freshest sushi and authentic Japanese cuisine made with love and tradition.
      Our chefs craft each dish using the finest ingredients to delight your taste buds.
      </p>

      <h2>Fresh from the Kitchen</h2>
      <div className="photo-gallery-outer">
        <button
          className="photo-scroll-button"
          onClick={() => photoGalleryRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
          disabled={!canScrollPhotosLeft}
        >
          ←
        </button>

        <div className="photo-gallery-scroll" ref={photoGalleryRef}>
          {[yummy5, yummy6, yummy2, yummy3, yummy8, yummy4, yummy7, yummy1].map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className="photo" />
          ))}
        </div>

        <button
          className="photo-scroll-button"
          onClick={() => photoGalleryRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
          disabled={!canScrollPhotosRight}
        >
          →
        </button>
    </div>

      {/* Reviews Section with Scroll Buttons */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="scroll-controls">
          <button onClick={scrollLeft} className="scroll-button" disabled={!canScrollReviewsLeft}>←</button>
          <div className="reviews-shelf" ref={reviewContainerRef}>
            <div className="google-review">
              <div className="review-header">
                <img src={handsome} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Noah Robert</p>
                  <p className="review-date">2 months ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                The staff is always so welcoming. Definitely worth going in and sitting down if you have the time. The miso soup is fantastic and the tempura rolls are even better! Really fair price for what you get! My girlfriend and I go every couple weeks and it has always been a great experience. Can't recommend Umi enough!
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={paul} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Paul Otis</p>
                  <p className="review-date">3 months ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                Absolutely amazing. I've been coming here for years. I don't have a bad thing to say. The food is fantastic
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={myladee} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Myladee V.</p>
                  <p className="review-date">3 weeks ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★☆</div>
              <p className="review-text">
                My sushi go to when I’m craving for it! I ordered the same thing every time, so delicious and satisfying!
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={becky} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Becky Jo Lubienski</p>
                  <p className="review-date">4 months ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                I absolutely love the place. The food & service is great! I don't even like seafood, but love this place. Even the Wasabi is fresh & doesn't come in a packet.
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={mari} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Mari F</p>
                  <p className="review-date">6 months ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                I really enjoy getting Sushi here. Love the hot tea and miso soup. Will be back!
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={rich} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">RICH RICH</p>
                  <p className="review-date">6 months ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                Good service and food is served 10-15 minutes after you order even on a busy Saturday night. I'd give the sushi a 4.5 out of 5.0 we were very pleased and pricing was fair.
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={emily} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Emily Torpey</p>
                  <p className="review-date">9 months ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                One of my favorite places to get sushi. The veggie tempura roll is my favorite with miso soup and hot green tea. Servers are always friendly and helpful
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src={teresa} alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Teresa Studer</p>
                  <p className="review-date">a year ago</p>
                </div>
              </div>
              <div className="review-stars">★★★★☆</div>
              <p className="review-text">
                The outside looks a little sketch, but don't let that fool you. It has a nice atmosphere. The service was quick and friendly. The food was delicious! Would definitely recommend
              </p>
            </div>

          </div>
          <button onClick={scrollRight} className="scroll-button" disabled={!canScrollReviewsRight}>→</button>
        </div>
      </div>

      {/* Google Maps embed */}
      <div style={{ marginTop: 40 }}>
        <h2>Find Us Here</h2>
        <div className="map-info-container">
          <div className="business-info">
            <h3>Hours</h3>
            <ul className="hours-list">
              <li><span className="day">Mon:</span> <span className="time">11 AM – 3 PM, 4:30 PM – 10 PM</span></li>
              <li><span className="day">Tue:</span> <span className="time">11 AM – 3 PM, 4:30 PM – 10 PM</span></li>
              <li><span className="day">Wed:</span> <span className="time">11 AM – 3 PM, 4:30 PM – 10 PM</span></li>
              <li><span className="day">Thu:</span> <span className="time">11 AM – 3 PM, 4:30 PM – 10 PM</span></li>
              <li><span className="day">Fri:</span> <span className="time">11 AM – 3 PM, 4:30 PM – 10 PM</span></li>
              <li><span className="day">Sat:</span> <span className="time">11 AM – 3 PM, 4:30 PM – 10 PM</span></li>
              <li><span className="day">Sun:</span> <span className="time">Closed</span></li>
            </ul>

            <h4>Call Ahead</h4>
            <p><a href="tel:+15867268360">(586) 726-8360</a> (Takeout/Catering)</p>
            <p>We unfortunately do not take any reservations. Thank you for understanding!</p>
          </div>

        

        <div className="map-container">
          <iframe
            title="Umi Sushi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5867.158269817073!2d-83.01267818775916!3d42.670273271045396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824dd6555555555%3A0xe3b801e1a7761c8e!2sUmi%20Sushi!5e0!3m2!1sen!2sus!4v1750367736749!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
          </div>
      
      </div>

    </div>
  );
}
