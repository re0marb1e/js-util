"use strict"

const _Array = {};

/**
 * 计算两个数组的交集
 * @param  {Array} a 数组a
 * @param  {Array} b 数组b
 * @return {Array}   数组a与数组b的交集
 */
function intersect(a, b){
	let intersection = a.filter(v => b.includes(v));
	return intersection;
}

_Array.intersect = intersect;

/**
 * 对象数组根据key值去重，把重复值置为ph(如果ph不是undefined)
 * @param  {[type]} arr [description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
function dedup(arr, key, ph){
    let isSlice = (ph === undefined);
    ph = isSlice ? null : ph;

    arr = arr.reverse();
    let newBornArr = [];
    let copyArr = arr.slice(0);
    let len = arr.length;
    arr.forEach(val => {
        copyArr.shift();
        len--;
        if(!copyArr || !copyArr.length){
            newBornArr.push(val);
        }
        for(let i in copyArr){
            if(copyArr[i][key] == val[key]){
                newBornArr.push(ph);
                break;
            }
            if(i == (len-1)){
                newBornArr.push(val);
            }
        }
    });
    arr = newBornArr.reverse();
    if(isSlice){
        arr = arr.filter(val => val);
    }
    return arr;
}

_Array.dedup = dedup;

/**
 * 打乱数组
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function mess(arr){
    var arr2 = arr.slice(0, arr.length);
    arr2.sort(function() {
      return Math.random() - 0.5;
    });
    return arr2;
}

_Array.mess = mess;

/**
 * 从items中的取出hit条数据
 * randomFrom(items[, hit[, start[, end]]])
 * @param  {Array} items   原始数组
 * @param  {Integer} hit   命中数
 * @param  {Integer} start 开始数
 * @param  {Integer} end   结束数
 * @return {Array}         返回命中数组
 */
function randomFrom(items, hit, start, end){
    if(!items || !items.length) return [];

    if(!hit) hit = items.length;
    if(!start) start = 0;
    if(!end) end = items.length;

    if(end > items.length) end = items.length;
    if(hit > items.length) hit = items.length;

    if(end < hit) hit = end;

    let idxs = random(hit, start, end);
    return idxs.map(idx => items[idx]);
}

_Array.randomFrom = randomFrom;

/**
 * 从start开始到end结束命中hit条
 * random(hit, start, end)
 * @param  {Integer} hit   命中数
 * @param  {Integer} start 开始数(包含)
 * @param  {Integer} end   结束数(不包含)
 * @return {Array}         返回命中数组
 */
function random(hit, start, end){
	let randomIdxs = [];

    if(end <= start){
        return [];
    }
	let	total = end - start;
	let idxs = Array.apply(null, Array(total)).map((val) => {
		return start++;
	}); // 生成长度从start到end的数组 [start, start+1, ... , end-1]

	if(total < hit){
		return idxs;
	}

    // 以下为优化，举例当100中选80个，则选出20个，剩下80个为结果; 如果100中选20个, 则选出20个为结果
	let	isReverse = hit / total > 2;
	let loop = isReverse ? (total - hit) : hit;

	let i = 0;
	while(i < loop) {
		let index =  Math.floor(Math.random() * ( total - i ));
		randomIdxs.push(idxs[index]);
		idxs.splice(index, 1);
		i++;
	}

	if(isReverse){
		return idxs;
	} else {
		return randomIdxs.sort((a, b) => a > b);
	}
}

_Array.random = random;

/**
 * 根据宽度与高度和初始值来初始化一个二维数组
 * @param  {Integer}      w   宽度
 * @param  {Integer}      h   高度
 * @param  {Any}          val 初始值
 * @return {Array[Array]}     二维数组
 */
function initialize2DArray(w, h, val){
    return Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
}

_Array.initialize2DArray = initialize2DArray;

/**
 * 转置一个二维数组
 * @param  {Array[Array]} arr 原始二维数组
 * @return {Array[Array]}     转置后的二维数组
 */
function transpose2DArray(arr){
    let w = arr.length;
    let h = 0;
    arr.forEach(val => {
        if(h < val.length){
            h = val.length;
        }
    });

    let newArr = initialize2DArray(w, h, null);
    for(let i in arr){
        for(let j in arr[i]){
            newArr[j][i] = arr[i][j];
        }
    }
	return newArr;
}

_Array.transpose2DArray = transpose2DArray;

module.exports = _Array;