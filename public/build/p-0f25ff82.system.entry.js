System.register(["./p-ba861e62.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var s=":host{display:block}";var i=t("my_component",function(){function t(t){e(this,t);this.disabled=false;this.options=[]}t.prototype.render=function(){return n("div",null,n("label",{htmlFor:this.name},this.label),n("select",{name:this.name,id:this.name,disabled:this.disabled},this.options.map((function(t){return n("option",{value:t.value},t.displayText)}))))};return t}());i.style=s}}}));