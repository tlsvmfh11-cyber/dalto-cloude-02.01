import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`hdr ${scrolled ? 'hdr--solid' : ''}`} role="banner">
      <div className="container hdr__inner">
        <a href="#" className="hdr__logo" aria-label="강남 달토 가라오케 홈">강남 달토</a>

        <nav className={`hdr__nav ${open ? 'hdr__nav--open' : ''}`} role="navigation" aria-label="메인 내비게이션">
          <a href="#system" onClick={close}>이용 안내</a>
          <a href="#choice" onClick={close}>초이스</a>
          <a href="#price" onClick={close}>가격</a>
          <a href="#rooms" onClick={close}>시설</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="tel:01023033778" className="hdr__cta" onClick={close} aria-label="전화 예약 010-2303-3778">전화 예약</a>
        </nav>

        <button
          className={`hdr__burger ${open ? 'hdr__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
