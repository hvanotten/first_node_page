document.querySelector('#clickMe').addEventListener('click', makeReq)

//async function to make request to server.
async function makeReq() {
    // writing it to the server
    const pizzaPlace = document.querySelector("#pizzaPlace").value;
    //const res = await fetch(`/api?student=${pizzaPlace}`)
    // const data = await res.json()
    const tvShow = document.querySelector("#tvShow").value; // update with new html tag
    const res = await fetch(`/api?student=${tvShow}`) // update with new html tag
    //parse json data
    const data = await res.json()
}
    //result
  console.log(data);
  document.querySelector("#pizzaPlace").textContent = data.pizzaPlace
  //document.querySelector("#tvShow").textContent = data.tvShow
  //document.querySelector("#personOccupation").textContent = data.currentOccupation