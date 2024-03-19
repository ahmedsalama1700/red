    $(function(){
        'use strict';
        $(".social-media [data-toggle='tool-tip']").tooltip();
  
    //  دلوقتي هنغير الكلاس ع الزرار لو الكلاس اوبن مش موجود هتسبدله بفاضي و بعدين نحطه
    // لاحظ ان -1 يعني القيمه مش موجوده
    // !== عشان تقارن اتنين ببعض
    // += عشان هتيضفها للكلاسات بعد كدا
    var button = document.getElementById("menu-toggle");
    button.onclick = function(){
        if(-1 !== button.className.indexOf('opened')){
            button.className = button.className.replace("opened"," ");
            button.setAttribute("aria-expanded","false")
        }else{
            button.className += "opened";
            button.setAttribute("aria-expanded","true")
        }
    };
            var button_tog = $(".menu-toggle");
            button_tog.on("click",function(){
                if($(".menu-toggle").hasClass("opened")){
                    $(".holder").addClass("active");
                }else{
                    $(".holder").removeClass("active");
                }
            });
            $('#home nav a').on("click",function(){
                $(".holder").removeClass("active");
                $("button.menu-toggle").removeClass("opened");}
            );
        });

        // text typing effect
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };
    
        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
    
            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }
    
            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
            var that = this;
            var delta = 200 - Math.random() * 100;
    
            if (this.isDeleting) { delta /= 2; }
    
            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }
    
            setTimeout(function() {
            that.tick();
            }, delta);
        };
    
        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };

        // animate effect typing
        anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  autoplay:true,
  smartSpeed: 700,
  items: 1,
  loop: true,
  smartSpeed: 700,
  autoplay: true,
  autoplayHoverPause: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
