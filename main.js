$(document).ready(function() {
  // array of question classes
  var questionClasses = ["kaf-q",
                        "major-q",
                        "french-q",
                        "font-q",
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
      return $(radio).val();
    }).toArray();

    var total = 0;

    Array.prototype.forEach.call(choices, function(e) {
      total += parseInt(e, 10);
    });

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
      console.log("Eiffel Tower");
    } else if (total >= 11 && total <= 20) {
      console.log("Palais du Tokyo");
    } else if (total >= 21 && total <= 30) {
      console.log("Notre Dame");
    } else if (total >= 31 && total <= 40) {
      console.log("Sacré Cœur");
    } else if (total >= 41 && total <= 50) {
      console.log("The Louvre");
    } else if (total >= 51 && total <= 60) {
      console.log("Arc de Triomphe");
    } else if (total >= 61 && total <= 70) {
      console.log("Panthéon");
    } else if (total >= 71 && total <= 80) {
      console.log("Moulin Rouge");
    } else {
      console.log("Centre Pompidou");
    }
  });
});
