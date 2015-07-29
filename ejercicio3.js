var miArray = new Array();
function spiderman(){
	if(i%5===0){
		miArray[i]="spiderman";
	}
}
function deadpool(){
	if(i%3===0&&i%5===0){
		miArray[i]="deadpool";
	}
}
function batman(){
	if(i%3===0){
		miArray[i]="batman";
	}
}
for (var i=0;i<101;i++){
	miArray[i]=i;
 
	spiderman();
	batman();
	deadpool();
}
if (miArray.length>100){
	miArray.shift();
	console.log(miArray);}
