import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          <h3 className="footer-title">For questions and suggestions</h3>
          <div className="footer-info">
            <img
              src="/src/assets/icons/email.png"
              alt="email-icon"
              className="footer-icon"
            />
            <a
              className="contacts"
              target="_blank"
              href="https://mail.google.com/"
              rel="noreferrer"
            >
              info@bigrathouse.org
            </a>
          </div>
          <div className="footer-info">
            <img
              src="/src/assets/icons/phone.png"
              alt="phone-icon"
              className="footer-icon"
            />
            <a className="contacts" href="tel:+15551234567">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
        <div className="footer-container">
          <h3 className="footer-title">We are waiting for your visit</h3>
          <div className="footer-info">
            <img
              src="/src/assets/icons/point.png"
              alt="point-icon"
              className="footer-icon"
            />
            <a className="contacts" href="ghfgh">
              123 Queen St W, Toronto, ON M5H 2M9, Canada
            </a>
          </div>
          <div className="footer-info">
            <img
              src="/src/assets/icons/point.png"
              alt="point-icon"
              className="footer-icon"
            />
            <a className="contacts" href="ghfgh">
              456 King St W, Toronto, ON M5V 1K4, Canada
            </a>
          </div>
        </div>
        <img src="/src/assets/footer.png" alt="" />
      </div>
    </footer>
  );
}
