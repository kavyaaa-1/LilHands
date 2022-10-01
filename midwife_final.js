let maids = {
    data: [

        {
            area: "Noida Sector 78",
            name: "Alexa",
            timing: "Full - Time",
            exp: "5 years",
            rating: "4.5",
            price: "4000 per month",
            image: "https://media.istockphoto.com/photos/cheerful-mature-woman-smiling-picture-id1180927423?k=20&m=1180927423&s=612x612&w=0&h=XAGeJOAdUIZK_3x3I8yhldfC-FU2KoFhisooOnk3EnE=",
            dash: "--------------------------------------",
            num: "9294992943",
        },
        {
            area: "Kashmere Gate, Delhi",
            name: "Jessica",
            timing: "Full - Time",
            exp: "2.5 years",
            rating: "4.0",
            price: "4000 per month",
            image: "https://media.istockphoto.com/photos/outdoor-close-up-portrait-of-5-o-year-old-woman-resting-by-the-lake-picture-id1318528755?b=1&k=20&m=1318528755&s=170667a&w=0&h=zbk7Ul4rZXA0pr5IKf7eMck6HeaA2EK4vPkgD75nx8o=",
            dash: "--------------------------------------",
            num: "8794992963",
        },
        {
            area: "Kashmere Gate, Delhi",
            name: "Lily",
            timing: "6 a.m. to 5 p.m.",
            exp: "2 years",
            rating: "3.5",
            price: "6000 per month",
            image: "https://images.thestar.com/vQv7tw1kj9eErWhPYijoXYD3Uig=/1086x724/smart/filters:cb(2700061000):format(webp)/https://www.thestar.com/content/dam/thestar/business/2018/10/11/shes-helping-women-change-the-world-one-entrepreneur-at-a-time/vicki_saunders.jpg",
            dash: "--------------------------------------",
            num: "8465789341",
        },
        {
            area: "Kashmere Gate, Delhi",
            name: "Anita",
            timing: "Full - Time",
            exp: "8 years",
            rating: "5.0",
            price: "7000 per month",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOGt39pB82ZaQJGbGGuvFGxVoP9KhmrXj3bkL71GfakFqpH314zBqNRsTRM0vPbqZzxU&usqp=CAU",
            dash: "--------------------------------------",
            num: "7853928471",
        },
        {
            area: "Dwarka Sector - 21",
            name: "Amanda",
            timing: "8 a.m. to 8 p.m.",
            exp: "5 years",
            rating: "4.0",
            price: "8000 per month",
            image: "https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/Women-Rush-to-Entrepreneurship-in--The-Great-Resignation-/960x0.jpg?format=jpg&width=960",
            dash: "--------------------------------------",
            num: "9393832458",
        },
        {
            area: "Noida Sector - 78",
            name: "Nikita",
            timing: "Full - Time",
            exp: "3.5 years",
            rating: "3.8",
            price: "9000 per month",
            image: "https://imageio.forbes.com/specials-images/imageserve/611bde75926cb502bae8e75b/Women-Rush-to-Entrepreneurship-in--The-Great-Resignation-/960x0.jpg?format=jpg&width=960",
            dash: "--------------------------------------",
            num: "9874563210",
        },
         


    ],
};

for (let i of maids.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h4");
    name.classList.add("maid-name");
    name.innerText = i.name.toUpperCase();
    container.appendChild(name);

    let dash = document.createElement("h6");
    dash.innerText = i.dash;
    container.appendChild(dash);


    let area = document.createElement("h6");
    area.classList.add("area");
    area.innerText = "Area: " + i.area.toUpperCase();
    container.appendChild(area);
    let price = document.createElement("h6");
    price.innerText = "Price: " + "Rs." + i.price;
    container.appendChild(price);
    let exp = document.createElement("h6");
    exp.innerText = "Experience: " + i.exp
    container.appendChild(exp);
    let rate = document.createElement("h6");
    rate.innerText = "Rating: " + i.rating;
    container.appendChild(rate);
    let contact = document.createElement("button");
    contact.innerText = "Call at : " + i.num;
    container.appendChild(contact);


    card.appendChild(container);
    document.getElementById("maids").appendChild(card);
}

//parameter passed from button (Parameter same as category)
//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".area");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});


