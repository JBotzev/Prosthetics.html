
//PROFILE TAB
function mystory(){
	document.getElementById('mystory').style="display:block";
	document.getElementById('bt').style="display:none";
	document.getElementById('btgallery').style="display:none";
	document.getElementById('btfav').style="display:none";
	document.getElementById('btinc').style="display:none";
	document.getElementById('btset').style="display:none";
}
function home(){
	window.location.href = 'ProstheticBG.html';
}
function profile(){
	document.getElementById('bt').style="display:block;padding:10px";
	document.getElementById('btgallery').style="display:none";
	document.getElementById('btfav').style="display:none";
	document.getElementById('btinc').style="display:none";
	document.getElementById('btset').style="display:none";
}
function gallery(){
	document.getElementById('bt').style="display:none";
	document.getElementById('btgallery').style="display:block";
}
function favourites(){
	document.getElementById('bt').innerHTML='';
}
function incart(){
	
}
function settings(){
	
}
function logout(){
	window.location.href = 'login.html';
}
function infodiv(){
	document.getElementById('infodiv').style="visibility:visible;background-color:rgba('0,0,0,0.8');width: 100%;height: 20%;color:white;padding:0px";
}
function infodiva(){
	document.getElementById('infodiv').style="visibility:hidden;";
}
//PROSTHETICS TAB
function headx(){
	cleara();
	document.getElementById('avatar').src="head.png";
	document.getElementById('headinfo1').style="display:block";
	document.getElementById('headinfo2').style="display:block";
	document.getElementById('headinfo3').style="display:block";
	document.getElementById('headinfo4').style="display:block";
}
function larm(){
	cleara();
	document.getElementById('avatar').src="larm.png";
	document.getElementById('larminfo1').style="display:block";
	document.getElementById('larminfo2').style="display:block";
	document.getElementById('larminfo3').style="display:block";
	document.getElementById('larminfo4').style="display:block";
}
function mainb(){
	cleara();
	document.getElementById('avatar').src="mainb.png";
	document.getElementById('body1info1').style="display:block";
	document.getElementById('body1info2').style="display:block";
	document.getElementById('body1info3').style="display:block";
	document.getElementById('body1info4').style="display:block";
}
function rarm(){
	cleara();
	document.getElementById('avatar').src="rarm.png";
	document.getElementById('rarminfo1').style="display:block";
	document.getElementById('rarminfo2').style="display:block";
	document.getElementById('rarminfo3').style="display:block";
	document.getElementById('rarminfo4').style="display:block";
}
function lleg(){
	cleara();
	document.getElementById('avatar').src="lleg.png";
	document.getElementById('lleginfo1').style="display:block";
	document.getElementById('lleginfo2').style="display:block";
	document.getElementById('lleginfo3').style="display:block";
	document.getElementById('lleginfo4').style="display:block";
}
function rleg(){
	cleara();
	document.getElementById('avatar').src="rleg.png";
	document.getElementById('rleginfo1').style="display:block";
	document.getElementById('rleginfo2').style="display:block";
	document.getElementById('rleginfo3').style="display:block";
	document.getElementById('rleginfo4').style="display:block";
}
function cleara(){
	document.getElementById('none1').style="display:none";
	document.getElementById('none2').style="display:none";
	document.getElementById('none3').style="display:none";
	document.getElementById('none4').style="display:none";
}
function clearx(){
	document.getElementById('avatar').src="body.png";
	document.getElementById('headinfo1').style="display:none";
	document.getElementById('headinfo2').style="display:none";
	document.getElementById('headinfo3').style="display:none";
	document.getElementById('headinfo4').style="display:none";
	document.getElementById('larminfo1').style="display:none";
	document.getElementById('larminfo2').style="display:none";
	document.getElementById('larminfo3').style="display:none";
	document.getElementById('larminfo4').style="display:none";
	document.getElementById('body1info1').style="display:none";
	document.getElementById('body1info2').style="display:none";
	document.getElementById('body1info3').style="display:none";
	document.getElementById('body1info4').style="display:none";
	document.getElementById('rarminfo1').style="display:none";
	document.getElementById('rarminfo2').style="display:none";
	document.getElementById('rarminfo3').style="display:none";
	document.getElementById('rarminfo4').style="display:none";
	document.getElementById('lleginfo1').style="display:none";
	document.getElementById('lleginfo2').style="display:none";
	document.getElementById('lleginfo3').style="display:none";
	document.getElementById('lleginfo4').style="display:none";
	document.getElementById('rleginfo1').style="display:none";
	document.getElementById('rleginfo2').style="display:none";
	document.getElementById('rleginfo3').style="display:none";
	document.getElementById('rleginfo4').style="display:none";
	document.getElementById('none1').style="display:block";
	document.getElementById('none2').style="display:block";
	document.getElementById('none3').style="display:block";
	document.getElementById('none4').style="display:block";
}
function shop1(){
	document.getElementById('avatar').style.display="none";
	document.getElementById('avtable').style.display="none";
	document.getElementById('bodyinfo').style.display="none";
	document.getElementById('list1').style.display="table";
	document.getElementById('bg').style="margin-top:-50px";
	document.getElementById('back').style="display:block";
}
function shop2(){
	document.getElementById('avatar').style.display="none";
	document.getElementById('avtable').style.display="none";
	document.getElementById('bodyinfo').style.display="none";
	document.getElementById('list').style.display="table";
	document.getElementById('bg').style="margin-top:-50px";
	document.getElementById('back').style="display:block";
}
function shop3(){
	document.getElementById('avatar').style.display="none";
	document.getElementById('avtable').style.display="none";
	document.getElementById('bodyinfo').style.display="none";
	document.getElementById('list3').style.display="table";
	document.getElementById('bg').style="margin-top:-50px";
	document.getElementById('back').style="display:block";
}
function shop4(){
	document.getElementById('avatar').style.display="none";
	document.getElementById('avtable').style.display="none";
	document.getElementById('bodyinfo').style.display="none";
	document.getElementById('list2').style.display="table";
	document.getElementById('bg').style="margin-top:-50px";
	document.getElementById('back').style="display:block";
}
function shop5(){
	document.getElementById('avatar').style.display="none";
	document.getElementById('avtable').style.display="none";
	document.getElementById('bodyinfo').style.display="none";
	document.getElementById('list4').style.display="table";
	document.getElementById('bg').style="margin-top:-50px";
	document.getElementById('back').style="display:block";
}
function shop6(){
	document.getElementById('avatar').style.display="none";
	document.getElementById('avtable').style.display="none";
	document.getElementById('bodyinfo').style.display="none";
	document.getElementById('list5').style.display="table";
	document.getElementById('bg').style="margin-top:-50px";
	document.getElementById('back').style="display:block";
}

