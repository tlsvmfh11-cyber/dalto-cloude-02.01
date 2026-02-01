import './PriceInfo.css';
import RevealSection from './RevealSection';

const items = [
  {
    label: '주대 (주류비)',
    desc: '양주·맥주·와인 등 선택한 주류에 따라 달라집니다. 메뉴판에 금액이 표기되어 있고, 주문 전에 가격을 확인하실 수 있습니다.',
    price: '₩OOO,OOO ~',
  },
  {
    label: '룸티 (룸 이용료)',
    desc: '룸 크기와 이용 시간에 따른 기본 이용료입니다. 인원수에 맞는 룸을 안내드립니다.',
    price: '₩OOO,OOO ~',
  },
  {
    label: 'TC (테이블 차지)',
    desc: '초이스 진행 시 발생하는 비용입니다. 기본 시간(보통 2시간) 기준이며, 인원에 따라 달라집니다.',
    price: '₩OOO,OOO ~',
  },
  {
    label: '연장 TC',
    desc: '기본 시간 이후 연장 시 추가되는 비용입니다. 연장 여부는 자유이며, 연장 전에 금액을 다시 안내드립니다.',
    price: '₩OOO,OOO ~ / 1시간',
  },
];

const PriceInfo = () => (
  <section className="section section--alt" id="price" aria-label="강남 달토 가격 안내">
    <div className="container">
      <RevealSection>
        <header className="section-head">
          <h2>강남 달토 가격 구성</h2>
          <p>
            어디에 얼마가 들어가는지, 항목별로 정리했습니다.
            "총 얼마예요?"보다 구성을 아시는 게 더 중요합니다.
          </p>
        </header>
      </RevealSection>

      <div className="price__list" role="list">
        {items.map((item, i) => (
          <RevealSection key={i} delay={i + 1}>
            <article className="card price__item" role="listitem">
              <div className="price__top">
                <h3 className="price__label">{item.label}</h3>
                <span className="price__amount" aria-label={`가격 ${item.price}`}>{item.price}</span>
              </div>
              <p className="price__desc">{item.desc}</p>
            </article>
          </RevealSection>
        ))}
      </div>

      <RevealSection>
        <aside className="price__notice" aria-label="가격 안내 참고사항">
          <p>
            요일·시간대·인원에 따라 금액이 달라질 수 있습니다.<br />
            예약 시 조건을 말씀해주시면 <strong>방문 전에 구체적인 금액을 안내</strong>드리고,
            현장에서도 동일 조건으로 진행합니다.<br />
            안내받은 금액 외에 추가 청구는 없습니다.
          </p>
        </aside>
      </RevealSection>
    </div>
  </section>
);

export default PriceInfo;
