var obj = document.getElementById ("Layer2")  
      //getElementById�������ô����Ĳ����
var ala=setInterval(moves,800); 
     //setInterval����ָ�������ڣ����룩�����ú�������ͣ�ĵ��ú�����ֱ������clearInterval(ala)����ֹͣ
var x = 100;   //x y �����Ǵ���ÿ���˶�����
var y = 100;
function moves()                         //���ڿ��������ƶ��ĺ���
   {
   var tops =  obj.offsetTop;  // offsetTop����ָ���ǵ�ǰ�����ϼ����󶥲��ľ���
   var lefts =  obj.offsetLeft;  // offsetLeft����ָ���ǵ�ǰ�����ϼ��������ľ���
   if ( lefts>=document.documentElement.clientWidth-obj.offsetWidth || lefts<=0 )  //�������Ϻ������ƶ������� 
  //documentElement���ĵ�������ڵ㣨�൱��html�����ã�
// clientWidth��ȡ����ɼ����ݵĿ�ȣ����������������������߿�
// offsetWidth ��ȡ��ǰ����Ŀ�ȣ�������Ե�ͱ߿�
	{ x = -x;}         // ���������ƶ�
   if ( tops>=document.documentElement.clientHeight-obj.offsetHeight || tops<=0 )
	{ y = -y;}       //    ���������ƶ�
 	tops = tops + y;                     //Ĭ�����¡������ƶ�
	lefts = lefts + x;
	obj. style.top = tops + "px";  //�����ƶ������λ��            
	obj.style.left= lefts + "px";
	}   
obj.onmouseover=function()    //��������ƶ����ò㷢������Ϊ��
  {         
 clearInterval(ala);           //clearInterval���������setInterval�����ĵ��� �������Ҳ����ͨ����Ϊ��壬ͨ�������Ϊ-����Javascript������е��ã������¼�Ϊonmouseover	  	
	}