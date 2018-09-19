/*
note:
   replace string in regex way

running test:
   https://playcode.io/123129?tabs=console&script.js&output
   https://regexr.com/
date: 
   2018/9/19 9:12 
*/
var source = "AAA BBB yyy(10, 2121); CCCC DDD yyy(222, 333);";
var reg = new RegExp(/(yyy\()(\d+),\s+(\d+)/g);
// $1: (yyy\()   [first match]
// $2: (\d+)     [second match]
// $3: (\d+)     [third match]
var ss = source.replace(reg, "xxx($2," + " $3" + ", eee");
// ss = AAA BBB xxx(10, 2121, eee); CCCC DDD xxx(222, 333, eee);

console.log(ss);

