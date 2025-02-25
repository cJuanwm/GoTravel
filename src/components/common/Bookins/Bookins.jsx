import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { getDataApi } from "../../../services/getDataApi";

import "./Bookins.css";

export function Bookins() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataApi()
      .then((dataApi) => {
        setData(dataApi);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div className="bookins">
      {data.map((item, indexItem) => (
        <Card key={indexItem} {...item} />
      ))}
    </div>
  );
}
