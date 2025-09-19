let setup = document.getElementById("setup");
let delivery = document.getElementById("delivery");

let button = document.getElementById("generateBTN");

button.addEventListener("click", async function () {
    console.log("clicked");

    let data = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
    let json = await data.json();
    console.log(json);

    setup.innerHTML = json.setup.toString();
    delivery.innerHTML = json.delivery.toString();

    // try {
    //     const res = getData();
    //     console.log(res);
    //     setup.innerHTML = res.setup.toString();
    //     delivery.innerHTML = res.delivery.toString();
    // } catch (error) {
    //     console.log(error);
    // }
});

// async function getData() {
//     try {
//         let data = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
//         let json = await data.json();
//         return json;
//     } catch (error) {
//         console.log(error);
//     }
// }