var grid = document.querySelector('.gallery-grid');
var iso = new Isotope(grid, {
    itemSelector: '.gallery_box',
    layoutMode: 'fitRows'
  });

  var filterButtons = document.querySelectorAll('.filters ul li');

  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      var filterValue = btn.getAttribute('data-filter');
      iso.arrange({ filter: filterValue });
    });
  });