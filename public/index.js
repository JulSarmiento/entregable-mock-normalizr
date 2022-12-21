const tableBody = document.querySelector('.table-body');

const createProductRow = (product) => {
  const row = document.createElement('tr');
  row.classList.add('table-row');
  row.innerHTML = `
    <td class="table-cell">${product.productName}</td>
    <td class="table-cell">${product.productPrice}</td>
    <td class="table-cell">
      <img src="${product.productImage}" alt="${product.productName}" class="table-image">
    </td>
  `;
  return row;
}

const printPRoducts = (products) => {  
  products.forEach((product) => {
      tableBody.insertAdjacentElement('beforeend', createProductRow(product));
  });
}

const products = fetch('/api/products-test')
  .then((response) => response.json())
  .then(({data}) => {
    console.log('data in fecth', data)
    printPRoducts(data);
  });