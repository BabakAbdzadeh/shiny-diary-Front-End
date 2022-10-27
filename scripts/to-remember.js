function checklistAdd() {
  // (B1) FORM DATA OBJECT
  const idNumber = Math.floor(Math.random() * Math.pow(10, 4));
  var data = new FormData();

  const welcomeItem = document.getElementById('1');
  if (welcomeItem !== null) {
    welcomeItem.parentNode.parentNode.removeChild(welcomeItem.parentNode);
  }

  // (B2) APPEND FIELDS
  data.append("title", document.getElementById("title").value);
  data.append("content", document.getElementById("content").value);

  // (B3) WHATEVER YOU WANT TO DO NEXT

  const newItem = document.createElement("div");
  newItem.className = "checkbox-item";

  const newCheckbox = document.createElement("input");
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('id', `${idNumber}`);
  newCheckbox.setAttribute('name', 'scales');
  newCheckbox.setAttribute('onClick', 'checklistRemove(this)');

  const newLable = document.createElement("label");
  newLable.setAttribute('for', `${idNumber}`);
  newLable.appendChild(document.createTextNode(data.get('title')));

  const newP = document.createElement("p");
  newP.appendChild(document.createTextNode(data.get('content')));

  newItem.appendChild(newCheckbox);
  newItem.appendChild(newLable);
  newItem.appendChild(newP);

  const rememberBox = document.getElementsByClassName("remember-box")[0];
  rememberBox.appendChild(newItem);
}

function checklistRemove(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);
};
