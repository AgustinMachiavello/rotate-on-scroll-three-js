(this["webpackJsonprotate-on-scroll-three-js"]=this["webpackJsonprotate-on-scroll-three-js"]||[]).push([[0],{38:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var c=r(7),a=r.n(c),n=r(20),s=r.n(n),i=(r(38),r(15)),o=r(8),l=r(47),j=r(9);function d(e){var t=Object(c.useRef)(),r=Object(l.a)("/Keyboard.gltf"),a=r.nodes,n=r.materials;return Object(j.jsxs)("group",Object(o.a)(Object(o.a)({ref:t},e),{},{dispose:null,children:[Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001.geometry,material:n.NovelKeys}),Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_1.geometry,material:n.Lime}),Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_2.geometry,material:n.Grape}),Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_3.geometry,material:n.Blueberry}),Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_4.geometry,material:n.Lemon}),Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_5.geometry,material:n.Strawberry}),Object(j.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_6.geometry,material:n.Material})]}))}l.a.preload("/Keyboard.gltf");var h=r(46),b=r(48);function u(){var e=Object(h.a)().progress;return Object(j.jsxs)(b.a,{center:!0,style:{color:"white"},children:[e.toFixed(2),"% loading..."]})}var m=r(4);function O(e){var t=Object(c.useRef)();return Object(i.b)((function(r,c){t.current.rotation.y=m.MathUtils.degToRad(360*e.scroll.current/1)})),Object(j.jsx)("group",Object(o.a)(Object(o.a)({ref:t},e),{},{dispose:null,children:Object(j.jsx)("group",{position:[0,0,0],children:e.children})}))}var g=Object(c.forwardRef)((function(e,t){var r=e.caption,c=e.scroll;return Object(j.jsxs)("div",{ref:t,onScroll:function(e){window.innerWidth>800?c.current=e.target.scrollTop/(e.target.scrollHeight-window.innerHeight):c.current=-e.target.scrollLeft/(e.target.scrollWidth-window.innerWidth);var t=(360*c.current.toFixed(2)/1).toFixed(0);r.current.innerText="".concat(Math.abs(t),"\xb0")},className:"scroll",children:[Object(j.jsx)("div",{className:"slide",children:"0\xb0"}),Object(j.jsx)("div",{className:"slide",children:"90\xb0"}),Object(j.jsx)("div",{className:"slide",children:"180\xb0"}),Object(j.jsx)("div",{className:"slide",children:"270\xb0"}),Object(j.jsx)("span",{className:"caption",ref:r,children:"0\xb0"}),Object(j.jsx)("a",{className:"model-link",href:"https://skfb.ly/6Z9MU",target:"_blank",children:"Model by sleepyjoshua"})]})}));function w(e){return Object(j.jsx)("group",Object(o.a)(Object(o.a)({},e),{},{children:Object(j.jsxs)("mesh",{receiveShadow:!0,children:[Object(j.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(j.jsx)("shadowMaterial",{attach:"material",transparent:!0,opacity:.4})]})}))}var f=r(11);function x(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var p=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(0),a=function(){var e=Object(c.useState)(x()),t=Object(f.a)(e,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a(x())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r}(),n=(a.height,a.width);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"white"},children:[Object(j.jsx)("div",{className:"helper",children:n>800?"Scroll":"Swipe left"}),Object(j.jsxs)(i.a,{shadows:!0,adjustCamera:!0,onCreated:function(t){return t.events.connect(e.current)},children:[Object(j.jsx)("fog",{attach:"fog",args:["white",0,40]}),Object(j.jsx)("ambientLight",{intensity:.4}),Object(j.jsx)("directionalLight",{castShadow:!0,position:[2.5,8,5],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(j.jsx)("pointLight",{position:[-10,0,-20],color:"red",intensity:2.5}),Object(j.jsx)("pointLight",{position:[0,-10,0],intensity:1.5}),Object(j.jsxs)(c.Suspense,{fallback:Object(j.jsx)(u,{}),children:[Object(j.jsx)(w,{position:[0,-.7,0],rotation:[-Math.PI/2,0,0]}),Object(j.jsx)(O,{scroll:r,children:Object(j.jsx)(d,{position:[0,0,0],rotation:[.25,0,0],scale:[15,15,15]})})]})]})]}),Object(j.jsx)(g,{ref:e,caption:t,scroll:r})]})},v=(r(43),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,49)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),c(e),a(e),n(e),s(e)}))});s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.3a53470f.chunk.js.map