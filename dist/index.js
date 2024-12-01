"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(O,a){
var p=require('@stdlib/blas-ext-base-dsumkbn/dist');function y(e,r,u){return p(e,r,u)}a.exports=y
});var v=i(function(g,n){
var x=require('@stdlib/blas-ext-base-dsumkbn/dist').ndarray;function f(e,r,u,c){return x(e,r,u,c)}n.exports=f
});var m=i(function(h,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=t(),b=v();j(d,"ndarray",b);q.exports=d
});var k=require("path").join,l=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=m(),s,o=l(k(__dirname,"./native.js"));R(o)?s=_:s=o;module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
