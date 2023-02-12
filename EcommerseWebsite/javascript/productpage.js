const apikey =
  "https://raw.githubusercontent.com/brainmentorspvtltd/json-data/main/products.json";
const jsondata = async () => {
    const response = await fetch(apikey);
    const data = await response.json();
    fillproductinfo(data)
};
var queryString = decodeURIComponent(window.location.search); //parsing 
queryString = queryString.substring(1); 
var queries = queryString.substring(queryString.length-1);
const container = document.getElementById("container");
const fillproductinfo = (data) => {
       container.innerHTML=`
       <div class="productimg">
       <img src="${data.products[queries].images[0]}" alt="">
   </div>
   <div class="productinfo">
      <h1>${data.products[queries].title}</h1>
       <p>Rating : ${data.products[queries].rating}</p>
       <p>Description : ${data.products[queries].description}</p>
       <p>Category : ${data.products[queries].category}</p>
       <p>Brand : ${data.products[queries].brand}</p>
       <p>Discount : ${data.products[queries].discountPercentage}</p>
       <h2>Price : $${data.products[queries].price}</h2>
       <div class="btns">
           <button>Add Cart</button>
           <button>Buy Now</button>
       </div>
        `;
};
jsondata();