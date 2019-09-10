const fs = require('fs');
const ora = require('ora')

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file) => {
      const curPath = `${path}/${file}`;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); // 递归删除文件夹
      } else {
        fs.unlinkSync(curPath); // 删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

function rebuild(dir) {
  // 清空md文件夹
  if (fs.existsSync(dir)) {
    delDir(dir)
  }
  // 重新创建md文件夹
  fs.mkdirSync(dir)
}

async function withOra(fn, tip = 'loading...') {
  const spinner = ora(tip).start();

  try {
    const result = await fn()
    spinner.stop()
    return result
  } catch (error) {
    spinner.stop()
    throw error
  }
}

module.exports = {
  withOra,
  delDir,
  rebuild,
};
