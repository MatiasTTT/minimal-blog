function App() {
  return (
    <main
      className="page"
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <style>{styles}</style>
      <article className="article">
        <header className="hero reveal" style={{ "--delay": "80ms" }}>
          <h1>"Tekoäly" joka ei ole tekoäly.</h1>
        </header>

        <figure className="feature reveal" style={{ "--delay": "130ms" }}>
          <img
            src={import.meta.env.BASE_URL + "blogikuva.jpeg"}
            alt="Blogiin liittyvä kuva [kuva on tuotettu tekoälyllä]"
            loading="lazy"
          />
          <figcaption className="caption">Blogin viitekuva on luotu käyttäen tekoälyä</figcaption>
        </figure>

        {/* --- SISÄLTÖ ALKAA --- */}
        <section className="section reveal" style={{ "--delay": "180ms" }}>
          <p>
            Jos olet viime kuukausina kuullut sanan{" "}
            <em>
              <a
                href="https://course.elementsofai.com/fi/1/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                tekoäly
              </a>
            </em>{" "}
            vilahtelevan keskusteluissa, uutisissa ja koulutehtävissä vähän joka
            välissä, et ole yksin. Erityisesti kouluympäristössä suuret kielimallit
            ovat levinneet arkeen niin nopeasti, että niitä käytetään usein jo
            rutiininomaisesti – ilman että pysähdytään miettimään, mitä ne oikeasti
            ovat.
          </p>

          <p>
            Tässä kohtaa moni tekee huomaamattaan pienen oikaisun: kaikkea
            “älykästä” kutsutaan tekoälyksi. Todellisuudessa iso osa arjen
            tekoälysovelluksista on tarkemmin sanottuna{" "}
            <em>
              <a
                href="https://doi.org/10.3390/app15148103"
                target="_blank"
                rel="noopener noreferrer"
              >
                suuria kielimalleja
              </a>
            </em>
            – eli järjestelmiä, jotka on rakennettu nimenomaan kielen tuottamiseen
            ja käsittelyyn.
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "230ms" }}>
          “Tekoäly” on kattotermi – kielimalli vain yksi osa sitä
        </h2>

        <section className="section reveal" style={{ "--delay": "280ms" }}>
          <p>
            <em>
              <a
                href="https://course.elementsofai.com/fi/1/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Helsingin yliopisto
              </a>
            </em>{" "}
            esittää tekoälyn ennen kaikkea laajana kattokäsitteenä. Tekoäly ei ole
            yksi yksittäinen ohjelma tai sovellus, vaan kokonainen tieteenala,
            jonka alle kuuluu joukko erilaisia menetelmiä ja lähestymistapoja.
          </p>

          <p>
            Tämän kokonaisuuden sisällä puhutaan esimerkiksi koneoppimisesta ja sen
            osa-alueesta syväoppimisesta. Juuri syväoppimiseen perustuvat
            järjestelmät ovat se tekninen perusta, johon monet nykyiset
            “tekoälytyökalut” nojaavat.
          </p>

          <p>
            Vuonna 2025{" "}
            <em>
              <a
                href="https://doi.org/10.1093/haschl/qxaf243"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sun ja kumppanit
              </a>
            </em>{" "}
            määrittelivät tekoälyjärjestelmät ihmisen rakentamiksi järjestelmiksi,
            jotka käsittelevät dataa ja hyödyntävät laskennallisia malleja
            tuottaakseen ratkaisuja asetettuihin tavoitteisiin. Tämä määritelmä
            auttaa hahmottamaan, miksi tekoäly ei ole yksi asia – vaan kokonainen
            työkalupakki.
          </p>

          <p>
            Kun katse käännetään kielimalleihin,{" "}
            <em>
              <a
                href="https://doi.org/10.21801/ppcrj.2023.91.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Almarien ja kumppaneiden
              </a>
            </em>{" "}
            vuonna 2023 julkaisema artikkeli kuvaa suuret kielimallit tekoälyn
            muotona, joka on koulutettu valtavilla tekstiaineistoilla tuottamaan
            luonnollista kieltä muistuttavaa tekstiä. He painottavat erityisesti
            sitä, että kyse on kapeasta tekoälystä – ei yleisälystä, joka
            “ymmärtäisi” maailmaa ihmisen tavoin.
          </p>

          <p>
            Sama rajaus näkyy myös Elements of AI -materiaaleissa: tämän päivän
            tekoälyjärjestelmät sijoittuvat kaikki kapean tekoälyn piiriin. Ne ovat
            hyviä juuri siinä tehtävässä, johon ne on suunniteltu – mutta eivät
            sen enempää.
          </p>

          <p>
            Kielimalleja voi kuitenkin tarkastella myös toisesta kulmasta.{" "}
            <em>
              <a
                href="https://doi.org/10.3390/app15148103"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peykani ja kumppanit
              </a>
            </em>{" "}
            korostavat vuonna 2025 julkaistussa katsauksessaan mallien
            tilastollista luonnetta: kielimallit ennustavat todennäköisiä sanajonoja
            valtavien tekstimäärien perusteella, eivätkä varsinaisesti “ymmärrä”
            sisältöä samalla tavalla kuin ihminen.
          </p>

          <p>
            Toisaalta{" "}
            <em>
              <a
                href="https://doi.org/10.7150/ijms.111780"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yu ja kumppanit
              </a>
            </em>{" "}
            tarkastelevat kielimalleja ennen kaikkea niiden suorituskyvyn ja
            sovellettavuuden kautta. Heidän mukaansa mallien valtava
            parametrimäärä ja massiivinen koulutusdata selittävät, miksi sama
            kielimalli pystyy hoitamaan monenlaisia kielellisiä tehtäviä.
          </p>

          <p>
            Kun nämä näkökulmat yhdistää, syntyy aika selkeä kuva: suuri osa
            arkisesta “tekoälystä” on oikeasti kielimalleja. Ne ovat tehokkaita,
            vaikuttavia ja hyödyllisiä – mutta eivät koko tekoälyn kenttä. Näin voidaankin lopettaa
            sanoen että sanoilla on väliä.
            <br></br>
            <br></br>
          </p>
        </section>
        {/* --- SISÄLTÖ PÄÄTTYY --- */}

        <hr className="reveal" style={{ "--delay": "980ms" }} />

        <section className="section reveal" style={{ "--delay": "1030ms" }}>
          <h2>Lukuvinkit ja lähteet</h2>
          <p>
            Jos haluat kurkata aihetta vähän syvemmälle (tai tarkistaa, mihin tässä viittaan),
            nämä ovat tärkeimmät taustalähteet:
          </p>
            <ul>
              <li>
                <a
                  href="https://doi.org/10.21801/ppcrj.2023.91.1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 1:</strong>
                </a>{" "}
                Almarie ym. (2023): The use of large language models in science
              </li>

              <li>
                <a
                  href="https://course.elementsofai.com/fi/1/1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 2:</strong>
                </a>{" "}
                Helsingin yliopisto &amp; MinnaLearn – Miten tekoäly määritellään?
              </li>

              <li>
                <a
                  href="https://course.elementsofai.com/fi/1/2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 3:</strong>
                </a>{" "}
                Helsingin yliopisto &amp; MinnaLearn – Muita aihepiirejä
              </li>

              <li>
                <a
                  href="https://course.elementsofai.com/fi/1/3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 4:</strong>
                </a>{" "}
                Helsingin yliopisto &amp; MinnaLearn – Tekoälyn filosofiaa
              </li>

              <li>
                <a
                  href="https://doi.org/10.3390/app15148103"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 5:</strong>
                </a>{" "}
                Peykani ym. (2025): Large Language Models
              </li>

              <li>
                <a
                  href="https://doi.org/10.1093/haschl/qxaf243"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 6:</strong>
                </a>{" "}
                Sun ym. (2025): Toward an operational definition of artificial intelligence
              </li>

              <li>
                <a
                  href="https://doi.org/10.7150/ijms.111780"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Linkki 7:</strong>
                </a>{" "}
                Yu ym. (2025): Large Language Models in Medicine
              </li>
            </ul>


          <hr className="reveal" style={{ "--delay": "1100ms" }} />

          <p>
            <strong>
              <br></br>
              Tekoälyä (Google Nano Banana Pro) käytettiin viitekuvan luontii, sekä (OpenAI GPT-5.2) käytettiin artikkelin valmistelussa kielenhuollon osalta 🙂.
            </strong>
            <br></br><br></br>
            Tarkka kielenhuollon prompti:{" "}
            <em>Tarkistatko aiemmin tuottamani tekstin läpi ja korjaat kielelliset virheet?</em><br></br><br></br>
            Tarkka kuvanluonnin prompti:{" "}
            <em>A colorful, playful cartoon-style illustration showing artificial intelligence as a simple-minded robot. The robot has visible cartoon brain inside a transparent dome head and is repeatedly bumping into a solid wall, its wheels spinning enthusiastically. Right next to the robot is an open door that it completely ignores. The scene is humorous and ironic, clearly showing lack of understanding rather than intelligence. Bright, cheerful colors, whimsical shapes, soft outlines, and a friendly illustration style. No humans, no realistic elements. Clean, light background. No text, no letters, no numbers.</em>
          </p>
        </section>
      </article>
    </main>
  );
}



