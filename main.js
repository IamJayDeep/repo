var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
};


var container = document.getElementById('container');
var imgPreview = document.createElement('div');
// imgPreview.classList.add('imgPreview')
imgPreview.id = 'leftImgPreview';
var mainPreview = document.createElement('img');
mainPreview.src = productData.preview;

var leftContainer = document.createElement('div');
// leftContainer.classList.add('leftContainer')
leftContainer.id = 'leftContainer';
var ProductHeading = document.createElement('h1');
ProductHeading.innerText = productData.name;

var brand = document.createElement('h3');
brand.innerText = productData.brand;
var price = document.createElement('h3');

price.innerText = 'Price: Rs ' + productData.price;

var description = document.createElement('h3');
description.innerText = 'Description';
var info = document.createElement('p');
info.innerText = productData.description;

var pHeading = document.createElement('h3');
pHeading.innerText = 'Product Preview';

var PdtPreview = document.createElement('div');
PdtPreview.id = 'pdtPreview';


for (let i = 0; i < productData.photos.length; i++) {
  var preview = productData.photos[i];
  var smallImg = document.createElement('img');
  smallImg.id = 'smallImgs';
  smallImg.src = preview;
  PdtPreview.append(smallImg);

  smallImg.addEventListener('click', onClick);

  function onClick(e) {
    let src = e.target.src;
    mainPreview.src = src;

    let activeElement = document.getElementsByClassName('active');
    activeElement[0].classList.remove('active');
    e.target.classList.add('active');

  }
  if (i == 0) {
    smallImg.classList.add('active');
  }
}


var addToCart = document.createElement('button');
addToCart.innerText = `Add to Cart`;
addToCart.id = 'cartBtn';

container.append(imgPreview, leftContainer);
imgPreview.append(mainPreview);
leftContainer.append(ProductHeading, brand, price, description, info, pHeading, PdtPreview, addToCart);

