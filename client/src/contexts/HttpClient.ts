import { AxiosInstance } from 'axios'
import React from 'react'
import { createHttpClient } from '../infra/httpClient'

export const HttpClientContext = React.createContext<{
  httpClient: AxiosInstance,
}>({ httpClient: createHttpClient() })
