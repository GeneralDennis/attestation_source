import './header.sass'
import $ from 'jquery'
window.$ = window.jQuery = $

$(document).ready(function() {

  const $star = $('.menu-item__favorite')
  const $bell = $('.menu-item__notify')
  const $pArrow = $('.menu-item__projects')
  const $uArrow = $('.menu-item__user')

  const toggling = (item, className) => {
    if (item) {
      item.on('click', () => {
        item.toggleClass(`menu-item__${className}--active`)
      })
    }
  }

  $pArrow.on('click', () => {
    $('.projects-wrapper').slideToggle();
  })
  $(window).resize(() => {
    if ($(window).innerWidth() < 1191) {
      $('.projects-wrapper').slideUp();
      $('.user').slideUp();
    }
  })

  $uArrow.on('click', () => {
    $('.user').slideToggle();
  })

  toggling($star, 'favorite')
  toggling($bell, 'notify')
  toggling($pArrow, 'projects')
  toggling($uArrow, 'user')
})