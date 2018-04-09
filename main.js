$(document).ready(function() {
  // array of question classes
  var questionClasses = ["kaf-q",
                        "major-q",
                        "french-q",
                        "fashion-q",
                        "baudelaire-q",
                        "study-q",
                        "emoji-q",
                        "movie-q",
                        "color-q",
                        "kanye-q"];

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
        $(this).parent().addClass('yellow');
        $(questions).not(this).parent().removeClass('yellow');
      });
    });
  });

  /*
    Function taken from the CS52 lab 2 description and modified
  */
  $('#calculate').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      console.log($(radio).val());
      return $(radio).val();
    }).toArray();
  });
});
