async function fetchData(champion) {
  const url = "http://ddragon.leagueoflegends.com/cdn/9.13.1/data/en_US/champion.json";
  const response = await axios.get(url);

  console.log(response.data);
}
fetchData("aatrox")