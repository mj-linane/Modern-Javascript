/* eslint-disable no-use-before-define */

// EVENT LISTENERS
// Load Single Customer Button
document.getElementById('button1').addEventListener('click', loadCustomer);
// Load All Customers Button
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer to HTML
function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>Name: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>`;

      document.getElementById('customer').innerHTML = output;
    }
  };

  xhr.send();
}

// Load All Customers to HTML
function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      customers.forEach(function(customer) {
        output += `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>`;
      });

      document.getElementById('customers').innerHTML = output;
    }
  };

  xhr.send();
}
