# next-blog
利用nextjs静态导出html的功能实现博客。

### 预览地址
http://blog.shanshihao.cn

### 运行
安装依赖：
```
yarn
```
开发环境：
```
yarn dev
```
导出博客：
```
yarn all
```

### 说明
如果想导出另外的github博客，只需要在config.js里改掉repo的owner和name两个字段，分别对应你的github用户名和博客仓库名，然后执行`yarn all`，就可以在out目录下生成静态博客目录。
config中填写client_id和client_secret可以用于取消请求限制。
