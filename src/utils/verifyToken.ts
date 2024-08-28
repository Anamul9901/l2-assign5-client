/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: any) => {
  if (token) {
    return jwtDecode(token);
  }
};
