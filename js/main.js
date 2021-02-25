(function(postDate,scrollSmooth,banner,factorsBtn,stepsBtn,slider,videoVisibility){'use strict';function showItem(itemId){var itemsCollection=$('.steps .info__item');itemsCollection.removeClass('visible'),$(itemsCollection[itemId-1]).addClass('visible');}function main(){scrollSmooth(),banner(),factorsBtn(),stepsBtn(),slider(),videoVisibility(),promo();}let promo=function(){function randomInteger(min,max){let rand=min+Math.random()*(max+1-min);return Math.floor(rand);}let people=$('.online-people'),sold=$('.online-sold'),dynamic=$('.online-dynamic');let counter=1;setInterval(function(){counter===1?(people.fadeIn(),sold.fadeOut(),counter=0):(people.fadeOut(),sold.fadeIn(),counter=1);},3500),setInterval(function(){setTimeout(function(){dynamic.html(randomInteger(27,47));},3500);},7000);};scrollSmooth=function(){$(document).on('click','a[href^="#"]',function(event){event.preventDefault(),$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top},1500);});},banner=function(){function hideBannerScroll(){var e=$('.banner'),t=$('.main-banner'),i=$(window).scrollTop(),o=i+$(window).height(),r=$(window).width();var n=0;for(var _e=0;_e<arguments.length;_e++)$(arguments[_e]).each(function(e,t){var a=$(t).offset().top,c=a+$(t).outerHeight(),s=$(t).offset().left,l=s+$(t).width();a<=o&&c>=i&&s<=r&&l>=0&&(n+=1);});i<=100||n>0?e.fadeOut():e.fadeIn().css({bottom:t.outerHeight()});}$(window).on('scroll resize',function(){hideBannerScroll('.x_order_form','.footer','.promo--top');});let bannerCross=document.querySelector('.banner__cross');bannerCross.addEventListener('click',function(){$('.banner').addClass('banner--unshown');});},factorsBtn=function(){$('.factors .show-btn').on('click',function(){var targetBtn=this;$(targetBtn).parent().toggleClass('active');});},stepsBtn=function(){var buttonCollection=$('.steps .steps__btn');buttonCollection.on('click',function(){var targetBtn=this;buttonCollection.removeClass('clicked'),$(targetBtn).addClass('clicked'),showItem(Number(targetBtn.dataset.id));});},slider=function(){$('.slider__container').slick({dots:!0,infinite:!0,speed:300,slidesToShow:2,slidesToScroll:2,adaptiveHeight:!0,prevArrow:$('.arrow-prev'),nextArrow:$('.arrow-next'),responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]});},videoVisibility=function(){$('#main-video').on('loadeddata',function(){$('#main-video').css('visibility','visible');});},document.documentElement.clientWidth<480?window.addEventListener('scroll',function(){return setTimeout(main,1000);},{once:!0}):document.addEventListener('DOMContentLoaded',main);}());