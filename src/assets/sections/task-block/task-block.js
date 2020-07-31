import './task-block.sass'
import $ from 'jquery'
window.$ = window.jQuery = $

$(document).ready(function() {

  const $progress = $('.js-progress')
  const $developer = $('.js-developer')
  const $prior = $('.js-prior')

  const toggler = (item) => {
    if (item) {
      item.on('click', (e) => {
        $(e.currentTarget).find('.select').toggleClass('select__selected--active');
        $(e.currentTarget).find('.select-list').slideToggle()
      })
    }
  }
  toggler($progress)
  toggler($developer)
  toggler($prior)
})