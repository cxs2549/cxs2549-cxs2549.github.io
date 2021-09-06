(this["webpackJsonpreact-portfolio-v2"]=this["webpackJsonpreact-portfolio-v2"]||[]).push([[0],{26:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var i,a=e(0),o=e.n(a),r=e(9),s=e.n(r),c=e(2),d=e(3),l=Object(d.a)(i||(i=Object(c.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n    body {\n        font-family: 'Comfortaa', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n\t    -moz-osx-font-smoothing: grayscale;\n        background-color: #537895;\nbackground-image: linear-gradient(315deg, #537895 0%, #09203f 74%);\n\n\n\n        height: 100vh;\n        overflow: hidden;\n        color: white;\n    }\n    button, svg, a {\n        cursor: pointer;\n    }\n"]))),m=e(4),p=e(13),h=e.n(p),u=(e(26),e(1));var x,b,g=function(t){var n=t.data,e=t.time,i=t.width,o=t.height,r=t.captionStyle,s=t.slideNumberStyle,c=t.radius,d=t.slideNumber,l=t.style,p=t.captionPosition,x=t.dots,b=t.automatic,g=t.pauseIconColor,f=t.pauseIconSize,j=t.slideBackgroundColor,v=t.slideImageFit,w=t.thumbnails,y=t.thumbnailWidth,O=Object(a.useState)(0),N=Object(m.a)(O,2),k=N[0],S=N[1],C=Object(a.useState)(!1),z=Object(m.a)(C,2),I=z[0],W=z[1],L=Object(a.useState)(0),B=Object(m.a)(L,2),E=B[0],M=B[1],F=function(t){k+t>=n.length?S(0):S(k+t<0?n.length-1:k+t)};return Object(a.useEffect)((function(){if(b){var t=k,i=setInterval((function(){I||(S(t),++t>=n.length&&(t=0),t<0&&(t=n.length-1))}),e||2e3);return function(){clearInterval(i)}}}),[I,E]),Object(a.useEffect)((function(){var t,e=document.getElementsByClassName("carousel-item"),i=document.getElementsByClassName("dot"),a=k;for(t=0;t<n.length;t++)e[t].style.display="none";for(t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");if(w){var o=document.getElementsByClassName("thumbnail");for(t=0;t<o.length;t++)o[t].className=o[t].className.replace(" active-thumbnail","");void 0!==o[a]&&(o[a].className+=" active-thumbnail"),function(t){var n=t.offsetLeft+t.offsetWidth,e=t.parentNode.offsetLeft+t.parentNode.offsetWidth;n>=e+t.parentNode.scrollLeft?t.parentNode.scroll({left:n-e,behavior:"smooth"}):n<=t.parentNode.offsetLeft+t.parentNode.scrollLeft&&t.parentNode.scroll({left:t.offsetLeft-t.parentNode.offsetLeft,behavior:"smooth"})}(document.getElementById("thumbnail-".concat(a)))}void 0!==e[a]&&(e[a].style.display="block"),void 0!==i[a]&&(i[a].className+=" active")}),[k,I]),Object(u.jsxs)("div",{style:l,className:"box",children:[Object(u.jsx)("div",{style:{maxWidth:i||"600px",maxHeight:o||"400px"},children:Object(u.jsx)(h.a,{onSwipeRight:function(){F(-1),M(!E)},onSwipeLeft:function(){F(1),M(!E)},children:Object(u.jsxs)("div",{className:"carousel-container",style:{maxWidth:i||"600px",height:o||"400px",backgroundColor:j||"darkgrey",borderRadius:c},children:[n.map((function(t,e){return Object(u.jsxs)("div",{className:"carousel-item fade",style:{maxWidth:i||"600px",maxHeight:o||"400px"},onMouseDown:function(t){b&&W(!0)},onMouseUp:function(t){b&&W(!1)},onMouseLeave:function(t){b&&W(!1)},onTouchStart:function(t){b&&W(!0)},onTouchEnd:function(t){b&&W(!1)},children:[d&&Object(u.jsxs)("div",{className:"slide-number",style:s,children:[e+1," / ",n.length]}),Object(u.jsx)("a",{href:t.url,target:"_blank",children:Object(u.jsx)("img",{src:t.image,alt:t.caption,className:"carousel-image",style:{borderRadius:c,objectFit:v||"cover"}})}),I&&Object(u.jsx)("div",{className:"pause-icon pause",style:{color:g||"white",fontSize:f||"40px"},children:"II"}),Object(u.jsx)("div",{className:"carousel-caption-".concat(p||"bottom"),style:r,children:t.caption})]},e)})),Object(u.jsx)("span",{className:"prev",href:"/",onClick:function(t){F(-1),M(!E)},children:"\u276e"}),Object(u.jsx)("span",{className:"next",href:"/",onClick:function(t){F(1),M(!E)},children:"\u276f"}),x&&Object(u.jsx)("div",{className:"dots",children:n.map((function(t,n){return Object(u.jsx)("span",{className:"dot",onClick:function(t){S(n),M(!E)}},n)}))})]})})}),w&&Object(u.jsx)("div",{className:"thumbnails",id:"thumbnail-div",style:{maxWidth:i},children:n.map((function(t,n){return Object(u.jsx)("img",{width:y||"100px",src:t.image,alt:t.caption,className:"thumbnail",id:"thumbnail-".concat(n),onClick:function(t){S(n),M(!E)}},n)}))})]})},f=e.p+"static/media/marriott.512de5a5.png",j=e.p+"static/media/arbys.6d7c2dc3.png",v=e.p+"static/media/del-taco.6b5bb3d3.png",w=e.p+"static/media/carvana.f935d19a.png",y=e.p+"static/media/xbox.e668b1df.png",O=(e.p,e.p+"static/media/hbo.0dcb0abb.png"),N=(e.p,e.p,e.p,d.b.div(x||(x=Object(c.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tmargin-bottom: 1rem;\n\th2 {\n\t}\n\th2 {\n\t\tfont-size: 220%;\n\t\tpadding: 0 1rem;\n\t\tline-height: 1;\n\t\ttext-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n\t\t@media (min-width: 640px) {\n\t\t\tpadding: 0 2rem;\n\t\t}\n\t\t@media (min-width: 768px) {\n\t\t\tfont-size: 440%;\n\t\t}\n\t\t@media (min-width: 1280px) {\n\t\t\tfont-size: 440%;\n\t\t}\n\t}\n"])))),k=function(){return Object(u.jsx)(N,{children:Object(u.jsx)("h2",{children:"phobia Webworks"})})},S=d.b.div(b||(b=Object(c.a)(["\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-flow: column;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tgap: 1rem;\n\tpadding: 1.5rem 0;\n\tpadding-bottom: 0;\n\n\tbackground-color: #7f5a83;\n\tbackground-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);\n\n\tposition: relative;\n\tz-index: 0;\n\tborder: none;\n\toverflow: hidden;\n\t@media (min-width: 640px) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 100px 400px auto auto;\n\t}\n\t@media (min-width: 768px) {\n\t\tgap: .5rem;\n\t}\n\t@media (min-width: 1280px) {\n\t\theight: 92vh;\n\t\tborder-radius: 13px;\n\t\tbox-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n\t\tmargin-top: 2rem;\n\t}\n\n\t#slides {\n\t\tmargin: 0 auto;\n\t\tmax-width: 100%;\n\t}\n\t.box {\n\t\tmax-width: 100vw;\n\t\t.carousel-item {\n\t\t\tpadding: 0 1rem;\n\t\t\tborder-radius: 3px;\n\t\t\tbackground-color: transparent;\n\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t\t.carousel-image {\n\t\t\tobject-position: top;\n\t\t\t/* border-radius: 99px; */\n\t\t\tborder-radius: 3px;\n\t\t\theight: 100%;\n\t\t\tmax-width: 900px !important;\n\t\t}\n\t\t#thumbnail-div {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tmax-width: 100vw;\n\t\t\t/* margin-bottom: 1rem; */\n\t\t\timg {\n\t\t\t\tborder-radius: 3px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.thumbnail {\n\t\t\t\tmax-width: 50px;\n\t\t\t\t@media (min-width: 640px) {\n\t\t\t\t\tmax-width: 75px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.prev,\n\t\t.next {\n\t\t\tfont-size: 2.5rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t\t.prev {\n\t\t\tleft: -2rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tleft: -3.5rem;\n\t\t\t}\n\t\t}\n\t\t.next {\n\t\t\tright: -2rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tright: -3.5rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t#technologies {\n\t\tbackground-color: transparent;\n\n\t\t@media (min-width: 640px) {\n\t\t\tmargin-top: 6rem;\n\t\t}\n\t\tpadding: 0 1rem;\n\t\tp {\n\t\t\tfont-size: 140%;\n\t\t\tfont-weight: 500;\n\t\t\ttext-align: center;\n\t\t\ttext-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n\t\t\t@media (min-width: 1280px) {\n\t\t\t\tfont-size: 180%;\n\t\t\t}\n\t\t}\n\t\t@media (min-width: 768px) {\n\t\t\tgrid-column: 1/2;\n\t\t\tpadding: 1rem;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#tech {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tgap: 1rem;\n\t\t\tpadding: 1rem 0;\n\t\t\tmax-width: 360px;\n\t\t\tmargin: 0 auto;\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tgap: 2rem;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t\t#icon {\n\t\t\t\tbackground-color: white;\n\t\t\t\tborder-radius: 99999px;\n\t\t\t\taspect-ratio: 1/1;\n\t\t\t\theight: 60px;\n\t\t\t\twidth: 60px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tbox-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n\t\t\t\tw &:nth-of-type(2) img {\n\t\t\t\t\ttransform: scale(0.8);\n\t\t\t\t}\n\t\t\t\t&:nth-of-type(3) img {\n\t\t\t\t\ttransform: scale(0.6);\n\t\t\t\t}\n\t\t\t\timg {\n\t\t\t\t\tmax-width: 80px;\n\t\t\t\t\ttransform: scale(0.6);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\tfooter {\n\t\tfont-size: 80%;\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tpadding: 2rem 0;\n\t\tmargin-top: auto;\n\t\tbackground-color: #c8221b;\n\t}\n"]))),C=function(){var t=[{image:f,url:"https://cxs2549.github.io/react-marriott/"},{image:j,url:"https://cxs2549.github.io/react-arbys/"},{image:v,url:"https://cxs2549.github.io/react-del-taco/"},{image:w,url:"https://cxs2549.github.io/react-carvana/"},{image:y,url:"https://cxs2549.github.io/react-xbox/"},{image:O,url:"https://cxs2549.github.io/react-hbo-max-v2/"}];return Object(u.jsxs)(S,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(k,{}),Object(u.jsx)("div",{id:"slides",children:Object(u.jsx)(g,{data:t,time:4e3,width:"900px",height:"500px",radius:"10px",captionPosition:"bottom",automatic:!0,dots:!1,pauseIconColor:"blue",pauseIconSize:"40px",slideBackgroundColor:"transparent",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"100px",style:{textAlign:"center",maxWidth:"100%",maxHeight:"500px",margin:"0px auto"}})})]})};s.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5de7bf82.chunk.js.map