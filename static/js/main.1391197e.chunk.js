(this.webpackJsonpjamming=this.webpackJsonpjamming||[]).push([[0],[,,,,,,,,,,,,,function(t,a,e){},function(t,a,e){},function(t,a,e){},,function(t,a,e){},function(t,a,e){},function(t,a,e){},function(t,a,e){},function(t,a,e){"use strict";e.r(a);var s=e(1),n=e.n(s),c=e(8),i=e.n(c),r=(e(13),e(2)),l=e(3),u=e(6),o=e(5),j=e(4),d=(e(14),e(15),e(0)),b=function(t){Object(o.a)(e,t);var a=Object(j.a)(e);function e(){return Object(r.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchBar",children:[Object(d.jsx)("input",{placeholder:"Enter A Song, Album, or Artist"}),Object(d.jsx)("button",{className:"SearchButton",children:"SEARCH"})]})}}]),e}(n.a.Component),h=(e(17),function(t){Object(o.a)(e,t);var a=Object(j.a)(e);function e(t){var s;return Object(r.a)(this,e),(s=a.call(this,t)).addTrack=s.addTrack.bind(Object(u.a)(s)),s}return Object(l.a)(e,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(d.jsx)("button",{className:"Track-action",children:"-"}):Object(d.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:"+"})}},{key:"addTrack",value:function(t){this.props.onAdd(this.props.track)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Track",children:[Object(d.jsxs)("div",{className:"Track-information",children:[Object(d.jsx)("h3",{children:this.props.track.name}),Object(d.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album," "]})]}),this.renderAction()]})}}]),e}(n.a.Component)),p=(e(18),function(t){Object(o.a)(e,t);var a=Object(j.a)(e);function e(){return Object(r.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(a){return Object(d.jsx)(h,{track:a,onAdd:t.props.onAdd},a.id)}))})}}]),e}(n.a.Component)),m=(e(19),function(t){Object(o.a)(e,t);var a=Object(j.a)(e);function e(){return Object(r.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchResults",children:[Object(d.jsx)("h2",{children:"Results"}),Object(d.jsx)(p,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),e}(n.a.Component)),O=(e(20),function(t){Object(o.a)(e,t);var a=Object(j.a)(e);function e(){return Object(r.a)(this,e),a.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Playlist",children:[Object(d.jsx)("input",{defaultValue:"New Playlist"}),Object(d.jsx)(p,{tracks:this.props.playlistTracks}),Object(d.jsx)("button",{className:"Playlist-save",children:"SAVE TO SPOTIFY"})]})}}]),e}(n.a.Component)),k=function(t){Object(o.a)(e,t);var a=Object(j.a)(e);function e(t){var s;return Object(r.a)(this,e),(s=a.call(this,t)).state={searchResults:[{name:"name1",artist:"artist1",album:"album1",id:1},{name:"name2",artist:"artist2",album:"album2",id:2},{name:"name3",artist:"artist3",album:"album3",id:3}],playlistName:"Playlist Name",playlistTracks:[{name:"playlistName1",artist:"playlistartist4",album:"album4",id:4},{name:"playlistName3",artist:"playlistartist5",album:"album5",id:5},{name:"playListName3",artist:"playlist artist6",album:"album6",id:6}]},s.addTrack=s.addTrack.bind(Object(u.a)(s)),s}return Object(l.a)(e,[{key:"addTrack",value:function(t){var a=this.state.playlistTracks;a.find((function(a){return a.id===t.id}))||(a.push(t),this.setState({playlistTracks:a}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:["Ja",Object(d.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsxs)("div",{className:"App-playlist",children:[Object(d.jsx)(m,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(d.jsx)(O,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks})]})]})]})}}]),e}(n.a.Component),f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(a){var e=a.getCLS,s=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;e(t),s(t),n(t),c(t),i(t)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),f()}],[[21,1,2]]]);
//# sourceMappingURL=main.1391197e.chunk.js.map