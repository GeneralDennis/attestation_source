import './projects.sass'

import $ from 'jquery'
window.$ = window.jQuery = $

$(document).ready(function() {

  const $pStar = $('.projects-item__star')
  if ($pStar) {
    $pStar.on('click', function() {
      $(this).toggleClass('projects-item__star--active')
    })
  }
})