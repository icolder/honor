function Pagination(){
  this.index = 1;
  this.$paginationInfo = $(".pagination-info");
}

Pagination.prototype.initPage = function(){
  var self = this;
  var box1 = $(".box1");
  var str = "这是我随便a写的1测试*字符的信息shi";
  test = /[\u4e00-\u9fa5]/g;
  var leng = str.match(test).length;
  var everyCount = 6;
  var pagi = Math.ceil(leng/everyCount);
  var $upPage = $("<div></div>");
  $upPage.css({'height':'30px','width':'70px','background-color':'pink','margin':'5px','float':'left','text-align':'center','line-height':'30px','cursor':'pointer'});
  $upPage.text("上一页");
  self.$paginationInfo.append($upPage);
  
  for(var i=0; i<=pagi; i++){
    var info = str.substring(everyCount*i,everyCount*(i+1));
    var $box = $("<div></div>");
    var $pagina = $("<div></div>");
    
    if(i == 0){
      self.index = i + 1;
      $box.css({'height':'200px','width':'200px','background-color':'pink','margin':'20px'});
      $box.text(info);
      $box.appendTo(box1);
      $box.addClass('page'+self.index);
      $pagina.css({'height':'30px','width':'30px','background-color':'pink','margin':'5px','float':'left','text-align':'center','line-height':'30px','cursor':'pointer'});
      $pagina.text(self.index);
      self.$paginationInfo.append($pagina);
    } else {
      self.index = i + 1;
      $box.css({'height':'200px','width':'200px','background-color':'pink','margin':'20px','display':'none'});
      $box.text(info);
      $box.appendTo(box1);
      $box.addClass('page'+self.index);
      $pagina.css({'height':'30px','width':'30px','background-color':'pink','margin':'5px','float':'left','text-align':'center','line-height':'30px','cursor':'pointer'});
      $pagina.text(self.index);
      self.$paginationInfo.append($pagina);
    }
    
  }
};

Pagination.prototype.paginationClick = function(){
  var self = this;
  self.$paginationInfo.children('div').each(function(index,ele){
    
    $(ele).click(function(){
      self.index = index+1;
      var $boxClick = $('.page'+self.index);
      $boxClick.css({'display':'block'}).siblings().css({'display':'none'});

    });
  });
};

Pagination.prototype.run = function(){
  this.initPage();
  this.paginationClick();
};


$(function(){
  var paginations = new Pagination();
  paginations.run();

});