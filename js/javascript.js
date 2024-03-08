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