

let price = document.getElementById("price");
let teaxe = document.getElementById("teaxe");
let offer = document.getElementById("offer");
let ads = document.getElementById("ads");
let productName = document.getElementById("productName");
let totalprice = document.getElementById('total');
let showproductname = document.getElementById('productofname');
let showpriceofproduct = document.getElementById('productofprice');
let showproductofteaxs = document.getElementById('productofteaxs');
let showproductofoffer = document.getElementById('productofoffer');
let showproductofads = document.getElementById('productofads');
let showtotalprice = document.getElementById('totalpriceofproduct');




function getTotal(){


      if(price.value == ''){

        alert('please enter your price');  
          

      }else{

        totalprice.innerHTML = +price.value - +ads.value - +teaxe.value - +offer.value;

        
      }

}

Clear.onclick = function clearinputs(){
     
     productName.value = '';
     price.value = '';
     ads.value = '';
     teaxe.value = '';
     offer.value = '';
     productName.value -'';
     totalprice.innerHTML = '';
    

        
}


deleted.onclick = function deletedp(){

  showproductname.innerHTML ='product of name : ';
  showpriceofproduct.innerHTML ='product of price : ';
  showproductofteaxs.innerHTML ='product of teaxs : ';
  showproductofoffer.innerHTML ='product of offer : ';
  showproductofads.innerHTML ='product of ads : ';
  showtotalprice.innerHTML ='Total price of product : ';

}


Show.onclick=() => {

    showproductname.innerHTML+= productName.value + '<br>';
    showpriceofproduct.innerHTML += price.value + '<br>';
    showproductofteaxs.innerHTML += teaxe.value + '<br>';
    showproductofoffer.innerHTML += offer.value + '<br>';
    showproductofads.innerHTML += ads.value +'<br>';
    showtotalprice.innerHTML += totalprice.innerHTML +'<br>';
  


}; 




