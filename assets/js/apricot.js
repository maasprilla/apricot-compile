/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
$(document).ready(function() { 
	
	
	// toggle skin select	
	$("#skin-select #toggle").click(function() { 

		if($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('#skin-select').animate({ left:0 }, 100);	
			$('.wrap-fluid').css({"width":"auto","margin-left":"250px"});
			$('.navbar').css({"margin-left":"240px"});

			$('#skin-select li').css({"text-align":"left"});
			$('#skin-select li span, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number, .title-menu-left').css({"display":"inline-block", "float":"none"});
			//$('body').css({"padding-left":"250px"});
			
			
			$('.ul.topnav li a:hover').css({" background-color":"green!important"});

			$('.ul.topnav h4').css({"display":"none"});

			$('.tooltip-tip2').addClass('tooltipster-disable');
			$('.tooltip-tip').addClass('tooltipster-disable');

			
			$('.datepicker-wrap').css({"position":"absolute", "right":"300px"});
			$('.skin-part').css({"visibility":"visible"});
			$('#menu-showhide, .menu-left-nest').css({"margin":"10px"});
			$('.dark').css({"visibility":"visible"});

			$('.search-hover').css({"display":"none"});
			$('.dropdown-wrap').css({"position":"absolute", "left":"0px", "top":"53px"});



			
		} else {
			$(this).addClass('active')
			

			//$('#skin-select').animate({ left:-200 }, 100);
			$('#skin-select').animate({ left:-200 }, 100);

			$('.wrap-fluid').css({"width":"auto", "margin-left":"50px"});
			$('.navbar').css({"margin-left":"50px"});

			$('#skin-select li').css({"text-align":"right"});
			$('#skin-select li span, ul.topnav h4, .side-dash, .noft-blue, .noft-purple-number, .noft-blue-number, .title-menu-left').css({"display":"none"});
			//$('body').css({"padding-left":"50px"});
			$('.tooltip-tip2').removeClass('tooltipster-disable');
			$('.tooltip-tip').removeClass('tooltipster-disable');
			
			$('.datepicker-wrap').css({"position":"absolute", "right":"84px"});
			
			$('.skin-part').css({"visibility":"visible", "top":"3px"});
			$('.dark').css({"visibility":"hidden"});
			$('#menu-showhide, .menu-left-nest').css({"margin":"0"});

			$('.search-hover').css({"display":"block", "position":"absolute", "right":"-100px"});

			$('.dropdown-wrap').css({"position":"absolute", "left":"-10px", "top":"53px"});


			

		}
		return false;
	});
	
	
	// show skin select for a second
	setTimeout(function(){ $("#skin-select #toggle").addClass('active').trigger('click'); },10)
	
	
}); // end doc.ready


/*
 * jQuery UI Multilevel accordionze v.1
 * 
 * Copyright (c) 2011 Pieter Pareit
 *
 * http://www.scriptbreaker.com
 *
 */

//plugin definition
(function($){
    $.fn.extend({

    //pass the options variable to the function
    accordionze: function(options) {
        
		var defaults = {
			accordionze: 'true',
			speed: 300,
			closedSign: '[+]',
			openedSign: '[-]'
		};

		// Extend our default options with those provided.
		var opts = $.extend(defaults, options);
		//Assign current element to variable, in this case is UL element
 		var $this = $(this);
 		
 		//add a mark [+] to a multilevel menu
 		$this.find("li").each(function() {
 			if($(this).find("ul").size() != 0){
 				//add the multilevel sign next to the link
 				$(this).find("a:first").append("<h4>"+ opts.closedSign +"</h4>");
 				
 				//avoid jumping to the top of the page when the href is an #
 				if($(this).find("a:first").attr('href') == "#"){
 		  			$(this).find("a:first").click(function(){return false;});
 		  		}
 			}
 		});

 		//open active level
 		$this.find("li.active").each(function() {
 			$(this).parents("ul").slideDown(opts.speed);
 			$(this).parents("ul").parent("li").find("h4:first").html(opts.openedSign);
 		});

  		$this.find("li a").click(function() {
  			if($(this).parent().find("ul").size() != 0){
  				if(opts.accordionze){
  					//Do nothing when the list is open
  					if(!$(this).parent().find("ul").is(':visible')){
  						parents = $(this).parent().parents("ul");
  						visible = $this.find("ul:visible");
  						visible.each(function(visibleIndex){
  							var close = true;
  							parents.each(function(parentIndex){
  								if(parents[parentIndex] == visible[visibleIndex]){
  									close = false;
  									return false;
  								}
  							});
  							if(close){
  								if($(this).parent().find("ul") != visible[visibleIndex]){
  									$(visible[visibleIndex]).slideUp(opts.speed, function(){
  										$(this).parent("li").find("h4:first").html(opts.closedSign);
  									});
  									
  								}
  							}
  						});
  					}
  				}
  				if($(this).parent().find("ul:first").is(":visible")){
  					$(this).parent().find("ul:first").slideUp(opts.speed, function(){
  						$(this).parent("li").find("h4:first").delay(opts.speed).html(opts.closedSign);
  					});
  					
  					
  				}else{
  					$(this).parent().find("ul:first").slideDown(opts.speed, function(){
  						$(this).parent("li").find("h4:first").delay(opts.speed).html(opts.openedSign);
  					});
  				}
  			}
  		});
    }
});
})(jQuery);
// Slidebars 0.9.4 - http://plugins.adchsm.me/slidebars/ Written by Adam Smith - http://www.adchsm.me/ Released under MIT License - http://plugins.adchsm.me/slidebars/license.txt
;(function(a){a.slidebars=function(b){var x=a.extend({siteClose:true,disableOver:false,hideControlClasses:false},b);var v=document.createElement("div").style,t=false,k=false;if(v.MozTransition===""||v.WebkitTransition===""||v.OTransition===""||v.transition===""){t=true}if(v.MozTransform===""||v.WebkitTransform===""||v.OTransform===""||v.transform===""){k=true}var s=navigator.userAgent,y=false,c=false;if(/Android/.test(s)){y=s.substr(s.indexOf("Android")+8,3)}else{if(/(iPhone|iPod|iPad)/.test(s)){c=s.substr(s.indexOf("OS ")+3,3).replace("_",".")}}if(y&&y<3||c&&c<5){a("html").addClass("sb-static")}if(!a("#sb-site").length){a("body").children().wrapAll('<div id="sb-site" />')}var q=a("#sb-site");if(!q.parent().is("body")){q.appendTo("body")}if(a(".sb-left").length){var e=a(".sb-left"),g=false;e.addClass("sb-slidebar");if(!e.parent().is("body")){e.appendTo("body")}}if(a(".sb-right").length){var h=a(".sb-right"),j=false;h.addClass("sb-slidebar");if(!h.parent().is("body")){h.appendTo("body")}}var r=false,z=a(window).width(),w=a(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),m=a(".sb-slide");function o(){if(!x.disableOver||(typeof x.disableOver==="number"&&x.disableOver>=z)){r=true;a("html").addClass("sb-init");if(x.hideControlClasses){w.removeClass("sb-hide")}}else{if(typeof x.disableOver==="number"&&x.disableOver<z){r=false;a("html").removeClass("sb-init");if(x.hideControlClasses){w.addClass("sb-hide")}if(g||j){l()}}}}o();function f(){q.css("minHeight","");q.css("minHeight",a("body").height()+"px");if(e&&(e.hasClass("sb-style-push")||e.hasClass("sb-style-overlay"))){e.css("marginLeft","-"+e.css("width"))}if(h&&(h.hasClass("sb-style-push")||h.hasClass("sb-style-overlay"))){h.css("marginRight","-"+h.css("width"))}if(e&&e.hasClass("sb-width-custom")){e.css("width",e.attr("data-sb-width"))}if(h&&h.hasClass("sb-width-custom")){h.css("width",h.attr("data-sb-width"))}}f();a(window).resize(function(){var A=a(window).width();if(z!==A){z=A;o();f();if(g){i("left")}if(j){i("right")}}});var u;if(t&&k){u="translate";if(y&&y<4.4){u="side"}}else{u="jQuery"}function d(B,E,D){var A;if(B.hasClass("sb-style-push")){A=q.add(B).add(m)}else{if(B.hasClass("sb-style-overlay")){A=B}else{A=q.add(m)}}if(u==="translate"){A.css("transform","translate("+E+")")}else{if(u==="side"){if(E[0]==="-"){E=E.substr(1)}A.css(D,E);setTimeout(function(){if(E==="0px"){A.removeAttr("style");f()}},400)}else{if(u==="jQuery"){if(E[0]==="-"){E=E.substr(1)}var C={};C[D]=E;A.stop().animate(C,400);setTimeout(function(){if(E==="0px"){A.removeAttr("style");f()}},400)}}}}function i(A){if(A==="left"&&e&&j||A==="right"&&h&&g){l();setTimeout(B,400)}else{B()}function B(){if(r&&A==="left"&&e){a("html").addClass("sb-active sb-active-left");e.addClass("sb-active");d(e,e.css("width"),"left");setTimeout(function(){g=true},400)}else{if(r&&A==="right"&&h){a("html").addClass("sb-active sb-active-right");h.addClass("sb-active");d(h,"-"+h.css("width"),"right");setTimeout(function(){j=true},400)}}}}function l(A){if(g||j){if(g){d(e,"0px","left");g=false}if(j){d(h,"0px","right");j=false}setTimeout(function(){a("html").removeClass("sb-active sb-active-left sb-active-right");if(e){e.removeClass("sb-active")}if(h){h.removeClass("sb-active")}if(A){window.location=A}},400)}}function n(A){if(A==="left"&&e){if(!g){i("left")}else{l()}}if(A==="right"&&h){if(!j){i("right")}else{l()}}}this.open=i;this.close=l;this.toggle=n;this.init=function(){return r};this.active=function(A){if(A==="left"&&e){return g}if(A==="right"&&h){return j}};function p(B,A){B.stopPropagation();B.preventDefault();if(B.type==="touchend"){A.off("click")}}a(".sb-toggle-left").on("touchend click",function(A){p(A,a(this));n("left")});a(".sb-toggle-right").on("touchend click",function(A){p(A,a(this));n("right")});a(".sb-open-left").on("touchend click",function(A){p(A,a(this));i("left")});a(".sb-open-right").on("touchend click",function(A){p(A,a(this));i("right")});a(".sb-close").on("touchend click",function(A){p(A,a(this));l()});a(".sb-slidebar a").not(".sb-disable-close").on("click",function(A){p(A,a(this));l(a(this).attr("href"))});q.on("touchend click",function(A){if(x.siteClose&&(g||j)){p(A,a(this));l()}})}})(jQuery);
(function($, window, document, undefined) {
	$.fn.quicksearch = function (target, opt) {
		
		var timeout, cache, rowcache, jq_results, val = '', e = this, options = $.extend({ 
			delay: 100,
			selector: null,
			stripeRows: null,
			loader: null,
			noResults: '',
			matchedResultsCount: 0,
			bind: 'keyup',
			onBefore: function () { 
				return;
			},
			onAfter: function () { 
				return;
			},
			show: function () {
				this.style.display = "";
			},
			hide: function () {
				this.style.display = "none";
			},
			prepareQuery: function (val) {
				return val.toLowerCase().split(' ');
			},
			testQuery: function (query, txt, _row) {
				for (var i = 0; i < query.length; i += 1) {
					if (txt.indexOf(query[i]) === -1) {
						return false;
					}
				}
				return true;
			}
		}, opt);
		
		this.go = function () {
			
			var i = 0,
				numMatchedRows = 0,
				noresults = true, 
				query = options.prepareQuery(val),
				val_empty = (val.replace(' ', '').length === 0);
			
			for (var i = 0, len = rowcache.length; i < len; i++) {
				if (val_empty || options.testQuery(query, cache[i], rowcache[i])) {
					options.show.apply(rowcache[i]);
					noresults = false;
					numMatchedRows++;
				} else {
					options.hide.apply(rowcache[i]);
				}
			}
			
			if (noresults) {
				this.results(false);
			} else {
				this.results(true);
				this.stripe();
			}
			
			this.matchedResultsCount = numMatchedRows;
			this.loader(false);
			options.onAfter();
			
			return this;
		};
		
		/*
		 * External API so that users can perform search programatically. 
		 * */
		this.search = function (submittedVal) {
			val = submittedVal;
			e.trigger();
		};
		
		/*
		 * External API to get the number of matched results as seen in 
		 * https://github.com/ruiz107/quicksearch/commit/f78dc440b42d95ce9caed1d087174dd4359982d6
		 * */
		this.currentMatchedResults = function() {
			return this.matchedResultsCount;
		};
		
		this.stripe = function () {
			
			if (typeof options.stripeRows === "object" && options.stripeRows !== null)
			{
				var joined = options.stripeRows.join(' ');
				var stripeRows_length = options.stripeRows.length;
				
				jq_results.not(':hidden').each(function (i) {
					$(this).removeClass(joined).addClass(options.stripeRows[i % stripeRows_length]);
				});
			}
			
			return this;
		};
		
		this.strip_html = function (input) {
			var output = input.replace(new RegExp('<[^<]+\>', 'g'), "");
			output = $.trim(output.toLowerCase());
			return output;
		};
		
		this.results = function (bool) {
			if (typeof options.noResults === "string" && options.noResults !== "") {
				if (bool) {
					$(options.noResults).hide();
				} else {
					$(options.noResults).show();
				}
			}
			return this;
		};
		
		this.loader = function (bool) {
			if (typeof options.loader === "string" && options.loader !== "") {
				 (bool) ? $(options.loader).show() : $(options.loader).hide();
			}
			return this;
		};
		
		this.cache = function () {
			
			jq_results = $(target);
			
			if (typeof options.noResults === "string" && options.noResults !== "") {
				jq_results = jq_results.not(options.noResults);
			}
			
			var t = (typeof options.selector === "string") ? jq_results.find(options.selector) : $(target).not(options.noResults);
			cache = t.map(function () {
				return e.strip_html(this.innerHTML);
			});
			
			rowcache = jq_results.map(function () {
				return this;
			});

			/*
			 * Modified fix for sync-ing "val". 
			 * Original fix https://github.com/michaellwest/quicksearch/commit/4ace4008d079298a01f97f885ba8fa956a9703d1
			 * */
			val = val || this.val() || "";
			
			return this.go();
		};
		
		this.trigger = function () {
			this.loader(true);
			options.onBefore();
			
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function () {
				e.go();
			}, options.delay);
			
			return this;
		};
		
		this.cache();
		this.results(true);
		this.stripe();
		this.loader(false);
		
		return this.each(function () {
			
			/*
			 * Changed from .bind to .on.
			 * */
			$(this).on(options.bind, function () {
				
				val = $(this).val();
				e.trigger();
			});
		});
		
	};

}(jQuery, this, document));

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.0
 **/
