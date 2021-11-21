import dayjs from 'dayjs'

// 随机生成16位数字
export function rand16() {
  const num = Math.random().toString()
  return num.slice(2)
}

/**
 * 转换为字符串
 * @param {*} data
 * @returns {String}
 */
export function parseToString<T>(data: T) {
  let d = ''
  switch (typeof data) {
    case 'string':
      d = data
      break
    case 'object':
      d = JSON.stringify(data)
      break
    default:
      d = (data as any).toString()
  }
  return d
}

/**
 * 格式化时间
 * @param date
 * @param format
 */
export function formatDate(
  date: dayjs.ConfigType | Date | string | number,
  format = 'YYYY-MM-DD HH:mm:ss'
): string {
  if (!date) return ''
  return dayjs(date).format(format)
}

/**
 *
 * 判断类型
 */
export const DetermineType = (val: any) => {
  return Object.prototype.toString.call(val).slice(8, -1)
}

/**
 * 防抖
 */
export const debounce = (fn: Function, wait: number | undefined) => {
  let timeOut: NodeJS.Timeout
  return function() {
    clearTimeout(timeOut)
    timeOut = setTimeout((...arg) => {
      fn.apply(this, [...arg])
    }, wait)
  }
}

/**
 * 判断对象的属性是否为空
 * @param obj
 */
export function isNotEmptyObject(obj: any): boolean {
  if (typeof obj === 'object') {
    if (Object.keys(obj).length > 0) {
      return true
    }
  }
  return false
}

/**
 * 判断对象是否为空对象
 * @param value
 */
export function isNotBlankAndEmptyObject(value: any): boolean {
  if (value === null || value === undefined || value === '') {
    return false
  }
  return isNotEmptyObject(value)
}

/**
* 下载流文件
* @param data
* @param fileName
* */
export function downLoadFile(data: any, fileName: string) {
  const blob = new Blob([data], { type: data.type })
  if ('download' in document.createElement('a')) {
    // 非IE下载
    const elink = document.createElement('a')
    elink.download = fileName
    elink.style.display = 'none'
    elink.href = window.URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href) // 释放URL 对象
    document.body.removeChild(elink)
  } else {
    // IE10+下载
    // @ts-ignore
    navigator.msSaveBlob(blob, fileName)
  }
}

/**
 * 遍历tree结构 数据
 * @param {array} val
 * @returns {array}
 */
export function changeTree(val = []) {
  val.forEach((item: any) => {
    if (item.children && item.children.length > 0) {
      changeTree(item.children)
    }
  })
  return val
}

/**
 * 截取url文件名
 * @param url
 *
 */
export function getFileName(url = '') {
  const string = url.substring(url.lastIndexOf('/') + 1)
  return string
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element: HTMLElement, className: string) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * 判断数组内容的某个值是否连续
 * @param {array} arr
 * @param {string} key 要判断的键
 * @returns {boolean}
 */
export function isContinuous(arr = [], key = 'id') {
  return arr.every((item, index, array) => {
    if (index !== array.length - 1) {
      return item[key] + 1 === array[index + 1][key]
    }
    return true
  })
}
