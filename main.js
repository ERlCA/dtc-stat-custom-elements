import { fetchData } from "./scripts/FetchData.js";
import { Stat } from "./scripts/Stat.js";
import { Statistic } from "./scripts/Statistic.js";

(async () => {
  const datas = [];
  await fetchData.dataFetching()
    .then(arr => {
      arr.forEach(el => datas.push(el));
    });

  const stat = new Stat(datas);
  const statTag = new Statistic();
  const container = document.querySelector('.container');
  container.appendChild(statTag);
  statTag.update(stat.dataSets);
})();