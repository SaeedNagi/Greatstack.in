import { useRef } from "react";
    const Testimonial = () => {
        const slider = useRef();
        let tx = 0;
    
        const slideForward = () => {
            if (tx > -50) {
                tx -= 25;
            }
            slider.current.style.transform = `translateX(${tx}%)`;
        };
    
        const slideBackward = () => {
            if (tx < 0) {
                tx += 25;
            }
            slider.current.style.transform = `translateX(${tx}%)`;
        };
  return (
    <>
    <div class="slider">
        <h4>TESTIMONIALS</h4>
        <h1>What Student Says
        </h1>
        <div className="testimonials">
            <img src='./back arrow.png' alt="Back" className="back-btn" onClick={slideBackward} />
            <img src='./forward arrow.png' alt="Next" className="next-btn" onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src='./user-1.png' alt="User 1" />
                                <div className='User 1'>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src='./user-2.png' alt="User 2" />
                                <div className='User 1'>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src='./user-3.png' alt="User 3" />
                                <div className='User 1'>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src='./user-4.png' alt="User 4" />
                                <div className='User 1'>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Choosing to pursue my degree at Edusity was one of the best decisions
                                I've ever made. The supportive community, state-of-the-art facilities, 
                                and commitment to academic excellence have truly exceeded my expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
         </div>
          </div>
    </>
  )
}
export default Testimonial;
