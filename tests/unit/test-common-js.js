module.exports = {
    name: 'linda',
    add(x, y){
        return x + y
    }
}

// 分开定义再关联
const name = 'linda';
function add(x, y){
    return x + y;
}

module.exports.name = name;
module.exports.add = add;

const m = require('./test-common-js.js');
console.log(m.name);      // linda
console.log(m.add(1,2))   // 3