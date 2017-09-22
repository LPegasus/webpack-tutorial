const exec = require('child_process').exec;
const spawn = require('child_process').spawn;
const loaderUtils = require('loader-utils');
const path = require('path');
const fs = require('fs');
const buf = require('buffer');

module.exports = function(source, map) {
  console.log(222222);
  let err = null;
  const fileFullname = this.resourcePath;
  const filename = path.parse(fileFullname).base;

  // 获取文件后缀
  const ext = path.parse(fileFullname).ext.substr(1);

  // 获取 loader 的 option
  options = loaderUtils.getOptions(this);

  // 异步完成回调函数
  const callback = this.async();

  // 获取目标文件绝对路径名
  const distPath = path.resolve(this.options.output.path, filename).replace(/^(.+\/.+\.).+$/, '$1webp')

  // google webp tool bin path
  const binPath = options.bin;
  const _this = this;

  // 拼写命令行
  const cmd = path.resolve(binPath, ext === 'gif' ? 'gif2webp' : 'cwebp') + ' ' + fileFullname + ' -q 60 -o ' + distPath;

  exec(cmd, function(_, stdout, stderr) {
    if (_) {
      console.warn('err: ' + _.message);
    }
    fs.readFile(distPath, function(_, data) {
      // callback(null, 'export default "' + path.relative(process.cwd(), distPath) + '";', map)
      callback(null,
        // 'export default "' + path.relative(process.cwd(), distPath) + '";',
        'export default {url:"' + path.relative(process.cwd(), distPath) + '"};',
        map
      );
    });
  });
}
