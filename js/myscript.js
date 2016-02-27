//This file contains the javascript code for portfolio_data

// variables for all of the templates
var pfgridrow_template, pfmodal_template, certf_template;

// helper functions that instantiates a template
// and displays the results in the content div
function showTemplate1(template, data) {
	var html = template(data);
	$('#pfgridrow').html(html);
}

function showTemplate2(template, data) {
	var html = template(data);
	$('#portfolioModal0').html(html);
}

function showTemplate3(template, data) {
	var html = template(data);
	$('#mycarousel').html(html);
}
// /helper functions

$(document).ready(function () {
    
	// compile all the templates ready for use
	var source = $("#pfgridrow-template").html();
    pfgridrow_template = Handlebars.compile(source);
    
    source = $("#pfmodal-template").html();
    pfmodal_template = Handlebars.compile(source);
    
    source = $("#certf-template").html();
    certf_template = Handlebars.compile(source);
    // /compile templates
    
    // callhelper funtion to display template
    showTemplate1(pfgridrow_template, portfolio_data);
    
    showTemplate2(pfmodal_template, portfolio_data);
    
    showTemplate3(certf_template, portfolio_data);
    // /callhelper to display template
    
    // code for carousel control
    $("#mycarousel").carousel({ interval: 4000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
    // /carousel
});