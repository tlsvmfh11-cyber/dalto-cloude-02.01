import './PriceInfo.css';
import RevealSection from './RevealSection';

const items = [
  {
    label: '주대 (기본 주류 세트)',
    desc: '양주(위스키) 기본 세트 및 맥주·음료·기본 안주가 포함된 정찰 가격입니다. 메뉴판에 금액이 투명하게 표기되어 있습니다.',
    price: '160,000원',
  },
  {
    label: '룸티 (룸 이용료)',
    desc: '룸 크기 및 인원수에 상관없이 룸당 1회 적용되는 기본 룸 이용료입니다. 프라이빗 룸 세팅이 포함됩니다.',
    price: '50,000원',
  },
  {
    label: 'T/C (테이블 차지)',
    desc: '초이스 진행 시 매니저 1인당 발생하는 기본 시간 기준 비용입니다. 인원수에 맞춰 정직하게 계산됩니다.',
    price: '120,000원',
  },
  {
    label: '연장 T/C',
    desc: '기본 시간 이후 추가 연장 시 발생하는 비용입니다. 연장 여부는 전적으로 자유이며 사전에 안내드립니다.',
    price: '150,000원',
  },
];

const headcountPrices = [
  {
    people: '1인 방문 (혼술·1인 독고)',
    breakdown: '주대 160,000 + 룸티 50,000 + T/C 120,000 (1인)',
    total: '330,000원',
    perPerson: '330,000원',
    badge: '1인 환영',
  },
  {
    people: '2인 방문',
    breakdown: '주대 160,000 + 룸티 50,000 + T/C 240,000 (2인)',
    total: '450,000원',
    perPerson: '225,000원',
    badge: '인기 구성',
  },
  {
    people: '3인 방문',
    breakdown: '주대 160,000 + 룸티 50,000 + T/C 360,000 (3인)',
    total: '570,000원',
    perPerson: '190,000원',
    badge: '가성비 추천',
  },
  {
    people: '4인 방문',
    breakdown: '주대 160,000 + 룸티 50,000 + T/C 480,000 (4인)',
    total: '690,000원',
    perPerson: '172,500원',
    badge: '단체 최다 이용',
  },
];

const PriceInfo = () => (
  <section className="section section--alt" id="price" aria-label="강남 달토 가격 안내">
    <div className="container">
      <RevealSection>
        <header className="section-head">
          <h2>강남 달토 가격 구성 · 정찰제 안내</h2>
          <p>
            주대 160,000원 · 룸티 50,000원 · T/C 120,000원 · 연장 T/C 150,000원<br />
            숨겨진 비용 없이 항목별 정찰 금액과 1인~4인 인당 계산표를 투명하게 공개합니다.
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
        <div className="price__calc-wrap">
          <div className="price__calc-head">
            <h3>인원별 총 견적 및 1인당 부담 금액 (1인 ~ 4인 기준)</h3>
            <p>기본 주대 1병(16만) + 룸티(5만) + 인원수별 T/C(인당 12만) 합산 기준</p>
          </div>

          <div className="price__table-scroll">
            <table className="price__table" aria-label="강남 달토 1인~4인 인당 가격 계산표">
              <caption className="sr-only">강남 달토 가라오케 1인부터 4인까지 인원별 총 금액 및 1인당 가격 안내표</caption>
              <thead>
                <tr>
                  <th scope="col">방문 인원</th>
                  <th scope="col">세부 산출 내역 (주대 + 룸티 + T/C)</th>
                  <th scope="col">총 합계 금액</th>
                  <th scope="col">1인당 금액 (N분의 1)</th>
                </tr>
              </thead>
              <tbody>
                {headcountPrices.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="price__people-cell">
                        <strong>{row.people}</strong>
                        <span className="price__tag">{row.badge}</span>
                      </div>
                    </td>
                    <td className="price__breakdown-cell">{row.breakdown}</td>
                    <td className="price__total-cell">{row.total}</td>
                    <td className="price__per-cell">
                      <strong>인당 {row.perPerson}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="price__calc-footnote">
            ※ 4인 방문 시 기본 1병 기준 인당 <strong>172,500원</strong>이며, 주류 1병 추가(160,000원) 시 총 850,000원(1인당 <strong>212,500원</strong>)입니다.
          </p>
        </div>
      </RevealSection>

      <RevealSection>
        <aside className="price__notice" aria-label="가격 안내 참고사항">
          <p>
            모든 가격은 <strong>사전 안내된 정찰 금액 그대로 진행</strong>되며 현장 바가지나 강요가 절대 없습니다.<br />
            방문 인원과 원하시는 주류 구성을 말씀해주시면 전화 상담 시 <strong>정확한 총액과 인당 금액을 1원 단위까지</strong> 미리 정리해드립니다.<br />
            24시간 예약·견적 문의: <a href="tel:01074036998"><strong>010-7403-6998</strong></a>
          </p>
        </aside>
      </RevealSection>
    </div>
  </section>
);

export default PriceInfo;
