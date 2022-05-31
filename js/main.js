document.querySelector('#clickMe').addEventListener('click', makeReq)

//async function to make request to server.
async function makeReq() {
    //
    const pizzaPlace = document.querySelector("#pizzaPlace").value;
    const res = await fetch(`/api?student=${pizzaPlace}`)
    const data = await res.json()


    //result
    console.log(data);
    document.querySelector("#pizzaPlaceDisplay").textContent = data.pizzaPlace
    //image that will populate when button is clicked.

    //document.querySelector("#tvShowDisplay").textContent = data.tvShow
    //document.querySelector("#personOccupation").textContent = data.currentOccupation
}

// function to show image

// function show() {
//         document.getElementById('image').style.display = "block";

// }