/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var bio = {
 	"name" : "Joe Stubbs",
 	"role" : "Javascript developer",
 	"contacts" : {
 		"mobile" : "123-123-1234",
 		"email" : "joe@here.com",
 		"github" : "fastkite",
 		"twitter" : "@notme",
 		"location" : "Toronto, Ontario, Canada" 	
 	},
 	"welcomeMessage" : "This is a welcome message",
 	"skills" : ["great","amazing","awake"],
 	"bioPic" : "images/fry.jpg"
 }


bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);;
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);


	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts,#footerContacts").append(formattedMobile);
 


	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts,#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts,#footerContacts").append(formattedGithub);


	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts,#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts,#footerContacts").append(formattedLocation);

	$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));


	if (bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill) 
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill) 
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill) 
		formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill) 

	}
}





var work = {
	"jobs":[
	{
		"employer":"IBM",
		"title":"Mail Room Operator",
		"dates":"January 2003 - Present",
		"description":"This is what I did there",
		"location":"Burlington, Ontario, Canada"
	},
	{
		"employer":"HP",
		"title":"Mail Room Floor Cleaner",
		"dates":"January 1995 - 2003",
		"description":"This is what I did there",
		"location":"Brampton, Ontario, Canada"
	}
	]
}


work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkEmployer.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);		
	}
}


var education = {
	"schools":[
	{
		"name":"Univeristy of Toronto",
		"city":"Toronto",
		"degree":"Masters",
		"majors":["CS"],
		"dates":2013,
		"url":"https://example.com",
		"location":"Toronto, Ontario, Canada"
	},
	{
		"name":"Univeristy of Brampton",
		"city":"Brampton",
		"degree":"BA",
		"majors":["CS"],
		"dates":2003,
		"url":"https://example.com",
		"location":"Brampton, Ontario, Canada"
	}],
	"onlineCourses":[
	{
		"title":"Machine Learning Nanodegree",
		"school":"Udacity",
		"dates":2016,
		"url":"http://udacity.com"
	},
	{
		"title":"Front End Web Nanodegree",
		"school":"Udacity",
		"dates":2016,
		"url":"http://udacity.com"
	}
	]
}


education.display = function () {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("#",education.schools[school].url).replace("%data%",education.schools[school].name) + HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName);

		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].city));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]));			
			}
		}
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedCourseName = HTMLonlineTitle.replace("#",education.onlineCourses[course].url).replace("%data%",education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedCourseName);

		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates));

		var formattedCourseUrl = HTMLonlineURL.replace("#",education.onlineCourses[course].url).replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedCourseUrl);
		
	}
}



var projects = {
	"projects":[
	{
		"title":"Sample Project 1",
		"dates":"2014",
		"description":"This is a project description",
		"images":["images/197x148.gif","images/197x148.gif"]
	},
	{
		"title":"Sample Project 2",
		"dates":"2015",
		"description":"This is a project description",
		"images":["images/197x148.gif","images/197x148.gif"]
	}
	]
}


projects.display = function () {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);				
			}
		}
	}
}






bio.display ();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$('#main').append(internationalizeButton);