function back(){
	document.getElementById('avatar').style.display="block";
	document.getElementById('avtable').style.display="table";
	document.getElementById('bodyinfo').style.display="block";
	document.getElementById('list').style.display="none";
	document.getElementById('list1').style.display="none";
	document.getElementById('list2').style.display="none";
	document.getElementById('list3').style.display="none";
	document.getElementById('list4').style.display="none";
	document.getElementById('list5').style.display="none";
	document.getElementById('back').style="display:none";
	document.getElementById('bg').style="margin-top:-4px";
	window.scrollTo(0,0);
}
function scrollup(){
	window.scrollTo(0,0);
}
//DROPLIST TAB
function droplista(){
	document.getElementById('droplist').style="visibility:visible";
	
}
function droplistb(){
	document.getElementById('droplist').style="visibility:hidden;";
}
//PROFILE TAB
function profiletab(){
	document.getElementById('profiletab').style="visibility:visible"
}
function favourites(){
	document.getElementById('profiletab').style="visibility:hidden"
}
 
//LOG TAB
function log_in (){
    window.location.href = 'profile.html';
}
function btn_reg(){
	document.getElementById('logform').style="display:none"
	document.getElementById('regform').style="display:table"
}
function btn_reghome(){
	window.location.href = 'register.html';
}

