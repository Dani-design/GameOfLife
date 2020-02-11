function gid(pid) {
	return document.getElementById(pid);
}

function clog(pout){
  console.log(pout);
}

function create(){
currentStatus=new Array(32);
nextStatus=new Array (32);
for(var o=0; o<32;o++){
//  console.log("start")
  currentStatus[o]=new Array(32);
  nextStatus[o] = new Array (32);
  for (var p=0;p<32;p++){
    currentStatus[o][p]=false;
//    console.log(currentStatus[o][p]);
  }
}

  		var myTableObj=gid("table1");
  		var numberOfRows=myTableObj.rows.length;
      for (var j=0;j<32;j++){
  		var newRow=myTableObj.insertRow(j);
  		for(var i=0;i<32;i++) {
  		 newCell=newRow.insertCell(i);
       newCell.style.border="thin solid black";
  		newCell.style.width="15px";
      newCell.style.height="15px";
  		newCell.id = i+"-"+j;
     isAlive =false;
newCell.onclick=isAlive=true;
newCell.onclick = function() {Aliveornot(this)};
      }
    }
  	}

function  Aliveornot(obj){
  console.log(obj.id);
  var CellId = obj.id.split("-");
  var x= CellId[0];
  var y=CellId[1];
//  isAlive=true;
if(isAlive==true){
		console.log(obj.id);
    obj.style.backgroundColor="black";
    currentStatus[x][y]=true;
    }
    else {obj.style.background="yellow";
currentStatus[x][y]=false;}
  //  console.log(CellId);
   console.log(currentStatus[x][y]);
  }

  function check() {
  for (var s=1;s<31;s++){
    for (var m=1;m<31;m++){
    //  console.log(currentStatus[s][m]);
      var count=0;
  var Cell=currentStatus[s][m];
//  if (m==0 || s==0) {currentStatus[s][m]=false;continue;}
//  else{
   if (currentStatus[s][m-1]==true)
   count ++;
   if (currentStatus[s][m+1]==true)
   count++;
   if (currentStatus[s-1][m-1]==true)
   count++;
   if(currentStatus[s-1][m]==true)
   count++;
   if(currentStatus[s-1][m+1]==true)
   count++;
   if(currentStatus[s+1][m-1]==true)
   count++;
   if(currentStatus[s+1][m]==true)
   count++;
   if (currentStatus[s+1][m+1]==true)
   count++;
   if ( currentStatus==true) {
     if (count==2 || count==3) {
       Cell =true;
     }else Cell=false;
    }
     else { if(count==3) Cell=true; else Cell= false;
     }

   if (Cell==true){
    nextStatus[s][m]=true;
      console.log("hey"+nextStatus[s][m]);}
    else nextStatus[s][m]=false;
}
}
}
//}
function nextone (){
  for (var k=0;k<32;k++)
  {
    for (var l=0;l<6;l++){
      if (nextStatus[k][l]==true){
        var a=k.toString();
       a=a.concat("-",l);
       var alive=document.getElementById(a);
       alive.style.background="black";
  //  isAlive=true;
    currentStatus[k][l]=nextStatus[k][l];
  }
    else {
     var a=k.toString();
    a=a.concat("-",l);
//isAlive=false;
  var dead=document.getElementById(a);
  dead.style.background="yellow";
  currentStatus[k][l]=nextStatus[k][l];

//console.log(Aliveornot());

  }
  }
}
}
