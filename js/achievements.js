// JavaScript Document
 

 var achievements = {
	 name: [],
	 title:[],
	 logo: [],
	 date: [],
	 bonus: [],
	 description:[],
	 unlocked: []
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
			achievements.title.push("Default");
			achievements.logo.push("img/bonus/backg.png");
			achievements.date.push("");
			achievements.bonus.push("img/backg.png");
			achievements.unlocked.push(false);
			achievements.description.push("");
		}
		
		achievements.description[0] = "Reach score above 30 in easy mode";
		achievements.description[1] = "Reach highscore exactly 300 in any mode";
		achievements.description[2] = "Reach highscore above 100 in Normal mode";
		
		localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, JSON.stringify(achievements));
	}

 
 function achievement_0_easy(index){
	  
	  // Get local storage
	  var achievementObject = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));
	 
	  // Fill the objects
      achievementObject.name[index] = "BANZAI! That was easy";
	  achievementObject.logo[index] = "img/bonus/banzai.png";
	  achievementObject.title[index] = "Musashi no Kimply"
	  var d = new Date();
	  var tanggal = d.toUTCString();
	  achievementObject.date[index] = tanggal;
	  achievementObject.bonus[index] = "img/banzai.png";
	  achievementObject.unlocked[index] = true;
	  
	  
	 // Store back to Local Storage
	  var total = JSON.stringify(achievementObject);
      localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, total);
	 
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  var data = {message: 'UNLOCKED ACHIEVEMENT: '+ achievementObject.name[index]};
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
	 
	 
	 
 }

 
 function achievement_1_sparta(index){
	  
	  // Get local storage
	  var achievementObject = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));
	 
	  // Fill the objects
      achievementObject.name[index] = "This is SPARTA";
	  achievementObject.logo[index] = "img/bonus/sparta.png";
	  achievementObject.title[index] = "King Spartaly"
	  var d = new Date();
	  var tanggal = d.toUTCString();
	  achievementObject.date[index] = tanggal;
	  achievementObject.bonus[index] = "img/sparta.png";
	  achievementObject.unlocked[index] = true;
	  
	  
	 // Store back to Local Storage
	  var total = JSON.stringify(achievementObject);
      localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, total);
	 
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  var data = {message: 'UNLOCKED ACHIEVEMENT: '+ achievementObject.name[index]};
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
	 
	 
	 
 }


function achievement_2_painter( index ){
	  // Get local storage
	  var achievementObject = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));
	 
	  // Fill the objects
      achievementObject.name[index] = "The Maestro";
	  achievementObject.logo[index] = "img/bonus/painter.png";
	  achievementObject.title[index] = "Monsieur Kimply"
	  var d = new Date();
	  var tanggal = d.toUTCString();
	  achievementObject.date[index] = tanggal;
	  achievementObject.bonus[index] = "img/maestro.png";
	  achievementObject.unlocked[index] = true;
	  
	  
	 // Store back to Local Storage
	  var total = JSON.stringify(achievementObject);
      localStorage.setItem(STORAGE_KEY_ACHIEVEMENTS, total);
	
	//Achievments notification
	
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  var data = {message: 'UNLOCKED ACHIEVEMENT: '+ achievementObject.name[index]} ;
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
	
	
	
}

function showAchievements(){
var achievements_id = document.getElementById("achievements");

var objectAch = JSON.parse(localStorage.getItem(STORAGE_KEY_ACHIEVEMENTS));

achievements_id.innerHTML = "<ul class='demo-list-three mdl-list'>" +calculate(objectAch) +"</ul> "
	
}

function calculate(object){
	var total = "";
	for(var i=0; i<= number_of_achievements;i++){
		total += "<li class='mdl-list__item mdl-list__item--three-line'>"+
					"<span class='mdl-list__item-primary-content'>"+
						  "<img id='achv1_img' src='" + object.logo[i] + "' class='material-icons mdl-list__item-avatar'>"+
						  "<!--<img class='icon' id='icon0' src='../content/icon/1.png' class='list-avatar' />-->"+
						  "<span><b>"+ object.name[i] +"</b></span>"+
						  "<span class='mdl-list__item-text-body'>"+
						  "<i>"+ object.description[i] +"</i><br>"+
						  "Achieved at : <font size='-2' id='achv1' color='red'>"+ object.date[i]+ "</font>"+
						  "</span>"+
						"</span>"+
					  "</li>"
					  } ; 
	return total
}

	



