import './tasks.sass'

$(document).ready(function() {
  const $item = $('.aside-filter__item');
  const $check = $('.filter-content__item');
  const $clearFilter = $('.js-filter-clear');

  if ($item) {
    $item.on('click', (e) => {
      $('.filter-content').on('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
      })
      $(e.currentTarget).toggleClass('aside-filter__item--active');
      $(e.currentTarget).find('.filter-content').slideToggle();
    })
  }
  if ($check) {
    $check.on('click', (e) => {
      $(e.currentTarget).toggleClass('radio--active');
      $clearFilter.removeClass('aside-filter__button--hide');
    })
  }
  if ($clearFilter)
    $clearFilter.on('click', () => {
      $check.removeClass('radio--active');
      $clearFilter.addClass('aside-filter__button--hide');
    })
})