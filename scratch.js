// global variables
let inputBtn = document.querySelector("#search");
let searchBar = document.querySelector("#input");
let section = document.querySelector("#data-container");
let champSelector = document.querySelector("#champion-select");
let champData = document.querySelector("#basic-info");
let button = document.querySelector("#search");
let champPhoto = document.querySelector("#champion-image");
let championObj = {}
// finds all champions
async function fetchChampions() {
  const url = `http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json`;
  const res = await axios.get(url);
  console.log(res.data.data)
  championObj = res.data.data;
  // console.log(arr)
  let champions = Object.keys(res.data.data)

  console.log(champions)
  // console.log(res.data.data)

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
function fetchChampionInfo() {
  let champion = champSelector.value;
  // console.log(champSelector)
  let currentChampObj = championObj[champion]
  // console.log(currentChampObj)
  removeData();
  const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;

  champPhoto.src = `${imageUrl}`;
  champPhoto.alt = `${champion} splashart`;

  let h1 = document.createElement("h1")
  h1.innerText = `${champion}`
  champData.appendChild(h1);
  // console.log(championObj)
  let h2 = document.createElement("h2");
  h2.innerText = currentChampObj.title;
  h2.style.fontStyle = "italic"
  champData.appendChild(h2);

  let p = document.createElement("p");
  p.innerText = currentChampObj.blurb;
  champData.appendChild(p);
};
function removeData() {
  champData.innerHTML = ""
}
function handlerInput() {
  let searchValue = searchBar.value;
  fetchChampionInfo(searchValue);
}
inputBtn.addEventListener("click", handlerInput);

champSelector.addEventListener("change", fetchChampionInfo);
