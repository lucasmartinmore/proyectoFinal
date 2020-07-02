let myProduct;

/*
function LoadProducts() { 

    this.productsAll = []; //array que levanta todos los productos //cambiar a this.productsall
    this.results = []; // array de muestra los resultados 

    this.initProduct = function(products) {//funcion inicial, guarda mis todos mis productos json//cambiar a this.initproduct = function(products)
    this.productsAll = products; // asigno el valor//cambiar a this.productsall = products
    }

    this.getProductId = function(id) {//this.getProductId = function(id)
        return this.productsAll.filter((myProduct)=> myProduct.id === id) //Filtro de producto //return this productall.filter((myProduct)=>myProduct.id === id)
    }

    this.putHtmlProduct = function(myProduct) { //Elemento que crea el html de un producto//this.putHtmlProduct = function(myProduct)
        return `
            <div class="col-4-12">
                <article class="search-item">
                 <div class="col-4-12">
                     <img src="${myProduct.imag}" width="100"> 
                 </div>
                 <div class="col-8-12">
                     <h2>${myProduct.title}</h2>
                     <p>$${myProduct.price}</p>
                <div>
                     <input type="button" class="btn -primary" value="Ver detalle">
                     <input type="button" class="btn -secondary"  value="Agregar al carrito" onclick="addToCart('${myProduct.id}')">
                </div>
                 </div>
                </article>
            </div>
        `
    } 

    this.putListProduct = function(containerProductsId, sourceDataProducts) { //Metodo que manipula los productos. Source es la fuente de datos.//this.putListProduct = function(containerProductsId, sourceDataProducts)
        var container = document.getElementById(containerProductsId); //Espacio donde quiero almacenar el producto//var container = document.getElementById(containerProductsId)
        container.innerHTML = "";//// me aseguro de vaciar el id conteainer
        var html = ''; //Creo una variable para ir agregando mis productos
       console.log(sourceDataProducts)
        

        this[sourceDataProducts].forEach(myProduct => { //Empiezo a recorrer y le digo a source que imprima los product que tenga en data o en result// this[sourceDataProducts].forEach(myProduct => {
        html = html + this.putHtmlProduct(myProduct); //foreach recorre el contenido y a en cada vuelta manda una funcion// html = html + this.putHtmlProduct(myProduct);
        });
        
        container.innerHTML = html;
    }

    this.searchClick = function(Key) { //This.searchClick = function(Key)
        this.results = [];// this.result = [];
        this.productsAll.forEach((myProduct) => { //this.productsall.forEach((myProduct) =>
          if(myProduct.title.toLowerCase().includes(key.toLowerCase())){//myProduct.title.toLowerCase().includes(key.toLowerCase()))
            this.results.push(myProduct);//this.results.push(myProduct);
            }
        });
        return this.results;
    }

}
*/

function resultSearchdat () {
var valuebusc = imputSearch.value
if(valuebusc.trim()=="" ) { 
alert('Usted no ingreso nada')
}else {
var searchResult = document.getElementById('searchresult')
searchResult.innerHTML = valuebusc
}
}

function textProductCart(id) {
var element = document.createElement('li') //No logro que se cree el elemento <li> uno abajo de otro
var text = document.createTextNode(`Usted agrego ${products[id].title}a su carrito`) 
var container = element.appendChild(text)
return container
}

function detailProduct(products, id) {
alert(products[id].detail)
}

var imputSearch = document.getElementById('search')
var buttonSearch = document.getElementById('buttonsearch')
//var contAddCart = document.getElementById('contAddCart') //Agregar Storage
//var buttonCancelAll = document.getElementById('cancelAll')
//var buttonAddCart1 = document.getElementById('addCart1')
//var buttonAddCart2 = document.getElementById('addCart2')
//var buttonAddCart3 = document.getElementById('addCart3')
//var buttonAddCart4 = document.getElementById('addCart4')
//var buttonAddCart5 = document.getElementById('addCart5')
//var buttonAddCart6 = document.getElementById('addCart6')
//var buttonDetail1 = document.getElementById('buttonDetail1')
//var buttonDetail2 = document.getElementById('buttonDetail2')
//var buttonDetail3 = document.getElementById('buttonDetail3')
//var buttonDetail4 = document.getElementById('buttonDetail4')
//var buttonDetail5 = document.getElementById('buttonDetail5')
//var buttonDetail6 = document.getElementById('buttonDetail6')

$(document).ready(function(){
myProduct = new LoadProducts(); //Creo una instancia producto para empezar a cargar todo.//myProduct = new Loadproducts();
myProduct.initProduct(this.productsAll);  //Inicializo el producto y le paso la variable de todos mis product//myProducts.initproduct(this.productsall)
myProduct.putListProduct('containerProducts', 'products'); //Donde quiero que mi lista de product se//myProducts.this.putListProduct('containerProducts', 'products')
//BOTON BUSCADOR

imputSearch.addEventListener('input',function(event) {
 if(event.target.value.length>0) {
 buttonSearch.disabled = false
}else {
 buttonSearch.disabled = true
}
})
buttonSearch.addEventListener('click', function() {
 resultSearchdat () 	
})



function hoverMouseDetail(button) {
button.hover( function (){ 
    $( this ).css( "color" , "black" );
    },
    function () {
    $( this ).css( "color" , "white" );
    });
}
function hoverMouseCart(button) {
    button.hover( function (){ 
        $( this ).css( "color" , "rgb(109, 184, 235)" );
        },
        function () {
        $( this ).css( "color" , "black" );
        });
    }
/*
$('input-.btn -primary').hover( function (){ 
    $( this ).css( "color" , "black" );
    },
    function () {
    $( this ).css( "color" , "white" );
    });
    */
//BOTON DETALLE Y AGREGAR AL CARRITO
hoverMouseDetail($('#buttonDetail1'))
$('#buttonDetail1').click(function() {     
detailProduct(products,0)
})
hoverMouseCart($('#addCart1'))
$('#addCart1').click(function() {
 $('#contAddCart').append(textProductCart(0))
}) 
hoverMouseDetail($('#buttonDetail2'))
$('#buttonDetail2').click(function() {
 detailProduct(products,1)
})
hoverMouseCart($('#addCart2'))
$('#addCart2').click(function() {
 contAddCart.appendChild(textProductCart(1))
}) 
hoverMouseDetail($('#buttonDetail3'))
$('#buttonDetail3').click(function() {
 detailProduct(products,2)
})
hoverMouseCart($('#addCart3'))
$('#addCart3').click(function() {
 contAddCart.appendChild(textProductCart(2))
})
hoverMouseDetail($('#buttonDetail4')) 
$('#buttonDetail4').click(function() {
 detailProduct(products,3)
})
hoverMouseCart($('#addCart4'))
$('#addCart4').click(function() {
 contAddCart.appendChild(textProductCart(3))
}) 
hoverMouseDetail($('#buttonDetail5'))
$('#buttonDetail5').click(function() {
 detailProduct(products,4)
})
hoverMouseCart($('#addCart5'))
$('#addCart5').click(function() {
 contAddCart.appendChild(textProductCart(4))
}) 
hoverMouseDetail($('#buttonDetail6'))
$('#buttonDetail6').click(function() {
 detailProduct(products,5)
})
hoverMouseCart($('#addCart6'))
$('#addCart6').click(function() {
 contAddCart.appendChild(textProductCart(5))
}) 

//BOTON DE CANCELAR MI CARRITO

$('#cancelAll').click(function(){
 $('#contAddCart').remove()
})
})





