let cartList = [];

let body = document.getElementById("productPage");
localStorage.setItem("purchased", JSON.stringify(cartList));
    
let items = JSON.parse(localStorage.getItem("Admin")) || [];

body.innerHTML = items.map((v, i) => {
    return `
    <div class="col-md-4 my-5" style="width: 18rem;">
    
        <img src="${v.url}" class="card-img-top" id="filteredImg" alt="${v.name}">

        <div class="card-body">

            <h2 class="card-title text-center">${v.name}</h2>

            <p class="card-text text-center">${v.text}</p>

            <p class="fw-bold text-center">R ${v.price}</p>

            <button value="${i}" class="bg-black w-100 text-white btn">Buy</button>

        </div>

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
    }
});

try {
    // ==== search bar functionality ==== \\

    const searchRes = document.getElementById("result");

    const sInput = document.getElementById("SearchInput");

    const handleSearch = () => {

        const searchTerm = sInput.value.toLowerCase();

        const filteredItems = items.filter(item => {

            if(item.name.toLowerCase().includes(searchTerm)){

                searchRes.innerHTML += `
                <div class="d-flex justify-content-center">

                    <div>

                        <img src="${item.url}" id="searchImage"/>

                        <h5 class="text-center">${item.name}</h5>

                    </div>

                </div>
                `;

            }
        });
    };

    sInput.addEventListener("input", handleSearch);

} catch (error) {

   throw new Error(error);

}










// ===============Sort function=============== \\