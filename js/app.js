$(function(){
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }

    var routeRoot = crossroads.addRoute('/home', function(){
        $(".navbar-collapse li a[href='#manage']").css('color', 'white');
        $(".navbar-collapse li a[href='#profile']").css('color', 'white');
        $(".navbar-collapse li a[href='#home']").css('color', 'green');
        $(".navbar-collapse li a[href='#bookings']").css('color', 'white');
        //redirect to home
		window.location.href = "#home";
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
        //redirect to home
        $(".navbar-collapse li").removeClass('active');

        $(".navbar-collapse li a[href='#manage']").css('color', 'green');
        $(".navbar-collapse li a[href='#profile']").css('color', 'white');
        $(".navbar-collapse li a[href='#home']").css('color', 'white');
        $(".navbar-collapse li a[href='#bookings']").css('color', 'white');
        var manageTemplate = Handlebars.templates['manage'];
        $("#divcontent").empty();
        $("#divcontent").html(manageTemplate).hide().fadeIn(1000);
	});
    hasher.initialized.add(parseHash); //parse initial hash
	hasher.changed.add(parseHash); //parse hash changes
	hasher.init(); //start listening for history change
})