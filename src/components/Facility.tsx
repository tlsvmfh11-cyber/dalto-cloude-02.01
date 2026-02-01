import './Facility.css';
import RevealSection from './RevealSection';

const rooms = [
  { img: '/images/room-1.jpg', name: '소형 룸', cap: '2~4인', note: '1인·소규모 자리에 적합' },
  { img: '/images/room-2.jpg', name: '중형 룸', cap: '4~8인', note: '가장 많이 이용하는 룸' },
  { img: '/images/room-3.jpg', name: '대형 룸', cap: '8~15인', note: '단체 회식·모임용' },
  { img: '/images/room-4.jpg', name: 'VIP 룸', cap: '4~10인', note: '접대·비즈니스 자리' },
];

const features = [
  { label: '노래방 시스템', desc: '최신곡 업데이트. 마이크·음향 정비 상태 유지.' },
  { label: '음향·조명', desc: '룸별 개별 음향 조절. 분위기에 맞게 조명 변경 가능.' },
  { label: '청결 관리', desc: '매 이용 후 룸 정리·소독 진행. 화장실·공용 공간 수시 관리.' },
  { label: '독립된 공간', desc: '룸 간 방음 처리. 다른 손님과 마주칠 일 없는 동선.' },
];

const Facility = () => (
  <section className="section section--alt" id="rooms" aria-label="강남 달토 시설 및 룸 안내">
    <div className="container">
      <RevealSection>
        <header className="section-head">
          <h2>강남 달토 시설 · 룸 안내</h2>
          <p>과장 없이 실제 시설 기준으로 안내드립니다</p>
        </header>
      </RevealSection>

      <div className="facility__rooms" role="list">
        {rooms.map((r, i) => (
          <RevealSection key={i} delay={i + 1}>
            <article className="facility__room" role="listitem">
              <figure className="facility__img">
                <img
                  src={r.img}
                  alt={`강남 달토 가라오케 ${r.name} 내부 — ${r.cap} 수용`}
                  loading="lazy"
                  width="400"
                  height="280"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.classList.add('facility__img--ph');
                  }}
                />
                <span className="facility__cap">{r.cap}</span>
              </figure>
              <h3 className="facility__name">{r.name}</h3>
              <p className="facility__note">{r.note}</p>
            </article>
          </RevealSection>
        ))}
      </div>

      <div className="facility__features" role="list">
        {features.map((f, i) => (
          <RevealSection key={i} delay={i + 1}>
            <article className="facility__feat" role="listitem">
              <h3>{f.label}</h3>
              <p>{f.desc}</p>
            </article>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default Facility;
