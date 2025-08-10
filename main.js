
(function(){
  function setTheme(t){ if(t==='light') document.body.classList.add('light'); else document.body.classList.remove('light'); localStorage.setItem('site_theme',t); }
  document.addEventListener('DOMContentLoaded',function(){
    var theme = localStorage.getItem('site_theme') || 'dark'; setTheme(theme);
    var btn = document.getElementById('theme-btn'); if(btn) btn.addEventListener('click', function(){ setTheme(document.body.classList.contains('light') ? 'dark' : 'light'); });
    var hamb = document.getElementById('hamb'); var mobile = document.getElementById('mobile-menu'); if(hamb) hamb.addEventListener('click', function(){ mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex'; });
    var obs = new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('visible'); }); }, {threshold: 0.12});
    document.querySelectorAll('.section').forEach(function(el){ obs.observe(el); });
    // counters
    var counters = document.querySelectorAll('.counter strong'); counters.forEach(function(el){
      el.dataset.target = el.textContent; el.textContent = '0';
    });
    function runCounters(){
      counters.forEach(function(el){
        var target = +el.dataset.target; var count=0; var step=Math.ceil(target/80);
        var i=setInterval(function(){ count+=step; if(count>=target){ el.textContent = target; clearInterval(i);} else el.textContent = count; },20);
      });
    }
    var counterSection = document.querySelector('.counters'); if(counterSection){ obs.observe(counterSection); var cobs = new IntersectionObserver(function(entries){ entries.forEach(function(e){ if(e.isIntersecting){ runCounters(); cobs.disconnect(); } }); }, {threshold:0.2}); cobs.observe(counterSection); }
    // testimonials carousel simple
    var track = document.querySelector('.testimonials .track'); var idx=0;
    function slideTestimonials(){ if(!track) return; idx = (idx+1) % (track.children.length); track.style.transform = 'translateX(' + (-idx * 334) + 'px)'; }
    setInterval(slideTestimonials,4000);
    // AJAX form submit
    var form = document.querySelector('form[data-ajax="true"]');
    if(form){
      var status = document.createElement('div'); status.setAttribute('role','status'); form.appendChild(status);
      form.addEventListener('submit', async function(e){ e.preventDefault(); status.textContent = 'Sending...'; const data = new FormData(form);
        try{ const res = await fetch(form.action, { method: form.method, body: data, headers:{ 'Accept':'application/json' } }); if(res.ok){ status.textContent='✅ Message sent — thank you!'; form.reset(); } else { status.textContent='❌ Error sending message.'; } } catch(err){ status.textContent='❌ Network error.'; } });
    }
  });
})();