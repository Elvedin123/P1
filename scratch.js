// global variables
let inputBtn = document.querySelector("#search");
let searchBar = document.querySelector("#input");
let section = document.querySelector("#data-container");
let champSelector = document.querySelector("#champion-select");
let champData = document.querySelector("#basic-info");
let button = document.querySelector("#search");
let champPhoto = document.querySelector("#champion-image");
let championObj = {}
let abilityImg = document.querySelector(".abilities")
let abilityName = document.querySelector(".abiname");
let abilities = document.querySelector("#abilities");
let abiDescription = document.querySelector(".ability-info")
// let spellcard = document.querySelector(".spellcard")
// finds all champions
async function fetchChampions() {


  const url = `https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json`;
  const res = await axios.get(url)
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
  console.log(currentChampObj)
  removeData();
  // removeText();
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



  async function fetchNewData() {
    removeText();
    const newChampData = `https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion/${champion}.json`;
    const res = await axios.get(newChampData);
    let newData = res.data.data
    let newName = Object.keys(newData)[0]
    console.log(newName)
    let newChampObj = newData[newName];
    console.log(newChampObj)
    // removeText();
    newChampObj.spells.forEach(spell => {
      console.log(spell.image.full)
      let spellcard = document.createElement("div");
      spellcard.classList.add("spellcard");

      let abiName = spell.name;
      console.log(abiName);
      let h1 = document.createElement("h1");
      h1.innerText = abiName;
      spellcard.appendChild(h1);
      console.log(h1)
      // abilityName.appendChild(h2)

      let imgLink = spell.image.full;
      console.log(imgLink)
      let img = document.createElement("img")
      img.src = `https://ddragon.leagueoflegends.com/cdn/11.24.1/img/spell/${imgLink}`
      spellcard.appendChild(img)
      console.log(img)

      let abiDes = spell.description;
      let p = document.createElement("p");
      p.innerText = abiDes
      spellcard.appendChild(p)
      console.log(p)

      abilities.appendChild(spellcard);

    })
    // console.log(res.data.data)
    // championObj = res.data.data;
    // console.log(arr)
    // let newData = res.data.data
    // console.log(newData)
    // console.log(champions)
    // console.log(res.data.data)



  }
  fetchNewData();
};
function removeText() {
  abilities.innerHTML = ""
}
function removeData() {
  champData.innerHTML = ""
}
function handlerInput() {
  let searchValue = searchBar.value;
  fetchChampionInfo(searchValue);
}
inputBtn.addEventListener("click", handlerInput);

champSelector.addEventListener("change", fetchChampionInfo);


