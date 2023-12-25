function changeColor() {

  const randomColor = getRandomColor();

  document.getElementById('colorBox').style.backgroundColor = randomColor;

  document.getElementById("colorBox").innerText = `The hex code of the color is  ${randomColor}`;

  const btn = document.createElement("BUTTON");
  btn.innerHTML = "color was changed";
  document.body.appendChild(btn);


  // document.getElementById("btn").addElement

  // document.getElementById("output").innerText =`The hex code of the color is `;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}