function share(url, title, text) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url,
    })
    .then(() => console.log('Sharing successful'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert('Sharing API is not supported in your device or browser.');
  }
}

function scrollToElement(elementId, offset) {
  var element = document.getElementById(elementId);
  var offsetPosition = element.offsetTop - offset;
  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });
}

function toggleIcon(button) {

  // Toggle between the plus and dash icons
  var icon = $(button).find('.bi');

  if(icon != null){

    if ($(icon).hasClass('bi-chevron-bar-down')) {
        icon.removeClass('bi-chevron-bar-down').addClass('bi-chevron-up');
    } else {
        icon.removeClass('bi-chevron-up').addClass('bi-chevron-bar-down');
    }

    $('.bi.bi-chevron-up').not(icon).removeClass('bi-chevron-up').addClass('bi-chevron-bar-down');

  }

}
