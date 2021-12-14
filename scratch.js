// global variables
let inputBtn = document.querySelector("#search");
let searchBar = document.querySelector("#input");
let section = document.querySelector("#data-container");
let champSelector = document.querySelector("#champion-select");
let champData = document.querySelector("#basic-info");
let button = document.querySelector("#search");
let champPhoto = document.querySelector("#champion-image");
// finds all champions
async function fetchChampions() {
  const url = `http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json`;
  const res = await axios.get(url);
  // console.log(res)
  let champions = Object.keys(res.data.data)
  console.log(res.data.data)

  setChampionValues(champions)
}
fetchChampions();
// sets champion values
function setChampionValues(champions) {
  champions.forEach(champion => {
    // console.log(champion)
    let option = document.createElement("option");
    option.value = champion;
    option.textContent = champion;
    champSelector.appendChild(option);



  });

};
function fetchChampionImages() {
  let champion = champSelector.value;
  removeData();
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
  // const res = await axios.get(url);
  // const image = document.createElement("img");
  champPhoto.src = `${imageUrl}`;
  champPhoto.alt = `${champion} splashart`;
  // champPhoto.appendChild(image);
  // console.log(res)
  let h2 = document.createElement("h2");
  h2.innerText = `${champion}`;
  champData.appendChild(h2);
}
function removeData() {
  champData.innerHTML = ""
}
champSelector.addEventListener("change", fetchChampionImages)