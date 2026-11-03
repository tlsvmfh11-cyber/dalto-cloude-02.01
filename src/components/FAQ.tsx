import { useState } from 'react';
import './FAQ.css';
import RevealSection from './RevealSection';

const faqs = [
  {
    q: '강남 달토 가격(주대·룸티·TC)과 1인~4인 인당 금액은 얼마인가요?',
    a: '정찰제 기준 주대 160,000원, 룸티 50,000원, T/C 120,000원, 연장 T/C 150,000원입니다. 기본 1병 세트 기준 총액 및 인당 금액은 ▲1인 방문 총 330,000원(인당 330,000원) ▲2인 방문 총 450,000원(인당 225,000원) ▲3인 방문 총 570,000원(인당 190,000원) ▲4인 방문 총 690,000원(인당 172,500원)입니다.',
  },
  {
    q: '강남 달토 정확한 위치와 영업시간은 어떻게 되나요?',
    a: '서울 강남구 역삼동 604-11 삼정호텔 달토에 위치해 있습니다. 영업시간과 전화 상담(010-7403-6998) 모두 365일 24시간 연중무휴로 운영됩니다.',
  },
  {
    q: '강남 달토 내상(바가지) 걱정되는데, 괜찮은가요?',
    a: '예약 시 안내받은 정찰 금액(주대 16만·룸티 5만·TC 12만) 그대로 진행됩니다. 현장에서 추가 청구하거나 몰래 올려 받는 일 없습니다. 가격이 궁금하시면 010-7403-6998로 먼저 확인해보세요.',
  },
  {
    q: '혼자(1인) 가도 되나요?',
    a: '네, 1인 손님도 많습니다. 1인 방문 시 주대(16만) + 룸티(5만) + T/C(12만) 합산 총 330,000원으로 깔끔하게 이용 가능하며, 인원에 맞게 룸과 진행을 세팅해드립니다.',
  },
  {
    q: '예약 없이 바로 가도 되나요?',
    a: '가능은 하지만, 예약하고 오시는 걸 권장합니다. 예약하시면 대기 없이 원하는 룸과 시간을 확보할 수 있고, 가격·진행 방식도 미리 정리되니까 현장에서 훨씬 편합니다.',
  },
  {
    q: '초이스는 어떻게 진행되나요?',
    a: '사전에 선호 스타일을 말씀해주시면 담당이 추천을 도와드립니다. 현장에서 직접 보시고 결정하시면 되고, 마음에 안 들면 부담 없이 말씀해주세요. 강요하는 분위기는 없습니다.',
  },
  {
    q: '결제는 어떻게 하나요? 카드·주차 가능한가요?',
    a: '현금, 카드, 계좌이체 모두 가능하며 이용 종료 후 정산 내역을 확인하신 뒤 결제하시면 됩니다. 삼정호텔 내 넓은 주차장 및 발렛 이용이 가능해 차량 방문도 편리합니다.',
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
