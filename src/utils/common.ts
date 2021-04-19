import dayjs from 'dayjs'

// 随机生成16位数字
export function rand16() {
  const num = Math.random().toString();
  return num.slice(2);
}

/**
 * 转换为字符串
 * @param {*} data
 * @returns {String}
 */
export function parseToString<T>(data: T) {
  let d = '';
  switch (typeof data) {
    case 'string':
      d = data;
      break;
    case 'object':
      d = JSON.stringify(data);
      break;
    default:
      d = (data as any).toString();
  }
  return d;
}

/**
 * 时间戳转换
 */
export const formatTime = (time: dayjs.ConfigType | undefined, fmt = "YYYY-MM-DD HH:mm:ss") => {
  return time ? dayjs(time).format(fmt) : "";
};

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
  let timeOut: NodeJS.Timeout;
  return function () {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

/**
 * 判断对象的属性是否为空
 * @param obj
 */
export function isNotEmptyObject(obj: any): boolean {
  if (typeof obj === "object") {
    if (Object.keys(obj).length > 0) {
      return true;
    }
  }
  return false;
}

/**
 * 判断对象是否为空对象
 * @param value
 */
export function isNotBlankAndEmptyObject(value: any): boolean {
  if (value === null || value === undefined || value === "") {
    return false;
  }
  return isNotEmptyObject(value);
}

/**
* 下载流文件
* @param data
* @param fileName
* */
export function downLoadFile(data: any, fileName: string) {
  const blob = new Blob([data], { type: data.type });
  if ("download" in document.createElement("a")) {
    // 非IE下载
    const elink = document.createElement("a");
    elink.download = fileName;
    elink.style.display = "none";
    elink.href = window.URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
}