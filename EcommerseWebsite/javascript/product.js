const container = document.getElementById("itemlist");
const apikey =
  "https://raw.githubusercontent.com/brainmentorspvtltd/json-data/main/products.json";
const jsondata = async () => {
    const response = await fetch(apikey);
    const data = await response.json();
    fillproductinfo(data);
  };
const fillproductinfo = (data) => {
    for (let index = 0; index < 30; index++) {
        const newdiv = document.createElement("li");
        newdiv.innerHTML=`
                <img src="${data.products[index].images[0]}" alt="">
                <div class="productinfo">
                    <h2>${data.products[index].title}</h2>
                        <p>${data.products[index].description}</p>
                        <h3>$${data.products[index].price}</h3>
                        <button>Add to cart</button>
                        <button>Buy Me</button>
                </div>
        `;
        container.appendChild(newdiv);
    }
};
jsondata();