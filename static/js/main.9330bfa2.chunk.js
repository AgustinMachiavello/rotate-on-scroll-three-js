(this["webpackJsonprotate-on-scroll-three-js"]=this["webpackJsonprotate-on-scroll-three-js"]||[]).push([[0],{38:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var c=r(7),a=r.n(c),i=r(20),s=r.n(i),n=(r(38),r(15)),o=r(8),l=r(47),j=r.p+"static/media/Keyboard.40f0e6fb.gltf",d=r(9);function h(e){var t=Object(c.useRef)(),r=Object(l.a)(j),a=r.nodes,i=r.materials;return Object(d.jsxs)("group",Object(o.a)(Object(o.a)({ref:t},e),{},{dispose:null,children:[Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001.geometry,material:i.NovelKeys}),Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_1.geometry,material:i.Lime}),Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_2.geometry,material:i.Grape}),Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_3.geometry,material:i.Blueberry}),Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_4.geometry,material:i.Lemon}),Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_5.geometry,material:i.Strawberry}),Object(d.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:a.Cube001_6.geometry,material:i.Material})]}))}l.a.preload(j);var b=r(46),u=r(48);function m(){var e=Object(b.a)().progress;return Object(d.jsxs)(u.a,{center:!0,style:{color:"white"},children:[e.toFixed(2),"% loading..."]})}var O=r(4);function g(e){var t=Object(c.useRef)();return Object(n.b)((function(r,c){t.current.rotation.y=O.MathUtils.degToRad(360*e.scroll.current/1)})),Object(d.jsx)("group",Object(o.a)(Object(o.a)({ref:t},e),{},{dispose:null,children:Object(d.jsx)("group",{position:[0,0,0],children:e.children})}))}var w=Object(c.forwardRef)((function(e,t){var r=e.caption,c=e.scroll;return Object(d.jsxs)("div",{ref:t,onScroll:function(e){window.innerWidth>800?c.current=e.target.scrollTop/(e.target.scrollHeight-window.innerHeight):c.current=-e.target.scrollLeft/(e.target.scrollWidth-window.innerWidth);var t=(360*c.current.toFixed(2)/1).toFixed(0);r.current.innerText="".concat(Math.abs(t),"\xb0")},className:"scroll",children:[Object(d.jsx)("div",{className:"slide",children:"0\xb0"}),Object(d.jsx)("div",{className:"slide",children:"90\xb0"}),Object(d.jsx)("div",{className:"slide",children:"180\xb0"}),Object(d.jsx)("div",{className:"slide",children:"270\xb0"}),Object(d.jsx)("span",{className:"caption",ref:r,children:"0\xb0"}),Object(d.jsx)("a",{className:"model-link",href:"https://skfb.ly/6Z9MU",target:"_blank",children:"Model by sleepyjoshua"})]})}));function f(e){return Object(d.jsx)("group",Object(o.a)(Object(o.a)({},e),{},{children:Object(d.jsxs)("mesh",{receiveShadow:!0,children:[Object(d.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(d.jsx)("shadowMaterial",{attach:"material",transparent:!0,opacity:.4})]})}))}var x=r(11);function p(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var v=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(0),a=function(){var e=Object(c.useState)(p()),t=Object(x.a)(e,2),r=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),r}(),i=(a.height,a.width);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{width:"100%",height:"100%",backgroundColor:"white"},children:[Object(d.jsx)("div",{className:"helper",children:i>800?"Scroll":"Swipe left"}),Object(d.jsxs)(n.a,{shadows:!0,adjustCamera:!0,onCreated:function(t){return t.events.connect(e.current)},children:[Object(d.jsx)("fog",{attach:"fog",args:["white",0,40]}),Object(d.jsx)("ambientLight",{intensity:.4}),Object(d.jsx)("directionalLight",{castShadow:!0,position:[2.5,8,5],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(d.jsx)("pointLight",{position:[-10,0,-20],color:"red",intensity:2.5}),Object(d.jsx)("pointLight",{position:[0,-10,0],intensity:1.5}),Object(d.jsxs)(c.Suspense,{fallback:Object(d.jsx)(m,{}),children:[Object(d.jsx)(f,{position:[0,-.7,0],rotation:[-Math.PI/2,0,0]}),Object(d.jsx)(g,{scroll:r,children:Object(d.jsx)(h,{position:[0,0,0],rotation:[.25,0,0],scale:[15,15,15]})})]})]})]}),Object(d.jsx)(w,{ref:e,caption:t,scroll:r})]})},y=(r(43),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,49)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),c(e),a(e),i(e),s(e)}))});s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.9330bfa2.chunk.js.map