import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <div className={styles.hero}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <span>আলতাপরী</span>
          </div>
          <div className={styles.navRight}>
            <a className={styles.btnSecondary} href="#contact">
              Contact
            </a>
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
      <div className={[styles.contentBlock, styles.blockSecondary].join(" ")}>
        <div className={styles.contentSubtitle}>Our Services</div>
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
      <div className={styles.contentBlock}>
        <div className={styles.contentSubtitle}>
          <span className="material-symbols-outlined loc-icon">pin_drop</span>
          <br />
          Jayanti Bazar, West Bengal 735227
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
      <div className={[styles.contentBlock, styles.blockSecondary].join(" ")}>
        <div className={styles.contentSubtitle}>
          What our guest says about us
        </div>
        <div className={styles.features}>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>Anzi Doye</div>
                <div>Date</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit
                amet consectetur sit amet consectetur adipisicing elit. Sit
                commodi quis perspiciatis veritatis excepturi est
              </p>
            </div>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>Anzi Doye</div>
                <div>Date</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit
                amet consectetur sit amet consectetur adipisicing elit. Sit
                commodi quis perspiciatis veritatis excepturi est
              </p>
            </div>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>Anzi Doye</div>
                <div>Date</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit
                amet consectetur sit amet consectetur adipisicing elit. Sit
                commodi quis perspiciatis veritatis excepturi est
              </p>
            </div>
          </div>
          <div className={styles.featureBox}>
            <div className={styles.profile}>
              <Image
                src="https://images.unsplash.com/photo-1648737965402-2b9c3f3eaa6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt=""
                width="50"
                height="50"
                className={styles.profileImage}
              />
              <div className={styles.bio}>
                <div>Anzi Doye</div>
                <div>Date</div>
              </div>
            </div>
            <div className={styles.qoute}>
              <p>
                Lorem ipsum dolor psum dolor sit amet consectetur psum dolor sit
                amet consectetur sit amet consectetur adipisicing elit. Sit
                commodi quis perspiciatis veritatis excepturi est
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
