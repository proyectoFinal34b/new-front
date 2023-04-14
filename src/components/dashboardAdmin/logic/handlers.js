import { filterByDate } from "./filtros";
import { sortTable } from "./ordenamientoTablas";

export const reset = (setShow, array) =>{
    setShow([...array])
}

export const handleColumnClick = (columnName, filters, setFilters, show, setShow) => {
    let direction = "asc";
    if (columnName === filters.column) {
      direction = filters.direction === "asc" ? "desc" : "asc";
    }
    setFilters({
      ...filters,
      column: columnName,
      direction,
    });
    setShow(sortTable(columnName, direction, show));
  };
  
export const handlerClick = (e, filters, setFilters, array, setShow) => {
    console.log(filters.date, e);
    if (filters.date === e) {
      setFilters({ ...filters, date: "" });
      if (filters.type !== "") {
        console.log(e, filters.date)
        setShow([...array].filter((cat) => cat.state === filters.type));
      } else {
        console.log("entor aca?")
        setShow([...array]);
      }
    } else {
      setFilters({ ...filters, date: e });
      if (filters.type !== "") {
        setShow(
          [...array].filter(
            (cat) =>
              cat.state === filters.type && filterByDate(cat.updatedAt, e)
          )
        );
      } else {
        setShow([...array].filter((cat) => filterByDate(cat.updatedAt, e)));
      }
    }
  };
  
export const handlerClickType = (e, filters, setFilters, array, setShow, arg) => {
    if (filters.type === e.target.value) {
      setFilters({ ...filters, type: "" });
      reset(setShow,array);
    } else {
      setFilters({ ...filters, type: e.target.value });
      if (filters.date !== "") {
        setShow(
          [...array].filter(
            (cat) =>
              cat[arg] === e.target.value && filterByDate(cat.updatedAt, filters.date)
          )
        );
      } else {
        setShow([...array].filter((cat) => cat[arg] === e.target.value));
      }
    }
  };
  