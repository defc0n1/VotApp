// set up the iron router
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// 'home' page
Router.route('/', function () {
  console.log("you hit / ");
  this.render("navbar", {to:"header"});
  this.render("docList", {to:"main"});  
});

Template.navbar.helpers({
  // rerrieve a list of documents
  my_interests:function(){
    return [{title:"politics"}, {title:"football"}, {title:"science"}, {title:"funny"}]; 	// user preferred interests
  }
})