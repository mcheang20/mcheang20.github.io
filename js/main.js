//= require jquery
//= require jquery_ujs

var elements = document.getElementsByTagName('script')

Array.prototype.forEach.call(elements, function(element) {
  if (element.type.indexOf('math/tex') != -1) {
     // Extract math markdown
     var textToRender = element.innerText || element.textContent;

     // Create span for KaTeX
     var katexElement = document.createElement('span');

     // Support inline and display math
     if (element.type.indexOf('mode=display') != -1){
       katexElement.className += "math-display";
       textToRender = '\\displaystyle {' + textToRender + '}';
     } else {
       katexElement.className += "math-inline";
     }

     katex.render(textToRender, katexElement);
     element.parentNode.insertBefore(katexElement, element);
  }
});

//home page animations
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
};

$(document).scroll(function () {
  var ban = $(this).scrollTop();
  if (ban > 150) {
    $('.about-me').addClass("animated fadeInUp");
  }
});

$(document).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 350) {
    $('.projects').addClass("animated fadeInUp");
  }
});

$(document).scroll(function () {
  var feat = $(this).scrollTop();
  if (feat > 250) {
    $('.feature').addClass("animated fadeInUp");
  }
});

//mobile menu function
$(document).ready(function(){
  if($(window).width() <= 450){
    $('.mobile-menu').click(function(){
      $('.home-links').slideToggle();
    })
  }
});

//scroll functions
$(document).ready(function(){
  $('#learn-link').click(function(){
    $("html, body").delay(0).animate({
        scrollTop: $('#skills').offset().top
    }, 800);
  })
});

$(document).ready(function(){
  $('#about-link').click(function(){
    $("html, body").delay(0).animate({
        scrollTop: $('#feature-section').offset().top
    }, 800);
  })
});

$(document).ready(function(){
  $('#project-link').click(function(){
    $('html, body').delay(0).animate({
        scrollTop: $('#projects').offset().top
    }, 1000);
  })
});

$(document).ready(function(){
  $('#myBtn').click(function(){
    $('html, body').delay(0).animate({
        scrollTop: $('#top-page').offset().top
    }, 1000);
  })
});

//truncate function
jQuery(function(){
  var minimized_elements = $('p.truncate');

  minimized_elements.each(function(){
    var t = $(this).text();
    if(t.length < 1100) return;

      $(this).html(
      t.slice(0,1100)+'<span>... </span><a href="/codingjourney/" class="more">Read More</a>'+
      '<span style="display:none;">'+ t.slice(100,t.length)+' <a href="/codingjourney/" class="less">Less</a></span>'
    );
  });
});
