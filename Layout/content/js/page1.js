function hideandshow(idElement1, idElement2) {
  var elem1 = document.getElementById(idElement1);
  var elem2 = document.getElementById(idElement2);

  if (elem1.style.display === "none") {
    elem1.style.display = "block";
  } else {
    elem1.style.display = "none";
  }
  if (elem2.style.display === "none") {
    elem2.style.display = "block";
  } else {
    elem2.style.display = "none";
  }
}

function hideandshowValue(idElement1, idElement2) {
  var elem1 = document.getElementById(idElement1);
  var elem2 = document.getElementById(idElement2);

  if (elem1.style.display === "none") {
    elem1.style.display = "flex";
  } else {
    elem1.style.display = "none";
  }
  if (elem2.style.display === "none") {
    elem2.style.display = "flex";
  } else {
    elem2.style.display = "none";
  }
}

function onPlus(max, increment, id) {
  var elem = document.getElementById(id);
  var num = Number(elem.textContent);
  if (num < max) {
    num += increment;
    elem.textContent = String(num);
  }
}

function onMinus(min, increment, id) {
  var elem = document.getElementById(id);
  var num = Number(elem.textContent);
  if (num > min) {
    num -= increment;
    elem.textContent = String(num);
  }
}

function onPlusMoney(max, increment, id) {
  var elem = document.getElementById(id);
  var num = Number(elem.textContent.replace(".", "").replace(",", "")) / 100;
  if (num < max) {
    num += increment;
    elem.textContent = String(
      Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(num)
    );
  }
}

function onMinusMoney(min, increment, id) {
  var elem = document.getElementById(id);
  var num = Number(elem.textContent.replace(".", "").replace(",", "")) / 100;
  if (num > min) {
    num -= increment;
    elem.textContent = String(
      Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2 }).format(num)
    );
  }
}
