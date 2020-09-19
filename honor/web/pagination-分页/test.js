function Pagination(){
  this.index = 1;
  this.$paginationInfo = $(".pagination-info");
  
}

Pagination.prototype.initPage = function(){
  var self = this;
  var box1 = $(".box1");
  var str = "这是我随便a写的1测试*字符的信息shi是是是你好北京打下";
  test = /[\s|S]*/g;
  var leng = str.match(test).length;
  var everyCount = 6;
  self.pagi = Math.ceil(leng/everyCount);
  var $upPage = $("<div></div>");
  $upPage.css({'height':'30px','width':'70px','background-color':'pink','margin':'5px','float':'left','text-align':'center','line-height':'30px','cursor':'pointer'});
  $upPage.text("共" + ( self.pagi ) + "页");
  self.$paginationInfo.append($upPage);
  

  for (var a = 1; a <= self.pagi; a++) {
    if(a == 1){
      var $page = $("<div></div>");
      $page.css({'height':'30px','width':'70px','background-color':'pink','margin':'5px','float':'left','text-align':'center','line-height':'30px','cursor':'pointer'});
      $page.text("上一页");
      self.$paginationInfo.append($page);
      $page.addClass('pageUp');
      
    } else if (a == self.pagi && a !=1){
      var $page1 = $("<div></div>");
      $page1.css({'height':'30px','width':'70px','background-color':'pink','margin':'5px','float':'left','text-align':'center','line-height':'30px','cursor':'pointer'});
      $page1.text("下一页");
      self.$paginationInfo.append($page1);
      $page1.addClass('pageDown');   
    }
  }
  
  for(var i=0; i<=self.pagi; i++){
    var info = str.substring(everyCount*i,everyCount*(i+1));
    var $box = $("<div></div>");
    
    if(i == 0){
      self.index = i + 1;
      $box.css({'height':'200px','width':'200px','background-color':'pink','margin':'20px'});
      $box.text(info);
      $box.appendTo(box1);
      $box.addClass('page'+self.index);   
    } else {
      self.index = i + 1;
      $box.css({'height':'200px','width':'200px','background-color':'pink','margin':'20px','display':'none'});
      $box.text(info);
      $box.appendTo(box1);
      $box.addClass('page'+self.index);
    }
  }
  self.index = 1;
};

Pagination.prototype.changePage = function(){
  var self = this;
  var $boxes = $(".page"+self.index);
  $boxes.css({'display':'block'}).siblings().css({'display':'none'});
};

Pagination.prototype.listenPageDownClick = function(){
  
};

Pagination.prototype.paginationClick = function(){
  var self = this;
  self.$pageUp = $(".pageUp");
  self.$pageDown = $(".pageDown");
  self.$pageDown.click(function (){
    if(self.index >= self.pagi-1){
      self.index = self.pagi;
      self.changePage();
      // self.$pageDown.unbind('click');
      self.$pageDown.css({'background-color':'#ccc'});
      self.$pageUp.css({'background-color':'pink'});
    } else {
      self.index++;
      self.changePage();
      self.$pageDown.css({'background-color':'pink'});
      self.$pageUp.css({'background-color':'pink'});
    }
    console.log(self.index);
  });

  self.$pageUp.click(function(){
    if(self.index <= 2){
      self.index = 1;
      self.changePage();
      // $pageUp.unbind('click');
      self.$pageUp.css({'background-color':'#ccc'});
      self.$pageDown.css({'background-color':'pink'});
    } else {
      self.index--;
      self.changePage();
      self.$pageUp.css({'background-color':'pink'});
      self.$pageDown.css({'background-color':'pink'});
    }
    console.log(self.index);
    
  }).trigger('click');
};

Pagination.prototype.run = function(){
  this.initPage();
  this.paginationClick();
};


$(function(){
  var paginations = new Pagination();
  paginations.run();

});