
## 构建项目
```
# 克隆项目
git clone git@github.com:ni-ning/deep-ocean.git

# 进入项目目录
cd deep-ocean

# 安装依赖
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

## 打包发布
```
# 指定打包路径 vue.config.js
publicPath: './',
outputDir: 'D:\\learning\\dist\\deep-ocean',

# 打包
npm run build:prod

# 发布
可借助github或自建分发服务 到指定服务器
```

## 线上部署

