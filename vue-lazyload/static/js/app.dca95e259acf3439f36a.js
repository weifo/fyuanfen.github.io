webpackJsonp([1],Array(46).concat([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(t.length){var n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}}function s(t,e){if(!t||!e)return t||{};if(t instanceof Object)for(var n in e)t[n]=e[n];return t}function a(t,e){for(var n=!1,i=0,o=t.length;i<o;i++)if(e(t[i])){n=!0;break}return n}function r(t,e){if("IMG"===t.tagName&&t.getAttribute("data-srcset")){var n=t.getAttribute("data-srcset"),i=[],o=t.parentNode,s=o.offsetWidth*e,a=void 0,r=void 0,l=void 0;n=n.trim().split(","),n.map(function(t){t=t.trim(),a=t.lastIndexOf(" "),-1===a?(r=t,l=999998):(r=t.substr(0,a),l=parseInt(t.substr(a+1,t.length-a-2),10)),i.push([l,r])}),i.sort(function(t,e){if(t[0]<e[0])return-1;if(t[0]>e[0])return 1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});for(var u="",c=void 0,d=i.length,f=0;f<d;f++)if(c=i[f],c[0]>=s){u=c[1];break}return u}}function l(t,e){for(var n=void 0,i=0,o=t.length;i<o;i++)if(e(t[i])){n=t[i];break}return n}function u(){if(!g)return!1;var t=!0,e=document;try{var n=e.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",e.body.appendChild(n),t=!n.offsetWidth,e.body.removeChild(n)}catch(e){t=!1}return t}function c(t,e){var n=null,i=0;return function(){if(!n){var o=Date.now()-i,s=this,a=arguments,r=function(){i=Date.now(),n=!1,t.apply(s,a)};o>=e?r():n=setTimeout(r,e)}}}function d(t){return null!==t&&"object"===(void 0===t?"undefined":(0,w.default)(t))}function f(t){return t?"url("+t+")":""}function h(t){if(!(t instanceof Object))return[];if(v.default)return(0,v.default)(t);var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}function m(t){var e=window.getComputedStyle(document.documentElement).fontSize;return t/e.slice(0,e.length-2)+"rem"}Object.defineProperty(e,"__esModule",{value:!0}),e.ObjectKeys=e.getBestSelectionFromSrcset=e.loadImageAsync=e.scrollParent=e.getDPR=e.supportWebp=e.throttle=e.isObject=e._=e.assign=e.find=e.some=e.styleUrl=e.px2rem=e.remove=e.inBrowser=void 0;var p=n(129),v=i(p),_=n(134),w=i(_),g="undefined"!=typeof window,b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return g&&window.devicePixelRatio||t},y=function(){if(g){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}}(),C={on:function(t,e,n){y?t.addEventListener(e,n,{passive:!0}):t.addEventListener(e,n,!1)},off:function(t,e,n){t.removeEventListener(e,n)}},x=function(t,e,n){var i=new Image;i.src=t.src,i.onload=function(){e({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src})},i.onerror=function(t){n(t)}},k=function(t,e){return"undefined"!=typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e]},M=function(t){return k(t,"overflow")+k(t,"overflow-y")+k(t,"overflow-x")},L=function(t){if(g){if(!(t instanceof HTMLElement))return window;for(var e=t;e&&e!==document.body&&e!==document.documentElement&&e.parentNode;){if(/(scroll|auto)/.test(M(e)))return e;e=e.parentNode}return window}};e.inBrowser=g,e.remove=o,e.px2rem=m,e.styleUrl=f,e.some=a,e.find=l,e.assign=s,e._=C,e.isObject=d,e.throttle=c,e.supportWebp=u,e.getDPR=b,e.scrollParent=L,e.loadImageAsync=x,e.getBestSelectionFromSrcset=r,e.ObjectKeys=h},function(t,e,n){function i(t){n(90)}var o=n(1)(n(140),n(82),i,null,null);t.exports=o.exports},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),s=i(o),a=n(125),r=i(a),l=n(71),u=i(l),c=n(75),d=i(c);s.default.use(r.default),e.default=new r.default({routes:[{path:"/",name:"Home",component:u.default},{path:"/trans",name:"trans",component:d.default}]})},,,,,,,,,,,,,,,,,,,,,function(t,e,n){function i(t){n(88)}var o=n(1)(n(141),n(80),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(85)}var o=n(1)(n(142),n(77),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(84)}var o=n(1)(n(143),n(76),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(86)}var o=n(1)(n(144),n(78),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(89)}var o=n(1)(n(145),n(81),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(91)}var o=n(1)(n(146),n(83),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(87)}var o=n(1)(n(147),n(79),i,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"wheel-event",rawName:"v-wheel-event",value:t.onMouseWheel,expression:"onMouseWheel"}],ref:"container",staticClass:"mfb-temp"},[n("div",{staticClass:"mf-layout__container mfb-test-card"},[n("scroll-top"),t._l(t.assetsList,function(e,i){return n("div",{staticClass:"mf-layout__cell mf-layout__cell--card"},[n("cell-card",{ref:"cardViewer",refInFor:!0,attrs:{asset:e},on:{click:function(e){t.onCellCardClick(i)},download:function(e){t.onDownloadClick(i)}}})],1)})],2),n("button",{ref:"fetchMoreButton",staticClass:"mf-more__button",attrs:{disabled:t.noMoreItems},on:{click:t.queryNextPage}},[t._v(t._s(t.noMoreItems?"没有更多":"加载更多"))]),n("downloadPopup",{attrs:{value:t.isPopup,model:t.assetsList[t.currentAssetIndex]},on:{refresh:t.refreshDownloadState}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("popup",{staticClass:"model_download__popup",attrs:{modal:!0,dismissible:!0,buttonOK:!1,showCancel:!1,title:"下载图片"},on:{Cancel:t.onCancelButton},model:{value:t.show_popup,callback:function(e){t.show_popup=e},expression:"show_popup"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"download_info"},[n("p",[n("span",{staticClass:"model_download__title"},[t._v(t._s(t.model?t.model.title:""))])])])]),n("div",{staticClass:"action-buttons",slot:"action"},[n("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"downloader",attrs:{href:t.local_url,download:(t.model?t.model.name:"download")+".zip"}}),n("button",{staticClass:"button primary",on:{click:t.downloadFile}},[t._v("下载")]),n("button",{staticClass:"button link-button",on:{click:t.onCancelButton}},[t._v("取消")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"mf-ani-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"background",staticClass:"mf-image mf-image__background"},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.imgContextMenu,expression:"imgContextMenu"}],ref:"imageLoader",staticClass:"mf-image__loader",class:{"mf-image__lazy":!1===t.show}}),n("div",{ref:"content",staticClass:"mf-image__content",class:[t.contentClass],style:{backgroundImage:t.src}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("button",{staticClass:"btn",on:{click:t.showMenu}},[t._v(t._s(t.text))]),t._v(" "),n("transition",{attrs:{name:"move"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"menu"},[n("div",{staticClass:"inner inner-1"},[t._v("1")]),t._v(" "),n("div",{staticClass:"inner inner-2"},[t._v("2")]),t._v(" "),n("div",{staticClass:"inner inner-3"},[t._v("3")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mf-cell-card"},[n("div",{staticClass:"mf-cell-card__body"},[n("div",{staticClass:"mf-cell-card__thumbnail",on:{click:t.onMainClick}},[n("mf-image",{staticClass:"mf-cell-card__thumbnail-content mf-cell-card__img",attrs:{"image-url":t.asset?t.asset.imgUrl:""}}),n("div",{staticClass:"mf-cell-card__thumbnail-content mf-cell-card__overlay"})],1),n("div",{staticClass:"mf-cell-card__info"},[n("div",{staticClass:"mf-cell-card__info-item"},[n("div",{staticClass:"mf-cell-card__info-icon mf-tag"},[n("span",[t._v(t._s(t.asset?t.asset.title:""))])])]),n("div",{staticClass:"mf-cell-card__info-spacer"}),t._m(0),n("div",{staticClass:"mf-cell-card__info-item"},[n("div",{staticClass:"mf-cell-card__info-icon mf-icon-download",on:{click:t.onDownloadBtClick}})])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mf-cell-card__info-item"},[n("div",{staticClass:"mf-cell-card__info-icon mf-icon-collection"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"popup__wrapper",class:{modal:t.modal},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.onClickWrapper(e)}}},[n("div",{staticClass:"popup__content"},[t._t("title",[n("h3",{staticClass:"title"},[t._v(t._s(t.title))])]),t._t("default",[n("div",{staticClass:"content"},[t._v(t._s(t.content))])]),t._t("action",[n("div",{staticClass:"action-buttons"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.buttonOK,expression:"buttonOK"}],staticClass:"button primary",on:{click:t.onClickButtonOK}},[t._v("确定")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.buttonCancel,expression:"buttonCancel"}],staticClass:"button link-button",on:{click:t.onClickButtonCancel}},[t._v("取消")])])])],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mfb-side-buttons"},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"mfb-side-buttons__scrolltop mf-icon-to-top",attrs:{title:"回到顶部"},on:{click:t.backTop}})])],1)},staticRenderFns:[]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(132),s=i(o),a=n(133),r=i(a);e.default=function(){return function(){function t(){var e=this;(0,s.default)(this,t),this.ListenerQueue=[],this.lazyLoadHandler=(0,l.throttle)(function(){var t=!1;e.ListenerQueue.forEach(function(e,n,i){t=e.checkInView(),e.state.loaded||e.load(),t?e.showImage():e.hideImage()})},200)}return(0,r.default)(t,[{key:"addLazyBox",value:function(t){this.ListenerQueue.push(t),this._addListenerTarget(window),t.$el&&this._addListenerTarget(t.$el)}},{key:"_addListenerTarget",value:function(){window.addEventListener("scroll",this.lazyLoadHandler,!1),window.addEventListener("resize",this.lazyLoadHandler,!1)}},{key:"_removeListenerTarget",value:function(){window.removeEventListener("scroll",this.lazyLoadHandler,!1),window.removeEventListener("resize",this.lazyLoadHandler,!1)}},{key:"removeComponent",value:function(t){t&&((0,l.remove)(this.ListenerQueue,t),t.$el&&this._removeListenerTarget(t.$el))}}]),t}()};var l=n(46)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(137),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=n(46);e.default={data:function(){return{state:{loaded:!1},rect:{},show:!0}},computed:{isLazyload:function(){return this.state}},mounted:function(){var t=this.getLazyInstance();t.addLazyBox(this),t.lazyLoadHandler()},beforeDestroy:function(){this.getLazyInstance().removeComponent(this)},methods:{getLazyInstance:function(){return o.default.getLazy()},getRect:function(){if("function"==typeof this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect(),e=t.top,n=t.bottom,i=t.left,o=t.right;0===e&&0===n&&0===i&&0===o&&this.$parent?this.rect=this.$parent.$el.getBoundingClientRect():this.rect=this.$el.getBoundingClientRect()}},checkInView:function(){return this.getRect(),this.rect.top<1.8*window.innerHeight&&this.rect.bottom>0&&this.rect.left<1.8*window.innerWidth&&this.rect.right>0},load:function(){this.state.loaded=!0,this.src=(0,s.styleUrl)(this.imageUrl),this.imageUrl?this.src="url("+this.imageUrl+")":this.src=""},hideImage:function(){this.show=!1},showImage:function(){this.show=!0,this.$emit("show",this)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(135),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={getLazy:function(){var t=void 0;return function(){if(!t){var e=(0,o.default)();t=new e}return t}}()}},function(t,e,n){"use strict";function i(t){var e=document.createElement("div");t="on"+t;var n=t in e;return n||(e.setAttribute(t,"return;"),n="function"==typeof e[t]),e=null,n}Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a="wheel";s.default.prototype.$isServer||i("wheel")||(a=i("mousewheel")?"mousewheel":"DOMMouseScroll"),e.default={bind:function(t,e,n){var i=e.expression,o=function(t){n.context&&("deltaY"in t||("mousewheel"===a?(t.deltaY=-.025*t.wheelDelta,t.deltaX="wheelDeltaX"in t?-.025*t.wheelDeltaX:0):t.deltaY=t.detail,t.deltaMode="MozMousePixelScroll"===t.type?0:1),n.context[i](t))};t.addEventListener(a,o,!0),n.context._element_wheel_event_=o},unbind:function(t,e,n){t.removeEventListener("scroll",n.context._element_wheel_event_)},install:function(t){t.directive("wheelEvent",{bind:this.bind,unbind:this.unbind})}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(17),s=i(o),a=n(47),r=i(a),l=n(48),u=i(l);s.default.config.productionTip=!1,new s.default({el:"#app",router:u.default,template:"<App/>",components:{App:r.default}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(72),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"cell-card",data:function(){return{isPopup:!0}},props:{asset:{required:!0}},components:{mfImage:o.default},methods:{onMainClick:function(){this.$emit("click")},onDownloadBtClick:function(){this.$emit("download")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(73),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"download-popup",data:function(){return{local_url:"",show_popup:this.value}},props:{model:{type:Object},value:{type:Boolean,default:!1}},computed:{},watch:{value:function(t){this.show_popup=t},show_popup:function(t){this.$emit("refresh",t)}},methods:{onCancelButton:function(){this.show_popup=!1,this.$emit("refresh",this.show_popup)},downloadFile:function(){var t=this;return this.local_url=this.model.imgUrl,console.log(this.local_url),this.$nextTick(function(){t.$refs.downloader.click(),t.show_popup=!1,setTimeout(function(){t.local_url=""},500)})}},components:{popup:o.default},mounted:function(){}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(69),s=i(o),a=n(74),r=i(a),l=n(70),u=i(l),c=n(50),d=i(c),f=n(138),h=i(f);e.default={data:function(){return{selectArr:[],isOverlayShow:!1,assetsList:[],pageNum:1,currentAssetIndex:-1,last_wheel_event:new Date,noMoreItems:!1,overlayNavState:{hasPrev:!1,hasNext:!1},isPopup:!1}},components:{ScrollTop:r.default,cellCard:s.default,downloadPopup:u.default},directives:{WheelEvent:h.default},methods:{onDownloadClick:function(t){var e=this;this.assetsList[t]&&(this.currentAssetIndex=t,this.$nextTick(function(){e.isPopup=!0}))},refreshDownloadState:function(t){this.isPopup=t},onMouseWheel:function(t){var e=Date.now(),n=e-this.last_wheel_event;if(this.last_wheel_event=e,t.deltaY>0&&n>400&&"fetchMoreButton"in this.$refs){this.$refs.container.getBoundingClientRect().bottom-200<=window.innerHeight&&this.queryNextPage()}},queryNextPage:function(){this.pageNum=parseInt(this.pageNum,10)+1,this.fetchCards()},delHtmlTag:function(t){return t.replace(/<[^>]+>/g,"").replace(/\'/g,"\\'")},fetchCards:function(){var t=this;(0,d.default)({method:"get",url:"/img?tn=resultjson_com&ipn=rj&ct=201326592&is=&queryWord=cat&ie=utf-8&pn="+20*this.pageNum+"&oe=utf-8&word=cat"}).then(function(e){if(e.data){if("string"==typeof e.data){var n=t.delHtmlTag(e.data);return JSON.parse(n).data}return e.data.data}}).then(function(e){console.log(e.length),e.length<20&&(t.noMoreItems=!0);var n=e.filter(function(t){return!!t.thumbURL}).map(function(t){return{title:t.fromPageTitleEnc?t.fromPageTitleEnc.split(" ")[0]:"unknown",imgUrl:encodeURI(t.thumbURL)}});1===t.pageNum?t.assetsList=n:t.assetsList=t.assetsList.concat(n)}).catch(function(t){console.log(t)})}},created:function(){this.fetchCards()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(136),o=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={name:"mf-image",data:function(){return{src:"",height:0,width:0}},props:{defaultUrl:{type:String,default:""},imageUrl:{type:String,default:""},imgContextMenu:{type:Boolean,default:!0},contentClass:{type:String,default:""}},mixins:[o.default],watch:{imageUrl:function(t){this.switchImage(t)}},methods:{reset:function(){this.src="",this.height=0,this.width=0},switchImage:function(t){this.reset(),!this.isLazyload||this.show?this.src=t:this.getLazyInstance().lazyLoadHandler()}},mounted:function(){this.defaultUrl&&(this.$refs.background.style.backgroundImage="url("+this.defaultUrl+")"),this.switchImage(this.imageUrl)},beforeDestroy:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"popup",data:function(){return{visible:!!this.value}},props:{value:{type:Boolean,default:!1},modal:{type:Boolean,default:!0},title:{type:String,default:""},content:{type:String,default:""},buttonOK:{type:Boolean,default:!0},buttonCancel:{type:Boolean,default:!0},buttonIgnore:{type:Boolean,default:!1},dismissible:{type:Boolean,default:!0}},watch:{value:function(t){this.visible=!!t},visible:function(t){this.$emit("input",this.visible),t?this.$emit("open"):this.$emit("close")}},methods:{onClickWrapper:function(){this.dismissible&&this.visible&&(this.$emit("Cancel"),this.visible=!1)},onClickButtonOK:function(){this.$emit("OK"),this.dismissible&&(this.visible=!1)},onClickButtonCancel:function(){this.$emit("Cancel"),this.dismissible&&(this.visible=!1)}},mounted:function(){!1!==this.value&&(this.visible=!!this.value)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"scroll-top",data:function(){return{isShow:!1,distance:0}},methods:{scrollFunc:function(){window.pageYOffset>100?this.isShow=!0:this.isShow=!1},interVelScroll:function(){var t=window.scrollY;window.scroll(0,t-this.distance),t>30&&window.requestAnimationFrame(this.interVelScroll)},backTop:function(){var t=window.scrollY;this.distance=t/(200/16.7),console.log(this.distance),this.interVelScroll()}},mounted:function(){window.onscroll=this.scrollFunc}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{show:!1}},methods:{showMenu:function(){this.show=!this.show}},computed:{text:function(){return this.show?"收":"开"}}}}]),[139]);
//# sourceMappingURL=app.dca95e259acf3439f36a.js.map