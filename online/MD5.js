const crypto=require('crypto');
let obj=crypto.createHash('md5');//使用 md5 散列算法对数据进行加密
obj.update('12345');//加密的数据
console.log(obj.digest('hex'));//加密的数字换成 16进制的