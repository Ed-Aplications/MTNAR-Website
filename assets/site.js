/* Middle TN Auto Repair: shared page script.
   1. Tags texts with where the visitor came from (?from=fb|group|google|card).
   2. Builds an estimate text from the short form (nothing is stored or sent).
   3. Fills in the footer year. */
(function () {
  var NUMBER = '+19316741516';
  var SOURCES = { fb: 'Facebook', group: 'Facebook group', google: 'Google', card: 'business card' };
  var TEMPLATE = "Year/make/model: \nWhat's going on: \nTown: \n";

  // Where did this visitor come from? Kept for this visit only.
  var src = null;
  try {
    var q = new URLSearchParams(location.search).get('from');
    if (q && SOURCES[q]) { src = q; sessionStorage.setItem('mt_from', q); }
    else { var saved = sessionStorage.getItem('mt_from'); if (saved && SOURCES[saved]) src = saved; }
  } catch (e) { /* storage blocked: tag without a source */ }
  var TAG = '(from website' + (src ? ': ' + SOURCES[src] : '') + ')';

  function smsHref(body) { return 'sms:' + NUMBER + '?&body=' + encodeURIComponent(body); }

  // Every text link gets the tag. data-body overrides the default template.
  var links = document.querySelectorAll('a.js-text');
  for (var i = 0; i < links.length; i++) {
    var b = links[i].getAttribute('data-body');
    links[i].href = smsHref((b === null ? TEMPLATE : b.replace(/\\n/g, '\n')) + TAG);
  }

  // Estimate text builder
  var form = document.getElementById('estimate-form');
  if (form) {
    var box = document.getElementById('estimate-builder');
    if (box) box.hidden = false;
    var fallback = document.getElementById('estimate-fallback');
    if (fallback) fallback.hidden = true;

    var fields = [
      ['ymm', 'Year/make/model', true],
      ['problem', "What's going on", true],
      ['town', 'Town', true],
      ['name', 'Name'],
      ['address', 'Address'],
      ['email', 'Email'],
      ['vin', 'VIN'],
      ['miles', 'Mileage']
    ];
    var send = document.getElementById('estimate-send');
    var copy = document.getElementById('estimate-copy');
    var status = document.getElementById('estimate-status');

    var build = function () {
      var lines = [];
      for (var j = 0; j < fields.length; j++) {
        var el = form.elements[fields[j][0]];
        var v = el ? el.value.trim().replace(/\s*\n\s*/g, ' ') : '';
        if (v) lines.push(fields[j][1] + ': ' + v);
      }
      lines.push(TAG);
      return lines.join('\n');
    };
    var missing = function () {
      for (var j = 0; j < fields.length; j++) {
        if (!fields[j][2]) continue;
        var el = form.elements[fields[j][0]];
        if (!el.value.trim()) return el;
      }
      return null;
    };
    var update = function () { send.href = smsHref(build()); };
    var say = function (msg) { status.textContent = msg; };

    form.addEventListener('input', update);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    update();

    send.addEventListener('click', function (e) {
      var m = missing();
      if (m) {
        e.preventDefault();
        say('Please fill in the year, make and model, what\'s going on, and your town.');
        m.focus();
        return;
      }
      say('Opening your texts. Just hit send.');
    });

    copy.addEventListener('click', function () {
      var m = missing();
      if (m) { say('Please fill in the year, make and model, what\'s going on, and your town.'); m.focus(); return; }
      var text = build();
      var done = function () { say('Copied. Paste it into a text to 931-674-1516.'); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { say('Couldn\'t copy. Text 931-674-1516 with these details.'); });
      } else {
        say('Couldn\'t copy. Text 931-674-1516 with these details.');
      }
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
