"use strict";(self.webpackChunkreact_hw_05=self.webpackChunkreact_hw_05||[]).push([[7],{1007:function(e,t,n){n.r(t);var r=n(885),a=n(2791),c=n(501),u=n(6871),s=n(4625),o=n(184);t.default=function(){var e,t=(0,a.useState)(""),n=(0,r.Z)(t,2),i=n[0],l=n[1],p=(0,a.useState)([]),v=(0,r.Z)(p,2),f=v[0],g=v[1],h=(0,c.lr)(""),d=(0,r.Z)(h,2),m=d[0],x=d[1],w=(0,u.TH)();console.log("location:",w);var b=null!==(e=m.get("query"))&&void 0!==e?e:"";console.log("searchQuery:",b),(0,a.useEffect)((function(){""!==b.trim()&&b&&s.Z.getSearchMovies(b).then(g)}),[b]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i.trim())return alert("Incorrect input");s.Z.getSearchMovies(i).then(g),x({query:i}),l("")},children:[(0,o.jsx)("button",{type:"submit",children:"Search"}),(0,o.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"",onChange:function(e){l(e.currentTarget.value)},value:i})]}),(0,o.jsx)("ul",{children:f.length>0&&f.map((function(e){var t=e.title,n=e.id;return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(n),state:{from:w},children:t})},n)}))})]})}},4625:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),u=n(4569),s=n.n(u),o="b6c47595cd552e39159b1bc0cf721807";s().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/movie/day?api_key=".concat(o," "));case 3:return t=e.sent,e.next=6,t.data.results.map((function(e){return{title:e.title,id:e.id}}));case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1"));case 2:if(!(n=e.sent)){e.next=8;break}return e.next=6,n.data.results.map((function(e){return{title:e.title,id:e.id}}));case 6:return r=e.sent,e.abrupt("return",r);case 8:return e.next=10,Promise.reject(new Error("Somthing goes wrong"));case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US? "));case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US? "));case 3:return n=e.sent,e.next=6,n.data.cast;case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("movie/".concat(t,"/reviews?api_key=").concat(o));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),g={getTrendingMovies:i,getSearchMovies:l,getMovieDetails:p,getMovieCast:v,getMovieReviews:f};t.Z=g}}]);
//# sourceMappingURL=7.913e2261.chunk.js.map