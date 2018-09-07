# 获取本地主机ip地址，兼容windows及Unix

## step1
```
npm install os-ip
```

## step2
```
const getIp = require('os-ip')

console.log(`你的ip地址是： ${getIp()}`)
```
