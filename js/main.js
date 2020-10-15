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

  var tab = $('.tab');
  var tabContent = $('tab-content');

  tab.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tab.removeClass('tab--active');
    tabContent.removeClass('tab-content--active');
    $(activeContent).addClass('tab--active');
    $(this).addClass('tab-content--active');
  });

});