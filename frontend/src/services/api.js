import axios from "axios";

export const rockets = axios.create({
  baseURL: "https://api.spacexdata.com/v3/rockets",
});

export const authLogin = axios.create({
  baseURL: "http://localhost:8080/user/",
})

export const userLogin = axios.create({
  baseURL: "http://localhost:8080/user",
})


export const launches = axios.create({
  baseURL:'https://api.spacexdata.com/v3/launches',
})

