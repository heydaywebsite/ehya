$(document).ready(function () {
  var modalButton = $("[data-toggle=modal]");
  var modalCloseButton = $(".modal-dialog__close");

  modalButton.on('click', openModal);
  modalCloseButton.on('click', closeModal);

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      var modalOverlay = $(".modal-overlay");
      var modalDialog = $(".modal-dialog");
      modalOverlay.removeClass('modal-overlay__visible');
      modalDialog.removeClass('modal-dialog__visible')
    }
  });

  function openModal() {
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass('modal-overlay__visible');
    modalDialog.addClass('modal-dialog__visible')
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass('modal-overlay__visible');
    modalDialog.removeClass('modal-dialog__visible')
  }

  var modalButton = $("[data-toggle=modal]");
  var modalCloseButton = $(".modal__close");

  modalButton.on('click', openModal);
  modalCloseButton.on('click', closeModal);

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__login");
      modalOverlay.removeClass('modal__overlay-visible');
      modalDialog.removeClass('modal__login_visible')
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalLogin = $(".modal__login");
    modalOverlay.addClass('modal__overlay-visible');
    modalLogin.addClass('modal__login_visible')
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalLogin = $(".modal__login");
    modalOverlay.removeClass('modal__overlay-visible');
    modalLogin.removeClass('modal__login_visible')
  }

  var tab = $('.tab');
  var tabContent = $('.tab-content');

  tab.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tab.removeClass('tab--active');
    tabContent.removeClass('tab-content--active');
    $(activeContent).addClass('tab-content--active');
    $(this).addClass('tab--active');
  });

  var mySwiper = new Swiper('.testimonial-slider', {
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: true,
    },

    pagination: {
      el: '.testimonial-pagination',
      clickable: true,
    },

    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },

  })

  var mySwiper = new Swiper('.stories-slider', {
    loop: false,
    autoplay: false,

    navigation: {
      nextEl: '.stories-btn__left',
      prevEl: '.stories-btn__right',
      disabledClass: 'stories-btn__unactive'
    },

  })

  //Обработка форм
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {

        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },

      },
    });
  });

});

$(document).ready(function () {
  $('.stories-btn__left').click(function () {

    $('.stories-btn__left').addClass('stories-btn__left--active');
    $('.stories-btn__right').removeClass('stories-btn__right--active');

  });
  $('.stories-btn__right').click(function () {

    $('.stories-btn__right').addClass('stories-btn__right--active');
    $('.stories-btn__left').removeClass('stories-btn__left--active');
  });
});