const styles = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Instrument+Serif:ital,opsz@0,7..12;1,7..12&display=swap');

:host {
  display: block;
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

.page {
  --ink: #201b16;
  --muted: #5d524a;
  --accent: #1f6f6d;
  --accent-soft: rgba(31, 111, 109, 0.18);
  --card: #fffaf1;
  --stroke: #eadfce;
  --shadow: 0 35px 80px rgba(31, 24, 18, 0.14);
  min-height: 100vh;
  padding: clamp(2.5rem, 4vw, 4.5rem) 1.25rem 5rem;
  background:
    radial-gradient(1200px 520px at 12% -20%, #e6f2f0 0%, rgba(230, 242, 240, 0) 60%),
    radial-gradient(1100px 520px at 88% -30%, #fde7d1 0%, rgba(253, 231, 209, 0) 55%),
    linear-gradient(160deg, #f5f0e7 0%, #fdf7ef 45%, #f0f6f4 100%);
  color: var(--ink);
  font-family: "Instrument Sans", sans-serif;
  line-height: 1.7;
  letter-spacing: 0.01em;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.article {
  max-width: 760px;
  margin: 0 auto;
  padding: clamp(2.1rem, 4vw, 4rem);
  background: var(--card);
  border: 1px solid var(--stroke);
  border-radius: 28px;
  box-shadow: var(--shadow);
  position: relative;
  isolation: isolate;
  overflow: hidden;
  animation: bloom 0.9s ease both;
}

.article::before {
  content: "";
  position: absolute;
  inset: -40% -10% auto -10%;
  height: 260px;
  background: radial-gradient(circle at 20% 30%, rgba(31, 111, 109, 0.18), rgba(31, 111, 109, 0) 70%);
  z-index: 0;
}

.article::after {
  content: "";
  position: absolute;
  inset: auto -20% -35% -20%;
  height: 240px;
  background: radial-gradient(circle at 70% 40%, rgba(253, 210, 168, 0.5), rgba(253, 210, 168, 0) 70%);
  z-index: 0;
}

.article > * {
  position: relative;
  z-index: 1;
}

.hero {
  text-align: center;
  margin-bottom: 2.2rem;
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
}

.hero h1 {
  font-family: "Instrument Serif", serif;
  font-size: clamp(2.2rem, 3.8vw, 3.4rem);
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin: 0;
  text-wrap: balance;
}

.feature {
  margin: 2rem 0 2.5rem;
}

.feature img {
  width: 100%;
  display: block;
  border-radius: 18px;
  border: 1px solid var(--stroke);
  box-shadow: 0 22px 50px rgba(31, 24, 18, 0.14);
}

.caption {
  margin-top: 0.9rem;
  text-align: center;
  color: var(--muted);
  font-size: 0.95rem;
  font-style: italic;
}

.section {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  color: var(--ink);
  max-width: 68ch;
  margin-left: auto;
  margin-right: auto;
}

.section p {
  margin: 0 0 1rem;
}

.section p:last-child {
  margin-bottom: 0;
}

.article h2,
.article h3 {
  max-width: 68ch;
  margin-left: auto;
  margin-right: auto;
}

.article h2 {
  margin-top: 2.6rem;
  margin-bottom: 1rem;
  font-family: "Instrument Serif", serif;
  font-size: clamp(1.5rem, 2.4vw, 2rem);
  line-height: 1.2;
  position: relative;
  padding-left: 1.2rem;
}

.article h2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0.4rem var(--accent-soft);
}

.article h3 {
  margin-top: 2.8rem;
  text-align: center;
  font-family: "Instrument Serif", serif;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--ink);
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  animation: rise 0.8s ease forwards;
  animation-delay: var(--delay, 0ms);
}

@keyframes bloom {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes rise {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .article {
    animation: none;
  }

  .reveal {
    opacity: 1;
    transform: none;
    animation: none;
  }
}

@media (max-width: 700px) {
  .page {
    padding: 2rem 1rem 3.5rem;
  }

  .article {
    border-radius: 22px;
    padding: 2rem 1.5rem;
  }

  .article h2 {
    padding-left: 1rem;
  }
}
`;

export default App;
