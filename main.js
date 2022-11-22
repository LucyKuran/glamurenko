$(() => {
  const nav = $('#topNav > div');
  $(document).scroll((e) => {
    nav.toggleClass('scrolled', $(e.currentTarget).scrollTop() > 550);
  }); //WHEN SCROLLED MORE THAN 550PX, THE CLASS GETS TOGGLED

  $('.navbar-toggler').click(() => nav.addClass('scrolled')); //CLICKING ON MOBILE ADDS A CLASS
});
