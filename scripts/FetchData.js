// const URL = 'https://raw.githubusercontent.com/solofo-ralitera/dtc-js/main/data/sales_100.json';
const URL = './sales_100.json';

export const fetchData = new class FetchData {
  constructor(url) {
    this.url = url;
  }

  async dataFetching() {
    try {
      const res = await fetch(this.url);
      const json = await res.json();
      return json.sales_100;
    } catch (err) {
      document.querySelector('.container').innerHTML = `
          <p>An error occured : ${err.message}</p>
        `;
    }
  }
}(URL);