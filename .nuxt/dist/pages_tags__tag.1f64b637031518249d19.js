webpackJsonp([2],{BSxL:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".person-name:link,.person-name:visited{width:50%;display:inline-block;font-size:2em;text-decoration:none;color:#373f49}.top-nav{width:50%;text-align:right}.menu,.menu li,.top-nav{display:inline-block}.menu li{margin-left:1em}.menu a:link,.menu a:visited{color:#373f49;text-decoration:none}",""])},BZTh:function(t,e,s){"use strict";var a=s("LxEp"),i=!1;var n=function(t){i||s("Qk3q")},r=s("VU/8")(null,a.a,!1,n,null,null);r.options.__file="components\\navigation.vue",e.a=r.exports},Bt95:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("ekia"),i=s("gNsr"),n=s("VU/8")(a.a,i.a,!1,null,null,null);n.options.__file="pages\\tags\\_tag.vue",e.default=n.exports},Fb5d:function(t,e,s){"use strict";var a=s("RO7a"),i=s("zuQn"),n=!1;var r=function(t){n||s("eEx+")},o=s("VU/8")(a.a,i.a,!1,r,null,null);o.options.__file="components\\article-preview.vue",e.a=o.exports},LxEp:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"top-nav",attrs:{role:"navigation"}},[s("ul",{staticClass:"menu"},t._l(this.$router.options.routes,function(e){return/\/.*?\/.*/.test(e.path)?t._e():s("li",[s("nuxt-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.name.charAt(0).toUpperCase()+e.name.slice(1)))])],1)}))])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},Qk3q:function(t,e,s){var a=s("BSxL");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("d1488812",a,!1,{sourceMap:!1})},RO7a:function(t,e,s){"use strict";e.a={props:["post"]}},b66m:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".thumbnail{margin-bottom:1em}.title{text-decoration:none;font-size:22px;color:#373f49}.tags{padding:1em 0;margin-bottom:2em}.tag:link,.tag:visited{color:#a0a0a0;text-decoration:none;display:inline-block;padding:.33333rem .5rem;line-height:1;border-radius:2px;border:1px solid #a0a0a0;margin-right:.5em}.tag:active,.tag:focus,.tag:hover{color:#606060;border-color:#606060}",""])},"eEx+":function(t,e,s){var a=s("b66m");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("5de5600c",a,!1,{sourceMap:!1})},ekia:function(t,e,s){"use strict";var a=s("fQ5t"),i=(s.n(a),s("BZTh")),n=s("Fb5d"),r=Object(a.createClient)();e.a={asyncData:function(t){var e=t.env,s=t.params;return r.getEntries({content_type:e.CTF_BLOG_POST_TYPE_ID,"fields.tags[in]":s.tag,order:"-sys.createdAt"}).then(function(t){return{posts:t.items,tag:s.tag}})},components:{ArticlePreview:n.a,Navigation:i.a}}},gNsr:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"tag-page header"},[s("div",{staticClass:"foreground"},[s("div",{staticClass:"page-bar wrapper"},[s("a",{staticClass:"person-name",attrs:{href:"/"}},[t._v("John Doe")]),s("Navigation")],1),s("div",{staticClass:"page-info wrapper"},[s("h2",[t._v("#"+t._s(t.tag))])])])]),s("section",{staticClass:"body-container"},[s("div",{staticClass:"items-bar wrapper"},[s("h2",[t._v("All articles tagged #"+t._s(t.tag)+" ("+t._s(t.posts.length)+")")])]),s("ul",{staticClass:"items-list wrapper"},t._l(t.posts,function(t){return s("li",{staticClass:"item"},[s("article-preview",{attrs:{post:t}})],1)}))])])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i},zuQn:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("img",{staticClass:"thumbnail",attrs:{src:t.post.fields.heroImage.fields.file.url+"?fit=scale&w=350&h=196",srcset:t.post.fields.heroImage.fields.file.url+"?w=350&h=196&fit=fill 350w, "+t.post.fields.heroImage.fields.file.url+"?w=1000&h=562&fit=fill 1000w, "+t.post.fields.heroImage.fields.file.url+"?w=2000&h=1125&fit=fill 2000w",sizes:"(min-width: 1024px) 400px, 100vw"}}),s("time",{staticClass:"tiny date"},[t._v(t._s(new Date(t.post.fields.publishDate).toDateString()))]),s("h4",[s("nuxt-link",{staticClass:"title",attrs:{to:{name:"blog-slug",params:{slug:t.post.fields.slug}}}},[t._v(t._s(t.post.fields.title))])],1),s("p",[t._v(t._s(t.post.fields.description))]),s("div",{staticClass:"tags"},t._l(t.post.fields.tags,function(e){return s("nuxt-link",{key:e,staticClass:"tag",attrs:{to:{name:"tags-tag",params:{tag:e}}}},[t._v(t._s(e))])}))])};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i}});