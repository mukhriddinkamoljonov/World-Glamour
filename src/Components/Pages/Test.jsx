import React, { useState, useEffect } from "react";

export default function CarsMain() {
  const [filterList] = useState([
    {
      value: "BMW",
    },
    {
      value: "Hyundai",
    },
    {
      value: "Mercedes",
    },
  ]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(filterList)
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setData(res);
      })
      .catch(function (e) {
        console.log(e);
      });
  }, []);

  function handleCheckbox(value, e) {
    if (e.target.checked) {
      let selectedData = data.filter((d) => d.model === value);
      setFilteredData([...filteredData, ...selectedData]);
    } else {
      let unselected = filteredData.filter((d) => {
        return d.model !== value;
      });
      setFilteredData(unselected);
    }
  }

  return (
    <div>
      {filterList?.map((v) => {
        return (
          <div key={v.model}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckbox(v.model, e)}
            />
          </div>
        );
      })}
    </div>
  );
}
