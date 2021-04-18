import React, { useContext, useEffect, useState } from 'react'
import { HttpClientContext } from '../../../contexts/HttpClient'
import { AuthContext } from '../../../contexts/Auth'

import { createHttpClient } from '../../../infra/httpClient'

export const HttpClientProvider: React.FC = (props) => {
  const { currentUser } = useContext(AuthContext)
  const httpClient = createHttpClient()

  httpClient.interceptors.request.use(async (config) => {
    if (currentUser) {
      const token = await currentUser.getIdToken()
      config.headers['Authorization'] = token ? `Bearer ${token}` : ''
    }
    return config
  })

  return (
    <HttpClientContext.Provider value={{ httpClient }}>
      {props.children}
    </HttpClientContext.Provider>
  )
}
