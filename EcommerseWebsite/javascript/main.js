const apikey =
  "https://raw.githubusercontent.com/brainmentorspvtltd/json-data/main/products.json";
const phoneitem = document.getElementById("phoneitem");
const laptopitem = document.getElementById("laptopitem");
const healthitem = document.getElementById("healthCare");
const extraitem = document.getElementById("extraitem");
let searchData;

const jsondata = async () => {
  const response = await fetch(apikey);
  const data = await response.json();
  console.log(data.products[0]);
  filldata(data, 0, 5, phoneitem);
  filldata(data, 5, 10, laptopitem);
  filldata(data, 10, 20, healthitem);
  filldata(data, 20, 30, extraitem);
  searchData = data.products;
};
document.getElementById("searchbtn").addEventListener("keyup", (e) => {
  if (e.code == "Enter") {
    document.getElementById("searchbtn").value = "";
  } else {
    const value = e.target.value;
    console.log(value);
    searchData.forEach((element) => {
      if (element.title.toLowerCase() == value) {
      }
    });
  }
});
const filldata = (data, i, j, itembox) => {
  for (let index = i; index < j; index++) {
    const newdiv = document.createElement("div");
    newdiv.classList.add("productbox");
    newdiv.innerHTML = `
        <img src="${data.products[index].images[0]}" class="productimg" alt="">
            <div class="productinfo" >
                <p>${data.products[index].title}</p>
                <p>$${data.products[index].price}</p>
                <button id="showinfo" value="${data.products[index].id}" onClick="testJS()">Click Me</button>
            </div>
             `;
    itembox.appendChild(newdiv);
  }
};
function testJS() {
    const value = document.getElementById("showinfo").value;
    var queryString = "?para=" + value; 
    window.location.href = "productpage.html" + queryString; 
  }

jsondata();
