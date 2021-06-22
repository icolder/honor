
var a = 10;
var b = 12;
console.log(a);
var list = document.getElementsByClassName("list")[0].getElementsByTagName("li");
// for (var index = 0; index < list.length; index++) {
//   (function(i){
//     list[i].onclick = function(){
//       console.log(i);
//     };
//   })(index);
  
// }


window.onscroll = function(){
  var height = document.documentElement.scrollTop;
  console.log(height);
}