$(function(){
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }

    Handlebars.registerHelper("adminStatus", function(phoneNumber){
       console.log("admin",phoneNumber)
        if (phoneNumber !=null||phoneNumber=="true")        
           return '<span class="badge badge-danger text-success">Completed</span>';
        else       
           return '<span class="badge badge-success text-warning">In Progress</span>';
    })
        //route page -  index.html
        var routeRoot = crossroads.addRoute('', function(){
            //redirect to home
            window.location.href = "#home";
        });
    
    var routeRoot = crossroads.addRoute('/home', function(){
        $(".navbar-collapse li a[href='#manage']").css('color', 'white');
        $(".navbar-collapse li a[href='#profile']").css('color', 'white');
        $(".navbar-collapse li a[href='#home']").css('color', 'green');
        $(".navbar-collapse li a[href='#bookings']").css('color', 'white');
        //redirect to home
		window.location.href = "#home";

        if(sessionStorage.getItem('Admin')=="true")
        {
        var homeTemplate = Handlebars.templates['homeAdmin'];
        var jsonDataArray=[];
        
        $.ajax({
            type: 'GET',
            url: 'https://jom-tapau-backend.onrender.com/user',
            dataType:"JSON",
            data: JSON.stringify(),
            success: function(data) {
  
           
                 jsonDataArray = [
                    ...data
                ];
               
                console.log(jsonDataArray);
                var renderedTemplate = homeTemplate({ "users": jsonDataArray });
                $('#divcontent').html(renderedTemplate).hide().fadeIn(1000);
            
            },
            error: function() {
              
            }
          });
        
         
       
        }
        else 
        var homeTemplate = Handlebars.templates['home'];
        $("#divcontent").empty();
        $("#divcontent").html(homeTemplate).hide().fadeIn(1000);
	});
    var routeRoot = crossroads.addRoute('/bookings', function(){
        $(".navbar-collapse li a[href='#manage']").css('color', 'white');
        $(".navbar-collapse li a[href='#profile']").css('color', 'white');
        $(".navbar-collapse li a[href='#home']").css('color', 'white');
        $(".navbar-collapse li a[href='#bookings']").css('color', 'green');
        //redirect to home
		
        var bookingTemplate = Handlebars.templates['booking'];
        $("#divcontent").empty();
        $("#divcontent").html(bookingTemplate).hide().fadeIn(1000);
	});
    var routeRoot = crossroads.addRoute('/profile', function(){
        $(".navbar-collapse li a[href='#manage']").css('color', 'white');
        $(".navbar-collapse li a[href='#profile']").css('color', 'green');
        $(".navbar-collapse li a[href='#home']").css('color', 'white');
        $(".navbar-collapse li a[href='#bookings']").css('color', 'white');
        //redirect to home
		
        var profileTemplate = Handlebars.templates['profile'];
        $("#divcontent").empty();
        $("#divcontent").html(profileTemplate).hide().fadeIn(1000);
	});
    var routeRoot = crossroads.addRoute('/manage', function(){
        $(".navbar-collapse li a[href='#manage']").css('color', 'green');
        $(".navbar-collapse li a[href='#profile']").css('color', 'white');
        $(".navbar-collapse li a[href='#home']").css('color', 'white');
        $(".navbar-collapse li a[href='#bookings']").css('color', 'white');
        //redirect to home
		

        if(sessionStorage.getItem('Admin')=="true")
        {
        var homeTemplate = Handlebars.templates['manage'];
        var jsonDataArray=[];
        
        $.ajax({
            type: 'GET',
            url: 'https://jom-tapau-backend.onrender.com/user',
            dataType:"JSON",
            data: JSON.stringify(),
            success: function(data) {
  
           
                 jsonDataArray = [
                    ...data
                ];
               
                console.log(jsonDataArray);
                var renderedTemplate = homeTemplate({ "users": jsonDataArray });
                $('#divcontent').html(renderedTemplate).hide().fadeIn(1000);
            
            },
            error: function() {
              
            }
          });
        
         
       
        }
        else 
        var homeTemplate = Handlebars.templates['manageUser'];
        $("#divcontent").empty();
        $("#divcontent").html(homeTemplate).hide().fadeIn(1000);
	});
    hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change
})