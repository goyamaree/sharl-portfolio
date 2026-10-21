(function(){
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var icon = document.getElementById('themeIcon');
  var sun = 'M12 4.5V2.5M12 21.5v-2M4.5 12H2.5M21.5 12h-2M6 6 4.6 4.6M19.4 19.4 18 18M18 6l1.4-1.4M4.6 19.4 6 18M12 16.5A4.5 4.5 0 1 0 12 7.5a4.5 4.5 0 0 0 0 9Z';
  var moon = 'M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z';

  function applyTheme(t){
    if(t === 'dark'){ root.setAttribute('data-theme','dark'); icon.innerHTML = '<path d="'+sun+'"/>'; }
    else { root.setAttribute('data-theme','light'); icon.innerHTML = '<path d="'+moon+'"/>'; }
  }

  var stored = null;
  try{ stored = localStorage.getItem('portfolio-theme'); }catch(e){}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored || (prefersDark ? 'dark' : 'light'));

  toggle.addEventListener('click', function(){
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try{ localStorage.setItem('portfolio-theme', next); }catch(e){}
  });

  var navToggle = document.getElementById('navToggle');
  var mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', function(){
    var open = mobileMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileMenu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobileMenu.classList.remove('open'); });
  });

})();