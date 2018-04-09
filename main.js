$(document).ready(function() {
  // array of question classes
  var questionClasses = ['kaf-q',
                        'major-q',
                        'french-q',
                        'font-q',
                        'baudelaire-q',
                        'study-q',
                        'emoji-q',
                        'movie-q',
                        'color-q',
                        'kanye-q'];

  /*
    this script was created with some help from the jQuery .not() documentation http://api.jquery.com/not/,
    this StackOverflow question https://stackoverflow.com/questions/45704842/changing-radio-button-background-on-selected-according-to-it-value for the array background color on and off toggle,
    and the documentation for .forEach() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
  Array.prototype.forEach.call(questionClasses, function(e) {
    // grab each individual question within a class
    var questions = document.getElementsByClassName(e);

    Array.prototype.forEach.call(questions, function(q) {
      // when a question is clicked
      $(q).on('click', function() {
        // highlight it yellow and make the other questions not highlighted
        $(this).siblings('.overlay').removeClass('visible');
        $(this).parent().addClass('yellow');
        $(questions).not(this).parent().removeClass('yellow');
        $(questions).not(this).siblings('.overlay').addClass('visible');
      });
    });
  });

  $('#close').on('click', function() {
    $('.popup').removeClass('view');
  });

  /*
    Function taken from the CS52 lab 2 description and modified
  */
  $('#calculate').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();

    var total = 0;
    var qsAnswered = 0;

    // calculate total based on the array question values
    Array.prototype.forEach.call(choices, function(e) {
      qsAnswered += 1;
      total += parseInt(e, 10);
    });

    // Modal with result, created with the help of https://www.w3schools.com/howto/howto_css_modals.asp
    if (qsAnswered != 10) {
      $('#result-title').text('Error: not all of the questions were filled out');
      $('#result-image').attr('src', 'https://cdn.shopify.com/s/files/1/1061/1924/files/Sad_Face_Emoji.png?9898922749706957214');
      $('.popup').addClass('view');
    } else {  // compute score
      $('#result-image').css('width', '50%');
      /* Hard Coded Values:
      1 = Eiffel Tower
      2 = Palais du Tokyo
      3 = Notre Dame
      4 = Sacré Cœur
      5 = The Louvre
      6 = Arc de Triomphe
      7 = Panthéon
      8 = Moulin Rouge
      9 = Centre Pomidou
      */
      if (total >= 1 && total <= 10) {
        $('#result-title').text('You got: Eiffel Tower');
        $('#result-image').attr('src', 'https://amp.thisisinsider.com/images/58d919eaf2d0331b008b4bbd-750-562.jpg');
      } else if (total >= 11 && total <= 20) {
        $('#result-title').text('You got: Palais du Tokyo');
        $('#result-image').attr('src', 'http://img.bfmtv.com/c/1256/708/ab4/226b8e8de1b4151bfa9c970870a64.jpeg');
      } else if (total >= 21 && total <= 30) {
        $('#result-title').text('You got: Notre Dame');
        $('#result-image').attr('src', 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/7d/e6/f3/shutterstock-166179710.jpg');
      } else if (total >= 31 && total <= 40) {
        $('#result-title').text('You got: Sacré Cœur');
        $('#result-image').attr('src', 'http://www.thewanderblogger.com/wp-content/uploads/2013/12/basilique-du-sacre-coeur-paris.jpg');
      } else if (total >= 41 && total <= 50) {
        $('#result-title').text('You got: The Louvre');
        $('#result-image').attr('src', 'https://uhxnue.files.wordpress.com/2017/05/1280px-louvre_pyramid.jpg?w=1280&h=768&crop=1');
      } else if (total >= 51 && total <= 60) {
        $('#result-title').text('You got: Arc de Triomphe');
        $('#result-image').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ857ZoEoHoOoLi86Nb6Kk154Rma5r1EjJaqvSXYSLuMKdLE4ai');
      } else if (total >= 61 && total <= 70) {
        $('#result-title').text('You got: Panthéon');
        $('#result-image').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Panth%C3%A9on%2C_Paris_25_March_2012.jpg/1200px-Panth%C3%A9on%2C_Paris_25_March_2012.jpg');
      } else if (total >= 71 && total <= 80) {
        $('#result-title').text('You got: Moulin Rouge');
        $('#result-image').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKgJQdzy1QcU615MHmfWu_vjiffqNjPJQULelOMlGcCCswrnnO');
      } else {
        $('#result-title').text('You got: Centre Pompidou');
        $('#result-image').attr('src', 'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/product_index_slideshow/28952/20932_1.jpg?ver=1485250161');
      }

      $('.popup').addClass('view');
    }
  });
});
