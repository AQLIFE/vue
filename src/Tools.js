
//更新时间
window.onload=function(){
	// console.log('JS 已加载');
	let ObjTime = [
		document.getElementById('uptm'),
		document.getElementById('time')
	]
	if( ObjTime[0] )ObjTime[0].innerText = '2022/01/21'
	setInterval( ()=>{
		if( ObjTime[1] )
			ObjTime[1].innerText= '  '+Date();
	},1000);
}

$(
	()=>{
		$('a.nav-link').on('click',function(){
			if( $(this).hasClass('active')==false ){
				$('a.nav-link').parent().siblings().children('a.nav-link').removeClass('active')
				$(this).addClass('active')
			}
		})
		$('*').hover(function(){
			$(this).toggleClass('shadow-sm')
		})
		// console.log('JQ 已加载')
	}
)

