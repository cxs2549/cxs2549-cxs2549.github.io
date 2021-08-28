(this["webpackJsonpreact-portfolio-v2"]=this["webpackJsonpreact-portfolio-v2"]||[]).push([[0],{26:function(n,t,e){},28:function(n,t,e){"use strict";e.r(t);var i,a=e(0),o=e.n(a),s=e(9),d=e.n(s),c=e(2),r=e(3),l=Object(r.a)(i||(i=Object(c.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        scrollbar-width: none;\n    }\n    body {\n        font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        -webkit-font-smoothing: antialiased;\n\t    -moz-osx-font-smoothing: grayscale;\nbackground-color: #61210f;\nbackground-image: linear-gradient(315deg, #61210f 0%, #ee6c4d 74%);\nbackground-color: #e3e3e3;\nbackground-image: linear-gradient(147deg, #e3e3e3 0%, #d93965 74%);\n\n\n        height: 100vh;\n        overflow: hidden;\n        color: white;\n    }\n    button, svg, a {\n        cursor: pointer;\n    }\n"]))),g=e(4),p=e(13),h=e.n(p),m=(e(26),e(1));var u,x,b=function(n){var t=n.data,e=n.time,i=n.width,o=n.height,s=n.captionStyle,d=n.slideNumberStyle,c=n.radius,r=n.slideNumber,l=n.style,p=n.captionPosition,u=n.dots,x=n.automatic,b=n.pauseIconColor,f=n.pauseIconSize,w=n.slideBackgroundColor,j=n.slideImageFit,A=n.thumbnails,S=n.thumbnailWidth,v=Object(a.useState)(0),N=Object(g.a)(v,2),F=N[0],C=N[1],O=Object(a.useState)(!1),B=Object(g.a)(O,2),J=B[0],D=B[1],E=Object(a.useState)(0),M=Object(g.a)(E,2),U=M[0],Q=M[1],I=function(n){F+n>=t.length?C(0):C(F+n<0?t.length-1:F+n)};return Object(a.useEffect)((function(){if(x){var n=F,i=setInterval((function(){J||(C(n),++n>=t.length&&(n=0),n<0&&(n=t.length-1))}),e||2e3);return function(){clearInterval(i)}}}),[J,U]),Object(a.useEffect)((function(){var n,e=document.getElementsByClassName("carousel-item"),i=document.getElementsByClassName("dot"),a=F;for(n=0;n<t.length;n++)e[n].style.display="none";for(n=0;n<i.length;n++)i[n].className=i[n].className.replace(" active","");if(A){var o=document.getElementsByClassName("thumbnail");for(n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active-thumbnail","");void 0!==o[a]&&(o[a].className+=" active-thumbnail"),function(n){var t=n.offsetLeft+n.offsetWidth,e=n.parentNode.offsetLeft+n.parentNode.offsetWidth;t>=e+n.parentNode.scrollLeft?n.parentNode.scroll({left:t-e,behavior:"smooth"}):t<=n.parentNode.offsetLeft+n.parentNode.scrollLeft&&n.parentNode.scroll({left:n.offsetLeft-n.parentNode.offsetLeft,behavior:"smooth"})}(document.getElementById("thumbnail-".concat(a)))}void 0!==e[a]&&(e[a].style.display="block"),void 0!==i[a]&&(i[a].className+=" active")}),[F,J]),Object(m.jsxs)("div",{style:l,className:"box",children:[Object(m.jsx)("div",{style:{maxWidth:i||"600px",maxHeight:o||"400px"},children:Object(m.jsx)(h.a,{onSwipeRight:function(){I(-1),Q(!U)},onSwipeLeft:function(){I(1),Q(!U)},children:Object(m.jsxs)("div",{className:"carousel-container",style:{maxWidth:i||"600px",height:o||"400px",backgroundColor:w||"darkgrey",borderRadius:c},children:[t.map((function(n,e){return Object(m.jsxs)("div",{className:"carousel-item fade",style:{maxWidth:i||"600px",maxHeight:o||"400px"},onMouseDown:function(n){x&&D(!0)},onMouseUp:function(n){x&&D(!1)},onMouseLeave:function(n){x&&D(!1)},onTouchStart:function(n){x&&D(!0)},onTouchEnd:function(n){x&&D(!1)},children:[r&&Object(m.jsxs)("div",{className:"slide-number",style:d,children:[e+1," / ",t.length]}),Object(m.jsx)("a",{href:n.url,target:"_blank",children:Object(m.jsx)("img",{src:n.image,alt:n.caption,className:"carousel-image",style:{borderRadius:c,objectFit:j||"cover"}})}),J&&Object(m.jsx)("div",{className:"pause-icon pause",style:{color:b||"white",fontSize:f||"40px"},children:"II"}),Object(m.jsx)("div",{className:"carousel-caption-".concat(p||"bottom"),style:s,children:n.caption})]},e)})),Object(m.jsx)("span",{className:"prev",href:"/",onClick:function(n){I(-1),Q(!U)},children:"\u276e"}),Object(m.jsx)("span",{className:"next",href:"/",onClick:function(n){I(1),Q(!U)},children:"\u276f"}),u&&Object(m.jsx)("div",{className:"dots",children:t.map((function(n,t){return Object(m.jsx)("span",{className:"dot",onClick:function(n){C(t),Q(!U)}},t)}))})]})})}),A&&Object(m.jsx)("div",{className:"thumbnails",id:"thumbnail-div",style:{maxWidth:i},children:t.map((function(n,t){return Object(m.jsx)("img",{width:S||"100px",src:n.image,alt:n.caption,className:"thumbnail",id:"thumbnail-".concat(t),onClick:function(n){C(t),Q(!U)}},t)}))})]})},f=e.p+"static/media/carvana.f935d19a.png",w=e.p+"static/media/xbox.e668b1df.png",j=(e.p,e.p+"static/media/hbo.0dcb0abb.png"),A=(e.p,e.p+"static/media/wb.bacf8c76.png"),S=(e.p,e.p+"static/media/baja-fresh.a2583dfb.png"),v=e.p+"static/media/postmates.6a6a0dce.png",N=(e.p,e.p,r.b.div(u||(u=Object(c.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin-bottom: 1rem;\n\th2 {\n\t\t@media (min-width: 768px) {\n\t\t\tfont-size: 220%;\n\t\t}\n\t}\n\th2 {\n\t\tpadding: 0 1rem;\n\t\tline-height: 1;\n\t\ttext-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n\t\t@media (min-width: 640px) {\n\t\t\tpadding: 0 2rem;\n\t\t}\n\t\t@media (min-width: 1280px) {\n\t\t\tfont-size: 240%;\n\t\t}\n\t}\n\tp {\n\t\tfont-size: 96%;\n\t\tline-height: 1;\n\t\tfont-weight: 500;\n\t\topacity: 0.95;\n\t\ttext-align: end;\n\t\tgrid-column: 2/3;\n\t\twhite-space: nowrap;\n\t\tpadding-right: 2rem;\n\t\t@media (min-width: 640px) {\n\t\t\tfont-size: 115%;\n\t\t}\n\t\t@media (min-width: 768px) {\n\t\t\tfont-size: 130%;\n\t\t}\n\t\t@media (min-width: 1280px) {\n\t\t\tfont-size: 180%;\n\t\t}\n\t}\n"])))),F=function(){return Object(m.jsxs)(N,{children:[Object(m.jsxs)("h2",{children:["SuperVision ",Object(m.jsx)("br",{})," Design"]}),Object(m.jsxs)("p",{children:["Conscious & friendly web ",Object(m.jsx)("br",{})," development"]})]})},C=r.b.div(x||(x=Object(c.a)(["\n  height: 100vh;\n  display: flex;\n  flex-flow: column;\n  max-width: 1200px;\n  margin: 0 auto;\n  gap: 1rem;\n  padding: 1rem 0;\n  padding-bottom: 0;\n\n  background-color: #f5d020;\n  background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);\n  background-color: #0cbaba;\n  background-image: linear-gradient(-315deg, #0cbaba 0%, #380036 74%);\n\n  position: relative;\n  z-index: 0;\n  border: none;\n  overflow: hidden;\n  @media (min-width: 640px) {\n\t\tgrid-template-columns: 1fr 1fr;\n    grid-template-rows: 100px 400px auto auto;\n  }\n\t@media (min-width: 768px) {\n\t\tgap: .5rem;\n\n\t}\n  @media (min-width: 1280px) {\n    height: 92vh;\n    border-radius: 13px;\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    margin-top: 2rem;\n  }\n  #gore {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 70vh;\n    @media (min-width: 1280px) {\n      border-top-right-radius: 13px;\n      border-top-left-radius: 13px;\n      height: 120vh;\n    }\n    clip-path: polygon(\n      100% 0%,\n      0% 0%,\n      0% 65%,\n      1% 64.95%,\n      2% 64.8%,\n      3% 64.6%,\n      4% 64.3%,\n      5% 63.9%,\n      6% 63.45%,\n      7% 62.9%,\n      8% 62.25%,\n      9% 61.55%,\n      10% 60.8%,\n      11% 59.95%,\n      12% 59.05%,\n      13% 58.1%,\n      14% 57.1%,\n      15% 56.05%,\n      16% 55%,\n      17% 53.9%,\n      18% 52.8%,\n      19% 51.65%,\n      20% 50.5%,\n      21% 49.35%,\n      22% 48.2%,\n      23% 47.05%,\n      24% 45.9%,\n      25% 44.8%,\n      26% 43.75%,\n      27% 42.75%,\n      28% 41.75%,\n      29% 40.8%,\n      30% 39.9%,\n      31% 39.1%,\n      32% 38.35%,\n      33% 37.65%,\n      34% 37.05%,\n      35% 36.5%,\n      36% 36.05%,\n      37% 35.65%,\n      38% 35.35%,\n      39% 35.15%,\n      40% 35.05%,\n      41% 35%,\n      42% 35.05%,\n      43% 35.2%,\n      44% 35.45%,\n      45% 35.75%,\n      46% 36.15%,\n      47% 36.65%,\n      48% 37.2%,\n      49% 37.85%,\n      50% 38.55%,\n      51% 39.35%,\n      52% 40.2%,\n      53% 41.1%,\n      54% 42.05%,\n      55% 43.05%,\n      56% 44.1%,\n      57% 45.15%,\n      58% 46.3%,\n      59% 47.4%,\n      60% 48.55%,\n      61% 49.7%,\n      62% 50.85%,\n      63% 52%,\n      64% 53.15%,\n      65% 54.25%,\n      66% 55.35%,\n      67% 56.4%,\n      68% 57.45%,\n      69% 58.4%,\n      70% 59.35%,\n      71% 60.2%,\n      72% 61.05%,\n      73% 61.8%,\n      74% 62.45%,\n      75% 63.05%,\n      76% 63.6%,\n      77% 64.05%,\n      78% 64.4%,\n      79% 64.7%,\n      80% 64.85%,\n      81% 65%,\n      82% 65%,\n      83% 64.9%,\n      84% 64.75%,\n      85% 64.5%,\n      86% 64.2%,\n      87% 63.75%,\n      88% 63.25%,\n      89% 62.7%,\n      90% 62.05%,\n      91% 61.3%,\n      92% 60.5%,\n      93% 59.65%,\n      94% 58.75%,\n      95% 57.8%,\n      96% 56.8%,\n      97% 55.75%,\n      98% 54.65%,\n      99% 53.55%,\n      100% 52.4%\n    );\n\n    background-image: url(",');\n    z-index: -1;\n    &::after {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      background-color: #63d471;\n      background-image: linear-gradient(315deg, #63d47091 0%, #23332975 74%);\n      background-color: #bfe299;\n      background-image: linear-gradient(315deg, #bfe299 0%, #66b5f6 74%);\n\n      height: 100%;\n    }\n  }\n\n  #slides {\n    margin: 0 auto;\n  }\n  .box {\n    max-width: 100vw;\n    .carousel-item {\n      padding: 0 1rem;\n      border-radius: 3px;\n      background-color: transparent;\n\n      @media (min-width: 768px) {\n        padding: 0;\n      }\n    }\n    .carousel-image {\n      object-position: top;\n      /* border-radius: 99px; */\n      border-radius: 3px;\n      height: 100%;\n      max-width: 900px !important;\n    }\n    #thumbnail-div {\n      display: flex;\n      justify-content: center;\n      max-width: 100vw;\n      /* margin-bottom: 1rem; */\n      img {\n        border-radius: 3px;\n        cursor: pointer;\n      }\n      .thumbnail {\n        max-width: 50px;\n        @media (min-width: 640px) {\n          max-width: 75px;\n        }\n      }\n    }\n    .prev,\n    .next {\n      font-size: 2.5rem;\n      @media (min-width: 640px) {\n        display: block;\n      }\n    }\n    .prev {\n\t\t\tleft: -2rem;\n      @media (min-width: 640px) {\n        left: -3.5rem;\n      }\n    }\n    .next {\n\t\t\tright: -2rem;\n      @media (min-width: 640px) {\n        right: -3.5rem;\n      }\n    }\n  }\n\n  #technologies {\n    background-color: transparent;\n\n    @media (min-width: 640px) {\n      margin-top: 6rem;\n    }\n    padding: 0 1rem;\n    p {\n      font-size: 140%;\n      font-weight: 500;\n      text-align: center;\n      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.2);\n      @media (min-width: 1280px) {\n        font-size: 180%;\n      }\n    }\n    @media (min-width: 768px) {\n      grid-column: 1/2;\n      padding: 1rem;\n      text-align: center;\n    }\n\n    #tech {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 1rem;\n      padding: 1rem 0;\n      max-width: 360px;\n      margin: 0 auto;\n      @media (min-width: 768px) {\n        gap: 2rem;\n        justify-content: center;\n      }\n      #icon {\n        background-color: white;\n        border-radius: 99999px;\n        aspect-ratio: 1/1;\n        height: 60px;\n        width: 60px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n        w &:nth-of-type(2) img {\n          transform: scale(0.8);\n        }\n        &:nth-of-type(3) img {\n          transform: scale(0.6);\n        }\n        img {\n          max-width: 80px;\n          transform: scale(0.6);\n        }\n      }\n    }\n  }\n  footer {\n    font-size: 80%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 2rem 0;\n    margin-top: auto;\n    background-color: #c8221b;\n  }\n'])),"data:image/png;base64,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"),O=function(){var n=[{image:f,url:"https://cxs2549.github.io/react-carvana/"},{image:w,url:"https://cxs2549.github.io/react-xbox/"},{image:j,url:"https://cxs2549.github.io/react-hbo-max-v2/"},{image:A,url:"https://cxs2549.github.io/react-wb/"},{image:S,url:"https://cxs2549.github.io/react-baja-fresh/"},{image:v,url:"https://vue-postmates.netlify.app/"}];return Object(m.jsxs)(C,{children:[Object(m.jsx)(l,{}),Object(m.jsx)("div",{id:"gore"}),Object(m.jsx)(F,{}),Object(m.jsx)("div",{id:"slides",children:Object(m.jsx)(b,{data:n,time:4e3,width:"900px",height:"500px",radius:"10px",captionPosition:"bottom",automatic:!0,dots:!1,pauseIconColor:"blue",pauseIconSize:"40px",slideBackgroundColor:"transparent",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"100px",style:{textAlign:"center",maxWidth:"100%",maxHeight:"500px",margin:"0px auto"}})})]})};d.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.df60679d.chunk.js.map