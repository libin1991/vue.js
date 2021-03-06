export default {
  name: 'helpers',

  /**
   * 判断是否为空
   * @param {string} value 字符串
   * @return {boolean}
   */
  isEmpty (value) {
    return value === null || value === undefined || value.trim() === ''
  },

  /**
   * key mirror
   * @param {Object} obj 对象
   * @return {Object}
   */
  keyMirror (obj) {
    let ret = {}
    let key

    for (key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue
      }
      ret[key] = key
    }
    return ret
  }
}
