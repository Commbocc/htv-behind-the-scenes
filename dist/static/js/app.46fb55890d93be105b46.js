webpackJsonp([0],[,,function(t,e,r){"use strict";r.d(e,"a",function(){return i});var s=r(1),n=r(26),o=r(16),a=r.n(o);s.a.use(n.a);var i=new n.a.Store({state:{api_version:"v4",api_key:"AIzaSyBNQ8YKnvfFy3ZWyWzAte2_Cln0qLu8o2U",spreadsheet_id:"1KdXxqGViSxUP9oviwE9gCpZE69GjN6kZp14QHQf9DbU",ranges:[{key:"projects",range:"Projects!A:ZZ"},{key:"people",range:"People!A:ZZ"},{key:"roles",range:"Roles!A:ZZ"},{key:"photos",range:"Photos!A:ZZ"},{key:"videos",range:"Videos!A:ZZ"}],projects:[],people:[],roles:[],photos:[],videos:[]},actions:{fetchData:function(t){var e=t.state.ranges.map(function(t){return"ranges="+t.range}).join("&"),r="https://sheets.googleapis.com/"+t.state.api_version+"/spreadsheets/"+t.state.spreadsheet_id+"/values:batchGet?"+e+"&key="+t.state.api_key;return s.a.http.get(r).then(function(e){t.commit("setData",e.body.valueRanges)},function(t){console.error(t)})}},mutations:{setData:function(t,e){e.map(function(e){for(var r=t.ranges.find(function(t){return t.range.match(/(.*?)\!/g)[0]===e.range.match(/(.*?)\!/g)[0]}),n=[],o=1;o<e.values.length;o++)n.push(a.a.object(e.values[0],e.values[o]));s.a.set(t,r.key,n)})}},getters:{projectById:function(t,e){return function(e){return t.projects.find(function(t){return parseInt(t.id)===parseInt(e)})}},personById:function(t,e){return function(e){return t.people.find(function(t){return parseInt(t.id)===parseInt(e)})}},rolesOfProject:function(t,e){return function(e){return t.roles.filter(function(t){return parseInt(t.project_id)===parseInt(e)})}},photosOfProject:function(t,e){return function(e){return t.photos.filter(function(t){return parseInt(t.project_id)===parseInt(e)})}}}})},function(t,e,r){"use strict";var s=r(1),n=r(24),o=r(2),a=r(18),i=r.n(a),c=r(19),p=r.n(c);s.a.use(n.a),e.a=new n.a({routes:[{path:"/projects",name:"ProjectsIndex",component:i.a},{path:"/projects/:id",name:"ProjectsShow",component:p.a,beforeEnter:function(t,e,r){o.a.state.projects.length?r():o.a.dispatch("fetchData").then(function(){r()})}},{path:"*",component:i.a}]})},function(t,e){},,function(t,e,r){var s=r(0)(r(8),r(22),null,null);t.exports=s.exports},,function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",beforeCreate:function(){this.$store.dispatch("fetchData")}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["members"]}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"project-index",data:function(){return{title:"Projects"}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(17),n=r.n(s);e.default={name:"project-show",components:{"cc-table-body":n.a},data:function(){return{project:this.$store.getters.projectById(this.$route.params.id),show_crew:!1}},computed:{director:function(){return this.$store.getters.personById(this.project.director_id)},producer:function(){return this.$store.getters.personById(this.project.producer_id)},writer:function(){return this.$store.getters.personById(this.project.writer_id)},castAndCrew:function(){var t=this;return this.$store.getters.rolesOfProject(this.$route.params.id).map(function(e){return{person:t.$store.getters.personById(e.person_id),role:e}}).sort(this.sortFunction)},cast:function(){return this.castAndCrew.filter(function(t){return"FALSE"===t.role.is_crew})},crew:function(){return this.castAndCrew.filter(function(t){return"TRUE"===t.role.is_crew})},photos:function(){return this.$store.getters.photosOfProject(this.$route.params.id)},videos:function(){return[]}},methods:{sortFunction:function(t,e){var r=t.person.name_last,s=e.person.name_last;return r<s?-1:r>s?1:0}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),n=r(7),o=r(6),a=r.n(o),i=r(3),c=r(2),p=r(5),l=(r.n(p),r(4));r.n(l);s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,store:c.a,template:"<App/>",components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,r){r(14);var s=r(0)(r(9),r(21),"data-v-51d71605",null);t.exports=s.exports},function(t,e,r){r(15);var s=r(0)(r(10),r(23),"data-v-7c2963ea",null);t.exports=s.exports},function(t,e,r){r(13);var s=r(0)(r(11),r(20),"data-v-0a125595",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects-index"},[r("router-link",{staticClass:"btn btn-default",attrs:{to:{name:"ProjectsIndex"}}},[r("span",{staticClass:"glyphicon glyphicon-menu-left",attrs:{"aria-hidden":"true"}}),t._v("\n\t\tProjects\n\t")]),t._v(" "),t.project.title?r("h1",[t._v(t._s(t.project.title))]):t._e(),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3"},[t.project.image?r("p",[r("a",{attrs:{href:t.project.image,"data-lightbox":"project-photos","data-title":t.project.title}},[r("img",{staticClass:"img-responsive center-block",attrs:{src:t.project.image,alt:t.project.title}})])]):t._e(),t._v(" "),t.project.yt_link?r("p",[r("a",{staticClass:"btn btn-primary btn-sm btn-block",attrs:{href:t.project.yt_link,target:"_blank"}},[t._v("\n\t\t\t\t\tPlay Video\n\t\t\t\t")])]):t._e()]),t._v(" "),r("div",{staticClass:"col-sm-9"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-6"},[r("dl",[t.director?r("dt",[t._v("Director")]):t._e(),t._v(" "),t.director?r("dd",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.director.name)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.producer?r("dt",[t._v("Producer")]):t._e(),t._v(" "),t.producer?r("dd",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.producer.name)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.writer?r("dt",[t._v("Writer")]):t._e(),t._v(" "),t.writer?r("dd",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.writer.name)+"\n\t\t\t\t\t\t")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-xs-6"},[r("dl",[t.project.released?r("dt",[t._v("Released")]):t._e(),t._v(" "),t.project.released?r("dd",[t._v(t._s(t.project.released))]):t._e(),t._v(" "),t.project.runtime?r("dt",[t._v("Runtime")]):t._e(),t._v(" "),t.project.runtime?r("dd",[t._v(t._s(t.project.runtime))]):t._e()])])]),t._v(" "),r("div",{},[t._v("\n\t\t\t\t"+t._s(t.project.synopsis)+"\n\t\t\t")])])]),t._v(" "),t.castAndCrew.length?r("div",{attrs:{id:"cast-crew"}},[r("h3",[t._v("Cast & Crew")]),t._v(" "),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped"},[r("cc-table-body",{attrs:{members:t.cast}}),t._v(" "),t.show_crew?r("cc-table-body",{attrs:{members:t.crew}}):t._e(),t._v(" "),r("a",{staticClass:"btn btn-text btn-xs",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.show_crew=!t.show_crew}}},[t.show_crew?r("span",[t._v("Hide")]):r("span",[t._v("Show")]),t._v("\n\t\t\t\t\tCrew\n\t\t\t\t")])],1)])]):t._e(),t._v(" "),r("div",{staticClass:"row"},[t.photos.length?r("div",{staticClass:"col-sm-6"},[r("h3",[t._v("Photos")]),t._v(" "),r("div",{staticClass:"row"},t._l(t.photos,function(t){return r("div",{staticClass:"col-xs-4"},[r("p",{staticClass:"embed-responsive embed-responsive-4by3"},[r("a",{attrs:{href:t.image,"data-lightbox":"project-photos","data-title":t.title}},[r("img",{staticClass:"img-responsive",attrs:{src:t.image,alt:t.title}})])])])}))]):t._e(),t._v(" "),t.videos.length?r("div",{staticClass:"col-sm-6"},[r("h3",[t._v("Videos")]),t._v(" "),r("div",{staticClass:"row"},t._l(3,function(t){return r("div",{staticClass:"col-xs-4"},[r("p",[r("a",{attrs:{href:"#","data-lightbox":"project-videos"}},[r("img",{staticClass:"img-responsive",attrs:{src:"http://lorempixel.com/160/120/?"+t,alt:""}})])])])}))]):t._e()])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tbody",t._l(t.members,function(e){return r("tr",[r("td",{staticClass:"cast-thumb-cell",attrs:{width:"1"}},[e.person.headshot?r("div",{staticClass:"embed-responsive embed-responsive-4by3"},[r("a",{staticClass:"img-responsive center-block",attrs:{href:e.person.headshot,"data-lightbox":e.person.headshot,"data-title":e.person.name}},[r("img",{attrs:{src:e.person.headshot,alt:e.person.name}})])]):r("span",{staticClass:"glyphicon glyphicon-user",attrs:{"aria-hidden":"true"}})]),t._v(" "),r("td",[t._v("\n\t\t\t"+t._s(e.person.name)+"\n\t\t")]),t._v(" "),r("td",[t._v(" ... ")]),t._v(" "),r("td",[t._v("\n\t\t\t"+t._s(e.role.role)+"\n\t\t")])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects-index"},[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"row"},t._l(t.$store.state.projects,function(e){return r("div",{staticClass:"col-xs-6 col-sm-4 "},[r("router-link",{staticClass:"thumbnail",attrs:{to:{name:"ProjectsShow",params:{id:e.id}}}},[e.image?r("img",{attrs:{src:e.image,alt:e.title}}):r("img",{attrs:{src:"https://placehold.it/400x600?text="+e.title,alt:e.title}}),t._v(" "),r("div",{staticClass:"caption"},[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")])])],1)}))])},staticRenderFns:[]}},,,,,,function(t,e){}],[12]);
//# sourceMappingURL=app.46fb55890d93be105b46.js.map