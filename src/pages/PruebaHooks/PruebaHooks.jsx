export const PruebaHooks = () => {
  let nombre = "juan";
  let contador = 0;

  function sumar(num1, num2) {
    return num1 + num2;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <h1>Contador: {sumar(5, 3)}</h1>
      <button>Incrementar</button>
      <button>Decrementar</button>
    </>
  );
};
