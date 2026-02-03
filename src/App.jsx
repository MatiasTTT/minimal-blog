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
          <h1>"Tekoäly" joka ei ole tekoäly: mitä ihmettä ne kielimallit oikeasti tekee?</h1>
        </header>

        <figure className="feature reveal" style={{ "--delay": "130ms" }}>
          <img
            src={import.meta.env.BASE_URL + "blogikuva.jpg"}
            alt="Blogiin liittyvä kuva [kuva on tuotettu tekoälyllä]"
            loading="lazy"
          />
          <figcaption className="caption">Blogin viitekuva on luotu käyttäen tekoälyä</figcaption>
        </figure>

        <section className="section reveal" style={{ "--delay": "180ms" }}>
          <p>
            Jos seuraa yleistä keskustelua (tai ihan vaan koulun käytäviä ja ryhmätöiden WhatsApp-ketjuja), voi aika huoletta
            sanoa, että nykypäivänä "tekoäly" on käytännössä levinnyt jo lähes jokaisen tiedon tuottamisen tai tekstin
            käsittelyn kanssa tekemisissä olevan henkilön tietoisuuteen – ja usein myös päivittäiseen käyttöön.
            Samaisiin havaintoihin perustuen voidaan yhtä lailla todeta, että harva kuitenkaan pysähtyy miettimään, että se
            "tekoäly", jonka kanssa he vaikuttavat, on usein nimenomaan suuri kielimalli (LLM) eikä mikään yleinen
            “kaikki osaa kaikkea” -äly. Arkikielessä “tekoäly” toimii kätevänä kattoterminä, vaikka tutkimus- ja opetuskontekstissa
            tekoäly viittaa laajempaan kenttään ja kielimallit ovat vain yksi sen osa (Helsingin yliopisto & MinnaLearn, i.a.-a; i.a.-b; Peykani ym., 2025).
          </p>
          <p>
            Tässä blogitekstissä avaan suurten kielimallien ideaa kevyesti (mutta kuitenkin asiantuntijan näkökulmasta),
            ja samalla yritän purkaa yhtä ehkä tärkeintä asiaa: miksi kielimalli voi kuulostaa vakuuttavalta,
            vaikka se ei oikeasti “ymmärrä” kuten ihminen ymmärtää (Peykani ym., 2025).
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "230ms" }}>
          Miksi "tekoäly" on vähän harhaanjohtava sana?
        </h2>

        <section className="section reveal" style={{ "--delay": "280ms" }}>
          <p>
            Aloitetaan siitä, mitä tekoäly yleensä tarkoittaa vähän täsmällisemmin. Yksi käyttökelpoinen tapa ajatella asiaa on,
            että tekoälyjärjestelmät ovat ihmisen rakentamia järjestelmiä, jotka käsittelevät dataa (sekä jäsenneltyä että jäsentymätöntä)
            ja hyödyntävät laskennallisia malleja tuottaakseen tietoa tai ratkaisuja asetettujen tavoitteiden saavuttamiseksi
            (Sun ym., 2025). Tällä määrittelytasolla “tekoäly” on siis aika laaja sateenvarjo.
          </p>
          <p>
            Sama näkyy myös siinä, miten tekoäly esitellään opetuksellisissa lähteissä: tekoäly nähdään tietojenkäsittelytieteen
            alana, jonka alle kuuluu laaja joukko menetelmiä – ja esimerkiksi koneoppiminen ja syväoppiminen ovat sen osa-alueita
            (Helsingin yliopisto & MinnaLearn, i.a.-b).
          </p>
          <p>
            Ja se “juju” arjen kannalta: monet työkalut, joista puhutaan yleiskielessä tekoälynä, ovat käytännössä syväoppimiseen
            perustuvia suuria kielimalleja, jotka on erikoistettu luonnollisen kielen käsittelyyn (Peykani ym., 2025; Yu ym., 2025).
            Ne ovat tekoälyä – mutta eivät “tekoäly” siinä mielessä, että ne olisivat joku yleisäly tai ihmisen kaltainen ajattelija.
          </p>
          <p>
            Tähän liittyy yksi hyödyllinen tarkennus: iso osa lähteistä korostaa, että kielimallit ovat nimenomaan kapeaa tekoälyä.
            Ne ovat hyviä tietyssä rajatussa tehtäväjoukossa (kieli), mutta eivät kaikkivoipia. Tätä painottaa esimerkiksi
            Almarie ja kumppanit (2023), ja sama linja näkyy myös opetuksellisissa määritelmissä: tämän päivän tekoälyjärjestelmät
            sijoitetaan kapean tekoälyn piiriin (Helsingin yliopisto & MinnaLearn, i.a.-c; Almarie ym., 2023).
          </p>
          <p>
            Tässä tulee se klassinen kognitiivinen ansa: sana tekoäly luo helposti vaikutelman siitä, että malli olisi “älykäs”
            samalla tavalla kuin ihminen. Moni katsaus kuitenkin korostaa kielimallien tilastollista luonnetta: ne tuottavat
            kieltä hyödyntämällä suurista tekstiaineistoista opittuja rakenteita ja säännönmukaisuuksia – mutta se on eri asia
            kuin inhimillinen ymmärrys (Peykani ym., 2025).
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "330ms" }}>
          "Seuraavan tokenin ennustaminen" – eli miten se vastaus syntyy?
        </h2>

        <section className="section reveal" style={{ "--delay": "380ms" }}>
          <p>
            Käytännön tasolla kielimallin toiminta voidaan tiivistää näin: se rakentaa tekstin pala palalta ennustamalla,
            mikä sana (tai sananosa) sopii seuraavaksi annettuun kontekstiin. Tätä kuvataan usein nimenomaan “seuraavan
            tokenin ennustamisena”, ja siksi malli voi tuottaa sujuvaa ja uskottavaa tekstiä ilman, että sillä olisi
            ihmisen kaltaista ymmärrystä sisällöstä (Peykani ym., 2025).
          </p>
          <p>
            Tämä on se kohta, jossa monelle tulee pieni "hetkinen"-fiilis: jos malli vain ennustaa seuraavaa palasta tekstiä,
            miten se voi kuulostaa niin loogiselta ja asiantuntevalta?
          </p>
          <p>
            Vastaus on samaan aikaan yksinkertainen ja vähän ärsyttävä: koska se on harjoitellut kieltä valtavalla määrällä tekstiä
            ja oppinut, miltä eri tekstilajit kuulostavat. Se osaa muotoilla, rytmittää, rakentaa perusteluja ja käyttää retorisia
            siirtymiä – eli se osaa kielen “pinnan” todella hyvin (Peykani ym., 2025).
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "430ms" }}>
          Miksi se voi silti olla väärässä (ja välillä todella itsevarmasti)?
        </h2>

        <section className="section reveal" style={{ "--delay": "480ms" }}>
          <p>
            Tästä päästään ehkä yhteen tärkeimmistä käytännön pointeista: vaikka mallin tuottama teksti voi vaikuttaa johdonmukaiselta,
            mallit eivät “tiedä” totta ja tarua samalla tavalla kuin ihminen. Ne voivat tuottaa uskottavaa tekstiä myös silloin,
            kun taustalla oleva tieto on virheellistä, puutteellista tai jopa kokonaan keksittyä – ja tämä on yksi suurten kielimallien
            keskeisistä rajoitteista (Peykani ym., 2025).
          </p>
          <p>
            Tämän voi huomata käytännössä monessa mutkassa mallien tuotosten osalta, mutta toisinaan se vaatii harjaantunutta silmää.
            Ja mikä pahinta: ne virheet eivät aina ole räikeitä, vaan usein juuri niitä "melkein oikein" -virheitä, jotka menevät läpi
            kiireessä.
          </p>
          <p>
            Pieni arkinen esimerkki (ja tämä on oikeasti tapahtunut useammin kuin olisi psykologisesti terveellistä myöntää):
            kysyt mallilta lähdettä johonkin väitteeseen, se antaa viitteen, joka näyttää täysin uskottavalta – ja kun tarkistat,
            sitä ei ole olemassa. Tämä ilmiö tunnetaan yleisesti “hallusinaationa”, ja se on yksi syy siihen, miksi lähteiden
            tarkistus on käytännössä pakollinen osa järkevää käyttöä (Peykani ym., 2025).
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "530ms" }}>
          Miksi nämä mallit sitten ovat niin hyödyllisiä?
        </h2>

        <section className="section reveal" style={{ "--delay": "580ms" }}>
          <p>Nyt joku voi ajatella: "No eihän tuota voi käyttää mihinkään, jos se voi olla väärässä."</p>
          <p>
            Mutta tässä kohtaa kannattaa erottaa kaksi asiaa: <br />
            1. Kielimalli ei ole totuusautomaatti. <br />
            2. Kielimalli on erittäin tehokas kielityökalu. <br />
            Teknisemmällä tasolla suuria kielimalleja kuvataan usein järjestelmiksi, joissa on valtava määrä parametreja ja jotka on
            koulutettu erittäin laajoilla tekstiaineistoilla – ja juuri tämä mittakaava tekee niistä yllättävän monikäyttöisiä
            kielellisissä tehtävissä (Yu ym., 2025).
          </p>
          <p>
            Käytännössä tämä näkyy siinä, että ne ovat hyviä esimerkiksi: tekstin luonnostelussa, rakenteen selkeyttämisessä,
            vaihtoehtoisten muotoilujen ehdottamisessa, tiivistämisessä, ideoinnissa ja kieliasun hiomisessa (Yu ym., 2025).
          </p>
          <p>
            Ja jos ollaan rehellisiä: monelle se suurin hyöty ei ole se, että "tekoäly kirjoitti esseen", vaan se, että "pääsin yli
            tyhjän paperin kammosta" tai "sain rungon, jota pystyin parantamaan".
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "630ms" }}>
          Miten se oppii (ja miksi sillä ei ole "kokemusta")?
        </h2>

        <section className="section reveal" style={{ "--delay": "680ms" }}>
          <p>
            Yksi keskeinen idea monissa moderneissa kielimalleissa on kaksivaiheinen oppiminen: ensin “esikoulutus” valtavalla määrällä
            yleistekstiä ja sen jälkeen mallin muokkaaminen tiettyihin tehtäviin tai käyttötarkoituksiin. Tätä pidetään tärkeänä syynä
            siihen, miksi sama perusmalli voi taipua niin monenlaiseen kielelliseen työhön (Yu ym., 2025).
          </p>
          <p>
            Mutta vaikka tämä voi kuulostaa ihmisen oppimiselta, se ei ole sitä. Mallit eivät opi sosiaalisessa maailmassa, eivätkä ne
            rakenna “kokemusta” samalla tavalla kuin ihminen. Ne oppivat datasta löytyviä kielellisiä säännönmukaisuuksia, ja siksi
            niiden tuottama kielen sujuvuus voi hämätä: hyvä kieli ei automaattisesti tarkoita ymmärrystä (Peykani ym., 2025).
          </p>
          <p>
            Tämä on hyvä muistaa etenkin silloin, kun malli alkaa kuulostaa siltä kuin se "tajuaa sinut". Se voi osua sävyyn,
            koska sävy on opittu tekstistä. Mutta se ei ole sama asia kuin kokemus.
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "730ms" }}>
          Kolme käytännön sääntöä, joilla vältät yleisimmät sudenkuopat
        </h2>

        <section className="section reveal" style={{ "--delay": "780ms" }}>
          <p>
            Jos pitäisi tiivistää koko homma yhteen käyttöohjeeseen, se olisi tämä: käytä kielimallia kuin supernopeaa
            kirjoituskumppania, älä kuin erehtymätöntä tietolähdettä. Ja siitä seuraa aika suoraan nämä: <br />
            <br />
            1. Tarkista faktat, lähteet ja numerot – varsinkin jos aiot viitata tai lainata (Peykani ym., 2025). <br />
            2. Pyydä perusteluja ja vaihtoehtoja, mutta älä oleta että perustelu = totuus (Peykani ym., 2025). <br />
            3. Käytä sitä prosessiin, ei lopputuotteeseen: luonnos, rakenne, ideat, kielenhuolto = usein hyvä (Yu ym., 2025). <br />
          </p>
        </section>

        <h2 className="reveal" style={{ "--delay": "830ms" }}>
          Lopuksi: se tärkein oppi (ja ehkä pieni asennemuutos)
        </h2>

        <section className="section reveal" style={{ "--delay": "880ms" }}>
          <p>
            Kun suurten kielimallien ja tekoälyn käsitteet erottaa toisistaan, huomataan yleensä kaksi asiaa yhtä aikaa:
            1) mallit ovat oikeasti hyödyllisiä ja 2) niiden vakuuttavuus on juuri se syy, miksi niitä pitää käyttää oikein.
            Tärkeimpänä oppina lukijan olisi hyvä muistaa, että kun arkikielessä puhutaan "tekoälystä", tarkoitetaankin usein
            suuria kielimalleja – ja “tekoäly”-nimi voi tuottaa vinouman, että taustalla olisi jotain ihmisen kaltaista älyä
            (Helsingin yliopisto & MinnaLearn, i.a.-b; Peykani ym., 2025).
          </p>
          <p>
            Todellisuudessa kyse on kapean tekoälyn kielijärjestelmistä, jotka tuottavat tekstiä opittujen kielellisten
            säännönmukaisuuksien pohjalta – ilman ihmisen kaltaista ymmärrystä (Helsingin yliopisto & MinnaLearn, i.a.-c; Almarie ym., 2023; Peykani ym., 2025).
            Ja paradoksaalisesti: kun tämän sisäistää kunnolla, mallit muuttuvat usein entistä hyödyllisemmiksi, koska niitä lakkaa
            käyttämästä väärään tarkoitukseen.
            <br /><br />
          </p>
        </section>

        <hr className="reveal" style={{ "--delay": "980ms" }} />

        <section className="section reveal" style={{ "--delay": "1030ms" }}>
          <h2>Lukuvinkit ja lähteet</h2>
          <p>
            Jos haluat kurkata aihetta vähän syvemmälle (tai tarkistaa, mihin tässä viittaan), nämä ovat tärkeimmät taustalähteet:
          </p>
          <ul>
            <li>
              <em>
                <a href="https://doi.org/10.3390/app15148103" target="_blank" rel="noopener noreferrer">
                  Peykani ym. (2025): Large Language Models: A Structured Taxonomy and Review of Challenges, Limitations, Solutions, and Future Directions.
                </a>
              </em>
            </li>
            <li>
              <em>
                <a href="https://doi.org/10.7150/ijms.111780" target="_blank" rel="noopener noreferrer">
                  Yu ym. (2025): Large Language Models in Medicine: Applications, Challenges, and Future Directions.
                </a>
              </em>
            </li>
            <li>
              <em>
                <a href="https://doi.org/10.1093/haschl/qxaf243" target="_blank" rel="noopener noreferrer">
                  Sun ym. (2025): Toward an operational definition of artificial intelligence for health care informatics: A Delphi survey.
                </a>
              </em>
            </li>
            <li>
              <em>
                <a href="https://doi.org/10.21801/ppcrj.2023.91.1" target="_blank" rel="noopener noreferrer">
                  Almarie ym. (2023): The use of large language models in science: Opportunities and challenges.
                </a>
              </em>
            </li>
            <li>
              <em>
                <a href="https://course.elementsofai.com/fi/1/1" target="_blank" rel="noopener noreferrer">
                  Helsingin yliopisto & MinnaLearn (i.a.-a): Elements of AI – Miten tekoäly määritellään?
                </a>
              </em>
            </li>
            <li>
              <em>
                <a href="https://course.elementsofai.com/fi/1/2" target="_blank" rel="noopener noreferrer">
                  Helsingin yliopisto & MinnaLearn (i.a.-b): Elements of AI – Muita aihepiirejä.
                </a>
              </em>
            </li>
            <li>
              <em>
                <a href="https://course.elementsofai.com/fi/1/3" target="_blank" rel="noopener noreferrer">
                  Helsingin yliopisto & MinnaLearn (i.a.-c): Elements of AI – Avaintermejä: Yleinen ja kapea tekoäly.
                </a>
              </em>
            </li>
          </ul>

          <p>
            <strong>
              Tekoälyä (OpenAI GPT-5.2) käytettiin myös tämän artikkelin valmistelussa kielenhuollon osalta 🙂.
            </strong>
            <br />
            Tarkka kielenhuollon prompti:{" "}
            <em>Tarkistatko aiemmin tuottamani tekstin läpi ja korjaat kielelliset virheet?</em>
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
