import "./home.css";
import { useState } from "react";
import Navbar from "../Components/Navbar/navbar";
import MobileNavbar from "../Components/MobileNavbar/mobilenavbar";
import Logo from "../Components/logo";
import Button from "../Components/Button/button";
import robotImg from "../assets/Robot.png";
import headerEle1 from "../assets/header_ele1.png";
import headerEle2 from "../assets/header_ele2.png";
import sec2Img from "../assets/sec2.png";
import sec3Card1 from "../assets/sec3_card1.png";
import sec3Card2 from "../assets/sec3_card2.png";
import sec3Card3 from "../assets/sec3_card3.png";
import sec3Card4 from "../assets/sec3_card4.png";
import sec6Im1 from "../assets/sec6_im1.png";
import sec6Im2 from "../assets/sec6_im2.png";
import sec6Im3 from "../assets/sec6_im3.png";
import sec6Im4 from "../assets/sec6_im4.png";
import sec6Im5 from "../assets/sec6_im5.png";
import sec6Im6 from "../assets/sec6_im6.png";
import sec6Im7 from "../assets/sec6_im7.png";
import sec6Im8 from "../assets/sec6_im8.png";
import sec8_1 from "../assets/sec8-1.png";
import sec8_2 from "../assets/sec8-2.png";
import sec8_3 from "../assets/sec8-3.png";
import sec8_4 from "../assets/sec8-4.png";
import sec8Img from "../assets/sec8.png";
import sec9Icon from "../assets/sec9_icon.png";
import sec10Img1 from "../assets/sec10_1.png";
import sec10Img2 from "../assets/sec10_2.png";
import sec10Img3 from "../assets/sec10_3.png";
import sec10Img4 from "../assets/sec10_4.png";
import sec10Img5 from "../assets/sec10_5.png";
import sec10Img6 from "../assets/sec10_6.png";
import sec10Img7 from "../assets/sec10_7.png";
import starImg from "../assets/star.png";
import sec1Icon from "../assets/sec1_Icon.png";


