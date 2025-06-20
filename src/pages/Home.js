import {React, useRef} from 'react';
import './Home.css';
import yummy1 from '../assets/yummy.jpg';
import yummy2 from '../assets/yummy2.jpg';
import yummy3 from '../assets/yummy3.jpg';

export default function Home() {
    const reviewContainerRef = useRef(null);

  const scrollLeft = () => {
    reviewContainerRef.current.scrollBy({ left: -280, behavior: 'smooth' });
  };

  const scrollRight = () => {
    reviewContainerRef.current.scrollBy({ left: 280, behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20 }}>
        <h1>Welcome to Umi Sushi!</h1>
        <p>
        Experience the freshest sushi and authentic Japanese cuisine made with love and tradition.
        Our chefs craft each dish using the finest ingredients to delight your taste buds.
        </p>

        <div className="photo-gallery">
          <img src={yummy1} alt="Sushi plate 1" className="photo" />
          <img src={yummy2} alt="Sushi plate 2" className="photo" />
          <img src={yummy3} alt="Sushi plate 3" className="photo" />
        </div>

        {/* Reviews Section with Scroll Buttons */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="scroll-controls">
          <button onClick={scrollLeft} className="scroll-button">←</button>
          <div className="reviews-shelf" ref={reviewContainerRef}>
            <div className="google-review">
              <div className="review-header">
                <img src="https://i.pravatar.cc/40?img=1" alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Jamie L.</p>
                  <p className="review-date">Sept 10, 2023</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                Amazing sushi! Fresh, flavorful, and beautiful presentation.
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src="https://i.pravatar.cc/40?img=2" alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Alex P.</p>
                  <p className="review-date">Aug 28, 2023</p>
                </div>
              </div>
              <div className="review-stars">★★★★☆</div>
              <p className="review-text">
                Cozy atmosphere and the best spicy tuna roll I’ve had in years.
              </p>
            </div>

            <div className="google-review">
              <div className="review-header">
                <img src="https://i.pravatar.cc/40?img=3" alt="Reviewer avatar" className="avatar" />
                <div>
                  <p className="reviewer-name">Morgan S.</p>
                  <p className="review-date">July 5, 2023</p>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                Friendly staff and great service. Highly recommend the chef’s special.
              </p>
            </div>
          </div>
          <button onClick={scrollRight} className="scroll-button">→</button>
        </div>
      </div>


        {/* Google Maps embed */}
        <div style={{ marginTop: 40 }}>
        <h2>Find Us Here</h2>
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
  );
}
