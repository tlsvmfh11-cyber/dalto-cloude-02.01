import './Hero.css';

const Hero = () => (
  <section className="hero" id="hero" aria-label="강남 달토 가라오케 메인">
    <div className="hero__overlay" aria-hidden="true" />
    <div className="container hero__content">
      <p className="hero__badge">강남역 도보 5분 · <span className="keyword-glow">가라오케</span> · 룸 노래방</p>

      <h1 className="hero__title">
        <span className="keyword-glow">강남 달토</span>
      </h1>
      <p className="hero__sub">
        처음 오시는 분도 부담 없도록,<br />
        가격·<strong className="keyword-glow">초이스</strong>·진행 방식을 예약 단계에서 미리 안내드립니다.<br />
        <strong>24시간 전화 상담</strong> — 궁금한 건 오기 전에 다 물어보세요.
      </p>

      <ul className="hero__points" aria-label="강남 달토 핵심 특징">
        <li>내상 없는 정찰제</li>
        <li>담당이 끝까지 직접 진행</li>
        <li>1인 방문 환영</li>
        <li>24시간 연중무휴</li>
      </ul>

      <div className="hero__cta">
        <a href="tel:01023033778" className="btn btn--gold" aria-label="강남 달토 전화 예약 010-2303-3778">전화 예약 · 010-2303-3778</a>
        <a href="#system" className="btn btn--outline">이용 안내 보기</a>
      </div>
    </div>
  </section>
);

export default Hero;
