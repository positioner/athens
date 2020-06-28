goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41040 = arguments.length;
var i__4790__auto___41041 = (0);
while(true){
if((i__4790__auto___41041 < len__4789__auto___41040)){
args__4795__auto__.push((arguments[i__4790__auto___41041]));

var G__41043 = (i__4790__auto___41041 + (1));
i__4790__auto___41041 = G__41043;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__41044__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__41044 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__41045__i = 0, G__41045__a = new Array(arguments.length -  0);
while (G__41045__i < G__41045__a.length) {G__41045__a[G__41045__i] = arguments[G__41045__i + 0]; ++G__41045__i;}
  children = new cljs.core.IndexedSeq(G__41045__a,0,null);
} 
return G__41044__delegate.call(this,children);};
G__41044.cljs$lang$maxFixedArity = 0;
G__41044.cljs$lang$applyTo = (function (arglist__41046){
var children = cljs.core.seq(arglist__41046);
return G__41044__delegate(children);
});
G__41044.cljs$core$IFn$_invoke$arity$variadic = G__41044__delegate;
return G__41044;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq41021){
var G__41022 = cljs.core.first(seq41021);
var seq41021__$1 = cljs.core.next(seq41021);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41022,seq41021__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__41047__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__41047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41048__i = 0, G__41048__a = new Array(arguments.length -  0);
while (G__41048__i < G__41048__a.length) {G__41048__a[G__41048__i] = arguments[G__41048__i + 0]; ++G__41048__i;}
  args = new cljs.core.IndexedSeq(G__41048__a,0,null);
} 
return G__41047__delegate.call(this,args);};
G__41047.cljs$lang$maxFixedArity = 0;
G__41047.cljs$lang$applyTo = (function (arglist__41049){
var args = cljs.core.seq(arglist__41049);
return G__41047__delegate(args);
});
G__41047.cljs$core$IFn$_invoke$arity$variadic = G__41047__delegate;
return G__41047;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41050 = arguments.length;
var i__4790__auto___41051 = (0);
while(true){
if((i__4790__auto___41051 < len__4789__auto___41050)){
args__4795__auto__.push((arguments[i__4790__auto___41051]));

var G__41052 = (i__4790__auto___41051 + (1));
i__4790__auto___41051 = G__41052;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq41026){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41026));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__41030 = arguments.length;
switch (G__41030) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___41054 = arguments.length;
var i__4790__auto___41055 = (0);
while(true){
if((i__4790__auto___41055 < len__4789__auto___41054)){
args_arr__4810__auto__.push((arguments[i__4790__auto___41055]));

var G__41056 = (i__4790__auto___41055 + (1));
i__4790__auto___41055 = G__41056;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4811__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq41028){
var G__41029 = cljs.core.first(seq41028);
var seq41028__$1 = cljs.core.next(seq41028);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41029,seq41028__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41057 = arguments.length;
var i__4790__auto___41058 = (0);
while(true){
if((i__4790__auto___41058 < len__4789__auto___41057)){
args__4795__auto__.push((arguments[i__4790__auto___41058]));

var G__41059 = (i__4790__auto___41058 + (1));
i__4790__auto___41058 = G__41059;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq41032){
var G__41033 = cljs.core.first(seq41032);
var seq41032__$1 = cljs.core.next(seq41032);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41033,seq41032__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41060 = arguments.length;
var i__4790__auto___41061 = (0);
while(true){
if((i__4790__auto___41061 < len__4789__auto___41060)){
args__4795__auto__.push((arguments[i__4790__auto___41061]));

var G__41062 = (i__4790__auto___41061 + (1));
i__4790__auto___41061 = G__41062;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq41035){
var G__41036 = cljs.core.first(seq41035);
var seq41035__$1 = cljs.core.next(seq41035);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41036,seq41035__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41063 = arguments.length;
var i__4790__auto___41064 = (0);
while(true){
if((i__4790__auto___41064 < len__4789__auto___41063)){
args__4795__auto__.push((arguments[i__4790__auto___41064]));

var G__41065 = (i__4790__auto___41064 + (1));
i__4790__auto___41064 = G__41065;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq41038){
var G__41039 = cljs.core.first(seq41038);
var seq41038__$1 = cljs.core.next(seq41038);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41039,seq41038__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
