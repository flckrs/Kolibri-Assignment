(function(){"use strict";var t={578:function(t,e,i){var a=i(144),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("LandingPage")],1)},n=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"body flex-column"},[e("img",{staticClass:"background",attrs:{src:i(996),alt:""}}),e("div",{staticClass:"div-segment-1 flex-column"},[e("h1",{staticClass:"font-title"},[t._v(t._s(t.bodyArrayTitle[0].toUpperCase())+": ")]),e("div",{staticClass:"segment-1-sub flex-column"},[e("h3",{staticClass:"font-subtitle"},[t._v(t._s(t.bodyArrayTitle[1]))]),e("div",{staticClass:"red-rectangle"})])]),e("div",{staticClass:"div-segment-2"}),e("div",{staticClass:"div-234px"},[e("div",{staticClass:"div-segment-3 flex-row"},[e("div",{staticClass:"text-segment flex-column"},[e("div",{staticClass:"text-header-image"}),e("p",{staticClass:"font-regular"},[t._v(t._s(t.bodyArray[0]))])]),e("div",{staticClass:"image-segment-3"})]),e("div",{staticClass:"div-segment-4 flex-row"},[e("div",{staticClass:"image-segment-4"}),e("div",{staticClass:"text-segment-1 flex-column"},[e("p",{staticClass:"font-regular"},[t._v(t._s(t.bodyArray[1]))]),e("div",{staticClass:"filler"})]),e("div",{staticClass:"text-segment-2 flex-column"},[e("div",{staticClass:"filler"}),e("div",{staticClass:"text-image flex-column"},[e("div",{staticClass:"image"}),e("p",{staticClass:"font-regular"},[t._v(t._s(t.bodyArray[2]))])])])]),e("div",{staticClass:"div-segment-5 flex-column"},[e("div",{staticClass:"black-line"}),e("p",{staticClass:"font-regular"},[t._v(t._s(t.bodyArray[3]))]),e("div",{staticClass:"black-line"})]),e("div",{staticClass:"div-segment-6 flex-row"},[e("div",{staticClass:"item-1 flex-column-bottom"},[e("div",{staticClass:"text-border"},[e("p",[t._v(t._s(t.bodyArray[5].slice(2)))])])]),e("div",{staticClass:"item-2 flex-column-bottom"},[e("div",{staticClass:"text-border"},[e("p",[t._v(t._s(t.bodyArray[4].slice(2)))])])]),e("div",{staticClass:"item-3 flex-column-bottom"},[e("div",{staticClass:"text-border"},[e("p",[t._v(t._s(t.bodyArray[6].slice(2)))])])])]),e("div",{staticClass:"div-segment-7 black-line"}),e("div",{staticClass:"div-segment-8 flex-column"},[e("h3",[t._v("Further Issues at the Center of Protests")]),e("div",{staticClass:"text-content flex-row"},[e("div",{staticClass:"filler"}),e("p",{staticClass:"font-regular"},[t._v(t._s(t.bodyArray[8]))]),e("p",{staticClass:"font-regular"},[t._v(t._s(t.bodyArray[9]))])])]),e("div",{staticClass:"div-segment-9"})])])},l=[],o=i(154),c={name:"LandingPage",data(){return{createdAt:"",updatedAt:"",publishedAt:"",bodyArray:[],bodyArrayTitle:[]}},mounted(){o.Z.get("https://manage.kolibriforimpact.com/api/contents/1?populate=*").then((t=>{const e=t.data.data.attributes;this.bodyArray=e.body.split("\n"),this.bodyArrayTitle=e.title.split(": "),this.createdAt=e.createdAt,this.updatedAt=e.updatedAt,this.publishedAt=e.publishedAt})).catch((t=>{console.log(t)}))}},d=c,u=i(1),m=(0,u.Z)(d,r,l,!1,null,null,null),f=m.exports,v=i(356);a.ZP.use(v.Z);var p={name:"App",components:{LandingPage:f},data(){return{metaTitle:"",metaImage:"",metaUrl:""}},metaInfo(){return{title:this.metaTitle,meta:[{property:"og:title",content:this.metaTitle},{property:"og:image",content:this.metaImage},{property:"og:url",content:this.metaUrl},{property:"twitter:title",content:this.metaTitle},{property:"twitter:image",content:this.metaImage},{property:"twitter:url",content:this.metaUrl},{name:"medium:title",content:this.metaTitle},{name:"medium:image",content:this.metaImage},{name:"medium:link",content:this.metaUrl},{name:"linkedin:title",content:this.metaTitle},{name:"linkedin:image",content:this.metaImage},{name:"linkedin:url",content:this.metaUrl}]}},mounted(){o.Z.get("https://manage.kolibriforimpact.com/api/contents/1?populate=*").then((t=>{const e=t.data.data.attributes;this.metaTitle=e.title,this.metaImage=e.image.data.attributes.formats.large.url,this.metaUrl=window.location.href})).catch((t=>{console.log(t)}))}},g=p,h=(0,u.Z)(g,s,n,!1,null,null,null),b=h.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(b)}).$mount("#app")},996:function(t,e,i){t.exports=i.p+"img/background-image.eccac860.png"}},e={};function i(a){var s=e[a];if(void 0!==s)return s.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,a,s,n){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],s=t[d][1],n=t[d][2];for(var l=!0,o=0;o<a.length;o++)(!1&n||r>=n)&&Object.keys(i.O).every((function(t){return i.O[t](a[o])}))?a.splice(o--,1):(l=!1,n<r&&(r=n));if(l){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[a,s,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/kolibri-assignment/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,n,r=a[0],l=a[1],o=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(o)var d=o(i)}for(e&&e(a);c<r.length;c++)n=r[c],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},a=self["webpackChunklanding_page"]=self["webpackChunklanding_page"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(578)}));a=i.O(a)})();
//# sourceMappingURL=app.502c7759.js.map