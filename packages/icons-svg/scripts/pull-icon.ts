import path from 'path';
import fse from 'fs-extra';
import shelljs from 'shelljs';
import axios from 'axios';
import extract from 'extract-zip';
import chalk from 'chalk';
import fs from 'fs';
import { DOMParser, XMLSerializer } from 'xmldom';
import { ICON_FONT_CONFIG, ICON_FONT_COOKIE } from './constants';

// 假设你有一个本地配置文件（不加入 git 版本控制中，因为敏感信息只保存到开发机）
const localConfig = {
  iconfont: {
    cookie: ICON_FONT_COOKIE // 登录 iconfont.cn 后的 cookie
  }
};

let progress = 0; // 多个图标库时记录进度

main();

async function main() {
  for (let i = 0; i < ICON_FONT_CONFIG.length; i++) {
    await processor(ICON_FONT_CONFIG[i]);
  }
}

// 图标库处理程序
function processor(object: any) {
  return new Promise((resolve) => {
    // 确保存在目标输出目录
    fse.ensureDirSync(path.resolve(process.cwd(), 'output'));

    let downloadFilename = `${object.name}.zip`;
    let zipFilepath = path.resolve(process.cwd(), `output`, downloadFilename);
    let targetDir = path.resolve(process.cwd(), `output`, `${object.name}`);
    let iconTargetDir = path.resolve(process.cwd(), `svg`, `${object.name}`);
    let jsFile = path.resolve(
      process.cwd(),
      `output`,
      `${object.name}`,
      'iconfont.js'
    );
    shelljs.rm('-rf', iconTargetDir);
    axios
      .get(object.url + `&_t=${Date.now()}`, {
        responseType: 'stream',
        headers: {
          cookie: localConfig.iconfont.cookie
        }
      })
      .then((res: any) => {
        if (/^2/.test(res.status)) {
          res.data.pipe(fse.createWriteStream(zipFilepath));

          res.data.on('end', async () => {
            if (fse.existsSync(zipFilepath)) {
              try {
                await extract(zipFilepath, { dir: process.cwd() });
                shelljs.mv(`${process.cwd()}/font_**`, targetDir);
                shelljs.rm('-f', zipFilepath);
                progress++;
                console.log(
                  chalk.yellow(
                    `${object.name} 图标库已下载，当前进度: ${progress}/${ICON_FONT_CONFIG.length}`
                  )
                );
                // 确保存在目标输出目录
                fse.ensureDirSync(
                  path.resolve(process.cwd(), 'svg', object.name)
                );
                generateSvg(jsFile, iconTargetDir);
                shelljs.rm('-rf', targetDir);
                //console.log(chalk.red(data))
                // @ts-ignore
                resolve();
              } catch (err) {
                throw err;
              }
            } else {
              console.log(chalk.yellow(`找不到下载文件: \`${zipFilepath}\`.`));
            }
          });
        } else {
          console.log(chalk.yellow(`iconfont 资源包下载失败.`));
        }
      })
      .catch((err) => {
        throw err;
      });
  });
}

function generateSvg(jsFile: string, targetDir: string) {
  var data = fs.readFileSync(jsFile, 'utf-8');
  const reg = /\'(.*?)\'/;
  data.match(reg);
  const doc = new DOMParser().parseFromString(RegExp.$1);
  const symbols = doc.getElementsByTagName('symbol');
  const ids = [];

  for (let i = 0; i < symbols.length; i++) {
    //@ts-ignore
    const id = symbols[i].getAttribute('id').replace('icon-', '');
    ids.push(id);
    const paths = symbols[i].getElementsByTagName('path');
    let pathContent = '';
    for (let j = 0; j < paths.length; j++) {
      const _path = paths[j];
      const pathStr = new XMLSerializer().serializeToString(_path);
      pathContent += pathStr;
    }
    const content = `<?xml version="1.0" standalone="no"?>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
				${pathContent}
			</svg>
		`;
    // 写入文件
    fs.writeFileSync(path.resolve(targetDir, `${id}.svg`), content);
  }
}
