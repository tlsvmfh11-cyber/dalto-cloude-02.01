import { useState } from 'react';
import './FAQ.css';
import RevealSection from './RevealSection';

const faqs = [
  {
    q: '강남 달토 내상(바가지) 걱정되는데, 괜찮은가요?',
    a: '예약 시 안내받은 금액 그대로 진행됩니다. 현장에서 추가 청구하거나 몰래 올려 받는 일 없습니다. 가격이 궁금하시면 전화로 먼저 확인해보세요.',
  },
  {
    q: '혼자(1인) 가도 되나요?',
    a: '네, 1인 손님도 많습니다. 오히려 혼자 오시는 분이 편하게 즐기시는 경우가 많아요. 인원에 맞게 룸과 진행을 세팅해드립니다.',
  },
  {
    q: '예약 없이 바로 가도 되나요?',
    a: '가능은 하지만, 예약하고 오시는 걸 권장합니다. 예약하시면 원하는 룸과 시간을 확보할 수 있고, 가격·진행 방식도 미리 정리되니까 현장에서 훨씬 편합니다.',
  },
  {
    q: '초이스는 어떻게 진행되나요?',
    a: '사전에 선호 스타일을 말씀해주시면 담당이 추천을 도와드립니다. 현장에서 직접 보시고 결정하시면 되고, 마음에 안 들면 부담 없이 말씀해주세요. 강요하는 분위기는 없습니다.',
  },
  {
    q: '결제는 어떻게 하나요? 카드 되나요?',
    a: '현금, 카드, 계좌이체 모두 가능합니다. 결제 시점은 이용 종료 후이며, 정산 내역을 확인하신 뒤 결제하시면 됩니다.',
  },
  {
    q: '추가 비용이 나오는 경우가 있나요?',
    a: '연장하시거나 주류를 추가 주문하시면 그만큼 비용이 추가됩니다. 그 외에 숨겨진 비용은 없고, 추가 발생 시 사전에 말씀드립니다.',
  },
  {
    q: '주차 가능한가요?',
    a: '건물 내 주차장 이용 가능합니다. 주차 여건은 예약 시 안내드립니다.',
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section" id="faq" aria-label="강남 달토 자주 묻는 질문">
      <div className="container">
        <RevealSection>
          <header className="section-head">
            <h2>자주 묻는 질문</h2>
            <p>방문 전에 궁금한 점, 미리 확인하세요</p>
          </header>
        </RevealSection>

        <dl className="faq__list">
          {faqs.map((f, i) => (
            <RevealSection key={i} delay={Math.min(i + 1, 5)}>
            <div
              className={`faq__item ${openIdx === i ? 'faq__item--open' : ''}`}
            >
              <dt>
                <button
                  className="faq__q"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="faq__arrow" aria-hidden="true">{openIdx === i ? '−' : '+'}</span>
                </button>
              </dt>
              {openIdx === i && (
                <dd className="faq__a" id={`faq-answer-${i}`}>{f.a}</dd>
              )}
            </div>
            </RevealSection>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
