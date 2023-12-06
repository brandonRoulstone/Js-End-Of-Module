let itemArr = [];


function InitializeProducts(id, name, description, price, url, text){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url,
    this.text = text
}

let product1 = new InitializeProducts(1, "Nike", "Air force 1", 2500, "https://cdn-thumbs.imagevenue.com/da/59/fa/ME178OIZ_t.jpg", "Iconic, timeless, and always in style – the Nike Air Force 1.");

let product2 = new InitializeProducts(2, "G-star", "It's a shoe", 1600, "https://cdn-thumbs.imagevenue.com/e9/48/0b/ME178OJD_t.jpg", "Experience modern design and durability with the G-star shoe.");

let product3 = new InitializeProducts(3, "Nike", "Nike dunk", 2600, "https://i.postimg.cc/7LVTSD31/product-1.jpg", "Retro vibes and an attitude to match – it's the Nike Dunk.");

let product4 = new InitializeProducts(4, "Nike Air", "It's a shoe", 2500, "https://cdn-thumbs.imagevenue.com/ad/bc/4e/ME178OEA_t.jpg", "Step into innovation and style with Nike Air.");

let product5 = new InitializeProducts(5, "Adidas", "It's a shoe", 1899, "https://cdn-thumbs.imagevenue.com/68/1b/5c/ME178OEX_t.jpg", "Versatile and comfortable, it's the Adidas shoe for every occasion.");

let product6 = new InitializeProducts(6, "Adidas", "It's a shoe", 2399, "https://cdn-thumbs.imagevenue.com/ed/93/cd/ME178OFA_t.jpg", "Sporty and stylish – the Adidas shoe, and very comfortable.");

let product7 = new InitializeProducts(7, "Puma", "It's a shoe", 1699, "https://cdn-thumbs.imagevenue.com/f9/a4/23/ME178OFX_t.jpg", "Versatility meets style with the Puma shoe.");

let product8 = new InitializeProducts(8, "Puma", "It's a shoe", 2199, "https://cdn-thumbs.imagevenue.com/9c/ec/e9/ME178OG3_t.jpg", "Functional and fashionable – the Puma shoe.");

let product9 = new InitializeProducts(9, "Puma", "It's a shoe", 2899, "https://cdn-thumbs.imagevenue.com/de/5e/84/ME178OGC_t.jpg", "Unmatched style and comfort – it's Puma.");

let product10 = new InitializeProducts(10, "G-star", "It's a shoe", 1899, "https://cdn-thumbs.imagevenue.com/6c/c7/b2/ME178OGK_t.jpg", "Another trendsetter from G-star, absolutely an amazing shoe.");

let product11 = new InitializeProducts(11, "G-star", "It's a shoe", 2500, "https://cdn-thumbs.imagevenue.com/49/11/06/ME178OH2_t.jpg", "Modern design and unparalleled comfort – G-star.");

let product12 = new InitializeProducts(12, "Nike", "It's a shoe", 2099, "https://cdn-thumbs.imagevenue.com/aa/47/8b/ME178OHG_t.jpg", "Quality meets style with Nike, makes anything looks fashionable.");

let product13 = new InitializeProducts(13, "Nike", "It's a shoe", 2500, "https://cdn-thumbs.imagevenue.com/73/cd/46/ME178OHO_t.jpg", "The perfect blend of comfort and style – Nike.");

itemArr.push(
    product1,
    
    product2,
    
    product3,
    
    product4,
    
    product5,
    
    product6,
    
    product7,
    
    product8,
    
    product9,
    
    product10,
    
    product11,

    product12,
    
    product13
);
    
console.log(itemArr);
localStorage.setItem("Admin", JSON.stringify(itemArr));
    
itemArr = JSON.parse(localStorage.getItem("Admin"));
    
function saveToStorage(){
    
    localStorage.setItem("Admin", JSON.stringify(itemArr));
    
    itemArr = JSON.parse(localStorage.getItem("Admin"));
}

const adminDom = document.querySelector("main");
    
function RenderProduct(){
    let initialState = itemArr.map(function(item, i){
        return `
        <div id="myModal" class="modal">
            <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header border-bottom-0">
                            <h1 class="modal-title fs-5">Modal title</h1>
                            <button type="button" class="btn-close" id="sss" aria-label="Close"></button>
                        </div>
                        <div class="modal-body py-0">
                            <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
                        </div>
                        <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                            <button type="button" class="btn btn-lg btn-primary">Save changes</button>
                        </div>
                    </div>
              </div>
            </div>
        </div>
  
        <div class="container p-1" id="adminDiv">
        
            <table class="table table-striped">
            
                <tr>
                    <td><img src="${item.url}" class="img"/></td>

                    <td class="fs-4 text-center">${item.name}</td>

                    <td class="text-center">${item.description}</td>

                    <td class="fs-3 text-center">${item.price}</td>

                    <td  style="max-width: 200px; overflow: auto;" class="text-center w-25">${item.text}</td>

                    <td class=""><button class="edit" id="editBtn" value="${i}">Edit</button></td>

                    <td class=""><button class="delete" id="remove" value="${i}">Del <i class="fa-solid fa-trash-can fa-sm" style="color: #ffffff;"></i></button></td>

                </tr>

            </table>

        </div>
        `;
    });
    adminDom.innerHTML = initialState;

    // =================== loader =====================\\

    const loader = document.getElementById("loader");

    if(initialState.length > 0){
        loader.style.display = "none";
    } else if (initialState.length === 0){
        loader.style.display = "block";
    }
}

RenderProduct();

// =============Modal funtionality============ \\

const modal = document.getElementById("myModal");

let modalbtn = document.querySelector("[value]");

let closeModal = document.getElementById("sss");

let delteBtn = document.querySelector(".delete");

function activateModal(position){

    //If the button in array is at "the position of array"

    itemArr.at(position);
}

adminDom.addEventListener("click", function(){
    // check if the current value of button has the attribute value

    if(event.target.hasAttribute("value")){

        modal.style.display = "block";

        //Reads and gets the desired value at target

        activateModal(event.target.value);

    }
});

closeModal.addEventListener("click", function(){

    // removes modal from DOM

    modal.style.display = "none";

});

// ================Window Active?===============\\

window.addEventListener("click", function(event){

    // If modal container contains classlist modal then fire display "none"

    if (event.target.classList.contains("modal")){

        modal.style.display = "none";
        
    }

});


function deleItem(pos){
    
    itemArr.splice(pos, 1);

    saveToStorage();

    RenderProduct();
}

adminDom.addEventListener("click", function() {
    // ============= Deletes product ============= \\
    if(event.target.classList.contains("delete")){

        deleItem(event.target.value, RenderProduct());

    }
});



