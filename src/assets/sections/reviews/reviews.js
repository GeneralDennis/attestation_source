import './reviews.sass'

import $ from 'jquery'
window.$ = window.jQuery = $

const filesToLoad = []

$(document).ready(function() {
  $('.reviews-form__input').change(function() {
    if ($(this).val() != '') {
      $.each($(this)[0].files, (index, value) => {
        console.log('file ', index, 'name', value.name, 'size ', toNorm(value.size), 'type ', value.type)
        filesToLoad.push()
          // createEl(value.name)
        $('.reviews-form__label').addClass('reviews-form__label--plus');
        $('.reviews-form__placeholder').removeClass('reviews-form__placeholder--show');
        $('.reviews-form__placeholder--more').addClass('reviews-form__placeholder--show');
      })
    } else {
      $('.reviews-form__label').removeClass('reviews-form__label--plus');
      $('.reviews-form__placeholder').addClass('reviews-form__placeholder--show');
      $('.reviews-form__placeholder--more').removeClass('reviews-form__placeholder--show');
    }
  });
})


const toNorm = (value) => {

    let out
    if (value >= (1024 * 1024)) {
      out = Math.round(value / 1024 / 1024)
      return out + ' Мб'
    } else if (value > 1024 && value < (1024 * 1024)) {
      out = Math.round(value / 1024)
      return out + ' Кб'
    } else {
      return value + ' б'
    }
  }
  // const createEl = (elName) => {
  //   let block = $('<div></div>',{
  //     'class':'.reviews-form__loaded',
  //     })
  //   $('.form-files').before(block)
  // }