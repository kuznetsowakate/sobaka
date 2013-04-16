
<script>
  /*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
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
 * @param String key The key of the cookie.
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
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};










$(document).ready(function(){
var popupSobaka = "popupSobaka",
	popupOptions = {expires:30, path:'/'},
	popupOptionsLong = {expires:20000, path:'/'},
	str=document.referrer,
	found = str.match("surfingbird.ru");
console.log(found + " "  + str);



$(".neverShow").click(function(){
	$.cookie('popupSobaka', "show", popupOptionsLong);
	$("#popup").css("display","none");
	$("#parent_popup").css("display","none");
});



if($.cookie('popupSobaka')=="show" || location.href == "www.sobaka.ru" ||  location.href == "www.sobaka.ru/" || location.href == "sobaka.ru"||  location.href == "http://www.sobaka.ru" ||  location.href == "http://www.sobaka.ru/" || found !== null ){
	$("#popup").css("display","none");
	$("#parent_popup").css("display","none");
console.log(found);
} else {

		$("#popup").css("display","block");
	$("#parent_popup").css("display","block");
	$.cookie('popupSobaka', "show", popupOptions);
console.log(found);
}
});

</script>
<style>
#parent_popup {
  background: #fff;
  height: 100%;
  opacity: 0.7;
  position: fixed;
  width: 100%;
  z-index:999998;
  top: 0;
  left: 0;
display:none;
}
#popup {
  background-color: #fff;
  height: 514px;
  position: fixed;
  top: 100px;
  left: 50%;
  margin-left:-137px;
  color: #000;
  width: 275px;
  box-shadow:1px 1px 10px #777;
  z-index:999999;
display:none;
}

#popupClose{
	position:fixed;
	top:100px;
	left: 50%;
	margin-left:-137px;
	width:275px;
	height:25px;
	background:#000;
}

#popupClose img{
	margin-left:249px;
        margin-top:0px;
}

#dog{
	margin:31px 0 0 69px;
}

#popup p{
	text-align:center;
        font-family:Georgia, TimesNewRoman, serif;
        font-size:14px;
}

#popup em{
	font-size:11px;
        text-align:center;
        /*position:absolute;
        bottom:20px;*/
}
</style>


<div id="parent_popup" onclick="document.getElementById('parent_popup').style.display='none'; document.getElementById('popup').style.display='none';">

</div>
  <div id="popup">
    <div id="popupClose" ><img style="cursor: pointer;" onclick="document.getElementById('parent_popup').style.display='none'; document.getElementById('popup').style.display='none';" src="http://specialproject.timeout.ru/files/sobaka/popup/img/popupClose.png"></div>
	<img id="dog" src="http://specialproject.timeout.ru/files/sobaka/popup/img/dog.png">
    <p>Легко и просто<br /> следить за новостями,<br /> подписавшись в соцсетях</p>
	
	<div class="fb-like-box" style="margin-left:37px;margin-bottom:10px;margin-top:15px;" data-href="https://www.facebook.com/spb.sobaka.ru" data-width="200" data-height="70" data-show-faces="false" data-stream="false" data-header="false"></div>
	
<div style="width:200px; height:146px; margin-left:37px;">	
<script type="text/javascript" src="//vk.com/js/api/openapi.js?75"></script>

<!-- VK Widget -->
<div id="vk_groups1"></div>
<script type="text/javascript">
VK.Widgets.Group("vk_groups1", {mode: 1, width: "200", height: "50"}, 15911874);
</script>
</div>

	 <p><a href="#1" class="neverShow" style="text-decoration:underline;color:#000;"><em>Не показывать это окно впредь!</em></a></p>
  </div>