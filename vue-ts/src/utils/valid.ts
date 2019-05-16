/*
 * @Author: Tiny
 * @Date: 2019-05-15 17:28:47
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-16 10:06:19
 */
// 主要是公用的校验函数
// 手机号的校验
// 邮箱的校验
const isPhone = (phone: any): boolean => /^1[3-9]\d{9}$/.test(phone)

// 是否为数组
const isArray = (val: any): boolean => Object.prototype.toString.call(val) === '[object Array]'

// 是否为对象
const isObject = (val: any): boolean => Object.prototype.toString.call(val) === '[object Object]'

// 是否为空对象
const isNullObject = (val: any): boolean => isObject(val) && Object.keys(val).length !== 0

const isNumber = (val: any): boolean => /^[0-9]+.?[0-9]*$/.test(val)

// 判断是否是偶数
const isEven = (n: number): boolean => n % 2 === 0

const isBoolean = (val: any): boolean => typeof val === 'boolean'

const isFunction = (val: any): boolean => val && typeof val === 'function'

const isString = (val: any): boolean => typeof val === 'string'

const isSymbol = (val: any): boolean => typeof val === 'symbol'

// 判断正整数
const isPositiveInteger = (data: any): boolean => /^[0-9]*[1-9][0-9]*$/.test(data)

// 验证是否中文
const isChineseName = (name: any): boolean => /^[\u4E00-\u9FA5]{1,30}$/.test(name)

// 检查是否是有效的email
const validateEmail = (str: any): boolean => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)

// 验证有效的密码：至少1个大写字母，1个小写字母和1个数字，长度为6-16
const validPassword = (val: any): boolean => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,16}$/.test(val)

// 验证用户名，4到16位(字母，数字，下划线，减号)
const validUserName = (val: any): boolean => /^[a-zA-Z0-9_-]{4,16}$/.test(val)

// 验证车牌号
const validCarNum = (val: any): boolean => /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/.test(val)

// 验证银行卡号13-19位，第一位不为0
const validBankNum = (val: any): boolean => /^([1,9]{1})(\d{12,18})$/.test(val)

// 身份证校验码校验
const checkCode = (val: any): boolean => {
  const p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
  let code = val.substring(17)
  if (p.test(val)) {
    let sum = 0
    for (let i = 0; i < 17; i++) {
      sum += val[i] * factor[i]
    }
    if (parity[sum % 11] === code.toUpperCase()) {
      return true
    }
  }
  return false
}

// 身份证出生日期校验
const checkDate = (val: any): boolean => {
  const pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
  if (pattern.test(val)) {
    const year = val.substring(0, 4)
    const month = val.substring(4, 6)
    const date = val.substring(6, 8)
    const date2 = new Date(year + '-' + month + '-' + date)
    if (date2 && date2.getMonth() === (month - 1)) {
      return true
    }
  }
  return false
}

// 身份证省级地址码校验
const checkProv = (val: any): boolean => {
  let pattern = /^[1-9][0-9]/
  let provs: any = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门'
  }
  if (pattern.test(val)) {
    if (provs[val]) {
      return true
    }
  }
  return false
}

/**
 * 身份证号校验 val为String类型
 * @param {*} val
 */
const validateCardID = (val: any): boolean => {
  if (checkCode(val)) {
    const date = val.substring(6, 14)
    if (checkDate(date)) {
      if (checkProv(val.substring(0, 2))) {
        return true
      }
    }
  }
  return false
}

export {
  isPhone,
  isArray,
  isObject,
  isNullObject,
  isNumber,
  isEven,
  isBoolean,
  isFunction,
  isString,
  isSymbol,
  isPositiveInteger,
  isChineseName,
  validateEmail,
  validPassword,
  validUserName,
  validCarNum,
  validBankNum,
  validateCardID
}
