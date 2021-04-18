import { AxiosInstance } from "axios";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { HttpClientContext } from "../contexts/HttpClient";
import { firebase } from '../infra/firebase'

type UseAppContext = {
  currentUser: firebase.User | null,
  httpClient: AxiosInstance
}

export const useAppContext = (): UseAppContext => {
  const { currentUser } = useContext(AuthContext)
  const { httpClient } = useContext(HttpClientContext)

  return {
    currentUser,
    httpClient
  }
}
