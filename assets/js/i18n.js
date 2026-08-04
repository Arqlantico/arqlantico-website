// =========================================================================
// ARQLÁNTICO — i18n (English / Español / 中文)
// Auto-detects the visitor's browser language on first visit; remembers
// a manual choice afterwards via localStorage. No external services.
// =========================================================================

const ARQ_TRANSLATIONS = {

  en: {
    "nav.studio": "Studio",
    "nav.process": "Process",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.cta": "Start a project",

    "hero.eyebrow": "Architecture &amp; Urban Design Studio",
    "hero.title": "Singularity is<br>part of our <em>DNA.</em>",
    "hero.sub": "We shape the earliest, most decisive moments of a project — from first sketch to proven feasibility — turning ambitious visions into landmarks within the city.",
    "hero.cta1": "Start a project",
    "hero.cta2": "Our approach",
    "hero.meta": "Coastal &amp; Urban Studio",
    "hero.scroll": "Scroll",

    "studio.eyebrow": "Studio",
    "studio.title": "Design, guided<br>by vision.",
    "studio.lede": "We are specialists in design. Working hand in hand with each client's vision, we create architecture distinctive enough to become a landmark within its city.",
    "studio.body": "We walk alongside you through the entire process, making sure every design decision holds true to your expectations. And once you're ready to build, we stay close — advising and supervising together with your trusted builder, all the way to completion.",
    "studio.stat1.dt": "Typologies",
    "studio.stat1.dd": "Residential, urban, civic &amp; sport",
    "studio.stat2.dt": "Focus",
    "studio.stat2.dd": "Concept through feasibility",
    "studio.stat3.dt": "Method",
    "studio.stat3.dd": "Design, data &amp; visualisation",
    "studio.cap": "Together, we make city.",

    "process.eyebrow": "Our Process",
    "process.title": "Feasibility first.<br>Certainty before commitment.",
    "process.lede": "Giving shape to a development is a daunting task. We walk with you through the entire feasibility process, testing design alternatives side by side until your project reaches its most buildable, most profitable version — weaving residential, hospitality, retail, urban and landscape design into a single, coherent proposal.",
    "process.step1.title": "Concept",
    "process.step1.body": "Site analysis and first design alternatives, tested against the brief.",
    "process.step2.title": "Feasibility",
    "process.step2.body": "Viability studies and massing options, optimised for value and buildability.",
    "process.step3.title": "Design Development",
    "process.step3.body": "Coordinated design from preliminary through detail, ready for tender.",
    "process.step4.title": "Delivery",
    "process.step4.body": "Advice and supervision alongside your trusted builder, through to completion.",

    "services.eyebrow": "Services",
    "services.title": "One studio, every<br>building typology.",
    "services.lede": "From a single private villa to the masterplan of a district, we bring the same rigour to every scale — and the same early-phase discipline that keeps each project grounded in what's actually buildable.",

    "card1.tag": "Typ. 01",
    "card1.title": "Residential — Private Villas",
    "card1.body": "From premium family homes to the most exigent luxury briefs, we design tailored living spaces built to the highest standard — pushing past convention wherever imagination allows.",
    "card2.tag": "Typ. 02",
    "card2.title": "Multi-Residential",
    "card2.body": "Pioneering shared living spaces designed around community — quality homes where people live, gather and feel safe.",
    "card3.tag": "Typ. 03",
    "card3.title": "Urban &amp; Landscape Design",
    "card3.body": "Helping shape communities from the urban fabric up — quality public space for citizens of every age.",
    "card4.tag": "Typ. 04",
    "card4.title": "Sports &amp; Events",
    "card4.body": "Stadia, arenas and event venues designed as icons within the city's skyline — built for the milestones of our shared social life.",
    "card5.tag": "Typ. 05",
    "card5.title": "Transportation",
    "card5.body": "Mobility is central to modern life. We design transit spaces that remove friction and turn transit into experience.",
    "card6.tag": "Typ. 06",
    "card6.title": "Technology &amp; Visual Storytelling",
    "card6.body": "We use VR, AI and immersive visualisation to let clients experience a project before it's built — testing layouts, materials and atmosphere in real time, and telling its story in the most compelling way possible.",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Let's shape<br>what's next.",
    "contact.lede": "Tell us about your site, your ambitions and your constraints — we'll help you find the most buildable, most profitable version of your project.",
    "contact.btn1": "Say Hello",
    "contact.btn2": "Book a Consultation",
    "contact.meta.studio.label": "Studio",
    "contact.meta.studio.value": "Costa de la Luz, Spain",
    "contact.meta.scope.label": "Scope",
    "contact.meta.scope.value": "Concept · Feasibility · Design Development",
    "contact.meta.follow.label": "Follow",

    "footer.copyright": "Arqlántico Studio. All rights reserved."
  },

  es: {
    "nav.studio": "Estudio",
    "nav.process": "Proceso",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.cta": "Iniciar un proyecto",

    "hero.eyebrow": "Estudio de Arquitectura y Diseño Urbano",
    "hero.title": "La singularidad es<br>parte de nuestro <em>ADN.</em>",
    "hero.sub": "Damos forma a los momentos más tempranos y decisivos de un proyecto — desde el primer boceto hasta una viabilidad demostrada — convirtiendo visiones ambiciosas en hitos dentro de la ciudad.",
    "hero.cta1": "Iniciar un proyecto",
    "hero.cta2": "Nuestro enfoque",
    "hero.meta": "Estudio Costero y Urbano",
    "hero.scroll": "Desplázate",

    "studio.eyebrow": "Estudio",
    "studio.title": "Diseño guiado<br>por una visión.",
    "studio.lede": "Somos especialistas en diseño. Trabajando de la mano con la visión de cada cliente, creamos una arquitectura lo bastante singular como para convertirse en un referente dentro de su ciudad.",
    "studio.body": "Te acompañamos durante todo el proceso, asegurándonos de que cada decisión de diseño responda fielmente a tus expectativas. Y una vez estés listo para construir, seguimos a tu lado — asesorando y supervisando junto a tu constructor de confianza, hasta la finalización de la obra.",
    "studio.stat1.dt": "Tipologías",
    "studio.stat1.dd": "Residencial, urbano, cívico y deportivo",
    "studio.stat2.dt": "Enfoque",
    "studio.stat2.dd": "Del concepto a la viabilidad",
    "studio.stat3.dt": "Método",
    "studio.stat3.dd": "Diseño, datos y visualización",
    "studio.cap": "Juntos, hacemos ciudad.",

    "process.eyebrow": "Nuestro Proceso",
    "process.title": "Primero, la viabilidad.<br>Certeza antes del compromiso.",
    "process.lede": "Dar forma a un desarrollo es una tarea exigente. Te acompañamos durante todo el proceso de viabilidad, contrastando alternativas de diseño hasta que tu proyecto alcanza su versión más rentable y más construible — combinando uso residencial, hotelero, comercial, urbanismo y paisajismo en una propuesta única y coherente.",
    "process.step1.title": "Concepto",
    "process.step1.body": "Análisis del emplazamiento y primeras alternativas de diseño, contrastadas con el encargo.",
    "process.step2.title": "Viabilidad",
    "process.step2.body": "Estudios de viabilidad y opciones volumétricas, optimizados en valor y capacidad constructiva.",
    "process.step3.title": "Desarrollo del Proyecto",
    "process.step3.body": "Diseño coordinado desde el anteproyecto hasta el detalle, listo para licitación.",
    "process.step4.title": "Entrega",
    "process.step4.body": "Asesoramiento y supervisión junto a tu constructor de confianza, hasta la finalización.",

    "services.eyebrow": "Servicios",
    "services.title": "Un estudio, todas<br>las tipologías edificatorias.",
    "services.lede": "Desde una única vivienda unifamiliar hasta el masterplan de un distrito, aplicamos el mismo rigor a cada escala — y la misma disciplina de fase temprana que mantiene cada proyecto anclado a lo que realmente es construible.",

    "card1.tag": "Tip. 01",
    "card1.title": "Residencial — Viviendas Privadas",
    "card1.body": "Desde viviendas familiares premium hasta los encargos de lujo más exigentes, diseñamos espacios habitables a medida, construidos con el máximo estándar — superando lo convencional allí donde la imaginación lo permite.",
    "card2.tag": "Tip. 02",
    "card2.title": "Multirresidencial",
    "card2.body": "Espacios de vida compartida pioneros, pensados para la comunidad — viviendas de calidad donde las personas conviven, se relacionan y se sienten seguras.",
    "card3.tag": "Tip. 03",
    "card3.title": "Urbanismo y Paisajismo",
    "card3.body": "Ayudamos a dar forma a las comunidades desde el propio tejido urbano — espacio público de calidad para ciudadanos de cualquier edad.",
    "card4.tag": "Tip. 04",
    "card4.title": "Deporte y Eventos",
    "card4.body": "Estadios, pabellones y recintos para eventos diseñados como iconos dentro del perfil de la ciudad — construidos para los grandes hitos de nuestra vida social.",
    "card5.tag": "Tip. 05",
    "card5.title": "Transporte",
    "card5.body": "La movilidad es hoy central en la vida cotidiana. Diseñamos espacios de tránsito que eliminan la fricción y convierten el trayecto en experiencia.",
    "card6.tag": "Tip. 06",
    "card6.title": "Tecnología y Narrativa Visual",
    "card6.body": "Empleamos VR, IA y visualización inmersiva para que los clientes experimenten un proyecto antes de construirlo — probando distribuciones, materiales y atmósferas en tiempo real, y contando su historia de la forma más convincente posible.",

    "contact.eyebrow": "Hablemos",
    "contact.title": "Demos forma<br>a lo que viene.",
    "contact.lede": "Cuéntanos sobre tu emplazamiento, tus ambiciones y tus condicionantes — te ayudaremos a encontrar la versión más construible y más rentable de tu proyecto.",
    "contact.btn1": "Escríbenos",
    "contact.btn2": "Reserva una consulta",
    "contact.meta.studio.label": "Estudio",
    "contact.meta.studio.value": "Costa de la Luz, España",
    "contact.meta.scope.label": "Alcance",
    "contact.meta.scope.value": "Concepto · Viabilidad · Desarrollo del Proyecto",
    "contact.meta.follow.label": "Síguenos",

    "footer.copyright": "Arqlántico Studio. Todos los derechos reservados."
  },

  zh: {
    "nav.studio": "工作室",
    "nav.process": "流程",
    "nav.services": "服务",
    "nav.contact": "联系我们",
    "nav.cta": "启动项目",

    "hero.eyebrow": "建筑与城市设计工作室",
    "hero.title": "追求独特,<br>是我们的<em>基因。</em>",
    "hero.sub": "我们塑造项目最初、最关键的时刻——从最初的草图到经过验证的可行性方案——将雄心勃勃的愿景转化为城市地标。",
    "hero.cta1": "启动项目",
    "hero.cta2": "了解我们的方法",
    "hero.meta": "海岸与城市设计工作室",
    "hero.scroll": "向下滚动",

    "studio.eyebrow": "工作室",
    "studio.title": "以愿景<br>引领设计。",
    "studio.lede": "我们是设计领域的专家。与每位客户的愿景紧密协作,我们打造足以成为城市地标的独特建筑。",
    "studio.body": "我们将全程陪伴您完成整个设计流程,确保每一项设计决策都忠于您的期望。当您准备好动工建设时,我们仍将与您信赖的建筑承包商一起提供咨询与监督,直至项目竣工。",
    "studio.stat1.dt": "建筑类型",
    "studio.stat1.dd": "住宅、城市、公共与体育设施",
    "studio.stat2.dt": "核心方向",
    "studio.stat2.dd": "从概念设计到可行性研究",
    "studio.stat3.dt": "工作方法",
    "studio.stat3.dd": "设计、数据与可视化",
    "studio.cap": "携手共建城市。",

    "process.eyebrow": "我们的流程",
    "process.title": "可行性优先,<br>决策之前先求确定。",
    "process.lede": "为一个开发项目确立方向绝非易事。我们将与您一起完成整个可行性研究过程,并行比较各种设计方案,直至项目达到最具可建性、最具盈利性的版本——将住宅、酒店、商业、城市与景观设计融合为一个统一而连贯的方案。",
    "process.step1.title": "概念设计",
    "process.step1.body": "场地分析与初步设计方案,并对照项目任务书进行验证。",
    "process.step2.title": "可行性研究",
    "process.step2.body": "可行性研究与体量方案优化,兼顾价值与可建性。",
    "process.step3.title": "深化设计",
    "process.step3.body": "从初步设计到详细设计的统筹协调,为招标做好准备。",
    "process.step4.title": "项目交付",
    "process.step4.body": "与您信赖的建筑承包商共同提供咨询与监督,直至项目全面完工。",

    "services.eyebrow": "服务",
    "services.title": "一个工作室,<br>涵盖所有建筑类型。",
    "services.lede": "从单栋私人别墅到整个片区的总体规划,我们以同样的严谨态度对待每一种尺度——并始终坚持早期阶段的专业纪律,确保每个项目都立足于真正的可建性。",

    "card1.tag": "类型 01",
    "card1.title": "住宅——私人别墅",
    "card1.body": "从高端家庭住宅到最苛刻的奢华定制项目,我们设计契合业主需求、品质卓越的居住空间——在想象力允许的范围内,不断突破常规。",
    "card2.tag": "类型 02",
    "card2.title": "集合住宅",
    "card2.body": "开创以社区为核心的共享居住空间——让人们安心生活、相聚交流的高品质住宅。",
    "card3.tag": "类型 03",
    "card3.title": "城市与景观设计",
    "card3.body": "从城市肌理本身出发,协助塑造社区——为各年龄段市民打造高品质的公共空间。",
    "card4.tag": "类型 04",
    "card4.title": "体育与活动场馆",
    "card4.body": "体育场、竞技场与活动场馆的设计,使其成为城市天际线中的地标性建筑——承载我们共同社会生活中的重要时刻。",
    "card5.tag": "类型 05",
    "card5.title": "交通设施",
    "card5.body": "出行已成为现代生活的核心。我们设计的交通空间旨在消除不便,将通行过程转化为一种体验。",
    "card6.tag": "类型 06",
    "card6.title": "科技与视觉叙事",
    "card6.body": "我们运用虚拟现实(VR)、人工智能(AI)与沉浸式可视化技术,让客户在项目建成之前即可身临其境地体验——实时测试空间布局、材质与氛围,并以最具感染力的方式讲述项目的故事。",

    "contact.eyebrow": "联系我们",
    "contact.title": "携手共创<br>未来。",
    "contact.lede": "请告诉我们您的场地条件、愿景与限制因素——我们将协助您找到项目中最具可建性、最具盈利性的方案。",
    "contact.btn1": "打个招呼",
    "contact.btn2": "预约咨询",
    "contact.meta.studio.label": "工作室",
    "contact.meta.studio.value": "西班牙,光之海岸",
    "contact.meta.scope.label": "服务范围",
    "contact.meta.scope.value": "概念设计 · 可行性研究 · 深化设计",
    "contact.meta.follow.label": "关注我们",

    "footer.copyright": "Arqlántico 建筑工作室。保留所有权利。"
  },

  ar: {
    "nav.studio": "الاستوديو",
    "nav.process": "منهجيتنا",
    "nav.services": "الخدمات",
    "nav.contact": "تواصل معنا",
    "nav.cta": "ابدأ مشروعك",

    "hero.eyebrow": "استوديو العمارة والتصميم الحضري",
    "hero.title": "التفرّد جزء<br>من <em>جوهرنا.</em>",
    "hero.sub": "نصوغ أكثر لحظات المشروع حسماً في مراحله الأولى — من أول رسم تخطيطي إلى دراسة جدوى مؤكدة — لنحوّل الرؤى الطموحة إلى معالم بارزة داخل المدينة.",
    "hero.cta1": "ابدأ مشروعك",
    "hero.cta2": "منهجيتنا",
    "hero.meta": "استوديو ساحلي وحضري",
    "hero.scroll": "مرر للأسفل",

    "studio.eyebrow": "الاستوديو",
    "studio.title": "تصميم تقوده<br>الرؤية.",
    "studio.lede": "نحن متخصصون في التصميم. نعمل يداً بيد مع رؤية كل عميل، لنبتكر عمارة متفرّدة بما يكفي لتصبح معلماً داخل مدينتها.",
    "studio.body": "نرافقكم خلال العملية بأكملها، ونحرص على أن يتوافق كل قرار تصميمي مع توقعاتكم. وحين تكونون جاهزين للبناء، نبقى إلى جانبكم — نقدّم الاستشارة والإشراف جنباً إلى جنب مع مقاول البناء الذي تثقون به، حتى إتمام المشروع.",
    "studio.stat1.dt": "التخصصات",
    "studio.stat1.dd": "سكني، حضري، عام ورياضي",
    "studio.stat2.dt": "التركيز",
    "studio.stat2.dd": "من التصور إلى دراسة الجدوى",
    "studio.stat3.dt": "المنهجية",
    "studio.stat3.dd": "التصميم، البيانات والتصور المرئي",
    "studio.cap": "معاً، نصنع المدينة.",

    "process.eyebrow": "منهجية عملنا",
    "process.title": "الجدوى أولاً.<br>يقين قبل الالتزام.",
    "process.lede": "بلورة مشروع تطويري مهمة شاقة. نرافقكم خلال عملية دراسة الجدوى بأكملها، ونختبر البدائل التصميمية جنباً إلى جنب حتى يصل مشروعكم إلى نسخته الأكثر قابلية للتنفيذ والأعلى ربحية — جامعين بين الاستخدامات السكنية والفندقية والتجارية والتصميم الحضري والمناظر الطبيعية في مقترح واحد متماسك.",
    "process.step1.title": "التصور",
    "process.step1.body": "تحليل الموقع وأولى البدائل التصميمية، يتم اختبارها في ضوء متطلبات المشروع.",
    "process.step2.title": "دراسة الجدوى",
    "process.step2.body": "دراسات جدوى وخيارات كتلية، مُحسَّنة من حيث القيمة وقابلية التنفيذ.",
    "process.step3.title": "تطوير التصميم",
    "process.step3.body": "تصميم منسّق من المرحلة الأولية وحتى التفاصيل، جاهز لطرح المناقصة.",
    "process.step4.title": "التسليم",
    "process.step4.body": "استشارة وإشراف جنباً إلى جنب مع مقاول البناء الذي تثقون به، وحتى إتمام المشروع.",

    "services.eyebrow": "الخدمات",
    "services.title": "استوديو واحد، لكل<br>أنماط المباني.",
    "services.lede": "من فيلا سكنية واحدة إلى المخطط العام لحيّ كامل، نطبّق الصرامة ذاتها على كل مقياس — والانضباط ذاته في المراحل المبكرة الذي يبقي كل مشروع مرتكزاً على ما هو قابل للتنفيذ فعلياً.",

    "card1.tag": "نمط ٠١",
    "card1.title": "سكني — فلل خاصة",
    "card1.body": "من المنازل العائلية الراقية إلى أكثر المتطلبات فخامة، نصمم مساحات سكنية مخصصة بأعلى المعايير — متجاوزين المألوف حيثما سمح الخيال.",
    "card2.tag": "نمط ٠٢",
    "card2.title": "سكني متعدد الوحدات",
    "card2.body": "مساحات سكنية مشتركة رائدة، مصممة من أجل المجتمع — منازل عالية الجودة يعيش فيها الناس ويلتقون ويشعرون بالأمان.",
    "card3.tag": "نمط ٠٣",
    "card3.title": "التصميم الحضري والمناظر الطبيعية",
    "card3.body": "نساهم في تشكيل المجتمعات انطلاقاً من النسيج الحضري ذاته — فضاءات عامة عالية الجودة لمواطنين من كل الأعمار.",
    "card4.tag": "نمط ٠٤",
    "card4.title": "الرياضة والفعاليات",
    "card4.body": "ملاعب وصالات ومنشآت فعاليات مصممة لتكون معالم بارزة ضمن أفق المدينة — مُشيَّدة من أجل اللحظات الكبرى في حياتنا الاجتماعية المشتركة.",
    "card5.tag": "نمط ٠٥",
    "card5.title": "النقل",
    "card5.body": "أصبح التنقل محورياً في الحياة الحديثة. نصمم مساحات النقل بحيث تزيل الاحتكاك وتحوّل التنقل إلى تجربة.",
    "card6.tag": "نمط ٠٦",
    "card6.title": "التقنية والسرد البصري",
    "card6.body": "نستخدم الواقع الافتراضي والذكاء الاصطناعي والتصور الغامر لنمكّن العملاء من تجربة المشروع قبل إنشائه — باختبار المخططات والمواد والأجواء في الزمن الحقيقي، وسرد قصته بأكثر الطرق تأثيراً.",

    "contact.eyebrow": "تواصل معنا",
    "contact.title": "لنصمّم معاً<br>ما هو قادم.",
    "contact.lede": "أخبرونا عن موقعكم وطموحاتكم ومحدداتكم — وسنساعدكم في إيجاد النسخة الأكثر قابلية للتنفيذ والأعلى ربحية من مشروعكم.",
    "contact.btn1": "راسلنا",
    "contact.btn2": "احجز استشارة",
    "contact.meta.studio.label": "الاستوديو",
    "contact.meta.studio.value": "كوستا دي لا لوث، إسبانيا",
    "contact.meta.scope.label": "نطاق العمل",
    "contact.meta.scope.value": "التصور · دراسة الجدوى · تطوير التصميم",
    "contact.meta.follow.label": "تابعونا",

    "footer.copyright": "استوديو أركلانتيكو. جميع الحقوق محفوظة."
  }
};

(function () {
  const STORAGE_KEY = "arq-lang";
  const SUPPORTED = ["en", "es", "zh", "ar"];
  const RTL_LANGS = ["ar"];

  function detectLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) { /* localStorage unavailable — fall through to detection */ }

    const browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "en"];

    for (const raw of browserLangs) {
      const l = raw.toLowerCase();
      if (l.startsWith("es")) return "es";
      if (l.startsWith("zh")) return "zh";
      if (l.startsWith("ar")) return "ar";
      if (l.startsWith("en")) return "en";
    }
    return "en";
  }

  function applyLanguage(lang) {
    if (!ARQ_TRANSLATIONS[lang]) lang = "en";
    const dict = ARQ_TRANSLATIONS[lang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    const isRTL = RTL_LANGS.includes(lang);
    document.documentElement.setAttribute("lang", lang === "zh" ? "zh-Hans" : lang);
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
    document.documentElement.classList.toggle("lang-zh", lang === "zh");
    document.documentElement.classList.toggle("lang-ar", lang === "ar");

    document.querySelectorAll(".lang-switch__btn").forEach(btn => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-switch__btn").forEach(btn => {
      btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang")));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLangSwitch();
    applyLanguage(detectLanguage());
  });
})();
