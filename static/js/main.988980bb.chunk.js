(this["webpackJsonpreact-portfolio-v2"]=this["webpackJsonpreact-portfolio-v2"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var i,a,o=n(1),A=n.n(o),s=n(9),c=n.n(s),r=n(2),l=n(3),d=n.p+"static/media/streets.cadfdbde.jpg",g=Object(l.a)(i||(i=Object(r.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n    body {\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n\t    -moz-osx-font-smoothing: grayscale;\n        background-color: red;\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        /* justify-content: center; */\n\n        height: 100vh;\n        overflow: hidden;\n        color: white;\n        background-image: url(",");\n        background-repeat: no-repeat;\n        background-size: cover;\n        position: relative;\n        &::after {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n           \n            background-color: #bd4f6c;\nbackground-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%), linear-gradient(315deg, #a40606 0%, #d98324 74%);\n ;\nopacity: .4;\n\n            z-index: -1;\n        }\n    }\n    button, svg, a {\n        cursor: pointer;\n    }\n"])),d),m=n(0),x=l.b.div(a||(a=Object(r.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tmargin-bottom: 1rem;\n\t/* background-color: rgba(0,0,0,.4); */\n\tborder-radius: 13px;\n\tmargin: 1rem;\n\tjustify-content: center;\n\tpadding: 1rem;\n\t@media (min-width: 768px) {\n\n\t}\n\th2 {\n\t}\n\th2 {\n\t\tfont-size: 220%;\n\t\tline-height: 1;\n\t\ttext-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n\t\t@media (min-width: 640px) {\n\t\t\tpadding: 0 2rem;\n\t\t}\n\t\t@media (min-width: 768px) {\n\t\t\tfont-size: 440%;\n\t\t}\n\t\t@media (min-width: 1280px) {\n\t\t\tfont-size: 440%;\n\t\t}\n\t}\n"]))),p=function(){return Object(m.jsxs)(x,{children:[Object(m.jsx)("h2",{children:" cliff sanchez"}),Object(m.jsx)("h3",{children:"los angeles, ca"})]})},b=n(4),u=n(13),h=n.n(u);n(27);var f,w,y,j=function(t){var e=t.data,n=t.time,i=t.width,a=t.height,A=t.captionStyle,s=t.slideNumberStyle,c=t.radius,r=t.slideNumber,l=t.style,d=t.captionPosition,g=t.dots,x=t.automatic,p=t.pauseIconColor,u=t.pauseIconSize,f=t.slideBackgroundColor,w=t.slideImageFit,y=t.thumbnails,j=t.thumbnailWidth,E=Object(o.useState)(0),B=Object(b.a)(E,2),M=B[0],Q=B[1],k=Object(o.useState)(!1),C=Object(b.a)(k,2),v=C[0],N=C[1],K=Object(o.useState)(0),S=Object(b.a)(K,2),D=S[0],F=S[1],I=function(t){M+t>=e.length?Q(0):Q(M+t<0?e.length-1:M+t)};return Object(o.useEffect)((function(){if(x){var t=M,i=setInterval((function(){v||(Q(t),++t>=e.length&&(t=0),t<0&&(t=e.length-1))}),n||2e3);return function(){clearInterval(i)}}}),[v,D]),Object(o.useEffect)((function(){var t,n=document.getElementsByClassName("carousel-item"),i=document.getElementsByClassName("dot"),a=M;for(t=0;t<e.length;t++)n[t].style.display="none";for(t=0;t<i.length;t++)i[t].className=i[t].className.replace(" active","");if(y){var o=document.getElementsByClassName("thumbnail");for(t=0;t<o.length;t++)o[t].className=o[t].className.replace(" active-thumbnail","");void 0!==o[a]&&(o[a].className+=" active-thumbnail"),function(t){var e=t.offsetLeft+t.offsetWidth,n=t.parentNode.offsetLeft+t.parentNode.offsetWidth;e>=n+t.parentNode.scrollLeft?t.parentNode.scroll({left:e-n,behavior:"smooth"}):e<=t.parentNode.offsetLeft+t.parentNode.scrollLeft&&t.parentNode.scroll({left:t.offsetLeft-t.parentNode.offsetLeft,behavior:"smooth"})}(document.getElementById("thumbnail-".concat(a)))}void 0!==n[a]&&(n[a].style.display="block"),void 0!==i[a]&&(i[a].className+=" active")}),[M,v]),Object(m.jsxs)("div",{style:l,className:"box",children:[Object(m.jsx)("div",{style:{maxWidth:i||"600px",maxHeight:a||"400px"},children:Object(m.jsx)(h.a,{onSwipeRight:function(){I(-1),F(!D)},onSwipeLeft:function(){I(1),F(!D)},children:Object(m.jsxs)("div",{className:"carousel-container",style:{maxWidth:i||"600px",height:a||"400px",backgroundColor:f||"darkgrey",borderRadius:c},children:[e.map((function(t,n){return Object(m.jsxs)("div",{className:"carousel-item fade",style:{maxWidth:i||"600px",maxHeight:a||"400px"},onMouseDown:function(t){x&&N(!0)},onMouseUp:function(t){x&&N(!1)},onMouseLeave:function(t){x&&N(!1)},onTouchStart:function(t){x&&N(!0)},onTouchEnd:function(t){x&&N(!1)},children:[r&&Object(m.jsxs)("div",{className:"slide-number",style:s,children:[n+1," / ",e.length]}),Object(m.jsx)("a",{href:t.url,target:"_blank",children:Object(m.jsx)("img",{src:t.image,alt:t.caption,className:"carousel-image",style:{borderRadius:c,objectFit:w||"cover"}})}),v&&Object(m.jsx)("div",{className:"pause-icon pause",style:{color:p||"white",fontSize:u||"40px"},children:"II"}),Object(m.jsx)("div",{className:"carousel-caption-".concat(d||"bottom"),style:A,children:t.caption})]},n)})),Object(m.jsx)("span",{className:"prev",href:"/",onClick:function(t){I(-1),F(!D)},children:"\u276e"}),Object(m.jsx)("span",{className:"next",href:"/",onClick:function(t){I(1),F(!D)},children:"\u276f"}),g&&Object(m.jsx)("div",{className:"dots",children:e.map((function(t,e){return Object(m.jsx)("span",{className:"dot",onClick:function(t){Q(e),F(!D)}},e)}))})]})})}),y&&Object(m.jsx)("div",{className:"thumbnails",id:"thumbnail-div",style:{maxWidth:i},children:e.map((function(t,e){return Object(m.jsx)("img",{width:j||"100px",src:t.image,alt:t.caption,className:"thumbnail",id:"thumbnail-".concat(e),onClick:function(t){Q(e),F(!D)}},e)}))})]})},E=n.p+"static/media/motel6.a098c31e.png",B=n.p+"static/media/marriott.512de5a5.png",M=n.p+"static/media/arbys.6d7c2dc3.png",Q=n.p+"static/media/del-taco.6b5bb3d3.png",k=n.p+"static/media/carvana.f935d19a.png",C=n.p+"static/media/xbox.e668b1df.png",v=n.p+"static/media/hbo.0dcb0abb.png",N=n.p+"static/media/wb.22eafb96.png",K=(n.p,n.p,l.b.div(f||(f=Object(r.a)(["\n\tdisplay: flex;\n\tflex-flow: column;\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\t/* gap: 1rem; */\n\t/* padding: 1.5rem; */\n\theight: 100%;\n\n\t/* margin: 1rem; */\n\tborder-radius: 13px;\n\tposition: relative;\n\tz-index: 0;\n\tborder: none;\n\t/* overflow: hidden; */\n\t/* background-color: rgba(0,0,0,.4); */\n\tborder-radius: 13px;\n\t@media (min-width: 640px) {\n\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-template-rows: 100px 400px auto auto;\n\t}\n\t@media (min-width: 768px) {\n\t\tgap: .5rem;\n\t}\n\t@media (min-width: 1280px) {\n\t\t/* height: 92vh; */\n\t\tborder-radius: 13px;\n\t\t/* box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2); */\n\t\tmargin-top: 2rem;\n\t}\n\n\t#slides {\n\t\tmargin: 0 auto;\n\t\tmax-width: 100%;\n\t}\n\t.box {\n\t\tmax-width: 100vw;\n\t\t.carousel-item {\n\t\t\tpadding: 0 1rem;\n\t\t\tborder-radius: 3px;\n\t\t\tbackground-color: transparent;\n\n\t\t\t@media (min-width: 768px) {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\t\t}\n\t\t.carousel-image {\n\t\t\tobject-position: top;\n\t\t\t/* border-radius: 99px; */\n\t\t\tborder-radius: 3px;\n\t\t\theight: 100%;\n\t\t\tmax-width: 900px !important;\n\t\t}\n\t\t#thumbnail-div {\n\t\t\tdisplay: flex;\n\t\t\t/* margin-left: 16px; */\n\t\t\tgrid-template-columns: repeat(4, 1fr);\n\t\t\tgap: 8px;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t\t/* border: 2px solid white; */\n\t\t\tpadding: 0 1rem;\n\t\t\timg {\n\t\t\t\tborder-radius: 3px;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.thumbnail {\n\t\t\t\tmax-width: 50px;\n\t\t\t\t@media (min-width: 640px) {\n\t\t\t\t\tmax-width: 75px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.prev,\n\t\t.next {\n\t\t\tfont-size: 2.5rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t\t.prev {\n\t\t\tleft: -2rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tleft: -3.5rem;\n\t\t\t}\n\t\t}\n\t\t.next {\n\t\t\tright: -2rem;\n\t\t\t@media (min-width: 640px) {\n\t\t\t\tright: -3.5rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t\n\t\n"])))),S=function(){var t=[{image:E,url:"https://cxs2549.github.io/react-motel6/"},{image:B,url:"https://cxs2549.github.io/react-marriott/"},{image:M,url:"https://cxs2549.github.io/react-arbys/"},{image:Q,url:"https://cxs2549.github.io/react-del-taco/"},{image:k,url:"https://cxs2549.github.io/react-carvana/"},{image:C,url:"https://cxs2549.github.io/react-xbox/"},{image:v,url:"https://cxs2549.github.io/react-hbo-max-v2/"},{image:N,url:"https://cxs2549.github.io/react-wb/"}];return Object(m.jsx)(K,{children:Object(m.jsx)("div",{id:"slides",children:Object(m.jsx)(j,{data:t,time:4e3,width:"900px",height:"480px",radius:"10px",captionPosition:"bottom",automatic:!0,dots:!1,pauseIconColor:"blue",pauseIconSize:"40px",slideBackgroundColor:"transparent",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"100px",style:{textAlign:"center",maxWidth:"100%",maxHeight:"500px",margin:"0px auto"}})})})},D=l.b.div(w||(w=Object(r.a)(["\npadding: 0 1rem;\n  img {\n    border-radius: 99999px;\n    max-width: 70px;\n\n  }\n"]))),F=function(){return Object(m.jsx)(D,{children:Object(m.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})},I=l.b.div(y||(y=Object(r.a)(["\n\t#top {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n"]))),O=function(){return Object(m.jsxs)(I,{children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{id:"top",children:[Object(m.jsx)(F,{}),Object(m.jsx)(p,{})]}),Object(m.jsx)(S,{})]})};c.a.render(Object(m.jsx)(A.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.988980bb.chunk.js.map