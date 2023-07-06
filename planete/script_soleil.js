$(document).ready(function() {
  var urlParams = new URLSearchParams(window.location.search);
  var inputValue = urlParams.get('inputValue');
  console.log(inputValue); // Affiche la valeur du paramètre dans la console

  $('.button').click(function() {
    if ($(this).attr('id') !== 'compareButton') {
      var value = parseInt($(this).text(), 10);
      value = (value + 1) % 10;
      $(this).text(value);
    }
  });

  $('#compareButton').click(function() {
    var inputArray = inputValue.split(''); // Convertit la valeur de l'input en un tableau de chiffres
    var buttonArray = $('.button').toArray(); // Convertit les boutons en un tableau d'éléments

    var isMatch = true;

    // Vérifier si chaque bouton a la même valeur que le chiffre correspondant de l'URL
    for (var i = 0; i < inputArray.length; i++) {
      var inputDigit = parseInt(inputArray[i]);
      var buttonDigit = parseInt($(buttonArray[i]).text());

      if (inputDigit !== buttonDigit) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      // Rediriger vers une autre page
      window.location.replace("../affichage_planete/soleil.html");
    } else {
      // Mettre à jour les styles des boutons
      for (var j = 0; j < buttonArray.length; j++) {
        var inputDigit = parseInt(inputArray[j]);
        var buttonDigit = parseInt($(buttonArray[j]).text());

        if (inputDigit === buttonDigit) {
          $(buttonArray[j]).css('background-color', 'green');
        } else {
          $(buttonArray[j]).css('background-color', 'red');
        }
      }
    }
  });
});
