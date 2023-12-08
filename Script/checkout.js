let purchased = JSON.parse(localStorage.getItem("purchased"));
let quantity = document.getElementById("quantity");

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

                <td class="text-center bg-black text-white border" data-price>R ${value.price}</td>

                <td class="text-center bg-black text-white border" data-price> ${value.quantity}</td>

                <td class="text-center bg-black text-white border">${value.description}</td>

                <td class="bg-black border"><button data-index="${index}" class="btnd">Remove</button></td>
                
            </tr>
        `;
        
    });
    try {
            // =================== loader =====================\\

            const loader = document.getElementById("loader");

            if(purchased.length > 0){
        
                loader.style.display = "none";
        
            } else if (purchased.length === 0){
        
                loader.style.display = "block";
        
            }
    } catch (error) {

        throw new Error(error);
        
    }
}
renderCheckout();

try {
    function calculateTotalPrice() {
        const totalPrice = purchased.reduce((x, i) => {
            return x + i.price * i.quantity;
        }, 0);
    
        priceValue.innerHTML = `<p>Total Price: R ${totalPrice}</p>`;
    }
    
    calculateTotalPrice();

} catch (error) {
    throw new Error(error);
}

// =================nClear All Button ================== \\

const terminateAll = document.getElementById("clearAll");

function delAll(pos){
    // Splice has no specified second arg so removes all products in array
    purchased.splice(pos);

    saveToStorage();

    renderImg();

    renderCheckout();

}

function clearAll(){
    if(event.target.hasAttribute("data-clearAll")){
        delAll(event.target.value, renderCheckout());
    }
}

terminateAll.addEventListener("click", clearAll);




try {
    function saveToStorage(){
        localStorage.setItem("purchased", JSON.stringify(purchased));
    
        purchased = JSON.parse(localStorage.getItem("purchased"));
    }
} catch (error) {

    throw new Error(error);

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


try {
    function deleteProduct(position) {

        purchased.splice(position, 1);
    
        
        renderImg();
        
        calculateTotalPrice();
        
        saveToStorage();
        
        renderCheckout();
        
    }
} catch (error) {
    throw new Error(error);
}

main.addEventListener("click", function(event) {

    if (event.target.classList.contains("btnd")) {
        
        let index = event.target.getAttribute('data-index'); 

        deleteProduct(index); 
    }
});


const buttonCheckOut = document.getElementById("buttonChecked");


buttonCheckOut.addEventListener("click", function(){
    if(purchased.length === 0){
        alert("no items purchased cannot continue to checkout server responded with a 404 error");
    } else {
        alert("thank you for purchasing at Hypebeast");
    }
})

