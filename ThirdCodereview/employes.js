
	//i worked really hard to get this function to actually output anything
function render_employes(employes) {
	for (var i = 0; i < employes.length; i++) {
		console.log(employes[i]);
		var name = employes[i].name;
		var email = employes[i].email;
		var picture = employes[i].picture;

		var employee_container = '<div class="employee">';
		employee_container += '<img class="img-employes" src="' + picture + '" />';
		employee_container += '<p>' + name + '</p>';
		employee_container += '<p>' + email + '</p>';
		employee_container += '</div>';

		var employee_display = document.getElementById('employee');
		employee_display.innerHTML += employee_container;
	}
}
//here is the variablearray with the different Employees
var myemployes = [
	{
		"name" : "George", 
		"email" : "gerori.home@gmx.at",
		"picture":"http://www.pipeline.de/pipeline/showpics.php?id=12092500_l&rid=13"
	}, {
		"name" : "Alexa", 
		"email" : "makealexagreatagain@hotmail.com",
		"picture": "http://www.imgmodels.com/azure/remote/imgmodelsprod/models/md50000523/42fa0ac9-509d-4746-b099-75c09241c4b4_thumb.jpg" 
	}, {
		"name" : "Michael", 
		"email" : "michual@gmx.at",
		"picture": "http://cincinnatizoo.org/wp-content/uploads/2015/09/gladys-233x300.jpg"
	}, {
		"name" : "Johan", 
		"email" : "codereviewriter@gmx.at",
		"picture": "http://img1.nickiswift.com/img/uploads/2016/08/flotruthabout-780x438_rev1.jpg"
	}, {
		"name" : "Apecrot", 
		"email" : "ourslave@gmx.com",
		"picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Landtagsprojekt_Th%C3%BCringen_2016_Herbert_Wirkner_IMG_0015_LR10_by_Stepro.jpg/512px-Landtagsprojekt_Th%C3%BCringen_2016_Herbert_Wirkner_IMG_0015_LR10_by_Stepro.jpg"
	}
];

render_employes(myemployes);

//I want a rezise function but it doesnt function
/*function resizeWindow(){
	var width=window.innerWidth;
	var height=window.innerHeight;
	var txt="Window size:width="+width+", height=" + h;
document.getElementById("rezis").innerHTML=txt;*/