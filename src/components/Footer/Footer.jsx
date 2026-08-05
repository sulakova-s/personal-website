import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copy">&copy; {currentYear} Sentyabrina</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
