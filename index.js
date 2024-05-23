// Write your code here!
const main = document.getElementById('main');
  main.remove();

  const newHeader = document.createElement('h1');

  newHeader.setAttribute('id', 'victory');

  const yourName = "Connor"; // Replace "Your Name" with your actual name
  newHeader.textContent = `${yourName} is the champion`;

  document.body.appendChild(newHeader);