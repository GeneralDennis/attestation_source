$(document).ready(() => {
  const $item = $('.aside__item')
  const $btn1 = $('#play-btn1')
  const video1 = $('#video1').get(0)

  if ($item.length) {
    $item.on('click', (e) => {
      $item.removeClass('aside__item--active')
      e.currentTarget.classList.add('aside__item--active')
    })
  }
  $btn1.on('click', function() {
    if (video1.paused) {
      video1.play();
      $btn1.addClass('hide');
    } else {
      video1.pause();
      $btn1.removeClass('hide');
    }
  })

});