 "use strict";
window.onload=function(){
	
	//1.添加列表
	//获取元素ul
	let ullist=document.querySelector("ul.list");
	//用数组的形式将歌曲的相关信息存储起来
	let songlist=[
		{id:'song1',name:'阴天',src:'music/莫文蔚 - 阴天.mp3',icon:'image/img/1.jpg',
		bigimg:'image/img/yintian.jpg',author:'莫文蔚',zjm:'莫文蔚精选',lyric:[
{time:'00:00',lyrics:'阴天'},
{time:'00:03',lyrics:'莫文蔚'},
{time:'00:06',lyrics:'作品李宗盛'},
{time:'00:09',lyrics:'Amin'},
{time:'00:12',lyrics:'李宗盛'},
{time:'00:15',lyrics:'李宗盛'},
{time:'00:19',lyrics:'阴天在不开灯的房间'},
{time:'00:23',lyrics:'当所有思绪都一点一点沉淀'},
{time:'00:26',lyrics:'爱情究竟是精神鸦片'},
{time:'00:29',lyrics:'还是世纪末的无聊消遣'},
{time:'00:34',lyrics:'香烟氲成一摊光圈'},
{time:'00:37',lyrics:'和他的照片就摆在手边'},
{time:'00:41',lyrics:'傻傻两个人笑得多甜'},
{time:'00:47',lyrics:'开始总是分分钟都妙不可言'},
{time:'00:51',lyrics:'谁都认为热情它永不会减'},
{time:'00:54',lyrics:'除了激情褪去后的那一点点倦'},
{time:'01:01',lyrics:'也许像谁说过的贪得无厌'},
{time:'01:05',lyrics:'活该应了谁说过的不知检点'},
{time:'01:09',lyrics:'总之那几年感性赢了理性那一面'},
{time:'01:31',lyrics:'阴天在不开灯的房间'},
{time:'01:34',lyrics:'当所有思绪都一点一点沉淀'},
{time:'01:38',lyrics:'爱恨情欲里的疑点盲点'},
{time:'01:41',lyrics:'呼之欲出那么明显'},
{time:'01:45',lyrics:'女孩通通让到一边'},
{time:'01:48',lyrics:'这歌里的细微末节就算都体验'},
{time:'01:52',lyrics:'若想真明白真要好几年'},
{time:'02:27',lyrics:'回想那一天喧闹的喜宴'},
{time:'02:35',lyrics:'耳边想起的究竟是序曲或完结篇'},
{time:'02:42',lyrics:'感情不就是你情我愿'},
{time:'02:45',lyrics:'最好爱狠扯平俩不相欠'},
{time:'02:49',lyrics:'感情说穿了一人挣脱的一人去捡'},
{time:'02:55',lyrics:'男人大可不必百口莫辨'},
{time:'03:00',lyrics:'女人实在无须楚楚可怜'},
{time:'03:03',lyrics:'总之那几年你们俩个没有缘'},
{time:'03:13',lyrics:'阴天在不开灯的房间'},
{time:'03:16',lyrics:'当所有思绪都一点一点沉淀'},
{time:'03:20',lyrics:'爱情究竟是精神鸦片'},
{time:'03:23',lyrics:'还是世纪末的无聊消遣'},
{time:'03:27',lyrics:'香烟氲成一摊光圈'},
{time:'03:31',lyrics:'和他的照片就摆在手边'},
{time:'03:34',lyrics:'傻傻两个人笑得多甜'},
{time:'03:41',lyrics:'傻傻两个人笑得多甜'}]},
		
		{id:'song2',name:'似水年华',src:'music/刘若英 - 似水年华.mp3',icon:'image/img/2.jpg',bigimg:'image/img/sishui.jpg',
		author:'刘若英',zjm:'后来',lyric:[
{time:'00:00',lyrics:'似水年华'},
{time:'00:03',lyrics:'刘若英'},
{time:'00:06',lyrics:'我的失败与伟大'},
{time:'00:09',lyrics:'波螺'},
{time:'00:12',lyrics:'刘若英'},
{time:'00:20',lyrics:'刘若英'},
{time:'00:28',lyrics:'爱 曾留下的痕迹'},
{time:'00:35',lyrics:'你 已搁在了心里'},
{time:'00:41',lyrics:'风 为什么忽然停了'},
{time:'00:47',lyrics:'你和我的奇迹我还是很努力的等着'},
{time:'00:54',lyrics:'心 从熟悉到陌生'},
{time:'01:00',lyrics:'梦 还重复的做着'},
{time:'01:06',lyrics:'爱 为什么不能说呢'},
{time:'01:12',lyrics:'远方的你是否也和我一样爱着等着'},
{time:'01:22',lyrics:'我宁愿犯错'},
{time:'01:24',lyrics:'不愿错过'},
{time:'01:25',lyrics:'爱你如水流'},
{time:'01:27',lyrics:'无怨无尤'},
{time:'01:29',lyrics:'沉默不该是这场戏里停格镜头'},
{time:'01:35',lyrics:'爱 为什么不能够相守'},
{time:'01:41',lyrics:'你给我的理由'},
{time:'01:43',lyrics:'我只能用一生琢磨'},
{time:'01:48',lyrics:'我宁愿犯错'},
{time:'01:49',lyrics:'也不错过'},
{time:'01:51',lyrics:'年华似水流'},
{time:'01:52',lyrics:'爱恨悠悠'},
{time:'01:54',lyrics:'想念不该是这场戏里停格镜头'},
{time:'02:00',lyrics:'爱 为什么不能够相守'},
{time:'02:06',lyrics:'你给我的理由'},
{time:'02:08',lyrics:'我只能用一生来懂'},
{time:'02:38',lyrics:'心 从熟悉到陌生'},
{time:'02:44',lyrics:'梦 还重复的做着'},
{time:'02:50',lyrics:'爱 为什么不能说呢'},
{time:'02:57',lyrics:'远方的你是否也和我一样爱着等着'},
{time:'03:06',lyrics:'我宁愿犯错'},
{time:'03:08',lyrics:'不愿错过'},
{time:'03:09',lyrics:'爱你如水流'},
{time:'03:11',lyrics:'无怨无尤'},
{time:'03:13',lyrics:'沉默不该是这场戏里停格镜头'},
{time:'03:19',lyrics:'爱 为什么不能够相守'},
{time:'03:25',lyrics:'你给我的理由'},
{time:'03:27',lyrics:'我只能用一生琢磨'},
{time:'03:31',lyrics:'我宁愿犯错'},
{time:'03:33',lyrics:'也不错过'},
{time:'03:35',lyrics:'年华似水流'},
{time:'03:36',lyrics:'爱恨悠悠'},
{time:'03:38',lyrics:'想念不该是这场戏里停格镜头'},
{time:'03:44',lyrics:'爱 为什么不能够相守'},
{time:'03:50',lyrics:'你给我的理由'},
{time:'03:52',lyrics:'我只能用一生来懂'},
{time:'04:00',lyrics:'爱 曾留下的痕迹'},
{time:'04:06',lyrics:'你 已搁在了心里'},
{time:'04:12',lyrics:'风 为什么忽然停了'},
{time:'04:19',lyrics:'你和我的奇迹我还是很努力的等着'},
{time:'04:25',lyrics:'心 从熟悉到陌生'},
{time:'04:32',lyrics:'而这是你我的故事'}]},
		
		{id:'song3',name:'听说',src:'music/刘若英 - 听说.mp3',icon:'image/img/3.jpg',bigimg:'image/img/houlai.jpg',author:'刘若英',zjm:'后来',lyric:[
{time:'00:00',lyrics:'听说'},
{time:'00:8',lyrics:'刘若英'},
{time:'00:16',lyrics:'刘若英'},
{time:'00:24',lyrics:'听说'},
{time:'00:28',lyrics:'你身边有新面孔'},
{time:'00:31',lyrics:'听说你不再寂寞'},
{time:'00:34',lyrics:'听说你提起我'},
{time:'00:37',lyrics:'我过得不错'},
{time:'00:41',lyrics:'忙碌中还有感动'},
{time:'00:44',lyrics:'尝试爱过几个人'},
{time:'00:47',lyrics:'面对爱也诚实许多'},
{time:'00:52',lyrics:'只能被听说安排著'},
{time:'00:56',lyrics:'关於你我的对的'},
{time:'00:57',lyrics:'或错的'},
{time:'00:59',lyrics:'两个人曾经相似的'},
{time:'01:02',lyrics:'却以为都变了'},
{time:'01:05',lyrics:'只能靠听说'},
{time:'01:07',lyrics:'各自爱著'},
{time:'01:09',lyrics:'不需要证明'},
{time:'01:10',lyrics:'当时决定是错的'},
{time:'01:12',lyrics:'想著联络'},
{time:'01:14',lyrics:'不如心底远远问候'},
{time:'01:18',lyrics:'最美丽'},
{time:'01:20',lyrics:'莫过於听说你'},
{time:'01:22',lyrics:'还回忆'},
{time:'01:23',lyrics:'其实我也感激'},
{time:'01:25',lyrics:'当我听说你还相信'},
{time:'01:29',lyrics:'爱情'},
{time:'01:43',lyrics:'听说'},
{time:'01:47',lyrics:'我巷口你常经过'},
{time:'01:50',lyrics:'听说你厌倦寂寞'},
{time:'01:54',lyrics:'听说你问候我'},
{time:'01:57',lyrics:'我过得不错'},
{time:'02:00',lyrics:'忙碌中还有感动'},
{time:'02:04',lyrics:'尝试爱过几个人'},
{time:'02:07',lyrics:'面对爱也诚实许多'},
{time:'02:11',lyrics:'只能被听说安排著'},
{time:'02:15',lyrics:'关於你我的对的'},
{time:'02:17',lyrics:'或错的'},
{time:'02:19',lyrics:'两个人曾经相似的'},
{time:'02:22',lyrics:'却以为都变了'},
{time:'02:25',lyrics:'只能靠听说各自爱著'},
{time:'02:29',lyrics:'不需要证明'},
{time:'02:30',lyrics:'当时决定是错的'},
{time:'02:32',lyrics:'想著联络'},
{time:'02:33',lyrics:'不如心底远远问候'},
{time:'02:38',lyrics:'最美丽莫过於'},
{time:'02:41',lyrics:'听说你还回忆'},
{time:'02:43',lyrics:'其实我也感激'},
{time:'02:45',lyrics:'当我听说你还相信'},
{time:'02:48',lyrics:'爱情'},
{time:'02:51',lyrics:'只能被听说安排著'},
{time:'03:33',lyrics:'听说'},
{time:'03:37',lyrics:'我身边有新面孔'},
{time:'03:40',lyrics:'听说你祝福了我'}]},
		
		{id:'song4',name:'空白格',src:'music/蔡健雅 - 空白格.mp3',icon:'image/img/4.jpg',bigimg:'image/img/kbg.jpg',author:'蔡健雅',zjm:'空白格专辑',lyric:[
{time:'00:00',lyrics:'空白格'},
{time:'00:10',lyrics:'蔡健雅'},
{time:'00:20',lyrics:'尛維尼制作'},
{time:'00:28',lyrics:'蔡健雅'},
{time:'00:34',lyrics:'其实很简单 其实很自然'},
{time:'00:41',lyrics:'两个人的爱由两人分担'},
{time:'00:47',lyrics:'其实并不难 是你太悲观'},
{time:'00:53',lyrics:'隔着一道墙不跟谁分享'},
{time:'00:59',lyrics:'不想让你为难'},
{time:'01:05',lyrics:'你不再需要给我个答案'},
{time:'01:11',lyrics:'我想你是爱我的'},
{time:'01:14',lyrics:'我猜你也舍不得'},
{time:'01:17',lyrics:'但是怎么说 总觉得'},
{time:'01:20',lyrics:'我们之间留了太多空白格'},
{time:'01:24',lyrics:'也许你不是我的'},
{time:'01:27',lyrics:'爱你却又该割舍'},
{time:'01:30',lyrics:'分开或许是选择'},
{time:'01:34',lyrics:'但它也可能是我们的缘分'},
{time:'01:40',lyrics:''},
{time:'02:02',lyrics:'其实很简单 其实很自然'},
{time:'02:09',lyrics:'两个人的爱由两人分担'},
{time:'02:15',lyrics:'其实并不难 是你太悲观'},
{time:'02:22',lyrics:'隔着一道墙不跟说分享'},
{time:'02:27',lyrics:'不想让你为难'},
{time:'02:34',lyrics:'你不再需要给我个答案'},
{time:'02:40',lyrics:'我想你是爱我的'},
{time:'02:44',lyrics:'我猜你也舍不得'},
{time:'02:46',lyrics:'但是怎么说 总觉得'},
{time:'02:49',lyrics:'我们之间留了太多空白格'},
{time:'02:54',lyrics:'也许你不是我的'},
{time:'02:57',lyrics:'爱你却又该割舍'},
{time:'03:00',lyrics:'分开或许是选择'},
{time:'03:04',lyrics:'但它也可能是我们的缘分'},
{time:'03:10',lyrics:'我想你是爱我的'},
{time:'03:13',lyrics:'我猜你也舍不得'},
{time:'03:16',lyrics:'但是怎么说 总觉得'},
{time:'03:19',lyrics:'我们之间留了太多空白格'},
{time:'03:24',lyrics:'也许你不是我的'},
{time:'03:26',lyrics:'爱你却又该割舍'},
{time:'03:29',lyrics:'分开或许是选择'},
{time:'03:34',lyrics:'但它也可能是我们的缘分'}]},
		
		{id:'song5',name:'生如夏花',src:'music/朴树 - 生如夏花.mp3',icon:'image/img/5.jpg',bigimg:'image/img/sss.jpg',author:'朴树',zjm:'生如夏花',lyric:[
{time:'00:00',lyrics:'朴树-生如夏花'},
{time:'00:21',lyrics:'作词:朴树'},
{time:'00:23',lyrics:'作曲:朴树'},
{time:'00:27',lyrics:'编曲:张亚东'},
{time:'00:29',lyrics:'也不知在黑暗中究竟沉睡了多久'},
{time:'00:38',lyrics:'也不知要有多难才能睁开双眼'},
{time:'00:48',lyrics:'我从远方赶来　恰巧你们也在'},
{time:'00:57',lyrics:'痴迷流连人间　我为她而狂野'},
{time:'01:06',lyrics:'我是这耀眼的瞬间'},
{time:'01:09',lyrics:'是划过天边的刹那火焰'},
{time:'01:14',lyrics:'我为你来看我不顾一切'},
{time:'01:19',lyrics:'我将熄灭永不能再回来'},
{time:'01:23',lyrics:'我在这里啊'},
{time:'01:27',lyrics:'就在这里啊'},
{time:'01:34',lyrics:'惊鸿一般短暂'},
{time:'01:38',lyrics:'像夏花一样绚烂'},
{time:'02:10',lyrics:'这是一个多美丽又遗憾的世界'},
{time:'02:18',lyrics:'我们就这样抱着笑着还流着泪'},
{time:'02:28',lyrics:'我从远方赶来　赴你一面之约'},
{time:'02:37',lyrics:'痴迷流连人间　我为她而狂野'},
{time:'02:46',lyrics:'我是这耀眼的瞬间'},
{time:'02:49',lyrics:'是划过天边的刹那火焰'},
{time:'02:54',lyrics:'我为你来看我不顾一切'},
{time:'02:58',lyrics:'我将熄灭永不能再回来'},
{time:'03:03',lyrics:'我在这里啊'},
{time:'03:07',lyrics:'就在这里啊'},
{time:'03:14',lyrics:'惊鸿一般短暂'},
{time:'03:18',lyrics:'如夏花一样绚烂'},
{time:'03:22',lyrics:'我是这耀眼的瞬间'},
{time:'03:26',lyrics:'是划过天边的刹那火焰'},
{time:'03:30',lyrics:'我为你来看我不顾一切'},
{time:'03:35',lyrics:'我将熄灭永不能再回来'},
{time:'03:39',lyrics:'不虚此行呀'},
{time:'03:44',lyrics:'不虚此行呀'},
{time:'03:50',lyrics:'惊鸿一般短暂'},
{time:'03:54',lyrics:'开放在你眼前'},
{time:'03:59',lyrics:'我是这耀眼的瞬间'},
{time:'04:02',lyrics:'是划过天边的刹那火焰'},
{time:'04:07',lyrics:'我要你来爱我不顾一切'},
{time:'04:11',lyrics:'我将熄灭永不能再回来'},
{time:'04:16',lyrics:'一路春光啊'},
{time:'04:20',lyrics:'一路荆棘呀'},
{time:'04:26',lyrics:'惊鸿一般短暂'},
{time:'04:31',lyrics:'如夏花一样绚烂'},
{time:'04:35',lyrics:'这是一个不能停留太久的世界'}]}
	]
	//通过循环给播放列表添加li
	for(let i=0;i<songlist.length;i++){
		let li=document.createElement("li");
		li.innerHTML=`<span class="iconfont"></span>
						<span>${songlist[i].name}</span>
						<span>${songlist[i].author}</span>
						<span>${songlist[i].zjm}</span>
						<span class="iconfont icon-shanchu" id="del"></span>`;
						//将数组的对象中保存的属性赋值给li的内容
		li.id=songlist[i].id;//给每个新创建的Li添加id名，用来唯一标识这首歌
		if(i==0){
//			li.children[0].classList.add("icon-yinle");
			li.classList.add('active');
		}
		ullist.appendChild(li);
	}
	
	//获取audio和加载的进度条
	let audio=document.querySelector("audio");
	let sload=document.querySelectorAll("div.load")[0];
	//进度条加载完时才可以播放
	audio.oncanplay=function(){
		sload.style.width='100%';
	}
	
	
	
	//添加菜单的点击事件
	let menu=document.querySelector("div.menu > span");
	menu.onclick=function(){
		document.querySelector("div#list").classList.toggle("list");
		document.querySelector("div#lyric").classList.toggle("lyric");
	}
	
	
	//歌词
	let lyriclist=document.querySelector("div#lyric");
	let lyricul=lyriclist.querySelector('ul');
	
	for(let i=0;i<songlist[0].lyric.length;i++){
		songlist[0].lyric[i].id=`gc${i}`;
		let lyli=document.createElement("li");
		lyli.innerHTML=songlist[0].lyric[i].lyrics;
		lyli.id=songlist[0].lyric[i].id;
		lyricul.appendChild(lyli);
	}
	let lylis=lyricul.querySelectorAll("li");
	
	
	
	
	
	
	
	
	
	
	
	
	//定义一个全局变量，用于存储当前播放的是第几首
	let current=0;
	
	//2.从播放入手
	//获取播放键
	let playkey=document.querySelector("ul.function > li.play > span");
	
	//判断点击播放键时如果处于暂停状态，则播放，如果是播放状态，则暂停
	playkey.onclick=function(){
		if(audio.paused){
			audio.play();
			playkey.classList.remove("icon-bofang1");
			playkey.classList.add("icon-bofang");
			ullist.children[current].children[0].classList.add('icon-yinle');
		}else{
			audio.pause();
			playkey.classList.remove("icon-bofang");
			playkey.classList.add("icon-bofang1");
			ullist.children[current].children[0].classList.remove('icon-yinle')
		}
	}
	
	
	let tiaom=document.querySelector("div.tiaom");
	
	//3.对时间进行格式化处理
	function getTime(time){
		let m=parseInt(time/60)>=10?parseInt(time/60):'0'+parseInt(time/60);
		let s=parseInt(time)%60>=10?parseInt(time)%60:'0'+parseInt(time)%60;
		return m+':'+s;
	}
	
	
	let scircle,splayed;
	//当前的播放位置发生改变时触发该事件
	audio.ontimeupdate=function(){
		//对获取到的时间进行处理
		let nowtime=getTime(audio.currentTime);
		let alltime=getTime(audio.duration);
		//将时间赋值给进度条下面的对应的span
		document.querySelectorAll("div.time > span")[0].innerHTML=`${nowtime}`;
		document.querySelectorAll("div.time > span")[2].innerHTML=`${alltime}`;
		
				
		//获取到圆点和已播放的进度条
		scircle=document.querySelectorAll("div.circle")[0];
		splayed=document.querySelectorAll("div.played")[0];
		
		//改变圆点的位置和已播放的进度条的位置
		scircle.style.left=audio.currentTime/audio.duration*tiaom.offsetWidth-5+'px';
		splayed.style.width=audio.currentTime/audio.duration*tiaom.offsetWidth+'px';
		

		//歌词的改变
		songlist[current].lyric.forEach((value,index)=>{
			if(value.time==getTime(audio.currentTime)){
				let i=index;
				if(index<=5){
                   index=0;
               }else{
                   index=index-5;
                   i=i-index;
               }
             //重绘
            lyricul.innerHTML='';
            for(let j=index;j<songlist[current].lyric.length;j++){//注意j的起始位置
				// songlist[0].lyric[j].id=`gc${j}`;
				let lyli=document.createElement("li");
				lyli.innerHTML=songlist[current].lyric[j].lyrics;
				lyli.id=songlist[current].lyric[j].id;
				lyricul.appendChild(lyli);
			}
			lyricul.children[i].classList.add('active');


			}
		})

	
		
		
		
		
	}
	
	
	//4.给播放时歌的进度条添加点击事件(谷歌有问题)
	audio.oncanplaythrough=function(){
		tiaom.onclick=function(e){
			audio.currentTime=e.offsetX/tiaom.offsetWidth*audio.duration;
		}
	}

	
	//5.点击音量按钮
	let vicon=document.querySelector("div.vicon > span");

	//定义一个变量，用于保存当前音量
	let nowval=1;//
	vicon.onclick=function(){
		if(audio.volume){
			nowval=audio.volume;
			audio.volume=0;
			this.classList.remove('icon-yinliang');
			this.classList.add('icon-jingyin');
		}else{
			audio.volume=nowval;
			this.classList.remove('icon-jingyin');
			this.classList.add('icon-yinliang');
		}
	}
	
	//6.音量改变时的操作
	//获取音量条
	let vplayed=document.querySelectorAll("div.played")[1];
	let vcircle=document.querySelectorAll("div.circle")[1];
	let vtiao=document.querySelector("div.vtiao");
	
	//音量改变时触发该事件，由audio调用
	audio.onvolumechange=function(){
		vcircle.style.left=audio.volume/1*vtiao.offsetWidth-10+'px';
		vplayed.style.width=audio.volume/1*vtiao.offsetWidth+'px';
	}
	
	//7.音量点击
	vtiao.onclick=function(e){
		audio.volume=e.offsetX/vtiao.offsetWidth*1;
	}
	
	
	
	let sicon=document.querySelector("div.sicon >div.icon");
	
	//8.列表的双击事件
	ullist.ondblclick=function(e){
		let tg=e.target;
		let num;
		if(tg.nodeName=='SPAN'&&tg.id!='del'){//判断点击的是否为span标签
			//获取父元素的id值，与数据库中进行比较得到索引值
			num=songlist.findIndex(function(value){
					return value.id==tg.parentNode.id;
			})
			//重绘
			lyricul.innerHTML='';
			for(let i=0;i<songlist[current].lyric.length;i++){
				songlist[current].lyric[i].id=`gc${i}`;
				let lyli=document.createElement("li");
				lyli.innerHTML=songlist[current].lyric[i].lyrics;
				lyli.id=songlist[current].lyric[i].id;
				lyricul.appendChild(lyli);
			}
			current=num;
			if(current>songlist.length-1){
				current=0;
			}
			if(current<0){
				current=songlist.length-1;
			} 
			
			
			//换背景图
			document.body.style.backgroundImage=`url(${songlist[num].bigimg})`;
			//换小图
			sicon.style.backgroundImage=`url(${songlist[num].icon})`;
			//换歌的地址
			audio.src=`${songlist[num].src}`;
			//换作者的名字和歌名
			document.querySelectorAll("div.author > span")[0].innerHTML=`${songlist[num].name}`;
			document.querySelectorAll("div.author > span")[2].innerHTML=`${songlist[num].author}`;
			audio.play();//有问题。会闪一下nan才会播放（如何处理nan的问题）
	
	
			[...tg.parentNode.parentNode.children].forEach(function(value){
				value.classList.remove('active');
				value.children[0].classList.remove('icon-yinle')
			})
			tg.parentNode.children[0].classList.add('icon-yinle');
			tg.parentNode.classList.add('active');
			
			playkey.classList.remove("icon-bofang1");
			playkey.classList.add("icon-bofang");
		
		
		}else if(tg.id=='del'){//删除功能
			
			
			num=songlist.findIndex(function(value){
				return value.id==tg.parentNode.id;
			})
			if(num==current){//不删除当前播放的这行
				return;
			}
			ullist.removeChild(tg.parentNode);
			songlist.splice(num,1);
			if(num<current){//更新current
				current--;
			}
		}
		
	}
	
	//9.上一首
	let pre=document.querySelector("li.pre");
	pre.onclick=function(){
		current=current-1;
		if(current<0){
			current=songlist.length-1;
		}
		//换背景图
		document.body.style.backgroundImage=`url(${songlist[current].bigimg})`;
		//换小图
		sicon.style.backgroundImage=`url(${songlist[current].icon})`;
		//换歌的地址
		audio.src=`${songlist[current].src}`;
		//换作者的名字和歌名
		document.querySelectorAll("div.author > span")[0].innerHTML=`${songlist[current].name}`;
		document.querySelectorAll("div.author > span")[2].innerHTML=`${songlist[current].author}`;
		audio.play();//有问题。会闪一下nan才会播放（如何处理nan的问题）
		

		[...ullist.children].forEach(function(value){
			value.classList.remove('active');
			value.children[0].classList.remove('icon-yinle')
		})

		ullist.children[current].children[0].classList.add('icon-yinle');
		ullist.children[current].classList.add('active');
		
		playkey.classList.remove("icon-bofang1");
		playkey.classList.add("icon-bofang");
		
		
		}
	
	//10.下一首
	let next=document.querySelector("li.next");
	next.onclick=function(){
		current=current+1;
		if(current>songlist.length-1){
			current=0;
		}
		//换背景图
		document.body.style.backgroundImage=`url(${songlist[current].bigimg})`;
		//换小图
		sicon.style.backgroundImage=`url(${songlist[current].icon})`;
		//换歌的地址
		audio.src=`${songlist[current].src}`;
		//换作者的名字和歌名
		document.querySelectorAll("div.author > span")[0].innerHTML=`${songlist[current].name}`;
		document.querySelectorAll("div.author > span")[2].innerHTML=`${songlist[current].author}`;
		audio.play();//有问题。会闪一下nan才会播放（如何处理nan的问题）
		

		[...ullist.children].forEach(function(value){
			value.classList.remove('active');
			value.children[0].classList.remove('icon-yinle')
		})

		ullist.children[current].children[0].classList.add('icon-yinle');
		ullist.children[current].classList.add('active');
		
		playkey.classList.remove("icon-bofang1");
		playkey.classList.add("icon-bofang");
		
		
		}
		
		
		
	//11.一首歌放完直接放下一首
	audio.onended=function(){
		//next.onclick();
		current=current+1;
        if(current>songlist.length-1){
            current=0;
        }
		//换背景图
		document.body.style.backgroundImage=`url(${songlist[current].bigimg})`;
		//换小图
		sicon.style.backgroundImage=`url(${songlist[current].icon})`;
		//换歌的地址
		audio.src=`${songlist[current].src}`;
		//换作者的名字和歌名
		document.querySelectorAll("div.author > span")[0].innerHTML=`${songlist[current].name}`;
		document.querySelectorAll("div.author > span")[2].innerHTML=`${songlist[current].author}`;
		audio.play();//有问题。会闪一下nan才会播放（如何处理nan的问题）
		

		[...ullist.children].forEach(function(value){
			value.classList.remove('active');
			value.children[0].classList.remove('icon-yinle')
		})

		ullist.children[current].children[0].classList.add('icon-yinle');
		ullist.children[current].classList.add('active');
		
		playkey.classList.remove("icon-bofang1");
		playkey.classList.add("icon-bofang");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}//最外层的括号
