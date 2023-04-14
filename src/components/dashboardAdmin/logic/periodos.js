/* export const generateDatesArray = (dataForChart,period) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const datesArray = [];
  
    switch (period) {
      case "Ultima semana":
        for (let i = 6; i >= 0; i--) {
          const date = new Date(year, month - 1, day - i);
          datesArray.push(date);
        }
        break;
      case "Mes actual":
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
          const date = new Date(year, month - 1, i);
          datesArray.push(date);
        }
        break;
      case "Ultimos tres meses":
        for (let i = 2; i >= 0; i--) {
          const date = new Date(year, month - 1 - i, 1);
          datesArray.push(date);
        }
        break;
      case "Ultimos seis meses":
        for (let i = 5; i >= 0; i--) {
          const date = new Date(year, month - 1 - i, 1);
          datesArray.push(date);
        }
        break;
      case "Ultimo año":
        for (let i = 11; i >= 0; i--) {
          const date = new Date(year, month - 1 - i, 1);
          datesArray.push(date);
        }
        break;
      case "historico":
        const oldestDate = new Date(dataForChart[0].date);
        const oldestYear = oldestDate.getFullYear();
        const oldestMonth = oldestDate.getMonth();
        for (let year = oldestYear; year <= year; year++) {
          const endMonth = year === year ? month - 1 : 11;
          const startMonth = year === oldestYear ? oldestMonth : 0;
          for (let month = endMonth; month >= startMonth; month--) {
            const date = new Date(year, month, 1);
            datesArray.push(date);
          }
        }
        break;
      default:
        break;
    }
    return datesArray;
  };
   */