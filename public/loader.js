// Loading screen (markup in index.html, styles in loader.css).
// - texts in the visitor's language (same rules as src/i18n.tsx)
// - progress bar + terminal-style steps, ~3 s; waits at 90% until the site says it is ready
// - shown once per visit, skipped for visitors who prefer reduced motion

(function () {
  var loader = document.getElementById('loader');
  if (!loader) return;

  var seen = false;
  try { seen = !!sessionStorage.getItem('loaderSeen'); } catch (e) {}
  if (seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    loader.remove();
    return;
  }

  var TEXTS = {
    fr: { role: 'Développeur Full-Stack Junior', steps: ['Initialisation…', 'Chargement des projets…', 'Compilation des compétences…', 'Prêt ✓'] },
    en: { role: 'Junior Full-Stack Developer', steps: ['Initializing…', 'Loading projects…', 'Compiling skills…', 'Ready ✓'] },
    ar: { role: 'مطوّر Full-Stack مبتدئ', steps: ['جارٍ التهيئة…', 'تحميل المشاريع…', 'تجميع المهارات…', 'جاهز ✓'] },
  };

  // 1. link (/fr/ or ?lang=fr)  2. last choice  3. browser language  4. English
  function pickLang() {
    var fromPath = location.pathname.split('/')[1];
    if (TEXTS[fromPath]) return fromPath;
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (TEXTS[fromUrl]) return fromUrl;
    try { var saved = localStorage.getItem('lang'); if (TEXTS[saved]) return saved; } catch (e) {}
    var browser = (navigator.language || '').slice(0, 2);
    return TEXTS[browser] ? browser : 'en';
  }

  var lang = pickLang();
  var text = TEXTS[lang];
  var content = loader.querySelector('.loader-content');
  loader.querySelector('.loader-role').textContent = text.role;
  if (lang === 'ar') content.dir = 'rtl';

  var DURATION = 3000;
  var bar = loader.querySelector('.loader-bar span');
  var pct = loader.querySelector('.loader-pct');
  var step = loader.querySelector('.loader-step');
  var start = performance.now();
  var ready = false;
  var finished = false;

  document.addEventListener('app-ready', function () { ready = true; });
  setTimeout(function () { ready = true; }, 5000); // never stay stuck

  function frame(now) {
    var t = Math.min((now - start) / DURATION, 1);
    var progress = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // ease-in-out: each step stays readable
    if (!ready) progress = Math.min(progress, 0.9);

    bar.style.transform = 'scaleX(' + progress + ')';
    pct.textContent = Math.floor(progress * 100) + '%'; // 100% only together with the last step
    var last = text.steps.length - 1;
    step.textContent = text.steps[progress >= 1 ? last : Math.min(Math.floor(progress * last), last - 1)];

    if (progress >= 1) finish();
    else requestAnimationFrame(frame);
  }

  function finish() {
    if (finished) return;
    finished = true;
    try { sessionStorage.setItem('loaderSeen', '1'); } catch (e) {}
    setTimeout(function () {
      loader.classList.add('loader-hide');
      setTimeout(function () { loader.remove(); }, 1000);
    }, 500); // let "Ready ✓" show for a moment
  }

  requestAnimationFrame(frame);
})();
