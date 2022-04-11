(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


// Sticky navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    //Dropdown navbar 

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                console.log("hai");
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
})(jQuery);

const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
    skillsEffect();
});

function checkScroll(el){
    let rect = el.getBoundingClientRect();
    console.log(rect.top + el.offsetHeight);
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect(){
    if(!checkScroll(skills_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}