import './Footer.css';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container footer__inner">
      <span className="footer__logo">강남 달토 가라오케</span>
      <address className="footer__addr">
        서울특별시 강남구 강남대로 OOO길 OO, OO빌딩 B1층
      </address>
      <p className="footer__biz">
        대표: OOO &nbsp;|&nbsp; 사업자등록번호: 000-00-00000 &nbsp;|&nbsp; TEL: <a href="tel:01023033778">010-2303-3778</a>
      </p>
      <p className="footer__copy">&copy; 2025 강남 달토. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
