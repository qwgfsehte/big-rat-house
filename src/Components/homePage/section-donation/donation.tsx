import './donation.scss';

export function SectionDonation() {
  return (
    <section className="section-donation">
      <div className="donation-container">
        <img src="/donation-section.png" alt="" className="donation-img" />
        <div className="donation-description">
          <h2 className="donation-title">You can also make a donation</h2>
          <p className="donation-subtitle">
            Name of the bank / Type of bank account
          </p>
          <div className="card-donation">
            <img
              src="/icons/credit-card.png"
              alt="credit-card"
              className="card-img"
            />
            <p className="card-number">9283 5621 4037 1946 3578</p>
          </div>
          <p className="donation-info">
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}
