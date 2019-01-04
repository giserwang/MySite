var obj = document.getElementById ("Layer2")  
      //getElementById用于引用创建的层对象
var ala=setInterval(moves,800); 
     //setInterval按照指定的周期（毫秒）来调用函数，不停的调用函数，直到调用clearInterval(ala)函数停止
var x = 100;   //x y 变量是窗体每次运动的量
var y = 100;
function moves()                         //用于控制自由移动的函数
   {
   var tops =  obj.offsetTop;  // offsetTop属性指的是当前对象到上级对象顶部的距离
   var lefts =  obj.offsetLeft;  // offsetLeft属性指的是当前对象到上级对象左侧的距离
   if ( lefts>=document.documentElement.clientWidth-obj.offsetWidth || lefts<=0 )  //设置向上和向左移动的条件 
  //documentElement是文档对象根节点（相当于html的引用）
// clientWidth获取对象可见内容的宽度，不包括滚动条，不包括边框
// offsetWidth 获取当前对象的宽度，包括边缘和边框
	{ x = -x;}         // 设置向左移动
   if ( tops>=document.documentElement.clientHeight-obj.offsetHeight || tops<=0 )
	{ y = -y;}       //    设置向上移动
 	tops = tops + y;                     //默认向下、向右移动
	lefts = lefts + x;
	obj. style.top = tops + "px";  //设置移动对象的位置            
	obj.style.left= lefts + "px";
	}   
obj.onmouseover=function()    //设置鼠标移动至该层发生的行为：
  {         
 clearInterval(ala);           //clearInterval用于清除对setInterval函数的调用 这个函数也可以通过行为面板，通过添加行为-调用Javascript命令进行调用，设置事件为onmouseover	  	
	}