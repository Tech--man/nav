import{g as n}from"./chunk-A3VCTC2J.js";import{$ as f}from"./chunk-BR4ZS35E.js";import{na as i,sa as r}from"./chunk-YSUA63SV.js";var a=class o{constructor(e){this.router=e}goUrl(e,t){if(e?.stopPropagation?.(),e?.preventDefault?.(),typeof t!="string"||!t)return;if(t==="@apply"){f.emit("CREATE_WEB");return}if(t[0]==="@"){this.router.navigate([t.slice(1)]);return}t[0]==="!"?window.open(t.slice(1),"_self"):window.open(t)}static \u0275fac=function(t){return new(t||o)(r(n))};static \u0275prov=i({token:o,factory:o.\u0275fac,providedIn:"root"})};export{a};
