/* ===== CONFIG — عدّل هنا فقط ===== */
const CONFIG = {
  // Google Apps Script web-app URL (يكتب الحجز في Google Calendar). فارغ = وضع تجريبي
  bookingEndpoint: "",
  // رقم واتساب المركز بصيغة دولية بدون + (مثال: 905xxxxxxxxx). فارغ = لا يُفتح واتساب
  whatsapp: "",
  instagram: "",   // مثال: "https://instagram.com/xxxx"
  phone: "",       // مثال: "+90 5xx xxx xx xx"
  address: "",
  mapsUrl: "",
  hours: { open: 10, close: 19, slotMinutes: 60, closedWeekdays: [0] }, // 0 = الأحد
  services: [
    { id: "carbon", featured: true },
    { id: "hair" },
    { id: "skin" },
    { id: "spot" }
  ]
};

/* ===== i18n ===== */
const T = {
  tr: {
    nav_carbon:"Carbon Laser", nav_services:"Hizmetler", nav_process:"Süreç", nav_film:"Film", nav_book:"Randevu al",
    h_eyebrow:"Beauty Centre · Carbon Laser", h_title:"Işıldayan cilt. Zarif bir güven.",
    h_lead:"Karbon lazer teknolojisiyle daha pürüzsüz, daha aydınlık ve daha genç görünen bir cilt — Elite Life Beauty Centre'de.",
    h_cta:"Randevunu al", h_cta2:"Carbon Laser'i keşfet", h_m1:"Onaylı cihazlar", h_m2:"Tam sterilizasyon", h_m3:"Kişiye özel seans", chip2:"Cilt tonu eşitleme",
    c_eyebrow:"Carbon Laser", c_title:"Daha ince, daha parlak, daha aydınlık bir cilt.",
    c_lead:"Karbon ve lazeri birleştiren gelişmiş teknoloji; her seansta cildinizi daha berrak, parlak ve pürüzsüz hale getirir.",
    b1:"Cilt tonunu aydınlatır ve eşitler", b2:"Pigmentasyon ve koyu lekeleri giderir", b3:"Gözenekleri derinlemesine temizler, akne oluşumunu azaltır",
    b4:"Kolajen üretimini uyarır, cildi sıkılaştırır", b5:"Cilt dokusunu ve genel görünümü iyileştirir",
    s_t:"Tam sterilizasyon, tam güvenlik", s_p:"Onaylı cihazlar ve en yüksek hijyen standartları ile güvenliğiniz ve rahatınız önceliğimizdir.",
    tag1:"Karbon uygulaması", tag2:"Cilt hazırlığı",
    p_eyebrow:"Süreç", p_title:"Üç adımda ışıltı",
    st1_t:"Karbon uygulanır", st1_p:"Cilt analiz edilir; ince bir karbon tabakası hassas biçimde uygulanır.",
    st2_t:"Lazer dokunuşu", st2_p:"Cilt tipinize göre ayarlanan enerji ile lazer, karbonla birlikte çalışır.",
    st3_t:"Parlayan sonuç", st3_p:"Cilt daha berrak, pürüzsüz ve canlı görünür; bakım önerileri paylaşılır.",
    sv_eyebrow:"Hizmetler", sv_title:"Bakımınız, size özel.", sv_lead:"Her misafirimiz için cilt yapısına göre kişisel bir plan hazırlıyoruz.",
    sv_note:"Fiyat bilgisi için bizimle iletişime geçin; seans süresi ve fiyat cilt tipine göre değişir.", sv_book:"Randevu al",
    svc_carbon:["Carbon Laser","Cilt tonunu eşitleyen, gözenekleri temizleyen ve ışıltı veren karbon lazer seansı."],
    svc_hair:["Lazer Epilasyon","İstenmeyen tüylerde kalıcı azalma için profesyonel lazer uygulaması."],
    svc_skin:["Cilt Bakımı","Cilt tipinize göre hazırlanan derin temizlik ve yenileyici bakım."],
    svc_spot:["Leke & İz Bakımı","Koyu lekeler ve izler için hedefe yönelik bakım planı."],
    badge:"İmza hizmet",
    f_eyebrow:"Film", f_title:"Seansı yakından görün.", f_lead:"Uzmanımız Carbon Laser'in nasıl çalıştığını anlatıyor.", f_play:"Sesli izle", f_mute:"Sesi kapat",
    bk_eyebrow:"Online randevu", bk_title:"Randevunu oluştur", bk_lead:"Birkaç adımda yerinizi ayırtın.",
    w1:"Hizmet", w2:"Tarih & saat", w3:"Bilgilerin", w4:"Onay",
    f_name:"Ad Soyad", f_phone:"Telefon", f_note:"Not (isteğe bağlı)", back:"Geri", next:"Devam", confirm:"Randevuyu onayla", sending:"Gönderiliyor…",
    pick_svc:"Lütfen bir hizmet seçin.", pick_dt:"Lütfen tarih ve saat seçin.", need_name:"Lütfen adınızı yazın.", need_phone:"Geçerli bir telefon numarası girin.",
    slots_pick:"Önce bir gün seçin", slots_for:"Uygun saatler", s_svc:"Hizmet", s_date:"Tarih", s_time:"Saat", s_name:"Ad Soyad", s_phone:"Telefon",
    ok_t:"Randevu talebin alındı", ok_p:"En kısa sürede seni arayıp onaylayacağız.", ok_demo:"(Demo modu: bağlantı henüz yapılandırılmadı)",
    err_send:"Gönderilemedi, lütfen tekrar deneyin.", wa:"WhatsApp ile gönder",
    days:["Pt","Sa","Ça","Pe","Cu","Ct","Pa"], loc:"tr-TR", f_ig:"Instagram", f_call:"Ara", f_map:"Yol tarifi"
  },
  en: {
    nav_carbon:"Carbon Laser", nav_services:"Services", nav_process:"Process", nav_film:"Film", nav_book:"Book now",
    h_eyebrow:"Beauty Centre · Carbon Laser", h_title:"Glowing skin. Quiet confidence.",
    h_lead:"Smoother, brighter, younger-looking skin with carbon laser technology — at Elite Life Beauty Centre.",
    h_cta:"Book now", h_cta2:"Discover Carbon Laser", h_m1:"Certified devices", h_m2:"Full sterilisation", h_m3:"Tailored sessions", chip2:"Skin tone evening",
    c_eyebrow:"Carbon Laser", c_title:"Finer, brighter, more luminous skin.",
    c_lead:"An advanced technique that combines carbon and laser — leaving skin clearer, brighter and smoother with every session.",
    b1:"Brightens and evens out skin tone", b2:"Removes pigmentation and dark spots", b3:"Deep-cleans pores and reduces breakouts",
    b4:"Stimulates collagen to firm the skin", b5:"Improves skin texture and overall appearance",
    s_t:"Full sterilisation, complete safety", s_p:"Certified devices and the highest hygiene standards — your safety and comfort come first.",
    tag1:"Carbon application", tag2:"Skin prep",
    p_eyebrow:"Process", p_title:"Glow in three steps",
    st1_t:"Carbon is applied", st1_p:"Your skin is assessed and a fine carbon layer is applied with precision.",
    st2_t:"The laser touch", st2_p:"Energy is tuned to your skin type as the laser works with the carbon.",
    st3_t:"Radiant result", st3_p:"Skin looks clearer, smoother and livelier; aftercare tips are shared.",
    sv_eyebrow:"Services", sv_title:"Care, made for you.", sv_lead:"Every guest gets a personal plan built around their skin.",
    sv_note:"Contact us for pricing; session length and price depend on skin type.", sv_book:"Book now",
    svc_carbon:["Carbon Laser","A carbon laser session that evens skin tone, cleans pores and adds glow."],
    svc_hair:["Laser Hair Removal","Professional laser treatment for lasting reduction of unwanted hair."],
    svc_skin:["Skin Care","Deep cleansing and renewing care chosen for your skin type."],
    svc_spot:["Spot & Mark Care","A targeted plan for dark spots and marks."],
    badge:"Signature",
    f_eyebrow:"Film", f_title:"See a session up close.", f_lead:"Our specialist explains how Carbon Laser works.", f_play:"Watch with sound", f_mute:"Mute",
    bk_eyebrow:"Online booking", bk_title:"Book your appointment", bk_lead:"Reserve your spot in a few steps.",
    w1:"Service", w2:"Date & time", w3:"Your details", w4:"Confirm",
    f_name:"Full name", f_phone:"Phone", f_note:"Note (optional)", back:"Back", next:"Continue", confirm:"Confirm booking", sending:"Sending…",
    pick_svc:"Please choose a service.", pick_dt:"Please choose a date and time.", need_name:"Please enter your name.", need_phone:"Enter a valid phone number.",
    slots_pick:"Pick a day first", slots_for:"Available times", s_svc:"Service", s_date:"Date", s_time:"Time", s_name:"Name", s_phone:"Phone",
    ok_t:"Booking request received", ok_p:"We'll call you shortly to confirm.", ok_demo:"(Demo mode: connection not configured yet)",
    err_send:"Could not send, please try again.", wa:"Send via WhatsApp",
    days:["Mo","Tu","We","Th","Fr","Sa","Su"], loc:"en-GB", f_ig:"Instagram", f_call:"Call", f_map:"Directions"
  },
  ar: {
    nav_carbon:"الليزر الكربوني", nav_services:"الخدمات", nav_process:"المراحل", nav_film:"الفيديو", nav_book:"احجزي الآن",
    h_eyebrow:"مركز تجميل · الليزر الكربوني", h_title:"بشرة أنقى.. ثقة أكبر",
    h_lead:"تقنية الليزر الكربوني لبشرة أنعم وأكثر إشراقاً ونضارة — في Elite Life Beauty Centre.",
    h_cta:"احجزي موعدك", h_cta2:"اكتشفي الليزر الكربوني", h_m1:"أجهزة معتمدة", h_m2:"تعقيم كامل", h_m3:"جلسات مخصصة لك", chip2:"توحيد لون البشرة",
    c_eyebrow:"الليزر الكربوني", c_title:"بشرة أكثر نضارة وإشراقاً.",
    c_lead:"تقنية متطورة تجمع بين الكربون والليزر لتمنحك بشرة أنقى، أفتح وأكثر إشراقاً مع كل جلسة.",
    b1:"تفتيح وتوحيد لون البشرة", b2:"إزالة التصبغات والبقع الداكنة", b3:"تنظيف عميق للمسام والحد من حب الشباب",
    b4:"تحفيز إنتاج الكولاجين لشد البشرة", b5:"تحسين ملمس البشرة ومظهرها العام",
    s_t:"تعقيم كامل وأمان تام", s_p:"يتم استخدام أجهزة معتمدة وأعلى معايير التعقيم لضمان سلامتك وراحتك.",
    tag1:"وضع الكربون", tag2:"تحضير البشرة",
    p_eyebrow:"المراحل", p_title:"إشراقة في ثلاث خطوات",
    st1_t:"وضع الكربون", st1_p:"يتم تقييم البشرة ثم وضع طبقة رقيقة من الكربون بدقة.",
    st2_t:"لمسة الليزر", st2_p:"طاقة مضبوطة حسب نوع بشرتك يعمل بها الليزر مع الكربون.",
    st3_t:"نتيجة مشرقة", st3_p:"بشرة أنقى وأنعم وأكثر حيوية مع نصائح للعناية بعد الجلسة.",
    sv_eyebrow:"الخدمات", sv_title:"عناية مصمّمة لك.", sv_lead:"نعدّ لكل ضيفة خطة خاصة بحسب طبيعة بشرتها.",
    sv_note:"للاستفسار عن الأسعار تواصلي معنا؛ المدة والسعر يختلفان حسب نوع البشرة.", sv_book:"احجزي الآن",
    svc_carbon:["الليزر الكربوني","جلسة ليزر كربوني توحّد لون البشرة وتنظف المسام وتمنحها إشراقة."],
    svc_hair:["إزالة الشعر بالليزر","علاج ليزر احترافي لتقليل الشعر غير المرغوب فيه بشكل دائم."],
    svc_skin:["العناية بالبشرة","تنظيف عميق وعناية مجددة بحسب نوع بشرتك."],
    svc_spot:["علاج البقع والآثار","خطة موجهة للبقع الداكنة والآثار."],
    badge:"الأشهر",
    f_eyebrow:"الفيديو", f_title:"شاهدي الجلسة عن قرب.", f_lead:"خبيرتنا تشرح كيف يعمل الليزر الكربوني.", f_play:"شاهدي بالصوت", f_mute:"كتم الصوت",
    bk_eyebrow:"حجز أونلاين", bk_title:"احجزي موعدك", bk_lead:"احجزي مكانك في خطوات بسيطة.",
    w1:"الخدمة", w2:"التاريخ والوقت", w3:"بياناتك", w4:"التأكيد",
    f_name:"الاسم الكامل", f_phone:"رقم الهاتف", f_note:"ملاحظة (اختياري)", back:"رجوع", next:"متابعة", confirm:"تأكيد الحجز", sending:"جارٍ الإرسال…",
    pick_svc:"يرجى اختيار خدمة.", pick_dt:"يرجى اختيار التاريخ والوقت.", need_name:"يرجى كتابة الاسم.", need_phone:"أدخلي رقم هاتف صحيح.",
    slots_pick:"اختاري يوماً أولاً", slots_for:"الأوقات المتاحة", s_svc:"الخدمة", s_date:"التاريخ", s_time:"الوقت", s_name:"الاسم", s_phone:"الهاتف",
    ok_t:"تم استلام طلب الحجز", ok_p:"سنتصل بك قريباً لتأكيد الموعد.", ok_demo:"(وضع تجريبي: لم يتم ربط الحجز بعد)",
    err_send:"تعذّر الإرسال، حاولي مجدداً.", wa:"أرسلي عبر واتساب",
    days:["إث","ثل","أر","خم","جم","سب","أح"], loc:"ar", f_ig:"إنستغرام", f_call:"اتصال", f_map:"الاتجاهات"
  }
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
let lang = "tr";
try { const sv = localStorage.getItem("el_lang"); if (sv && T[sv]) lang = sv; } catch (e) {}
const t = k => (T[lang][k] ?? T.tr[k] ?? k);

/* ===== state ===== */
const S = { step: 0, svc: null, date: null, time: null, month: new Date(), done: false };
S.month.setDate(1);
const pad = n => String(n).padStart(2, "0");
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/* ===== render ===== */
function applyLang() {
  const L = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { const v = L[el.dataset.i18n]; if (typeof v === "string") el.textContent = v; });
  $$("#lang button").forEach(b => b.classList.toggle("on", b.dataset.l === lang));
  renderH1(); renderCards(); renderPick(); renderCal(); renderSlots(); renderSummary(); renderFoot(); syncNav();
  $("#playTxt").textContent = $("#story").muted ? t("f_play") : t("f_mute");
  document.title = "Elite Life Beauty Centre — " + t("nav_carbon");
}
function renderH1() {
  const h = $("#h1"), words = t("h_title").split(" ");
  h.innerHTML = words.map(w => `<span class="w"><span>${w}</span></span>`).join("");
  if (window.gsap && document.documentElement.classList.contains("gsap") && !window.__first)
    gsap.from("#h1 .w span", { yPercent: 115, duration: 1.1, ease: "expo.out", stagger: .09, delay: .2 });
}
function renderCards() {
  $("#cards").innerHTML = CONFIG.services.map((s, i) => {
    const [n, d] = t("svc_" + s.id);
    return `<article class="card tilt" data-r><span class="no">0${i + 1}</span>${s.featured ? `<span class="badge">${t("badge")}</span>` : ""}<h3>${n}</h3><p>${d}</p><a href="#book" data-pick="${s.id}">${t("sv_book")} →</a></article>`;
  }).join("");
  $$("#cards [data-pick]").forEach(a => a.addEventListener("click", () => { S.svc = a.dataset.pick; S.step = 1; renderPick(); showStep(); }));
  $$("#cards .card").forEach(c => c.addEventListener("pointermove", e => {
    const r = c.getBoundingClientRect(); c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px");
  }));
  if (window.gsap && document.documentElement.classList.contains("gsap") && window.__first) gsap.set("#cards .card", { opacity: 1 });
}
function renderPick() {
  $("#svcPick").innerHTML = CONFIG.services.map(s => {
    const [n, d] = t("svc_" + s.id);
    return `<button class="opt ${S.svc === s.id ? "sel" : ""}" data-s="${s.id}"><b>${n}</b><small>${d}</small></button>`;
  }).join("");
  $$("#svcPick .opt").forEach(b => b.addEventListener("click", () => { S.svc = b.dataset.s; renderPick(); $("#err").textContent = ""; }));
}
function renderCal() {
  const L = T[lang], m = S.month;
  $("#monthLbl").textContent = m.toLocaleDateString(L.loc, { month: "long", year: "numeric" });
  $("#calW").innerHTML = L.days.map(d => `<span>${d}</span>`).join("");
  const first = (new Date(m.getFullYear(), m.getMonth(), 1).getDay() + 6) % 7;
  const dim = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate();
  const today = new Date(); today.setHours(0, 0, 0, 0);
  let h = "<span></span>".repeat(first);
  for (let d = 1; d <= dim; d++) {
    const dt = new Date(m.getFullYear(), m.getMonth(), d);
    const off = dt < today || CONFIG.hours.closedWeekdays.includes(dt.getDay());
    const cls = [ymd(dt) === S.date ? "sel" : "", +dt === +today ? "today" : ""].join(" ");
    h += `<button class="${cls}" data-d="${ymd(dt)}" ${off ? "disabled" : ""}>${d}</button>`;
  }
  $("#calG").innerHTML = h;
  $$("#calG button:not(:disabled)").forEach(b => b.addEventListener("click", () => { S.date = b.dataset.d; S.time = null; renderCal(); renderSlots(); $("#err").textContent = ""; }));
}
function renderSlots() {
  const g = $("#slotsG"), L = T[lang];
  if (!S.date) { $("#slotsT").textContent = t("slots_pick"); g.innerHTML = ""; return; }
  const d = new Date(S.date + "T00:00");
  $("#slotsT").textContent = t("slots_for") + " · " + d.toLocaleDateString(L.loc, { day: "numeric", month: "long", weekday: "long" });
  const { open, close, slotMinutes } = CONFIG.hours, now = new Date(), isToday = S.date === ymd(now);
  let h = "";
  for (let m = open * 60; m + slotMinutes <= close * 60; m += slotMinutes) {
    const tm = `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
    if (isToday && m <= now.getHours() * 60 + now.getMinutes()) continue;
    h += `<button class="slot ${S.time === tm ? "sel" : ""}" data-t="${tm}">${tm}</button>`;
  }
  g.innerHTML = h || `<small>—</small>`;
  $$("#slotsG .slot").forEach(b => b.addEventListener("click", () => { S.time = b.dataset.t; renderSlots(); $("#err").textContent = ""; }));
}
function summaryData() {
  const d = new Date(S.date + "T00:00");
  return [[t("s_svc"), (t("svc_" + S.svc) || ["—"])[0]], [t("s_date"), d.toLocaleDateString(T[lang].loc, { day: "numeric", month: "long", year: "numeric", weekday: "long" })],
    [t("s_time"), S.time], [t("s_name"), $("#fName").value.trim()], [t("s_phone"), $("#fPhone").value.trim()]];
}
function renderSummary() {
  if (S.step !== 3 || !S.svc || !S.date || !S.time) return;
  $("#sum").innerHTML = summaryData().map(([a, b]) => `<div><span>${a}</span><b><bdi>${b}</bdi></b></div>`).join("");
}
function renderFoot() {
  const f = [];
  if (CONFIG.instagram) f.push(`<a href="${CONFIG.instagram}" target="_blank" rel="noopener">${t("f_ig")}</a>`);
  if (CONFIG.phone) f.push(`<a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${t("f_call")} · ${CONFIG.phone}</a>`);
  if (CONFIG.mapsUrl) f.push(`<a href="${CONFIG.mapsUrl}" target="_blank" rel="noopener">${t("f_map")}</a>`);
  if (CONFIG.address) f.push(`<span>${CONFIG.address}</span>`);
  $("#footLinks").innerHTML = f.join("");
}

/* ===== wizard ===== */
function showStep() {
  $$(".pane").forEach(p => p.classList.toggle("on", +p.dataset.p === S.step));
  $$("#wzSteps li").forEach((li, i) => { li.classList.toggle("on", i === S.step); li.classList.toggle("fin", i < S.step); });
  $("#back").style.visibility = S.step === 0 || S.done ? "hidden" : "visible";
  $("#next").textContent = S.step === 3 ? t("confirm") : t("next");
  $("#next").style.display = S.done ? "none" : "";
  renderSummary();
}
function validate() {
  const e = $("#err"); e.textContent = "";
  if (S.step === 0 && !S.svc) return e.textContent = t("pick_svc"), false;
  if (S.step === 1 && (!S.date || !S.time)) return e.textContent = t("pick_dt"), false;
  if (S.step === 2) {
    if ($("#fName").value.trim().length < 2) return e.textContent = t("need_name"), false;
    if ($("#fPhone").value.replace(/\D/g, "").length < 9) return e.textContent = t("need_phone"), false;
  }
  return true;
}
async function submit() {
  const btn = $("#next"); btn.disabled = true; btn.textContent = t("sending");
  const d = new Date(S.date + "T" + S.time);
  const payload = { service: (t("svc_" + S.svc))[0], serviceId: S.svc, date: S.date, time: S.time,
    start: d.toISOString(), end: new Date(+d + CONFIG.hours.slotMinutes * 60000).toISOString(),
    name: $("#fName").value.trim(), phone: $("#fPhone").value.trim(), note: $("#fNote").value.trim(), lang };
  let demo = false;
  try {
    if (CONFIG.bookingEndpoint) {
      // text/plain يتجنب preflight مع Apps Script
      const r = await fetch(CONFIG.bookingEndpoint, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.ok === false) throw new Error("send");
    } else demo = true;
  } catch (err) { btn.disabled = false; btn.textContent = t("confirm"); $("#err").textContent = t("err_send"); return; }
  S.done = true; btn.disabled = false;
  $("#sum").hidden = true; $("#done").hidden = false;
  let p = t("ok_p") + (demo ? " " + t("ok_demo") : "");
  $("#okP").textContent = p;
  if (CONFIG.whatsapp) {
    const msg = encodeURIComponent(summaryData().map(([a, b]) => `${a}: ${b}`).join("\n"));
    $("#okP").insertAdjacentHTML("afterend", `<a class="btn gold" style="margin-top:22px" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whatsapp}?text=${msg}">${t("wa")}</a>`);
  }
  showStep();
}
$("#next").addEventListener("click", () => { if (!validate()) return; if (S.step === 3) return submit(); S.step++; showStep(); });
$("#back").addEventListener("click", () => { if (S.step > 0) { S.step--; $("#err").textContent = ""; showStep(); } });
$("#prevM").addEventListener("click", () => { S.month.setMonth(S.month.getMonth() - 1); renderCal(); });
$("#nextM").addEventListener("click", () => { S.month.setMonth(S.month.getMonth() + 1); renderCal(); });

