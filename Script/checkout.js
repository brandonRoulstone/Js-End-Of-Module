let purchased = JSON.parse(localStorage.getItem("purchased"));
let quantity = document.getElementById("quantity");
let checkoutQuantity = document.querySelector("[data-nav-nav]");

const checkQuantity = () => {
    if(purchased.length > 0){
        let view = purchased.length;

        quantity.innerHTML = `<p>${view}</p>`;

    } else if (purchased.length === 0){
        let view = purchased.length;

        quantity.innerHTML = `<p>${view}</p>`;
        
    }
}
checkQuantity();

const main = document.getElementById("checkoutPage");

let imageCarousel = document.getElementById("displayImages");

let priceValue = document.getElementById("price");

function renderCheckout (){

    main.innerHTML = purchased.map((value, index) => {


        console.log(index);

        return `

            <tr class="border">

            <th class="bg-black text-white text-center border">Name</th>

            <th class="bg-black text-white text-center border">Description</th>

            <th class="bg-black text-white text-center border">Price</th>

            <th class="bg-black text-white text-center border">Quantity</th>

            <th class="bg-black text-white text-center border">Type</th>

            <th class="bg-black text-white text-center border">Controls</th>

            </tr>

            <tr class="border">

                <td class="text-center bg-black text-white border">${value.name}</td>

                <td class="bg-black" style="max-width: 200px; overflow: auto;"><p class="text-center text-white border">${value.text}</p></td>

                <td class="text-center bg-black text-white border" data-price>R ${value.price * value.quantity}</td>

                <td class="text-center bg-black text-white border" data-price> ${value.quantity}</td>

                <td class="text-center bg-black text-white border">${value.description}</td>

                <td class="bg-black border"><button data-index="${index}" class="btnd">Remove</button></td>
                
            </tr>
        `;
        
    });
        // =================== loader =====================\\

        const loader = document.getElementById("loader");

        if(purchased.length > 0){

            loader.style.display = "none";

        } else if (purchased.length === 0){

            loader.style.display = "block";

        }
}
renderCheckout();

function calculateTotalPrice() {
    const totalPrice = purchased.reduce((x, i) => {
        return x + i.price * i.quantity;
    }, 0);

    priceValue.innerHTML = `<p>Total Price: R ${totalPrice}</p>`;
}

calculateTotalPrice();




function saveToStorage(){
    localStorage.setItem("purchased", JSON.stringify(purchased));

    purchased = JSON.parse(localStorage.getItem("purchased"));

    console.log(purchased);
}



function renderImg(){
    imageCarousel.innerHTML = purchased.map(val => {
        return `
        <div>
         <img src="${val.url}" alt="${val.name}" class="image" title="${val.name}"/>
        </div>
        `;
    });
}
renderImg();


function deleteProduct(position) {

    purchased.splice(position, 1);

    saveToStorage();

    renderImg();

    checkQuantity();

    calculateTotalPrice();

    renderCheckout();
    
}

main.addEventListener("click", function(event) {

    if (event.target.classList.contains("btnd")) {
        
        let index = event.target.getAttribute('data-index'); 

        deleteProduct(index); 
    }
});
