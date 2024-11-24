function goBack() {
  // Überprüfen, ob die vorherige Seite auf moritzgauss.com liegt
  if (document.referrer.includes('moritzgauss.com')) {
    window.history.back();
  } else {
    // Zur Startseite weiterleiten
    window.location.href = '/';
  }
}

const translations = {
  en: `
    <p>Moritz Gauss (b. 1999, Stuttgart) is a multidisciplinary designer working across industrial design, web design, and digital media. His versatile approach, inspired by the concept of the Tuttofare—a master of adaptability—integrates creative vision with functional solutions. Influenced by subculture aesthetics and early internet trends, his work balances artistic expression and usability.</p>
    <p>Currently pursuing a Master’s in Design at HfG Offenbach, Moritz focuses on design research, publishing, and concept development. His goal is to explore new ideas through interdisciplinary collaborations. His interests in generative digital art, fixed-gear bicycles, and fashion further shape his design perspective.</p>
    <p>Portfolio on <a href="mailto:moritzgg99@gmail.com">request</a></p>
  `,
  de: `
    <p>Moritz Gauss (geb. 1999, Stuttgart) ist ein interdisziplinärer Designer, der in den Bereichen Industriedesign, Webdesign und digitale Medien tätig ist. Sein vielseitiger Ansatz, inspiriert vom Konzept des Tuttofare—eines Meisters der Anpassungsfähigkeit—verbindet kreative Vision mit funktionalen Lösungen. Beeinflusst von Subkultur-Ästhetik und frühen Internet-Trends, balancieren seine Arbeiten zwischen künstlerischem Ausdruck und Benutzerfreundlichkeit.</p>
    <p>Derzeit absolviert Moritz ein Masterstudium in Design an der HfG Offenbach, mit Schwerpunkt auf Designforschung, Publikation und Konzeptentwicklung. Sein Ziel ist es, durch interdisziplinäre Zusammenarbeit neue Ideen zu erforschen. Seine Interessen an generativer digitaler Kunst, Fixed-Gear-Fahrrädern und Mode prägen zusätzlich seine Designperspektive.</p>
    <p>Portfolio auf <a href="mailto:moritzgg99@gmail.com">Anfrage</a></p>
  `,
  es: `
    <p>Moritz Gauss (n. 1999, Stuttgart) es un diseñador multidisciplinar que trabaja en diseño industrial, diseño web y medios digitales. Su enfoque versátil, inspirado en el concepto de Tuttofare, integra visión creativa con soluciones funcionales. Influenciado por la estética de la subcultura y las tendencias tempranas de internet, su trabajo equilibra la expresión artística y la usabilidad.</p>
    <p>Actualmente cursa un Máster en Diseño en la HfG Offenbach, donde se centra en la investigación en diseño, la publicación y el desarrollo de conceptos. Su objetivo es explorar nuevas ideas a través de colaboraciones interdisciplinarias. Sus intereses en el arte digital generativo, las bicicletas de piñón fijo y la moda también influyen en su perspectiva de diseño.</p>
    <p>Portafolio <a href="mailto:moritzgg99@gmail.com">bajo solicitud</a></p>
  `,
  fr: `
    <p>Moritz Gauss (né en 1999, Stuttgart) est un designer multidisciplinaire travaillant dans le design industriel, le design web et les médias numériques. Son approche polyvalente, inspirée par le concept de Tuttofare, intègre vision créative et solutions fonctionnelles. Influencé par l'esthétique des sous-cultures et les premières tendances de l'internet, son travail équilibre expression artistique et utilisabilité.</p>
    <p>Actuellement en Master en Design à la HfG Offenbach, Moritz se concentre sur la recherche en design, l'édition et le développement de concepts. Son objectif est d'explorer de nouvelles idées grâce à des collaborations interdisciplinaires. Ses intérêts pour l'art numérique génératif, les vélos à pignon fixe et la mode façonnent également sa perspective de design.</p>
    <p>Portfolio sur <a href="mailto:moritzgg99@gmail.com">demande</a></p>
  `,
  zh: `
    <p>莫里茨·高斯（1999年出生，斯图加特）是一位跨学科设计师，专注于工业设计、网页设计和数字媒体。他的多功能设计方法受“Tuttofare”概念启发，融合了创造性愿景和功能性解决方案。受亚文化美学和早期互联网趋势的影响，他的作品平衡了艺术表现与实用性。</p>
    <p>目前，莫里茨正在HfG Offenbach攻读设计硕士学位，专注于设计研究、出版和概念开发。他的目标是通过跨学科合作探索新想法。他对生成数字艺术、固定齿轮自行车和时尚的兴趣也进一步塑造了他的设计视角。</p>
    <p>作品集可<a href="mailto:moritzgg99@gmail.com">索取</a></p>
  `,
  ar: `
    <p>موريتز غاوس (مواليد 1999، شتوتغارت) هو مصمم متعدد التخصصات يعمل في التصميم الصناعي وتصميم الويب والإعلام الرقمي. يتميز نهجه بالمرونة، مستوحى من مفهوم Tuttofare، حيث يمزج بين الرؤية الإبداعية والحلول العملية. تأثره بجماليات الثقافة الفرعية واتجاهات الإنترنت المبكرة يظهر في عمله الذي يوازن بين التعبير الفني وسهولة الاستخدام.</p>
    <p>يواصل موريتز حاليًا دراسة الماجستير في التصميم في HfG أوفنباخ، حيث يركز على البحث في التصميم والنشر وتطوير المفاهيم. هدفه هو استكشاف أفكار جديدة من خلال التعاون متعدد التخصصات. اهتماماته في الفن الرقمي التوليدي والدراجات ذات التروس الثابتة والأزياء تشكل أيضًا رؤيته في التصميم.</p>
    <p>المحفظة <a href="mailto:moritzgg99@gmail.com">عند الطلب</a></p>
  `
};

function setLanguage(lang) {
  if (translations[lang]) {
    document.getElementById("bio").innerHTML = translations[lang];
  } else {
    console.warn(`Language ${lang} is not defined. Defaulting to English.`);
    document.getElementById("bio").innerHTML = translations['en'];
  }
}

// Set default language on page load
window.onload = () => setLanguage('en');