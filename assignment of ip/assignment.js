async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displayAboveAvgPriceProducts() {
  const products = await fetchData('https://fakestoreapi.com/products');
  const avgPrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
  const aboveAvgPriceProducts = products.filter(product => product.price > avgPrice);

  const output = document.getElementById('output');
  output.innerHTML = `
    <h2 class="text-center">Above Average Price Products</h2>
    <table class="table table-bordered table-striped">
    
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${aboveAvgPriceProducts.map(product => `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

async function displayTopRatedProducts() {
  const products = await fetchData('https://fakestoreapi.com/products');
  const topRatedProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 5);

  const output = document.getElementById('output');
  output.innerHTML = `
  <h2 class="text-center">Top Rated Products</h2>
  <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Title</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        ${topRatedProducts.map(product => `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.rating.rate}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

async function displayDistinctCategories() {
  const products = await fetchData('https://fakestoreapi.com/products');
  const categories = [...new Set(products.map(product => product.category))];

  const output = document.getElementById('output');
  output.innerHTML = `
    <h2 class="text-center">Distinct Categories</h2>
    <table class="table table-bordered table-striped">
      <tbody>
        ${categories.map(category => `
          <tr>
            <td>${category}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

async function displayAvgPriceAndRating() {
  const products = await fetchData('https://fakestoreapi.com/products');
  const avgPrice = products.reduce((sum, product) => sum + product.price, 0) / products.length;
  const avgRating = products.reduce((sum, product) => sum + product.rating.rate, 0) / products.length;

  const output = document.getElementById('output');
  output.innerHTML = `
    <h2 class="text-center">Average Price and Rating</h2>
    <table class="table table-bordered table-striped">
      <tbody>
        <tr>
          <td>Average Price:</td>
          <td>$${avgPrice.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Average Rating:</td>
          <td>${avgRating.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  `;
}

async function displayTopRatedLowPriceProducts() {
  const products = await fetchData('https://fakestoreapi.com/products');
  const topRatedLowPriceProducts = products.sort((a, b) => b.rating - a.rating || a.price - b.price).slice(0, 5);

  const output = document.getElementById('output');
  output.innerHTML = `
    <h2 class="text-center">Top Rated Low Price Products</h2>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Title</th>
          <th>Rating</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        ${topRatedLowPriceProducts.map(product => `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.rating.rate}</td>
            <td>$${product.price}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

async function displayUserInformationAndTotalBill() {
  const products = await fetchData('https://fakestoreapi.com/products');
  const users = await fetchData('https://fakestoreapi.com/users');

  const userList = users.map(user => {
      const userProducts = products.filter(product => product.id === user.id);
      const totalBill = userProducts.reduce((sum, product) => sum + product.price, 0);
      return {
          user,
          userProducts,
          totalBill
      };


  });


  const totalBillForAllUser = userList.reduce((sum, users) => sum + users.totalBill, 0);

  const output = document.getElementById('output');
  output.innerHTML = `
    <h2 class="text-center">User Information and Total Bill</h2>
    <br>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>User Email</th>
          <th>User City</th>
          <th>Products</th>
          <th>Product Price</th>
          
        </tr>
      </thead>
      <tbody>
        ${userList.map(user => `
          <tr>
            <td>${user.user.id}</td>
            <td>${user.user.username}</td>
            <td>${user.user.email}</td>
            <td>${user.user.address.city}</td>
            <td>
              ${user.userProducts.map(product => `
                ${product.title} 
              `).join('')}
            </td>
            
           <td>$${user.totalBill}</td>
            </tr>
            
        `).join('')}
        
        <td colspan="5" class="bg-primary "><strong> Total bill for all user </strong></td>
        <td class="bg-primary "><strong>$${totalBillForAllUser}</strong></td>
        
      </tbody>
    </table>
    

  `;

}

document.addEventListener('onload', () => {
  const aboveAvgBtn = document.getElementById('aboveAvgBtn');
  aboveAvgBtn.addEventListener('click', displayAboveAvgPriceProducts);

  const topRatedBtn = document.getElementById('topRatedBtn');
  topRatedBtn.addEventListener('click', displayTopRatedProducts);

  const distinctCategoriesBtn = document.getElementById('distinctCategoriesBtn');
  distinctCategoriesBtn.addEventListener('click', displayDistinctCategories);

  const avgPriceRatingBtn = document.getElementById('avgPriceRatingBtn');
  avgPriceRatingBtn.addEventListener('click', displayAvgPriceAndRating);

  const topRatedLowPriceBtn = document.getElementById('topRatedLowPriceBtn');
  topRatedLowPriceBtn.addEventListener('click', displayTopRatedLowPriceProducts);

  const userInformationBtn = document.getElementById('userInformationBtn');
  userInformationBtn.addEventListener('click', displayUserInformationAndTotalBill);
});