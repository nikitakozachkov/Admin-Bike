import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

export async function getBikes() {
  const { data } = await axios.get("/bikes");
  return data;
}
export async function addBike(bike) {
  const { data } = await axios.post("/bikes", bike);
  return data;
}

export async function deleteBike(id) {
  const { data } = await axios.delete(`/bikes/${id}`);
  return data;
}

export async function updateBikeStatus({ id, status }) {
  const { data } = await axios.patch(`/bikes/${id}`, { status });
  return data;
}
