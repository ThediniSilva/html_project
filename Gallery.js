// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images1 = ['wedding1.jpg', 'wedding2.jpg', 'wedding3.jpg', 'wedding4.jpg','wedding5.jpg','wedding6.jpg','wedding7.jpg','wedding8.jpg','wedding9.jpg','wedding10.jpg',];
var i = 0;

function prev(){
	if(i <= 0) i = images1.length;	
	i--;
	return setImg();			
}

function next(){
	if(i >= images1.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "Image/"+images1[i]);
	
}
//Slider 02
var slider2_img = document.querySelector('.slider2-img');
var images2 = ['conference1.jpg', 'conference2.jpg', 'conference3.jpg', 'conference4.jpg', 'conference5.jpg','conference6.jpg','conference7.jpg'];
var j = 0;

function prev1(){
	if(j <= 0) j = images2.length;	
	j--;
	return set2Img();			
}

function next1(){
	if(j >= images2.length-1) j = -1;
	j++;
	return set2Img();			 
}

function set2Img(){
	return slider2_img.setAttribute('src', "Image/"+images2[j]);
	
}
 //slider 03
var slider3_img = document.querySelector('.slider3-img');
var images3 = ['birthday1.jpg', 'birthday2.jpg', 'birthday3.jpg', 'birthday4.jpg', 'birthday6.jpg'];
var p = 0;

function prev2(){
	if(p <= 0) p = images3.length;	
	p--;
	return set3Img();			
}

function next2(){
	if(p >= images3.length-1) p = -1;
	p++;
	return set3Img();			 
}

function set3Img(){
	return slider3_img.setAttribute('src', "Image/"+images3[p]);
	
}
