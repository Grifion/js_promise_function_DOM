/* eslint-disable prettier/prettier */
'use strict';

function waitFor(element, eventName) {
  const promise = new Promise((resolve) => {
    element.addEventListener(eventName, (e) => {
      // eslint-disable-next-line no-undef
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    },
    { once: true });
  });

  return promise;
}

const printMessage = (message) => {
  const existingMessage = document.querySelector('.message');

  if (existingMessage) {
    existingMessage.textContent = message;
  } else {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = message;

    document.querySelector('form').append(div);
  }
};

const loginField = document.getElementById('login');
const passwordField = document.getElementById('password');
const button = document.getElementById('submit');

waitFor(loginField, 'click').then(printMessage);
waitFor(passwordField, 'click').then(printMessage);
waitFor(button, 'click').then(printMessage);

waitFor(loginField, 'input').then(printMessage);
waitFor(passwordField, 'input').then(printMessage);

waitFor(loginField, 'blur').then(printMessage);
waitFor(passwordField, 'blur').then(printMessage);
waitFor(button, 'blur').then(printMessage);
