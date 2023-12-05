let purchased = JSON.parse(localStorage.getItem("purchased"));


let main = document.getElementById("checkoutPage");


main.innerHTML = purchased.map((value, index) => {
    return `
    <div class="col-md-4 my-5" style="width: 18rem;">
    
        <img src="${value.url}" class="card-img-top" id="filteredImg" alt="${value.name}">

        <div class="card-body">

            <h2 class="card-title text-center">${value.name}</h2>

            <p class="card-text text-center">${value.text}</p>
            
            </div>
            
            </div>
            `;
        });

        
        
        
        // <button value="${index}" class="bg-black w-100 text-white btn">Buy</button>