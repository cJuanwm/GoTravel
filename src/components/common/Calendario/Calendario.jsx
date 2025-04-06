import { useEffect, useState } from "react";
import { datosJson } from "./datosJson";

export function Calendario() {
  const [dias, setDias] = useState([]);
  const [horas, setHoras] = useState([]);

  useEffect(() => {
    setDias(datosJson[0]);
    setHoras(datosJson[1]);
  });

  //funcion que capture los dos valors (hora y fecha)

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Hora</th>
            {dias.map((dia) => {
              return <th key={dia}>{dia}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {horas.map((hora) => {
            return (
              <tr key={hora}>
                <td>{hora}</td>
                {dias.map((dia) => {
                  return (
                    <td key={dia}>
                      <button className="btn btn-success">reservar</button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
