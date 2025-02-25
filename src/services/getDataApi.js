export async function getDataApi() {
  const endPoint = "http://localhost:3000/propiedades";

  try {
    const responseData = await fetch(endPoint);
    const dataApi = await responseData.json();
    console.log("This Api response: ", dataApi);
    return dataApi;
  } catch (error) {
    console.log("Data not found by: ", error);
    throw error;
  }
}
