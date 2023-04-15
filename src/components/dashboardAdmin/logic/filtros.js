const lastMonth = new Date();
lastMonth.setMonth(lastMonth.getMonth() - 1);

export const filterByDate = (arg, filterValue) => {
    const date = new Date(arg);
    if (filterValue === "Mes actual") {
      return date > lastMonth;
    } else if (filterValue === "Ultimos tres meses") {
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return date > threeMonthsAgo;
    } else if (filterValue === "Ultimos seis meses") {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      return date > sixMonthsAgo;
    } else if (filterValue === "Ultimo año") {
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      return date > oneYearAgo;
    } else if (filterValue === "Ultima semana") {
        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        return date > lastWeek;
      }  else {
        return true;
      }
      
  };