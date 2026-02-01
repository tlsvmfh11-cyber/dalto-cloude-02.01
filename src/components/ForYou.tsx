import './ForYou.css';
import RevealSection from './RevealSection';

const cases = [
  {
    title: '회식 · 단체 모임',
    desc: '팀 회식, 동창 모임 등 단체석도 룸 단위로 깔끔하게 세팅됩니다. 인원수에 맞는 룸을 안내드려요.',
  },
  {
    title: '접대 · 비즈니스',
    desc: '거래처 접대나 비즈니스 자리에서 신경 쓸 부분을 담당이 미리 체크합니다. 어색한 상황 없이 매끄럽게 진행됩니다.',
  },
  {
    title: '1인 혼자 방문',
    desc: '혼자 오셔도 전혀 어색하지 않습니다. 1인 손님도 많고, 담당이 처음부터 옆에서 안내드리니까 부담 갖지 마세요.',
  },
  {
    title: '처음 방문하는 분',
    desc: '강남 가라오케가 처음이라 어떻게 해야 할지 모르겠다면, 예약 전화에서 진행 방식부터 가격까지 다 설명드립니다.',
  },
];

const ForYou = () => (
  <section className="section" id="foryou" aria-label="강남 달토 이용 대상 안내">
    <div className="container">
      <RevealSection>
        <header className="section-head">
          <h2>이런 분들이 찾아오십니다</h2>
          <p>상황에 맞게 진행 방식을 조정해드립니다</p>
        </header>
      </RevealSection>

      <div className="foryou__grid">
        {cases.map((c, i) => (
          <RevealSection key={i} delay={i + 1}>
            <article className="card foryou__card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </article>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default ForYou;
