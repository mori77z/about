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
  "en": `
    <p>Moritz Gauss, born in Stuttgart and currently working in Offenbach am Main, operates in the fields of digital art, web and user interface/user experience design, as well as creating concepts for objects and products. His approaches draw inspiration from early internet aesthetics and urban trends. His work as a designer in the digital space makes it possible to create cooperative and interdisciplinary projects on the internet, accessible by anyone from anywhere at any time.</p>
    <p>After completing his bachelor's degree in industrial design at the Ostbayerische Technische Hochschule Regensburg, he is currently pursuing a master's degree in design at the Hochschule für Gestaltung Offenbach. In 2023, Moritz had the opportunity to work for 10 months as an artist-in-residence at M26 in Regensburg.</p>
  `,
  "de": `
    <p>Moritz Gauss, geboren in Stuttgart und aktuell tätig in Offenbach am Main, arbeitet im Bereich digitale Kunst, Web- und User Interface/ User Experience Design sowie der Erstellung von Konzepten für Objekte und Produkte. Die Ansätze ziehen Inspiration aus Early Internet Aesthetics und urbanen Trends. Seine Arbeit als Gestalter im digitalen Raum ermöglicht es, kooperative und interdisziplinäre Projekte im Internet für jeden von überall und jederzeit zugänglich zu machen.</p>
    <p>Nach dem Bachelorabschluss in Industriedesign an der Ostbayerischen Technischen Hochschule Regensburg studiert er derzeit im Masterstudiengang Design an der Hochschule für Gestaltung Offenbach. 2023 hatte Moritz 10 Monate die Gelegenheit, als Artist in Residence im M26 in Regensburg zu arbeiten.</p>
  `,
  "it": `
    <p>Moritz Gauss, nato a Stoccarda e attualmente attivo a Offenbach am Main, lavora nel campo dell'arte digitale, del design web e dell'interfaccia/esperienza utente, nonché nella creazione di concetti per oggetti e prodotti. I suoi approcci si ispirano all'estetica di internet degli inizi e alle tendenze urbane. Il suo lavoro come designer nello spazio digitale consente di creare progetti cooperativi e interdisciplinari su internet, accessibili da chiunque, ovunque e in qualsiasi momento.</p>
    <p>Dopo aver conseguito la laurea in design industriale presso l'Ostbayerische Technische Hochschule Regensburg, sta attualmente proseguendo il suo master in design presso la Hochschule für Gestaltung Offenbach. Nel 2023, Moritz ha avuto l'opportunità di lavorare per 10 mesi come artista in residenza presso M26 a Regensburg.</p>
  `,
  "es": `
    <p>Moritz Gauss, nacido en Stuttgart y actualmente trabajando en Offenbach am Main, trabaja en el campo del arte digital, el diseño web y de interfaz/experiencia de usuario, así como en la creación de conceptos para objetos y productos. Sus enfoques se inspiran en la estética de internet de los primeros tiempos y en las tendencias urbanas. Su trabajo como diseñador en el espacio digital hace posible crear proyectos cooperativos e interdisciplinarios en internet, accesibles por cualquier persona desde cualquier lugar y en cualquier momento.</p>
    <p>Después de completar su licenciatura en diseño industrial en la Ostbayerische Technische Hochschule Regensburg, actualmente está cursando una maestría en diseño en la Hochschule für Gestaltung Offenbach. En 2023, Moritz tuvo la oportunidad de trabajar durante 10 meses como artista residente en M26 en Regensburg.</p>
  `,
  "fr": `
    <p>Moritz Gauss, né à Stuttgart et actuellement basé à Offenbach am Main, travaille dans les domaines de l'art numérique, du design web et de l'expérience/utilisation des interfaces, ainsi que dans la création de concepts pour des objets et des produits. Ses approches s'inspirent des premières esthétiques d'internet et des tendances urbaines. Son travail en tant que designer dans l'espace numérique permet de créer des projets coopératifs et interdisciplinaires sur internet, accessibles à tous, partout et à tout moment.</p>
    <p>Après avoir obtenu son diplôme de bachelier en design industriel à l'Ostbayerische Technische Hochschule Regensburg, il poursuit actuellement son master en design à la Hochschule für Gestaltung Offenbach. En 2023, Moritz a eu l'opportunité de travailler pendant 10 mois en tant qu'artiste en résidence à M26 à Regensburg.</p>
  `,
  "zh": `
    <p>Moritz Gauss，出生于斯图加特，目前在美因河畔的奥芬巴赫工作，从事数字艺术、网页和用户界面/用户体验设计，以及物体和产品概念的创作。他的设计方法从早期互联网美学和城市趋势中汲取灵感。他作为数字领域设计师的工作使得可以在互联网上创建合作性和跨学科的项目，使任何人都能随时随地访问。</p>
    <p>在完成奥斯特贝尔技术大学的工业设计学士学位后，他目前正在奥芬巴赫的设计大学攻读硕士学位。2023年，Moritz有机会在瑞根斯堡的M26担任艺术驻地工作长达10个月。</p>
  `,
  "ar": `
    <p>موريتس جاوس، وُلد في شتوتغارت ويعمل حالياً في أوفنباخ على نهر الماين، يعمل في مجالات الفن الرقمي، تصميم الويب وتجربة المستخدم/واجهة المستخدم، بالإضافة إلى إنشاء مفاهيم للأشياء والمنتجات. تستلهم منهجياته الإلهام من جماليات الإنترنت المبكر ومن الاتجاهات الحضرية. يتيح له عمله كمصمم في الفضاء الرقمي إنشاء مشاريع تعاونية ومتعددة التخصصات على الإنترنت، يمكن الوصول إليها من قبل أي شخص من أي مكان وفي أي وقت.</p>
    <p>بعد أن أكمل دراسته في مجال تصميم الصناعات في جامعة أوستبايريش التقنية في ريغنسبورغ، يواصل حالياً دراسته في درجة الماجستير في التصميم في جامعة هوخشوله فير جيستالتونغ أوفنباخ. في عام 2023، أتيحت لموريتس الفرصة للعمل لمدة 10 أشهر كفنان مقيم في M26 في ريغنسبورغ.</p>
  `,
  "ja": `
    <p>モーリッツ・ガウスはシュトゥットガルトで生まれ、現在はオッフェンバッハ・アム・マインで活動しており、デジタルアート、ウェブデザイン、ユーザーインターフェイス/ユーザーエクスペリエンスデザイン、そしてオブジェクトや製品のコンセプト作成の分野で活動しています。彼のアプローチは、初期インターネットの美学や都市のトレンドからインスピレーションを得ています。デジタル領域でのデザイナーとしての仕事は、インターネット上で協力的で学際的なプロジェクトを作り、誰でもどこでもいつでもアクセスできるようにします。</p>
    <p>オスバイエル技術大学で産業デザインの学士号を取得後、現在はオッフェンバッハのデザイン大学で修士号を取得しています。2023年には、モーリッツはレゲンスブルクのM26でアーティスト・イン・レジデンスとして10か月間活動する機会を得ました。</p>
  `,
  "kyr": `
    <p>Моріц Гаус, народився в Штутгарті, а зараз працює в офенбаху на річці Майні, займається цифровим мистецтвом, веб-дизайном та дизайном користувацьких інтерфейсів/досвідом, а також створенням концепцій для об'єктів та продуктів. Його підходи черпають натхнення з естетики раннього інтернету та міських трендів. Його робота як дизайнера в цифровому просторі дозволяє створювати кооперативні та міждисциплінарні проекти в Інтернеті, доступні для будь-кого з будь-якого місця і в будь-який час.</p>
    <p>Після здобуття ступеня бакалавра з промислового дизайну в Остбайєрській технічній школі Регенсбурга, він наразі продовжує навчання на магістратурі з дизайну в Гоффенбахській вищій школі дизайну. У 2023 році Моріц мав можливість працювати 10 місяців як художник-резидент у M26 в Регенсбурзі.</p>
  `,
   "tr": `
  <p>Moritz Gauss, Stuttgart doğumlu ve şu anda Offenbach am Main'da çalışan bir tasarımcıdır. Dijital sanat, web ve kullanıcı arayüzü/kullanıcı deneyimi tasarımı alanlarında faaliyet göstermektedir ve ayrıca nesneler ve ürünler için konseptler yaratmaktadır. Yaklaşımları, erken internet estetiğinden ve kentsel trendlere ilham almaktadır. Dijital alandaki tasarımcı olarak çalışması, internet üzerinde işbirlikçi ve disiplinlerarası projeler yaratmayı mümkün kılar; bu projelere her yerden, her zaman erişilebilir.</p>
<p>Ostbayerische Technische Hochschule Regensburg'dan endüstriyel tasarım alanında lisans eğitimini tamamladıktan sonra, şu anda Hochschule für Gestaltung Offenbach'da tasarım yüksek lisansına devam etmektedir. 2023 yılında Moritz, Regensburg'daki M26'da 10 ay süresince sanatçı rezidansı olarak çalışma fırsatı bulmuştur.</p>
  `,
  "ro": `
    <p>Moritz Gauss, născut în Stuttgart și activ în prezent la Offenbach am Main, lucrează în domeniul artei digitale, al designului web și al interfeței/utilizării experienței utilizatorului, precum și în crearea de concepte pentru obiecte și produse. Abordările sale sunt inspirate de estetica internetului timpuriu și de tendințele urbane. Munca sa ca designer în spațiul digital face posibilă crearea de proiecte cooperative și interdisciplinare pe internet, accesibile oricui, din orice loc și în orice moment.</p>
    <p>După ce a obținut licența în design industrial la Ostbayerische Technische Hochschule Regensburg, în prezent studiază la master în design la Hochschule für Gestaltung Offenbach. În 2023, Moritz a avut oportunitatea de a lucra 10 luni ca artist în rezidență la M26 în Regensburg.</p>
  `,
  "cs": `
    <p>Moritz Gauss, narozený ve Stuttgartu a v současnosti pracující v Offenbachu am Main, působí v oblastech digitálního umění, webového a uživatelského rozhraní/zkušenosti, stejně jako v vytváření konceptů pro objekty a produkty. Jeho přístupy čerpají inspiraci z estetických počátků internetu a městských trendů. Jeho práce jako designéra v digitálním prostoru umožňuje vytvářet kooperativní a interdisciplinární projekty na internetu, dostupné každému z jakéhokoli místa a kdykoli.</p>
    <p>Po dokončení bakalářského studia v oboru průmyslový design na Ostbayerische Technische Hochschule Regensburg, v současnosti studuje magisterské studium designu na Hochschule für Gestaltung Offenbach. V roce 2023 měl Moritz příležitost pracovat 10 měsíců jako umělec v rezidenci v M26 v Regensburgu.</p>
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

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let isDragging = false;

// Partikel erzeugen
function createParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 60
    });
  }
}

// Zeichenfunktion
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(252, 64, 34, 0.15)'; // #fc4022 mit 15% Deckkraft
  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    if (p.life <= 0) {
      particles.splice(i, 1);
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  });
  requestAnimationFrame(drawParticles);
}

// Aktivieren bei Maus & Touch
function startDrag(x, y) {
  canvas.style.display = 'block';
  isDragging = true;
  createParticles(x, y);
}
function endDrag() {
  isDragging = false;
  setTimeout(() => canvas.style.display = 'none', 300);
}
function moveDrag(x, y) {
  if (isDragging) createParticles(x, y);
}

// Mouse Events
document.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));

// Touch Events
document.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  startDrag(touch.clientX, touch.clientY);
});
document.addEventListener('touchend', endDrag);
document.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  moveDrag(touch.clientX, touch.clientY);
});

// Animation starten
drawParticles();

/*
function createSpades(x, y) {
  for (let i = 0; i < 2; i++) {
    const spade = document.createElement("div");
    spade.className = "spade";
    spade.innerText = "♠";

    const size = 16 + Math.random() * 24;

    spade.style.position = "absolute";
    spade.style.left = `${x + (Math.random() * 50 - 25)}px`;
    spade.style.top = `${y + (Math.random() * 50 - 25)}px`;
    spade.style.fontSize = `${size}px`;
    spade.style.pointerEvents = "none";
    spade.style.transition = "all 1s ease";

    document.body.appendChild(spade);

    requestAnimationFrame(() => {
      spade.style.opacity = "0";
      spade.style.transform = "translateY(50px)";
    });

    setTimeout(() => {
      spade.remove();
    }, 1000);
  }
}
document.addEventListener("click", (e) => {
  createSpades(e.clientX, e.clientY);
});

// Drag & Swipe
let isDragging = false;
document.addEventListener("mousedown", () => isDragging = true);
document.addEventListener("mouseup", () => isDragging = false);
document.addEventListener("mousemove", (e) => {
  if (isDragging) createSpades(e.clientX, e.clientY);
});
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  createSpades(touch.clientX, touch.clientY);
});*/
