(function(e){function t(t){for(var r,i,c=t[0],s=t[1],l=t[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Tactic-board-app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15d3":function(e,t,n){"use strict";n("fd33")},2259:function(e,t,n){"use strict";n("8cee")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"figure-container"},a={class:"figure-red"},i={class:"football-container"},c={class:"figure-blue"},s=Object(r["d"])('<div class="icon-attr-wrap"><div class="icon-attr"> &#39;Pen&#39; icon made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26" target="blank">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div><div class="icon-attr"> Other icons by <a href="https://www.fontawesome.com/" title="Fontawesome" target="blank">www.fontawesome.com</a></div></div><div class="signature"><p> Made by <a target="blank" href="https://github.com/g-czajk">G.Cz.</a>, 2021 </p></div>',2);function l(e,t,n,l,u,d){var p=Object(r["h"])("Canvas"),f=Object(r["h"])("Figure");return Object(r["f"])(),Object(r["c"])("div",null,[Object(r["e"])(p),Object(r["e"])("div",o,[Object(r["e"])("div",a,[(Object(r["f"])(),Object(r["c"])(r["a"],null,Object(r["g"])(8,(function(e){return Object(r["e"])(f,{class:"red",key:e.index,id:e++,onZIndexUp:d.zIndexUpdate,zIndex:u.zIndex},null,8,["id","onZIndexUp","zIndex"])})),64))]),Object(r["e"])("div",i,[Object(r["e"])(f,{class:"football",id:"17",onZIndexUp:d.zIndexUpdate,zIndex:u.zIndex},null,8,["onZIndexUp","zIndex"])]),Object(r["e"])("div",c,[(Object(r["f"])(),Object(r["c"])(r["a"],null,Object(r["g"])(8,(function(e){return Object(r["e"])(f,{class:"blue",key:e.index,id:8+e++,onZIndexUp:d.zIndexUpdate,zIndex:u.zIndex},null,8,["id","onZIndexUp","zIndex"])})),64))])]),s])}var u=Object(r["m"])("data-v-fbbab3be"),d=u((function(e,t,n,o,a,i){var c=Object(r["h"])("Panel");return Object(r["f"])(),Object(r["c"])("div",null,[Object(r["e"])("canvas",{id:"myCanvas",ref:"myCanvas",width:"1024",height:"740",onMousedown:t[1]||(t[1]=function(){return i.beginDrawing&&i.beginDrawing.apply(i,arguments)}),onMousemove:t[2]||(t[2]=function(){return i.keepDrawing&&i.keepDrawing.apply(i,arguments)}),onMouseup:t[3]||(t[3]=function(){return i.stopDrawing&&i.stopDrawing.apply(i,arguments)}),onMouseleave:t[4]||(t[4]=function(){return i.stopDrawing&&i.stopDrawing.apply(i,arguments)})},null,544),Object(r["e"])(c,{onChangeColor:i.updateColor,onChangeMarkerWidth:i.updateMarkerWidth,onEraseCanvas:i.clearCanvas},null,8,["onChangeColor","onChangeMarkerWidth","onEraseCanvas"])])})),p={class:"panel"},f={class:"panel-category marker-options"},h=Object(r["e"])("p",null,"Marker width:",-1),b={class:"marker-width"},g={class:"panel-category color-options"},v=Object(r["e"])("p",null,"Marker color:",-1),m={class:"colors-wrap"},j={class:"color-wrap"},O=Object(r["e"])("div",{class:"color-indicator color-black"},null,-1),k={class:"color-wrap"},w=Object(r["e"])("div",{class:"color-indicator color-green"},null,-1),y={class:"color-wrap"},C=Object(r["e"])("div",{class:"color-indicator color-red"},null,-1),x={class:"color-wrap"},D=Object(r["e"])("div",{class:"color-indicator color-blue"},null,-1),I={class:"panel-category clear"},z={class:"erase-canvas"},M={class:"restart"};function U(e,t,n,o,a,i){return Object(r["f"])(),Object(r["c"])("div",p,[Object(r["e"])("div",f,[h,Object(r["l"])(Object(r["e"])("input",{type:"range",class:"marker",min:"1",max:"16",step:"1","value:":"8","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.markerWidth=e}),onChange:t[2]||(t[2]=function(){return i.emitMarkerWidth&&i.emitMarkerWidth.apply(i,arguments)})},null,544),[[r["k"],a.markerWidth]]),Object(r["e"])("p",b,Object(r["i"])(a.markerWidth)+" px",1)]),Object(r["e"])("div",g,[v,Object(r["e"])("div",m,[Object(r["e"])("div",j,[O,Object(r["l"])(Object(r["e"])("input",{type:"radio",name:"color",class:"color option-black",checked:"",value:"black","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.pickedColor=e}),onChange:t[4]||(t[4]=function(){return i.emitColor&&i.emitColor.apply(i,arguments)})},null,544),[[r["j"],a.pickedColor]])]),Object(r["e"])("div",k,[w,Object(r["l"])(Object(r["e"])("input",{type:"radio",name:"color",class:"color option-green",value:"green","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.pickedColor=e}),onChange:t[6]||(t[6]=function(){return i.emitColor&&i.emitColor.apply(i,arguments)})},null,544),[[r["j"],a.pickedColor]])]),Object(r["e"])("div",y,[C,Object(r["l"])(Object(r["e"])("input",{type:"radio",name:"color",class:"color option-red",value:"#eb2633","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.pickedColor=e}),onChange:t[8]||(t[8]=function(){return i.emitColor&&i.emitColor.apply(i,arguments)})},null,544),[[r["j"],a.pickedColor]])]),Object(r["e"])("div",x,[D,Object(r["l"])(Object(r["e"])("input",{type:"radio",name:"color",class:"color option-blue",value:"#096a9e","onUpdate:modelValue":t[9]||(t[9]=function(e){return a.pickedColor=e}),onChange:t[10]||(t[10]=function(){return i.emitColor&&i.emitColor.apply(i,arguments)})},null,544),[[r["j"],a.pickedColor]])])])]),Object(r["e"])("div",I,[Object(r["e"])("div",z,[Object(r["e"])("i",{class:"fas fa-eraser",title:"Erase marker",onClick:t[11]||(t[11]=function(){return i.eraseCanvas&&i.eraseCanvas.apply(i,arguments)})})]),Object(r["e"])("div",M,[Object(r["e"])("i",{class:"fas fa-sync-alt",title:"Restart board",onClick:t[12]||(t[12]=function(){return i.restartApp&&i.restartApp.apply(i,arguments)})})])])])}var W={name:"Panel",data:function(){return{markerWidth:8,pickedColor:"black"}},methods:{emitColor:function(){this.$emit("changeColor",this.pickedColor)},emitMarkerWidth:function(){this.$emit("changeMarkerWidth",this.markerWidth)},eraseCanvas:function(){this.$emit("eraseCanvas")},restartApp:function(){location.reload()}}};n("a712");W.render=U;var P=W,X={name:"Canvas",components:{Panel:P},data:function(){return{x:0,y:0,isDrawing:!1,canvas:null,color:"black",marker:8}},methods:{drawLine:function(e,t,n,r){var o=this.canvas;o.beginPath(),o.strokeStyle=this.color,o.lineWidth=this.marker,o.moveTo(e,t),o.lineTo(n,r),o.lineJoin="round",o.lineCap="round",o.stroke(),o.closePath()},beginDrawing:function(e){this.x=e.offsetX,this.y=e.offsetY,this.isDrawing=!0},keepDrawing:function(e){this.isDrawing&&(this.drawLine(this.x,this.y,e.offsetX,e.offsetY),this.x=e.offsetX,this.y=e.offsetY)},stopDrawing:function(e){this.isDrawing&&(this.drawLine(this.x,this.y,e.offsetX,e.offsetY),this.x=0,this.y=0,this.isDrawing=!1)},updateColor:function(e){this.color=e},updateMarkerWidth:function(e){this.marker=e},clearCanvas:function(){var e=document.getElementById("myCanvas"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height)}},mounted:function(){var e=document.getElementById("myCanvas");this.canvas=e.getContext("2d")}};n("9ba2");X.render=d,X.__scopeId="data-v-fbbab3be";var Y=X;function $(e,t,n,o,a,i){return Object(r["f"])(),Object(r["c"])("div",{class:"figure",ref:"figure",onMousedown:t[1]||(t[1]=function(){return i.startDrag&&i.startDrag.apply(i,arguments)}),onMouseup:t[2]||(t[2]=function(){return i.stopDrag&&i.stopDrag.apply(i,arguments)})},null,544)}var _={props:["zIndex"],data:function(){return{top:0,left:0,offsetX:null,offsetY:null,isDragging:!1}},mounted:function(){window.addEventListener("mousemove",this.keepDrag)},methods:{startDrag:function(e){this.isDragging=!this.isDragging,this.offsetX=e.offsetX+5,this.offsetY=e.offsetY,this.$emit("zIndexUp")},stopDrag:function(){this.isDragging&&(this.isDragging=!this.isDragging)},keepDrag:function(e){this.isDragging&&(this.top=e.clientY-this.offsetY,this.left=e.clientX-this.offsetX,this.$refs.figure.style.position="fixed",this.$refs.figure.style.top="".concat(this.top,"px"),this.$refs.figure.style.left="".concat(this.left,"px"),this.$refs.figure.style.zIndex="".concat(this.zIndex))}}};n("15d3");_.render=$;var E=_,S={name:"App",components:{Canvas:Y,Figure:E},data:function(){return{zIndex:0}},methods:{zIndexUpdate:function(){this.zIndex++}}};n("2259");S.render=l;var Z=S;Object(r["b"])(Z).mount("#app")},"8cee":function(e,t,n){},"98a3":function(e,t,n){},"9ba2":function(e,t,n){"use strict";n("98a3")},a64d:function(e,t,n){},a712:function(e,t,n){"use strict";n("a64d")},fd33:function(e,t,n){}});
//# sourceMappingURL=app.12cee77d.js.map