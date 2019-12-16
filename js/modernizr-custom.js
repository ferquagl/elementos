/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-cssall-htmlimports-inlinesvg-mathml-video-websockets-setclasses !*/
!function(e,n,o){function t(e,n){return typeof e===n}function a(){var e,n,o,a,i,s,r;for(var c in p)if(p.hasOwnProperty(c)){if(e=[],n=p[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(a=t(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],r=s.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),d.push((a?"":"no-")+r.join("-"))}}function i(e){var n=u.className,o=Modernizr._config.classPrefix||"";if(y&&(n=n.baseVal),Modernizr._config.enableJSClass){var t=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(t,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),y?u.className.baseVal=n:u.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):y?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(e,n){if("object"==typeof e)for(var o in e)m(e,o)&&r(o,e[o]);else{e=e.toLowerCase();var t=e.split("."),a=Modernizr[t[0]];if(2==t.length&&(a=a[t[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==t.length?Modernizr[t[0]]=n:(!Modernizr[t[0]]||Modernizr[t[0]]instanceof Boolean||(Modernizr[t[0]]=new Boolean(Modernizr[t[0]])),Modernizr[t[0]][t[1]]=n),i([(n&&0!=n?"":"no-")+t.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function c(){var e=n.body;return e||(e=s(y?"svg":"body"),e.fake=!0),e}function l(e,o,t,a){var i,r,l,d,p="modernizr",f=s("div"),y=c();if(parseInt(t,10))for(;t--;)l=s("div"),l.id=a?a[t]:p+(t+1),f.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+p,(y.fake?y:f).appendChild(i),y.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=p,y.fake&&(y.style.background="",y.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(y)),r=o(f,e),y.fake?(y.parentNode.removeChild(y),u.style.overflow=d,u.offsetHeight):f.parentNode.removeChild(f),!!r}var d=[],p=[],f={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){p.push({name:e,fn:n,options:o})},addAsyncTest:function(e){p.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var u=n.documentElement;Modernizr.addTest("cssall","all"in u.style);var y="svg"===u.nodeName.toLowerCase(),h=!1;try{h="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(v){}Modernizr.addTest("websockets",h),Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return n}),Modernizr.addTest("audio",function(){var e=s("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(o){}return n}),Modernizr.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var m;!function(){var e={}.hasOwnProperty;m=t(e,"undefined")||t(e.call,"undefined")?function(e,n){return n in e&&t(e.constructor.prototype[n],"undefined")}:function(n,o){return e.call(n,o)}}(),f._l={},f.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},f._trigger=function(e,n){if(this._l[e]){var o=this._l[e];setTimeout(function(){var e,t;for(e=0;e<o.length;e++)(t=o[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){f.addTest=r}),r("htmlimports","import"in s("link"));var g=f.testStyles=l;Modernizr.addTest("mathml",function(){var e;return g("#modernizr{position:absolute;display:inline-block}",function(n){n.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",e=n.offsetHeight>n.offsetWidth}),e}),a(),i(d),delete f.addTest,delete f.addAsyncTest;for(var w=0;w<Modernizr._q.length;w++)Modernizr._q[w]();e.Modernizr=Modernizr}(window,document);