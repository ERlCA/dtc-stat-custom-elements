export class Stat {
  constructor(datas) {
    this.datas = datas;
    this.dataSets = [];
    this.setDatas();
  }

  setDatas() {
    const regions = Array.from(new Set(this.datas.map(datas => datas.region))).sort((a, b) => a.localeCompare(b));

    regions.forEach(region => {
      const filteredDatas = this.datas.filter(item => item.region === region);
      filteredDatas.sort((a, b) => a.country.localeCompare(b.country));

      const totalSold = Array.from(filteredDatas.map(item => item.units_sold)).reduce((total, currentVal) => total + currentVal, 0);
      /*-------Average shipping time-------*/
      // const shipDate = Array.from(filteredDatas.map(item => item.ship_date));
      // const orderDate = Array.from(filteredDatas.map(item => item.order_date));
      // const shippingTime = [];
      // for (let i = 0; i < shipDate.length; i++) {
      //   const begin = new Date(orderDate[i]);
      //   const end = new Date(shipDate[i]);
      //   let temp = begin.getTime() - end.getTime();
      //   const time = new Date(temp);
      //   shippingTime.push(time.getFullYear())
      // }

      this.dataSets.push({ region: region, countries: filteredDatas.length, totalSold: totalSold })
    })

    console.log(this.dataSets);
  }

  dataSets() {
    return this.dataSets;
  }

}