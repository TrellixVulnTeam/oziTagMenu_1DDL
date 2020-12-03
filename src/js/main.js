let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			


			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			 
			
			if(subMenu.classList.contains('open')){
				subMenu.classList.remove('open');
				thisArrow.classList.remove('active');
				
			} else{
				document.querySelectorAll('.sub-menu__list').forEach((child) => child.classList.remove('open'))
				subMenu.classList.add('open');
				thisArrow.classList.add('active');
			}
			let subArrow=document.querySelectorAll('.sub-arrow');
 for(a=0; a<subArrow.length; a++){
	 
	 let subSubMenu=subArrow[a].nextElementSibling;

	 subArrow[a].addEventListener('click', function(){
		 subSubMenu.classList.toggle('open');

	 });
 }
		});
	}
 
	
	
}else{
	body.classList.add('mouse');
}






let burger = document.querySelector('.header__burger')
burger.addEventListener('click', function(){
	burger.classList.toggle('activeBurger')
	document.querySelector('.menu__list').classList.toggle('activeMenu')
})
