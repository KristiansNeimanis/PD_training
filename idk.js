let setup = document.getElementById("setup");
let delivery = document.getElementById("delivery");

let selected = document.getElementById("select");

let number = document.getElementById("number");
let jokes = document.getElementById("jokes")

let button = document.getElementById("generateBTN");

button.addEventListener("click", async function () {
    console.log("clicked");
    let data;

    for (let index = 0; index < number.value; index++) {
        let joke = document.createElement("li");

        if(selected.value == "twoLiner"){
            data = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
            let json = await data.json();
            setup.innerHTML = json.setup.toString();
            delivery.innerHTML = json.delivery.toString()

            joke.innerHTML = [setup.innerHTML + " ...|... " + delivery.innerHTML];
        } else{
            data = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            let json = await data.json();
            setup.innerHTML = json.joke.toString();
            delivery.innerHTML = null;

            joke.innerHTML = [setup.innerHTML];
        }
        
        jokes.append(joke);
    }
    
    console.log(json);

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