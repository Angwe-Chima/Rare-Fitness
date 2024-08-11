import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './review.css'
const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let intervalId; // Variable to store setInterval ID

  useEffect(() => {
    const images = document.querySelectorAll(".img");
    const maxImageIndex = images.length - 1;

    // Set initial position of images based on currentSlide
    images.forEach((image, index) => {
      image.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });

    // Function to move to the next slide
    function next() {
      const nextSlide = currentSlide === maxImageIndex ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }

    // Function to move to the previous slide
    function previous() {
      const previousSlide =
        currentSlide === 0 ? maxImageIndex : currentSlide - 1;
      setCurrentSlide(previousSlide);
    }

    const nextButton = document.querySelector(".next_btn");
    const previousButton = document.querySelector(".prev_btn");

    // Add event listeners for next and previous buttons
    nextButton.addEventListener("click", next);
    previousButton.addEventListener("click", previous);

    // Start automatic scrolling on component mount
    intervalId = setInterval(next, 6000); // Update slide every 4 seconds

    return () => {
      // Remove event listeners and clear interval on component unmount
      nextButton.removeEventListener("click", next);
      previousButton.removeEventListener("click", previous);
      clearInterval(intervalId);
    };
  }, [currentSlide]); // Re-run effect only when currentSlide changes

  return (
    <div className="main-container">
      <h1>What People Are Saying</h1>
      <div className="carousel-container">
        {/* Button to move to the previous slide */}
        <button className="prev_btn btn" onClick={() => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}><MdKeyboardArrowLeft /></button>
        {/* Map through data to display carousel */}
        {[
          { name: 'Lily', message: 'I absolutely love the workouts here! Each session challenges me in new ways, and I can feel myself getting stronger and more confident every day. The variety in the routines keeps me motivated and excited to come back' },
          { name: 'Max', message: 'The group classes are definitely my favorite part of this gym! The energy is always high, and the instructors are so inspiring. I leave each class feeling energized and ready to take on the world. It’s such a great way to stay fit and meet like-minded people.' },
          { name: 'Ben', message: 'I really enjoy the variety of equipment available at this gym. Whether I’m focusing on cardio, strength training, or flexibility, there’s always something new to try. It keeps my workouts fresh and exciting, and I’ve seen such great results since I started.' },
          { name: 'Yhan', message: 'The trainers here are fantastic! They’re knowledgeable, encouraging, and really take the time to understand my goals. Since joining, I’ve noticed significant progress, and it’s all thanks to the personalized attention and support I receive from the staff' },
        ].map(({ name, message }, index) => (
          <div className="img" key={index} style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}>
            <div className="card">
              <h3>{name}</h3>
              <p>{message}</p>
            </div>
          </div>
        ))}
        {/* Button to move to the next slide */}
        <button className="next_btn btn" onClick={() => setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)}><MdKeyboardArrowRight /></button>
      </div>
    </div>
  );
};

export default Review;
