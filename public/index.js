const tableBody = document.querySelector('.table-body');
const messageBox = document.querySelector('#messages-box');

// Print products
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
};

// Print messages
const createMessageRow = (data) => {
  const { author, message, timestamp} = data;
  const row = document.createElement('li');
  row.classList.add('message-row');
  row.innerHTML = `
    <p class="message-cell">${author.id}</p>
    <p class="message-cell">${timestamp}</p>
    <p class="message-cell">${message}</p>
  `;
  return row;
}

const printMessages = (messages) => {
  messages.forEach((message) => {
    messageBox.insertAdjacentElement('beforeend', createMessageRow(message));
  });
};

const products = fetch('/api/products-test')
  .then((response) => response.json())
  .then(({data}) => {
    console.log('products in fecth', data)
    printPRoducts(data);
  });

const messages = fetch('/api/messages')
  .then((response) => response.json())
  .then(({data}) => {
    console.log('message in fetch', data)
    printMessages(data);
  });
