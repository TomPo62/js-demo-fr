//Clicker Counter
//compteur declaré a 0
let count = 0

//function pour augmenter de 1 a chaque click
function updateClickCount() {
  //addition de 1
  count++
  //afficher le compteur avec un element, ici notre clickCount
  document.getElementById('clickCount').innerText = count
}

//appeler la function updateClickCount a chaque click sur le bouton
document
  .getElementById('clickMeBtn')
  .addEventListener('click', updateClickCount)

//Change Bg Color
//function qui s'occupe du changement de couleur
function changeBgColor() {
  //tableau de couleurs
  const colors = [
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#9b59b6',
    '#f1c40f',
    '#e67e22',
    '#1abc9c',
  ]
  //generer la couleur du bg aleatoirement
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.backgroundColor = randomColor
}

//appeler la function de changement de couleur au click
document
  .getElementById('changeColorBtn')
  .addEventListener('click', changeBgColor)

//Interactif Text
//function pour changer le text au hover
function changeHoverText() {
  //l'element selectionné, ici notre hoverText est modifié
  document.getElementById('hoverText').innerText = 'Wow, le texte a changé !'
}

//l'etat de base de notre texte
function resetHoverText() {
  //indiquer que notre texte est bien le texte initial
  document.getElementById('hoverText').innerText =
    'Survole-moi pour changer ce texte ! 👀'
}

//ajouter des ecouteurs d'evenement pour pouvoir determiner quel texte est affiché
document
  .getElementById('hoverText')
  .addEventListener('mouseover', changeHoverText)
document
  .getElementById('hoverText')
  .addEventListener('mouseout', resetHoverText)

//function pour la simulation de message
function showMessage() {
  const message = document.getElementById('userMessage').value

  if (message) {
    alert(`Message envoyé : ${message}`)
  } else {
    alert('Veuillez saisir un message.')
  }

  document.getElementById('userMessage').value = ""
}

document.getElementById('sendMessageBtn').addEventListener('click', showMessage)

// bouton print hello world from javascript dans la console
function printHelloWorld() {
  console.log("Hello, World from Javascript")
}

document.getElementById('logBtn').addEventListener('click', printHelloWorld)

// welcome form
document.getElementById('submit').addEventListener('click', function() {
  const userName = document.getElementById('userName').value;
  const choice = document.getElementById('choiceYesOrNo').value;

  // Convertir la valeur de la sélection en booléen
  const acceptConditions = choice === "true";

  if (userName.trim() === '') {
    alert('Veuillez entrer un nom !');
    return;
  }

  if (!acceptConditions) {
    alert('Veuillez accepter les conditions !');
    return;
  }

  // Si tout est correct, afficher le message de bienvenue
  document.getElementById('welcomeMessage').innerText = `Bonjour, ${userName}! Bienvenue sur notre page! 💯`;
  document.getElementById('userName').value = "";
  document.getElementById('choiceYesOrNo').value = "false"
});

//Simple Quiz
document.getElementById('submitQuiz').addEventListener('click', function() {
  const radios = document.querySelectorAll('input[name="best-lang"]');
  let selectedValue;
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }

  if (!selectedValue) {
    alert('Veuillez choisir une option.');
    return;
  }

  let resultMessage;
  if (selectedValue === "JavaScript") {
    resultMessage = "Correct ! JavaScript est impressionnant ! 🎉";
  } else if (selectedValue === "Python") {
    resultMessage = "Python est aussi un excellent choix ! 🐍";
  } else {
    resultMessage = "Tous les langages ont leur utilité et leur charme ! 👍";
  }

  document.getElementById('quizResult').innerText = resultMessage;
});


