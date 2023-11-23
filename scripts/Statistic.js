export class Statistic extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  };

  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
    <table>
      <th >
        <td>Region</td>
        <td>Number of countries</td>
        <td>Total Sold</td>
      </th >
    </table>
      `;
  }

  update(datas) {
    const template = document.createElement('template');
    const table = document.createElement('table');
    this.shadowRoot.innerHTML = '';
    table.innerHTML = `
      <style>
        table, tr, th, td {
        border: 1px solid #000;
        border-collapse: collapse;
        }

        td, th {
          padding: 5px 10px;
        }
      </style>
      <tr>
        <th>Region</td>
        <th>Number of countries</td>
        <th>Total Sold</td>
      </tr>
  `;
    datas.forEach(data => {
      table.innerHTML += `
        <tr >
          <td>${data.region}</td>
          <td>${data.countries}</td>
          <td>${data.totalSold}</td>
        </tr>
        `;
    });
    template.appendChild(table);
    console.log(table);
    this.shadowRoot.appendChild(table);
  }
}

customElements.define('stat-tag', Statistic);