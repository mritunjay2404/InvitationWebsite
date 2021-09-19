$(window).on("load", function(){
  console.log("hi")
  });

  $(document).ready(function(){
    //nav toggle
    $(".hamburger-btn").click(function(){
      $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
      if($(window).width() < 768){
      $(".header .nav").slideToggle();
       }
    })
    // fixed header
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
      }else{
        $(".header").removeClass("fixed");
      }
    })
    // scroll it

      $.scrollIt({
        topOffset: -50
      });

  });


       function sendmail(){

  			var name = $('#name').val();
  			var email = $('#Email').val();
  			var guest = $('#guest').val();
        var message = $('#Message').val();

  			// var body = $('#body').val();

  			var Body='Name: '+name+'<br>Email: '+email+'<br>Number of Guest: '+guest+'<br>Message: '+message;
  			//console.log(name, phone, email, message);

  			Email.send({
          SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
  				To: 'bhadury.rahul@gmail.com',
  				From: "isldeep12@gmail.com",
  				Subject: "New Invitation from "+name,
  				Body: Body
  			}).then(
  				message =>{
  					//console.log (message);
  					if(message=='OK'){
  					alert('Your message has been send. Thank you ..');
  					}
  					else{
  						console.error (message);
  						alert('There is error at sending message. ')

  					}

  				}
  			);

  		}
