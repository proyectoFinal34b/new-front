/* function generateChart(periodo, catData) {
  let dataForChart = [];

  // Agrupar los datos por día o mes según el periodo indicado
  switch (periodo) {
    case "Ultima semana":
      // Obtener los últimos 7 días
      const lastWeek = getLastNDays(7);
      // Generar un objeto con cada día de la última semana
      dataForChart = lastWeek.map((day) => ({ date: day, count: 0 }));
      // Agrupar los datos por día
      dataForChart.forEach((day) => {
        catData.forEach((cat) => {
          if (cat.updatedAt.slice(2, 10) === day.date) {
            day.count += 1;
          }
        });
      });
      break;

    case "Mes actual":
      const currentMonth = getCurrentMonthDays();
      dataForChart = currentMonth.map((day) => ({ date: day, count: 0 }));
      dataForChart.forEach((day) => {
        catData.forEach((cat) => {
          if (cat.updatedAt.slice(2, 10) === day.date) {
            day.count += 1;
          }
        });
      });
      break;

    case "Ultimos 3 meses":
      const last3Months = getLastNMonths(3);
      dataForChart = last3Months.map((month) => ({ date: month, count: 0 }));
      dataForChart.forEach((month) => {
        catData.forEach((cat) => {
          if (cat.updatedAt.slice(2, 7) === month.date) {
            month.count += 1;
          }
        });
      });
      break;

    case "Ultimos 6 meses":
      const last6Months = getLastNMonths(6);
      dataForChart = last6Months.map((month) => ({ date: month, count: 0 }));
      dataForChart.forEach((month) => {
        catData.forEach((cat) => {
          if (cat.updatedAt.slice(2, 7) === month.date) {
            month.count += 1;
          }
        });
      });
      break;

    case "Ultimo año":
      const last12Months = getLastNMonths(12);
      dataForChart = last12Months.map((month) => ({ date: month, count: 0 }));
      dataForChart.forEach((month) => {
        catData.forEach((cat) => {
          if (cat.updatedAt.slice(2, 7) === month.date) {
            month.count += 1;
          }
        });
      });
      break;
    case "Historico":
  const firstMonth = new Date(gatos[0].updatedAt).getMonth() + 1; // Mes del gato más antiguo
      const lastMonth = new Date().getMonth() + 1; // Mes actual
      const months = getMonthsInRange(firstMonth, lastMonth);
      const dataByMonth = groupDataByMonth(gatos, firstMonth, lastMonth);
      const chartData = months.map((month) => {
        const existingData = dataByMonth.find((data) => data.month === month);
        return {
          month,
          count: existingData ? existingData.count : 0,
        };
      });
      return chartData;
    default:
      return [];
  }
}

export default generateChart;
 */