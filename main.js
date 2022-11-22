$(() => {
  const nav = $('#topNav > div');
  $(document).scroll((e) => {
    nav.toggleClass('scrolled', $(e.currentTarget).scrollTop() > 550);
  });

  $('.navbar-toggler').click(() => nav.addClass('scrolled'));
});
