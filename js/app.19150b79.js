(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0378":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var i=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");i["default"].use(r["a"]);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Calculator")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"calculator"}},[n("b-container",[n("div",{staticClass:"block"},[t._v("👨‍💻️ Calculadora")]),n("b-form",{attrs:{novalidate:""},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.calculate(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"offset-sm-2 col-sm-4 mb-3"},[n("p",[t._v(t._s(t.helper))]),n("b-form-input",{ref:"in",staticClass:"mt-3 mb-3",attrs:{type:"number",autofocus:""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),n("span",[t._v("Límite de bits")]),n("b-form-input",{staticClass:"mt-3",attrs:{type:"number"},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}})],1),n("div",{staticClass:"col-sm-4 mb-3"},["dectobin"===this.option.type?[n("p",{staticClass:"mb-3"},[t._v("Resultado Signo Magnitud")]),n("b-form-input",{attrs:{readonly:""},model:{value:t.result[0],callback:function(e){t.$set(t.result,0,e)},expression:"result[0]"}}),n("p",{staticClass:"mt-3 mb-3"},[t._v("Resultado Complemento a dos")]),n("b-form-input",{attrs:{readonly:""},model:{value:t.result[1],callback:function(e){t.$set(t.result,1,e)},expression:"result[1]"}})]:t._e()],2),n("div",{staticClass:"offset-sm-2 col-sm-8"},[n("b-button",{staticClass:"mt-3 mb-3",attrs:{variant:"outline-light",disabled:t.disabled,type:"submit",block:"",pill:""}},[t._v("Calcular")])],1)])])],1)],1)},l=[],c=(n("c975"),n("a15b"),n("26e9"),n("0d03"),n("d3b7"),n("acd8"),n("e25e"),n("ac1f"),n("25f0"),n("4d90"),n("1276"),{name:"Calculator",data:function(){return{decimal:!1,number:null,result:[],limit:8,options:[],calcType:0,running:!1,temp:null}},computed:{helper:function(){var t=0===this.calcType;return t?"Ingresa un número decimal 🔢":"Ingresa un número binario 👨‍💻️"},option:function(){return this.options[this.calcType]},disabled:function(){return this.running||!this.number||isNaN(parseFloat(this.number))||this.limit>17||Math.abs(this.decimal)>65534}},methods:{pick:function(t){this.calcType=t,this.$refs.in.focus()},dectobin:function(t){var e=parseInt(t),n=-1!==t.indexOf("-",0),i=0;-1!==t.indexOf(".")&&(i=t.substr(t.indexOf(".")+1),i=parseInt(i));var r=Math.abs(e),a=!1,o=!1;r>Math.pow(2,this.limit-1)-1&&(a=!0),a&&!n&&(o=!0);var s=-1*Math.abs(e);(n&&0===e||s<-1*Math.pow(2,this.limit-1))&&(o=!0);var l=[];while(1)if(l.push(r%2?"1":"0"),r=parseInt(r/2),0===r)break;return l=l.reverse(),{enteros:e,decimales:i,isNegative:n,code:l,overflow_sm:a,overflow_cm:o}},calculate:function(){if(!this.disabled){if(this.running=!0,this.result=[],"dectobin"===this.option.type){var t=this.dectobin(this.number),e=t.code.join("").padStart(this.limit,"0").split(""),n=e;if(t.isNegative){e[0]="1";var i=-1*Math.pow(2,this.limit-1);n=Math.abs(i+Math.abs(this.number)),n=this.dectobin(n.toString()).code.join("").padStart(this.limit,"0").split(""),n[0]="1"}this.result.push(t.overflow_sm?"Overflow":e.join("")),this.result.push(t.overflow_cm?"Overflow":n.join("")),console.log("%c ✅ Calculator %c\n","background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background: transparent; padding:0;","\nEnteros: ",t.enteros,"\nDecimales: ",t.decimales,"\nEs negativo? ",t.isNegative?"✅":"❌","\nOverflow SM? ",t.overflow_sm?"✅":"❌","\nOverflow CM? ",t.overflow_cm?"✅":"❌","\nDec2Bin => ",t.code,"\nSM => ",e,"\nCM => ",n)}this.running=!1}}},created:function(){this.options.push({type:"dectobin",name:"🔢👨‍💻️ Decimal  a Binario "}),this.options.push({type:"bintodec",name:"👨‍💻️🔢 Binario  a Decimal "}),this.options.push({type:"binpbin",name:"➕👨‍💻️ Sumar números binarios"})}}),u=c,p=(n("7ed6"),n("2877")),d=Object(p["a"])(u,s,l,!1,null,"0389e257",null),f=d.exports,b={name:"app",components:{Calculator:f}},m=b,h=(n("5c0b"),Object(p["a"])(m,a,o,!1,null,null,null)),v=h.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"7ed6":function(t,e,n){"use strict";var i=n("0378"),r=n.n(i);r.a},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.19150b79.js.map