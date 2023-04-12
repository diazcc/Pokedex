(function () {
  let namePokemon = 25;

  fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
    .then((response) => response.json())
    .then((data) => {
      selectorDv();
      document.getElementById("desc_info_num").innerHTML =
        data.name.toUpperCase();
      document.getElementById("title_pokemon").innerHTML =
        data.name.toUpperCase();
      document.getElementById("desc_info_level").innerHTML = "Empty";
      document.getElementById("desc_info_type").innerHTML =
        data.types[0].type.name.toUpperCase();
      document.getElementById("desc_info_hability").innerHTML =
        data.abilities[0].ability.name.toUpperCase();
      document.getElementById("desc_info_height").innerHTML = data.height;
      document.getElementById("desc_info_weight").innerHTML = data.weight;
    })
    .catch((error) => console.error("Error al importar JSON:", error));
})();

const selectorDv = (array) => {
  let v ;
  imgAleatoria();
  const dv1 = document.getElementById("card_1");
  dv1.addEventListener("click", function () {
    v = document.getElementById("card_1").getAttribute("idc");
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${v}.gif`;
  });
  const dv2 = document.getElementById("card_2");
  dv2.addEventListener("click", function () {
    v = document.getElementById("card_2").getAttribute("idc");
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${v}.gif`;
  });
  const dv3 = document.getElementById("card_3");
  dv3.addEventListener("click", function () {
    v = document.getElementById("card_3").getAttribute("idc");
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${v}.gif`;
  });
  const dv4 = document.getElementById("card_4");
  dv4.addEventListener("click", function () {
    v = document.getElementById("card_4").getAttribute("idc");
    document.getElementById(
      "img_pokemon"
    ).src = `https://www.shinyhunters.com/images/regular/${v}.gif`;
  });

  return v;
};

const imgAleatoria = () => {
  let dvs = numeroAleteario();
  console.log(numeroAleteario());
  document.getElementById("card_1").setAttribute("idc", `${dvs[0]}`);
  document.getElementById("card_2").setAttribute("idc", `${dvs[1]}`);
  document.getElementById("card_3").setAttribute("idc", `${dvs[2]}`);
  document.getElementById("card_4").setAttribute("idc", `${dvs[3]}`);

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
};

const numeroAleteario = () => {
  const div1 = Math.floor(Math.random() * (249 - 1 + 1)) + 1;
  const div2 = Math.floor(Math.random() * (499 - 250 + 1)) + 250;
  const div3 = Math.floor(Math.random() * (749 - 500 + 1)) + 500;
  const div4 = Math.floor(Math.random() * (1000 - 750 + 1)) + 750;
  const arrayDvs = [div1, div2, div3, div4];
  return arrayDvs;
};
