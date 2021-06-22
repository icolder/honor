require("./aam");
var $ = require("jquery");
require("../src/css/index.css")
var a = 12;
console.log(a++);
$(function(){
  $("#app li:nth-child(odd)").css("color","red");
  $("#app li:nth-child(even)").css("color","green");
});