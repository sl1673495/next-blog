# next-blog
利用nextjs静态导出html的功能实现同步github issues博客

### 预览地址
http://blog.shanshihao.cn

### 对应的我的github blog仓库
https://github.com/sl1673495/blogs

### 运行
安装依赖：
```
yarn
```
开发环境：
```
yarn dev
```
导出博客(会放在out目录下，导出后请进入out目录后启动anywhere或者http-server类似的静态服务然后访问)：
```
yarn all
```

### 说明
只需要在config.js里改掉repo的owner和name两个字段，  
分别对应你的github用户名和博客仓库名，  
然后执行`yarn all`，  
就可以在out目录下生成静态博客目录。
config中填写client_id和client_secret可以用于取消请求限制。

### 使用[now](https://zeit.co/home)部署
进入out目录，然后执行`now`，页面就会自动部署了。
https://out.sl1673495.now.sh/
