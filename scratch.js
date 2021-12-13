// global variables
let inputBtn = document.querySelector("#search");
let searchBar = document.querySelector("#input");
let section = document.querySelector("#data-container");
let champSelector = document.querySelector("#champion-select")
let button = document.querySelector("#search");
let champPhoto = document.querySelector("#champion-photo");
// finds all champions
async function fetchChampions() {
  const url = `http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json`;
  const res = await axios.get(url);
  console.log(res.data.data)
  let champions = Object.keys(res.data.data)
  console.log(champions)

  setChampionValues(champions)
}
fetchChampions();
// sets champion values
function setChampionValues(champions) {
  champions.forEach(champion => {
    console.log(champion)
    let option = document.createElement("option");
    option.value = champion;
    option.textContent = champion;
    champSelector.appendChild(option);

  });

}