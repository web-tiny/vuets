
module.exports = function () {
  // 方法
  let env = ''
  if (process.env.npm_lifecycle_script) {
    env = process.env.npm_lifecycle_script.split('--env ')[1]
  }
  if (env === 'local') {
    env += '192.168.16.97:8080'
  }
  return env
}
