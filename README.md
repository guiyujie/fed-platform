# 前端管理平台(fed-platform)

> `前端管理平台` 是前端研发部 基于gitlab工作流 `自研` 开发的一款研发产物管理平台

> 前端开发人员: `桂玉杰`(前端研发部) 

> 其他说明: 前端管理平台主要获取gitLab的项目信息及开发过程产物。

> server为服务端目录, src为客户端目录

## 环境要求
* nodejs 6.x
* npm 3.x
* mongodb 3.4

### 安装
1. 克隆 项目的 dev 分支到你的机器上
2. 安装mongodb(联系桂玉杰)
3. 修改db.sh文件 根据你安装的mongodb目录, 新建对应的数据库文件夹(参考db.sh)

然后执行安装命令:
```
npm install
```

### 本地开发

```
启动mongo: 执行db.sh文件

启动node服务器端 npm run server  或者 node server/index.js

启动node服务器端 npm run dev
```

> 注:确保项目master已经执行过npm run dll 编译依赖库并提交
> 本地开发前台使用的mock数据,后台使用本地mongodb数据库


### 本地调试
```
npm run debug
```

> 注:本地开发前台使用的mock数据,后台使用本地mongodb数据库
> 开发区分服务端开发和前台开发部分


### 发布测试
```
npm run build
```

 本地编译成功后执行
```
npm run release
```






