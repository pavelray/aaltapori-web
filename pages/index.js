import Image from "next/image";
import { Fragment } from "react";
import Gallary from "../components/business/Gallary/Gallary";
import Button from "../components/ui/button/Button";
import ScrollDown from "../components/ui/ScrollDown/ScrollDown";
import styles from "../styles/Home.module.css";
import { WEB_LINK } from "../utils/constants";

export default function Home() {
  return (
    <Fragment>
      <div className={styles.hero}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <span>আলতাপরী</span>
          </div>
          <div className={styles.navRight}>
            <Button href="#contact" text="Contact" type="link" />
          </div>
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroHeading}>Aaltapori</p>
          <p className={styles.heroSubheading}>
            Jayanti Bazar, West Bengal, India
          </p>
        </div>
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.contentTitle}>
          Welcome to Aaltapori
          <br /> &quot;A home away home&quot;
        </div>
        <div className={styles.contentSubtitle}>
          Come experience this beautiful homestay at Jayanti.
        </div>
      </div>
      <div className={[styles.contentBlock].join(" ")}>
        <div className={[styles.contentSubtitle,styles.textUpperCase].join(" ")}>Our Rooms</div>
        <Gallary />
      </div>
      <div className={[styles.contentBlock, styles.blockSecondary].join(" ")}>
        <div className={[styles.contentSubtitle, styles.textUpperCase].join(" ")}>Our Services</div>
        <div className={styles.features}>
          <div className={styles.featureBox}>
            <span className="material-symbols-outlined">local_parking</span>
            <div className={styles.featureTitle}>Free Parking</div>
            <div className={styles.featureDesc}>
              This charming home stay features complimentary parking for
              guests&apos; convenience.
            </div>
          </div>
          <div className={styles.featureBox}>
            <span className="material-symbols-outlined">room_service</span>
            <div className={styles.featureTitle}>Room Services</div>
            <div className={styles.featureDesc}>
              Enjoy the convenience of in-room dining with our 24-hour room
              service option.
            </div>
          </div>
          <div className={styles.featureBox}>
            <span className="material-symbols-outlined">visibility</span>
            <div className={styles.featureTitle}>View</div>
            <div className={styles.featureDesc}>
              Experience breathtaking views from the comfort of your room at our
              scenic home stay.
            </div>
          </div>
          <div className={styles.featureBox}>
            <span className="material-symbols-outlined">forest</span>
            <div className={styles.featureTitle}>Jungle Safari</div>
            <div className={styles.featureDesc}>
              Embark on an adventure with our jungle safari experiences,
              available for guests at our home stay.
            </div>
          </div>
        </div>
      </div>
      <div className={[styles.contentBlock].join(" ")}>
        <div className={[styles.contentSubtitle,styles.textUpperCase].join(" ")}>
          We can&apos;t wait to see you. <br />
          <p className={styles.subheading}>
            Nightly rates from &#8377;1900 per night.
          </p>
        </div>
        <div className={styles.contactForm}>
          <input
            type="text"
            value=""
            placeholder="Your Name"
            className={styles.inputBox}
          />
          <input
            type="text"
            value=""
            placeholder="Contact Number"
            className={styles.inputBox}
          />
          <textarea
            value=""
            placeholder="Message"
            className={styles.inputBox}
          ></textarea>
          <div className="btn-container">
            <Button type="button" text="Enquire Now !" />
          </div>
        </div>
      </div>
      <div className={[styles.contentBlock, styles.blockSecondary].join(" ")}>
        <div className={[styles.contentSubtitle, styles.textUpperCase].join(" ")}>
          What our guest says about us
        </div>
        <div className={styles.features}>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://lh3.googleusercontent.com/a-/AD5-WCnp-MLc1nOkL73nHwkXVwdYRilZHOpA6PRlUDCP=w60-h60-p-rp-mo-ba3-br100"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>WONDERFUL WORLD</div>
                <div>5/5</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                This is a great place in Jayanti to stay with your family.
                Homestay owner Mr Pradip Dey and his son Rajdeep both are very
                helpful. They can guide you and can make a perfect plan for your
                trip. Their behavior is very nice. We visited the place and we
                are very much satisfied. Altapori homestay is highly
                recommended.
              </p>
            </div>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://lh3.googleusercontent.com/a-/AD5-WCnfTQqxE9UtsvanybFmmvOhWuf_BKHRcHnMa4pmyQ=w36-h36-p-c0x00000000-rp-mo-br100"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>Medha Bhattacharjee</div>
                <div>5/5</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                Very good homestay , value for money and all the arrangements .
                Thank you Altapori.
              </p>
            </div>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://lh3.googleusercontent.com/a-/AD5-WClZ4eEv_BStpv639rroEyeXgjdCG63OG9Z9LQpaNoo=w36-h36-p-c0x00000000-rp-mo-br100"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>Rajib Sengupta</div>
                <div>5/5</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                One of the best homestay i have ever stayed. Excellent
                hospitality with homely atmosphere. It's a perfect example of a
                homestay. Highly recommend. Mr Pradip Dey and his family....
                They are really admirable.
              </p>
            </div>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://lh3.googleusercontent.com/a-/AD5-WCnts3ISwQvqOZoDbZrNE-RootAn7R695fjQZ4Vg3Q=w36-h36-p-c0x00000000-rp-mo-br100"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>ANIMESH SAHA</div>
                <div>5/5</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                We had a great experience at Altapori homestay. All the staffs
                over there are very nice and friendly. Food quality was
                excellent. Our tour was completed smoothly. Also It is a very
                budget friendly homestay. Special thanks to Mr Rajdeep dey and
                his father Mr Prodip Dey. Highly recommended.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.marginTopMax}>
          <Button
            href={WEB_LINK}
            target="_blank"
            rel="noreferrer"
            type="link"
            text="View All Reviews"
          />
        </div>
      </div>
      <div className={styles.contentBlock} id="contact">
        <div className={styles.contentSubtitle}>
          <span className="material-symbols-outlined loc-icon">pin_drop</span>
          <br />
          Jayanti Bazar, West Bengal 735227
          <br />
          <br />
          <span class="material-symbols-outlined">call</span>
          <br />
          081018 30794
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14257.181369378402!2d89.6110576!3d26.7030102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe2156aaa91eba05!2sAaltapori%20Homestay!5e0!3m2!1sen!2sin!4v1674551403560!5m2!1sen!2sin"
          style={{ border: 0 }}
          width="100%"
          height="500px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Fragment>
  );
}
