function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,c,u){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(s){const r=f(n,e,o,u);t.p(r,s)}}function l(t){return null==t?"":t}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function y(){return b(" ")}function _(){return b("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){for(const e in n)v(t,e,n[e])}function E(t){return Array.from(t.childNodes)}function k(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?g(n):m(n)}function j(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return b(n)}function A(t){return j(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function L(t,n,e){t.classList[e?"add":"remove"](n)}let O;function S(t){O=t}function C(){if(!O)throw new Error("Function called outside component initialization");return O}function M(t){C().$$.on_mount.push(t)}function T(t){C().$$.after_update.push(t)}function q(t,n){C().$$.context.set(t,n)}function z(t){return C().$$.context.get(t)}const B=[],F=[],P=[],D=[],G=Promise.resolve();let H=!1;function I(t){P.push(t)}function J(t){D.push(t)}let K=!1;const Q=new Set;function R(){if(!K){K=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];S(n),U(n.$$)}for(S(null),B.length=0;F.length;)F.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];Q.has(n)||(Q.add(n),n())}P.length=0}while(B.length);for(;D.length;)D.pop()();H=!1,K=!1,Q.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const V=new Set;let W;function X(){W={r:0,c:[],p:W}}function Y(){W.r||r(W.c),W=W.p}function Z(t,n){t&&t.i&&(V.delete(t),t.i(n))}function tt(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),W.c.push((()=>{V.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function nt(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const u in o)u in e||(e[u]=void 0);return e}function et(t){return"object"==typeof t&&null!==t?t:{}}function ot(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function rt(t){t&&t.c()}function ct(t,n){t&&t.l(n)}function ut(t,n,o,u){const{fragment:s,on_mount:i,on_destroy:f,after_update:a}=t.$$;s&&s.m(n,o),u||I((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(I)}function st(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){-1===t.$$.dirty[0]&&(B.push(t),H||(H=!0,G.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ft(n,e,c,u,s,i,f=[-1]){const a=O;S(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&s(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&it(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!u&&u(l.ctx),e.target){if(e.hydrate){const t=E(e.target);l.fragment&&l.fragment.l(t),t.forEach($)}else l.fragment&&l.fragment.c();e.intro&&Z(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),R()}S(a)}class at{$destroy(){st(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{T as A,M as B,X as C,Y as D,g as E,L as F,x as G,F as H,ot as I,l as J,J as K,z as L,i as M,a as N,s as O,w as P,h as Q,at as S,E as a,j as b,k as c,$ as d,m as e,p as f,d as g,N as h,ft as i,y as j,_ as k,A as l,n as m,t as n,v as o,rt as p,ct as q,ut as r,u as s,b as t,nt as u,et as v,Z as w,tt as x,st as y,q as z};
