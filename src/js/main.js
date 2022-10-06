'use strict'

const suggestionsCardsNoScripts = document.querySelectorAll('.suggestions__card--noscript');

const suggestionsContinueSubmit = document.querySelector('.suggestions__continue-submit');

suggestionsCardsNoScripts.forEach(
    elem => elem.classList.remove('suggestions__card--noscript')
);

suggestionsContinueSubmit.classList.remove('visually-hidden');