/* ===== nav, lang, video ===== */
function syncNav() { $("#nav").classList.toggle("solid", scrollY > 30); }
addEventListener("scroll", () => {
  syncNav();
  const h = document.documentElement; $("#progress").style.transform = `scaleX(${scrollY / (h.scrollHeight - innerHeight || 1)})`;
}, { passive: true });
$("#burger").addEventListener("click", () => { $("#burger").classList.toggle("x"); $("#links").classList.toggle("open"); });
$$("#links a").forEach(a => a.addEventListener("click", () => { $("#burger").classList.remove("x"); $("#links").classList.remove("open"); }));
$$("#lang button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.l; try { localStorage.setItem("el_lang", lang); } catch (e) {} applyLang();
}));
$("#playBtn").addEventListener("click", () => {
  const v = $("#story"); v.muted = !v.muted; if (!v.muted) { v.currentTime = 0; v.play(); } $("#playTxt").textContent = v.muted ? t("f_play") : t("f_mute");
});

/* ===== gold dust canvas ===== */
(function dust() {
  const c = $("#dust"), x = c.getContext("2d"); let W, H, P = [];
  const rs = () => { W = c.width = innerWidth; H = c.height = innerHeight; P = Array.from({ length: Math.round(W * H / 22000) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + .3, v: Math.random() * .25 + .06, a: Math.random() })); };
  rs(); addEventListener("resize", rs);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  (function f() {
    x.clearRect(0, 0, W, H);
    for (const p of P) { p.y -= p.v; p.a += .01; if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      x.fillStyle = `rgba(232,190,110,${.25 + Math.sin(p.a) * .25})`; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.3); x.fill(); }
    requestAnimationFrame(f);
  })();
})();

