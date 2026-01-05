import "./../UI/footer.css";

export const Footers=()=>{
    return (
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <div className="footer-contact">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>probestern@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>#91.7726287800</span>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#student">Student Profiles</a></li>
            <li><a href="#industry">Industry Profiles</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Pages</h3>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#discussion">Discussion Forum</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-title">Connect with Us</h3>
          <div className="social-icons">
            <a href="#google" className="social-icon">G</a>
            <a href="#linkedin" className="social-icon">in</a>
            <a href="#facebook" className="social-icon">f</a>
            <a href="#instagram" className="social-icon">📷</a>
            <a href="#twitter" className="social-icon">🐦</a>
            <a href="#youtube" className="social-icon">▶</a>
          </div>
        </div>
      </div>
    </footer>
    )
};

