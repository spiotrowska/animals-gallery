import axios from "axios";

axios.defaults.headers.common = {
  "Access-Control-Allow-Origin": "*",
};

export const catsAxiosInstance = axios.create({
  baseURL: "https://api.thecatapi.com/v1/",
  headers: {
    "x-api-key":
      "live_REyJVVvFDxoJQYQZCbPwf7VQ64z3FkU27AjQavJZK2dSBXIVmlDIqsSzwUDjstM1",
  },
});

export const dogsAxiosInstance = axios.create({
  baseURL: "https://api.thedogapi.com/v1/",
  headers: {
    "x-api-key":
      "live_FkOUGSCCaIhzCgSGcbBoJD9taMqFkG8NHRhoqwYdlN9MQifLEvl83WPTbQRIof93",
  },
});
