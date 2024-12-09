console.log("madstory");

function write(){
console.log("write function is functional");

function refreshPage_OnClick(){}



var place = document.querySelector('input[name="place"]:checked').value;
console.log(place);

var adj = document.getElementById('adjective').value;
console.log(adj);

var noun = document.getElementById('noun').value;
console.log(noun);	

var weap = document.getElementById('weapon').value;
console.log(weap);

var adj2 = document.getElementById('object').value;
console.log(adj2);

var name =  document.getElementById('protagonist').value;
console.log(name);

var verb = document.getElementById('action').value;
console.log(verb);

var name2 = document.getElementById('protagonist2').value;
console.log(name2);

var quote = document.getElementById('quote').value;
console.log(quote);

var quote2 = document.getElementById('ziqiquote').value;
console.log(quote2);

var adj3 = document.getElementById('world').value;
console.log(adj3);

if (place=="forest"){
	document.getElementById('MadStory').style.backgroundImage = "url(images/magicalforest.jpg)";
}

else if (place == "heaven") {
	document.getElementById('MadStory').style.backgroundImage = "url(images/heaven.jpeg)";
}

else if (place == "demon") {
	document.getElementById('MadStory').style.backgroundImage = "url(images/demon.jpg)";
}
else if (place == "magical") {
	document.getElementById('MadStory').style.backgroundImage = "url(images/magicalland.jpg)";
}



//Story output
document.getElementById("output").style.display = 'block';

document.getElementById('output').innerHTML = "<font size='4px'><b><u>Here is your Love Game in Eastern Fantasy Story!</u></b></font><br><br>In a mystical land filled with glowing landscapes and ancient magic, Ziqi, the <font color='#0cbff5'><b><u>"+adj+"</u></b></font> demon hunter, embarked on a quest to find the black lotus crystal <font color='#0cbff5'><b><u>"+noun+"</u></b></font> that could save the realm. Armed with only his <font color='#0cbff5'><b><u>"+weap+"</u></b></font> and a heart full of determination, Ziqi traveled through the <font color='#0cbff5'><b><u>"+adj2+"</u></b></font> forests and across the snow-capped mountains.<br><br>One day, while resting by a crystal lake, Ziqi encountered a mysterious figure. The figure was an elegant warrior named <font color='#0cbff5'><b><u>"+name+"</u></b></font>, known for her skills in <font color='#0cbff5'><b><u>"+verb+"</u></b></font> and her ability to summon storms with ease. Despite the growing tension between them, Ziqi couldn't help but feel a magnetic attraction to this stranger.<br><br>As the two journeyed together, battling shadow beasts and facing dangerous foes, Ziqi began to notice the spark of something deeper between them. One night, under the light of a silver moon, <font color='#0cbff5'><b><u>"+name2+"</u></b></font> confessed her feelings, saying, <font color='#0cbff5'><b><u>"+quote+"</u></b></font>.<br><br>Ziqi, heart racing, replied, <font color='#0cbff5'><b><u>"+quote2+"</u></b></font>, before taking the courageous step toward a future filled with love and adventure. But would their love survive the trials of the <font color='#0cbff5'><b><u>"+adj3+"</u></b></font> world they lived in? Only time would tell."

}


function validateForm() {
	var adj1 = document.forms["myForm"]["adj1"].value;
	var noun = document.forms["myForm"]["noun"].value;
	var weapon = document.forms["myForm"]["weapon"].value;
	var adj2 = document.forms["myForm"]["adj2"].value;
	var nameFemale1 = document.forms["myForm"]["nameFemale1"].value;
	var animal = document.forms["myForm"]["animal"].value;
	var nameFemale2 = document.forms["myForm"]["nameFemale2"].value;
	var quoteFemale = document.forms["myForm"]["quoteFemale"].value;
	var quoteMale = document.forms["myForm"]["quoteMale"].value;
	var adj3 = document.forms["myForm"]["adj3"].value;
	var place = document.forms["myForm"]["place"].value;
	if (adj1 == "" || adj1 == null || noun == "" || noun == null || weapon == "" || weapon == null || adj2 == "" || adj2 == null || nameFemale1 == "" || nameFemale1 == null || animal == "" || animal == null || nameFemale2 == "" || nameFemale2 == null || quoteFemale == "" || quoteFemale == null || quoteMale == "" || quoteMale == null || adj3 == "" || adj3 == null || place == "" || place == null) {
	  alert("All Input Fields & Radio Button must be filled out!");
	  return false;
	} else {

			document.getElementById("column1").classList.remove('col-sm-12');
		
			document.getElementById("column1").classList.add('col-sm-6');
		  
	}
  }


// function myFunction() {
// 	document.getElementById("column1").classList.remove('col-sm-12');

// 	document.getElementById("column1").classList.add('col-sm-6');
//   }