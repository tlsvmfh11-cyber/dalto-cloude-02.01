import './Contact.css';
import RevealSection from './RevealSection';

const Contact = () => (
  <section className="section section--alt" id="contact" aria-label="강남 달토 예약 문의">
    <div className="container">
      <RevealSection>
        <div className="contact__inner">
          <h2>예약 · 문의</h2>
          <p className="contact__desc">
            가격, 초이스, 진행 방식 — 궁금한 건 뭐든 편하게 물어보세요.<br />
            전화 한 통이면 방문 전에 다 정리해드립니다.
          </p>

          <div className="contact__btns">
            <a href="tel:01074036998" className="btn btn--gold" aria-label="강남 달토 전화 예약 010-7403-6998">
              전화 예약 · 010-7403-6998
            </a>
          </div>

          <address className="contact__info">
            <p><strong>위치</strong> 서울 강남구 역삼동 604-11 삼정호텔 달토</p>
            <p><strong>영업</strong> 24시간 연중무휴</p>
            <p><strong>상담</strong> 24시간 연중무휴 (010-7403-6998)</p>
          </address>
        </div>
      </RevealSection>
    </div>
  </section>
);

export default Contact;
