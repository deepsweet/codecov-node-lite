import querystring from 'querystring'
import { CoreOptions as RequestOptions } from 'request'
import request from 'request-promise-native'
import getCurrentConfig from './getCurrentConfig'
import { TEnv } from './types'

const endpoint = 'https://codecov.io/upload/v4'
const postOptions: RequestOptions = {
  headers: {
    'Content-Type': 'text/plain',
    Accept: 'text/plain'
  },
  body: ''
}
const putOptions: RequestOptions = {
  headers: {
    'Content-Type': 'text/plain',
    'x-amz-acl': 'public-read'
  }
}

export default async (env: TEnv, data: string) => {
  const config = await getCurrentConfig(env)
  const queryString = querystring.stringify(config)
  const postURL = `${endpoint}?${queryString}`
  const response: string = await request.post(postURL, postOptions)
  const [ reportURL, putURL ] = response.split('\n')

  await request.put(putURL, { ...putOptions, body: data })

  return {
    reportURL,
    config
  }
}
