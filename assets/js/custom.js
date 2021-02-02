(function($){'use strict';$('.mean-menu').meanmenu({meanScreenWidth:"991"});$(function(){$('body').addClass('loaded');});$('select').niceSelect();$(window).on('scroll',function(){if($(this).scrollTop()>150){$('.navbar-area').addClass("is-sticky");}
else{$('.navbar-area').removeClass("is-sticky");}});$('.hero-slider-wrap').owlCarousel({loop:true,margin:0,nav:true,mouseDrag:true,items:1,dots:false,autoHeight:true,autoplay:true,smartSpeed:800,autoplayHoverPause:true,navText:["<i class='bx bx-chevrons-left'></i>","<i class='bx bx-chevrons-right'></i>",],});$('.project-wrap').owlCarousel({loop:true,nav:true,autoplay:true,autoplayHoverPause:true,mouseDrag:true,margin:30,center:true,dots:false,smartSpeed:1500,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>",],responsive:{0:{items:1,},576:{items:2,},768:{items:2,},992:{items:3,},1200:{items:3,},1700:{items:4,}}});$(".burger-menu").on('click',function(){$('.sidebar-modal').toggleClass('active');});$(".sidebar-modal-close-btn").on('click',function(){$('.sidebar-modal').removeClass('active');});$('.client-wrap').owlCarousel({loop:true,margin:30,nav:false,mouseDrag:true,items:1,dots:false,autoHeight:true,autoplay:true,smartSpeed:1500,autoplayHoverPause:true,center:false,responsive:{0:{items:1,},576:{items:1,},768:{items:2,},992:{items:2,},1200:{items:2,}}});$('.client-wrap-two').owlCarousel({loop:true,margin:30,nav:false,mouseDrag:true,items:1,dots:false,autoHeight:true,autoplay:true,smartSpeed:1500,autoplayHoverPause:true,center:false,responsive:{0:{items:1,},576:{items:1,},768:{items:2,},1200:{items:1,},}});$('.odometer').appear(function(e){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber);});});$('#datetimepicker2').datepicker({weekStart:0,todayBtn:"linked",language:"es",orientation:"bottom auto",keyboardNavigation:false,autoclose:true});$(window).on('scroll',function(){var scrolled=$(window).scrollTop();if(scrolled>300)$('.go-top').addClass('active');if(scrolled<300)$('.go-top').removeClass('active');});$('.go-top').on('click',function(){$("html, body").animate({scrollTop:"0"},500);});$('.accordion').find('.accordion-title').on('click',function(){$(this).toggleClass('active');$(this).next().slideToggle('fast');$('.accordion-content').not($(this).next()).slideUp('fast');$('.accordion-title').not($(this)).removeClass('active');});function makeTimer(){var endTime=new Date("july  30, 2021 17:00:00 PDT");var endTime=(Date.parse(endTime))/1000;var now=new Date();var now=(Date.parse(now)/1000);var timeLeft=endTime-now;var days=Math.floor(timeLeft/86400);var hours=Math.floor((timeLeft-(days*86400))/3600);var minutes=Math.floor((timeLeft-(days*86400)-(hours*3600))/60);var seconds=Math.floor((timeLeft-(days*86400)-(hours*3600)-(minutes*60)));if(hours<"10"){hours="0"+hours;}
if(minutes<"10"){minutes="0"+minutes;}
if(seconds<"10"){seconds="0"+seconds;}
$("#days").html(days+"<span>Days</span>");$("#hours").html(hours+"<span>Hours</span>");$("#minutes").html(minutes+"<span>Minutes</span>");$("#seconds").html(seconds+"<span>Seconds</span>");}
setInterval(function(){makeTimer();},300);new WOW().init();$('.popup-youtube, .popup-vimeo').magnificPopup({disableOn:300,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false,});$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');$('.tab ul.tabs li').on('click',function(g){var tab=$(this).closest('.tab'),index=$(this).closest('li').index();tab.find('ul.tabs > li').removeClass('current');$(this).closest('li').addClass('current');tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq('+index+')').slideUp();tab.find('.tab_content').find('div.tabs_item:eq('+index+')').slideDown();g.preventDefault();});$(".newsletter-form").validator().on("submit",function(event){if(event.isDefaultPrevented()){formErrorSub();submitMSGSub(false,"Please enter your email correctly.");}else{event.preventDefault();}});function callbackFunction(resp){if(resp.result==="success"){formSuccessSub();}
else{formErrorSub();}}
function formSuccessSub(){$(".newsletter-form")[0].reset();submitMSGSub(true,"Thank you for subscribing!");setTimeout(function(){$("#validator-newsletter").addClass('hide');},4000)}
function formErrorSub(){$(".newsletter-form").addClass("animated shake");setTimeout(function(){$(".newsletter-form").removeClass("animated shake");},1000)}
function submitMSGSub(valid,msg){if(valid){var msgClasses="validation-success";}else{var msgClasses="validation-danger";}
$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);}
$(".newsletter-form").ajaxChimp({url:"https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",callback:callbackFunction});$('.input-counter').each(function(){var spinner=jQuery(this),input=spinner.find('input[type="text"]'),btnUp=spinner.find('.plus-btn'),btnDown=spinner.find('.minus-btn'),min=input.attr('min'),max=input.attr('max');btnUp.on('click',function(){var oldValue=parseFloat(input.val());if(oldValue>=max){var newVal=oldValue;}else{var newVal=oldValue+1;}
spinner.find("input").val(newVal);spinner.find("input").trigger("change");});btnDown.on('click',function(){var oldValue=parseFloat(input.val());if(oldValue<=min){var newVal=oldValue;}else{var newVal=oldValue-1;}
spinner.find("input").val(newVal);spinner.find("input").trigger("change");});});objectFitImages();jarallax(document.querySelectorAll('.jarallax'));jarallax(document.querySelectorAll('.jarallax-keep-img'),{keepImg:true,});})(jQuery);