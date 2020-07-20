goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47030 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47031 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47031);

try{try{var seq__47032 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47033 = null;
var count__47034 = (0);
var i__47035 = (0);
while(true){
if((i__47035 < count__47034)){
var vec__47042 = chunk__47033.cljs$core$IIndexed$_nth$arity$2(null,i__47035);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(1),null);
var temp__5733__auto___47085 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47085)){
var effect_fn_47086 = temp__5733__auto___47085;
(effect_fn_47086.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47086.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47086.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47087 = seq__47032;
var G__47088 = chunk__47033;
var G__47089 = count__47034;
var G__47090 = (i__47035 + (1));
seq__47032 = G__47087;
chunk__47033 = G__47088;
count__47034 = G__47089;
i__47035 = G__47090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47032);
if(temp__5735__auto__){
var seq__47032__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47032__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47032__$1);
var G__47091 = cljs.core.chunk_rest(seq__47032__$1);
var G__47092 = c__4609__auto__;
var G__47093 = cljs.core.count(c__4609__auto__);
var G__47094 = (0);
seq__47032 = G__47091;
chunk__47033 = G__47092;
count__47034 = G__47093;
i__47035 = G__47094;
continue;
} else {
var vec__47046 = cljs.core.first(seq__47032__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(1),null);
var temp__5733__auto___47095 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47095)){
var effect_fn_47096 = temp__5733__auto___47095;
(effect_fn_47096.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47096.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47096.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47097 = cljs.core.next(seq__47032__$1);
var G__47098 = null;
var G__47099 = (0);
var G__47100 = (0);
seq__47032 = G__47097;
chunk__47033 = G__47098;
count__47034 = G__47099;
i__47035 = G__47100;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46194__auto___47101 = re_frame.interop.now();
var duration__46195__auto___47102 = (end__46194__auto___47101 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46195__auto___47102,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46194__auto___47101);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47030);
}} else {
var seq__47049 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47050 = null;
var count__47051 = (0);
var i__47052 = (0);
while(true){
if((i__47052 < count__47051)){
var vec__47059 = chunk__47050.cljs$core$IIndexed$_nth$arity$2(null,i__47052);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47059,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47059,(1),null);
var temp__5733__auto___47106 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47106)){
var effect_fn_47107 = temp__5733__auto___47106;
(effect_fn_47107.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47107.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47107.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47108 = seq__47049;
var G__47109 = chunk__47050;
var G__47110 = count__47051;
var G__47111 = (i__47052 + (1));
seq__47049 = G__47108;
chunk__47050 = G__47109;
count__47051 = G__47110;
i__47052 = G__47111;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47049);
if(temp__5735__auto__){
var seq__47049__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47049__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47049__$1);
var G__47112 = cljs.core.chunk_rest(seq__47049__$1);
var G__47113 = c__4609__auto__;
var G__47114 = cljs.core.count(c__4609__auto__);
var G__47115 = (0);
seq__47049 = G__47112;
chunk__47050 = G__47113;
count__47051 = G__47114;
i__47052 = G__47115;
continue;
} else {
var vec__47062 = cljs.core.first(seq__47049__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(1),null);
var temp__5733__auto___47116 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___47116)){
var effect_fn_47117 = temp__5733__auto___47116;
(effect_fn_47117.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47117.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47117.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47118 = cljs.core.next(seq__47049__$1);
var G__47119 = null;
var G__47120 = (0);
var G__47121 = (0);
seq__47049 = G__47118;
chunk__47050 = G__47119;
count__47051 = G__47120;
i__47052 = G__47121;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47065 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47066 = null;
var count__47067 = (0);
var i__47068 = (0);
while(true){
if((i__47068 < count__47067)){
var map__47073 = chunk__47066.cljs$core$IIndexed$_nth$arity$2(null,i__47068);
var map__47073__$1 = (((((!((map__47073 == null))))?(((((map__47073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47073):map__47073);
var effect = map__47073__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47073__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47073__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47065,chunk__47066,count__47067,i__47068,map__47073,map__47073__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47065,chunk__47066,count__47067,i__47068,map__47073,map__47073__$1,effect,ms,dispatch))
,ms);
}


var G__47126 = seq__47065;
var G__47127 = chunk__47066;
var G__47128 = count__47067;
var G__47129 = (i__47068 + (1));
seq__47065 = G__47126;
chunk__47066 = G__47127;
count__47067 = G__47128;
i__47068 = G__47129;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47065);
if(temp__5735__auto__){
var seq__47065__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47065__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47065__$1);
var G__47132 = cljs.core.chunk_rest(seq__47065__$1);
var G__47133 = c__4609__auto__;
var G__47134 = cljs.core.count(c__4609__auto__);
var G__47135 = (0);
seq__47065 = G__47132;
chunk__47066 = G__47133;
count__47067 = G__47134;
i__47068 = G__47135;
continue;
} else {
var map__47075 = cljs.core.first(seq__47065__$1);
var map__47075__$1 = (((((!((map__47075 == null))))?(((((map__47075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47075):map__47075);
var effect = map__47075__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47075__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47075__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__47065,chunk__47066,count__47067,i__47068,map__47075,map__47075__$1,effect,ms,dispatch,seq__47065__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__47065,chunk__47066,count__47067,i__47068,map__47075,map__47075__$1,effect,ms,dispatch,seq__47065__$1,temp__5735__auto__))
,ms);
}


var G__47136 = cljs.core.next(seq__47065__$1);
var G__47137 = null;
var G__47138 = (0);
var G__47139 = (0);
seq__47065 = G__47136;
chunk__47066 = G__47137;
count__47067 = G__47138;
i__47068 = G__47139;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47077 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47078 = null;
var count__47079 = (0);
var i__47080 = (0);
while(true){
if((i__47080 < count__47079)){
var event = chunk__47078.cljs$core$IIndexed$_nth$arity$2(null,i__47080);
re_frame.router.dispatch(event);


var G__47142 = seq__47077;
var G__47143 = chunk__47078;
var G__47144 = count__47079;
var G__47145 = (i__47080 + (1));
seq__47077 = G__47142;
chunk__47078 = G__47143;
count__47079 = G__47144;
i__47080 = G__47145;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47077);
if(temp__5735__auto__){
var seq__47077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47077__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47077__$1);
var G__47148 = cljs.core.chunk_rest(seq__47077__$1);
var G__47149 = c__4609__auto__;
var G__47150 = cljs.core.count(c__4609__auto__);
var G__47151 = (0);
seq__47077 = G__47148;
chunk__47078 = G__47149;
count__47079 = G__47150;
i__47080 = G__47151;
continue;
} else {
var event = cljs.core.first(seq__47077__$1);
re_frame.router.dispatch(event);


var G__47153 = cljs.core.next(seq__47077__$1);
var G__47154 = null;
var G__47155 = (0);
var G__47156 = (0);
seq__47077 = G__47153;
chunk__47078 = G__47154;
count__47079 = G__47155;
i__47080 = G__47156;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47081 = cljs.core.seq(value);
var chunk__47082 = null;
var count__47083 = (0);
var i__47084 = (0);
while(true){
if((i__47084 < count__47083)){
var event = chunk__47082.cljs$core$IIndexed$_nth$arity$2(null,i__47084);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47158 = seq__47081;
var G__47159 = chunk__47082;
var G__47160 = count__47083;
var G__47161 = (i__47084 + (1));
seq__47081 = G__47158;
chunk__47082 = G__47159;
count__47083 = G__47160;
i__47084 = G__47161;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47081);
if(temp__5735__auto__){
var seq__47081__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47081__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47081__$1);
var G__47162 = cljs.core.chunk_rest(seq__47081__$1);
var G__47163 = c__4609__auto__;
var G__47164 = cljs.core.count(c__4609__auto__);
var G__47165 = (0);
seq__47081 = G__47162;
chunk__47082 = G__47163;
count__47083 = G__47164;
i__47084 = G__47165;
continue;
} else {
var event = cljs.core.first(seq__47081__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__47166 = cljs.core.next(seq__47081__$1);
var G__47167 = null;
var G__47168 = (0);
var G__47169 = (0);
seq__47081 = G__47166;
chunk__47082 = G__47167;
count__47083 = G__47168;
i__47084 = G__47169;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
