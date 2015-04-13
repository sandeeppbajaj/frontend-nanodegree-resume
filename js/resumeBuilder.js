var skills = ['JavaScript','HTML5','CSS3','JAVA','jQuery','AngularJS',
              'REST','SOAP','WSO2','AKKA']
var bio = {
  name: 'Sandeep Bajaj',
  role: 'Full-Stack Developer',
  contacts: {
    mobile: '408-780-8231',
    email: 'sandeepbajaj0507@gmail.com',
    github: 'sandeeppbajaj',
    location: 'San Jose'
  } ,
  biopic:'images/fry.jpg',
  welcomeMessage:'Welcome to my resume',
  skills: skills
};
var education = {
  'schools':[
    {
      name: 'Konkan Gyanpeeth College of Engineering',
      city: 'Karjat',
      degree: 'Bachelors',
      majors: ['Computer Science'],
      dates: 2008,
      url: 'http://www.kgce.org/'
    },
    {
      name: 'Smt. Chandibai Himathmal Mansukhani College',
      city: 'Ulhasnagar',
      degree: 'High School',
      majors: ['Science'],
      dates: 2004,
      url: 'http://www.chm.edu/index.htm'
    }
  ],
  onlineCourses:[
    {
      title:'Front-End Web Developer Nanodegree',
      school:'Udacity',
      dates:2015,
      url:'https://www.udacity.com/course/nd001'
    },
    {
      title:'Journey Into Mobile',
      school:'CodeSchool',
      dates:2014,
      url:'https://www.codeschool.com/courses/journey-into-mobile'
    },
    {
      title:'Shaping up with AngularJS',
      school:'CodeSchool',
      dates:2014,
      url:'https://www.codeschool.com/courses/shaping-up-with-angular-js'
    },
    {
      title:'Statistics: Making Sense of Data',
      school:'Coursera',
      dates:2013,
      url:'https://www.coursera.org/course/introstats'
    }
  ]
};
var work = {
  jobs:[
    {
      employer:'Planet Express',
      title:'Delivery Boy',
      dates:'January 3000 - Future',
      description:'Who moved my cheese chessy feet cauliflower '+
        'cheese. Queso taleggio when the cheese comes out '+
        'everybody\'s happy airedale ricotta cheese and wine '+
        'paneer camembert de normandie. Swiss mozzarella cheese '+
        'slices feta fromage frais airedale swiss cheesecake. Hard '+
        'cheese blue castello halloumi parmesan say cheese skinking '+
        'bishop jarlsberg.'
    },
    {
      employer:'Panucci\'s Pizza',
      title:'Delivery Boy',
      dates:'1998 - December 31, 1999',
      description:'Who moved my cheese chessy feet cauliflower '+
        'cheese. Queso taleggio when the cheese comes out '+
        'everybody\'s happy airedale ricotta cheese and wine '+
        'paneer camembert de normandie. Swiss mozzarella cheese '+
        'slices feta fromage frais airedale swiss cheesecake. Hard '+
        'cheese blue castello halloumi parmesan say cheese skinking '+
        'bishop jarlsberg.'
    }
  ]
};
var projects = {
  projects:[
    {
      title: 'Sample Project 1',
      dates: '2014',
      description: 'Who moved my cheese chessy feet cauliflower '+
        'cheese. Queso taleggio when the cheese comes out '+
        'everybody\'s happy airedale ricotta cheese and wine '+
        'paneer camembert de normandie. Swiss mozzarella cheese '+
        'slices feta fromage frais airedale swiss cheesecake. Hard '+
        'cheese blue castello halloumi parmesan say cheese skinking '+
        'bishop jarlsberg.',
      images: [
        'https://placeimg.com/110/111/tech',
        'https://placeimg.com/111/111/tech'
      ]
    }
  ]
};

function displayNameAndRole(){
  //$('#main').append('Sandeep Bajaj');
  var formattedName = HTMLheaderName.replace('%data%','Sandeep Bajaj');
  var formattedRole = HTMLheaderRole.replace('%data%','Full-stack Developer');
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);
}

function displaySkills(){
  if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);
    for(var i in bio.skills){
      var formattedSkils = HTMLskills.replace('%data%',bio.skills[i]);
      $('#skills').append(formattedSkils);
    }
  }
}

function displayWork(){
  for(var job in work.jobs){
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer =  HTMLworkEmployer.replace
      ('%data%',work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
      ('%data%',work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $('.work-entry:last').append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace
      ('%data%',work.jobs[job].dates)
    $('.work-entry:last').append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace
      ('%data%',work.jobs[job].description);
      $('.work-entry:last').append(formattedDescription);
  }


  //$('#main').append(bio.name);
  //$('#main').append(bio.role);
}

projects.display = function(){
  for(var i in this.projects){
    $('#projects').append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace('%data%',this.projects[i].title);
    $('.project-entry:last').append(formattedProjectTitle);

    var formattedProjectDates = HTMLprojectDates.replace('%data%',this.projects[i].dates);
    $('.project-entry:last').append(formattedProjectDates);

    var formattedProjectDescription = HTMLprojectDescription.replace('%data%',this.projects[i].description);
    $('.project-entry:last').append(formattedProjectDescription);

    for(var m in this.projects[i].images){
      var formattedImage = HTMLprojectImage.replace('%data%',this.projects[i].images[m]);
      $('.project-entry:last').append(formattedImage);
    }

  }
};


$(document).click(function(loc){
    logClicks(loc.pageX,loc.pageY);
});


function inName(oldName){
  oldName = oldName || $('#name').html();
  var finalName = oldName ;
  finalName = oldName.slice(0,1).toUpperCase() +
              oldName.slice(1,oldName.indexOf(' ')+1).toLowerCase() +
              oldName.slice(oldName.indexOf(' ')+1).toUpperCase();
  return finalName;
}

var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
$('#header').append(formattedBioPic);
//$('#main').append(internationalizeButton);
displayWork();
displayNameAndRole();
displaySkills();
projects.display();
$('#mapDiv').append(googleMap);
