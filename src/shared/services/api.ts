import axios, { AxiosRequestConfig } from "axios";

interface IResponseAxios<T> {
  data: T;
}

const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").accessToken;
  const newConfig = { ...config };
  if (token !== null && newConfig.headers) {
    newConfig.headers.Authorization = `Bearer ${token}`;
  }
  return newConfig;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
  }
);

api.interceptors.response.use(async (response) => {
  const errorInRoute = response.status >= 400 && response.status !== 401;

  if (errorInRoute) {
    throw new Error("Error");
  }

  return response;
});

export const GET = <T>(path: string): Promise<IResponseAxios<T>> =>
  api.get(path);

export const POST = <t>(
  path: any,
  body: unknown,
  headers?: AxiosRequestConfig<unknown>
): Promise<IResponseAxios<t>> => api.post(path, body, headers);

export const PUT = <T>(
  path: any,
  body: unknown,
  headers?: AxiosRequestConfig<unknown>
): Promise<IResponseAxios<T>> => api.put(`${path}`, body, headers);

export const PATCH = <T>(
  path: any,
  body: unknown,
  headers?: AxiosRequestConfig<unknown>
): Promise<IResponseAxios<T>> => api.patch(`${path}`, body, headers);

export const DELETE = <T>(path: any): Promise<IResponseAxios<T>> =>
  api.delete(`${path}`);
