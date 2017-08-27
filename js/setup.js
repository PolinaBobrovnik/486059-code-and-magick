'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var shuffledNames = function shuffleNames() {
  for (var i = names.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = names[i];
    names[i] = names[j];
    names[j] = temp;
  }
  return names;
};

var shuffledLastNames = function shuffleLastNames() {
  for (var i = lastNames.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = lastNames[i];
    lastNames[i] = lastNames[j];
    lastNames[j] = temp;
  }
  return lastNames;
};

var shuffledCoatColors = function shuffleCoatColors() {
  for (var i = coatColors.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = coatColors[i];
    coatColors[i] = coatColors[j];
    coatColors[j] = temp;
  }
  return coatColors;
};

var shuffledEyesColors = function shuffleEyesColors() {
  for (var i = eyesColors.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = eyesColors[i];
    eyesColors[i] = eyesColors[j];
    eyesColors[j] = temp;
  }
  return eyesColors;
};

shuffledNames();
shuffledLastNames();
shuffledCoatColors();
shuffledEyesColors();

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = {
    name: names[i] + ' ' + lastNames[i],
    coatColor: coatColors[i],
    eyesColor: eyesColors[i]
  };
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
