

 v=document.getElementById("v") ; 
 c=document.getElementById("c") ; 
 btn=document.getElementById("btn") ; 
 pic=document.getElementById("pic") ; 
 btngray=document.getElementById("btngray") ; 

 h=(document.innerHeight)-10 ;
 w=(document.getElementById("camdiv").innerWidth)-10 ; 

btn.addEventListener("click",f) ; 
pic.addEventListener("click",create) ; 
//btngray.addEventListener("click",gray) ;

function f(){
	var o={video:true,
		audio:false} ; 
	navigator.mediaDevices.getUserMedia(o).then(gotCam).catch(failCam) ; 
	ctx=c.getContext("2d") ; 
	i=window.setInterval(draw,20);
}

function gotCam(x){
	 
	v.srcObject = x ; 
	v.play() ; 
}

function failCam(c){
	alert(c.message) ;
}

function draw(){ 
	ctx.drawImage(v,0,0,300,150) ; 

}
function create(){
	var para = document.createElement("img");
	var but = document.createElement("input");
	var but1 = document.createElement("input");
	//var node = document.createTextNode("This is new.");
	//	para.appendChild(node);

	para.width = 500 ;  
	para.height = 300 ; 
	para.src=c.toDataURL() ;

	//para.drawTo(can) ; 

	but.type = "button" ; 
	but.value = "Delete" ; 
	but.classList.add('btn') ; 
	but.classList.add('btn-danger') ;

	but1.type = "button" ; 
	but1.value = "Gray" ; 
	but1.classList.add('btn') ; 
	but1.classList.add('btn-success') ;

	but.addEventListener("click",function (){
		element.removeChild(para);
		element.removeChild(but);
		element.removeChild(but1);
	}) ; 



	var element = document.getElementById("picdiv");
            element.appendChild(para);
            element.appendChild(but) ; 
		//element.appendChild(but1) ; 
}
/*function gray(){
 	
	var imgPixels = ctx.getImageData(0, 0, 300, 150);
     
    for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
            var i = (y * 4) * imgPixels.width + x * 4;
            var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
            imgPixels.data[i] = avg; 
            imgPixels.data[i + 1] = avg; 
            imgPixels.data[i + 2] = avg;
        }
    }
    ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    
}*/