!function(a,b){"object"==typeof exports?module.exports=b(require("jQuery")):"function"==typeof define&&define.amd?define("EasyPieChart",["jQuery"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext("2d");d.width=d.height=b.size,a.appendChild(d);var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,"px"].join(""),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(0,c||1),1),e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,!1),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c,d=24;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)0===d%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.lineWidth)};this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:1e3,easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof b)d.renderer=b;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&"undefined"!=typeof c[b]?c[b]:d[b],"function"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing="string"==typeof e.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute("data-percent")&&this.update(parseFloat(a.getAttribute("data-percent")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),g()};a.fn.easyPieChart=function(b){return this.each(function(){a.data(this,"easyPieChart")||a.data(this,"easyPieChart",new c(this,b))})}});
/*

Tooltipster 2.1.4 | 6/1/13
A rockin' custom tooltip jQuery plugin

Developed by: Caleb Jacob - calebjacob.com
Copyright (C) 2013 Caleb Jacob

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

;(function ($, window, document, undefined) {

	var pluginName = "tooltipster",
		defaults = {
			animation: 'fade',
			arrow: true,
			arrowColor: '',
			content: '',
			delay: 200,
			fixedWidth: 0,
			maxWidth: 0,
			functionBefore: function(origin, continueTooltip) {
				continueTooltip();
			},
			functionReady: function(origin, tooltip) {},
			functionAfter: function(origin) {},
			icon: '(?)',
			iconDesktop: false,
			iconTouch: false,
			iconTheme: '.tooltipster-icon',
			interactive: false,
			interactiveTolerance: 350,
			offsetX: 0,
			offsetY: 0,
			onlyOne: true,
			position: 'top',
			speed: 350,
			timer: 0,
			theme: '.tooltipster-default',
			touchDevices: true,
			trigger: 'hover',
			updateAnimation: true
		};
	
	function Plugin(element, options) {
		this.element = element;
		
		this.options = $.extend( {}, defaults, options );
		
		this._defaults = defaults;
		this._name = pluginName;
		
		this.init();
	}
	
	// we'll use this to detect for mobile devices
	function is_touch_device() {
		return !!('ontouchstart' in window);
  	}
  	
  	// detecting support for CSS transitions
  	function supportsTransitions() {
	    var b = document.body || document.documentElement;
	    var s = b.style;
	    var p = 'transition';
	    if(typeof s[p] == 'string') {return true; }
	
	    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
	    p = p.charAt(0).toUpperCase() + p.substr(1);
	    for(var i=0; i<v.length; i++) {
	      if(typeof s[v[i] + p] == 'string') { return true; }
	    }
	    return false;
    }
    var transitionSupport = true;
    if (!supportsTransitions()) {
	    transitionSupport = false;
    }
    
    // detect if this device is mouse driven over purely touch
    var touchDevice = is_touch_device();
    
    // on mousemove, double confirm that this is a desktop - not a touch device
  	$(window).on('mousemove.tooltipster', function() {
	  	touchDevice = false;	  	
	  	$(window).off('mousemove.tooltipster');
  	});
  	
  	
  	
    	
	Plugin.prototype = {
		
		init: function() {		
			var $this = $(this.element);
			var object = this;
			var run = true;
			
			// if this is a touch device and touch devices are disabled, disable the plugin
			if ((object.options.touchDevices == false) && (touchDevice)) {
				run = false;
			}
			
			// if IE7 or lower, disable the plugin
			if (document.all && !document.querySelector) {
				run = false;
    		}
    					
			if (run == true) {
				
				// detect if we're changing the tooltip origin to an icon
				if ((this.options.iconDesktop == true) && (!touchDevice) || ((this.options.iconTouch == true) && (touchDevice))) {
					var transferContent = $this.attr('title');					
					$this.removeAttr('title');
					var theme = object.options.iconTheme;
					var icon = $('<span class="'+ theme.replace('.', '') +'" title="'+ transferContent +'">'+ this.options.icon +'</span>');
					icon.insertAfter($this);
					$this.data('tooltipsterIcon', icon);
					$this = icon;
				}
			
				// first, strip the title off of the element and set it as a data attribute to prevent the default tooltips from popping up
				var tooltipsterContent = $.trim(object.options.content).length > 0 ? object.options.content : $this.attr('title');
				$this.data('tooltipsterContent', tooltipsterContent);
				$this.removeAttr('title');
				
				// if this is a touch device, add some touch events to launch the tooltip
				if ((this.options.touchDevices == true) && (touchDevice) && ((this.options.trigger == 'click') || (this.options.trigger == 'hover'))) {
					$this.bind('touchstart', function(element, options) {
						object.showTooltip();
					});
				}
				
				// if this is a desktop, deal with adding regular mouse events
				else {
				
					// if hover events are set to show and hide the tooltip, attach those events respectively
					if (this.options.trigger == 'hover') {
						$this.on('mouseenter.tooltipster', function() {
							object.showTooltip();
						});
						
						// if this is an interactive tooltip, delay getting rid of the tooltip right away so you have a chance to hover on the tooltip
						if (this.options.interactive == true) {
							$this.on('mouseleave.tooltipster', function() {
								var tooltipster = $this.data('tooltipster');
								var keepAlive = false;
								
								if ((tooltipster !== undefined) && (tooltipster !== '')) {
									tooltipster.mouseenter(function() {
										keepAlive = true;
									});
									tooltipster.mouseleave(function() {
										keepAlive = false;
									});
									
									var tolerance = setTimeout(function() {
										if (keepAlive == true) {
											tooltipster.mouseleave(function() {
												object.hideTooltip();
											});
										}
										else {
											object.hideTooltip();
										}
									}, object.options.interactiveTolerance);
								}
								else {
									object.hideTooltip();
								}
							});
						}
						
						// if this is a dumb tooltip, just get rid of it on mouseleave
						else {
							$this.on('mouseleave.tooltipster', function() {
								object.hideTooltip();
							});
						}
					}
					
					// if click events are set to show and hide the tooltip, attach those events respectively
					if (this.options.trigger == 'click') {
						$this.on('click.tooltipster', function() {
							if (($this.data('tooltipster') == '') || ($this.data('tooltipster') == undefined)) {
								object.showTooltip();
							}
							else {
								object.hideTooltip();
							}
						});
					}
				}
			}
		},
		
		showTooltip: function(options) {			
			var $this = $(this.element);
			var object = this;
						
			// detect if we're actually dealing with an icon or the origin itself
			if ($this.data('tooltipsterIcon') !== undefined) {
				$this = $this.data('tooltipsterIcon');
			}
			
			// continue if this tooltip is enabled
			if (!$this.hasClass('tooltipster-disable')) {
			
				// if we only want one tooltip open at a time, close all tooltips currently open
				if (($('.tooltipster-base').not('.tooltipster-dying').length > 0) && (object.options.onlyOne == true)) {
					$('.tooltipster-base').not('.tooltipster-dying').not($this.data('tooltipster')).each(function() {
						$(this).addClass('tooltipster-kill');
						var origin = $(this).data('origin');
						origin.data('plugin_tooltipster').hideTooltip();
					});
				}
						
				// delay the showing of the tooltip according to the delay time
				$this.clearQueue().delay(object.options.delay).queue(function() {
				
					// call our custom function before continuing
					object.options.functionBefore($this, function() {
						
						// if this origin already has its tooltip open, keep it open and do nothing else
						if (($this.data('tooltipster') !== undefined) && ($this.data('tooltipster') !== '')) {
							var tooltipster = $this.data('tooltipster');
							
							if (!tooltipster.hasClass('tooltipster-kill')) {
	
								var animation = 'tooltipster-'+ object.options.animation;
								
								tooltipster.removeClass('tooltipster-dying');
								
								if (transitionSupport == true) {
									tooltipster.clearQueue().addClass(animation +'-show');
								}
								
								// if we have a timer set, we need to reset it
								if (object.options.timer > 0) {
									var timer = tooltipster.data('tooltipsterTimer');
									clearTimeout(timer);
														
									timer = setTimeout(function() {
										tooltipster.data('tooltipsterTimer', undefined);
										object.hideTooltip();
									}, object.options.timer);
									
									tooltipster.data('tooltipsterTimer', timer);
								}
								
								// if this is a touch device, hide the tooltip on body touch
								if ((object.options.touchDevices == true) && (touchDevice)) {
									$('body').bind('touchstart', function(event) {
										if (object.options.interactive == true) {
											var touchTarget = $(event.target);
											var closeTooltip = true;
											
											touchTarget.parents().each(function() {
												if ($(this).hasClass('tooltipster-base')) {
													closeTooltip = false;
												}
											});
											
											if (closeTooltip == true) {
												object.hideTooltip();
												$('body').unbind('touchstart');
											}
										}
										else {
											object.hideTooltip();
											$('body').unbind('touchstart');
										}
									});
								}
							}
						}
						
						// if the tooltip isn't already open, open that sucker up!
						else {
							// disable horizontal scrollbar to keep overflowing tooltips from jacking with it
							$('body').css('overflow-x', 'hidden');
							
							// get the content for the tooltip
							var content = $this.data('tooltipsterContent');
							
							// get some other settings related to building the tooltip
							var theme = object.options.theme;
							var themeClass = theme.replace('.', '');
							var animation = 'tooltipster-'+object.options.animation;
							var animationSpeed = '-webkit-transition-duration: '+ object.options.speed +'ms; -webkit-animation-duration: '+ object.options.speed +'ms; -moz-transition-duration: '+ object.options.speed +'ms; -moz-animation-duration: '+ object.options.speed +'ms; -o-transition-duration: '+ object.options.speed +'ms; -o-animation-duration: '+ object.options.speed +'ms; -ms-transition-duration: '+ object.options.speed +'ms; -ms-animation-duration: '+ object.options.speed +'ms; transition-duration: '+ object.options.speed +'ms; animation-duration: '+ object.options.speed +'ms;';
							var fixedWidth = object.options.fixedWidth > 0 ? 'width:'+ Math.round(object.options.fixedWidth) +'px;' : '';
							var maxWidth = object.options.maxWidth > 0 ? 'max-width:'+ Math.round(object.options.maxWidth) +'px;' : '';
							var pointerEvents = object.options.interactive == true ? 'pointer-events: auto;' : '';
												
							// build the base of our tooltip
							var tooltipster = $('<div class="tooltipster-base '+ themeClass +' '+ animation +'" style="'+ fixedWidth +' '+ maxWidth +' '+ pointerEvents +' '+ animationSpeed +'"></div>');
							var tooltipsterHTML = $('<div class="tooltipster-content"></div>');
							tooltipsterHTML.html(content);
							tooltipster.append(tooltipsterHTML);
							
							
							tooltipster.appendTo('body');
							
							// attach the tooltip to its origin
							$this.data('tooltipster', tooltipster);
							tooltipster.data('origin', $this);
							
							// do all the crazy calculations and positioning
							object.positionTooltip();
							
							// call our custom callback since the content of the tooltip is now part of the DOM
							object.options.functionReady($this, tooltipster);
							
							// animate in the tooltip
							if (transitionSupport == true) {
								tooltipster.addClass(animation + '-show');
							}
							else {
								tooltipster.css('display', 'none').removeClass(animation).fadeIn(object.options.speed);
							}
							
							// check to see if our tooltip content changes or its origin is removed while the tooltip is alive
							var currentTooltipContent = content;
							var contentUpdateChecker = setInterval(function() {		
								var newTooltipContent = $this.data('tooltipsterContent');
								
								// if this tooltip's origin is removed, remove the tooltip
								if ($('body').find($this).length == 0) {
									tooltipster.addClass('tooltipster-dying');
									object.hideTooltip();
								}
								
								// if the content changed for the tooltip, update it											
								else if ((currentTooltipContent !== newTooltipContent) && (newTooltipContent !== '')) {
									currentTooltipContent = newTooltipContent;
									
									// set the new content in the tooltip
									tooltipster.find('.tooltipster-content').html(newTooltipContent);
									
									// if we want to play a little animation showing the content changed
									if (object.options.updateAnimation == true) {
										if (supportsTransitions()) {
											tooltipster.css({
												'width': '',
												'-webkit-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'-moz-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'-o-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'-ms-transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms',
												'transition': 'all ' + object.options.speed + 'ms, width 0ms, height 0ms, left 0ms, top 0ms'
											}).addClass('tooltipster-content-changing');
											
											// reset the CSS transitions and finish the change animation
											setTimeout(function() {
												tooltipster.removeClass('tooltipster-content-changing');
												// after the changing animation has completed, reset the CSS transitions
												setTimeout(function() {
													tooltipster.css({
														'-webkit-transition': object.options.speed + 'ms',
														'-moz-transition': object.options.speed + 'ms',
														'-o-transition': object.options.speed + 'ms',
														'-ms-transition': object.options.speed + 'ms',
														'transition': object.options.speed + 'ms'
													});
												}, object.options.speed);
											}, object.options.speed);
										}
										else {
											tooltipster.fadeTo(object.options.speed, 0.5, function() {
												tooltipster.fadeTo(object.options.speed, 1);
											});
										}
									}
									
									// reposition and resize the tooltip
									object.positionTooltip();
								}
								
								// if the tooltip is closed or origin is removed, clear this interval
								if (($('body').find(tooltipster).length == 0) || ($('body').find($this).length == 0)) {
									clearInterval(contentUpdateChecker);
								}
							}, 200);
							
							// if we have a timer set, let the countdown begin!
							if (object.options.timer > 0) {							
								var timer = setTimeout(function() {
									tooltipster.data('tooltipsterTimer', undefined);
									object.hideTooltip();
								}, object.options.timer + object.options.speed);
								
								tooltipster.data('tooltipsterTimer', timer);
							}
							
							// if this is a touch device, hide the tooltip on body touch
							if ((object.options.touchDevices == true) && (touchDevice)) {
								$('body').bind('touchstart', function(event) {
									if (object.options.interactive == true) {
										
										var touchTarget = $(event.target);
										var closeTooltip = true;
																			
										touchTarget.parents().each(function() {
											if ($(this).hasClass('tooltipster-base')) {
												closeTooltip = false;
											}
										});
										
										if (closeTooltip == true) {
											object.hideTooltip();
											$('body').unbind('touchstart');
										}
									}
									else {
										object.hideTooltip();
										$('body').unbind('touchstart');
									}
								});
							}
							
							// if this is an interactive tooltip activated by a click, close the tooltip when you hover off the tooltip
							tooltipster.mouseleave(function() {
								object.hideTooltip();
							});
						}
					});
					
					$this.dequeue();
				});
			}
		},
		
		hideTooltip: function(options) {
						
			var $this = $(this.element);
			var object = this;
			
			// detect if we're actually dealing with an icon or the origin itself
			if ($this.data('tooltipsterIcon') !== undefined) {
				$this = $this.data('tooltipsterIcon');
			}
			
			var tooltipster = $this.data('tooltipster');
			
			// if the origin has been removed, find all tooltips assigned to death
			if (tooltipster == undefined) {
				tooltipster = $('.tooltipster-dying');
			}
			
			// clear any possible queues handling delays and such
			$this.clearQueue();
			
			if ((tooltipster !== undefined) && (tooltipster !== '')) {
				
				// detect if we need to clear a timer
				var timer = tooltipster.data('tooltipsterTimer');
				if (timer !== undefined) {
					clearTimeout(timer);
				}

				var animation = 'tooltipster-'+ object.options.animation;
				
				if (transitionSupport == true) {
					tooltipster.clearQueue()
					.removeClass(animation +'-show')
					.addClass('tooltipster-dying')
					.delay(object.options.speed * 0.5)
					.queue(function() {
						tooltipster.hide();
						tooltipster.remove();
						$this.data('tooltipster', '');
						$('body').css('overflow-x', '');
						
						// finally, call our custom callback function
						object.options.functionAfter($this);
					});
				}
				else {
					tooltipster.clearQueue().addClass('tooltipster-dying').fadeOut(object.options.speed, function() {
						tooltipster.remove();
						$this.data('tooltipster', '');
						$('body').css('overflow-x', '');
						
						// finally, call our custom callback function
						object.options.functionAfter($this);
					});
				}
			}
		},
		
		positionTooltip: function(options) {
					
			var $this = $(this.element);
			var object = this;
									
			// detect if we're actually dealing with an icon or the origin itself
			if ($this.data('tooltipsterIcon') !== undefined) {
				$this = $this.data('tooltipsterIcon');
			}
			
			if (($this.data('tooltipster') !== undefined) && ($this.data('tooltipster') !== '')) {
						
				// find tooltipster and reset its width
				var tooltipster = $this.data('tooltipster');
				tooltipster.css('width', '');
				
				// find variables to determine placement
				var windowWidth = $(window).width();
				var containerWidth = $this.outerWidth(false);
				var containerHeight = $this.outerHeight(false);
				var tooltipWidth = tooltipster.outerWidth(false);
				var tooltipInnerWidth = tooltipster.innerWidth() + 1; // this +1 stops FireFox from sometimes forcing an additional text line
				var tooltipHeight = tooltipster.outerHeight(false);
				var offset = $this.offset();
				var offsetTop = offset.top;
				var offsetLeft = offset.left;
				var resetPosition = undefined;
				
				// if this is an <area> tag inside a <map>, all hell breaks loose. Recaclulate all the measurements based on coordinates
				if ($this.is('area')) {
					var areaShape = $this.attr('shape');
					var mapName = $this.parent().attr('name');
					var map = $('img[usemap="#'+ mapName +'"]');
					var mapOffsetLeft = map.offset().left;
					var mapOffsetTop = map.offset().top;
					var areaMeasurements = $this.attr('coords') !== undefined ? $this.attr('coords').split(',') : undefined;
					
					if (areaShape == 'circle') {
						var areaLeft = parseInt(areaMeasurements[0]);
						var areaTop = parseInt(areaMeasurements[1]);
						var areaWidth = parseInt(areaMeasurements[2]);
						containerHeight = areaWidth * 2;
						containerWidth = areaWidth * 2;
						offsetTop = mapOffsetTop + areaTop - areaWidth;
						offsetLeft = mapOffsetLeft + areaLeft - areaWidth;
					}
					else if (areaShape == 'rect') {
						var areaLeft = parseInt(areaMeasurements[0]);
						var areaTop = parseInt(areaMeasurements[1]);
						var areaRight = parseInt(areaMeasurements[2]);
						var areaBottom = parseInt(areaMeasurements[3]);
						containerHeight = areaBottom - areaTop;
						containerWidth = areaRight - areaLeft;
						offsetTop = mapOffsetTop + areaTop;
						offsetLeft = mapOffsetLeft + areaLeft;
					}
					else if (areaShape == 'poly') {
						var areaXs = [];
						var areaYs = [];
						var areaSmallestX = 0,
							areaSmallestY = 0,
							areaGreatestX = 0,
							areaGreatestY = 0;
						var arrayAlternate = 'even';
						
						for (i = 0; i < areaMeasurements.length; i++) {
							var areaNumber = parseInt(areaMeasurements[i]);
							
							if (arrayAlternate == 'even') {
								if (areaNumber > areaGreatestX) {
									areaGreatestX = areaNumber;
									if (i == 0) {
										areaSmallestX = areaGreatestX;
									}
								}
								
								if (areaNumber < areaSmallestX) {
									areaSmallestX = areaNumber;
								}
								
								arrayAlternate = 'odd';
							}
							else {
								if (areaNumber > areaGreatestY) {
									areaGreatestY = areaNumber;
									if (i == 1) {
										areaSmallestY = areaGreatestY;
									}
								}
								
								if (areaNumber < areaSmallestY) {
									areaSmallestY = areaNumber;
								}
								
								arrayAlternate = 'even';
							}
						}
					
						containerHeight = areaGreatestY - areaSmallestY;
						containerWidth = areaGreatestX - areaSmallestX;
						offsetTop = mapOffsetTop + areaSmallestY;
						offsetLeft = mapOffsetLeft + areaSmallestX;
					}
					else {
						containerHeight = map.outerHeight(false);
						containerWidth = map.outerWidth(false);
						offsetTop = mapOffsetTop;
						offsetLeft = mapOffsetLeft;
					}
				}
																
				// hardcoding the width and removing the padding fixed an issue with the tooltip width collapsing when the window size is small
				if(object.options.fixedWidth == 0) {
					tooltipster.css({
						'width': Math.round(tooltipInnerWidth) + 'px',
						'padding-left': '0px',
						'padding-right': '0px'
					});
				}
				
				// our function and global vars for positioning our tooltip
				var myLeft = 0,
					myTop = 0;
				var offsetY = parseInt(object.options.offsetY);
				var offsetX = parseInt(object.options.offsetX);
				var arrowConstruct = '';
				
				// A function to detect if the tooltip is going off the screen horizontally. If so, reposition the crap out of it!
				function dontGoOffScreenX() {
				
					var windowLeft = $(window).scrollLeft();
					
					// If the tooltip goes off the left side of the screen, line it up with the left side of the window
					if((myLeft - windowLeft) < 0) {
						var arrowReposition = myLeft - windowLeft;
						myLeft = windowLeft;
																								
						tooltipster.data('arrow-reposition', arrowReposition);
					}
					
					// If the tooltip goes off the right of the screen, line it up with the right side of the window
					if (((myLeft + tooltipWidth) - windowLeft) > windowWidth) {
						var arrowReposition = myLeft - ((windowWidth + windowLeft) - tooltipWidth);
						myLeft = (windowWidth + windowLeft) - tooltipWidth;
																												
						tooltipster.data('arrow-reposition', arrowReposition);
					}
				}
				
				// A function to detect if the tooltip is going off the screen vertically. If so, switch to the opposite!
				function dontGoOffScreenY(switchTo, resetTo) {
					// if it goes off the top off the page
					if(((offsetTop - $(window).scrollTop() - tooltipHeight - offsetY - 12) < 0) && (resetTo.indexOf('top') > -1)) {
						object.options.position = switchTo;
						resetPosition = resetTo;
					}
					
					// if it goes off the bottom of the page
					if (((offsetTop + containerHeight + tooltipHeight + 12 + offsetY) > ($(window).scrollTop() + $(window).height())) && (resetTo.indexOf('bottom') > -1)) {
						object.options.position = switchTo;
						resetPosition = resetTo;
						myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					}
				}
							
				if(object.options.position == 'top') {
					var leftDifference = (offsetLeft + tooltipWidth) - (offsetLeft + containerWidth);
					myLeft =  (offsetLeft + offsetX) - (leftDifference / 2);
					myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom', 'top');
				}
				
				if(object.options.position == 'top-left') {
					myLeft = offsetLeft + offsetX;
					myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-left', 'top-left');
				}
				
				if(object.options.position == 'top-right') {
					myLeft = (offsetLeft + containerWidth + offsetX) - tooltipWidth;
					myTop = (offsetTop - tooltipHeight) - offsetY - 12;
					dontGoOffScreenX();
					dontGoOffScreenY('bottom-right', 'top-right');
				}
				
				if(object.options.position == 'bottom') {
					var leftDifference = (offsetLeft + tooltipWidth) - (offsetLeft + containerWidth);
					myLeft =  offsetLeft - (leftDifference / 2) + offsetX;
					myTop = (offsetTop + containerHeight) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top', 'bottom');
				}
				
				if(object.options.position == 'bottom-left') {
					myLeft = offsetLeft + offsetX;
					myTop = (offsetTop + containerHeight) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-left', 'bottom-left');
				}
				
				if(object.options.position == 'bottom-right') {
					myLeft = (offsetLeft + containerWidth + offsetX) - tooltipWidth;
					myTop = (offsetTop + containerHeight) + offsetY + 12;
					dontGoOffScreenX();
					dontGoOffScreenY('top-right', 'bottom-right');
				}
				
				if(object.options.position == 'left') {
					myLeft = offsetLeft - offsetX - tooltipWidth - 12;
					myLeftMirror = offsetLeft + offsetX + containerWidth + 12;
					var topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
					myTop =  offsetTop - (topDifference / 2) - offsetY;
												
					// If the tooltip goes off boths sides of the page
					if((myLeft < 0) && ((myLeftMirror + tooltipWidth) > windowWidth)) {
						var borderWidth = parseFloat(tooltipster.css('border-width')) * 2;
						var newWidth = (tooltipWidth + myLeft) - borderWidth;
						tooltipster.css('width', newWidth + 'px');
						
						tooltipHeight = tooltipster.outerHeight(false);
						myLeft = offsetLeft - offsetX - newWidth - 12 - borderWidth;
						topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
						myTop =  offsetTop - (topDifference / 2) - offsetY;
					}
					
					// If it only goes off one side, flip it to the other side
					else if(myLeft < 0) {
						myLeft = offsetLeft + offsetX + containerWidth + 12;
						tooltipster.data('arrow-reposition', 'left');
					}
				}
				
				if(object.options.position == 'right') {
					myLeft = offsetLeft + offsetX + containerWidth + 12;
					myLeftMirror = offsetLeft - offsetX - tooltipWidth - 12;
					var topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
					myTop =  offsetTop - (topDifference / 2) - offsetY;
					
					// If the tooltip goes off boths sides of the page
					if(((myLeft + tooltipWidth) > windowWidth) && (myLeftMirror < 0)) {
						var borderWidth = parseFloat(tooltipster.css('border-width')) * 2;
						var newWidth = (windowWidth - myLeft) - borderWidth;
						tooltipster.css('width', newWidth + 'px');
						
						tooltipHeight = tooltipster.outerHeight(false);
						topDifference = (offsetTop + tooltipHeight) - (offsetTop + $this.outerHeight(false));
						myTop =  offsetTop - (topDifference / 2) - offsetY;
	
					}
						
					// If it only goes off one side, flip it to the other side
					else if((myLeft + tooltipWidth) > windowWidth) {
						myLeft = offsetLeft - offsetX - tooltipWidth - 12;
						tooltipster.data('arrow-reposition', 'right');
					}
				}
				
				// if arrow is set true, style it and append it
				if (object.options.arrow == true) {
	
					var arrowClass = 'tooltipster-arrow-' + object.options.position;
					
					// set color of the arrow
					if(object.options.arrowColor.length < 1) {
						var arrowColor = tooltipster.css('background-color');
					}
					else {
						var arrowColor = object.options.arrowColor;
					}
					
					// if the tooltip was going off the page and had to re-adjust, we need to update the arrow's position
					var arrowReposition = tooltipster.data('arrow-reposition');
					if (!arrowReposition) {
						arrowReposition = '';
					}
					else if (arrowReposition == 'left') {
						arrowClass = 'tooltipster-arrow-right';
						arrowReposition = '';
					}
					else if (arrowReposition == 'right') {
						arrowClass = 'tooltipster-arrow-left';
						arrowReposition = '';
					}
					else {
						arrowReposition = 'left:'+ Math.round(arrowReposition) +'px;';
					}
										
					// building the logic to create the border around the arrow of the tooltip
					if ((object.options.position == 'top') || (object.options.position == 'top-left') || (object.options.position == 'top-right')) {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-bottom-width'));
						var tooltipBorderColor = tooltipster.css('border-bottom-color');
					}
					else if ((object.options.position == 'bottom') || (object.options.position == 'bottom-left') || (object.options.position == 'bottom-right')) {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-top-width'));
						var tooltipBorderColor = tooltipster.css('border-top-color');
					}
					else if (object.options.position == 'left') {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-right-width'));
						var tooltipBorderColor = tooltipster.css('border-right-color');
					}
					else if (object.options.position == 'right') {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-left-width'));
						var tooltipBorderColor = tooltipster.css('border-left-color');
					}
					else {
						var tooltipBorderWidth = parseFloat(tooltipster.css('border-bottom-width'));
						var tooltipBorderColor = tooltipster.css('border-bottom-color');
					}
					
					if (tooltipBorderWidth > 1) {
						tooltipBorderWidth++;
					}
					
					var arrowBorder = '';
					if (tooltipBorderWidth !== 0) {
						var arrowBorderSize = '';
						var arrowBorderColor = 'border-color: '+ tooltipBorderColor +';';
						if (arrowClass.indexOf('bottom') !== -1) {
							arrowBorderSize = 'margin-top: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('top') !== -1) {
							arrowBorderSize = 'margin-bottom: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('left') !== -1) {
							arrowBorderSize = 'margin-right: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						else if (arrowClass.indexOf('right') !== -1) {
							arrowBorderSize = 'margin-left: -'+ Math.round(tooltipBorderWidth) +'px;';
						}
						arrowBorder = '<span class="tooltipster-arrow-border" style="'+ arrowBorderSize +' '+ arrowBorderColor +';"></span>';
					}
					
					// if the arrow already exists, remove and replace it
					tooltipster.find('.tooltipster-arrow').remove();
					
					// build out the arrow and append it		
					arrowConstruct = '<div class="'+ arrowClass +' tooltipster-arrow" style="'+ arrowReposition +'">'+ arrowBorder +'<span style="border-color:'+ arrowColor +';"></span></div>';
					tooltipster.append(arrowConstruct);
				}
				
				// position the tooltip
				tooltipster.css({'top': Math.round(myTop) + 'px', 'left': Math.round(myLeft) + 'px'});
				
				// if we had to change the position of the tooltip so it wouldn't go off screen, reset it
				if (resetPosition !== undefined) {
					object.options.position = resetPosition;
				}
			}
		}
	};
		
	$.fn[pluginName] = function (options) {
		// better API name spacing by glebtv
		if (typeof options === 'string') {
			var $t = this;
			var newContent = arguments[1];
			
			// if we're calling a container to interact with API's of tooltips inside it - select all those tooltip origins first
			if ($t.data('plugin_tooltipster') == undefined) {
				var query = $t.find('*');
				$t = $();
				query.each(function() {
					if ($(this).data('plugin_tooltipster') !== undefined) {
						$t.push($(this));
					}
				});
			}
			
			$t.each(function() {
				switch (options.toLowerCase()) {
					case 'show':
						$(this).data('plugin_tooltipster').showTooltip();
						break;
	
					case 'hide':
						$(this).data('plugin_tooltipster').hideTooltip();
						break;
					
					case 'disable':
						$(this).addClass('tooltipster-disable');
						break;
					
					case 'enable':
						$(this).removeClass('tooltipster-disable');
						break;
	
					case 'destroy':
						$(this).data('plugin_tooltipster').hideTooltip();
						$(this).data('plugin_tooltipster', '').attr('title', $t.data('tooltipsterContent')).data('tooltipsterContent', '').data('plugin_tooltipster', '').off('mouseenter.tooltipster mouseleave.tooltipster click.tooltipster').unbind('touchstart');
						break;
	
					case 'update':						
						if ($(this).data('tooltipsterIcon') == undefined) {
							$(this).data('tooltipsterContent', newContent);
						}
						
						else {
							var $this = $(this).data('tooltipsterIcon');
							$this.data('tooltipsterContent', newContent);
						}
						
						break;
						
					case 'reposition':
						$(this).data('plugin_tooltipster').positionTooltip();
						break;
				}
			});
			
			return this;			
		}
		
		// attach a tooltipster object to each element if it doesn't already have one
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin( this, options ));
			}
			
			var thisOptions = $(this).data('plugin_tooltipster').options;
				
			if ((thisOptions.iconDesktop == true) && (!touchDevice) || ((thisOptions.iconTouch == true) && (touchDevice))) {
				var transferObject = $(this).data('plugin_tooltipster');
				$(this).next().data('plugin_tooltipster', transferObject);
			}	
		});
	};
	
	// hide tooltips on orientation change
	if (touchDevice) {
		window.addEventListener("orientationchange", function() {
			if ($('.tooltipster-base').length > 0) {
				$('.tooltipster-base').each(function() {
					var origin = $(this).data('origin');
					origin.data('plugin_tooltipster').hideTooltip();
				});
			}
	  	}, false);
  	}
  	
  	// on window resize, reposition and open tooltips
  	$(window).on('resize.tooltipster', function() {
	  	var origin = $('.tooltipster-base').data('origin');
	  		  	
	  	if ((origin !== null) && (origin !== undefined)) {
	  		origin.tooltipster('reposition');
	  	}
  	});
  	

})( jQuery, window, document );
/*! nanoScrollerJS - v0.7.2
* http://jamesflorentino.github.com/nanoScrollerJS/
* Copyright (c) 2013 James Florentino; Licensed MIT */


