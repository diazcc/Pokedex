(function () {
  let pokemon = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  jsonPoket(pokemon);
})();

function jsonPoket (pokemon, click=false )  {
  document.getElementById("img_pokemon").src = `https://www.shinyhunters.com/images/regular/${pokemon}.gif`;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  .then((response) => response.json())
  .then((data) => {

    selectorDv(click);
    document.getElementById("desc_info_num").innerHTML =
      data.name.toUpperCase();
    document.getElementById("title_pokemon").innerHTML =
      data.name.toUpperCase();
    document.getElementById("desc_info_level").innerHTML = data.base_experience;
    document.getElementById("desc_info_type").innerHTML =
      data.types[0].type.name.toUpperCase();
    document.getElementById("desc_info_hability").innerHTML =
      data.abilities[0].ability.name.toUpperCase();
    document.getElementById("desc_info_height").innerHTML = data.height;
    document.getElementById("desc_info_weight").innerHTML = data.weight;
  })
  .catch((error) => console.error("Error al importar JSON:", error));
}

const selectorDv = (click) => {

  const array = click ? array : imgAleatoria(); 
  const dv1 = document.getElementById("card_1");
  dv1.addEventListener("click", function () {
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${array[0]}.gif`;
    jsonPoket(array[0], true);
  });

  const dv2 = document.getElementById("card_2");
  dv2.addEventListener("click", function () {
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${array[1]}.gif`;
    jsonPoket(array[1], true);
  });
  
  const dv3 = document.getElementById("card_3");
  dv3.addEventListener("click", function () {
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${array[2]}.gif`;
    jsonPoket(array[2], true);
  });

  const dv4 = document.getElementById("card_4");
  dv4.addEventListener("click", function () {
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${array[3]}.gif`;
    jsonPoket(array[3], true);
  });
};

const imgAleatoria = () => {
  let dvs = numeroAleatorio();
  document.getElementById(
    "card_1"
  ).src = `https://www.shinyhunters.com/images/regular/${dvs[0]}.gif`;
  document.getElementById(
    "card_2"
  ).src = `https://www.shinyhunters.com/images/regular/${dvs[1]}.gif`;
  document.getElementById(
    "card_3"
  ).src = `https://www.shinyhunters.com/images/regular/${dvs[2]}.gif`;
  document.getElementById(
    "card_4"
  ).src = `https://www.shinyhunters.com/images/regular/${dvs[3]}.gif`;
  console.log(dvs);
  return dvs;
};

const numeroAleatorio = () => {
  const div1 = Math.floor(Math.random() * (249 - 1 + 1)) + 1;
  const div2 = Math.floor(Math.random() * (499 - 250 + 1)) + 250;
  const div3 = Math.floor(Math.random() * (749 - 500 + 1)) + 500;
  const div4 = Math.floor(Math.random() * (1000 - 750 + 1)) + 750;
  const arrayDvs = [div1, div2, div3, div4];
  return arrayDvs;
};
