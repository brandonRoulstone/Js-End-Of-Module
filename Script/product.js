let cartList = [];

let body = document.getElementById("productPage");

localStorage.setItem("purchased", JSON.stringify(cartList));
    
let items = JSON.parse(localStorage.getItem("Admin")) || [];

body.innerHTML = items.map((v, i) => {
    return `
    <div class="card col-md-4 my-5 shadow" style="width: 18rem;">
    
        <img src="${v.url}" class="card-img-top" id="filteredImg" alt="${v.name}">

        <div class="card-body">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">

          <path fill="#0d0d" fill-rule="nonzero" d="M7.188 4.832a3.508 3.508 0 0 0-2.322 1.033 3.765 3.765 0 0 0-1.101 2.607v.143c0 2.57 2.301 4.862 5.784 8.331.733.73 1.51 1.506 2.327 2.343l.117.12.117-.12c.82-.84 1.599-1.616 2.33-2.345 3.482-3.467 5.782-5.757 5.782-8.309a3.805 3.805 0 0 0-1.001-2.667 3.51 3.51 0 0 0-2.515-1.14h-.139c-1.641.018-3.117 1.037-3.761 2.595l-.813 1.966-.812-1.966c-.634-1.534-2.074-2.546-3.68-2.594l-.313.003zm4.178 16.513a180.057 180.057 0 0 0-3.04-3.078C4.516 14.471 2 11.963 2 8.635v-.201a5.596 5.596 0 0 1 1.64-3.885A5.223 5.223 0 0 1 7.347 3l.11.001c1.697.018 3.304.797 4.409 2.136l.127.153.127-.153c1.107-1.339 2.717-2.118 4.419-2.136h.204a5.24 5.24 0 0 1 3.753 1.7 5.624 5.624 0 0 1 1.491 3.952c.001 3.314-2.514 5.818-6.321 9.608l-.108.107c-.909.907-1.895 1.89-2.936 2.977l-.629.655-.627-.655z"/>

        </svg>

            <h2 class="card-title text-center">${v.name}</h2>

            <p class="card-text text-center">${v.text}</p>

            <p class="fw-bold text-center">R ${v.price}</p>

            <hr class="w-100"></hr>

            <button value="${i}" class="bg-black w-100 text-white btn">Purchase <i class="fa-solid fa-cart-plus fa-sm" style="color: #ffffff;"></i></button>

        </div>

    </div>
    `
});



// ====================== Look for duplicates ============================== \\
const addToCart = (i) => {
    //======pushing the index of the item array====== \\
    const newItem = items[i];
    const existingItemIndex = cartList.findIndex((item) => item.id === newItem.id);

    if (existingItemIndex !== -1) {
        // If item already exists, update its quantity instead of adding a duplicate \\
        cartList[existingItemIndex].quantity += 1;
    } else {
        // new item, then add it to the cartList \\
        newItem.quantity = 1; // Add quantity property to track the number of items
        cartList.push(newItem);
    }
    
    // ======Then pushes the desired item into the key====== \\
    localStorage.setItem("purchased", JSON.stringify(cartList)) || [];
}

console.log(cartList);

body.addEventListener("click", function(event) {

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

                    <img src="${item.url}" id="searchImage"/>

                    <h5 class="text-center">${item.name}</h5>

                </div>
                `;

            }
        });
    };

    sInput.addEventListener("keyup", handleSearch);

} catch (error) {

   throw new Error(error);

}


// ==================Spinner===================\\

try {
    const loader = document.getElementById("loader");
    
    if(items.length > 0){
        loader.style.display = "none";
    } else if (items.length === 0){
        loader.style.display = "block";
    }
    
} catch (error) {
    throw new Error(error)
}


// ===============Sort function=============== \\


try {
    let sortBtn = document.getElementById("sort");

    sortBtn.addEventListener("click", ()=>{

        let sorted = JSON.parse(localStorage.getItem("Admin"))?.sort((x, y) =>{

        if(x.price < y.price ) return -1; // go before whats current

        if(x.price > y.price ) return 1; // it will always be after

        return 0; 

        });

        body.innerHTML = sorted.map(function(item,index){

            return`
                <div class="card col-md-4 my-5" style="width: 18rem;">
                
                    <img src="${item.url}" class="card-img-top" id="filteredImg" alt="${item.name}">

                    <div class="card-body">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">

                        <path fill="#0d0d" fill-rule="nonzero" d="M7.188 4.832a3.508 3.508 0 0 0-2.322 1.033 3.765 3.765 0 0 0-1.101 2.607v.143c0 2.57 2.301 4.862 5.784 8.331.733.73 1.51 1.506 2.327 2.343l.117.12.117-.12c.82-.84 1.599-1.616 2.33-2.345 3.482-3.467 5.782-5.757 5.782-8.309a3.805 3.805 0 0 0-1.001-2.667 3.51 3.51 0 0 0-2.515-1.14h-.139c-1.641.018-3.117 1.037-3.761 2.595l-.813 1.966-.812-1.966c-.634-1.534-2.074-2.546-3.68-2.594l-.313.003zm4.178 16.513a180.057 180.057 0 0 0-3.04-3.078C4.516 14.471 2 11.963 2 8.635v-.201a5.596 5.596 0 0 1 1.64-3.885A5.223 5.223 0 0 1 7.347 3l.11.001c1.697.018 3.304.797 4.409 2.136l.127.153.127-.153c1.107-1.339 2.717-2.118 4.419-2.136h.204a5.24 5.24 0 0 1 3.753 1.7 5.624 5.624 0 0 1 1.491 3.952c.001 3.314-2.514 5.818-6.321 9.608l-.108.107c-.909.907-1.895 1.89-2.936 2.977l-.629.655-.627-.655z"/>
            
                        </svg>

                        <h2 class="card-title text-center">${item.name}</h2>

                        <p class="card-text text-center">${item.text}</p>

                        <p class="fw-bold text-center">R ${item.price}</p>

                        <button value="${index}" class="bg-black w-100 text-white btn">Purchase <i class="fa-solid fa-cart-plus fa-sm" style="color: #ffffff;"></i></button>

                    </div>

                </div>
            `;
        }).join(''); 
    });
} catch (error) {
    throw new Error(error);
}