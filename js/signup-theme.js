$(function () {
	$("#CI_subscribeForm").validate({
		rules: {
			CI_email:{email:true},
			CI_custom7: {
		        required: function(element) {
		          	return $("#othersel").is(":selected");
		        }
		    }
		},
		validClass: "success",
		errorClass: "error",
		errorElement:"em",
		submitHandler: function( form ) { form.submit(); /*console.log($("#CI_custom7").val())*/ },
		success: function(label, element){
			// console.log( "test2: ", label, element );
			var _this = $(element).parent();
			if( $(_this).hasClass("has-error") ){
				$(_this).removeClass("has-error").addClass("has-success");
				$(_this).find("span.glyphicon").removeClass("glyphicon-remove").addClass("glyphicon-ok");
				$(_this).find("span.sr-only").attr("id", "inputSuccess2Status").text("(success)");
			}	
		},
		invalidHandler: function(event, validator){
			// console.log("test:", validator, event, validator.invalid);
			$.each( validator.invalid, function( key, value ) {
				// console.log( key + ": " + value );
				var _this = $("#"+key).parent();
				$(_this).addClass("has-success");
				$(_this).addClass("has-error has-feedback");
				$(_this).find(".form-control-feedback").css("display","block");
			});
		}
	});
	// console.log(window.location.search);
	var workWithThisFormIfExist = $("form[method='get']").length,
		workWithThisFormIfExist2 = $("form[method='post']").length;

	// Populates email field from link
	if(workWithThisFormIfExist){
		var url = window.location.search,
			tmp = url.substring(url.indexOf('email=')+6, url.length);
		// console.log(url.indexOf('email='));
		if ( url.indexOf('email=') !== -1 ){
			// console.log(1);
			$("#CI_email").val(tmp);
			$("#CI_custom2").change( function(){
				// console.log($(this).val());
				if( $(this).val() === "Other" ){
					$(".form-group.hide").removeClass("hide");
				} else {
					$('#CI_custom7').parent().addClass("hide")
				}
			} )
		}
	}
	
	// Tracking link source
	if(workWithThisFormIfExist2){
		var url = window.location.search,
			tmp = url.substring(url.indexOf('source=')+7, url.length);
		// console.log(url.indexOf('email='));
		if ( url.indexOf('source=') !== -1 ){
			// console.log(1);
			$("#CI_custom5").val(tmp);
		}
		$("#CI_custom2").change( function(){
			// console.log($(this).val());
			if( $(this).val() === "Other" ){
				$(".form-group.hide").removeClass("hide");
			} else {
				$('#CI_custom7').parent().addClass("hide")
			}
		} )
	}
		
});