(function($, window, document) {
  "use strict";

  var BROWSER_IS_IE7, BROWSER_SCROLLBAR_WIDTH, DOMSCROLL, DOWN, DRAG, KEYDOWN, KEYUP, MOUSEDOWN, MOUSEMOVE, MOUSEUP, MOUSEWHEEL, NanoScroll, PANEDOWN, RESIZE, SCROLL, SCROLLBAR, TOUCHMOVE, UP, WHEEL, defaults, getBrowserScrollbarWidth;
  defaults = {
    /**
      a classname for the pane element.
      @property paneClass
      @type String
      @default 'pane'
    */

    paneClass: 'pane',
    /**
      a classname for the slider element.
      @property sliderClass
      @type String
      @default 'slider'
    */

    sliderClass: 'slider',
    /**
      a classname for the content element.
      @property contentClass
      @type String
      @default 'content'
    */

    contentClass: 'content',
    /**
      a setting to enable native scrolling in iOS devices.
      @property iOSNativeScrolling
      @type Boolean
      @default false
    */

    iOSNativeScrolling: false,
    /**
      a setting to prevent the rest of the page being
      scrolled when user scrolls the `.content` element.
      @property preventPageScrolling
      @type Boolean
      @default false
    */

    preventPageScrolling: false,
    /**
      a setting to disable binding to the resize event.
      @property disableResize
      @type Boolean
      @default false
    */

    disableResize: false,
    /**
      a setting to make the scrollbar always visible.
      @property alwaysVisible
      @type Boolean
      @default false
    */

    alwaysVisible: false,
    /**
      a default timeout for the `flash()` method.
      @property flashDelay
      @type Number
      @default 1500
    */

    flashDelay: 1500,
    /**
      a minimum height for the `.slider` element.
      @property sliderMinHeight
      @type Number
      @default 20
    */

    sliderMinHeight: 20,
    /**
      a maximum height for the `.slider` element.
      @property sliderMaxHeight
      @type Number
      @default null
    */

    sliderMaxHeight: null
  };
  /**
    @property SCROLLBAR
    @type String
    @static
    @final
    @private
  */

  SCROLLBAR = 'scrollbar';
  /**
    @property SCROLL
    @type String
    @static
    @final
    @private
  */

  SCROLL = 'scroll';
  /**
    @property MOUSEDOWN
    @type String
    @final
    @private
  */

  MOUSEDOWN = 'mousedown';
  /**
    @property MOUSEMOVE
    @type String
    @static
    @final
    @private
  */

  MOUSEMOVE = 'mousemove';
  /**
    @property MOUSEWHEEL
    @type String
    @final
    @private
  */

  MOUSEWHEEL = 'mousewheel';
  /**
    @property MOUSEUP
    @type String
    @static
    @final
    @private
  */

  MOUSEUP = 'mouseup';
  /**
    @property RESIZE
    @type String
    @final
    @private
  */

  RESIZE = 'resize';
  /**
    @property DRAG
    @type String
    @static
    @final
    @private
  */

  DRAG = 'drag';
  /**
    @property UP
    @type String
    @static
    @final
    @private
  */

  UP = 'up';
  /**
    @property PANEDOWN
    @type String
    @static
    @final
    @private
  */

  PANEDOWN = 'panedown';
  /**
    @property DOMSCROLL
    @type String
    @static
    @final
    @private
  */

  DOMSCROLL = 'DOMMouseScroll';
  /**
    @property DOWN
    @type String
    @static
    @final
    @private
  */

  DOWN = 'down';
  /**
    @property WHEEL
    @type String
    @static
    @final
    @private
  */

  WHEEL = 'wheel';
  /**
    @property KEYDOWN
    @type String
    @static
    @final
    @private
  */

  KEYDOWN = 'keydown';
  /**
    @property KEYUP
    @type String
    @static
    @final
    @private
  */

  KEYUP = 'keyup';
  /**
    @property TOUCHMOVE
    @type String
    @static
    @final
    @private
  */

  TOUCHMOVE = 'touchmove';
  /**
    @property BROWSER_IS_IE7
    @type Boolean
    @static
    @final
    @private
  */

  BROWSER_IS_IE7 = window.navigator.appName === 'Microsoft Internet Explorer' && /msie 7./i.test(window.navigator.appVersion) && window.ActiveXObject;
  /**
    @property BROWSER_SCROLLBAR_WIDTH
    @type Number
    @static
    @default null
    @private
  */

  BROWSER_SCROLLBAR_WIDTH = null;
  /**
    Returns browser's native scrollbar width
    @method getBrowserScrollbarWidth
    @return {Number} the scrollbar width in pixels
    @static
    @private
  */

  getBrowserScrollbarWidth = function() {
    var outer, outerStyle, scrollbarWidth;
    outer = document.createElement('div');
    outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.width = '100px';
    outerStyle.height = '100px';
    outerStyle.overflow = SCROLL;
    outerStyle.top = '-9999px';
    document.body.appendChild(outer);
    scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  };
  /**
    @class NanoScroll
    @param element {HTMLElement|Node} the main element
    @param options {Object} nanoScroller's options
    @constructor
  */

  NanoScroll = (function() {

    function NanoScroll(el, options) {
      this.el = el;
      this.options = options;
      BROWSER_SCROLLBAR_WIDTH || (BROWSER_SCROLLBAR_WIDTH = getBrowserScrollbarWidth());
      this.$el = $(this.el);
      this.doc = $(document);
      this.win = $(window);
      this.$content = this.$el.children("." + options.contentClass);
      this.$content.attr('tabindex', 0);
      this.content = this.$content[0];
      if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) {
        this.nativeScrolling();
      } else {
        this.generate();
      }
      this.createEvents();
      this.addEvents();
      this.reset();
    }

    /**
      Prevents the rest of the page being scrolled
      when user scrolls the `.content` element.
      @method preventScrolling
      @param event {Event}
      @param direction {String} Scroll direction (up or down)
      @private
    */


    NanoScroll.prototype.preventScrolling = function(e, direction) {
      if (!this.isActive) {
        return;
      }
      if (e.type === DOMSCROLL) {
        if (direction === DOWN && e.originalEvent.detail > 0 || direction === UP && e.originalEvent.detail < 0) {
          e.preventDefault();
        }
      } else if (e.type === MOUSEWHEEL) {
        if (!e.originalEvent || !e.originalEvent.wheelDelta) {
          return;
        }
        if (direction === DOWN && e.originalEvent.wheelDelta < 0 || direction === UP && e.originalEvent.wheelDelta > 0) {
          e.preventDefault();
        }
      }
    };

    /**
      Enable iOS native scrolling
    */


    NanoScroll.prototype.nativeScrolling = function() {
      this.$content.css({
        WebkitOverflowScrolling: 'touch'
      });
      this.iOSNativeScrolling = true;
      this.isActive = true;
    };

    /**
      Updates those nanoScroller properties that
      are related to current scrollbar position.
      @method updateScrollValues
      @private
    */


    NanoScroll.prototype.updateScrollValues = function() {
      var content;
      content = this.content;
      this.maxScrollTop = content.scrollHeight - content.clientHeight;
      this.contentScrollTop = content.scrollTop;
      if (!this.iOSNativeScrolling) {
        this.maxSliderTop = this.paneHeight - this.sliderHeight;
        this.sliderTop = this.contentScrollTop * this.maxSliderTop / this.maxScrollTop;
      }
    };

    /**
      Creates event related methods
      @method createEvents
      @private
    */


    NanoScroll.prototype.createEvents = function() {
      var _this = this;
      this.events = {
        down: function(e) {
          _this.isBeingDragged = true;
          _this.offsetY = e.pageY - _this.slider.offset().top;
          _this.pane.addClass('active');
          _this.doc.bind(MOUSEMOVE, _this.events[DRAG]).bind(MOUSEUP, _this.events[UP]);
          return false;
        },
        drag: function(e) {
          _this.sliderY = e.pageY - _this.$el.offset().top - _this.offsetY;
          _this.scroll();
          _this.updateScrollValues();
          if (_this.contentScrollTop >= _this.maxScrollTop) {
            _this.$el.trigger('scrollend');
          } else if (_this.contentScrollTop === 0) {
            _this.$el.trigger('scrolltop');
          }
          return false;
        },
        up: function(e) {
          _this.isBeingDragged = false;
          _this.pane.removeClass('active');
          _this.doc.unbind(MOUSEMOVE, _this.events[DRAG]).unbind(MOUSEUP, _this.events[UP]);
          return false;
        },
        resize: function(e) {
          _this.reset();
        },
        panedown: function(e) {
          _this.sliderY = (e.offsetY || e.originalEvent.layerY) - (_this.sliderHeight * 0.5);
          _this.scroll();
          _this.events.down(e);
          return false;
        },
        scroll: function(e) {
          if (_this.isBeingDragged) {
            return;
          }
          _this.updateScrollValues();
          if (!_this.iOSNativeScrolling) {
            _this.sliderY = _this.sliderTop;
            _this.slider.css({
              top: _this.sliderTop
            });
          }
          if (e == null) {
            return;
          }
          if (_this.contentScrollTop >= _this.maxScrollTop) {
            if (_this.options.preventPageScrolling) {
              _this.preventScrolling(e, DOWN);
            }
            _this.$el.trigger('scrollend');
          } else if (_this.contentScrollTop === 0) {
            if (_this.options.preventPageScrolling) {
              _this.preventScrolling(e, UP);
            }
            _this.$el.trigger('scrolltop');
          }
        },
        wheel: function(e) {
          if (e == null) {
            return;
          }
          _this.sliderY += -e.wheelDeltaY || -e.delta;
          _this.scroll();
          return false;
        }
      };
    };

    /**
      Adds event listeners with jQuery.
      @method addEvents
      @private
    */


    NanoScroll.prototype.addEvents = function() {
      var events;
      this.removeEvents();
      events = this.events;
      if (!this.options.disableResize) {
        this.win.bind(RESIZE, events[RESIZE]);
      }
      if (!this.iOSNativeScrolling) {
        this.slider.bind(MOUSEDOWN, events[DOWN]);
        this.pane.bind(MOUSEDOWN, events[PANEDOWN]).bind("" + MOUSEWHEEL + " " + DOMSCROLL, events[WHEEL]);
      }
      this.$content.bind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
    };

    /**
      Removes event listeners with jQuery.
      @method removeEvents
      @private
    */


    NanoScroll.prototype.removeEvents = function() {
      var events;
      events = this.events;
      this.win.unbind(RESIZE, events[RESIZE]);
      if (!this.iOSNativeScrolling) {
        this.slider.unbind();
        this.pane.unbind();
      }
      this.$content.unbind("" + SCROLL + " " + MOUSEWHEEL + " " + DOMSCROLL + " " + TOUCHMOVE, events[SCROLL]);
    };

    /**
      Generates nanoScroller's scrollbar and elements for it.
      @method generate
      @chainable
      @private
    */


    NanoScroll.prototype.generate = function() {
      var contentClass, cssRule, options, paneClass, sliderClass;
      options = this.options;
      paneClass = options.paneClass, sliderClass = options.sliderClass, contentClass = options.contentClass;
      if (!this.$el.find("" + paneClass).length && !this.$el.find("" + sliderClass).length) {
        this.$el.append("<div class=\"" + paneClass + "\"><div class=\"" + sliderClass + "\" /></div>");
      }
      this.pane = this.$el.children("." + paneClass);
      this.slider = this.pane.find("." + sliderClass);
      if (BROWSER_SCROLLBAR_WIDTH) {
        cssRule = this.$el.css('direction') === 'rtl' ? {
          left: -BROWSER_SCROLLBAR_WIDTH
        } : {
          right: -BROWSER_SCROLLBAR_WIDTH
        };
        this.$el.addClass('has-scrollbar');
      }
      if (cssRule != null) {
        this.$content.css(cssRule);
      }
      return this;
    };

    /**
      @method restore
      @private
    */


    NanoScroll.prototype.restore = function() {
      this.stopped = false;
      this.pane.show();
      this.addEvents();
    };

    /**
      Resets nanoScroller's scrollbar.
      @method reset
      @chainable
      @example
          $(".nano").nanoScroller();
    */


    NanoScroll.prototype.reset = function() {
      var content, contentHeight, contentStyle, contentStyleOverflowY, paneBottom, paneHeight, paneOuterHeight, paneTop, sliderHeight;
      if (this.iOSNativeScrolling) {
        this.contentHeight = this.content.scrollHeight;
        return;
      }
      if (!this.$el.find("." + this.options.paneClass).length) {
        this.generate().stop();
      }
      if (this.stopped) {
        this.restore();
      }
      content = this.content;
      contentStyle = content.style;
      contentStyleOverflowY = contentStyle.overflowY;
      if (BROWSER_IS_IE7) {
        this.$content.css({
          height: this.$content.height()
        });
      }
      contentHeight = content.scrollHeight + BROWSER_SCROLLBAR_WIDTH;
      paneHeight = this.pane.outerHeight();
      paneTop = parseInt(this.pane.css('top'), 10);
      paneBottom = parseInt(this.pane.css('bottom'), 10);
      paneOuterHeight = paneHeight + paneTop + paneBottom;
      sliderHeight = Math.round(paneOuterHeight / contentHeight * paneOuterHeight);
      if (sliderHeight < this.options.sliderMinHeight) {
        sliderHeight = this.options.sliderMinHeight;
      } else if ((this.options.sliderMaxHeight != null) && sliderHeight > this.options.sliderMaxHeight) {
        sliderHeight = this.options.sliderMaxHeight;
      }
      if (contentStyleOverflowY === SCROLL && contentStyle.overflowX !== SCROLL) {
        sliderHeight += BROWSER_SCROLLBAR_WIDTH;
      }
      this.maxSliderTop = paneOuterHeight - sliderHeight;
      this.contentHeight = contentHeight;
      this.paneHeight = paneHeight;
      this.paneOuterHeight = paneOuterHeight;
      this.sliderHeight = sliderHeight;
      this.slider.height(sliderHeight);
      this.events.scroll();
      this.pane.show();
      this.isActive = true;
      if ((content.scrollHeight === content.clientHeight) || (this.pane.outerHeight(true) >= content.scrollHeight && contentStyleOverflowY !== SCROLL)) {
        this.pane.hide();
        this.isActive = false;
      } else if (this.el.clientHeight === content.scrollHeight && contentStyleOverflowY === SCROLL) {
        this.slider.hide();
      } else {
        this.slider.show();
      }
      this.pane.css({
        opacity: (this.options.alwaysVisible ? 1 : ''),
        visibility: (this.options.alwaysVisible ? 'visible' : '')
      });
      return this;
    };

    /**
      @method scroll
      @private
      @example
          $(".nano").nanoScroller({ scroll: 'top' });
    */


    NanoScroll.prototype.scroll = function() {
      if (!this.isActive) {
        return;
      }
      this.sliderY = Math.max(0, this.sliderY);
      this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
      this.$content.scrollTop((this.paneHeight - this.contentHeight + BROWSER_SCROLLBAR_WIDTH) * this.sliderY / this.maxSliderTop * -1);
      if (!this.iOSNativeScrolling) {
        this.slider.css({
          top: this.sliderY
        });
      }
      return this;
    };

    /**
      Scroll at the bottom with an offset value
      @method scrollBottom
      @param offsetY {Number}
      @chainable
      @example
          $(".nano").nanoScroller({ scrollBottom: value });
    */


    NanoScroll.prototype.scrollBottom = function(offsetY) {
      if (!this.isActive) {
        return;
      }
      this.reset();
      this.$content.scrollTop(this.contentHeight - this.$content.height() - offsetY).trigger(MOUSEWHEEL);
      return this;
    };

    /**
      Scroll at the top with an offset value
      @method scrollTop
      @param offsetY {Number}
      @chainable
      @example
          $(".nano").nanoScroller({ scrollTop: value });
    */


    NanoScroll.prototype.scrollTop = function(offsetY) {
      if (!this.isActive) {
        return;
      }
      this.reset();
      this.$content.scrollTop(+offsetY).trigger(MOUSEWHEEL);
      return this;
    };

    /**
      Scroll to an element
      @method scrollTo
      @param node {Node} A node to scroll to.
      @chainable
      @example
          $(".nano").nanoScroller({ scrollTo: $('#a_node') });
    */


    NanoScroll.prototype.scrollTo = function(node) {
      if (!this.isActive) {
        return;
      }
      this.reset();
      this.scrollTop($(node).get(0).offsetTop);
      return this;
    };

    /**
      To stop the operation.
      This option will tell the plugin to disable all event bindings and hide the gadget scrollbar from the UI.
      @method stop
      @chainable
      @example
          $(".nano").nanoScroller({ stop: true });
    */


    NanoScroll.prototype.stop = function() {
      this.stopped = true;
      this.removeEvents();
      this.pane.hide();
      return this;
    };

    /**
      To flash the scrollbar gadget for an amount of time defined in plugin settings (defaults to 1,5s).
      Useful if you want to show the user (e.g. on pageload) that there is more content waiting for him.
      @method flash
      @chainable
      @example
          $(".nano").nanoScroller({ flash: true });
    */


    NanoScroll.prototype.flash = function() {
      var _this = this;
      if (!this.isActive) {
        return;
      }
      this.reset();
      this.pane.addClass('flashed');
      setTimeout(function() {
        _this.pane.removeClass('flashed');
      }, this.options.flashDelay);
      return this;
    };

    return NanoScroll;

  })();
  $.fn.nanoScroller = function(settings) {
    return this.each(function() {
      var options, scrollbar;
      if (!(scrollbar = this.nanoscroller)) {
        options = $.extend({}, defaults, settings);
        this.nanoscroller = scrollbar = new NanoScroll(this, options);
      }
      if (settings && typeof settings === "object") {
        $.extend(scrollbar.options, settings);
        if (settings.scrollBottom) {
          return scrollbar.scrollBottom(settings.scrollBottom);
        }
        if (settings.scrollTop) {
          return scrollbar.scrollTop(settings.scrollTop);
        }
        if (settings.scrollTo) {
          return scrollbar.scrollTo(settings.scrollTo);
        }
        if (settings.scroll === 'bottom') {
          return scrollbar.scrollBottom(0);
        }
        if (settings.scroll === 'top') {
          return scrollbar.scrollTop(0);
        }
        if (settings.scroll && settings.scroll instanceof $) {
          return scrollbar.scrollTo(settings.scroll);
        }
        if (settings.stop) {
          return scrollbar.stop();
        }
        if (settings.flash) {
          return scrollbar.flash();
        }
      }
      return scrollbar.reset();
    });
  };
})(jQuery, window, document);

