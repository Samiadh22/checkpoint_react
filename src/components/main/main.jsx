import ControlledCarousel  from '../UI/carousel'
import React from 'react'
import Cards from '../UI/cards'

function Main() {
  return (
    <div>
        <ControlledCarousel/>
      <div class="row">
        <div class="col-lg-3 text-center text-lg-left aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <div class="heading mb-4">
              <span class="subtitle">Select your Meal</span>
              <h3>Popular <strong class="text-primary">Foods</strong></h3>
            </div>
            <div>
              <ul class="list-unstyled untree_co-tab-nav js-custom-dots">
              <li data-index="2" class=""><a href="#" class="d-flex align-items-center"> <img src="images/1x/xchicken.png.pagespeed.ic.19DDE1201n.webp" alt="Image" class="img-fluid"  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> <span>Lunch</span></a></li>
              <li data-index="3" class=""><a href="#" class="d-flex align-items-center"> <img src="images/1x/xhotdog.png.pagespeed.ic._X4fVEJ3u1.webp" alt="Image" class="img-fluid" data-pagespeed-url-hash="2455913026" onload="pagespeed.CriticalImages.checkImageForCriticality(this);"/> <span>Dinner</span></a></li>
              </ul>
            </div>
            
        </div>
        <div className="col-lg-9"> 
        <Cards/>
        </div>
      </div>
        
    </div>
  )
}

export default Main
