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
    <p>I work at the intersection of industrial design, web design, and digital media. My focus lies in creating work that is both thoughtful and grounded, blending aesthetic considerations with practical application. I draw inspiration from subcultural movements and the raw, experimental aesthetics of early internet culture, which influence both the form and narrative of my projects.</p>
    <p>Currently, I am pursuing a Master’s degree in Design at HfG Offenbach. My work often revolves around research-driven processes and interdisciplinary collaborations. I enjoy exploring unconventional approaches to design and value the balance between concept and execution. Whether it’s developing visual identities, designing digital experiences, or working on physical products, I aim to craft pieces that feel relevant and functional.</p>
    <p>Portfolio available on <a href="mailto:moritzgg99@gmail.com">request</a></p>
  `,
  de: `
    <p>Ich arbeite im Spannungsfeld von Industriedesign, Webdesign und digitalen Medien. Mein Fokus liegt darauf, Arbeiten zu schaffen, die durchdacht und fundiert sind und Ästhetik mit praktischer Anwendung verbinden. Subkulturelle Bewegungen und die experimentelle Ästhetik des frühen Internets prägen sowohl die Form als auch die Erzählweise meiner Projekte.</p>
    <p>Derzeit studiere ich im Masterstudiengang Design an der HfG Offenbach. Meine Arbeit basiert oft auf forschungsgeleiteten Prozessen und interdisziplinären Kollaborationen. Ich experimentiere gerne mit unkonventionellen Ansätzen und schätze die Balance zwischen Konzept und Umsetzung. Ob bei der Entwicklung visueller Identitäten, digitaler Experiences oder physischer Produkte – mir ist wichtig, dass meine Arbeit relevant und funktional ist.</p>
    <p>Portfolio auf <a href="mailto:moritzgg99@gmail.com">Anfrage</a></p>
  `,
    it: `
    <p>Lavoro all'incrocio tra design industriale, web design e media digitali. Il mio obiettivo è creare opere ponderate e funzionali, combinando considerazioni estetiche con applicazioni pratiche. Mi ispiro ai movimenti subculturali e all'estetica sperimentale dell'inizio di internet, che influenzano sia la forma che il contenuto dei miei progetti.</p>
    <p>Attualmente sto seguendo un Master in Design presso HfG Offenbach. Il mio lavoro spesso ruota attorno a processi basati sulla ricerca e collaborazioni interdisciplinari. Mi piace esplorare approcci non convenzionali al design e valorizzo l'equilibrio tra concetto ed esecuzione. Che si tratti di sviluppare identità visive, progettare esperienze digitali o lavorare su prodotti fisici, il mio obiettivo è creare opere rilevanti e funzionali.</p>
    <p>Portfolio disponibile su <a href="mailto:moritzgg99@gmail.com">richiesta</a></p>
  `,
  es: `
    <p>Trabajo en la intersección entre diseño industrial, diseño web y medios digitales. Mi enfoque se centra en crear trabajos reflexivos y prácticos, fusionando consideraciones estéticas con aplicaciones funcionales. Me inspiran los movimientos subculturales y las estéticas experimentales de los primeros días de internet, que influyen tanto en la forma como en el contenido de mis proyectos.</p>
    <p>Actualmente estoy cursando un máster en diseño en la HfG Offenbach. Mi trabajo suele girar en torno a procesos impulsados por la investigación y colaboraciones interdisciplinarias. Disfruto explorando enfoques poco convencionales y valoro el equilibrio entre concepto y ejecución. Ya sea desarrollando identidades visuales, diseñando experiencias digitales o trabajando en productos físicos, mi objetivo es crear piezas que sean relevantes y funcionales.</p>
    <p>Portafolio disponible bajo <a href="mailto:moritzgg99@gmail.com">solicitud</a></p>
  `,
  fr: `
    <p>Je travaille à l’intersection du design industriel, du design web et des médias numériques. Mon objectif est de créer des œuvres à la fois réfléchies et ancrées, combinant des considérations esthétiques avec des applications pratiques. Je m’inspire des mouvements sous-culturels et des esthétiques expérimentales du début de l’internet, qui influencent à la fois la forme et le récit de mes projets.</p>
    <p>Actuellement, je poursuis un Master en Design à la HfG Offenbach. Mon travail tourne souvent autour de processus basés sur la recherche et de collaborations interdisciplinaires. J’aime explorer des approches non conventionnelles et j’accorde de la valeur à l’équilibre entre le concept et l’exécution. Qu’il s’agisse de développer des identités visuelles, de concevoir des expériences numériques ou de travailler sur des produits physiques, mon objectif est de créer des pièces pertinentes et fonctionnelles.</p>
    <p>Portfolio disponible sur <a href="mailto:moritzgg99@gmail.com">demande</a></p>
  `,
  kyr: `
    <p>Я працюю на перетині промислового дизайну, веб-дизайну та цифрових медіа. Моя мета — створювати роботи, які поєднують естетику з практичним застосуванням, ґрунтуючись на дослідницьких процесах. Натхнення я черпаю у субкультурних рухах та експериментальній естетиці раннього інтернету, що впливають як на форму, так і на зміст моїх проектів.</p>
    <p>Наразі я здобуваю ступінь магістра дизайну в HfG Offenbach. Моя робота часто пов’язана з міждисциплінарною співпрацею та експериментами. Я люблю досліджувати нестандартні підходи до дизайну та прагну балансу між концепцією та реалізацією. Моєю метою є створення дизайнів, які є доречними та функціональними.</p>
    <p>Портфоліо доступне за <a href="mailto:moritzgg99@gmail.com">запитом</a></p>
  `,
  zh: `
    <p>我专注于工业设计、网页设计和数字媒体的交叉领域。我的目标是创建既深思熟虑又实用的作品，将美学与实际应用相结合。我从亚文化运动和早期互联网的实验美学中汲取灵感，这些都影响着我的项目的形式和叙事。</p>
    <p>目前，我正在HfG Offenbach攻读设计硕士学位。我的作品通常围绕以研究为驱动的过程和跨学科合作展开。我喜欢探索非传统的方法，并重视概念与执行之间的平衡。无论是开发视觉识别系统、设计数字体验，还是制作实体产品，我的目标都是打造相关且实用的作品。</p>
    <p>作品集可<a href="mailto:moritzgg99@gmail.com">索取</a></p>
  `,
  vi: `
    <p>Tôi làm việc tại giao điểm của thiết kế công nghiệp, thiết kế web và phương tiện kỹ thuật số. Mục tiêu của tôi là tạo ra những tác phẩm vừa cân nhắc vừa thực tế, kết hợp các yếu tố thẩm mỹ với ứng dụng thực tiễn. Tôi lấy cảm hứng từ các phong trào văn hóa phụ và thẩm mỹ thử nghiệm của thời kỳ đầu internet, điều này ảnh hưởng đến cả hình thức và nội dung các dự án của tôi.</p>
    <p>Hiện tại, tôi đang theo học Thạc sĩ Thiết kế tại HfG Offenbach. Công việc của tôi thường xoay quanh các quy trình dựa trên nghiên cứu và hợp tác liên ngành. Tôi thích khám phá các phương pháp thiết kế phi truyền thống và đánh giá cao sự cân bằng giữa ý tưởng và thực thi. Dù là phát triển nhận diện thương hiệu, thiết kế trải nghiệm kỹ thuật số hay làm việc trên sản phẩm vật lý, mục tiêu của tôi là tạo ra những tác phẩm phù hợp và hữu ích.</p>
    <p>Danh mục đầu tư có sẵn theo <a href="mailto:moritzgg99@gmail.com">yêu cầu</a></p>
  `,
  ja: `
    <p>私は、工業デザイン、ウェブデザイン、デジタルメディアの交差点で活動しています。私の目標は、審美的な考慮と実践的な応用を融合させた、思慮深く実用的な作品を作ることです。サブカルチャーの動きや初期インターネットの実験的な美学にインスパイアされ、それが私のプロジェクトの形状と物語に影響を与えています。</p>
    <p>現在、私はHfG Offenbachでデザインの修士号を取得中です。私の作品はしばしば、研究主導のプロセスや学際的なコラボレーションを中心に展開しています。非伝統的なデザインアプローチを探求し、コンセプトと実行のバランスを重視しています。視覚的なアイデンティティの開発、デジタル体験のデザイン、または物理的な製品の作業において、私の目標は、関連性と機能性を備えた作品を作成することです。</p>
    <p>ポートフォリオは<a href="mailto:moritzgg99@gmail.com">リクエスト</a>で入手可能です</p>
  `,
  ro: `
    <p>Lucrez la intersecția dintre design industrial, design web și media digitale. Scopul meu este să creez lucrări care sunt atât bine gândite, cât și practice, combinând considerente estetice cu aplicații funcționale. Mă inspir din mișcările subculturale și estetica experimentală a internetului timpuriu, care influențează atât forma, cât și povestea proiectelor mele.</p>
    <p>În prezent, urmez un masterat în design la HfG Offenbach. Munca mea se concentrează adesea pe procese bazate pe cercetare și colaborări interdisciplinare. Îmi place să explorez abordări neconvenționale ale designului și apreciez echilibrul dintre concept și execuție. Indiferent dacă este vorba despre dezvoltarea identităților vizuale, proiectarea experiențelor digitale sau lucrul la produse fizice, scopul meu este să creez lucrări relevante și funcționale.</p>
    <p>Portofoliu disponibil la <a href="mailto:moritzgg99@gmail.com">cerere</a></p>
  `,
  cs: `
    <p>Pracuji na pomezí průmyslového designu, webdesignu a digitálních médií. Mým cílem je vytvářet promyšlené a praktické práce, které spojují estetické hledisko s funkční aplikací. Inspiraci čerpám z subkulturních hnutí a experimentální estetiky raného internetu, což ovlivňuje formu i příběh mých projektů.</p>
    <p>V současné době studuji magisterský program designu na HfG Offenbach. Moje práce se často zaměřuje na procesy založené na výzkumu a interdisciplinární spolupráci. Rád zkoumám nekonvenční přístupy k designu a oceňuji rovnováhu mezi konceptem a realizací. Ať už jde o vývoj vizuálních identit, návrh digitálních zážitků nebo práci na fyzických produktech, mým cílem je vytvářet relevantní a funkční díla.</p>
    <p>Portfolio k dispozici na <a href="mailto:moritzgg99@gmail.com">vyžádání</a></p>
  `,
  ar: `
    <p>أعمل في تقاطع التصميم الصناعي وتصميم الويب والوسائط الرقمية. هدفي هو إنشاء أعمال مدروسة وعملية تجمع بين الاعتبارات الجمالية والتطبيقات العملية. أستمد إلهامي من الحركات الثقافية الفرعية والجماليات التجريبية للإنترنت المبكر، مما يؤثر على شكل ومضمون مشاريعي.</p>
    <p>حاليًا، أتابع درجة الماجستير في التصميم في HfG أوفنباخ. غالبًا ما تركز أعمالي على العمليات القائمة على البحث والتعاون متعدد التخصصات. أستمتع باستكشاف الأساليب غير التقليدية للتصميم وأقدر التوازن بين المفهوم والتنفيذ. سواء كان ذلك في تطوير الهويات البصرية، أو تصميم التجارب الرقمية، أو العمل على المنتجات المادية، فإن هدفي هو إنشاء أعمال ذات صلة وعملية.</p>
    <p>المحفظة متوفرة عند <a href="mailto:moritzgg99@gmail.com">الطلب</a></p>
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