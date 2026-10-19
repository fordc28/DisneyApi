async function getJoke() {
  try {
    let name = document.getElementById("text").value
    const url = "https://api.disneyapi.dev/character?name=" + name;
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const jokeHolder = document.getElementById("jokeHolder");

    const img = document.getElementById("img")
    img.src = json.data[0].imageUrl;
   

    jokeHolder.replaceChildren(img);
  } catch (error) {
    console.log(error);
  }
}
