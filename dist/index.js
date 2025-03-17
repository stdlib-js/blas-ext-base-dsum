"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=i(function(g,t){
var y=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function f(e,r,a,c){return y(e,r,a,c)}t.exports=f
});var v=i(function(h,n){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=u();function j(e,r,a){return x(e,r,a,p(e,a))}n.exports=j
});var o=i(function(w,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=u();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,b=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),E=o(),s,m=b(_(__dirname,"./native.js"));k(m)?s=E:s=m;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
