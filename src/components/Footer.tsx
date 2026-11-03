import './Footer.css';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container footer__inner">
      <span className="footer__logo">강남 달토 가라오케</span>
      <address className="footer__addr">
        서울 강남구 역삼동 604-11 삼정호텔 달토
      </address>
      <p className="footer__biz">
        상호: 강남 달토 (삼정호텔 달토) &nbsp;|&nbsp; 영업·상담: 24시간 연중무휴 &nbsp;|&nbsp; TEL: <a href="tel:01074036998">010-7403-6998</a>
      </p>
      <p className="footer__copy">&copy; 2025 강남 달토. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
