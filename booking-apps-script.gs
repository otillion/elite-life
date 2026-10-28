/**
 * Elite Life — حجز مباشر في Google Calendar (مجاني)
 * الخطوات:
 * 1) script.google.com ← مشروع جديد ← الصق هذا الكود (من حساب المركز)
 * 2) Deploy ← New deployment ← Web app ← Execute as: Me ← Who has access: Anyone
 * 3) انسخ رابط الـ Web app والصقه في app.js داخل CONFIG.bookingEndpoint
 */
const CALENDAR_ID = "primary";   // أو بريد تقويم محدد
const SLOT_MINUTES = 60;

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const cal = CalendarApp.getCalendarById(CALENDAR_ID) || CalendarApp.getDefaultCalendar();
    const start = new Date(d.start), end = new Date(d.end || (+start + SLOT_MINUTES * 60000));
    if (cal.getEvents(start, end).length) return out({ ok: false, error: "busy" });
    cal.createEvent(`${d.service} — ${d.name}`, start, end, {
      description: `الهاتف: ${d.phone}\nملاحظة: ${d.note || "-"}\nاللغة: ${d.lang}\n(حجز من الموقع)`
    });
    return out({ ok: true });
  } catch (err) { return out({ ok: false, error: String(err) }); }
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
