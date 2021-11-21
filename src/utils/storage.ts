import { decryptByECB, encryptByECB } from './crypto'

// localStorage
export function getLocal(key: string) {
  const localData = localStorage.getItem(key)
  if (!localData) return null
  return JSON.parse(decryptByECB(localData))
}

export function setLocal(key: string, value: string | any) {
  return localStorage.setItem(key, encryptByECB(JSON.stringify(value)))
}

export function removeLocal(key: string) {
  return localStorage.removeItem(key)
}

// sessionStorage
export function getSession(key: string) {
  const localData = sessionStorage.getItem(key)
  if (!localData) return null
  return JSON.parse(decryptByECB(localData))
}

export function setSession(key: string, value: string | any) {
  return sessionStorage.setItem(key, encryptByECB(JSON.stringify(value)))
}

export function removeSession(key: string) {
  return sessionStorage.removeItem(key)
}