//LOCATION TAB
function americaT(){
	document.getElementById('australiaT').style="display:none";
	document.getElementById('asiaT').style="display:none";
	document.getElementById('europeT').style="display:none";
	document.getElementById('africaT').style="display:none";
	document.getElementById('europeH').style="clear:both";
	document.getElementById('asiaH').style="clear:both";
	document.getElementById('africaH').style="clear:both";
	document.getElementById('australiaH').style="clear:both";
	document.getElementById('americaT').style="display:table";
	document.getElementById('americaH').style="border-top:solid 1px #808080;border-right:solid 1px #808080;border-left:solid 1px #808080;box-shadow:8px 6px 20px -1px black;border-bottom:none;"
	window.scrollTo(0,520);
}
function europeT(){
	document.getElementById('australiaT').style="display:none";
	document.getElementById('asiaT').style="display:none";
	document.getElementById('africaT').style="display:none";
	document.getElementById('americaT').style="display:none"
	document.getElementById('europeH').style="clear:both";
	document.getElementById('asiaH').style="clear:both";
	document.getElementById('africaH').style="clear:both";
	document.getElementById('australiaH').style="clear:both";
	document.getElementById('americaH').style="clear:both";
	document.getElementById('europeT').style="display:table"
	document.getElementById('europeH').style="border-top:solid 1px #808080;border-right:solid 1px #808080;border-left:solid 1px #808080;box-shadow:8px 6px 20px -1px black;border-bottom:none;"
	window.scrollTo(0,520);
}
function africaT(){
	document.getElementById('europeT').style="display:none";
	document.getElementById('australiaT').style="display:none";
	document.getElementById('asiaT').style="display:none";
	document.getElementById('americaT').style="display:none";
	document.getElementById('europeH').style="clear:both";
	document.getElementById('asiaH').style="clear:both";
	document.getElementById('australiaH').style="clear:both";
	document.getElementById('americaH').style="clear:both";
	document.getElementById('africaT').style="display:table"
	document.getElementById('africaH').style="border-top:solid 1px #808080;border-right:solid 1px #808080;border-left:solid 1px #808080;box-shadow:8px 6px 20px -1px black;border-bottom:none;"
	window.scrollTo(0,520);
}
function asiaT(){
	document.getElementById('europeT').style="display:none";
	document.getElementById('australiaT').style="display:none";
	document.getElementById('africaT').style="display:none";
	document.getElementById('americaT').style="display:none"
	document.getElementById('europeH').style="clear:both";
	document.getElementById('africaH').style="clear:both";
	document.getElementById('australiaH').style="clear:both";
	document.getElementById('americaH').style="clear:both";
	document.getElementById('asiaT').style="display:table"
	document.getElementById('asiaH').style="border-top:solid 1px #808080;border-right:solid 1px #808080;border-left:solid 1px #808080;box-shadow:8px 6px 20px -1px black;border-bottom:none;"
	window.scrollTo(0,520);
}
function australiaT(){
	document.getElementById('europeT').style="display:none";
	document.getElementById('asiaT').style="display:none";
	document.getElementById('africaT').style="display:none";
	document.getElementById('americaT').style="display:none"
	document.getElementById('europeH').style="clear:both";
	document.getElementById('asiaH').style="clear:both";
	document.getElementById('africaH').style="clear:both";
	document.getElementById('americaH').style="clear:both";
	document.getElementById('australiaT').style="display:table"
	document.getElementById('australiaH').style="border-top:solid 1px #808080;border-right:solid 1px #808080;border-left:solid 1px #808080;box-shadow:8px 6px 20px -1px black;border-bottom:none;"
	window.scrollTo(0,520);
}

function slideshow(){
	plusDivs(1);
	setTimeout(slideshow,4000);
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
  
}

var qs = new Querystring();
var v1 = qs.get("myVar1");

function hey(){
	alert();
}