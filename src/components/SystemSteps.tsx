import './SystemSteps.css';
import RevealSection from './RevealSection';

const steps = [
  {
    num: '01',
    title: '예약',
    desc: '전화로 날짜·인원·예산을 알려주시면, 담당이 가격과 진행 방식을 미리 안내드립니다. 현장에서 당황할 일 없도록 사전에 모든 내용을 정리해드려요.',
  },
  {
    num: '02',
    title: '룸 안내',
    desc: '도착하시면 담당이 직접 맞이하고 룸으로 안내합니다. 웨이터가 임의로 진행하는 일 없이, 처음 연락 주신 담당이 끝까지 함께합니다.',
  },
  {
    num: '03',
    title: '주류 선택',
    desc: '양주, 맥주, 와인, 논알콜 음료 등 주류 메뉴를 보시고 편하게 골라주세요. 가격은 메뉴판에 표기되어 있고, 별도 숨겨진 비용은 없습니다.',
  },
  {
    num: '04',
    title: '초이스',
    desc: '사전에 말씀해주신 선호 스타일과 분위기에 맞춰 담당이 추천을 도와드립니다. 마음에 들지 않으면 부담 없이 말씀해주세요. 강요는 절대 없습니다.',
  },
  {
    num: '05',
    title: '연장 · 마무리',
    desc: '기본 시간 이후 연장 여부는 자유롭게 결정하시면 됩니다. 연장 TC는 사전 안내된 금액 그대로 적용되고, 추가 청구 없이 깔끔하게 마무리됩니다.',
  },
];

const SystemSteps = () => (
  <section className="section section--alt" id="system" aria-label="강남 달토 이용 시스템">
    <div className="container">
      <RevealSection>
        <header className="section-head">
          <h2>강남 달토 이용 안내 — 5단계로 끝</h2>
          <p>
            처음이라 어떻게 진행되는지 모르겠다면, 아래 순서만 보시면 됩니다.
            복잡한 거 없습니다.
          </p>
        </header>
      </RevealSection>

      <ol className="steps" role="list">
        {steps.map((s, i) => (
          <RevealSection key={s.num} delay={i + 1}>
            <li className="step">
              <div className="step__num" aria-hidden="true">{s.num}</div>
              <div className="step__body">
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            </li>
          </RevealSection>
        ))}
      </ol>
    </div>
  </section>
);

export default SystemSteps;