/* ===== motion ===== */
function motion() {
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  if (!window.gsap || reduce) { window.__first = true; return; }
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("gsap");
  window.__first = false;
  renderH1();
  window.__first = true;

  // hero load-in
  gsap.fromTo(".hero [data-r]", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", stagger: .12, delay: .5 });
  gsap.fromTo(".hero-visual", { scale: .88, rotate: 3 }, { scale: 1, rotate: 0, duration: 1.6, ease: "expo.out", delay: .4 });

  // scroll reveals
  ScrollTrigger.batch("[data-r]:not(.hero [data-r])", {
    start: "top 88%", once: true,
    onEnter: els => gsap.fromTo(els, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: .09 })
  });

  // hero parallax
  gsap.to("#phone", { yPercent: -10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".ring", { rotate: 180, ease: "none", scrollTrigger: { trigger: ".hero", scrub: true } });
  $$(".chip").forEach((c, i) => gsap.to(c, { yPercent: i ? 40 : -40, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } }));

  // carbon images parallax
  $$(".frame img").forEach(im => gsap.fromTo(im, { yPercent: -8 }, { yPercent: 8, ease: "none", scrollTrigger: { trigger: im.parentElement, scrub: true } }));
  $$(".frame").forEach(f => gsap.from(f, { clipPath: "inset(18% 12% 18% 12% round 26px)", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: f, start: "top 85%", once: true } }));

  // process line draw
  const ln = $("#stepline"); if (ln) { ln.style.strokeDasharray = 1000; gsap.fromTo(ln, { strokeDashoffset: 1000 }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: ".steps", start: "top 75%", end: "bottom 60%", scrub: true } }); }

  // marquee speeds up with scroll
  const mq = gsap.to(".mq-track", { xPercent: -50, repeat: -1, duration: 28, ease: "none" });
  $(".mq-track").style.animation = "none";
  ScrollTrigger.create({ onUpdate: s => gsap.to(mq, { timeScale: 1 + Math.abs(s.getVelocity() / 400), duration: .3, overwrite: true, onComplete: () => gsap.to(mq, { timeScale: 1, duration: 1 }) }) });
}

/* tilt + magnetic + glow (pointer devices only) */
if (matchMedia("(hover:hover)").matches) {
  const g = $("#glow"); addEventListener("pointermove", e => { g.style.transform = `translate(${e.clientX - 260}px,${e.clientY - 260}px)`; }, { passive: true });
  document.addEventListener("pointermove", e => {
    const el = e.target.closest?.(".tilt"); if (!el) return;
    const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
  });
  document.addEventListener("pointerout", e => { const el = e.target.closest?.(".tilt"); if (el) el.style.transform = ""; });
  document.addEventListener("pointermove", e => {
    $$(".magnetic").forEach(b => { const r = b.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      b.style.transform = Math.hypot(dx, dy) < 90 ? `translate(${dx * .25}px,${dy * .25}px)` : ""; });
  });
}

/* ===== boot ===== */
applyLang(); showStep();
addEventListener("load", () => {
  motion();
  const p = $("#preloader");
  setTimeout(() => { p.style.transition = "opacity .8s"; p.style.opacity = 0; setTimeout(() => p.remove(), 850); }, 700);
});
