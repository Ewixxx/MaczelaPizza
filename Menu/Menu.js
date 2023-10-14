const product = [
  {
      id: 0,
      image: '1.jpg',
      title: 'Bacon Mushroom',
      price: 120,
  },
  {
      id: 1,
      image: '2.jpg',
      title: 'Pizza Combo',
      price: 60,
  },
  {
      id: 2,
      image: '3.jpg',
      title: 'Pizza 3',
      price: 230,
  },
  {
      id: 3,
      image: '4.jpg',
      title: 'The Circle of Life',
      price: 100,
  },
  {
      id: 4,
      image: '5.jpg',
      title: 'All Time Favorite',
      price: 230,
  },
  {
      id: 5,
      image: '6.jpg',
      title: 'Mac Duo',
      price: 100,
  },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
      return (
          item.title.toLowerCase().includes(searchData)
      )
  })
  displayItem(filteredData)
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
      var { image, title, price } = item;
      return (
          `<div class='box'>
              <div class='img-box'>
                  <img class='images' src=${image}></img>
              </div> 
              <div class='bottom'>
                  <p>${title}</p>
                  <h2> ${price}.00</h2>
              <button>Add to cart</button>
              </div>
          </div>`
      )
  }).join('')
};
displayItem(categories);
