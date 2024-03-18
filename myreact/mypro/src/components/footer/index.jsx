import React from 'react'
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h5>Copyright &copy; 2024 - Design By İbrahim Sağlam</h5>

            <span> <a href="https://instagram.com"> <img src="https://icons.iconarchive.com/icons/icons8/ios7/128/Logos-Instagram-icon.png">
            </img></a></span>           
            <span><a href="https://www.linkedin.com"> <img src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Linkedin-2-icon.png"></img> </a></span>
            <span><a href="https://github.com"> <img src="https://icons.iconarchive.com/icons/artcore-illustrations/artcore-4/24/github-icon.png"></img>  </a></span>
            <span> <a href="https://replit.com"> <img src="https://icons.iconarchive.com/icons/simpleicons-team/simple/24/replit-icon.png">
            </img></a></span>
         
         

        </div>
        
        <div className="col-md-7">
          <h5>Contact Us</h5>
          <span>Motobike Street </span>
          <span>Konya/Turkey-</span>
          <span>Email:konyamotors@gmail.com-</span>
          <span>Phone:+90 111 222 33</span>
        </div>
      </div>
    </div>
    </footer >
  )
}

export default Footer;
