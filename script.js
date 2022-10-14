


var allProducts = document.querySelectorAll(".container .images img")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var price = document.querySelector("#price")

var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function () {

        totalPrice += parseInt(item.getAttribute("price")) 
        price.innerHTML ="The total price is:" + " " + totalPrice

        content.innerHTML += item.getAttribute("alt") + " / "

        if (content.innerHTML !="") {

            btn.style.display="block"
        }
    }

    btn.onclick = function () {

        price.style.display="block"
    }

})



// if (totalPrice >=200000) {
//             totalPrice.style.color="red"
//         } else {
//             totalPrice.style.color="blue"
//         }






