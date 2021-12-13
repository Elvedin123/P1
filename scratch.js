async function fetchChampion() {
  const url = `http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json`;
  const res = await axios.get(url);

  console.log(res.data.data);
}
fetchChampion();