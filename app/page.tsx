import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Diana and Nic's Obligatory Wedding Website</p>
      </div>

      <div className={styles.center}>
        <h1 style={{ marginBottom: "1em" }}>
          Diana and Nic's Beach Wedding Obligatory Website
        </h1>
        <Image
          className={styles.logo}
          src="/dnn_alt.jpg"
          alt="Next.js Logo"
          width={448}
          height={448}
          style={{ marginBottom: "1em" }}
          priority
        />
        <p>Oh hi, didn't see you there.</p>
        <br />
        <p>
          This is a wedding website. You may notice that it's not a terribly
          exciting one.
        </p>
        <br />
        <p>
          You see, as someone who works in software, I can tell you that wedding
          websites are a scam.
        </p>
        <br />
        <p>
          They scrape your data, sell it to advertisers, take a cut of any
          donations you get and generally are part of the wedding industrial
          complex.
        </p>
        <br />
        <p>Anyway, where were we?</p>
        <br />
        <p>Ah yes, a wedding website.</p>
        <br />
        <p>
          I made a wedding website because those corporate ones are evil but am
          lazy because this is my job and who wants to work when they're not
          working?
        </p>
        <br />
        <p>Here you will find some links to things that are important.</p>
        <br />
        <p>
          The wedding is happening on <b>March 23rd at 4pm</b> at the{" "}
          <b>
            <a
              href="https://maps.app.goo.gl/xhzcVK45BYPqzM4p7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marriott Stellaris Hotel and Casino in San Juan.
            </a>
          </b>
        </p>
        <br />
        <p>
          You can hover over that last part, it's a link, isn't that fancy? Good
          styling though I stole it from the default template.
        </p>
        <br />
        <p>
          Good software developers steal as much as possible don't you know.
        </p>
        <br />
        <p>
          Don't believe me, google{" "}
          <i>
            <a
              href="https://www.google.com/search?q=bill+gates+xerox+closet&rlz=1C5GCCM_en&oq=bill+gates+xerox+closet&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM4OTBqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              "bill gates xerox closet"
            </a>
          </i>
          , it's safe for work I assure you.
        </p>
        <br />
        <p>That last one was a link too, aren't I sneaky?</p>
        <br />
        <p>Anyway, a wedding website.</p>
        <br />
        <p>Below are some links.</p>
        <br />
        <p>
          <b>In terms of gifts, we don't want "things" for gifts.</b> We live in
          Queens in a 1BR.
        </p>
        <br />
        <p>
          We stack things from Costco on top of other things or inside things
          and try to negotiate between us whose closet things go in.
        </p>
        <br />
        <h3>
          So below. please find some options for how to give to our wedding.
        </h3>
        <br />
        <ul>
          <li style={{ marginBottom: "1em" }}>
            <h3 style={{ marginBottom: ".5em" }}>
              You could give us some money which is cool
            </h3>
            <p>
              <i>
                <a
                  href="https://account.venmo.com/u/feitelogram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>We have a Venmo</b>
                </a>{" "}
                and
                <a
                  href="https://paypal.me/feitelogram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b> a PayPal</b>
                </a>{" "}
                and this money will help us have a fun time on our honeymoon and
                not worry about how to secretly charge things to my soon-to-be in-laws.
              </i>
            </p>
          </li>
          <li style={{ marginBottom: "1em" }}>
            <h3 style={{ marginBottom: ".5em" }}>
              You could book us a fancy restaurant or a play/experience.
            </h3>
            <p style={{ marginBottom: ".3rem" }}>
              <i>
                We're going to <b>London from the night of 4/3-7</b> and{" "}
                <b>Paris from 4/7-11</b> for our honeymoon and don't have much
                planned other than flights and hotels.
              </i>
            </p>
            <p style={{ marginBottom: ".3rem" }}>
              <i>
                If you wanted to be "fancy",{" "}
                <b>you could find us something cool to do or great to eat</b>,{" "}
                <a
                  href="https://calendar.google.com/calendar/embed?src=64cdc3bc4e9467b07a3187a303d0d5c562df880b579c4ebb1768c053f7bdbbc6%40group.calendar.google.com&ctz=America%2FNew_York"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>check our wedding calendar to make sure we're free</b>
                </a>{" "}
                and{" "}
                <a
                  href="mailto:nicholas.feitel@gmail.com;dpeter10@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>email us about it and pay for it/book it for us</b>
                </a>
                .
              </i>
            </p>
            <p style={{ marginBottom: ".3rem" }}>
              <i>
                We love plays, circus and burlesque acts, fancy or funky
                restaurants.{" "}
                <a
                  href="mailto:federfeitel.lisa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>
                    My mom has also made herself available to help with
                    recommendations.
                  </b>
                </a>
              </i>
            </p>
            <p style={{ marginBottom: ".3rem" }}>
              <i>
                Or here's{" "}
                <a
                  href="https://guide.michelin.com/us/en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>
                    the Michelin guide if you wanted to pick a fancy restaurant
                    in Europe.
                  </b>
                </a>
              </i>
            </p>
          </li>
          <li style={{ marginBottom: "1em" }}>
            <h3 style={{ marginBottom: ".5em" }}>
              <a
                href="mailto:nicholas.feitel@gmail.com;dpeter10@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                You could send us a nice note either way
              </a>
            </h3>
            <p>
              <i>
                <a
                  href="mailto:nicholas.feitel@gmail.com;dpeter10@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>We'd love to hear from you</b>, your thoughts and wishes
                  for us on our special day.
                </a>
              </i>
            </p>
          </li>
        </ul>
        <p>
          <b>***</b>
        </p>
        <br />
        <p>
          Anyway, thanks for reading this anti-imperialist jumbled-together
          wedding website.
        </p>
        <br />
        <p>
          <b>
            We're so happy you're part of our lives and want to be a part of our
            wedding.
          </b>
        </p>
        <br />
        <p>
          <b>Please see below for some helpful links.</b>
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://maps.app.goo.gl/xhzcVK45BYPqzM4p7"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Venue <span>-&gt;</span>
          </h2>
          <p>
            Get directions to the venue or use the location to figure out where
            to stay nearby.
          </p>
        </a>

        <a
          href="https://calendar.google.com/calendar/embed?src=64cdc3bc4e9467b07a3187a303d0d5c562df880b579c4ebb1768c053f7bdbbc6%40group.calendar.google.com&ctz=America%2FNew_York"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Calendar <span>-&gt;</span>
          </h2>
          <p>
            If you're planning on booking something fun for us, check our
            calendar to see when a good available time might be!
          </p>
        </a>

        <a
          href="https://account.venmo.com/u/feitelogram"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Venmo <span>-&gt;</span>
          </h2>
          <p>Feel free to Venmo us a gift towards our honeymoon fund.</p>
        </a>

        <a
          href="https://paypal.me/feitelogram"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Paypal <span>-&gt;</span>
          </h2>
          <p>
            Feel free to Paypal us a donation towards a fun play or fancy meal
            on our honeymoon.
          </p>
        </a>

        <a
          href="mailto:nicholas.feitel@gmail.com;dpeter10@gmail.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Email <span>-&gt;</span>
          </h2>
          <p>
            Questions? Concerns? Want to send us a nice note? Shoot us an email
            and we'll sync up about it. We'd love to hear from you.
          </p>
        </a>
        <a
          href="https://guide.michelin.com/us/en/greater-london/restaurants"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Restaurants <span>-&gt;</span>
          </h2>
          <p>
            Looking for inspiration? Take a look at the "Bib Gourmand" or 1-star
            restuarants in London or Paris!
          </p>
        </a>
        <a
          href="https://www.theguardian.com/stage/stage+tone/reviews"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            London Plays <span>-&gt;</span>
          </h2>
          <p>
            The most current plays on and off the West End reviewed in the
            Guardian.
          </p>
        </a>
        <a
          href="https://www.timeout.com/paris/en/things-to-do"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Paris Attractions <span>-&gt;</span>
          </h2>
          <p>
            A list of things to do in Paris to inspire inclduing food tours and
            art experiences.
          </p>
        </a>
      </div>
    </main>
  );
}
