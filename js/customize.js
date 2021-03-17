$(document).ready(function(){
			  if($(".title-box").length > 0) {
				  var html = '<div class="waves waves--small" data-wave-small=""> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1900 47" xmlns:xlink="http://www.w3.org/1999/xlink"> <g fill="none" fill-rule="evenodd"> <path fill-rule="nonzero" d="M403.925926,32 C583.088889,32 1900,0 1900,0 L0,0 C0,0 163.540741,32 403.925926,32 Z" transform="translate(-250)"></path> <path fill-opacity="0.2" fill-rule="nonzero" d="M1342.66667,76 C1552.37037,76 1900,0.2 1900,0.2 L0,0.2 C0,0.2 896.518519,76 1342.66667,76 Z" transform="translate(0 -29)"></path> <path fill-opacity="0.2" fill-rule="nonzero" d="M1342.66667,76 C1552.37037,76 1900,0.2 1900,0.2 L0,0.2 C0,0.2 896.518519,76 1342.66667,76 Z" transform="translate(617 -29)"></path> </g> </svg> </div>';
				  $(".title-box").after(html);
			  }
			  
			  if($("#search-form").length > 0) {
				  $(".layout__footer").hide();
			  }
			});