goog.provide('athens.devcards.breadcrumbs');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.style');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('devcards.core');
goog.require('stylefy.core');
athens.devcards.breadcrumbs.breadcrumbs_list_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["stretch","none","nowrap","1 1 auto","0","flex","row","inherit","0"]);
athens.devcards.breadcrumbs.breadcrumb_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease",new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-high","opacity-high",1902226703).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a:hover","a:hover",-1474674872),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),athens.style.color.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"link-color","link-color",1347118056)),new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:last-child","&:last-child",1329794843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"1"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0.15em",new cljs.core.Keyword(null,"content","content",15833224),"'>'",new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity-low","opacity-low",-761003971).cljs$core$IFn$_invoke$arity$1(athens.style.OPACITIES),new cljs.core.Keyword(null,"transform","transform",1381301764),"scaleX(0.5)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-child:before","&:first-child:before",1120925146),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"none"], null)], null)], null)], null);
athens.devcards.breadcrumbs.breadcrumbs_list = (function athens$devcards$breadcrumbs$breadcrumbs_list(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57991 = arguments.length;
var i__4790__auto___57992 = (0);
while(true){
if((i__4790__auto___57992 < len__4789__auto___57991)){
args__4795__auto__.push((arguments[i__4790__auto___57992]));

var G__57993 = (i__4790__auto___57992 + (1));
i__4790__auto___57992 = G__57993;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return athens.devcards.breadcrumbs.breadcrumbs_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(athens.devcards.breadcrumbs.breadcrumbs_list.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(athens.devcards.breadcrumbs.breadcrumbs_list_style),children], null));
}));

(athens.devcards.breadcrumbs.breadcrumbs_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(athens.devcards.breadcrumbs.breadcrumbs_list.cljs$lang$applyTo = (function (seq57976){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57976));
}));

athens.devcards.breadcrumbs.breadcrumb = (function athens$devcards$breadcrumbs$breadcrumb(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57994 = arguments.length;
var i__4790__auto___57995 = (0);
while(true){
if((i__4790__auto___57995 < len__4789__auto___57994)){
args__4795__auto__.push((arguments[i__4790__auto___57995]));

var G__57996 = (i__4790__auto___57995 + (1));
i__4790__auto___57995 = G__57996;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return athens.devcards.breadcrumbs.breadcrumb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(athens.devcards.breadcrumbs.breadcrumb.cljs$core$IFn$_invoke$arity$variadic = (function (p__57979,label){
var map__57980 = p__57979;
var map__57980__$1 = (((((!((map__57980 == null))))?(((((map__57980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57980):map__57980);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57980__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(athens.devcards.breadcrumbs.breadcrumb_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),label], null)], null);
}));

(athens.devcards.breadcrumbs.breadcrumb.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(athens.devcards.breadcrumbs.breadcrumb.cljs$lang$applyTo = (function (seq57977){
var G__57978 = cljs.core.first(seq57977);
var seq57977__$1 = cljs.core.next(seq57977);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57978,seq57977__$1);
}));

devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Normal-Breadcrumb","Normal-Breadcrumb",1775524535)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Normal-Breadcrumb",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982 = (function (meta57983){
this.meta57983 = meta57983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57984,meta57983__$1){
var self__ = this;
var _57984__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982(meta57983__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57984){
var self__ = this;
var _57984__$1 = this;
return self__.meta57983;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Athens"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Components"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Breadcrumbs"], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57983","meta57983",1186399631,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57982");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57982");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57982.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs57982 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs57982(meta57983){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982(meta57983));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57982(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-many-items","Breadcrumb-with-many-items",456733386)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-many-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985 = (function (meta57986){
this.meta57986 = meta57986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57987,meta57986__$1){
var self__ = this;
var _57987__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985(meta57986__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57987){
var self__ = this;
var _57987__$1 = this;
return self__.meta57986;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"lorem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Ipsum"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Laudantium"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null),"Accusamus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null),"Reprehenderit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(5)], null),"Aliquam"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(6)], null),"Corrupti"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(7)], null),"Omnis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(8)], null),"Quis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(9)], null),"Necessitatibus"], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57986","meta57986",1444545600,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57985");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57985");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57985.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs57985 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs57985(meta57986){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985(meta57986));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57985(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.breadcrumbs","athens.devcards.breadcrumbs",1567780774),new cljs.core.Keyword(null,"Breadcrumb-with-long-items","Breadcrumb-with-long-items",84935351)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Breadcrumb-with-long-items",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.breadcrumbs !== 'undefined') && (typeof athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988 = (function (meta57989){
this.meta57989 = meta57989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57990,meta57989__$1){
var self__ = this;
var _57990__$1 = this;
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988(meta57989__$1));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57990){
var self__ = this;
var _57990__$1 = this;
return self__.meta57989;
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__38815__auto__,devcard_opts__38816__auto__){
var self__ = this;
var this__38815__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__38816__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__38834__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumbs_list,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(0)], null),"Exercitationem qui dicta officia aut alias eum asperiores voluptates exercitationem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null),"Sapiente ad quia sunt libero"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.breadcrumbs.breadcrumb,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),"Accusantium veritatis placeat quaerat unde odio officia"], null)], null);
if(cljs.core.fn_QMARK_(v__38834__auto__)){
return (function (data_atom__38835__auto__,owner__38836__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__38834__auto__,data_atom__38835__auto__,owner__38836__auto__], null));
});
} else {
return reagent.core.as_element(v__38834__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__38816__auto__))], 0))], 0));
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57989","meta57989",777837911,null)], null);
}));

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.cljs$lang$type = true);

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.cljs$lang$ctorStr = "athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57988");

(athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57988");
}));

/**
 * Positional factory function for athens.devcards.breadcrumbs/t_athens$devcards$breadcrumbs57988.
 */
athens.devcards.breadcrumbs.__GT_t_athens$devcards$breadcrumbs57988 = (function athens$devcards$breadcrumbs$__GT_t_athens$devcards$breadcrumbs57988(meta57989){
return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988(meta57989));
});

}

return (new athens.devcards.breadcrumbs.t_athens$devcards$breadcrumbs57988(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.breadcrumbs.js.map
