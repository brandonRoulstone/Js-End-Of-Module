let cartList = [];

let body = document.getElementById("productPage");
localStorage.setItem("purchased", JSON.stringify(cartList));
    
let items = JSON.parse(localStorage.getItem("Admin")) || [];

body.innerHTML = items.map((v, i) => {
    return `
    <div class="row d-flex justify-content-center col bg-dark mt-4 ">
        <div class="col-lg-4">
            <div class="d-flex justify-content-center mt-2">

            <img id="img" src="${v.url}"/>

            </div>

            <div class="d-flex text-white justify-content-center">

            <h2 class="fw-normal text-center">Heading</h2>

            </div>
            <p class="text-white">R${v.price}</p>
        </div>
      <button class="add-button" value="${i}" data-add-btn>View</button>
    </div>
    `
});





// itemArr = JSON.parse(localStorage.getItem("purchased"));

const addToCart = (i) => {
    //======pushing the index of the item array====== \\
    cartList.push(items[i]);

    // ======Then pushes the desired item into the key====== \\
    localStorage.setItem("purchased", JSON.stringify(cartList));
}

console.log(cartList);

body.addEventListener("click", function() {
    if(event.target.hasAttribute("value")){
        addToCart(event.target.value);
        console.log("works")
    }
})