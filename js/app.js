$(function(){
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }

    Handlebars.registerHelper("adminStatus", function(status){
       console.log("admin",status)
        if (status !=null&&status=="Accepted")        
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


      

        
        // Function to decode (verify) a JWT token
function decodeToken(token) {
    const [encodedHeader, encodedPayload] = token.split('.');
    const header = JSON.parse(atob(encodedHeader));
    const payload = JSON.parse(atob(encodedPayload));
  
    return { header, payload };
  }
  
  // Retrieve the token from sessionStorage
  const token = sessionStorage.getItem('jwtToken');
  console.log('Token:', token);
  
  if (token) {
    try {
      // Decode the token
      const decodedToken = decodeToken(token);
      console.log('Decoded Token:', decodedToken);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  } else {
    console.log('Token not found in sessionStorage');
  }

  
  
  
  
  
  
  
    
  
    


     
        
        if(decodeToken(token).payload.role=="admin")
        {
        var homeTemplate = Handlebars.templates['homeAdmin'];
        var jsonDataArray=[];
        
        $.ajax({
            type: 'GET',
            url: 'https://futsal-server-site.onrender.com/api/v1/users/all-bookings',
            dataType:"JSON",
            data: JSON.stringify(),
            success: function(data) {
  
           
                 jsonDataArray = [
                    ...data.data
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
        $.ajax({
            type: 'GET',
            url: 'https://futsal-server-site.onrender.com/api/v1/users',
            dataType:"JSON",
            data: JSON.stringify(),
            success: function(data) {
                  var sessData= sessionStorage.getItem('username');
           data.data.forEach(function(user){

            if(sessData==user.userName)
            {
                jsonDataArray = [
                    user
                ];
            }
           })
                
               
                console.log(jsonDataArray);
                var renderedTemplate = profileTemplate({ "users": jsonDataArray });
                $('#divcontent').html(renderedTemplate).hide().fadeIn(1000);
            
            },
            error: function() {
              
            }
          });
		
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
		

        function decodeToken(token) {
            const [encodedHeader, encodedPayload] = token.split('.');
            const header = JSON.parse(atob(encodedHeader));
            const payload = JSON.parse(atob(encodedPayload));
          
            return { header, payload };
          }
          
          // Retrieve the token from sessionStorage
          const token = sessionStorage.getItem('jwtToken');
          console.log('Token:', token);
          
          if (token) {
            try {
              // Decode the token
              const decodedToken = decodeToken(token);
              console.log('Decoded Token:', decodedToken);
            } catch (error) {
              console.error('Error decoding token:', error);
            }
          } else {
            console.log('Token not found in sessionStorage');
          }
        
          
          
          



          if(decodeToken(token).payload.role=="admin")
        {
        var homeTemplate = Handlebars.templates['manage'];
        var jsonDataArray=[];
        
        $.ajax({
            type: 'GET',
            url: 'https://futsal-server-site.onrender.com/api/v1/users/all-bookings',
            dataType:"JSON",
            data: JSON.stringify(),
            success: function(data) {
  
           
                 jsonDataArray = [
                    ...data.data
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