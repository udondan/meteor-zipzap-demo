/*
 2013 Jason Mulligan
 @license BSD-3 <https://raw.github.com/avoidwork/filesize.js/master/LICENSE>
 @link http://filesizejs.com
 @module filesize
 @version 2.0.0
*/
(function(r){function f(f,c){var b="",g=!1,l=6,a,h,q,d,m,n,p,e,k;if(isNaN(f))throw Error("Invalid arguments");c=c||{};h=!0===c.bits;e=!0===c.unix;a=void 0!==c.base?c.base:e?2:10;m=void 0!==c.round?c.round:e?1:2;k=void 0!==c.spacer?c.spacer:e?"":" ";d=Number(f);(q=0>d)&&(d=-d);if(0===d)b=e?"0":"0"+k+"B";else for(p=s[a][h?"bits":"bytes"];l--;)if(n=p[l][1],a=p[l][0],d>=n){t.test(a)&&(g=!0,m=0);b=(d/n).toFixed(m);!g&&e?(h&&u.test(a)&&(a=a.toLowerCase()),a=a.charAt(0),g=v.exec(b),h||"k"!==a||(a="K"),null!==
g&&void 0!==g[1]&&w.test(g[1])&&(b=parseInt(b,x)),b+=k+a):e||(b+=k+a);break}q&&(b="-"+b);return b}var u=/b$/,t=/^B$/,x=10,v=/\.(.*)/,w=/^0$/,s={2:{bits:[["B",1],["kb",128],["Mb",131072],["Gb",134217728],["Tb",137438953472],["Pb",0x800000000000]],bytes:[["B",1],["kB",1024],["MB",1048576],["GB",1073741824],["TB",1099511627776],["PB",0x4000000000000]]},10:{bits:[["B",1],["kb",125],["Mb",125E3],["Gb",125E6],["Tb",125E9],["Pb",125E12]],bytes:[["B",1],["kB",1E3],["MB",1E6],["GB",1E9],["TB",1E12],["PB",
1E15]]}};"undefined"!==typeof exports?module.exports=f:"function"===typeof define?define(function(){return f}):r.filesize=f})(this);
//@ sourceMappingURL=filesize.map