$(document).ready(function() {
  $('#submitButton').click(function() {
    var inputVal = $('#inputValue').val();

    if (inputVal.length !== 4) {
      // Afficher une alerte si l'entrée n'a pas 4 caractères
      alert("Entrer 4 chiffres !");
    } else {
      // Rediriger vers la page Jupiter avec la valeur de l'entrée comme paramètre
      window.location.href = '../planete/neptune.html?inputValue=' + inputVal;
    }
  });
});
