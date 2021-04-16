import CryptoJS from 'crypto-js';
import {parseToString} from './common'

export const aesKey = 'jD4d3t0J%IM@jlAK'

/**
 * AES ECB 加密
 * @param val
 * @returns {String} 返回加密字段
 */
export function encryptByECB<T>(val: T): string {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const data = parseToString(val);
  const srcs = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

/**
 * AES ECB 解密
 * @param data 待解密数据
 * @returns {String} 返回解密字符串
 */
export function decryptByECB<T>(data: T): string {
  const key = CryptoJS.enc.Utf8.parse(aesKey);
  const decrypt = CryptoJS.AES.decrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}

/*
* MD5 加密
* */
export function countersignMD5<T>(data:T){
  return CryptoJS.MD5(data).toString()
}
