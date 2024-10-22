import axios from "axios";
axios.defaults.withCredentials = true;

const BASE_URI = "https://rustskin.onrender.com/api/v1";

const api = axios.create({
  baseURL: "https://rustskin.onrender.com/api/v1",
  withCredentials: true,
});

export const getUser = () => api.get("/auth/user");

export const login = () => {
  window.location.href = `${BASE_URI}/auth/login`;
};

export const logout = () => api.post("/auth/logout");

export const getSteamInventory = async (userId) =>
  api.get(`/inventory/steamInventory/${userId}`);

export const getImagesPrices = (hashName, appid) =>
  api.get(`/inventory/items/${hashName}/${appid}`);

//Not needed in development
export const tradeItems = (items, steamId) =>
  api.post(`/trade/tradeOffer/${steamId}`, items);

//Create a lobby using Create CoinFlip game
export const createLobby = (data) => api.post("/play/coinFlip", data);

//Display all the lobbies and provida all the necessary data to join game
export const getAllLobies = () => api.get("/play/coinFlip");

//Join the available lobbies
export const joinLobby = (data) => api.patch("/play/coinFlip", data);
