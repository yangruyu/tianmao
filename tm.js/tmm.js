window.onload=function(){

	    //导航
	var dhz=$(".dh-z2");
	var dhy=$(".dh-yct");
  for(var i=0;i<dhz.length;i++){
    dhz[i].index=i;
    dhz[i].onmouseover=function(){
      animate(dhy[this.index],{top:-35})
    }
    dhz[i].onmouseout=function(){
      animate(dhy[this.index],{top:-20})
    }
  }

  var dhb=$(".dh-z3");
  var dhx=$(".dh1-yct");
  for(var i=0;i<dhb.length;i++){
    dhb[i].index=i;
    dhb[i].onmouseover=function(){
      animate(dhx[this.index],{top:-35})
    }
    dhb[i].onmouseout=function(){
      animate(dhx[this.index],{top:-20})
    }
  }

      //banner图
    var win=$(".banner_middle")[0];
    var as=$("a",win);
    var lis=$("li",$(".point")[0]);
    var num=0;
     
    as[0].style.zIndex=10;
    var stop=setInterval(lunboR,2000);

    win.onmouseover=function(){
	  clearInterval(stop);
    }
    win.onmouseout=function(){
	stop=setInterval(lunboR,2000);
    }
    var flag=true;
    lis.onmouseover=function(){
        if (flag) {
        flag=false;
    	lunboR();
     }
    }
    
    function lunboR(){
    	num++;
    	if(num==as.length){
    		num=0;
    	}
    	for(var i=0;i<as.length;i++){
    		animate(as[i],{opacity:0})
    		lis[i].className="";
    		/*as[i].style.zIndex=5;*/

    	}
    	lis[num].className="point_hot";
    	animate(as[num],{opacity:1},
    		function(){
    		flag=true;
    	})
       
    }
    //点儿 选项卡
    for(var i=0;i<lis.length;i++){
	lis[i].index=i;
	lis[i].onmouseover=function(){
	for(var j=0;j<as.length;j++){
		animate(as[j],{opacity:0});
		lis[j].className="";
    } 
    lis[this.index].className="point_hot"
   animate(as[this.index],{opacity:1});
    num=this.index;
    	}
   }

   var cdh=$(".cdh-z1");
   var ycdh=$(".item1");

   for(var i=0;i<cdh.length;i++){
   	cdh[i].index=i;
   	cdh[i].onmouseover=function(){
   		ycdh[this.index].style.display="block";
   	}
   	cdh[i].onmouseout=function(){
   		ycdh[this.index].style.display="none";
   	}
   }


   //热门品牌
   var rmpp=$(".rmpp-t1");
   var xst=$(".xst");

   for(var i=0;i<rmpp.length;i++){
    rmpp[i].index=i;
    rmpp[i].onmouseover=function(){
      for(var j=0;j<xst.length;j++){
          xst[j].style.display="none"
      }
      xst[this.index].style.display="block";
    }
    rmpp[i].onmouseout=function(){
      for(var i=0;i<xst.length;i++){
        xst[i].style.display="none";

      }
    xst[this.index].style.display="none";
    }
   }
   
   //头部选项卡 我的淘宝
   var toq=$(".tb-wdtb");
    var yq=$(".tb-yy1");

    for(var i=0;i<toq.length;i++){
        /*先执行循环，后执行事件，因此当触发事件时，i=4，所以会报错，
        给每一个元素添加一个属性index*/
        toq[i].index=i;
        toq[i].onmouseover=function(){
            //this:移到哪个元素上，this就指向谁
            yq[this.index].style.display="block";
        }
        toq[i].onmouseout=function(){
            //this:移到哪个元素上，this就指向谁
            yq[this.index].style.display="none";
        }
    }

       //收藏夹
     var tow=$(".tb-sjj");
    var yw=$(".tb-yy2");

    for(var i=0;i<tow.length;i++){
        /*先执行循环，后执行事件，因此当触发事件时，i=4，所以会报错，
        给每一个元素添加一个属性index*/
        tow[i].index=i;
        tow[i].onmouseover=function(){
            //this:移到哪个元素上，this就指向谁
            yw[this.index].style.display="block";
        }
        tow[i].onmouseout=function(){
            //this:移到哪个元素上，this就指向谁
            yw[this.index].style.display="none";
        }
    }
     

       //手机版
     var toe=$(".tb-sjb");
    var ye=$(".tb-yy3");

    for(var i=0;i<toe.length;i++){
        /*先执行循环，后执行事件，因此当触发事件时，i=4，所以会报错，
        给每一个元素添加一个属性index*/
        toe[i].index=i;
        toe[i].onmouseover=function(){
            //this:移到哪个元素上，this就指向谁
            ye[this.index].style.display="block";
        }
        toe[i].onmouseout=function(){
            //this:移到哪个元素上，this就指向谁
            ye[this.index].style.display="none";
        }
    }
     

      //网站导航
    var tor=$(".tb-wzdh");
    var yr=$(".tb-yy4");

    for(var i=0;i<toe.length;i++){
        /*先执行循环，后执行事件，因此当触发事件时，i=4，所以会报错，
        给每一个元素添加一个属性index*/
        tor[i].index=i;
        tor[i].onmouseover=function(){
            //this:移到哪个元素上，this就指向谁
            yr[this.index].style.display="block";
        }
        tor[i].onmouseout=function(){
            //this:移到哪个元素上，this就指向谁
            yr[this.index].style.display="none";
        }
    }
     

    //图片移动1列
   var buyBoq=$(".t1-t1");
    for(var i=0;i<buyBoq.length;i++){
    buyBoq[i].index=i;
    buyBoq[i].onmouseover=function(){
        animate(buyBoq[this.index],{right:760})
    }
    buyBoq[i].onmouseout=function(){
        animate(buyBoq[this.index],{right:750})
    }
    }
  
      //2列
    var buyBow=$(".t1-t2");
    for(var i=0;i<buyBow.length;i++){
    buyBow[i].index=i;
    buyBow[i].onmouseover=function(){
        animate(buyBow[this.index],{right:-10})
    }
    buyBow[i].onmouseout=function(){
        animate(buyBow[this.index],{right:-20})
    }
    }

     //3列
    var buyBoe=$(".t1-t3");
    for(var i=0;i<buyBoe.length;i++){
    buyBoe[i].index=i;
    buyBoe[i].onmouseover=function(){
        animate(buyBoe[this.index],{right:-10})
    }
    buyBoe[i].onmouseout=function(){
        animate(buyBoe[this.index],{right:-20})
    }
    }
    
     //4列
    var buyBot=$(".yck-tt2");
    for(var i=0;i<buyBot.length;i++){
    buyBot[i].index=i;
    buyBot[i].onmouseover=function(){
        animate(buyBot[this.index],{right:-10})
    }
    buyBot[i].onmouseout=function(){
        animate(buyBot[this.index],{right:-20})
    }
    }

     //潮流酷店 第一张图片
    var buyBou=$(".tt1-tu1");
    for(var i=0;i<buyBou.length;i++){
    buyBou[i].index=i;
    buyBou[i].onmouseover=function(){
        animate(buyBou[this.index],{right:-10})
    }
    buyBou[i].onmouseout=function(){
        animate(buyBou[this.index],{right:-20})
    }
    }
     
     //第二张图片
    var buyBoi=$(".tt1-tu2");
    for(var i=0;i<buyBoi.length;i++){
    buyBoi[i].index=i;
    buyBoi[i].onmouseover=function(){
        animate(buyBoi[this.index],{right:-10})
    }
    buyBoi[i].onmouseout=function(){
        animate(buyBoi[this.index],{right:-20})
    }
    }
    

    //猜你喜欢遮罩
    var cnxh=$(".cnxh-t1");
    var zzyy=$(".zzyy");

    for(var i=0;i<cnxh.length;i++){
    cnxh[i].index=i;
    cnxh[i].onmouseover=function(){
      for(var j=0;j<zzyy.length;j++){
          zzyy[j].style.display="none"
      }
      zzyy[this.index].style.display="block";
    }
    cnxh[i].onmouseout=function(){
      for(var i=0;i<zzyy.length;i++){
        zzyy[i].style.display="none";

      }
    zzyy[this.index].style.display="none";
    }
   }
    

     //品牌旗舰遮罩   第一张
     var qpzq=$(".qpzq-t1");
     var zy=$(".zz-yy");
     for(var i=0;i<qpzq.length;i++){
        qpzq[i].index=i;
        qpzq[i].onmouseover=function(){
            for(var j=0;j<zy.length;j++){
                zy[j].style.display="none";
            }
          zy[this.index].style.display="block";
        }
         qpzq[i].onmouseout=function(){
            for(var i=0;i<zy.length;i++){
                zy[i].style.display="none";
            }
            zy[this.index].style.display="none";
         }

    }


    //品牌旗舰遮罩   第一张
     var qpzq=$(".qpzq-t1");
     var zy=$(".zz-yy");
     for(var i=0;i<qpzq.length;i++){
        qpzq[i].index=i;
        qpzq[i].onmouseover=function(){
            for(var j=0;j<zy.length;j++){
                zy[j].style.display="none";
            }
          zy[this.index].style.display="block";
        }
         qpzq[i].onmouseout=function(){
            for(var i=0;i<zy.length;i++){
                zy[i].style.display="none";
            }
            zy[this.index].style.display="none";
         }

    }
    


    //品牌旗舰遮罩   第二张
     var qpze=$(".qpzq-t2");
     var ze=$(".zz-ye");
     for(var i=0;i<qpze.length;i++){
        qpze[i].index=i;
        qpze[i].onmouseover=function(){
            for(var j=0;j<ze.length;j++){
                ze[j].style.display="none";
            }
          ze[this.index].style.display="block";
        }
         qpze[i].onmouseout=function(){
            for(var i=0;i<ze.length;i++){
                ze[i].style.display="none";
            }
            ze[this.index].style.display="none";
         }

    }

    //品牌旗舰遮罩   第三张
     var qpzr=$(".qpzq-t3");
     var zr=$(".zz-yr");
     for(var i=0;i<qpzr.length;i++){
        qpzr[i].index=i;
        qpzr[i].onmouseover=function(){
            for(var j=0;j<zr.length;j++){
                ze[j].style.display="none";
            }
          zr[this.index].style.display="block";
        }
         qpzr[i].onmouseout=function(){
            for(var i=0;i<zr.length;i++){
                zr[i].style.display="none";
            }
            zr[this.index].style.display="none";
         }

    }




   //按序加载

 var floor=$(".floor");
   var arr=[];
   for(var i=0;i<floor.length;i++){
    arr.push(floor[i].offsetTop);
   }
   //获取可视区域的高度
   var heights=document.documentElement.clientHeight;
   var search=$(".search")[0];
   /*
       楼层跳转
   点击相应的按钮
   点击第一层的document.body.scrollTop=aar[0]


*/
  var flag=true;
  var lia=$("li",$(".jump")[0]);
  for(var i=0;i<lia.length;i++){
   lia[i].index=i;
   lia[i].onclick=function(){
      flag=false;
      for(var j=0;j<lia.length;j++){
         lia[j].style.background="#626262";
      }
      lia[this.index].style.background="red";
      /*var obj=document.body.scrollTop?document.body:document.documentElement;*/
      animate(document.body,{scrollTop:arr[this.index]},function(){
         flag=true;
      })
      animate(document.documentElement,{scrollTop:arr[this.index]},function(){
         flag=true;
      })
   }
  }

   //滚动事件
   var sflag=true;
   window.onscroll=function(){
    //实时的获取当前状态滚轮滚动的距离
    //谷歌的
   //   var scrolltop=document.body.scrollTop;
     //火狐的
   //var scrolltop=document.documentElement.scrollTop;
   var obj=document.body.scrollTop?document.body:document.documentElement;
   var scrolltop=obj.scrollTop;

   //判断滚轮滚动的距离+窗口可视区域高度>=那个楼层到页面的距离
   for(var i=0;i<floor.length;i++){
    if(scrolltop+heights>=arr[i]+200){
        //当前层下图片进行加载 floor[i]
        var imgs=$("img",floor[i]);
        for(var j=0;j<imgs.length;j++){
            imgs[j].src=imgs[j].getAttribute("imgpath");
        }


    }
   }
   //搜索栏
   if(scrolltop>=arr[1]){
      if(sflag){
         sflag=false;
          animate(search,{top:0});
      }
     

   }else{
      if(!sflag){
         sflag=true;
         animate(search,{top:-50});
      }
      
   }

    //按钮
    if(!flag){return;}
    for(var i=0;i<floor.length;i++){
      if(scrolltop+heights>=arr[i]+300){
          for(var j=0;j<lia.length;j++){
         lia[j].style.background="#626262";
      }
        lia[i].style.background="red";


      }
   }

   }




}