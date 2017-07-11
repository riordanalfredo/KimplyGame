// JavaScript Document
 

 var achievements = {
	 name: [],
	 logo: [],
	 date: [],
	 bonus: [],
 }
 
 var number_of_achievements = 2;
 
 var STORAGE_KEY_ACHIEVEMENTS = "achievements";

var checkExist = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));
if (checkExist){
	console.log("all good")
}
else
	{
		for(var x = 0; x <= number_of_achievements; x++){
			achievements.name.push("LOCKED");
			achievements.logo.push("img/backg.png");
			achievements.date.push("");
			achievements.bonus.push("img/backg.png")
		}
		localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(achievements));
	}




 
 function achievement_1_sparta(){
	  
	  var index = 0
	  // Get local storage
	  var achievementObject = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));
	 
	  // Fill the objects
      achievementObject.name[index] = "This is SPARTA";
	  achievementObject.logo[index] = "img/bonus/sparta.png";
	  var d = new Date();
	  var tanggal = d.toUTCString();
	  achievementObject.date[index] = tanggal;
	  achievementObject.bonus[index] = "img/sparta.png";
	  
	 // Store back to Local Storage
	  var total = JSON.stringify(achievementObject);
      localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, total);
	 
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  var data = {message: 'UNLOCKED ACHIEVEMENT: '+ achievementObject.name[index]};
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
	 
	 
	 
 }


function achievement_2_painter(){
	   var index = 1;
	  // Get local storage
	  var achievementObject = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));
	 
	  // Fill the objects
      achievementObject.name[index] = "The Maestro";
	  achievementObject.logo[index] = "img/bonus/painter.png";
	  var d = new Date();
	  var tanggal = d.toUTCString();
	  achievementObject.date[index] = tanggal;
	  achievementObject.bonus[index] = "img/maestro.png";
	  
	 // Store back to Local Storage
	  var total = JSON.stringify(achievementObject);
      localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, total);
	
	//Achievments notification
	
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  var data = {message: 'UNLOCKED ACHIEVEMENT: '+ achievementObject.name[index]} ;
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
	
	
	
}

var achievements_id = document.getElementById("achievements");

var objectAch = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));

achievements_id.innerHTML = "<ul class='demo-list-three mdl-list'>"+
					  "<li class='mdl-list__item mdl-list__item--three-line'>"+
						"<span class='mdl-list__item-primary-content'>"+
						  "<img id='achv1_img' src='" + objectAch.logo[0] + "' class='material-icons mdl-list__item-avatar'>"+
						  "<!--<img class='icon' id='icon0' src='../content/icon/1.png' class='list-avatar' />-->"+
						  "<span><b>"+ objectAch.name[0] +"</b></span>"+
						  "<span class='mdl-list__item-text-body'>"+
						  "<i>Reach highscore exactly 300 in any mode </i><br>"+
						  "Achieved at : <font size='-2' id='achv1' color='red'>"+ objectAch.date[0]+ "</font>"+
						  "</span>"+
						"</span>"+
					  "</li>"+
	
					  "<li class='mdl-list__item mdl-list__item--three-line'>"+
						"<span class='mdl-list__item-primary-content'>"+
						  "<img id='achv1_img' src='" + objectAch.logo[1] + "' class='material-icons mdl-list__item-avatar'>"+
						  "<!--<img class='icon' id='icon0' src='../content/icon/1.png' class='list-avatar' />-->"+
						  "<span><b>"+ objectAch.name[1] +"</b></span>"+
						  "<span class='mdl-list__item-text-body'>"+
						  "<i>Reach highscore above 100 in Normal mode </i><br>"+
						  "Achieved at : <font size='-2' id='achv1' color='red'>"+ objectAch.date[1]+ "</font>"+
						  "</span>"+
						"</span>"+
					  "</li>"+
	
			
			 "</ul> "
	
	



