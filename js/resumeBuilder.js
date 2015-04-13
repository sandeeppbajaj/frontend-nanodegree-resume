var skills = ['JavaScript','HTML5','CSS3','JAVA','jQuery','AngularJS',
              'REST','SOAP','WSO2','AKKA']
var bio = {
  name: 'Sandeep Bajaj',
  role: 'Full-Stack Developer',
  contacts: {
    mobile: '408-784-6174',
    email: 'sandeepp.bajaj@gmail.com',
    github: 'sandeeppbajaj',
    location: 'San Jose, CA'
  } ,
  biopic:'images/fry.jpg',
  welcomeMessage:'Welcome to my sample resume',
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


work.display = function(){
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

bio.display = function(){
  //Display Name & Role
  var formattedName = HTMLheaderName.replace('%data%','Sandeep Bajaj');
  var formattedRole = HTMLheaderRole.replace('%data%','Full-stack Developer');
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

  //Display Contacts
  for(var contact in bio.contacts){
    var formattedContactItem = HTMLcontactGeneric.replace('%data%',bio.contacts[contact])
                                                 .replace('%contact%',contact);
    $('#topContacts').append(formattedContactItem);
    $('#footerContacts').append(formattedContactItem);
  }

  //Display Bio Pic
  var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
  $('#header').append(formattedBioPic);

  //Display Welcome Message
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
  $('#header').append(formattedWelcomeMessage);

  //Display Skills
  if(bio.skills.length > 0){
    $('#header').append(HTMLskillsStart);
    for(var i in bio.skills){
      var formattedSkils = HTMLskills.replace('%data%',bio.skills[i]);
      $('#skills').append(formattedSkils);
    }
  }
};

bio.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);