function Home() {
 const [activeFaq, setActiveFaq] = useState(null); 

 const faqItems = [
  {
    question: "How do I buy CoinShift tokens?",
    answer:
      "The official launch of CoinShift tokens. Prepare for a groundbreaking debut with extensive marketing and community engagement.",
  },
  {
    question: "Is CoinShift secure?",
    answer:
      "CoinShift prioritizes security through advanced encryption, secure smart contracts, and continuous monitoring to ensure a trusted ecosystem.",
  },
  {
    question: "What can I do with CoinShift tokens?",
    answer:
      "You can stake tokens, participate in governance, make marketplace purchases, and access future ecosystem utilities.",
  },
  {
    question: "How do I stake CoinShift tokens?",
    answer:
      "Connect your wallet, choose a staking pool, lock your tokens, and start earning rewards based on the selected plan.",
  },
  {
    question: "What is the CoinShift roadmap?",
    answer:
      "The roadmap includes token launch, exchange listings, ecosystem development, strategic partnerships, and global adoption initiatives.",
  },
  {
    question: "Can I participate in governance with CoinShift tokens?",
    answer:
      "Yes. Token holders can vote on proposals and contribute to important ecosystem decisions.",
  },
];

  return (
    <main className="home">
      <MobileNavbar />
      <Navbar />

      {/* sec1 */}
      <section id="home" className="home__hero" aria-label="CoinShift header section">
        <div className="home__hero-stage">
          <div className="home__headline" aria-label="CoinShift empowering the future of decentralized finance">
            <div className="home__headline-line home__headline-line--top">
              <span>CoinShift</span>
              <img className="home__accent-image home__accent-image--icon" src={sec1Icon} alt="" aria-hidden="true" />
              <span>Empowering the</span>
            </div>

            <div className="home__headline-line home__headline-line--middle">
              <span>Future of Decentralized</span>
            </div>

            <div className="home__headline-line home__headline-line--bottom">
              <span>Finance</span>
              <img className="home__accent-image home__accent-image--icon home__accent-image--icon--end" src={sec1Icon} alt="" aria-hidden="true" />
            </div>
          </div>

          {/* decorative header elements on either side */}
          <img className="home__header-ele home__header-ele--left" src={headerEle2} alt="" aria-hidden="true" />
          <img className="home__header-ele home__header-ele--right" src={headerEle1} alt="" aria-hidden="true" />

          <img className="home__star home__star_left" src={starImg} alt="" aria-hidden="true" />
          <img className="home__star home__star_right" src={starImg} alt="" aria-hidden="true" />

          <div className="home__cta">
            <Button label="Buy CoinShift" variant="primary" />
          </div>

          <div className="home__robot-wrap">
            <img className="home__robot" src={robotImg} alt="CoinShift robot mascot" />
          </div>

          
        </div>
      </section>


      {/* marquee */}
      <div className="home__marquee">
        <div className="home__marquee-track">
          <span>CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &nbsp;</span>
          <span>CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &bull; CoinShift &nbsp;</span>
        </div>
      </div>

      {/* sec2 */}
      <section className="home__content" aria-label="CoinShift overview">

        {/* Section outline wrapper */}
        <div id="about" className="home__section-outline home__section-outline--dark home__section-outline--top-up">
          <div className="home__section home__section--dark home__section--clipped">
            <div className="home__section-grid">
              <div className="home__section-visual">
                <img className="home__section-art" src={sec2Img} alt="CoinShift illustration" />
              </div>

              <div className="home__section-copy">
                
                <h2>About CoinShift</h2>
                <p>
                  CoinShift is a utility token designed to power the next generation of decentralized applications (dApps) and
                  digital finance solutions. Our mission is to provide a seamless, secure, and user-friendly ecosystem for users
                  and developers. By leveraging cutting-edge blockchain technology, CoinShift enables effortless token
                  swaps, staking, and real-time governance, all while ensuring the highest standards of security and transparency.
                </p>
                <p>
                  Whether you're a developer looking to build on our platform, a trader swapping tokens, or a user
                  participating in governance, CoinShift provides the tools needed for efficient, low-cost, and secure digital
                  transactions. Join us in shaping the future of finance with CoinShift – where innovation meets accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* sec3 */}
        <div id="features" className="home__section-outline home__section-outline--cards home__section-outline--top-down">
          <div className="home__section home__section--cards home__section--clipped">
            <div className="home__cards-inner">

              <h2 className="home__cards-heading">Key Features of CoinShift</h2>
              <div className="home__cards-grid">

  <article className="home__card home__card--top">
    <div className="home__card-content">
      <span className="home__card-badge">+</span>
      <div>
        <h3 className="home__card-title">Fast Transactions</h3>
        <p className="home__card-text">Experience lightning-fast transfers with minimal fees, ensuring every transfer is completed efficiently and at low cost.</p>
      </div>
    </div>
    <img className="home__card-image" src={sec3Card1} alt="Fast transactions illustration" />
  </article>

  <article className="home__card home__card--top">
    <div className="home__card-content">
      <span className="home__card-badge">+</span>
      <div>
        <h3 className="home__card-title">Decentralized Governance</h3>
        <p className="home__card-text">CoinShift empowers its community by enabling decentralized governance, voting on proposals and shaping the future platform.</p>
      </div>
    </div>
    <img className="home__card-image" src={sec3Card2} alt="Decentralized governance illustration" />
  </article>

  <article className="home__card home__card--bottom">
    <div className="home__card-content">
      <span className="home__card-badge">+</span>
      <div>
        <h3 className="home__card-title">Staking &amp; Rewards</h3>
        <p className="home__card-text">Stake your CoinShift tokens and earn passive rewards with competitive Annual Percentage Yields (APY) while contributing to network security.</p>
      </div>
    </div>
    <img className="home__card-image" src={sec3Card3} alt="Staking and rewards illustration" />
  </article>

  <article className="home__card home__card--bottom">
    <div className="home__card-content">
      <span className="home__card-badge">+</span>
      <div>
        <h3 className="home__card-title">Security</h3>
        <p className="home__card-text">CoinShift prioritizes security with advanced encryption, safeguarding tokens and data for a trusted DeFi environment.</p>
      </div>
    </div>
    <img className="home__card-image" src={sec3Card4} alt="Security illustration" />
  </article>

</div>
            </div>
          </div>
        </div>

        {/* sec4 */}
        <div id="tokenomics" className="home__section-outline home__section-outline--tokenomics home__section-outline--top-down">
          <div className="home__section home__section--tokenomics home__section--clipped">
            <div className="home__tokenomics-inner">
              <div className="home__tokenomics-copy">
                <h2>Tokenomics Overview</h2>
                <p>CoinShift’s tokenomics are designed to ensure a fair, sustainable, and rewarding ecosystem for all participants. The total supply of CoinShift tokens is 200 million, with 100 million in circulation. The token allocation reflects our commitment to community growth, security, and long-term development.</p>
              </div>

              <div className="home__tokenomics-stats">
                <div className="home__stat-badge">
                  <span className="home__stat-badge-icon">🗳️</span>
                  <span>Total Supply: 200 Million</span>
                </div>
                <div className="home__stat-badge">
                  <span className="home__stat-badge-icon">💎</span>
                  <span>Circulating Supply: 100 Million</span>
                </div>
              </div>

              <div className="home__tokenomics-grid">
                <article className="home__tokenomics-card home__tokenomics-card--top">
                  <div>
                    <h3>40% Community</h3>
                    <p>A large portion of the supply is dedicated to community engagement, rewards, and incentives to ensure active participation.</p>
                  </div>
                  <span className="home__tokenomics-badge">40%</span>
                </article>

                <article className="home__tokenomics-card home__tokenomics-card--top">
                  <div>
                    <h3>25% Staking</h3>
                    <p>A significant share is allocated to staking rewards, encouraging users to hold and participate in securing the network.</p>
                  </div>
                  <span className="home__tokenomics-badge">25%</span>
                </article>

                <article className="home__tokenomics-card home__tokenomics-card--bottom">
                  <div>
                    <h3>20% Team</h3>
                    <p>Reserved for the CoinShift development team and advisors, ensuring alignment with long-term goals of the project.</p>
                  </div>
                  <span className="home__tokenomics-badge">20%</span>
                </article>

                <article className="home__tokenomics-card home__tokenomics-card--bottom">
                  <div>
                    <h3>15% Partners</h3>
                    <p>Allocated for strategic partnerships and ecosystem growth, helping expand CoinShift's reach and adoption.</p>
                  </div>
                  <span className="home__tokenomics-badge">15%</span>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* sec5 */}
        <div id="staking" className="home__section-outline home__section-outline--staking home__section-outline--top-down">
          <div className="home__section home__section--staking home__section--clipped">
            <div className="home__staking-inner">
              <div className="home__staking-copy">
                <p className="home__section-label home__section-label--light">Earn with Staking</p>
                <h2>Earn with Staking</h2>
                <p>CoinShift offers a simple and rewarding staking program that allows you to earn passive income while helping secure the network.</p>
              </div>

              <div className="home__staking-benefits">
                <article className="home__benefit-card">
                  <h3>High-APY Options</h3>
                  <p>Earn higher rewards with flexible Annual Percentage Yield (APY) options, designed to suit different risk profiles and staking preferences.</p>
                </article>

                <article className="home__benefit-card">
                  <h3>Flexible Staking Periods</h3>
                  <p>Choose staking durations that work best for you, from short-term to long-term plans, giving you flexibility and strong yields.</p>
                </article>

                <article className="home__benefit-card">
                  <h3>Instant Reward Withdrawals</h3>
                  <p>Enjoy the freedom of withdrawing your staking rewards instantly, so your earnings remain accessible when you need them.</p>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* sec6 */}
        <div id="marketplace" className="home__section-outline home__section-outline--marketplace home__section-outline--top-down">
          <div className="home__section home__section--marketplace home__section--clipped">
            <div className="home__marketplace-inner">
            <div className="home__marketplace-copy">
              <p className="home__section-label home__section-label--light">CoinShift Marketplace</p>
              <h2>CoinShift Marketplace</h2>
              <p>The CoinShift Marketplace provides a seamless platform to buy, sell, and trade a wide range of digital goods and services.</p>
            </div>

            <div className="home__marketplace-grid">
              <article className="home__marketplace-card">
                <img src={sec6Im1} alt="Marketplace item 1" />
                <div>
                  <h3>PlayStation 5</h3>
                  <p>150$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im2} alt="Marketplace item 2" />
                <div>
                  <h3>Samsung Galaxy M36</h3>
                  <p>499$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im3} alt="Marketplace item 3" />
                <div>
                  <h3>Xiaomi Wireless Headset</h3>
                  <p>299$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im4} alt="Marketplace item 4" />
                <div>
                  <h3>DJI Mini 3 Pro</h3>
                  <p>399$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im5} alt="Marketplace item 5" />
                <div>
                  <h3>Piano</h3>
                  <p>150$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im6} alt="Marketplace item 6" />
                <div>
                  <h3>Keyboard</h3>
                  <p>49$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im7} alt="Marketplace item 7" />
                <div>
                  <h3>CCTV Camera</h3>
                  <p>299$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>

              <article className="home__marketplace-card">
                <img src={sec6Im8} alt="Marketplace item 8" />
                <div>
                  <h3>MSI Mouse</h3>
                  <p>39$</p>
                </div>
                <div className="home__marketplace-actions">
                  <button className="btn btn-secondary">Add to Cart</button>
                  <button className="btn btn-primary">Buy now</button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

        {/* sec7 */}
        <div id="roadmap" className="home__section-outline home__section-outline--roadmap home__section-outline--top-down">
          <div className="home__section home__section--roadmap home__section--clipped">
            <div className="home__roadmap-inner">
              <div className="home__roadmap-copy">
                <p className="home__section-label home__section-label--dark">CoinShift Roadmap</p>
                <h2>CoinShift Roadmap</h2>
                <p>
                  At CoinShift, we are committed to continuous growth and innovation. Our roadmap outlines the key milestones and objectives that will guide us through 2025 and beyond, ensuring that CoinShift evolves into a leading decentralized finance solution.
                </p>
              </div>

              <div className="home__roadmap-grid">
                <article className="home__roadmap-card home__roadmap-card--active home__roadmap-card--top">
                  <div className="home__roadmap-top">
                    <span>Q1 2025</span>
                    <h3>Token Launch</h3>
                  </div>
                  <p>The official launch of CoinShift tokens. Prepare for a groundbreaking debut with extensive marketing and community engagement.</p>
                </article>

                <article className="home__roadmap-card home__roadmap-card--top">
                  <div className="home__roadmap-top">
                    <span>Q2 2025</span>
                    <h3>Exchange Listings &amp; Community Growth</h3>
                  </div>
                  <p>Listing CoinShift tokens on major exchanges, expanding our global community, and fostering active user engagement.</p>
                </article>

                <article className="home__roadmap-card home__roadmap-card--bottom">
                  <div className="home__roadmap-top">
                    <span>Q3 2025</span>
                    <h3>Partnerships &amp; Ecosystem Development</h3>
                  </div>
                  <p>Forming strategic partnerships with other blockchain projects and further developing the CoinShift ecosystem for broader adoption.</p>
                </article>

                <article className="home__roadmap-card home__roadmap-card--bottom">
                  <div className="home__roadmap-top">
                    <span>Q4 2025</span>
                    <h3>Global Expansion &amp; Adoption</h3>
                  </div>
                  <p>Scaling CoinShift globally and expanding use cases across industries, from DeFi to NFTs and more.</p>
                </article>
              </div>
            </div>
          </div>
        </div>

        {/* sec8 */}
        <div id="community" className="home__section-outline home__section-outline--community home__section-outline--top-up">
          <div className="home__section home__section--community home__section--clipped">
            <div className="home__community-inner">
            <div className="home__community-copy">
              <p className="home__section-label home__section-label--light">Join the CoinShift Community</p>
              <h2>Join the CoinShift Community</h2>
              <p>
                Become a part of CoinShift's growing community of passionate users, developers, and innovators. Together,
                we're shaping the future of decentralized finance. Whether you're looking to engage in discussions, share insights,
                or get real-time updates, CoinShift provides a vibrant space for all.
              </p>
              <ul className="home__community-list">
                <li>Collaborate with Developers: Contribute to open-source projects and build on the CoinShift ecosystem.</li>
                <li>Stay Informed: Get the latest updates, news, and announcements directly from the CoinShift team.</li>
                <li>Connect with Like-minded Individuals: Join conversations with fellow enthusiasts, traders, and advocates.</li>
              </ul>
              <div className="home__community-actions">
                <img src={sec8_1} alt="Telegram" className="home__community-icon" />
                <img src={sec8_2} alt="X" className="home__community-icon" />
                <img src={sec8_3} alt="Medium" className="home__community-icon" />
                <img src={sec8_4} alt="Discord" className="home__community-icon" />
              </div>
            </div>

            <div className="home__community-image">
              <img src={sec8Img} alt="CoinShift community network illustration" />
            </div>
          </div>
        </div>
      </div>

        {/* sec9 */}
        <div id="faq" className="home__section-outline home__section-outline--faq home__section-outline--top-down">
          <div className="home__section home__section--faq home__section--clipped">
            <div className="home__faq-inner">
              <div className="home__faq-copy">
                <p className="home__section-label home__section-label--light">
                  Frequently Asked Questions
                </p>

                <h2>Frequently Asked Questions</h2>

                <p>
                  Everything you need to know about buying, staking, and using
                  CoinShift tokens.
                </p>
              </div>

              <div className="home__faq-list">
                {faqItems.map((item, index) => (
                  <article
                    key={index}
                    className={`home__faq-card ${
                      activeFaq === index ? "home__faq-card--open" : ""
                    }`}
                  >
                    <button
                      className="home__faq-question"
                      onClick={() =>
                        setActiveFaq(activeFaq === index ? null : index)
                      }
                    >
                      <span>{item.question}</span>

                      <img
                        src={sec9Icon}
                        alt=""
                        className={`home__faq-toggle ${
                          activeFaq === index
                            ? "home__faq-toggle--open"
                            : ""
                        }`}
                      />
                    </button>

                    {activeFaq === index && (
                      <div className="home__faq-answer">
                        {item.answer}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* sec10 – Partners */}
        <div id="partners" className="home__section-outline home__section-outline--partners home__section-outline--top-down">
          <div className="home__section home__section--partners home__section--clipped">
            <div className="home__partners-inner">

              {/* White card */}
              <div className="home__partners-card">
                <div className="home__partners-copy">
                  <h2>Our Trusted Partners</h2>
                  <p>
                    At CoinShift, we are proud to collaborate with some of the most reputable names in the blockchain and cryptocurrency industry.
                    Our strategic partnerships with leading blockchain projects, wallets, and exchanges ensure that you have access to a secure,
                    efficient, and globally connected ecosystem.
                  </p>
                  <p className="home__partners-list"> 
                    Blockchain Projects: Working with innovative projects to expand the CoinShift ecosystem. <br />
                    Exchanges: Partnering with major exchanges to ensure easy access to CoinShift tokens.<br />
                    Wallet Providers: Offering seamless wallet integration for CoinShift users.
                  </p>
                </div>

                <div className="home__partners-logos">
                  <img src={sec10Img1} alt="Ledger" />
                  <img src={sec10Img2} alt="Sushi" />
                  <img src={sec10Img3} alt="Uniswap" />
                  <img src={sec10Img4} alt="Kraken" />
                  <img src={sec10Img5} alt="Coinbase" />
                  <img src={sec10Img6} alt="Trust Wallet" />
                  <img src={sec10Img7} alt="Binance" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer className="home__footer">
        <div className="home__footer-inner">

          {/* Brand / Logo */}
          <div className="home__footer-brand">
            <Logo size={40} showText={true} />
          </div>

          {/* Quick Links */}
          <div className="home__footer-links">
            <p className="home__footer-heading">Quick links</p>
            <div className="home__footer-link-columns">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#tokenomics">Tokenomics</a></li>
              </ul>
              <ul>
                <li><a href="#staking">Staking &amp; Rewards</a></li>
                <li><a href="#marketplace">Marketplace</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
              <ul>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#partners">Partners</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="home__footer-social">
            <p className="home__footer-social-heading">Follow us on</p>
            <div className="home__footer-social-icons">
              <button className="home__footer-icon" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8 2.15L1.4 9.93c-1.3.5-1.29 1.2-.24 1.51l5.2 1.62 12.04-7.59c.57-.34 1.09-.16.66.22L8.54 15.59l-.44 5.37c.64 0 .93-.29 1.28-.63l3.07-2.98 6.38 4.71c1.18.65 2.02.31 2.32-1.09l4.2-19.8c.43-1.73-.66-2.51-2.57-2.02z" fill="currentColor"/>
                </svg>
              </button>
              <button className="home__footer-icon" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                </svg>
              </button>
              <button className="home__footer-icon" aria-label="Medium">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" fill="currentColor"/>
                </svg>
              </button>
              <button className="home__footer-icon" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        <div className="home__footer-bottom">
          <span>© 2025 Lyra. All Rights Reserved.</span>
        </div>
      </footer>
    </main>
  );
}

export default Home;
