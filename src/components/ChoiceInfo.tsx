import './ChoiceInfo.css';
import RevealSection from './RevealSection';

const cards = [
  {
    title: '사전 취향 확인',
    text: '예약 시 선호하시는 스타일이나 분위기를 간단히 말씀해주시면 됩니다. 외모, 성격, 대화 스타일 등 편하게 얘기해주세요. 구체적으로 안 정해져 있어도 괜찮습니다 — 담당이 맞춰서 추천드립니다.',
  },
  {
    title: '현장 진행',
    text: '룸에서 직접 보시고 결정하시면 됩니다. 마음에 들지 않으면 부담 없이 말씀해주세요. 억지로 권유하거나 분위기 압박하는 일은 없습니다. 처음 오신 분들도 편하게 진행하실 수 있도록 담당이 옆에서 도와드립니다.',
  },
  {
    title: '중간에 바꿀 수 있나요?',
    text: '네. 진행 도중에 분위기가 안 맞으면 담당에게 말씀해주세요. 교체도 가능하고, 추가 비용 발생 시 사전에 안내드립니다. 모든 과정에서 손님 동의 없이 진행되는 건 없습니다.',
  },
];

const ChoiceInfo = () => (
  <section className="section" id="choice" aria-label="강남 달토 초이스 안내">
    <div className="container">
      <RevealSection>
        <header className="section-head">
          <h2><span className="keyword-glow">초이스</span> 진행 방식</h2>
          <p>
            현장에서 눈치 보거나 급하게 고를 필요 없습니다.
            담당이 취향을 정리해서 추천드리는 방식입니다.
          </p>
        </header>
      </RevealSection>

      <div className="choice__grid">
        {cards.map((c, i) => (
          <RevealSection key={i} delay={i + 1}>
            <article className="card choice__card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default ChoiceInfo;
