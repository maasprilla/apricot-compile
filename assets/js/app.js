$(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').fadeOut(); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})
//BACKGROUND CHANGER
$(function() {
    $("#button-bg").click(function() {
        $("body").css({
            "background": "url('assets/img/bg5.jpg')no-repeat center center fixed"
        });
    });
    $("#button-bg2").click(function() {
        $("body").css({
            "background": "url('assets/img/bg2.jpg')no-repeat center center fixed"
        });
    });


    $("#button-bg3").click(function() {
        $("body").css({
            "background": "url('assets/img/bg.jpg')no-repeat center center fixed"
        });


    });

    $("#button-bg5").click(function() {
        $("body").css({
            "background": "url('assets/img/giftly.png')repeat"
        });

    });

    $("#button-bg6").click(function() {
        $("body").css({
            "background": "#2c3e50"
        });

    });

    $("#button-bg7").click(function() {
        $("body").css({
            "background": "url('assets/img/bg3.png')repeat"
        });

    });
    $("#button-bg8").click(function() {
        $("body").css({
            "background": "url('assets/img/bg8.jpg')no-repeat center center fixed"
        });
    });
    $("#button-bg9").click(function() {
        $("body").css({
            "background": "url('assets/img/bg9.jpg')no-repeat center center fixed"
        });
    });

    $("#button-bg10").click(function() {
        $("body").css({
            "background": "url('assets/img/bg10.jpg')no-repeat center center fixed"
        });
    });
    $("#button-bg11").click(function() {
        $("body").css({
            "background": "url('assets/img/bg11.jpg')no-repeat center center fixed"
        });
    });
    $("#button-bg12").click(function() {
        $("body").css({
            "background": "url('assets/img/bg12.jpg')no-repeat center center fixed"
        });
    });

    $("#button-bg13").click(function() {
        $("body").css({
            "background": "url('assets/img/bg13.jpg')repeat"
        });

    });
    /**
     * Background Changer end
     */
});

$('.nav-toggle-alt').click(function() {
    //get collapse content selector
    var collapse_content_selector = $(this).attr('href');

    //make the collapse content to be shown or hide
    var toggle_switch = $(this);
    $(collapse_content_selector).slideToggle(function() {
        if ($(this).css('display') == 'block') {
            //change the button label to be 'Show'
            toggle_switch.html('<span class="entypo-up-open"></span>');
        } else {
            //change the button label to be 'Hide'
            toggle_switch.html('<span class="entypo-down-open"></span>');
        }
    });
    return false;
});
//CLOSE ELEMENT
//este close es medio verguen, se usa en el content, pero no tiene mucho sentido
$(".gone").click(function() {
    var collapse_content_close = $(this).attr('href');
    $(collapse_content_close).hide();
});

//initialize tooltip
$('.tooltitle').tooltip();


////Acordion and Sliding menu
$(".topnav").accordionze({
    accordionze: true,
    speed: 500,
    closedSign: '<img src="assets/img/plus.png">',
    openedSign: '<img src="assets/img/minus.png">'
});

////Right Sliding menu
var mySlidebars = new $.slidebars();

$('.toggle-left').on('click', function() {
    mySlidebars.toggle('right');
});

//SEARCH MENU
$('input.id_search').quicksearch('#menu-showhide li, .menu-left-nest li');

//EASY PIE CHART
$(function() {

    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        trackColor: '#ffffff',
        scaleColor: '#ffffff',
        barColor: '#FF0064',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random() * 100);
    });

    $('.speed-car').easyPieChart({
        easing: 'easeOutBounce',
        trackColor: 'rgba(0,0,0,0.3)',
        scaleColor: 'transparent',
        barColor: '#0085DF',

        lineWidth: 8,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent2').text(Math.round(percent));
        }
    });
    var chart = window.chart = $('.chart2').data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random() * 100);
    });
    $('.overall').easyPieChart({
        easing: 'easeOutBounce',
        trackColor: 'rgba(0,0,0,0.3)',
        scaleColor: '#323A45',
        lineWidth: 35,
        lineCap: 'butt',
        barColor: '#FFB900',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent3').text(Math.round(percent));
        }
    });
});


//TOOL TIP
$('.tooltip-tip').tooltipster({
    position: 'right',
    animation: 'slide',
    theme: '.tooltipster-shadow',
    delay: 1,
    offsetX: '-12px',
    onlyOne: true

});
$('.tooltip-tip2').tooltipster({
    position: 'right',
    animation: 'slide',
    offsetX: '-12px',
    theme: '.tooltipster-shadow',
    onlyOne: true

});
$('.tooltip-top').tooltipster({
    position: 'top'
});
$('.tooltip-right').tooltipster({
    position: 'right'
});
$('.tooltip-left').tooltipster({
    position: 'left'
});
$('.tooltip-bottom').tooltipster({
    position: 'bottom'
});
$('.tooltip-reload').tooltipster({
    position: 'right',
    theme: '.tooltipster-white',
    animation: 'fade'
});
$('.tooltip-fullscreen').tooltipster({
    position: 'left',
    theme: '.tooltipster-white',
    animation: 'fade'
});

//NANO SCROLLER
$(".nano").nanoScroller({
    //stop: true 
    scroll: 'top',
    scrollTop: 0,
    sliderMinHeight: 40,
    preventPageScrolling: true
    //alwaysVisible: false

});

//PAGE LOADER
paceOptions = {
    ajax: false, // disabled
    document: false, // disabled
    eventLag: false, // disabled
    elements: {
        selectors: ['.my-page']
    }
};


//SPARKLINE CHART
$(function() {
    $('.inlinebar').sparkline('html', {
        type: 'bar',
        barWidth: '8px',
        height: '30px',
        barSpacing: '2px',
        barColor: '#A8BDCF'
    });
    $('.linebar').sparkline('html', {
        type: 'bar',
        barWidth: '5px',
        height: '30px',
        barSpacing: '2px',
        barColor: '#44BBC1'
    });
    $('.linebar2').sparkline('html', {
        type: 'bar',
        barWidth: '5px',
        height: '30px',
        barSpacing: '2px',
        barColor: '#AB6DB0'
    });
    $('.linebar3').sparkline('html', {
        type: 'bar',
        barWidth: '5px',
        height: '30px',
        barSpacing: '2px',
        barColor: '#19A1F9'
    });
});

$(function() {
    var sparklineLogin = function() {
        $('#sparkline').sparkline(
            [5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
                type: 'line',
                width: '100%',
                height: '25',
                lineColor: '#ffffff',
                fillColor: '#0DB8DF',
                lineWidth: 1,
                spotColor: '#ffffff',
                minSpotColor: '#ffffff',
                maxSpotColor: '#ffffff',
                highlightSpotColor: '#ffffff',
                highlightLineColor: '#ffffff'
            }
        );
    }
    var sparkResize;
    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();
});



window.onload = function() {
    var g1 = new JustGage({
        id: "g1",
        value: getRandomInt(0, 1000),
        min: 0,
        max: 1000,
        relativeGaugeSize: true,
        gaugeColor: "rgba(0,0,0,0.4)",
        levelColors: "#0DB8DF",
        labelFontColor : "#ffffff",
        titleFontColor: "#ffffff",
        valueFontColor :"#ffffff",
        label: "VISITORS",
        gaugeWidthScale: 0.2,
        donut: true
    });
};