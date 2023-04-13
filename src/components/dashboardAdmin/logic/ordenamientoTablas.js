export const sortTable = (column, direction, data) => {
    return [...data]?.sort((a, b) => {
      const columnA = a[column];
      const columnB = b[column];
      if (direction === "asc") {
        if (typeof columnA === "number" && typeof columnB === "number") {
          return columnA - columnB;
        } else if (typeof columnA === "string" && typeof columnB === "string") {
          return columnA.localeCompare(columnB);
        } else if (typeof columnA === "boolean" && typeof columnB === "boolean") {
          return columnA === columnB ? 0 : columnA ? -1 : 1;
        } else {
          return 0;
        }
      } else {
        if (typeof columnA === "number" && typeof columnB === "number") {
          return columnB - columnA;
        } else if (typeof columnA === "string" && typeof columnB === "string") {
          return columnB.localeCompare(columnA);
        } else if (typeof columnA === "boolean" && typeof columnB === "boolean") {
          return columnA === columnB ? 0 : columnA ? 1 : -1;
        } else {
          return 0;
        }
      }
    });
  };
  