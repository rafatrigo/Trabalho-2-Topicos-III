import { Alert, Platform } from 'react-native'

const alertPolyfill = (title, description, options, extra) => {
  const result = window.confirm([title, description])
}