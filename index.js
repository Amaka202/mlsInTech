const about = document.getElementById("about");
const services = document.getElementById("services");
const contact = document.getElementById("join-us");


const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
// Defining a function
function toggleNav() {
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-show');
}
// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});


function goToAbout(){
    about.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    toggleNav()
}

function goToServices(){
    services.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    toggleNav()
}

function goToContact(){
    contact.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    toggleNav()
}

function redirectToForm () {
  const url = "https://docs.google.com/forms/d/e/1FAIpQLScqGNmOa5JvDR6NXbXVQPgz2phj-ZrLBa4rxnw0drlvClqWeA/viewform";
  window.open(url, "_blank");
};

function sendEmail() {
    window.location = "mailto:MedicalLabScientistsinTech@gmail.com";
}

function Carousel(containerID) {
    this.container = document.getElementById(containerID) || document.body;
    this.slides = this.container.querySelectorAll('.carousel');
    this.total = this.slides.length - 1;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.current = 0;
  
    //start on slide 1
    this.slide(this.current);
  
    //animation effect
    this._animate = function (direction, effect, interval) {
  
      var dRate = 1.2;
  
      if (effect == "slide") {
        var width = this.width;
        var left = 0,opacity = 1;
        var rate, playing;
  
        if (direction == 'forward') {
  
          if (interval === false || interval >= dRate * 1000 + 200) {
            // Default animation speed. rate = 10; is for 1 second.
            rate = dRate * 10;
          } else if (interval < dRate * 1000 + 200 && interval > 400) {
            // Adjusts the animation duration to complete within the interval time period. +200 millisecond pause.
            rate = (interval - 200) / 2 / 50;
          } else {
            // Make faster than 400 millisecond animations continuous without any pause.
            rate = interval / 2 / 50;
          }
  
  
          playing = setInterval(slideOut, rate);
  
  
          var elemOut = this.slides[this.current];
          this.current === this.total ? this.current = 0 : this.current += 1;
          var elemIn = this.slides[this.current];
  
          function slideOut() {
            left -= width / 100;
            elemOut.style.left = left + "px";
            if (opacity > 0) {
              opacity -= 1 / (width / 2) * (width / 100);
            }
            elemOut.style.opacity = opacity;
  
            if (left <= -width / 2) {
              clearInterval(playing);
              elemOut.style.display = "none";
              elemOut.style.left = "0px";
              elemOut.style.opacity = "1";
              elemIn.style.left = width / 2 + "px";
              elemIn.style.opacity = "0";
              elemIn.style.display = "inline-block";
              left = width / 2;
              playing = setInterval(slideIn, rate);
            }
          }
          function slideIn() {
            left -= width / 100;
            elemIn.style.left = left + "px";
            if (opacity < 1) {
              opacity += 1 / (width / 2) * (width / 100);
            }
            elemIn.style.opacity = opacity;
  
            if (left <= 0) {
              clearInterval(playing);
              elemIn.style.left = "0px";
            }
          }
        } else
        if (direction == 'backward') {
  
          if (interval === false || interval >= dRate * 1000 + 200) {
            // Default animation speed. rate = 10; is for 1 second.
            rate = dRate * 10;
          } else if (interval < dRate * 1000 + 200 && interval > 400) {
            // Adjusts the animation duration to complete within the interval time period. +200 millisecond pause.
            rate = (interval - 200) / 2 / 50;
          } else {
            // Make faster than 400 millisecond animations continuous without any pause.
            rate = interval / 2 / 50;
          }
  
  
          playing = setInterval(slideOut, rate);
  
          var elemOut = this.slides[this.current];
          this.current === this.total ? this.current = 0 : this.current += 1;
          var elemIn = this.slides[this.current];
  
          function slideOut() {
            left -= width / 100;
            elemOut.style.left = left + "px";
            if (opacity > 0) {
              opacity -= 1 / (width / 2) * (width / 100);
            }
            elemOut.style.opacity = opacity;
  
            if (left <= -width / 2) {
              clearInterval(playing);
              elemOut.style.display = "none";
              elemOut.style.left = "0px";
              elemOut.style.opacity = "1";
              elemIn.style.left = width / 2 + "px";
              elemIn.style.opacity = "0";
              elemIn.style.display = "inline-block";
              left = width / 2;
              playing = setInterval(slideIn, rate);
            }
          }
          function slideIn() {
            left -= width / 100;
            elemIn.style.left = left + "px";
            if (opacity < 1) {
              opacity += 1 / (width / 2) * (width / 100);
            }
            elemIn.style.opacity = opacity;
  
            if (left <= 0) {
              clearInterval(playing);
              elemIn.style.left = "0px";
            }
          }
        }
      } else
  
      {
        console.log(elimOut);
        this.slide(this.current);
      }
    };
  
  }

  Carousel.prototype.next = function (effect, interval) {

    effect = effect || false;
    interval = interval || false;
  
    this.stop();
    this._animate('forward', effect, interval);
  
    //check interval type to avoid any abuse XD
    if (typeof interval === 'number' && interval % 1 === 0) {
      var context = this;
      this.run = setTimeout(() => {
        context.next(interval);
      }, interval);
    }
  };
  
  //prev function
  Carousel.prototype.prev = function (effect, interval) {
  
  
    this.stop();
    this._animate('backward', effect, interval);
  
    //check interval type to avoid any abuse XD
    if (typeof interval === 'number' && interval % 1 === 0) {
      var context = this;
      this.run = setTimeout(() => {
        context.prev(interval);
      }, interval);
    }
  };
  
  //stop function
  Carousel.prototype.stop = function () {
    clearTimeout(this.run);
  };
  
  
  //select slide function logic
  Carousel.prototype.slide = function (index) {
    if (index >= 0 && index <= this.total) {
      this.stop();
      for (var i = 0; i <= this.total; i++) {
        i === index ? this.slides[i].style.display = 'block' : this.slides[i].style.display = 'none';
      }
    } else
    {
      alert('Index ' + index + "doesn't exist. Available: 0 -" + this.total);
    }
  };
  
  //using the plugin
  var slider = new Carousel('item');
  
  var nextbtn = document.getElementById('next');
  var prevbtn = document.getElementById('prev');
  
  function nextFnx () {
    slider.next('slide');
  };

setInterval( nextFnx, 2000 );