(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 500,
    initialRate: .03,
    minTime: 500,
    ghostTime: 500,
    maxProgressPerFrame: 10,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: false
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  if (window.Pace == null) {
    window.Pace = {};
  }

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace('pace-done', '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, progressStr;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      el.children[0].style.width = "" + this.progress + "%";
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, val, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        val = from.prototype[key];
        if ((to[key] == null) && typeof val !== 'function') {
          _results.push(to[key] = val);
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        extendNative(window.XDomainRequest, _XDomainRequest);
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          req = new _WebSocket(url, protocols);
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        extendNative(window.WebSocket, _WebSocket);
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type;
    type = _arg.type, request = _arg.request;
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type;
      type = _arg.type, request = _arg.request;
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        });
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          });
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        });
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    Pace.running = true;
    bar.render();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, start, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      start = now();
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.min(options.minTime, now() - start)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (typeof define === 'function' && define.amd) {
    define(function() {
      return Pace;
    });
  } else if (typeof exports === 'object') {
    module.exports = Pace;
  } else {
    if (options.startOnPageLoad) {
      Pace.start();
    }
  }

}).call(this);

(function(e,t,n){(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(jQuery&&!jQuery.fn.sparkline){e(jQuery)}})(function(r){"use strict";var i={},s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j=0;s=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:false,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:false,enableHighlight:true,highlightLighten:1.4,tooltipSkipNull:true,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:false,numberFormatter:false,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:false,disableInteraction:false},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:n,normalRangeMax:n,normalRangeColor:"#ccc",drawNormalOnTop:false,chartRangeMin:n,chartRangeMax:n,chartRangeMinX:n,chartRangeMaxX:n,tooltipFormat:new u('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:n,nullColor:n,zeroAxis:true,barWidth:4,barSpacing:1,chartRangeMax:n,chartRangeMin:n,chartRangeClip:false,colorMap:n,tooltipFormat:new u('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new u('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:n,thresholdValue:0,chartRangeMax:n,chartRangeMin:n,chartRangeClip:false,tooltipFormat:new u("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:n,tooltipFormat:new u("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new u('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:false,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:true,outlierIQR:1.5,spotRadius:1.5,target:n,targetColor:"#4a2",chartRangeMax:n,chartRangeMin:n,tooltipFormat:new u("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}};O=".jqstooltip { "+"position: absolute;"+"left: 0px;"+"top: 0px;"+"visibility: hidden;"+"background: rgb(0, 0, 0) transparent;"+"background-color: rgba(0,0,0,0.6);"+"filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);"+'-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";'+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"white-space: nowrap;"+"padding: 5px;"+"border: 1px solid white;"+"z-index: 10000;"+"}"+".jqsfield { "+"color: white;"+"font: 10px arial, san serif;"+"text-align: left;"+"}";o=function(){var e,t;e=function(){this.init.apply(this,arguments)};if(arguments.length>1){if(arguments[0]){e.prototype=r.extend(new arguments[0],arguments[arguments.length-1]);e._super=arguments[0].prototype}else{e.prototype=arguments[arguments.length-1]}if(arguments.length>2){t=Array.prototype.slice.call(arguments,1,-1);t.unshift(e.prototype);r.extend.apply(r,t)}}else{e.prototype=arguments[0]}e.prototype.cls=e;return e};r.SPFormatClass=u=o({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(e,t){this.format=e;this.fclass=t},render:function(e,t,r){var i=this,s=e,o,u,a,f,l;return this.format.replace(this.fre,function(){var e;u=arguments[1];a=arguments[3];o=i.precre.exec(u);if(o){l=o[2];u=o[1]}else{l=false}f=s[u];if(f===n){return""}if(a&&t&&t[a]){e=t[a];if(e.get){return t[a].get(f)||f}else{return t[a][f]||f}}if(p(f)){if(r.get("numberFormatter")){f=r.get("numberFormatter")(f)}else{f=y(f,l,r.get("numberDigitGroupCount"),r.get("numberDigitGroupSep"),r.get("numberDecimalMark"))}}return f})}});r.spformat=function(e,t){return new u(e,t)};a=function(e,t,n){if(e<t){return t}if(e>n){return n}return e};f=function(e,n){var r;if(n===2){r=t.floor(e.length/2);return e.length%2?e[r]:(e[r-1]+e[r])/2}else{if(e.length%2){r=(e.length*n+n)/4;return r%1?(e[t.floor(r)]+e[t.floor(r)-1])/2:e[r-1]}else{r=(e.length*n+2)/4;return r%1?(e[t.floor(r)]+e[t.floor(r)-1])/2:e[r-1]}}};l=function(e){var t;switch(e){case"undefined":e=n;break;case"null":e=null;break;case"true":e=true;break;case"false":e=false;break;default:t=parseFloat(e);if(e==t){e=t}}return e};c=function(e){var t,n=[];for(t=e.length;t--;){n[t]=l(e[t])}return n};h=function(e,t){var n,r,i=[];for(n=0,r=e.length;n<r;n++){if(e[n]!==t){i.push(e[n])}}return i};p=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};y=function(e,t,n,i,s){var o,u;e=(t===false?parseFloat(e).toString():e.toFixed(t)).split("");o=(o=r.inArray(".",e))<0?e.length:o;if(o<e.length){e[o]=s}for(u=o-n;u>0;u-=n){e.splice(u,0,i)}return e.join("")};d=function(e,t,n){var r;for(r=t.length;r--;){if(n&&t[r]===null)continue;if(t[r]!==e){return false}}return true};v=function(e){var t=0,n;for(n=e.length;n--;){t+=typeof e[n]==="number"?e[n]:0}return t};g=function(e){return r.isArray(e)?e:[e]};m=function(t){var n;if(e.createStyleSheet){e.createStyleSheet().cssText=t}else{n=e.createElement("style");n.type="text/css";e.getElementsByTagName("head")[0].appendChild(n);n[typeof e.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=t}};r.fn.simpledraw=function(t,i,s,o){var u,a;if(s&&(u=this.data("_jqs_vcanvas"))){return u}if(r.fn.sparkline.canvas===false){return false}else if(r.fn.sparkline.canvas===n){var f=e.createElement("canvas");if(!!(f.getContext&&f.getContext("2d"))){r.fn.sparkline.canvas=function(e,t,n,r){return new P(e,t,n,r)}}else if(e.namespaces&&!e.namespaces.v){e.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML");r.fn.sparkline.canvas=function(e,t,n,r){return new H(e,t,n)}}else{r.fn.sparkline.canvas=false;return false}}if(t===n){t=r(this).innerWidth()}if(i===n){i=r(this).innerHeight()}u=r.fn.sparkline.canvas(t,i,this,o);a=r(this).data("_jqs_mhandler");if(a){a.registerCanvas(u)}return u};r.fn.cleardraw=function(){var e=this.data("_jqs_vcanvas");if(e){e.reset()}};r.RangeMapClass=b=o({init:function(e){var t,n,r=[];for(t in e){if(e.hasOwnProperty(t)&&typeof t==="string"&&t.indexOf(":")>-1){n=t.split(":");n[0]=n[0].length===0?-Infinity:parseFloat(n[0]);n[1]=n[1].length===0?Infinity:parseFloat(n[1]);n[2]=e[t];r.push(n)}}this.map=e;this.rangelist=r||false},get:function(e){var t=this.rangelist,r,i,s;if((s=this.map[e])!==n){return s}if(t){for(r=t.length;r--;){i=t[r];if(i[0]<=e&&i[1]>=e){return i[2]}}}return n}});r.range_map=function(e){return new b(e)};w=o({init:function(e,t){var n=r(e);this.$el=n;this.options=t;this.currentPageX=0;this.currentPageY=0;this.el=e;this.splist=[];this.tooltip=null;this.over=false;this.displayTooltips=!t.get("disableTooltips");this.highlightEnabled=!t.get("disableHighlight")},registerSparkline:function(e){this.splist.push(e);if(this.over){this.updateDisplay()}},registerCanvas:function(e){var t=r(e.canvas);this.canvas=e;this.$canvas=t;t.mouseenter(r.proxy(this.mouseenter,this));t.mouseleave(r.proxy(this.mouseleave,this));t.click(r.proxy(this.mouseclick,this))},reset:function(e){this.splist=[];if(this.tooltip&&e){this.tooltip.remove();this.tooltip=n}},mouseclick:function(e){var t=r.Event("sparklineClick");t.originalEvent=e;t.sparklines=this.splist;this.$el.trigger(t)},mouseenter:function(t){r(e.body).unbind("mousemove.jqs");r(e.body).bind("mousemove.jqs",r.proxy(this.mousemove,this));this.over=true;this.currentPageX=t.pageX;this.currentPageY=t.pageY;this.currentEl=t.target;if(!this.tooltip&&this.displayTooltips){this.tooltip=new E(this.options);this.tooltip.updatePosition(t.pageX,t.pageY)}this.updateDisplay()},mouseleave:function(){r(e.body).unbind("mousemove.jqs");var t=this.splist,n=t.length,i=false,s,o;this.over=false;this.currentEl=null;if(this.tooltip){this.tooltip.remove();this.tooltip=null}for(o=0;o<n;o++){s=t[o];if(s.clearRegionHighlight()){i=true}}if(i){this.canvas.render()}},mousemove:function(e){this.currentPageX=e.pageX;this.currentPageY=e.pageY;this.currentEl=e.target;if(this.tooltip){this.tooltip.updatePosition(e.pageX,e.pageY)}this.updateDisplay()},updateDisplay:function(){var e=this.splist,t=e.length,n=false,i=this.$canvas.offset(),s=this.currentPageX-i.left,o=this.currentPageY-i.top,u,a,f,l,c;if(!this.over){return}for(f=0;f<t;f++){a=e[f];l=a.setRegionHighlight(this.currentEl,s,o);if(l){n=true}}if(n){c=r.Event("sparklineRegionChange");c.sparklines=this.splist;this.$el.trigger(c);if(this.tooltip){u="";for(f=0;f<t;f++){a=e[f];u+=a.getCurrentRegionTooltip()}this.tooltip.setContent(u)}if(!this.disableHighlight){this.canvas.render()}}if(l===null){this.mouseleave()}}});E=o({sizeStyle:"position: static !important;"+"display: block !important;"+"visibility: hidden !important;"+"float: left !important;",init:function(t){var n=t.get("tooltipClassname","jqstooltip"),i=this.sizeStyle,s;this.container=t.get("tooltipContainer")||e.body;this.tooltipOffsetX=t.get("tooltipOffsetX",10);this.tooltipOffsetY=t.get("tooltipOffsetY",12);r("#jqssizetip").remove();r("#jqstooltip").remove();this.sizetip=r("<div/>",{id:"jqssizetip",style:i,"class":n});this.tooltip=r("<div/>",{id:"jqstooltip","class":n}).appendTo(this.container);s=this.tooltip.offset();this.offsetLeft=s.left;this.offsetTop=s.top;this.hidden=true;r(window).unbind("resize.jqs scroll.jqs");r(window).bind("resize.jqs scroll.jqs",r.proxy(this.updateWindowDims,this));this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=r(window).scrollTop();this.scrollLeft=r(window).scrollLeft();this.scrollRight=this.scrollLeft+r(window).width();this.updatePosition()},getSize:function(e){this.sizetip.html(e).appendTo(this.container);this.width=this.sizetip.width()+1;this.height=this.sizetip.height();this.sizetip.remove()},setContent:function(e){if(!e){this.tooltip.css("visibility","hidden");this.hidden=true;return}this.getSize(e);this.tooltip.html(e).css({width:this.width,height:this.height,visibility:"visible"});if(this.hidden){this.hidden=false;this.updatePosition()}},updatePosition:function(e,t){if(e===n){if(this.mousex===n){return}e=this.mousex-this.offsetLeft;t=this.mousey-this.offsetTop}else{this.mousex=e=e-this.offsetLeft;this.mousey=t=t-this.offsetTop}if(!this.height||!this.width||this.hidden){return}t-=this.height+this.tooltipOffsetY;e+=this.tooltipOffsetX;if(t<this.scrollTop){t=this.scrollTop}if(e<this.scrollLeft){e=this.scrollLeft}else if(e+this.width>this.scrollRight){e=this.scrollRight-this.width}this.tooltip.css({left:e,top:t})},remove:function(){this.tooltip.remove();this.sizetip.remove();this.sizetip=this.tooltip=n;r(window).unbind("resize.jqs scroll.jqs")}});M=function(){m(O)};r(M);B=[];r.fn.sparkline=function(t,i){return this.each(function(){var s=new r.fn.sparkline.options(this,i),o=r(this),u,a;u=function(){var i,u,a,f,l,c,h;if(t==="html"||t===n){h=this.getAttribute(s.get("tagValuesAttribute"));if(h===n||h===null){h=o.html()}i=h.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else{i=t}u=s.get("width")==="auto"?i.length*s.get("defaultPixelsPerValue"):s.get("width");if(s.get("height")==="auto"){if(!s.get("composite")||!r.data(this,"_jqs_vcanvas")){f=e.createElement("span");f.innerHTML="a";o.html(f);a=r(f).innerHeight()||r(f).height();r(f).remove();f=null}}else{a=s.get("height")}if(!s.get("disableInteraction")){l=r.data(this,"_jqs_mhandler");if(!l){l=new w(this,s);r.data(this,"_jqs_mhandler",l)}else if(!s.get("composite")){l.reset()}}else{l=false}if(s.get("composite")&&!r.data(this,"_jqs_vcanvas")){if(!r.data(this,"_jqs_errnotify")){alert("Attempted to attach a composite sparkline to an element with no existing sparkline");r.data(this,"_jqs_errnotify",true)}return}c=new(r.fn.sparkline[s.get("type")])(this,i,s,u,a);c.render();if(l){l.registerSparkline(c)}};if(r(this).html()&&!s.get("disableHiddenCheck")&&r(this).is(":hidden")||!r(this).parents("body").length){if(!s.get("composite")&&r.data(this,"_jqs_pending")){for(a=B.length;a;a--){if(B[a-1][0]==this){B.splice(a-1,1)}}}B.push([this,u]);r.data(this,"_jqs_pending",true)}else{u.call(this)}})};r.fn.sparkline.defaults=s();r.sparkline_display_visible=function(){var e,t,n;var i=[];for(t=0,n=B.length;t<n;t++){e=B[t][0];if(r(e).is(":visible")&&!r(e).parents().is(":hidden")){B[t][1].call(e);r.data(B[t][0],"_jqs_pending",false);i.push(t)}else if(!r(e).closest("html").length&&!r.data(e,"_jqs_pending")){r.data(B[t][0],"_jqs_pending",false);i.push(t)}}for(t=i.length;t;t--){B.splice(i[t-1],1)}};r.fn.sparkline.options=o({init:function(e,t){var n,s,o,u;this.userOptions=t=t||{};this.tag=e;this.tagValCache={};s=r.fn.sparkline.defaults;o=s.common;this.tagOptionsPrefix=t.enableTagOptions&&(t.tagOptionsPrefix||o.tagOptionsPrefix);u=this.getTagSetting("type");if(u===i){n=s[t.type||o.type]}else{n=s[u]}this.mergedOptions=r.extend({},o,n,t)},getTagSetting:function(e){var t=this.tagOptionsPrefix,r,s,o,u;if(t===false||t===n){return i}if(this.tagValCache.hasOwnProperty(e)){r=this.tagValCache.key}else{r=this.tag.getAttribute(t+e);if(r===n||r===null){r=i}else if(r.substr(0,1)==="["){r=r.substr(1,r.length-2).split(",");for(s=r.length;s--;){r[s]=l(r[s].replace(/(^\s*)|(\s*$)/g,""))}}else if(r.substr(0,1)==="{"){o=r.substr(1,r.length-2).split(",");r={};for(s=o.length;s--;){u=o[s].split(":",2);r[u[0].replace(/(^\s*)|(\s*$)/g,"")]=l(u[1].replace(/(^\s*)|(\s*$)/g,""))}}else{r=l(r)}this.tagValCache.key=r}return r},get:function(e,t){var r=this.getTagSetting(e),s;if(r!==i){return r}return(s=this.mergedOptions[e])===n?t:s}});r.fn.sparkline._base=o({disabled:false,init:function(e,t,i,s,o){this.el=e;this.$el=r(e);this.values=t;this.options=i;this.width=s;this.height=o;this.currentRegion=n},initTarget:function(){var e=!this.options.get("disableInteraction");if(!(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),e))){this.disabled=true}else{this.canvasWidth=this.target.pixelWidth;this.canvasHeight=this.target.pixelHeight}},render:function(){if(this.disabled){this.el.innerHTML="";return false}return true},getRegion:function(e,t){},setRegionHighlight:function(e,t,r){var i=this.currentRegion,s=!this.options.get("disableHighlight"),o;if(t>this.canvasWidth||r>this.canvasHeight||t<0||r<0){return null}o=this.getRegion(e,t,r);if(i!==o){if(i!==n&&s){this.removeHighlight()}this.currentRegion=o;if(o!==n&&s){this.renderHighlight()}return true}return false},clearRegionHighlight:function(){if(this.currentRegion!==n){this.removeHighlight();this.currentRegion=n;return true}return false},renderHighlight:function(){this.changeHighlight(true)},removeHighlight:function(){this.changeHighlight(false)},changeHighlight:function(e){},getCurrentRegionTooltip:function(){var e=this.options,t="",i=[],s,o,a,f,l,c,h,p,d,v,m,g,y,b;if(this.currentRegion===n){return""}s=this.getCurrentRegionFields();m=e.get("tooltipFormatter");if(m){return m(this,e,s)}if(e.get("tooltipChartTitle")){t+='<div class="jqs jqstitle">'+e.get("tooltipChartTitle")+"</div>\n"}o=this.options.get("tooltipFormat");if(!o){return""}if(!r.isArray(o)){o=[o]}if(!r.isArray(s)){s=[s]}h=this.options.get("tooltipFormatFieldlist");p=this.options.get("tooltipFormatFieldlistKey");if(h&&p){d=[];for(c=s.length;c--;){v=s[c][p];if((b=r.inArray(v,h))!=-1){d[b]=s[c]}}s=d}a=o.length;y=s.length;for(c=0;c<a;c++){g=o[c];if(typeof g==="string"){g=new u(g)}f=g.fclass||"jqsfield";for(b=0;b<y;b++){if(!s[b].isNull||!e.get("tooltipSkipNull")){r.extend(s[b],{prefix:e.get("tooltipPrefix"),suffix:e.get("tooltipSuffix")});l=g.render(s[b],e.get("tooltipValueLookups"),e);i.push('<div class="'+f+'">'+l+"</div>")}}}if(i.length){return t+i.join("\n")}return""},getCurrentRegionFields:function(){},calcHighlightColor:function(e,n){var r=n.get("highlightColor"),i=n.get("highlightLighten"),s,o,u,f;if(r){return r}if(i){s=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(e);if(s){u=[];o=e.length===4?16:1;for(f=0;f<3;f++){u[f]=a(t.round(parseInt(s[f+1],16)*o*i),0,255)}return"rgb("+u.join(",")+")"}}return e}});S={changeHighlight:function(e){var t=this.currentRegion,n=this.target,i=this.regionShapes[t],s;if(i){s=this.renderRegion(t,e);if(r.isArray(s)||r.isArray(i)){n.replaceWithShapes(i,s);this.regionShapes[t]=r.map(s,function(e){return e.id})}else{n.replaceWithShape(i,s);this.regionShapes[t]=s.id}}},render:function(){var e=this.values,t=this.target,n=this.regionShapes,i,s,o,u;if(!this.cls._super.render.call(this)){return}for(o=e.length;o--;){i=this.renderRegion(o);if(i){if(r.isArray(i)){s=[];for(u=i.length;u--;){i[u].append();s.push(i[u].id)}n[o]=s}else{i.append();n[o]=i.id}}else{n[o]=null}}t.render()}};r.fn.sparkline.line=x=o(r.fn.sparkline._base,{type:"line",init:function(e,t,n,r,i){x._super.init.call(this,e,t,n,r,i);this.vertices=[];this.regionMap=[];this.xvalues=[];this.yvalues=[];this.yminmax=[];this.hightlightSpotId=null;this.lastShapeId=null;this.initTarget()},getRegion:function(e,t,r){var i,s=this.regionMap;for(i=s.length;i--;){if(s[i]!==null&&t>=s[i][0]&&t<=s[i][1]){return s[i][2]}}return n},getCurrentRegionFields:function(){var e=this.currentRegion;return{isNull:this.yvalues[e]===null,x:this.xvalues[e],y:this.yvalues[e],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:e}},renderHighlight:function(){var e=this.currentRegion,t=this.target,r=this.vertices[e],i=this.options,s=i.get("spotRadius"),o=i.get("highlightSpotColor"),u=i.get("highlightLineColor"),a,f;if(!r){return}if(s&&o){a=t.drawCircle(r[0],r[1],s,n,o);this.highlightSpotId=a.id;t.insertAfterShape(this.lastShapeId,a)}if(u){f=t.drawLine(r[0],this.canvasTop,r[0],this.canvasTop+this.canvasHeight,u);this.highlightLineId=f.id;t.insertAfterShape(this.lastShapeId,f)}},removeHighlight:function(){var e=this.target;if(this.highlightSpotId){e.removeShapeId(this.highlightSpotId);this.highlightSpotId=null}if(this.highlightLineId){e.removeShapeId(this.highlightLineId);this.highlightLineId=null}},scanValues:function(){var e=this.values,n=e.length,r=this.xvalues,i=this.yvalues,s=this.yminmax,o,u,a,f,l;for(o=0;o<n;o++){u=e[o];a=typeof e[o]==="string";f=typeof e[o]==="object"&&e[o]instanceof Array;l=a&&e[o].split(":");if(a&&l.length===2){r.push(Number(l[0]));i.push(Number(l[1]));s.push(Number(l[1]))}else if(f){r.push(u[0]);i.push(u[1]);s.push(u[1])}else{r.push(o);if(e[o]===null||e[o]==="null"){i.push(null)}else{i.push(Number(u));s.push(Number(u))}}}if(this.options.get("xvalues")){r=this.options.get("xvalues")}this.maxy=this.maxyorg=t.max.apply(t,s);this.miny=this.minyorg=t.min.apply(t,s);this.maxx=t.max.apply(t,r);this.minx=t.min.apply(t,r);this.xvalues=r;this.yvalues=i;this.yminmax=s},processRangeOptions:function(){var e=this.options,t=e.get("normalRangeMin"),r=e.get("normalRangeMax");if(t!==n){if(t<this.miny){this.miny=t}if(r>this.maxy){this.maxy=r}}if(e.get("chartRangeMin")!==n&&(e.get("chartRangeClip")||e.get("chartRangeMin")<this.miny)){this.miny=e.get("chartRangeMin")}if(e.get("chartRangeMax")!==n&&(e.get("chartRangeClip")||e.get("chartRangeMax")>this.maxy)){this.maxy=e.get("chartRangeMax")}if(e.get("chartRangeMinX")!==n&&(e.get("chartRangeClipX")||e.get("chartRangeMinX")<this.minx)){this.minx=e.get("chartRangeMinX")}if(e.get("chartRangeMaxX")!==n&&(e.get("chartRangeClipX")||e.get("chartRangeMaxX")>this.maxx)){this.maxx=e.get("chartRangeMaxX")}},drawNormalRange:function(e,r,i,s,o){var u=this.options.get("normalRangeMin"),a=this.options.get("normalRangeMax"),f=r+t.round(i-i*((a-this.miny)/o)),l=t.round(i*(a-u)/o);this.target.drawRect(e,f,s,l,n,this.options.get("normalRangeColor")).append()},render:function(){var e=this.options,i=this.target,s=this.canvasWidth,o=this.canvasHeight,u=this.vertices,a=e.get("spotRadius"),f=this.regionMap,l,c,h,p,d,v,m,g,y,w,E,S,T,N,C,k,L,A,O,M,_,D,P,H,B;if(!x._super.render.call(this)){return}this.scanValues();this.processRangeOptions();P=this.xvalues;H=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2){return}p=d=0;l=this.maxx-this.minx===0?1:this.maxx-this.minx;c=this.maxy-this.miny===0?1:this.maxy-this.miny;h=this.yvalues.length-1;if(a&&(s<a*4||o<a*4)){a=0}if(a){_=e.get("highlightSpotColor")&&!e.get("disableInteraction");if(_||e.get("minSpotColor")||e.get("spotColor")&&H[h]===this.miny){o-=t.ceil(a)}if(_||e.get("maxSpotColor")||e.get("spotColor")&&H[h]===this.maxy){o-=t.ceil(a);p+=t.ceil(a)}if(_||(e.get("minSpotColor")||e.get("maxSpotColor"))&&(H[0]===this.miny||H[0]===this.maxy)){d+=t.ceil(a);s-=t.ceil(a)}if(_||e.get("spotColor")||e.get("minSpotColor")||e.get("maxSpotColor")&&(H[h]===this.miny||H[h]===this.maxy)){s-=t.ceil(a)}}o--;if(e.get("normalRangeMin")!==n&&!e.get("drawNormalOnTop")){this.drawNormalRange(d,p,o,s,c)}m=[];g=[m];N=C=null;k=H.length;for(B=0;B<k;B++){y=P[B];E=P[B+1];w=H[B];S=d+t.round((y-this.minx)*(s/l));T=B<k-1?d+t.round((E-this.minx)*(s/l)):s;C=S+(T-S)/2;f[B]=[N||0,C,B];N=C;if(w===null){if(B){if(H[B-1]!==null){m=[];g.push(m)}u.push(null)}}else{if(w<this.miny){w=this.miny}if(w>this.maxy){w=this.maxy}if(!m.length){m.push([S,p+o])}v=[S,p+t.round(o-o*((w-this.miny)/c))];m.push(v);u.push(v)}}L=[];A=[];O=g.length;for(B=0;B<O;B++){m=g[B];if(m.length){if(e.get("fillColor")){m.push([m[m.length-1][0],p+o]);A.push(m.slice(0));m.pop()}if(m.length>2){m[0]=[m[0][0],m[1][1]]}L.push(m)}}O=A.length;for(B=0;B<O;B++){i.drawShape(A[B],e.get("fillColor"),e.get("fillColor")).append()}if(e.get("normalRangeMin")!==n&&e.get("drawNormalOnTop")){this.drawNormalRange(d,p,o,s,c)}O=L.length;for(B=0;B<O;B++){i.drawShape(L[B],e.get("lineColor"),n,e.get("lineWidth")).append()}if(a&&e.get("valueSpots")){M=e.get("valueSpots");if(M.get===n){M=new b(M)}for(B=0;B<k;B++){D=M.get(H[B]);if(D){i.drawCircle(d+t.round((P[B]-this.minx)*(s/l)),p+t.round(o-o*((H[B]-this.miny)/c)),a,n,D).append()}}}if(a&&e.get("spotColor")&&H[h]!==null){i.drawCircle(d+t.round((P[P.length-1]-this.minx)*(s/l)),p+t.round(o-o*((H[h]-this.miny)/c)),a,n,e.get("spotColor")).append()}if(this.maxy!==this.minyorg){if(a&&e.get("minSpotColor")){y=P[r.inArray(this.minyorg,H)];i.drawCircle(d+t.round((y-this.minx)*(s/l)),p+t.round(o-o*((this.minyorg-this.miny)/c)),a,n,e.get("minSpotColor")).append()}if(a&&e.get("maxSpotColor")){y=P[r.inArray(this.maxyorg,H)];i.drawCircle(d+t.round((y-this.minx)*(s/l)),p+t.round(o-o*((this.maxyorg-this.miny)/c)),a,n,e.get("maxSpotColor")).append()}}this.lastShapeId=i.getLastShapeId();this.canvasTop=p;i.render()}});r.fn.sparkline.bar=T=o(r.fn.sparkline._base,S,{type:"bar",init:function(e,i,s,o,u){var f=parseInt(s.get("barWidth"),10),p=parseInt(s.get("barSpacing"),10),d=s.get("chartRangeMin"),v=s.get("chartRangeMax"),m=s.get("chartRangeClip"),g=Infinity,y=-Infinity,w,E,S,x,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z;T._super.init.call(this,e,i,s,o,u);for(C=0,k=i.length;C<k;C++){q=i[C];w=typeof q==="string"&&q.indexOf(":")>-1;if(w||r.isArray(q)){H=true;if(w){q=i[C]=c(q.split(":"))}q=h(q,null);E=t.min.apply(t,q);S=t.max.apply(t,q);if(E<g){g=E}if(S>y){y=S}}}this.stacked=H;this.regionShapes={};this.barWidth=f;this.barSpacing=p;this.totalBarWidth=f+p;this.width=o=i.length*f+(i.length-1)*p;this.initTarget();if(m){D=d===n?-Infinity:d;P=v===n?Infinity:v}N=[];x=H?[]:N;var W=[];var X=[];for(C=0,k=i.length;C<k;C++){if(H){B=i[C];i[C]=I=[];W[C]=0;x[C]=X[C]=0;for(j=0,F=B.length;j<F;j++){q=I[j]=m?a(B[j],D,P):B[j];if(q!==null){if(q>0){W[C]+=q}if(g<0&&y>0){if(q<0){X[C]+=t.abs(q)}else{x[C]+=q}}else{x[C]+=t.abs(q-(q<0?y:g))}N.push(q)}}}else{q=m?a(i[C],D,P):i[C];q=i[C]=l(q);if(q!==null){N.push(q)}}}this.max=_=t.max.apply(t,N);this.min=M=t.min.apply(t,N);this.stackMax=y=H?t.max.apply(t,W):_;this.stackMin=g=H?t.min.apply(t,N):M;if(s.get("chartRangeMin")!==n&&(s.get("chartRangeClip")||s.get("chartRangeMin")<M)){M=s.get("chartRangeMin")}if(s.get("chartRangeMax")!==n&&(s.get("chartRangeClip")||s.get("chartRangeMax")>_)){_=s.get("chartRangeMax")}this.zeroAxis=A=s.get("zeroAxis",true);if(M<=0&&_>=0&&A){O=0}else if(A==false){O=M}else if(M>0){O=M}else{O=_}this.xaxisOffset=O;L=H?t.max.apply(t,x)+t.max.apply(t,X):_-M;this.canvasHeightEf=A&&M<0?this.canvasHeight-2:this.canvasHeight-1;if(M<O){U=H&&_>=0?y:_;R=(U-O)/L*this.canvasHeight;if(R!==t.ceil(R)){this.canvasHeightEf-=2;R=t.ceil(R)}}else{R=this.canvasHeight}this.yoffset=R;if(r.isArray(s.get("colorMap"))){this.colorMapByIndex=s.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=s.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===n){this.colorMapByValue=new b(this.colorMapByValue)}}this.range=L},getRegion:function(e,r,i){var s=t.floor(r/this.totalBarWidth);return s<0||s>=this.values.length?n:s},getCurrentRegionFields:function(){var e=this.currentRegion,t=g(this.values[e]),n=[],r,i;for(i=t.length;i--;){r=t[i];n.push({isNull:r===null,value:r,color:this.calcColor(i,r,e),offset:e})}return n},calcColor:function(e,t,i){var s=this.colorMapByIndex,o=this.colorMapByValue,u=this.options,a,f;if(this.stacked){a=u.get("stackedBarColor")}else{a=t<0?u.get("negBarColor"):u.get("barColor")}if(t===0&&u.get("zeroColor")!==n){a=u.get("zeroColor")}if(o&&(f=o.get(t))){a=f}else if(s&&s.length>i){a=s[i]}return r.isArray(a)?a[e%a.length]:a},renderRegion:function(e,i){var s=this.values[e],o=this.options,u=this.xaxisOffset,a=[],f=this.range,l=this.stacked,c=this.target,h=e*this.totalBarWidth,p=this.canvasHeightEf,v=this.yoffset,m,g,y,b,w,E,S,x,T,N;s=r.isArray(s)?s:[s];S=s.length;x=s[0];b=d(null,s);N=d(u,s,true);if(b){if(o.get("nullColor")){y=i?o.get("nullColor"):this.calcHighlightColor(o.get("nullColor"),o);m=v>0?v-1:v;return c.drawRect(h,m,this.barWidth-1,0,y,y)}else{return n}}w=v;for(E=0;E<S;E++){x=s[E];if(l&&x===u){if(!N||T){continue}T=true}if(f>0){g=t.floor(p*(t.abs(x-u)/f))+1}else{g=1}if(x<u||x===u&&v===0){m=w;w+=g}else{m=v-g;v-=g}y=this.calcColor(E,x,e);if(i){y=this.calcHighlightColor(y,o)}a.push(c.drawRect(h,m,this.barWidth-1,g-1,y,y))}if(a.length===1){return a[0]}return a}});r.fn.sparkline.tristate=N=o(r.fn.sparkline._base,S,{type:"tristate",init:function(e,t,i,s,o){var u=parseInt(i.get("barWidth"),10),a=parseInt(i.get("barSpacing"),10);N._super.init.call(this,e,t,i,s,o);this.regionShapes={};this.barWidth=u;this.barSpacing=a;this.totalBarWidth=u+a;this.values=r.map(t,Number);this.width=s=t.length*u+(t.length-1)*a;if(r.isArray(i.get("colorMap"))){this.colorMapByIndex=i.get("colorMap");this.colorMapByValue=null}else{this.colorMapByIndex=null;this.colorMapByValue=i.get("colorMap");if(this.colorMapByValue&&this.colorMapByValue.get===n){this.colorMapByValue=new b(this.colorMapByValue)}}this.initTarget()},getRegion:function(e,n,r){return t.floor(n/this.totalBarWidth)},getCurrentRegionFields:function(){var e=this.currentRegion;return{isNull:this.values[e]===n,value:this.values[e],color:this.calcColor(this.values[e],e),offset:e}},calcColor:function(e,t){var n=this.values,r=this.options,i=this.colorMapByIndex,s=this.colorMapByValue,o,u;if(s&&(u=s.get(e))){o=u}else if(i&&i.length>t){o=i[t]}else if(n[t]<0){o=r.get("negBarColor")}else if(n[t]>0){o=r.get("posBarColor")}else{o=r.get("zeroBarColor")}return o},renderRegion:function(e,n){var r=this.values,i=this.options,s=this.target,o,u,a,f,l,c;o=s.pixelHeight;a=t.round(o/2);f=e*this.totalBarWidth;if(r[e]<0){l=a;u=a-1}else if(r[e]>0){l=0;u=a-1}else{l=a-1;u=2}c=this.calcColor(r[e],e);if(c===null){return}if(n){c=this.calcHighlightColor(c,i)}return s.drawRect(f,l,this.barWidth-1,u-1,c,c)}});r.fn.sparkline.discrete=C=o(r.fn.sparkline._base,S,{type:"discrete",init:function(e,i,s,o,u){C._super.init.call(this,e,i,s,o,u);this.regionShapes={};this.values=i=r.map(i,Number);this.min=t.min.apply(t,i);this.max=t.max.apply(t,i);this.range=this.max-this.min;this.width=o=s.get("width")==="auto"?i.length*2:this.width;this.interval=t.floor(o/i.length);this.itemWidth=o/i.length;if(s.get("chartRangeMin")!==n&&(s.get("chartRangeClip")||s.get("chartRangeMin")<this.min)){this.min=s.get("chartRangeMin")}if(s.get("chartRangeMax")!==n&&(s.get("chartRangeClip")||s.get("chartRangeMax")>this.max)){this.max=s.get("chartRangeMax")}this.initTarget();if(this.target){this.lineHeight=s.get("lineHeight")==="auto"?t.round(this.canvasHeight*.3):s.get("lineHeight")}},getRegion:function(e,n,r){return t.floor(n/this.itemWidth)},getCurrentRegionFields:function(){var e=this.currentRegion;return{isNull:this.values[e]===n,value:this.values[e],offset:e}},renderRegion:function(e,n){var r=this.values,i=this.options,s=this.min,o=this.max,u=this.range,f=this.interval,l=this.target,c=this.canvasHeight,h=this.lineHeight,p=c-h,d,v,m,g;v=a(r[e],s,o);g=e*f;d=t.round(p-p*((v-s)/u));m=i.get("thresholdColor")&&v<i.get("thresholdValue")?i.get("thresholdColor"):i.get("lineColor");if(n){m=this.calcHighlightColor(m,i)}return l.drawLine(g,d,g,d+h,m)}});r.fn.sparkline.bullet=k=o(r.fn.sparkline._base,{type:"bullet",init:function(e,r,i,s,o){var u,a,f;k._super.init.call(this,e,r,i,s,o);this.values=r=c(r);f=r.slice();f[0]=f[0]===null?f[2]:f[0];f[1]=r[1]===null?f[2]:f[1];u=t.min.apply(t,r);a=t.max.apply(t,r);if(i.get("base")===n){u=u<0?u:0}else{u=i.get("base")}this.min=u;this.max=a;this.range=a-u;this.shapes={};this.valueShapes={};this.regiondata={};this.width=s=i.get("width")==="auto"?"4.0em":s;this.target=this.$el.simpledraw(s,o,i.get("composite"));if(!r.length){this.disabled=true}this.initTarget()},getRegion:function(e,t,r){var i=this.target.getShapeAt(e,t,r);return i!==n&&this.shapes[i]!==n?this.shapes[i]:n},getCurrentRegionFields:function(){var e=this.currentRegion;return{fieldkey:e.substr(0,1),value:this.values[e.substr(1)],region:e}},changeHighlight:function(e){var t=this.currentRegion,n=this.valueShapes[t],r;delete this.shapes[n];switch(t.substr(0,1)){case"r":r=this.renderRange(t.substr(1),e);break;case"p":r=this.renderPerformance(e);break;case"t":r=this.renderTarget(e);break}this.valueShapes[t]=r.id;this.shapes[r.id]=t;this.target.replaceWithShape(n,r)},renderRange:function(e,n){var r=this.values[e],i=t.round(this.canvasWidth*((r-this.min)/this.range)),s=this.options.get("rangeColors")[e-2];if(n){s=this.calcHighlightColor(s,this.options)}return this.target.drawRect(0,0,i-1,this.canvasHeight-1,s,s)},renderPerformance:function(e){var n=this.values[1],r=t.round(this.canvasWidth*((n-this.min)/this.range)),i=this.options.get("performanceColor");if(e){i=this.calcHighlightColor(i,this.options)}return this.target.drawRect(0,t.round(this.canvasHeight*.3),r-1,t.round(this.canvasHeight*.4)-1,i,i)},renderTarget:function(e){var n=this.values[0],r=t.round(this.canvasWidth*((n-this.min)/this.range)-this.options.get("targetWidth")/2),i=t.round(this.canvasHeight*.1),s=this.canvasHeight-i*2,o=this.options.get("targetColor");if(e){o=this.calcHighlightColor(o,this.options)}return this.target.drawRect(r,i,this.options.get("targetWidth")-1,s-1,o,o)},render:function(){var e=this.values.length,t=this.target,n,r;if(!k._super.render.call(this)){return}for(n=2;n<e;n++){r=this.renderRange(n).append();this.shapes[r.id]="r"+n;this.valueShapes["r"+n]=r.id}if(this.values[1]!==null){r=this.renderPerformance().append();this.shapes[r.id]="p1";this.valueShapes.p1=r.id}if(this.values[0]!==null){r=this.renderTarget().append();this.shapes[r.id]="t0";this.valueShapes.t0=r.id}t.render()}});r.fn.sparkline.pie=L=o(r.fn.sparkline._base,{type:"pie",init:function(e,n,i,s,o){var u=0,a;L._super.init.call(this,e,n,i,s,o);this.shapes={};this.valueShapes={};this.values=n=r.map(n,Number);if(i.get("width")==="auto"){this.width=this.height}if(n.length>0){for(a=n.length;a--;){u+=n[a]}}this.total=u;this.initTarget();this.radius=t.floor(t.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(e,t,r){var i=this.target.getShapeAt(e,t,r);return i!==n&&this.shapes[i]!==n?this.shapes[i]:n},getCurrentRegionFields:function(){var e=this.currentRegion;return{isNull:this.values[e]===n,value:this.values[e],percent:this.values[e]/this.total*100,color:this.options.get("sliceColors")[e%this.options.get("sliceColors").length],offset:e}},changeHighlight:function(e){var t=this.currentRegion,n=this.renderSlice(t,e),r=this.valueShapes[t];delete this.shapes[r];this.target.replaceWithShape(r,n);this.valueShapes[t]=n.id;this.shapes[n.id]=t},renderSlice:function(e,r){var i=this.target,s=this.options,o=this.radius,u=s.get("borderWidth"),a=s.get("offset"),f=2*t.PI,l=this.values,c=this.total,h=a?2*t.PI*(a/360):0,p,d,v,m,g;m=l.length;for(v=0;v<m;v++){p=h;d=h;if(c>0){d=h+f*(l[v]/c)}if(e===v){g=s.get("sliceColors")[v%s.get("sliceColors").length];if(r){g=this.calcHighlightColor(g,s)}return i.drawPieSlice(o,o,o-u,p,d,n,g)}h=d}},render:function(){var e=this.target,r=this.values,i=this.options,s=this.radius,o=i.get("borderWidth"),u,a;if(!L._super.render.call(this)){return}if(o){e.drawCircle(s,s,t.floor(s-o/2),i.get("borderColor"),n,o).append()}for(a=r.length;a--;){if(r[a]){u=this.renderSlice(a).append();this.valueShapes[a]=u.id;this.shapes[u.id]=a}}e.render()}});r.fn.sparkline.box=A=o(r.fn.sparkline._base,{type:"box",init:function(e,t,n,i,s){A._super.init.call(this,e,t,n,i,s);this.values=r.map(t,Number);this.width=n.get("width")==="auto"?"4.0em":i;this.initTarget();if(!this.values.length){this.disabled=1}},getRegion:function(){return 1},getCurrentRegionFields:function(){var e=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];if(this.loutlier!==n){e.push({field:"lo",value:this.loutlier})}if(this.routlier!==n){e.push({field:"ro",value:this.routlier})}if(this.lwhisker!==n){e.push({field:"lw",value:this.lwhisker})}if(this.rwhisker!==n){e.push({field:"rw",value:this.rwhisker})}return e},render:function(){var e=this.target,r=this.values,i=r.length,s=this.options,o=this.canvasWidth,u=this.canvasHeight,a=s.get("chartRangeMin")===n?t.min.apply(t,r):s.get("chartRangeMin"),l=s.get("chartRangeMax")===n?t.max.apply(t,r):s.get("chartRangeMax"),c=0,h,p,d,v,m,g,y,b,w,E,S;if(!A._super.render.call(this)){return}if(s.get("raw")){if(s.get("showOutliers")&&r.length>5){p=r[0];h=r[1];v=r[2];m=r[3];g=r[4];y=r[5];b=r[6]}else{h=r[0];v=r[1];m=r[2];g=r[3];y=r[4]}}else{r.sort(function(e,t){return e-t});v=f(r,1);m=f(r,2);g=f(r,3);d=g-v;if(s.get("showOutliers")){h=y=n;for(w=0;w<i;w++){if(h===n&&r[w]>v-d*s.get("outlierIQR")){h=r[w]}if(r[w]<g+d*s.get("outlierIQR")){y=r[w]}}p=r[0];b=r[i-1]}else{h=r[0];y=r[i-1]}}this.quartiles=[v,m,g];this.lwhisker=h;this.rwhisker=y;this.loutlier=p;this.routlier=b;S=o/(l-a+1);if(s.get("showOutliers")){c=t.ceil(s.get("spotRadius"));o-=2*t.ceil(s.get("spotRadius"));S=o/(l-a+1);if(p<h){e.drawCircle((p-a)*S+c,u/2,s.get("spotRadius"),s.get("outlierLineColor"),s.get("outlierFillColor")).append()}if(b>y){e.drawCircle((b-a)*S+c,u/2,s.get("spotRadius"),s.get("outlierLineColor"),s.get("outlierFillColor")).append()}}e.drawRect(t.round((v-a)*S+c),t.round(u*.1),t.round((g-v)*S),t.round(u*.8),s.get("boxLineColor"),s.get("boxFillColor")).append();e.drawLine(t.round((h-a)*S+c),t.round(u/2),t.round((v-a)*S+c),t.round(u/2),s.get("lineColor")).append();e.drawLine(t.round((h-a)*S+c),t.round(u/4),t.round((h-a)*S+c),t.round(u-u/4),s.get("whiskerColor")).append();e.drawLine(t.round((y-a)*S+c),t.round(u/2),t.round((g-a)*S+c),t.round(u/2),s.get("lineColor")).append();e.drawLine(t.round((y-a)*S+c),t.round(u/4),t.round((y-a)*S+c),t.round(u-u/4),s.get("whiskerColor")).append();e.drawLine(t.round((m-a)*S+c),t.round(u*.1),t.round((m-a)*S+c),t.round(u*.9),s.get("medianColor")).append();if(s.get("target")){E=t.ceil(s.get("spotRadius"));e.drawLine(t.round((s.get("target")-a)*S+c),t.round(u/2-E),t.round((s.get("target")-a)*S+c),t.round(u/2+E),s.get("targetColor")).append();e.drawLine(t.round((s.get("target")-a)*S+c-E),t.round(u/2),t.round((s.get("target")-a)*S+c+E),t.round(u/2),s.get("targetColor")).append()}e.render()}});_=o({init:function(e,t,n,r){this.target=e;this.id=t;this.type=n;this.args=r},append:function(){this.target.appendShape(this);return this}});D=o({_pxregex:/(\d+)(px)?\s*$/i,init:function(e,t,n){if(!e){return}this.width=e;this.height=t;this.target=n;this.lastShapeId=null;if(n[0]){n=n[0]}r.data(n,"_jqs_vcanvas",this)},drawLine:function(e,t,n,r,i,s){return this.drawShape([[e,t],[n,r]],i,s)},drawShape:function(e,t,n,r){return this._genShape("Shape",[e,t,n,r])},drawCircle:function(e,t,n,r,i,s){return this._genShape("Circle",[e,t,n,r,i,s])},drawPieSlice:function(e,t,n,r,i,s,o){return this._genShape("PieSlice",[e,t,n,r,i,s,o])},drawRect:function(e,t,n,r,i,s){return this._genShape("Rect",[e,t,n,r,i,s])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(e,t){r(t).html(e)},_calculatePixelDims:function(e,t,n){var i;i=this._pxregex.exec(t);if(i){this.pixelHeight=i[1]}else{this.pixelHeight=r(n).height()}i=this._pxregex.exec(e);if(i){this.pixelWidth=i[1]}else{this.pixelWidth=r(n).width()}},_genShape:function(e,t){var n=j++;t.unshift(n);return new _(this,n,e,t)},appendShape:function(e){alert("appendShape not implemented")},replaceWithShape:function(e,t){alert("replaceWithShape not implemented")},insertAfterShape:function(e,t){alert("insertAfterShape not implemented")},removeShapeId:function(e){alert("removeShapeId not implemented")},getShapeAt:function(e,t,n){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}});P=o(D,{init:function(t,i,s,o){P._super.init.call(this,t,i,s);this.canvas=e.createElement("canvas");if(s[0]){s=s[0]}r.data(s,"_jqs_vcanvas",this);r(this.canvas).css({display:"inline-block",width:t,height:i,verticalAlign:"top"});this._insert(this.canvas,s);this._calculatePixelDims(t,i,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;this.interact=o;this.shapes={};this.shapeseq=[];this.currentTargetShapeId=n;r(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(e,t,r){var i=this.canvas.getContext("2d");if(e!==n){i.strokeStyle=e}i.lineWidth=r===n?1:r;if(t!==n){i.fillStyle=t}return i},reset:function(){var e=this._getContext();e.clearRect(0,0,this.pixelWidth,this.pixelHeight);this.shapes={};this.shapeseq=[];this.currentTargetShapeId=n},_drawShape:function(e,t,r,i,s){var o=this._getContext(r,i,s),u,a;o.beginPath();o.moveTo(t[0][0]+.5,t[0][1]+.5);for(u=1,a=t.length;u<a;u++){o.lineTo(t[u][0]+.5,t[u][1]+.5)}if(r!==n){o.stroke()}if(i!==n){o.fill()}if(this.targetX!==n&&this.targetY!==n&&o.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=e}},_drawCircle:function(e,r,i,s,o,u,a){var f=this._getContext(o,u,a);f.beginPath();f.arc(r,i,s,0,2*t.PI,false);if(this.targetX!==n&&this.targetY!==n&&f.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=e}if(o!==n){f.stroke()}if(u!==n){f.fill()}},_drawPieSlice:function(e,t,r,i,s,o,u,a){var f=this._getContext(u,a);f.beginPath();f.moveTo(t,r);f.arc(t,r,i,s,o,false);f.lineTo(t,r);f.closePath();if(u!==n){f.stroke()}if(a){f.fill()}if(this.targetX!==n&&this.targetY!==n&&f.isPointInPath(this.targetX,this.targetY)){this.currentTargetShapeId=e}},_drawRect:function(e,t,n,r,i,s,o){return this._drawShape(e,[[t,n],[t+r,n],[t+r,n+i],[t,n+i],[t,n]],s,o)},appendShape:function(e){this.shapes[e.id]=e;this.shapeseq.push(e.id);this.lastShapeId=e.id;return e.id},replaceWithShape:function(e,t){var n=this.shapeseq,r;this.shapes[t.id]=t;for(r=n.length;r--;){if(n[r]==e){n[r]=t.id}}delete this.shapes[e]},replaceWithShapes:function(e,t){var n=this.shapeseq,r={},i,s,o;for(s=e.length;s--;){r[e[s]]=true}for(s=n.length;s--;){i=n[s];if(r[i]){n.splice(s,1);delete this.shapes[i];o=s}}for(s=t.length;s--;){n.splice(o,0,t[s].id);this.shapes[t[s].id]=t[s]}},insertAfterShape:function(e,t){var n=this.shapeseq,r;for(r=n.length;r--;){if(n[r]===e){n.splice(r+1,0,t.id);this.shapes[t.id]=t;return}}},removeShapeId:function(e){var t=this.shapeseq,n;for(n=t.length;n--;){if(t[n]===e){t.splice(n,1);break}}delete this.shapes[e]},getShapeAt:function(e,t,n){this.targetX=t;this.targetY=n;this.render();return this.currentTargetShapeId},render:function(){var e=this.shapeseq,t=this.shapes,n=e.length,r=this._getContext(),i,s,o;r.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(o=0;o<n;o++){i=e[o];s=t[i];this["_draw"+s.type].apply(this,s.args)}if(!this.interact){this.shapes={};this.shapeseq=[]}}});H=o(D,{init:function(t,n,i){var s;H._super.init.call(this,t,n,i);if(i[0]){i=i[0]}r.data(i,"_jqs_vcanvas",this);this.canvas=e.createElement("span");r(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:t,height:n,margin:"0px",padding:"0px",verticalAlign:"top"});this._insert(this.canvas,i);this._calculatePixelDims(t,n,this.canvas);this.canvas.width=this.pixelWidth;this.canvas.height=this.pixelHeight;s='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>';this.canvas.insertAdjacentHTML("beforeEnd",s);this.group=r(this.canvas).children()[0];this.rendered=false;this.prerender=""},_drawShape:function(e,t,r,i,s){var o=[],u,a,f,l,c,h,p;for(p=0,h=t.length;p<h;p++){o[p]=""+t[p][0]+","+t[p][1]}u=o.splice(0,1);s=s===n?1:s;a=r===n?' stroked="false" ':' strokeWeight="'+s+'px" strokeColor="'+r+'" ';f=i===n?' filled="false"':' fillColor="'+i+'" filled="true" ';l=o[0]===o[o.length-1]?"x ":"";c='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+e+'" '+a+f+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+u+" l "+o.join(", ")+" "+l+'e">'+" </v:shape>";return c},_drawCircle:function(e,t,r,i,s,o,u){var a,f,l;t-=i;r-=i;a=s===n?' stroked="false" ':' strokeWeight="'+u+'px" strokeColor="'+s+'" ';f=o===n?' filled="false"':' fillColor="'+o+'" filled="true" ';l="<v:oval "+' id="jqsshape'+e+'" '+a+f+' style="position:absolute;top:'+r+"px; left:"+t+"px; width:"+i*2+"px; height:"+i*2+'px"></v:oval>';return l},_drawPieSlice:function(e,r,i,s,o,u,a,f){var l,c,h,p,d,v,m,g;if(o===u){return""}if(u-o===2*t.PI){o=0;u=2*t.PI}c=r+t.round(t.cos(o)*s);h=i+t.round(t.sin(o)*s);p=r+t.round(t.cos(u)*s);d=i+t.round(t.sin(u)*s);if(c===p&&h===d){if(u-o<t.PI){return""}c=p=r+s;h=d=i}if(c===p&&h===d&&u-o<t.PI){return""}l=[r-s,i-s,r+s,i+s,c,h,p,d];v=a===n?' stroked="false" ':' strokeWeight="1px" strokeColor="'+a+'" ';m=f===n?' filled="false"':' fillColor="'+f+'" filled="true" ';g='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+e+'" '+v+m+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+r+","+i+" wa "+l.join(", ")+' x e">'+" </v:shape>";return g},_drawRect:function(e,t,n,r,i,s,o){return this._drawShape(e,[[t,n],[t,n+i],[t+r,n+i],[t+r,n],[t,n]],s,o)},reset:function(){this.group.innerHTML=""},appendShape:function(e){var t=this["_draw"+e.type].apply(this,e.args);if(this.rendered){this.group.insertAdjacentHTML("beforeEnd",t)}else{this.prerender+=t}this.lastShapeId=e.id;return e.id},replaceWithShape:function(e,t){var n=r("#jqsshape"+e),i=this["_draw"+t.type].apply(this,t.args);n[0].outerHTML=i},replaceWithShapes:function(e,t){var n=r("#jqsshape"+e[0]),i="",s=t.length,o;for(o=0;o<s;o++){i+=this["_draw"+t[o].type].apply(this,t[o].args)}n[0].outerHTML=i;for(o=1;o<e.length;o++){r("#jqsshape"+e[o]).remove()}},insertAfterShape:function(e,t){var n=r("#jqsshape"+e),i=this["_draw"+t.type].apply(this,t.args);n[0].insertAdjacentHTML("afterEnd",i)},removeShapeId:function(e){var t=r("#jqsshape"+e);this.group.removeChild(t[0])},getShapeAt:function(e,t,n){var r=e.id.substr(8);return r},render:function(){if(!this.rendered){this.group.innerHTML=this.prerender;this.rendered=true}}})})})(document,Math)
// +--------------------------------------------------------------------+ \\
// � Rapha�l 2.1.0 - JavaScript Vector Library                          � \\
// +--------------------------------------------------------------------� \\
// � Copyright � 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    � \\
// � Copyright � 2008-2012 Sencha Labs (http://sencha.com)              � \\
// +--------------------------------------------------------------------� \\
// � Licensed under the MIT (http://raphaeljs.com/license.html) license.� \\
// +--------------------------------------------------------------------+ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" � "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("?"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Rapha�l Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="�")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="�")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Rapha�l: you are calling to method �"+a+"� of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Rapha�l�s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Rapha�l�s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Rapha�l "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Rapha�l "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn�t support SVG. Falling down to VML.\nYou are running Rapha�l "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)
/**
 * JustGage - this is work-in-progress, unreleased, unofficial code, so it might not work top-notch :)
 * Check http://www.justgage.com for official releases
 * Licensed under MIT.
 * @author Bojan Djuricic  (@Toorshia)
 *
 * LATEST UPDATES
 *
 * -----------------------------
 * May 17, 2013.
 * -----------------------------
     * make kvLookup() part of prototype per @toorshia
     * https://github.com/toorshia/justgage/pull/59

 * -----------------------------
 * April 25, 2013.
 * -----------------------------
     * use HTML5 data-* attributes of the DOM Element to render the gauge (which overrides the constructor options).

 * -----------------------------
 * April 18, 2013.
 * -----------------------------
     * parentNode - use this instead of id, to attach gauge to node which is outside of DOM tree - https://github.com/toorshia/justgage/issues/48
     * width - force gauge width
     * height - force gauge height

 * -----------------------------
 * April 17, 2013.
 * -----------------------------
     * fix - https://github.com/toorshia/justgage/issues/49

 * -----------------------------
 * April 01, 2013.
 * -----------------------------
     * fix - https://github.com/toorshia/justgage/issues/46

 * -----------------------------
 * March 26, 2013.
 * -----------------------------
     * customSectors - define specific color for value range (0-10 : red, 10-30 : blue etc.)

 * -----------------------------
 * March 23, 2013.
 * -----------------------------
     * counter - option to animate value  in counting fashion
     * fix - https://github.com/toorshia/justgage/issues/45

 * -----------------------------
 * March 13, 2013.
 * -----------------------------
     * refresh method - added optional 'max' parameter to use when you need to update max value

 * -----------------------------
 * February 26, 2013.
 * -----------------------------
     * decimals - option to define/limit number of decimals when not using humanFriendly or customRenderer to display value
     * fixed a missing parameters bug when calling generateShadow()  for IE < 9

 * -----------------------------
 * December 31, 2012.
 * -----------------------------
     * fixed text y-position for hidden divs - workaround for Raphael <tspan> 'dy' bug - https://github.com/DmitryBaranovskiy/raphael/issues/491
     * 'show' parameters, like showMinMax are now 'hide' because I am lame developer - please update these in your setups
     * Min and Max labels are now auto-off when in donut mode
     * Start angle in donut mode is now 90
     * donutStartAngle - option to define start angle for donut

 * -----------------------------
 * November 25, 2012.
 * -----------------------------
     * Option to define custom rendering function for displayed value

 * -----------------------------
 * November 19, 2012.
 * -----------------------------
     * Config.value is now updated after gauge refresh

 * -----------------------------
 * November 13, 2012.
 * -----------------------------
     * Donut display mode added
     * Option to hide value label
     * Option to enable responsive gauge size
     * Removed default title attribute
     * Option to accept min and max defined as string values
     * Option to configure value symbol
     * Fixed bad aspect ratio calculations
     * Option to configure minimum font size for all texts
     * Option to show shorthand big numbers (human friendly)
     */

 JustGage = function(config) {

  // if (!config.id) {alert("Missing id parameter for gauge!"); return false;}
  // if (!document.getElementById(config.id)) {alert("No element with id: \""+config.id+"\" found!"); return false;}

  var obj = this;

  // Helps in case developer wants to debug it. unobtrusive
  if (config === null || config ===  undefined) {
      console.log("Make sure to pass options to the constructor.");
      return false;
  }

  // Helps in case developer wants to debug it. unobtrusive
  if (!config.id) {
      console.log("Make sure to pass the id attribute to the constructor.");
      return false;
  }

  var uel = document.getElementById(config.id);
  var dataset = uel.dataset ? uel.dataset : {};

  // Helps in case developer wants to debug it. unobtrusive
  if (!uel) {
      console.log("No element with id : %s found", config.id);
      return false;
  }
  // configurable parameters
  obj.config =
  {
    // id : string
    // this is container element id
    id : config.id,

    // parentNode : node object
    // this is container element
    parentNode : obj.kvLookup('parentNode', config, dataset, null),

    // width : int
    // gauge width
    width : obj.kvLookup('width', config, dataset, null),

    // height : int
    // gauge height
    height : obj.kvLookup('height', config, dataset, null),

    // title : string
    // gauge title
    title : obj.kvLookup('title', config, dataset, ""),

    // titleFontColor : string
    // color of gauge title
    titleFontColor : obj.kvLookup('titleFontColor', config, dataset,  "#999999"),

    // value : int
    // value gauge is showing
    value : obj.kvLookup('value', config, dataset, 0, 'float'),

    // valueFontColor : string
    // color of label showing current value
    valueFontColor : obj.kvLookup('valueFontColor', config, dataset, "#010101"),

    // symbol : string
    // special symbol to show next to value
    symbol : obj.kvLookup('symbol', config, dataset, ''),

    // min : float
    // min value
    min : obj.kvLookup('min', config, dataset, 0, 'float'),

    // max : int
    // max value
    max : obj.kvLookup('max', config, dataset, 100, 'float'),

    // humanFriendlyDecimal : int
    // number of decimal places for our human friendly number to contain
    humanFriendlyDecimal : obj.kvLookup('humanFriendlyDecimal', config, dataset, 0),

    // textRenderer: func
    // function applied before rendering text
    textRenderer  : obj.kvLookup('textRenderer', config, dataset, null),

    // gaugeWidthScale : float
    // width of the gauge element
    gaugeWidthScale : obj.kvLookup('gaugeWidthScale', config, dataset, 1.0),

    // gaugeColor : string
    // background color of gauge element
    gaugeColor : obj.kvLookup('gaugeColor', config, dataset, "#edebeb"),

    // label : string
    // text to show below value
    label : obj.kvLookup('label', config, dataset, ''),

    // labelFontColor : string
    // color of label showing label under value
    labelFontColor : obj.kvLookup('labelFontColor', config, dataset, "#b3b3b3"),

    // shadowOpacity : int
    // 0 ~ 1
    shadowOpacity : obj.kvLookup('shadowOpacity', config, dataset, 0.2),

    // shadowSize: int
    // inner shadow size
    shadowSize : obj.kvLookup('shadowSize', config, dataset, 5),

    // shadowVerticalOffset : int
    // how much shadow is offset from top
    shadowVerticalOffset : obj.kvLookup('shadowVerticalOffset', config, dataset, 3),

    // levelColors : string[]
    // colors of indicator, from lower to upper, in RGB format
    levelColors : obj.kvLookup('levelColors', config, dataset, [ "#a9d70b", "#f9c802", "#ff0000" ], 'array', ','),

    // startAnimationTime : int
    // length of initial animation
    startAnimationTime : obj.kvLookup('startAnimationTime', config, dataset, 700),

    // startAnimationType : string
    // type of initial animation (linear, >, <,  <>, bounce)
    startAnimationType : obj.kvLookup('startAnimationType', config, dataset, '>'),

    // refreshAnimationTime : int
    // length of refresh animation
    refreshAnimationTime : obj.kvLookup('refreshAnimationTime', config, dataset, 700),

    // refreshAnimationType : string
    // type of refresh animation (linear, >, <,  <>, bounce)
    refreshAnimationType : obj.kvLookup('refreshAnimationType', config, dataset, '>'),

    // donutStartAngle : int
    // angle to start from when in donut mode
    donutStartAngle : obj.kvLookup('donutStartAngle', config, dataset, 90),

    // valueMinFontSize : int
    // absolute minimum font size for the value
    valueMinFontSize : obj.kvLookup('valueMinFontSize', config, dataset, 16),

    // titleMinFontSize
    // absolute minimum font size for the title
    titleMinFontSize : obj.kvLookup('titleMinFontSize', config, dataset, 10),

    // labelMinFontSize
    // absolute minimum font size for the label
    labelMinFontSize : obj.kvLookup('labelMinFontSize', config, dataset, 10),

    // minLabelMinFontSize
    // absolute minimum font size for the minimum label
    minLabelMinFontSize : obj.kvLookup('minLabelMinFontSize', config, dataset, 10),

    // maxLabelMinFontSize
    // absolute minimum font size for the maximum label
    maxLabelMinFontSize : obj.kvLookup('maxLabelMinFontSize', config, dataset, 10),

    // hideValue : bool
    // hide value text
    hideValue : obj.kvLookup('hideValue', config, dataset, false),

    // hideMinMax : bool
    // hide min and max values
    hideMinMax : obj.kvLookup('hideMinMax', config, dataset, false),

    // hideInnerShadow : bool
    // hide inner shadow
    hideInnerShadow : obj.kvLookup('hideInnerShadow', config, dataset, false),

    // humanFriendly : bool
    // convert large numbers for min, max, value to human friendly (e.g. 1234567 -> 1.23M)
    humanFriendly : obj.kvLookup('humanFriendly', config, dataset, false),

    // noGradient : bool
    // whether to use gradual color change for value, or sector-based
    noGradient : obj.kvLookup('noGradient', config, dataset, false),

    // donut : bool
    // show full donut gauge
    donut : obj.kvLookup('donut', config, dataset, false),

    // relativeGaugeSize : bool
    // whether gauge size should follow changes in container element size
    relativeGaugeSize : obj.kvLookup('relativeGaugeSize', config, dataset, false),

    // counter : bool
    // animate level number change
    counter : obj.kvLookup('counter', config, dataset, false),

    // decimals : int
    // number of digits after floating point
    decimals : obj.kvLookup('decimals', config, dataset, 0),

    // customSectors : [] of objects
    // number of digits after floating point
    customSectors : obj.kvLookup('customSectors', config, dataset, []),

    // formatNumber: boolean
    // formats numbers with commas where appropriate
    formatNumber : obj.kvLookup('formatNumber', config, dataset, false)
  };

  // variables
  var
  canvasW,
  canvasH,
  widgetW,
  widgetH,
  aspect,
  dx,
  dy,
  titleFontSize,
  titleX,
  titleY,
  valueFontSize,
  valueX,
  valueY,
  labelFontSize,
  labelX,
  labelY,
  minFontSize,
  minX,
  minY,
  maxFontSize,
  maxX,
  maxY;

  // overflow values
  if (obj.config.value > obj.config.max) obj.config.value = obj.config.max;
  if (obj.config.value < obj.config.min) obj.config.value = obj.config.min;
  obj.originalValue = obj.kvLookup('value', config, dataset, -1, 'int');

  // create canvas
  if (obj.config.id !== null && (document.getElementById(obj.config.id)) !== null) {
    obj.canvas = Raphael(obj.config.id, "100%", "100%");
  } else if (obj.config.parentNode !== null) {
    obj.canvas = Raphael(obj.config.parentNode, "100%", "100%");
  }

  if (obj.config.relativeGaugeSize === true) {
    obj.canvas.setViewBox(0, 0, 200, 150, true);
  }

  // canvas dimensions
  if (obj.config.relativeGaugeSize === true) {
    canvasW = 200;
    canvasH = 150;
  } else if (obj.config.width !== null && obj.config.height !== null) {
    canvasW = obj.config.width;
    canvasH = obj.config.height;
  } else if (obj.config.parentNode !== null) {
    obj.canvas.setViewBox(0, 0, 200, 150, true);
    canvasW = 200;
    canvasH = 150;
  } else {
    canvasW = getStyle(document.getElementById(obj.config.id), "width").slice(0, -2) * 1;
    canvasH = getStyle(document.getElementById(obj.config.id), "height").slice(0, -2) * 1;
  }

  // widget dimensions
  if (obj.config.donut === true) {

    // DONUT *******************************

    // width more than height
    if(canvasW > canvasH) {
      widgetH = canvasH;
      widgetW = widgetH;
    // width less than height
  } else if (canvasW < canvasH) {
    widgetW = canvasW;
    widgetH = widgetW;
      // if height don't fit, rescale both
      if(widgetH > canvasH) {
        aspect = widgetH / canvasH;
        widgetH = widgetH / aspect;
        widgetW = widgetH / aspect;
      }
    // equal
  } else {
    widgetW = canvasW;
    widgetH = widgetW;
  }

    // delta
    dx = (canvasW - widgetW)/2;
    dy = (canvasH - widgetH)/2;

    // title
    titleFontSize = ((widgetH / 8) > 10) ? (widgetH / 10) : 10;
    titleX = dx + widgetW / 2;
    titleY = dy + widgetH / 11;

    // value
    valueFontSize = ((widgetH / 6.4) > 16) ? (widgetH / 5.4) : 18;
    valueX = dx + widgetW / 2;
    if(obj.config.label !== '') {
      valueY = dy + widgetH / 1.85;
    } else {
      valueY = dy + widgetH / 1.7;
    }

    // label
    labelFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
    labelX = dx + widgetW / 2;
    labelY = valueY + labelFontSize;

    // min
    minFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
    minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2 ;
    minY = labelY;

    // max
    maxFontSize = ((widgetH / 16) > 10) ? (widgetH / 16) : 10;
    maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2 ;
    maxY = labelY;

  } else {
    // HALF *******************************

    // width more than height
    if(canvasW > canvasH) {
      widgetH = canvasH;
      widgetW = widgetH * 1.25;
      //if width doesn't fit, rescale both
      if(widgetW > canvasW) {
        aspect = widgetW / canvasW;
        widgetW = widgetW / aspect;
        widgetH = widgetH / aspect;
      }
    // width less than height
  } else if (canvasW < canvasH) {
    widgetW = canvasW;
    widgetH = widgetW / 1.25;
      // if height don't fit, rescale both
      if(widgetH > canvasH) {
        aspect = widgetH / canvasH;
        widgetH = widgetH / aspect;
        widgetW = widgetH / aspect;
      }
    // equal
  } else {
    widgetW = canvasW;
    widgetH = widgetW * 0.75;
  }

    // delta
    dx = (canvasW - widgetW)/2;
    dy = (canvasH - widgetH)/2;

    // title
    titleFontSize = ((widgetH / 8) > obj.config.titleMinFontSize) ? (widgetH / 10) : obj.config.titleMinFontSize;
    titleX = dx + widgetW / 2;
    titleY = dy + widgetH / 6.4;

    // value
    valueFontSize = ((widgetH / 6.5) > obj.config.valueMinFontSize) ? (widgetH / 6.5) : obj.config.valueMinFontSize;
    valueX = dx + widgetW / 2;
    valueY = dy + widgetH / 1.275;

    // label
    labelFontSize = ((widgetH / 16) > obj.config.labelMinFontSize) ? (widgetH / 16) : obj.config.labelMinFontSize;
    labelX = dx + widgetW / 2;
    labelY = valueY + valueFontSize / 2 + 5;

    // min
    minFontSize = ((widgetH / 16) > obj.config.minLabelMinFontSize) ? (widgetH / 16) : obj.config.minLabelMinFontSize;
    minX = dx + (widgetW / 10) + (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2 ;
    minY = labelY;

    // max
    maxFontSize = ((widgetH / 16) > obj.config.maxLabelMinFontSize) ? (widgetH / 16) : obj.config.maxLabelMinFontSize;
    maxX = dx + widgetW - (widgetW / 10) - (widgetW / 6.666666666666667 * obj.config.gaugeWidthScale) / 2 ;
    maxY = labelY;
  }

  // parameters
  obj.params  = {
    canvasW : canvasW,
    canvasH : canvasH,
    widgetW : widgetW,
    widgetH : widgetH,
    dx : dx,
    dy : dy,
    titleFontSize : titleFontSize,
    titleX : titleX,
    titleY : titleY,
    valueFontSize : valueFontSize,
    valueX : valueX,
    valueY : valueY,
    labelFontSize : labelFontSize,
    labelX : labelX,
    labelY : labelY,
    minFontSize : minFontSize,
    minX : minX,
    minY : minY,
    maxFontSize : maxFontSize,
    maxX : maxX,
    maxY : maxY
  };

  // var clear
  canvasW, canvasH, widgetW, widgetH, aspect, dx, dy, titleFontSize, titleX, titleY, valueFontSize, valueX, valueY, labelFontSize, labelX, labelY, minFontSize, minX, minY, maxFontSize, maxX, maxY = null

  // pki - custom attribute for generating gauge paths
  obj.canvas.customAttributes.pki = function (value, min, max, w, h, dx, dy, gws, donut) {

    var alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path;

    if (donut) {
      alpha = (1 - 2 * (value - min) / (max - min)) * Math.PI;
      Ro = w / 2 - w / 7;
      Ri = Ro - w / 6.666666666666667 * gws;

      Cx = w / 2 + dx;
      Cy = h / 1.95 + dy;

      Xo = w / 2 + dx + Ro * Math.cos(alpha);
      Yo = h - (h - Cy) - Ro * Math.sin(alpha);
      Xi = w / 2 + dx + Ri * Math.cos(alpha);
      Yi = h - (h - Cy) - Ri * Math.sin(alpha);

      path = "M" + (Cx - Ri) + "," + Cy + " ";
      path += "L" + (Cx - Ro) + "," + Cy + " ";
      if (value > ((max - min) / 2)) {
        path += "A" + Ro + "," + Ro + " 0 0 1 " + (Cx + Ro) + "," + Cy + " ";
      }
      path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
      path += "L" + Xi + "," + Yi + " ";
      if (value > ((max - min) / 2)) {
        path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx + Ri) + "," + Cy + " ";
      }
      path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
      path += "Z ";

      return { path: path };

    } else {
      alpha = (1 - (value - min) / (max - min)) * Math.PI;
      Ro = w / 2 - w / 10;
      Ri = Ro - w / 6.666666666666667 * gws;

      Cx = w / 2 + dx;
      Cy = h / 1.25 + dy;

      Xo = w / 2 + dx + Ro * Math.cos(alpha);
      Yo = h - (h - Cy) - Ro * Math.sin(alpha);
      Xi = w / 2 + dx + Ri * Math.cos(alpha);
      Yi = h - (h - Cy) - Ri * Math.sin(alpha);

      path = "M" + (Cx - Ri) + "," + Cy + " ";
      path += "L" + (Cx - Ro) + "," + Cy + " ";
      path += "A" + Ro + "," + Ro + " 0 0 1 " + Xo + "," + Yo + " ";
      path += "L" + Xi + "," + Yi + " ";
      path += "A" + Ri + "," + Ri + " 0 0 0 " + (Cx - Ri) + "," + Cy + " ";
      path += "Z ";

      return { path: path };
    }

    // var clear
    alpha, Ro, Ri, Cx, Cy, Xo, Yo, Xi, Yi, path = null;
  };

  // gauge
  obj.gauge = obj.canvas.path().attr({
      "stroke": "none",
      "fill": obj.config.gaugeColor,
      pki: [
        obj.config.max,
        obj.config.min,
        obj.config.max,
        obj.params.widgetW,
        obj.params.widgetH,
        obj.params.dx,
        obj.params.dy,
        obj.config.gaugeWidthScale,
        obj.config.donut
      ]
  });

  // level
  obj.level = obj.canvas.path().attr({
    "stroke": "none",
    "fill": getColor(obj.config.value, (obj.config.value - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors),
    pki: [
      obj.config.min,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut
    ]
  });
  if(obj.config.donut) {
    obj.level.transform("r" + obj.config.donutStartAngle + ", " + (obj.params.widgetW/2 + obj.params.dx) + ", " + (obj.params.widgetH/1.95 + obj.params.dy));
  }

  // title
  obj.txtTitle = obj.canvas.text(obj.params.titleX, obj.params.titleY, obj.config.title);
  obj.txtTitle.attr({
    "font-size":obj.params.titleFontSize,
    "font-weight":"normal",
     "color":"#ffffff",
	"text-transform":"uppercase",
    "font-family":"Open Sans",
    "fill":obj.config.titleFontColor,
    "fill-opacity":"1"
  });
  setDy(obj.txtTitle, obj.params.titleFontSize, obj.params.titleY);

  // value
  obj.txtValue = obj.canvas.text(obj.params.valueX, obj.params.valueY, 0);
  obj.txtValue.attr({
    "font-size":obj.params.valueFontSize,
    "font-weight":"normal",
    "color":"#ffffff",
    "font-family":"Open Sans",
    "fill":obj.config.valueFontColor,
    "fill-opacity":"0"
  });
  setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);

  // label
  obj.txtLabel = obj.canvas.text(obj.params.labelX, obj.params.labelY, obj.config.label);
  obj.txtLabel.attr({
    "font-size":obj.params.labelFontSize,
    "font-weight":"normal",
    "font-family":"Open Sans",
	"text-transform":"uppercase",
    "fill":obj.config.labelFontColor,
    "fill-opacity":"0"
  });
  setDy(obj.txtLabel, obj.params.labelFontSize, obj.params.labelY);

  // min
  obj.txtMinimum = obj.config.min;
  if( obj.config.humanFriendly ) {
    obj.txtMinimum = humanFriendlyNumber( obj.config.min, obj.config.humanFriendlyDecimal );
  } else if ( obj.config.formatNumber ) {
    obj.txtMinimum = formatNumber( obj.config.min );
  }
  obj.txtMin = obj.canvas.text(obj.params.minX, obj.params.minY, obj.txtMinimum);
  obj.txtMin.attr({
    "font-size":obj.params.minFontSize,
    "font-weight":"normal",
	"text-transform":"uppercase",
    "font-family":"Open Sans",
    "fill":obj.config.labelFontColor,
    "fill-opacity": (obj.config.hideMinMax || obj.config.donut)? "0" : "1"
  });
  setDy(obj.txtMin, obj.params.minFontSize, obj.params.minY);

  // max
  obj.txtMaximum = obj.config.max;
  if( obj.config.formatNumber ) {
    obj.txtMaximum = formatNumber( obj.txtMaximum );
  } else if( obj.config.humanFriendly ) {
    obj.txtMaximum = humanFriendlyNumber( obj.config.max, obj.config.humanFriendlyDecimal );
  }
  obj.txtMax = obj.canvas.text(obj.params.maxX, obj.params.maxY, obj.txtMaximum);
  obj.txtMax.attr({
    "font-size":obj.params.maxFontSize,
    "font-weight":"normal",
    "font-family":"Open Sans",
    "fill":obj.config.labelFontColor,
    "fill-opacity": (obj.config.hideMinMax || obj.config.donut)? "0" : "1"
  });
  setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);

  var defs = obj.canvas.canvas.childNodes[1];
  var svg = "http://www.w3.org/2000/svg";

  if (ie < 9) {
    onCreateElementNsReady(function() {
      obj.generateShadow(svg, defs);
    });
  } else {
    obj.generateShadow(svg, defs);
  }

  // var clear
  defs, svg = null;

  // set value to display
  if(obj.config.textRenderer) {
    obj.originalValue = obj.config.textRenderer(obj.originalValue);
  } else if(obj.config.humanFriendly) {
    obj.originalValue = humanFriendlyNumber( obj.originalValue, obj.config.humanFriendlyDecimal ) + obj.config.symbol;
  } else if(obj.config.formatNumber) {
    obj.originalValue = formatNumber(obj.originalValue) + obj.config.symbol;
  } else {
    obj.originalValue = (obj.originalValue * 1).toFixed(obj.config.decimals) + obj.config.symbol;
  }

  if(obj.config.counter === true) {
    //on each animation frame
    eve.on("raphael.anim.frame." + (obj.level.id), function() {
      var currentValue = obj.level.attr("pki");
      if(obj.config.textRenderer) {
        obj.txtValue.attr("text", obj.config.textRenderer(Math.floor(currentValue[0])));
      } else if(obj.config.humanFriendly) {
        obj.txtValue.attr("text", humanFriendlyNumber( Math.floor(currentValue[0]), obj.config.humanFriendlyDecimal ) + obj.config.symbol);
      } else if(obj.config.formatNumber) {
        obj.txtValue.attr("text", formatNumber(Math.floor(currentValue[0])) + obj.config.symbol);
      } else {
        obj.txtValue.attr("text", (currentValue[0] * 1).toFixed(obj.config.decimals) + obj.config.symbol);
      }
      setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
      currentValue = null;
    });
    //on animation end
    eve.on("raphael.anim.finish." + (obj.level.id), function() {
      obj.txtValue.attr({"text" : obj.originalValue});
      setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
    });
  } else {
    //on animation start
    eve.on("raphael.anim.start." + (obj.level.id), function() {
      obj.txtValue.attr({"text" : obj.originalValue});
      setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
    });
  }

  // animate gauge level, value & label
  obj.level.animate({
    pki: [
      obj.config.value,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut
    ]
  }, obj.config.startAnimationTime, obj.config.startAnimationType);
  obj.txtValue.animate({"fill-opacity":(obj.config.hideValue)?"0":"1"}, obj.config.startAnimationTime, obj.config.startAnimationType);
  obj.txtLabel.animate({"fill-opacity":"1"}, obj.config.startAnimationTime, obj.config.startAnimationType);
};

//
// tiny helper function to lookup value of a key from two hash tables
// if none found, return defaultvalue
//
// key: string
// tablea: object
// tableb: DOMStringMap|object
// defval: string|integer|float|null
// datatype: return datatype
// delimiter: delimiter to be used in conjunction with datatype formatting
//
JustGage.prototype.kvLookup = function(key, tablea, tableb, defval, datatype, delimiter) {
  var val = defval;
  var canConvert = false;
  if (!(key === null || key === undefined)) {
      if (tableb !== null && tableb !== undefined && typeof tableb === "object" && key in tableb) {
          val = tableb[key];
          canConvert = true;
      } else if (tablea !== null && tablea !== undefined && typeof tablea === "object" && key in tablea) {
          val = tablea[key];
          canConvert = true;
      } else {
          val = defval;
      }
      if (canConvert === true) {
          if (datatype !== null && datatype !== undefined) {
              switch(datatype) {
                  case 'int':
                    val = parseInt(val, 10);
                    break;
                  case 'float':
                    val = parseFloat(val);
                    break;
                  case 'array':
                    delimiter = delimiter ? delimiter : ',';
                    val = val.split(delimiter);
                    break;
                  default:
                    break;
              }
          }
      }
  }
  return val;
};

/** Refresh gauge level */
JustGage.prototype.refresh = function(val, max) {

  var obj = this;
  var displayVal, color, max = max || null;

  // set new max
  if(max !== null) {
    obj.config.max = max;

    obj.txtMaximum = obj.config.max;
    if( obj.config.humanFriendly ) {
      obj.txtMaximum = humanFriendlyNumber( obj.config.max, obj.config.humanFriendlyDecimal );
    } else if( obj.config.formatNumber ) {
      obj.txtMaximum = formatNumber( obj.config.max );
    }
    obj.txtMax.attr({"text" : obj.txtMaximum});
    setDy(obj.txtMax, obj.params.maxFontSize, obj.params.maxY);
  }

  // overflow values
  displayVal = val;
  if ((val * 1) > (obj.config.max * 1)) {val = (obj.config.max * 1);}
  if ((val * 1) < (obj.config.min * 1)) {val = (obj.config.min * 1);}

  color = getColor(val, (val - obj.config.min) / (obj.config.max - obj.config.min), obj.config.levelColors, obj.config.noGradient, obj.config.customSectors);

  if(obj.config.textRenderer) {
    displayVal = obj.config.textRenderer(displayVal);
  } else if( obj.config.humanFriendly ) {
    displayVal = humanFriendlyNumber( displayVal, obj.config.humanFriendlyDecimal ) + obj.config.symbol;
  } else if( obj.config.formatNumber ) {
    displayVal = formatNumber((displayVal * 1).toFixed(obj.config.decimals)) + obj.config.symbol;
  } else {
    displayVal = (displayVal * 1).toFixed(obj.config.decimals) + obj.config.symbol;
  }
  obj.originalValue = displayVal;
  obj.config.value = val * 1;

  if(!obj.config.counter) {
    obj.txtValue.attr({"text":displayVal});
    setDy(obj.txtValue, obj.params.valueFontSize, obj.params.valueY);
  }

  obj.level.animate({
    pki: [
      obj.config.value,
      obj.config.min,
      obj.config.max,
      obj.params.widgetW,
      obj.params.widgetH,
      obj.params.dx,
      obj.params.dy,
      obj.config.gaugeWidthScale,
      obj.config.donut
    ],
    "fill":color
  },  obj.config.refreshAnimationTime, obj.config.refreshAnimationType);

  // var clear
  obj, displayVal, color, max = null;
};

/** Generate shadow */
JustGage.prototype.generateShadow = function(svg, defs) {

  var obj = this;
  var gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3;

  // FILTER
  gaussFilter = document.createElementNS(svg,"filter");
  gaussFilter.setAttribute("id","inner-shadow");
  defs.appendChild(gaussFilter);

  // offset
  feOffset = document.createElementNS(svg,"feOffset");
  feOffset.setAttribute("dx", 0);
  feOffset.setAttribute("dy", obj.config.shadowVerticalOffset);
  gaussFilter.appendChild(feOffset);

  // blur
  feGaussianBlur = document.createElementNS(svg,"feGaussianBlur");
  feGaussianBlur.setAttribute("result","offset-blur");
  feGaussianBlur.setAttribute("stdDeviation", obj.config.shadowSize);
  gaussFilter.appendChild(feGaussianBlur);

  // composite 1
  feComposite1 = document.createElementNS(svg,"feComposite");
  feComposite1.setAttribute("operator","out");
  feComposite1.setAttribute("in", "SourceGraphic");
  feComposite1.setAttribute("in2","offset-blur");
  feComposite1.setAttribute("result","inverse");
  gaussFilter.appendChild(feComposite1);

  // flood
  feFlood = document.createElementNS(svg,"feFlood");
  feFlood.setAttribute("flood-color","black");
  feFlood.setAttribute("flood-opacity", obj.config.shadowOpacity);
  feFlood.setAttribute("result","color");
  gaussFilter.appendChild(feFlood);

  // composite 2
  feComposite2 = document.createElementNS(svg,"feComposite");
  feComposite2.setAttribute("operator","in");
  feComposite2.setAttribute("in", "color");
  feComposite2.setAttribute("in2","inverse");
  feComposite2.setAttribute("result","shadow");
  gaussFilter.appendChild(feComposite2);

  // composite 3
  feComposite3 = document.createElementNS(svg,"feComposite");
  feComposite3.setAttribute("operator","over");
  feComposite3.setAttribute("in", "shadow");
  feComposite3.setAttribute("in2","SourceGraphic");
  gaussFilter.appendChild(feComposite3);

  // set shadow
  if (!obj.config.hideInnerShadow) {
    obj.canvas.canvas.childNodes[2].setAttribute("filter", "url(#inner-shadow)");
    obj.canvas.canvas.childNodes[3].setAttribute("filter", "url(#inner-shadow)");
  }

  // var clear
  gaussFilter, feOffset, feGaussianBlur, feComposite1, feFlood, feComposite2, feComposite3 = null;

};

/** Get color for value */
function getColor(val, pct, col, noGradient, custSec) {

  var no, inc, colors, percentage, rval, gval, bval, lower, upper, range, rangePct, pctLower, pctUpper, color;
  var noGradient = noGradient || custSec.length > 0;

  if(custSec.length > 0) {
    for(var i = 0; i < custSec.length; i++) {
      if(val > custSec[i].lo && val <= custSec[i].hi) {
        return custSec[i].color;
      }
    }
  }

  no = col.length;
  if (no === 1) return col[0];
  inc = (noGradient) ? (1 / no) : (1 / (no - 1));
  colors = [];
  for (i = 0; i < col.length; i++) {
    percentage = (noGradient) ? (inc * (i + 1)) : (inc * i);
    rval = parseInt((cutHex(col[i])).substring(0,2),16);
    gval = parseInt((cutHex(col[i])).substring(2,4),16);
    bval = parseInt((cutHex(col[i])).substring(4,6),16);
    colors[i] = { pct: percentage, color: { r: rval, g: gval, b: bval  } };
  }

  if(pct === 0) {
    return 'rgb(' + [colors[0].color.r, colors[0].color.g, colors[0].color.b].join(',') + ')';
  }

  for (var j = 0; j < colors.length; j++) {
    if (pct <= colors[j].pct) {
      if (noGradient) {
        return 'rgb(' + [colors[j].color.r, colors[j].color.g, colors[j].color.b].join(',') + ')';
      } else {
        lower = colors[j - 1];
        upper = colors[j];
        range = upper.pct - lower.pct;
        rangePct = (pct - lower.pct) / range;
        pctLower = 1 - rangePct;
        pctUpper = rangePct;
        color = {
          r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
          g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
          b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
        };
        return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
      }
    }
  }

}

/** Fix Raphael display:none tspan dy attribute bug */
function setDy(elem, fontSize, txtYpos) {
  if (!ie || ie > 9) {
    elem.node.firstChild.attributes.dy.value = 0;
  }
}

/** Random integer  */
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**  Cut hex  */
function cutHex(str) {
  return (str.charAt(0)=="#") ? str.substring(1,7):str;
}

/**  Human friendly number suffix - From: http://stackoverflow.com/questions/2692323/code-golf-friendly-number-abbreviator */
function humanFriendlyNumber( n, d ) {
  var p, d2, i, s;

  p = Math.pow;
  d2 = p(10, d);
  i = 7;
  while( i ) {
    s = p(10,i--*3);
    if( s <= n ) {
     n = Math.round(n*d2/s)/d2+"KMGTPE"[i];
   }
 }
 return n;
}

/** Format numbers with commas - From: http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */
function formatNumber(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

/**  Get style  */
function getStyle(oElm, strCssRule){
  var strValue = "";
  if(document.defaultView && document.defaultView.getComputedStyle){
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
  }
  else if(oElm.currentStyle){
    strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}

/**  Create Element NS Ready  */
function onCreateElementNsReady(func) {
  if (document.createElementNS !== undefined) {
    func();
  } else {
    setTimeout(function() { onCreateElementNsReady(func); }, 100);
  }
}

/**  Get IE version  */
// ----------------------------------------------------------
// A short snippet for detecting versions of IE in JavaScript
// without resorting to user-agent sniffing
// ----------------------------------------------------------
// If you're not in IE (or IE version is less than 5) then:
// ie === undefined
// If you're in IE (>=5) then you can determine which version:
// ie === 7; // IE7
// Thus, to detect IE:
// if (ie) {}
// And to detect the version:
// ie === 6 // IE6
// ie > 7 // IE8, IE9 ...
// ie < 9 // Anything less than IE9
// ----------------------------------------------------------
// UPDATE: Now using Live NodeList idea from @jdalton
var ie = (function(){

  var undef,
  v = 3,
  div = document.createElement('div'),
  all = div.getElementsByTagName('i');

  while (
    div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
    all[0]
    );
    return v > 4 ? v : undef;
}());

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