// jQuery Mask Plugin v1.13.8
// github.com/igorescobar/jQuery-Mask-Plugin
(function(a){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(jQuery||Zepto)})(function(a){var x=function(b,e,d){var c={invalid:[],getCaret:function(){try{var r,a=0,e=b.get(0),f=document.selection,d=e.selectionStart;if(f&&-1===navigator.appVersion.indexOf("MSIE 10"))r=f.createRange(),r.moveStart("character",-c.val().length),a=r.text.length;else if(d||"0"===d)a=d;return a}catch(h){}},setCaret:function(r){try{if(b.is(":focus")){var a;
a=b.get(0).createTextRange();a.collapse(!0);a.moveEnd("character",r);a.moveStart("character",r);a.select()}}catch(c){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which)}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){n===c.val()||b.data("changed")||b.trigger("change");b.data("changed",
!1)}).on("blur.mask",function(){n=c.val()}).on("focus.mask",function(b){!0===d.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var b=[],a,c,f,d,h=0;h<e.length;h++)(a=g.translation[e.charAt(h)])?(c=a.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=a.optional,(a=a.recursive)?(b.push(e.charAt(h)),d={digit:e.charAt(h),pattern:c}):b.push(f||a?c+"?":c)):b.push(e.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));
b=b.join("");d&&(b=b.replace(new RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(new RegExp(d.digit,"g"),d.pattern));return new RegExp(b)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);c=b}else c=b[c]();return c},getMCharsBeforeCount:function(b,a){for(var c=0,d=0,l=e.length;d<l&&d<b;d++)g.translation[e.charAt(d)]||(b=a?b+1:b,c++);return c},
caretPos:function(b,a,d,f){return g.translation[e.charAt(Math.min(b-1,e.length-1))]?Math.min(b+d-a-f,d):c.caretPos(b+1,a,d,f)},behaviour:function(d){d=d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,g.byPassKeys)){var p=c.getCaret(),f=c.val().length,l=c.getMasked(),h=l.length,n=c.getMCharsBeforeCount(h-1)-c.getMCharsBeforeCount(f-1),m=p<f;c.val(l);m&&(8!==e&&46!==e&&(p=c.caretPos(p,f,h,n)),c.setCaret(p));return c.callbacks(d)}},getMasked:function(b){var a=[],p=c.val(),
f=0,l=e.length,h=0,n=p.length,m=1,k="push",t=-1,s,v;d.reverse?(k="unshift",m=-1,s=0,f=l-1,h=n-1,v=function(){return-1<f&&-1<h}):(s=l-1,v=function(){return f<l&&h<n});for(;v();){var w=e.charAt(f),u=p.charAt(h),q=g.translation[w];if(q)u.match(q.pattern)?(a[k](u),q.recursive&&(-1===t?t=f:f===s&&(f=t-m),s===t&&(f-=m)),f+=m):q.optional?(f+=m,h-=m):q.fallback?(a[k](q.fallback),f+=m,h-=m):c.invalid.push({p:h,v:u,e:q.pattern}),h+=m;else{if(!b)a[k](w);u===w&&(h+=m);f+=m}}b=e.charAt(s);l!==n+1||g.translation[b]||
a.push(b);return a.join("")},callbacks:function(a){var g=c.val(),k=g!==n,f=[g,a,b,d],l=function(b,a,c){"function"===typeof d[b]&&a&&d[b].apply(this,c)};l("onChange",!0===k,f);l("onKeyPress",!0===k,f);l("onComplete",g.length===e.length,f);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,d])}};b=a(b);var g=this,n=c.val(),k;e="function"===typeof e?e(c.val(),void 0,b,d):e;g.mask=e;g.options=d;g.remove=function(){var a=c.getCaret();c.destroyEvents();c.val(g.getCleanVal());c.setCaret(a-c.getMCharsBeforeCount(a));
return b};g.getCleanVal=function(){return c.getMasked(!0)};g.init=function(e){e=e||!1;d=d||{};g.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;g.byPassKeys=a.jMaskGlobals.byPassKeys;g.translation=a.extend({},a.jMaskGlobals.translation,d.translation);g=a.extend(!0,{},g,d);k=c.getRegexMask();!1===e?(d.placeholder&&b.attr("placeholder",d.placeholder),b.data("mask")&&b.attr("autocomplete","off"),c.destroyEvents(),c.events(),e=c.getCaret(),c.val(c.getMasked()),c.setCaret(e+c.getMCharsBeforeCount(e,!0))):
(c.events(),c.val(c.getMasked()))};g.init(!b.is("input"))};a.maskWatchers={};var z=function(){var b=a(this),e={},d=b.attr("data-mask");b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(y(b,d,e))return b.data("mask",new x(this,d,e))},y=function(b,e,d){d=d||{};var c=a(b).data("mask"),g=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==
typeof c||g(c.options)!==g(d)||c.mask!==e}catch(k){}};a.fn.mask=function(b,e){e=e||{};var d=this.selector,c=a.jMaskGlobals,g=a.jMaskGlobals.watchInterval,k=function(){if(y(this,b,e))return a(this).data("mask",new x(this,b,e))};a(this).each(k);d&&""!==d&&c.watchInputs&&(clearInterval(a.maskWatchers[d]),a.maskWatchers[d]=setInterval(function(){a(document).find(d).each(k)},g));return this};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);delete a.maskWatchers[this.selector];return this.each(function(){var b=
a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(z)};var k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:function(a){var e=document.createElement("div");a="on"+a;var d=a in e;d||(e.setAttribute(a,"return;"),d="function"===typeof e[a]);
return d}("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)});