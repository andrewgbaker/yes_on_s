	jQuery(document).ready(function($) {
    	
    	// Slide down on main nav
    	
    		$(".slide_down").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top - 80}, 500);
			});
			
						
			
			/* show go-to-top button on scroll */
    	 
	
			function fixTop() {
				 var windowTop = $(window).scrollTop();
				 var $topLink = $(".top");
				 var topLinkPos = $topLink.position();
				 var headerHeight = $("#top_section").height() + 20;
				 
				 if (windowTop >= headerHeight){
					 $topLink.addClass("top-fixed");		  
				 };
				 
				if (windowTop <= (headerHeight - 1)) {
					 $topLink.removeClass("top-fixed");
				 };	
			 
			 };
			 
			 $(window).scroll(function() {fixTop();
			 });
			 
			
			 
			 $(function()
				{
					// Call stylesheet init so that all stylesheet changing functions 
					// will work.
					$.stylesheetInit();
					
					// This code loops through the stylesheets when you click the link with 
					// an ID of "toggler" below.
					$('#toggler').bind(
						'click',
						function(e)
						{
							$.stylesheetToggle();
							return false;
						}
					);
					
					// When one of the styleswitch links is clicked then switch the stylesheet to
					// the one matching the value of that links rel attribute.
					$('.styleswitch').bind(
						'click',
						function(e)
						{
							$.stylesheetSwitch(this.getAttribute('rel'));
							return false;
						}
					);
				}
			);
			
				
    	});