var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
if(i==1){
  document.getElementById("family_member_name").innerHTML=names[0];
  document.getElementById("family_member_image").src=images[0];
}
if(i==2){
  document.getElementById("family_member_name").innerHTML=names[1];
  document.getElementById("family_member_image").src=images[1];
}
if(i==3){
  document.getElementById("family_member_name").innerHTML=names[2];
  document.getElementById("family_member_image").src = images[2];
}
if(i==4){
  document.getElementById("family_member_name").innerHTML=names[3];
  document.getElementById("family_member_image").src = images[3];
}
if(i==5){
  document.getElementById("family_member_name").innerHTML=names[4];
  document.getElementById("family_member_image").src = images[4];

}   
if(i==6){
  document.getElementById("family_member_name").innerHTML=names[5];
  document.getElementById("family_member_image").src = images[5];
  i=0;
}   
 
    
}
