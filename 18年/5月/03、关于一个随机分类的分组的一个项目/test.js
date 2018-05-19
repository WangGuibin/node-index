let factory = require('./factory');
let tools = require('./tools');
let instruction = require('./instruction');
require('./dateFormat');

function getRandomPrice() {
    let randomDigit = Math.floor(Math.random() * 5 + 1);
    let result = '';
    for (let i = 0; i < randomDigit; i++) {
        result += Math.floor(Math.random() * 10).toString()
    }

    return result;
}

//
// console.log(getRandomPrice());
// console.log(new Date().Format('yyyy-MM-dd hh:mm:ss'));

// instruction.init();

//
// console.log(factory.getAddress());

let enterDataArray = [];
for (let i = 0; i < 100; i++) {
    let randomData = {};
    randomData.name = factory.getRandomChar();                      //产品名称
    randomData.type = Math.floor(Math.random() * 10);               //产品类型
    randomData.productDate = new Date().getTime();                  //产品生产时间
    randomData.price = factory.getRandomPrice(5);                   //产品价格
    randomData.address = factory.getAddress();                      //获取随机的生产地区
    randomData.orderId = factory.getRandomCode(100);                //获得随机订单号
    enterDataArray.push(randomData);
}


let typeList = [];
let middleList = [];

enterDataArray.map(function (item, index, list) {
    for (let i = 0; i < list.length; i++) {
        if(index !==i){
            if(item.type === list[i].type) {
                console.log(item);
            }

        }
    }
});