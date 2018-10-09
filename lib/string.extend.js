"use strict"

const _String = {};

/**
 * 在字符串的指定位置插入子字符串
 * @param  {String}  originStr [description]
 * @param  {String}  subStr    [description]
 * @param  {Integer} index     [description]
 * @return {String}            [description]
 */
function strInsert(originStr, subStr, index){
    return originStr.slice(0, index) + subStr + originStr.slice(index);
}

_String.strInsert = strInsert;

module.exports = _String;