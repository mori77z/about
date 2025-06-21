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
    <p>Moritz Gauss, born in Stuttgart and currently based in Offenbach am Main, works in the fields of digital art, web and user interface/user experience design, as well as developing concepts for objects and products.  
    Personal impressions from digital and urban environments form the foundation of his creative work, which he translates into new interactive concepts.  
    As a designer working in digital space, he enables collaborative and interdisciplinary projects that are accessible anytime and from anywhere.</p>
    <p>After completing his bachelor's degree in industrial design at Ostbayerische Technische Hochschule Regensburg, he is currently pursuing a master's degree in design at Hochschule für Gestaltung Offenbach.  
    In 2023, Moritz had the opportunity to work for ten months as part of a residency at M26 in Regensburg.</p>
  `,
  "de": `
    <p>Moritz Gauss, geboren in Stuttgart und aktuell tätig in Offenbach am Main, arbeitet in den Bereichen digitale Kunst, Web- und User Interface/User Experience Design sowie an Konzepten für Objekte und Produkte.  
    Persönliche Eindrücke aus der digitalen und urbanen Lebenswelt bilden in seiner kreativen Arbeit die Grundlage, die er in neue interaktive Konzepte übersetzt.  
    Als Gestalter im digitalen Raum ermöglicht er kooperative und interdisziplinäre Projekte, die jederzeit und von überall zugänglich sind.</p>
    <p>Nach dem Bachelorabschluss in Industriedesign an der Ostbayerischen Technischen Hochschule Regensburg studiert er derzeit im Master Design an der Hochschule für Gestaltung Offenbach.  
    2023 hatte Moritz die Möglichkeit, zehn Monate im Rahmen einer Residency im M26 in Regensburg zu arbeiten.</p>
  `,
  "it": `
    <p>Moritz Gauss, nato a Stoccarda e attualmente attivo a Offenbach am Main, lavora nel campo dell'arte digitale, del design web e dell'interfaccia/esperienza utente, oltre a sviluppare concetti per oggetti e prodotti.  
    Impressioni personali provenienti da ambienti digitali e urbani costituiscono la base del suo lavoro creativo, che traduce in nuovi concetti interattivi.  
    Come designer operante nello spazio digitale, rende possibili progetti collaborativi e interdisciplinari accessibili in qualsiasi momento e da qualsiasi luogo.</p>
    <p>Dopo aver conseguito la laurea in design industriale presso l'Ostbayerische Technische Hochschule Regensburg, sta attualmente proseguendo il master in design presso la Hochschule für Gestaltung Offenbach.  
    Nel 2023, Moritz ha avuto l'opportunità di lavorare per dieci mesi nell'ambito di una residency presso M26 a Regensburg.</p>
  `,
  "es": `
    <p>Moritz Gauss, nacido en Stuttgart y actualmente radicado en Offenbach am Main, trabaja en los campos del arte digital, diseño web y diseño de interfaz/experiencia de usuario, además de desarrollar conceptos para objetos y productos.  
    Impresiones personales de entornos digitales y urbanos forman la base de su trabajo creativo, que traduce en nuevos conceptos interactivos.  
    Como diseñador que trabaja en el espacio digital, facilita proyectos colaborativos e interdisciplinarios accesibles en cualquier momento y desde cualquier lugar.</p>
    <p>Después de completar su licenciatura en diseño industrial en la Ostbayerische Technische Hochschule Regensburg, actualmente cursa una maestría en diseño en la Hochschule für Gestaltung Offenbach.  
    En 2023, Moritz tuvo la oportunidad de trabajar durante diez meses en el marco de una residencia artística en M26 en Regensburg.</p>
  `,
  "fr": `
    <p>Moritz Gauss, né à Stuttgart et actuellement basé à Offenbach am Main, travaille dans les domaines de l'art numérique, du design web et de l'interface/expérience utilisateur, ainsi que dans le développement de concepts pour des objets et produits.  
    Des impressions personnelles tirées des environnements numériques et urbains constituent la base de son travail créatif, qu'il traduit en nouveaux concepts interactifs.  
    En tant que designer évoluant dans l'espace numérique, il permet des projets collaboratifs et interdisciplinaires accessibles à tout moment et de n'importe où.</p>
    <p>Après avoir obtenu sa licence en design industriel à l'Ostbayerische Technische Hochschule Regensburg, il poursuit actuellement un master en design à la Hochschule für Gestaltung Offenbach.  
    En 2023, Moritz a eu l'opportunité de travailler pendant dix mois dans le cadre d'une résidence au M26 à Regensburg.</p>
  `,
  "zh": `
    <p>Moritz Gauss，出生于斯图加特，目前在美因河畔奥芬巴赫工作，专注于数字艺术、网页设计和用户界面/用户体验设计，同时开发物体和产品的概念。  
    他在创作中汲取数字和城市环境中的个人感受，并将其转化为新的交互式概念。  
    作为数字领域的设计师，他促成了可随时随地访问的合作性和跨学科项目。</p>
    <p>完成奥斯特贝尔技术大学的工业设计学士学位后，他目前在奥芬巴赫设计学院攻读设计硕士。  
    2023年，Moritz有机会在瑞根斯堡的M26参与为期十个月的驻地项目。</p>
  `,
  "ar": `
    <p>موريتس جاوس، وُلد في شتوتغارت ويعمل حالياً في أوفنباخ على نهر الماين، يعمل في مجالات الفن الرقمي، وتصميم الويب وتجربة المستخدم/واجهة المستخدم، بالإضافة إلى تطوير مفاهيم للأشياء والمنتجات.  
    تشكل الانطباعات الشخصية من البيئات الرقمية والحضرية أساس عمله الإبداعي، الذي يترجمها إلى مفاهيم تفاعلية جديدة.  
    كمصمم يعمل في الفضاء الرقمي، يتيح مشاريع تعاونية ومتعددة التخصصات يمكن الوصول إليها في أي وقت ومن أي مكان.</p>
    <p>بعد حصوله على درجة البكالوريوس في التصميم الصناعي من جامعة أوستبايريش التقنية في ريغنسبورغ، يواصل حالياً دراسته للحصول على الماجستير في التصميم في جامعة هوخشوله فير جيستالتونغ أوفنباخ.  
    في عام 2023، أتيحت لموريتس الفرصة للعمل لمدة عشرة أشهر في إطار إقامة فنية في M26 في ريغنسبورغ.</p>
  `,
  "ja": `
    <p>モーリッツ・ガウスはシュトゥットガルトで生まれ、現在はオッフェンバッハ・アム・マインで活動しており、デジタルアート、ウェブデザイン、ユーザーインターフェイス/ユーザーエクスペリエンスデザインに加え、オブジェクトや製品のコンセプト開発に携わっています。  
    彼の創作活動は、デジタルおよび都市環境からの個人的な印象を基盤とし、それらを新しいインタラクティブなコンセプトへと翻訳しています。  
    デジタル領域で活動するデザイナーとして、いつでもどこからでもアクセス可能な協働的かつ学際的なプロジェクトを可能にしています。</p>
    <p>オスバイエル技術大学で産業デザインの学士号を取得後、現在はオッフェンバッハのデザイン大学で修士課程に在籍しています。  
    2023年には、レゲンスブルクのM26にて10ヶ月間のレジデンシーに参加する機会を得ました。</p>
  `,
  "kyr": `
    <p>Моріц Гаус, народився в Штутгарті, а зараз працює в Оффенбаху-на-Майні, займається цифровим мистецтвом, веб-дизайном і дизайном користувацьких інтерфейсів/досвіду користувача, а також розробкою концепцій для об’єктів і продуктів.  
    Особисті враження з цифрових та міських середовищ є основою його творчої роботи, яку він перетворює на нові інтерактивні концепції.  
    Як дизайнер, що працює в цифровому просторі, він сприяє створенню спільних і міждисциплінарних проєктів, доступних будь-коли та з будь-якого місця.</p>
    <p>Після здобуття ступеня бакалавра з промислового дизайну в Остбайєрській технічній школі Регенсбурга, він наразі продовжує навчання на магістратурі з дизайну в Hochschule für Gestaltung Offenbach.  
    У 2023 році Моріц мав можливість працювати десять місяців у рамках резиденції в M26 у Регенсбурзі.</p>
  `,
  "tr": `
    <p>Moritz Gauss, Stuttgart doğumlu ve şu anda Offenbach am Main'da yaşayan, dijital sanat, web ve kullanıcı arayüzü/kullanıcı deneyimi tasarımı alanlarında çalışmakta ve nesneler ile ürünler için konseptler geliştirmektedir.  
    Yaratıcı çalışmalarında dijital ve kentsel ortamlardan aldığı kişisel izlenimleri, yeni etkileşimli konseptlere dönüştürmektedir.  
    Dijital alanda çalışan bir tasarımcı olarak, her zaman ve her yerden erişilebilen işbirlikçi ve disiplinlerarası projeleri mümkün kılmaktadır.</p>
    <p>Ostbayerische Technische Hochschule Regensburg'dan endüstriyel tasarım alanında lisans derecesini tamamladıktan sonra, şu anda Hochschule für Gestaltung Offenbach'ta tasarım yüksek lisansına devam etmektedir.  
    2023 yılında Moritz, Regensburg'daki M26'da on ay süren bir residency kapsamında çalışma fırsatı buldu.</p>
  `,
  "ro": `
    <p>Moritz Gauss, născut în Stuttgart și în prezent activ în Offenbach am Main, lucrează în domeniile artei digitale, designului web și al interfeței/experienței utilizatorului, precum și în dezvoltarea de concepte pentru obiecte și produse.  
    Impresiile personale din mediile digitale și urbane constituie fundamentul muncii sale creative, pe care o transformă în noi concepte interactive.  
    Ca designer care activează în spațiul digital, facilitează proiecte colaborative și interdisciplinare accesibile oricând și de oriunde.</p>
    <p>După ce și-a finalizat studiile de licență în design industrial la Ostbayerische Technische Hochschule Regensburg, în prezent urmează un program de master în design la Hochschule für Gestaltung Offenbach.  
    În 2023, Moritz a avut oportunitatea de a lucra timp de zece luni în cadrul unei rezidențe la M26 din Regensburg.</p>
  `,
  "cs": `
    <p>Moritz Gauss, narozený ve Stuttgartu a nyní působící v Offenbachu am Main, pracuje v oblastech digitálního umění, webového a uživatelského rozhraní/uživatelské zkušenosti a vyvíjí koncepty pro objekty a produkty.  
    Osobní dojmy z digitálního a městského prostředí tvoří základ jeho kreativní práce, kterou překládá do nových interaktivních konceptů.  
    Jako designér pracující v digitálním prostoru umožňuje kooperativní a interdisciplinární projekty, které jsou kdykoliv a odkudkoliv přístupné.</p>
    <p>Po dokončení bakalářského studia průmyslového designu na Ostbayerische Technische Hochschule Regensburg v současné době studuje magisterský program designu na Hochschule für Gestaltung Offenbach.  
    V roce 2023 měl Moritz možnost pracovat deset měsíců v rámci rezidence v M26 v Regensburgu.</p>
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


  const name = document.getElementById('hover-name');
  const image = document.getElementById('hover-image');

  let visible = false;

  function showImage() {
    image.style.opacity = 1;
    visible = true;
  }

  function hideImage() {
    image.style.opacity = 0;
    visible = false;
  }

  // Desktop hover
  name.addEventListener('mouseenter', showImage);
  name.addEventListener('mouseleave', hideImage);

  // Mobile tap (and desktop fallback)
  name.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent immediate hiding
    showImage();
  });

  // Cursor follow on desktop
  name.addEventListener('mousemove', (e) => {
    image.style.left = `${e.clientX + 20}px`;
    image.style.top = `${e.clientY + 20}px`;
  });

  // Tap/click outside to hide (mobile and desktop)
  document.addEventListener('click', (e) => {
    if (visible && !name.contains(e.target)) {
      hideImage();
    }
  });

  // Touch support: tap anywhere else hides the image
  document.addEventListener('touchstart', (e) => {
    if (visible && !name.contains(e.target)) {
      hideImage();
    }
  });