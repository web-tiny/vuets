/*
 * @Author: Tiny
 * @Date: 2019-05-14 17:35:07
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-05-14 17:39:13
 */
export function throttle (fn: Function, delay: number) {
  let last: number = 0
  let timer: any = null
  return function () {
    let context = this
    let args = arguments
    let now = +new Date()

    if (now - last < delay) {
      clearInterval(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(context, args)
      }, delay)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
