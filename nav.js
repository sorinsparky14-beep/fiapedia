function navigate(pageId) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-page]').forEach(function(el) {
    el.addEventListener('click', function() {
      navigate(this.getAttribute('data-page'));
    });
  });

  // Handle ?page=privacy and ?page=terms from cookie consent links
  var params = new URLSearchParams(window.location.search);
  var page = params.get('page');
  if (page && document.getElementById(page)) {
    navigate(page);
  }
});
