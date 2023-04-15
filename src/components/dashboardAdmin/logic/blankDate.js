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
      startDate = new Date(year, month, today.getDate() - dayOfWeek);
      endDate = today;
    } else if (timePeriod === "Mes actual") {
      startDate = new Date(year, month, 1);
      endDate = new Date(year, month, daysInMonth);
    }
  
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      const formattedDate = date.toISOString().slice(2, 10);
      datesArray.push({ date: formattedDate, count: 0 });
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
  