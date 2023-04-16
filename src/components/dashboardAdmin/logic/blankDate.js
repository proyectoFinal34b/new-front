export const blankDate = (timePeriod) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const dayOfWeek = today.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let startDate;
  let endDate;
  let datesArray = [];

  if (timePeriod === "Ultima semana") {
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    startDate = new Date(sevenDaysAgo.getFullYear(), sevenDaysAgo.getMonth(), sevenDaysAgo.getDate());
    endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  
  } else if (timePeriod === "Mes actual") {
    startDate = new Date(year, month, 1);
    endDate = new Date(year, month, daysInMonth);
  } else if (timePeriod === "Ultimos 3 meses") {
    startDate = new Date(year, month - 2, 1);
    endDate = new Date(year, month + 1, 0);
  } else if (timePeriod === "Ultimos 6 meses") {
    startDate = new Date(year, month - 5, 1);
    endDate = new Date(year, month + 1, 0);
  } else if (timePeriod === "Ultimo año") {
    startDate = new Date(year - 1, month + 1, 1);
    endDate = new Date(year, month, daysInMonth);
  }

  // incrementar por mes
  if (timePeriod === "Mes actual" || timePeriod === "Ultima semana") {
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const formattedDate = date.toISOString().slice(2, 10);
      datesArray.push({ date: formattedDate, count: 0 });
    }
  } else {
    // incrementar por mes
    for (let date = startDate; date <= endDate; date.setMonth(date.getMonth() + 1)) {
      const formattedDate = date.toLocaleString('default', { month: 'long', year: 'numeric' });
      datesArray.push({ date: formattedDate, count: 0 });
    }
  }

  return datesArray;
};


  export const updateCount = (blankDateArray, otherArray) => {
    const updatedArray = blankDateArray.map((blankDateObj) => {
      const matchingObjs = otherArray.filter((otherObj) => {
        const otherDate = otherObj.updatedAt.toString().slice(2, 10);
        return otherDate === blankDateObj.date;
      });
      const count = matchingObjs.length;
      if (count > 0) {
        return {
          ...blankDateObj,
          count: blankDateObj.count + count,
        };
      } else {
        return blankDateObj;
      }
    });
    return updatedArray;
  };
  