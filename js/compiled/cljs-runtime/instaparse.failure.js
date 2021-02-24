goog.provide('instaparse.failure');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__46658 = (line + (1));
var G__46659 = (1);
var G__46660 = (counter + (1));
line = G__46658;
col = G__46659;
counter = G__46660;
continue;
} else {
var G__46661 = line;
var G__46662 = (col + (1));
var G__46663 = (counter + (1));
line = G__46661;
col = G__46662;
counter = G__46663;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__46665 = cljs.core.next(chars);
var G__46666 = (n__$1 - (1));
chars = G__46665;
n__$1 = G__46666;
continue;
} else {
var G__46667 = cljs.core.next(chars);
var G__46668 = n__$1;
chars = G__46667;
n__$1 = G__46668;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__46645){
var map__46646 = p__46645;
var map__46646__$1 = (((((!((map__46646 == null))))?(((((map__46646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46646):map__46646);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46646__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__46648_46669 = cljs.core.seq(full_reasons);
var chunk__46649_46670 = null;
var count__46650_46671 = (0);
var i__46651_46672 = (0);
while(true){
if((i__46651_46672 < count__46650_46671)){
var r_46673 = chunk__46649_46670.cljs$core$IIndexed$_nth$arity$2(null,i__46651_46672);
instaparse.failure.print_reason(r_46673);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46674 = seq__46648_46669;
var G__46675 = chunk__46649_46670;
var G__46676 = count__46650_46671;
var G__46677 = (i__46651_46672 + (1));
seq__46648_46669 = G__46674;
chunk__46649_46670 = G__46675;
count__46650_46671 = G__46676;
i__46651_46672 = G__46677;
continue;
} else {
var temp__5735__auto___46678 = cljs.core.seq(seq__46648_46669);
if(temp__5735__auto___46678){
var seq__46648_46679__$1 = temp__5735__auto___46678;
if(cljs.core.chunked_seq_QMARK_(seq__46648_46679__$1)){
var c__4556__auto___46680 = cljs.core.chunk_first(seq__46648_46679__$1);
var G__46681 = cljs.core.chunk_rest(seq__46648_46679__$1);
var G__46682 = c__4556__auto___46680;
var G__46683 = cljs.core.count(c__4556__auto___46680);
var G__46684 = (0);
seq__46648_46669 = G__46681;
chunk__46649_46670 = G__46682;
count__46650_46671 = G__46683;
i__46651_46672 = G__46684;
continue;
} else {
var r_46685 = cljs.core.first(seq__46648_46679__$1);
instaparse.failure.print_reason(r_46685);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__46686 = cljs.core.next(seq__46648_46679__$1);
var G__46687 = null;
var G__46688 = (0);
var G__46689 = (0);
seq__46648_46669 = G__46686;
chunk__46649_46670 = G__46687;
count__46650_46671 = G__46688;
i__46651_46672 = G__46689;
continue;
}
} else {
}
}
break;
}

var seq__46653 = cljs.core.seq(partial_reasons);
var chunk__46654 = null;
var count__46655 = (0);
var i__46656 = (0);
while(true){
if((i__46656 < count__46655)){
var r = chunk__46654.cljs$core$IIndexed$_nth$arity$2(null,i__46656);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46692 = seq__46653;
var G__46693 = chunk__46654;
var G__46694 = count__46655;
var G__46695 = (i__46656 + (1));
seq__46653 = G__46692;
chunk__46654 = G__46693;
count__46655 = G__46694;
i__46656 = G__46695;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46653);
if(temp__5735__auto__){
var seq__46653__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46653__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46653__$1);
var G__46697 = cljs.core.chunk_rest(seq__46653__$1);
var G__46698 = c__4556__auto__;
var G__46699 = cljs.core.count(c__4556__auto__);
var G__46700 = (0);
seq__46653 = G__46697;
chunk__46654 = G__46698;
count__46655 = G__46699;
i__46656 = G__46700;
continue;
} else {
var r = cljs.core.first(seq__46653__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__46701 = cljs.core.next(seq__46653__$1);
var G__46702 = null;
var G__46703 = (0);
var G__46704 = (0);
seq__46653 = G__46701;
chunk__46654 = G__46702;
count__46655 = G__46703;
i__46656 = G__46704;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
