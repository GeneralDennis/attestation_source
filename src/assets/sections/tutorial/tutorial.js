$(document).ready(() => {
  const $item = $('.aside__item');
  const $play1 = $('#play-btn1');
  const $pause1 = $('#pause-btn1');
  const video1 = $('#video1').get(0);

  const $play2 = $('#play-btn2');
  const $pause2 = $('#pause-btn2');
  const video2 = $('#video2').get(0);

  const $play3 = $('#play-btn3');
  const $pause3 = $('#pause-btn3');
  const video3 = $('#video3').get(0);

  const $play4 = $('#play-btn4');
  const $pause4 = $('#pause-btn4');
  const video4 = $('#video4').get(0);

  const $play5 = $('#play-btn5');
  const $pause5 = $('#pause-btn5');
  const video5 = $('#video5').get(0);

  const $play6 = $('#play-btn6');
  const $pause6 = $('#pause-btn6');
  const video6 = $('#video6').get(0);

  const $asideContainer = $('.js-aside-container');
  const $aside = $('.aside-tutorial');

  const $tutOffset = $('.tutorials').position().top;
  const $genInfoOffset = $('.general-info').position().top;
  const $videoLessonsOffset = $('.video-lessons').position().top;
  const $reviewsOffset = $('.reviews').position().top;

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > $asideContainer.position().top) {
      $aside.addClass('aside--fixed');
    } else {
      $aside.removeClass('aside--fixed');
    }
    if ($(window).scrollTop() > $tutOffset && $(window).scrollTop() < $genInfoOffset) {
      $('.aside__item').removeClass('aside__item--active');
      $(".aside__item[data-name='tutorial']").addClass('aside__item--active');
    } else if ($(window).scrollTop() > $genInfoOffset && $(window).scrollTop() < $videoLessonsOffset) {
      $('.aside__item').removeClass('aside__item--active');
      $(".aside__item[data-name='general']").addClass('aside__item--active');
    } else if ($(window).scrollTop() > $videoLessonsOffset && $(window).scrollTop() < $reviewsOffset) {
      $('.aside__item').removeClass('aside__item--active');
      $(".aside__item[data-name='video']").addClass('aside__item--active');
    } else if ($(window).scrollTop() > $reviewsOffset) {
      $('.aside__item').removeClass('aside__item--active');
      $(".aside__item[data-name='reviews']").addClass('aside__item--active');
    } else if ($(window).scrollTop() > $tutOffset) {
      $('.aside__item').removeClass('aside__item--active');
    }
  })

  // const getOffset = (block, item) => {
  //   if ($(window).scrollTop() > block) {
  //     item.removeClass('aside__item--active')
  //     item.classList.add('aside__item--active');
  //   }
  // }

  if ($item.length) {
    $item.on('click', (e) => {
      $item.removeClass('aside__item--active')
      e.currentTarget.classList.add('aside__item--active')
    })
  }
  const PlayVideo = (play, video, pause) => {
    play.on('click', function() {
      if (video.paused) {
        video.play();
        play.addClass('hide');
        pause.removeClass('hide');
      } else {
        video.pause();
      }
    })
    if (pause) {
      pause.on('click', () => {
        if (video.played) {
          video.pause();
          play.removeClass('hide');
          pause.addClass('hide');
        } else {
          video.play()
        }
      })
    }
  }
  PlayVideo($play1, video1, $pause1);
  PlayVideo($play2, video2, $pause2);
  PlayVideo($play3, video3, $pause3);
  PlayVideo($play4, video4, $pause4);
  PlayVideo($play5, video5, $pause5);
  PlayVideo($play6, video6, $pause6);

});