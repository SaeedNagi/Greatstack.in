import React,{ useEffect, useState } from "react";
import './design.css';
export default function Navbar() {

   const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (selector) => {
    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after clicking
    }
  };
  
  // const handleScroll = (id) => {
  //   document.querySelector(id).scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // };

  document.querySelectorAll('.style1 img').forEach((image) => {
    image.addEventListener('click', function () {
      // Remove 'active' class from all other style1 elements
      document.querySelectorAll('.style1').forEach((el) => el.classList.remove('active'));
  
      // Add 'active' class to the clicked element's parent (style1)
      this.parentElement.classList.add('active');
    });
  });


return (
  
    <>
      <div className='root'>
        <div className={`idol ${scrolled ? "scrolled" : ""}`}>
            <img src="./logo122.png" alt="Logo" /> 
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  <span></span>
                  <span></span>
                  <span></span>
           </div>
         <div className={`ul-list ${menuOpen ? "open" : ""}`}>
           <ul id='list'>
           <li onClick={() => handleScrollToSection('.root')}>Home</li>
           <li onClick={() => handleScrollToSection('.program')}>Program</li>
           <li onClick={() => handleScrollToSection('.aboutus')}>About us</li>
           <li onClick={() => handleScrollToSection('.Campus')}>Campus</li>
           <li onClick={() => handleScrollToSection('.slider')}>Testimonoials</li>
           <button type='button' onClick={() => handleScrollToSection('.title')}><li>Contact us</li></button>
           </ul>
          </div>
        </div>
       <div className='para'>
          <h1>We Ensure better education for a better world</h1>
          <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
       <button type='button'>Explore more     <img src="./hi.png" alt="/"/></button>
       </div>
      </div>
     
     <div className="program">
       <div className='lower'>
         <h4>OUR PROGRAM</h4>
         <h2>What We Offer</h2>
       </div>
       <div className="imgage">
         <div className="style1"><img src="./program-1.png" alt="logo" />
           <div className="style4"><img src="./program-2.png" alt="logo" /><p>Graduation Degree</p></div>
          </div>
         <div className="style1"><img src="./program-3.png" alt="logo" />
           <div className="style4"><img src="./program-3-1.png" alt="logo" /><p>Master Degree</p></div>
          </div>
         <div className="style1"><img src="./program-4.png" alt="logo" />
           <div className="style4"><img src="./program-4-1.png" alt="logo" /><p>Post Degree</p></div>
         </div>
       </div>
      </div>
      
      <div className="aboutus">
        <div className="voidtext">
          <img src="./about.png" alt="logo" />
        </div>
        <div className='left-side'>
        <h3>ABOUT UNIVERSITY</h3>
          <h1>Nurturing Tomorrow's Leaders Today</h1>
          <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
          <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
          <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
          </div>
      </div>

      <div className="Campus">
        <div className='copamnt'>
          <h3>GALLERY</h3>
         <h2>Campus Photos</h2>
        </div>
        <div className="engage">
         <div className="hello1"><img src="./gallery-1.png" alt="" />
         </div>
         <div className="hello2"><img src="./gallery-2.png" alt="" />
         </div>
         <div className="hello3"><img src="./gallery-3.png" alt="" />
         </div>
         <div className="hello4"><img src="./gallery-4.png" alt="" />
         </div>
       </div>
       <div className='click'>
       <button type='button'>See more here   <img src="./hi.png" alt="/"/></button>
       </div>
      </div>
    </>
  );
};
