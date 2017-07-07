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

/*
consoleText(["Hello I'm Matt.", 'I build and design web pages.', 'Made with love.'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 500)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 500)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
*/

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
