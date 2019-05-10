$(document).ready(function (argument) {
	$(function(){
	    $('[data-toggle="tooltip"]').tooltip();
	    $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
	        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
	    });
	    $('.side-nav .collapse').on("show.bs.collapse", function() {                        
	        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
	    });
	});
	console.log('удача!');

	var container = $('#letter');
    

	function ChangeBorderStyle(option){
    	// option = changed <li>, color = li#id, selection by class 
    	var style = $(option).attr('id');
    	$(container).css('border-style', style);
    }


	function ChangeTextAlign(option){
    	var type = $(option).attr('id');
    	$(container).css('text-align', type);
    }


    function ChangeFontSize(option, checker){
		var size = $(option).val();
    	$(container).css('font-size', size + "px");
    	$(checker).html(size + ' px');
    }

    function ChangeFont(option){
    	var name = $(option).val();
    	$(container).css('font-family', name);
    }

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////EVENTS////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
    $('.bg-color-switcher').change(function(){
    	var red = $('#bg-red').val();
    	var green = $('#bg-green').val();
    	var blue = $('#bg-blue').val();

    	var rgb ='rgb('+ red + ',' + green + ',' + blue +')';
    	$(container).css('background-color', rgb);
    });

    $('.fn-color-switcher').change(function(){
    	var red = $('#fn-red').val();
    	var green = $('#fn-green').val();
    	var blue = $('#fn-blue').val();

    	var rgb ='rgb('+ red + ',' + green + ',' + blue +')';
    	$(container).css('color', rgb);
    });

	$('#bg-reset').click(function(){
    	$(container).css('background-color', 'white');
    });

	$('#fn-reset').click(function(){
    	$(container).css('color', 'black');
    });

	$('li.font-color').click(function(){
    	ChangeFontColor(this);
    });

    $('.align-type').change(function(){
    	ChangeTextAlign(this);
    });

    $('.border-type').change(function(){
    	ChangeBorderStyle(this);
    });
    

	$('#font').change(function(){
    	ChangeFont(this);
    });
	
	$('#font-size').change(function(){
    	ChangeFontSize(this, $('#size-value'));
    });

	$('.bor-color-switcher').change(function(){
    	var red = $('#bor-red').val();
    	var green = $('#bor-green').val();
    	var blue = $('#bor-blue').val();

    	var rgb ='rgb('+ red + ',' + green + ',' + blue +')';
    	$(container).css('border-color', rgb);
    });

	$('#bor-reset').click(function(){
    	$(container).css('border', 'none');
    });
    
   	$('#pad-top').change(function(){
    	var num = $(this).val();
    	$(container).css('padding-top', num + 'px');
    	$('#pad-top-val').html(num + ' px');
    });

	$('#pad-bottom').change(function(){
    	var num = $(this).val();
    	$(container).css('padding-bottom', num + 'px');
    	$('#pad-bottom-val').html(num + ' px');
    });

	$('#pad-left').change(function(){
    	var num = $(this).val();
    	$(container).css('padding-left', num + 'px');
    	$('#pad-left-val').html(num + ' px');
    });

	$('#pad-right').change(function(){
    	var num = $(this).val();
    	$(container).css('padding-right', num + 'px');
    	$('#pad-right-val').html(num + ' px');
    });

	$('#bor-rad').change(function(){
    	var num = $(this).val();
    	$(container).css('border-radius', num + 'px');
    	$('#bor-rad-val').html(num + ' px');
    });

	$('#bor-size').change(function(){
    	var num = $(this).val();
    	$(container).css('border-width', num + 'px');
    	$('#bor-size-val').html(num + ' px');
    });
	
});