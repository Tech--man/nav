import{c as Tt,d as Z,e as q,f as K,g as $,h as U}from"./chunk-5IU2MW2R.js";import{Ab as Gt,Ha as Nt,Na as y,P as w,T as At,X as bt,Z as Dt,ba as Q,eb as Ot,fb as Ft,gb as Mt,jb as $t,kb as Rt,lb as kt,mb as Vt,sb as Ht,ua as wt,xb as Et,yb as Bt}from"./chunk-BR4ZS35E.js";import{$b as dt,Ca as O,D as W,Da as A,Ea as b,F as Y,Gb as at,Hb as pt,Hc as M,Lb as H,M as J,Ma as ot,Mb as T,N as X,Nb as c,Ob as ut,Pb as u,Qa as x,Qc as j,Rb as D,Tb as lt,Uc as St,X as k,Xc as C,Yb as d,Yc as vt,Zb as ct,Zc as yt,a as R,ac as ft,bc as _,cc as S,dc as g,ec as ht,fa as tt,fc as mt,ga as et,ha as f,hc as zt,ja as nt,kc as E,ma as it,mc as a,nc as B,oa as st,oc as G,pb as l,q as N,qb as p,qc as gt,rc as Ct,sc as P,ta as h,tc as L,ud as It,vb as V,xb as F,xc as v,yb as rt,yc as xt,zb as m,zc as _t}from"./chunk-YSUA63SV.js";var Ut=["nz-input-group-slot",""],Pt=["*"];function Wt(n,r){if(n&1&&g(0,"nz-icon",0),n&2){let t=a();u("nzType",t.icon)}}function Yt(n,r){if(n&1&&(ht(0),xt(1),mt()),n&2){let t=a();l(),_t(t.template)}}function Jt(n,r){if(n&1&&g(0,"span",3),n&2){let t=a(2);u("icon",t.nzAddOnBeforeIcon)("template",t.nzAddOnBefore)}}function Xt(n,r){}function te(n,r){if(n&1&&(_(0,"span",6),c(1,Xt,0,0,"ng-template",5),S()),n&2){let t=a(2),e=v(3);lt(t.affixInGroupStatusCls),D("ant-input-affix-wrapper-disabled",t.disabled)("ant-input-affix-wrapper-sm",t.isSmall)("ant-input-affix-wrapper-lg",t.isLarge)("ant-input-affix-wrapper-focused",t.focused),l(),u("ngTemplateOutlet",e)}}function ee(n,r){}function ne(n,r){if(n&1&&c(0,ee,0,0,"ng-template",5),n&2){a(2);let t=v(5);u("ngTemplateOutlet",t)}}function ie(n,r){if(n&1&&g(0,"span",3),n&2){let t=a(2);u("icon",t.nzAddOnAfterIcon)("template",t.nzAddOnAfter)}}function se(n,r){if(n&1&&(_(0,"span",2),c(1,Jt,1,2,"span",3)(2,te,2,11,"span",4)(3,ne,1,1,null,5)(4,ie,1,2,"span",3),S()),n&2){let t=a();l(),d(t.nzAddOnBefore||t.nzAddOnBeforeIcon?1:-1),l(),d(t.isAffix||t.hasFeedback?2:3),l(2),d(t.nzAddOnAfter||t.nzAddOnAfterIcon?4:-1)}}function oe(n,r){}function re(n,r){if(n&1&&c(0,oe,0,0,"ng-template",5),n&2){a(2);let t=v(3);u("ngTemplateOutlet",t)}}function ae(n,r){}function pe(n,r){if(n&1&&c(0,ae,0,0,"ng-template",5),n&2){a(2);let t=v(5);u("ngTemplateOutlet",t)}}function ue(n,r){if(n&1&&c(0,re,1,1,null,5)(1,pe,1,1,null,5),n&2){let t=a();d(t.isAffix?0:1)}}function le(n,r){if(n&1&&g(0,"span",7),n&2){let t=a(2);u("icon",t.nzPrefixIcon)("template",t.nzPrefix)}}function ce(n,r){}function de(n,r){if(n&1&&g(0,"nz-form-item-feedback-icon",9),n&2){let t=a(3);u("status",t.status)}}function fe(n,r){if(n&1&&(_(0,"span",8),c(1,de,1,1,"nz-form-item-feedback-icon",9),S()),n&2){let t=a(2);u("icon",t.nzSuffixIcon)("template",t.nzSuffix),l(),d(t.isFeedback?1:-1)}}function he(n,r){if(n&1&&c(0,le,1,2,"span",7)(1,ce,0,0,"ng-template",5)(2,fe,2,3,"span",8),n&2){let t=a(),e=v(5);d(t.nzPrefix||t.nzPrefixIcon?0:-1),l(),u("ngTemplateOutlet",e),l(),d(t.nzSuffix||t.nzSuffixIcon||t.isFeedback?2:-1)}}function me(n,r){if(n&1&&(_(0,"span",10),g(1,"nz-form-item-feedback-icon",9),S()),n&2){let t=a(2);l(),u("status",t.status)}}function ze(n,r){if(n&1&&(G(0),c(1,me,2,1,"span",10)),n&2){let t=a();l(),d(!t.isAddOn&&!t.isAffix&&t.isFeedback?1:-1)}}var ge=["otpInput"];function Ce(n,r){if(n&1){let t=zt();_(0,"input",2,0),E("input",function(i){let s=A(t).$index,o=a();return b(o.onInput(s,i))})("focus",function(i){A(t);let s=a();return b(s.onFocus(i))})("keydown",function(i){let s=A(t).$index,o=a();return b(o.onKeyDown(s,i))})("paste",function(i){let s=A(t).$index,o=a();return b(o.onPaste(s,i))}),S()}if(n&2){let t=r.$implicit,e=a();u("nzSize",e.nzSize)("formControl",t)("nzStatus",e.nzStatus)}}var en=(()=>{class n{ngZone;platform;resizeService;autosize=!1;el=h(x).nativeElement;cachedLineHeight;previousValue;previousMinRows;minRows;maxRows;maxHeight=null;minHeight=null;destroy$=new N;inputGap=10;set nzAutosize(t){typeof t=="string"||t===!0?this.autosize=!0:(i=>typeof i!="string"&&typeof i!="boolean"&&(!!i.maxRows||!!i.minRows))(t)&&(this.autosize=!0,this.minRows=t.minRows,this.maxRows=t.maxRows,this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight())}resizeToFitContent(t=!1){if(this.cacheTextareaLineHeight(),!this.cachedLineHeight)return;let e=this.el,i=e.value;if(!t&&this.minRows===this.previousMinRows&&i===this.previousValue)return;let s=e.placeholder;e.classList.add("nz-textarea-autosize-measuring"),e.placeholder="";let o=Math.round((e.scrollHeight-this.inputGap)/this.cachedLineHeight)*this.cachedLineHeight+this.inputGap;this.maxHeight!==null&&o>this.maxHeight&&(o=this.maxHeight),this.minHeight!==null&&o<this.minHeight&&(o=this.minHeight),e.style.height=`${o}px`,e.classList.remove("nz-textarea-autosize-measuring"),e.placeholder=s,typeof requestAnimationFrame<"u"&&this.ngZone.runOutsideAngular(()=>requestAnimationFrame(()=>{let{selectionStart:z,selectionEnd:I}=e;!this.destroy$.isStopped&&document.activeElement===e&&e.setSelectionRange(z,I)})),this.previousValue=i,this.previousMinRows=this.minRows}cacheTextareaLineHeight(){if(this.cachedLineHeight>=0||!this.el.parentNode)return;let t=this.el.cloneNode(!1);t.rows=1,t.style.position="absolute",t.style.visibility="hidden",t.style.border="none",t.style.padding="0",t.style.height="",t.style.minHeight="",t.style.maxHeight="",t.style.overflow="hidden",this.el.parentNode.appendChild(t),this.cachedLineHeight=t.clientHeight-this.inputGap,this.el.parentNode.removeChild(t),this.maxHeight=this.setMaxHeight(),this.minHeight=this.setMinHeight()}setMinHeight(){let t=this.minRows&&this.cachedLineHeight?this.minRows*this.cachedLineHeight+this.inputGap:null;return t!==null&&(this.el.style.minHeight=`${t}px`),t}setMaxHeight(){let t=this.maxRows&&this.cachedLineHeight?this.maxRows*this.cachedLineHeight+this.inputGap:null;return t!==null&&(this.el.style.maxHeight=`${t}px`),t}noopInputHandler(){}constructor(t,e,i){this.ngZone=t,this.platform=e,this.resizeService=i}ngAfterViewInit(){this.autosize&&this.platform.isBrowser&&(this.resizeToFitContent(),this.resizeService.subscribe().pipe(f(this.destroy$)).subscribe(()=>this.resizeToFitContent(!0)))}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}ngDoCheck(){this.autosize&&this.platform.isBrowser&&this.resizeToFitContent()}static \u0275fac=function(e){return new(e||n)(p(ot),p(At),p(Nt))};static \u0275dir=m({type:n,selectors:[["textarea","nzAutosize",""]],hostAttrs:["rows","1"],hostBindings:function(e,i){e&1&&E("input",function(){return i.noopInputHandler()})},inputs:{nzAutosize:"nzAutosize"},exportAs:["nzAutosize"]})}return n})(),nn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputAddonBefore",""]]})}return n})(),sn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputAddonAfter",""]]})}return n})(),on=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputPrefix",""]]})}return n})(),rn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=m({type:n,selectors:[["","nzInputSuffix",""]]})}return n})(),Lt=(()=>{class n{icon=null;type=null;template=null;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=F({type:n,selectors:[["","nz-input-group-slot",""]],hostVars:6,hostBindings:function(e,i){e&2&&D("ant-input-group-addon",i.type==="addon")("ant-input-prefix",i.type==="prefix")("ant-input-suffix",i.type==="suffix")},inputs:{icon:"icon",type:"type",template:"template"},attrs:Ut,ngContentSelectors:Pt,decls:3,vars:2,consts:[[3,"nzType"],[4,"nzStringTemplateOutlet"]],template:function(e,i){e&1&&(B(),c(0,Wt,1,1,"nz-icon",0)(1,Yt,2,1,"ng-container",1),G(2)),e&2&&(d(i.icon?0:-1),l(),u("nzStringTemplateOutlet",i.template))},dependencies:[Dt,bt,Ft,Ot],encapsulation:2,changeDetection:0})}return n})(),jt=(()=>{class n{renderer;elementRef;hostView;directionality;nzBorderless=!1;nzSize="default";nzStepperless=!0;nzStatus="";get disabled(){return this.ngControl&&this.ngControl.disabled!==null?this.ngControl.disabled:this._disabled}set disabled(t){this._disabled=t}_disabled=!1;disabled$=new N;dir="ltr";prefixCls="ant-input";status="";statusCls={};hasFeedback=!1;feedbackRef=null;components=[];ngControl=h(kt,{self:!0,optional:!0});finalSize=yt(()=>this.compactSize?this.compactSize():this.size());size=pt(this.nzSize);compactSize=h(Tt,{optional:!0});destroy$=h(y);nzFormStatusService=h(K,{optional:!0});nzFormNoStatusService=h($,{optional:!0});constructor(t,e,i,s){this.renderer=t,this.elementRef=e,this.hostView=i,this.directionality=s}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(k((t,e)=>t.status===e.status&&t.hasFeedback===e.hasFeedback),f(this.destroy$)).subscribe(({status:t,hasFeedback:e})=>{this.setStatusStyles(t,e)}),this.ngControl&&this.ngControl.statusChanges?.pipe(X(()=>this.ngControl.disabled!==null),f(this.destroy$)).subscribe(()=>{this.disabled$.next(this.ngControl.disabled)}),this.dir=this.directionality.value,this.directionality.change?.pipe(f(this.destroy$)).subscribe(t=>{this.dir=t})}ngOnChanges({disabled:t,nzStatus:e,nzSize:i}){t&&this.disabled$.next(this.disabled),e&&this.setStatusStyles(this.nzStatus,this.hasFeedback),i&&this.size.set(i.currentValue)}setStatusStyles(t,e){this.status=t,this.hasFeedback=e,this.renderFeedbackIcon(),this.statusCls=w(this.prefixCls,t,e),Object.keys(this.statusCls).forEach(i=>{this.statusCls[i]?this.renderer.addClass(this.elementRef.nativeElement,i):this.renderer.removeClass(this.elementRef.nativeElement,i)})}renderFeedbackIcon(){if(!this.status||!this.hasFeedback||this.nzFormNoStatusService){this.hostView.clear(),this.feedbackRef=null;return}this.feedbackRef=this.feedbackRef||this.hostView.createComponent(U),this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix"),this.feedbackRef.instance.status=this.status,this.feedbackRef.instance.updateIcon()}static \u0275fac=function(e){return new(e||n)(p(V),p(x),p(at),p(Q))};static \u0275dir=m({type:n,selectors:[["input","nz-input",""],["textarea","nz-input",""]],hostAttrs:[1,"ant-input"],hostVars:13,hostBindings:function(e,i){e&2&&(ut("disabled",i.disabled||null),D("ant-input-disabled",i.disabled)("ant-input-borderless",i.nzBorderless)("ant-input-lg",i.finalSize()==="large")("ant-input-sm",i.finalSize()==="small")("ant-input-rtl",i.dir==="rtl")("ant-input-stepperless",i.nzStepperless))},inputs:{nzBorderless:[2,"nzBorderless","nzBorderless",C],nzSize:"nzSize",nzStepperless:[2,"nzStepperless","nzStepperless",C],nzStatus:"nzStatus",disabled:[2,"disabled","disabled",C]},exportAs:["nzInput"],features:[M([y,{provide:Z,useValue:"input"}]),T,H([q]),O]})}return n})(),an=(()=>{class n{elementRef;constructor(t){this.elementRef=t}static \u0275fac=function(e){return new(e||n)(p(x))};static \u0275dir=m({type:n,selectors:[["nz-input-group","nzSuffix",""],["nz-input-group","nzPrefix",""]]})}return n})(),xe=(()=>{class n{focusMonitor;elementRef;renderer;cdr;directionality;listOfNzInputDirective;nzAddOnBeforeIcon=null;nzAddOnAfterIcon=null;nzPrefixIcon=null;nzSuffixIcon=null;nzAddOnBefore;nzAddOnAfter;nzPrefix;nzStatus="";nzSuffix;nzSize="default";nzSearch=!1;nzCompact=!1;isLarge=!1;isSmall=!1;isAffix=!1;isAddOn=!1;isFeedback=!1;focused=!1;disabled=!1;dir="ltr";prefixCls="ant-input";affixStatusCls={};groupStatusCls={};affixInGroupStatusCls={};status="";hasFeedback=!1;destroy$=new N;nzFormStatusService=h(K,{optional:!0});nzFormNoStatusService=h($,{optional:!0});constructor(t,e,i,s,o){this.focusMonitor=t,this.elementRef=e,this.renderer=i,this.cdr=s,this.directionality=o}updateChildrenInputSize(){this.listOfNzInputDirective&&this.listOfNzInputDirective.forEach(t=>t.size.set(this.nzSize))}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe(k((t,e)=>t.status===e.status&&t.hasFeedback===e.hasFeedback),f(this.destroy$)).subscribe(({status:t,hasFeedback:e})=>{this.setStatusStyles(t,e)}),this.focusMonitor.monitor(this.elementRef,!0).pipe(f(this.destroy$)).subscribe(t=>{this.focused=!!t,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe(f(this.destroy$)).subscribe(t=>{this.dir=t})}ngAfterContentInit(){this.updateChildrenInputSize();let t=this.listOfNzInputDirective.changes.pipe(tt(this.listOfNzInputDirective));t.pipe(et(e=>J(t,...e.map(i=>i.disabled$))),Y(()=>t),W(e=>e.some(i=>i.disabled)),f(this.destroy$)).subscribe(e=>{this.disabled=e,this.cdr.markForCheck()})}ngOnChanges(t){let{nzSize:e,nzSuffix:i,nzPrefix:s,nzPrefixIcon:o,nzSuffixIcon:z,nzAddOnAfter:I,nzAddOnBefore:Qt,nzAddOnAfterIcon:Zt,nzAddOnBeforeIcon:qt,nzStatus:Kt}=t;e&&(this.updateChildrenInputSize(),this.isLarge=this.nzSize==="large",this.isSmall=this.nzSize==="small"),(i||s||o||z)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(I||Qt||Zt||qt)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),Kt&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(t,e){this.status=t,this.hasFeedback=e,this.isFeedback=!!t&&e;let i=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon);this.isAffix=i||!this.isAddOn&&e,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=w(`${this.prefixCls}-affix-wrapper`,t,e):{},this.cdr.markForCheck(),this.affixStatusCls=w(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":t,this.isAddOn?!1:e),this.groupStatusCls=w(`${this.prefixCls}-group-wrapper`,this.isAddOn?t:"",this.isAddOn?e:!1);let s=R(R({},this.affixStatusCls),this.groupStatusCls);Object.keys(s).forEach(o=>{s[o]?this.renderer.addClass(this.elementRef.nativeElement,o):this.renderer.removeClass(this.elementRef.nativeElement,o)})}static \u0275fac=function(e){return new(e||n)(p(wt),p(x),p(V),p(St),p(Q))};static \u0275cmp=F({type:n,selectors:[["nz-input-group"]],contentQueries:function(e,i,s){if(e&1&&gt(s,jt,4),e&2){let o;P(o=L())&&(i.listOfNzInputDirective=o)}},hostVars:40,hostBindings:function(e,i){e&2&&D("ant-input-group-compact",i.nzCompact)("ant-input-search-enter-button",i.nzSearch)("ant-input-search",i.nzSearch)("ant-input-search-rtl",i.dir==="rtl")("ant-input-search-sm",i.nzSearch&&i.isSmall)("ant-input-search-large",i.nzSearch&&i.isLarge)("ant-input-group-wrapper",i.isAddOn)("ant-input-group-wrapper-rtl",i.dir==="rtl")("ant-input-group-wrapper-lg",i.isAddOn&&i.isLarge)("ant-input-group-wrapper-sm",i.isAddOn&&i.isSmall)("ant-input-affix-wrapper",i.isAffix&&!i.isAddOn)("ant-input-affix-wrapper-rtl",i.dir==="rtl")("ant-input-affix-wrapper-focused",i.isAffix&&i.focused)("ant-input-affix-wrapper-disabled",i.isAffix&&i.disabled)("ant-input-affix-wrapper-lg",i.isAffix&&!i.isAddOn&&i.isLarge)("ant-input-affix-wrapper-sm",i.isAffix&&!i.isAddOn&&i.isSmall)("ant-input-group",!i.isAffix&&!i.isAddOn)("ant-input-group-rtl",i.dir==="rtl")("ant-input-group-lg",!i.isAffix&&!i.isAddOn&&i.isLarge)("ant-input-group-sm",!i.isAffix&&!i.isAddOn&&i.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzSearch:[2,"nzSearch","nzSearch",C],nzCompact:[2,"nzCompact","nzCompact",C]},exportAs:["nzInputGroup"],features:[M([$,{provide:Z,useValue:"input"}]),T,H([q]),O],ngContentSelectors:Pt,decls:6,vars:1,consts:[["affixTemplate",""],["contentTemplate",""],[1,"ant-input-wrapper","ant-input-group"],["nz-input-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-affix-wrapper",3,"ant-input-affix-wrapper-disabled","ant-input-affix-wrapper-sm","ant-input-affix-wrapper-lg","ant-input-affix-wrapper-focused","class"],[3,"ngTemplateOutlet"],[1,"ant-input-affix-wrapper"],["nz-input-group-slot","","type","prefix",3,"icon","template"],["nz-input-group-slot","","type","suffix",3,"icon","template"],[3,"status"],["nz-input-group-slot","","type","suffix"]],template:function(e,i){e&1&&(B(),c(0,se,5,3,"span",2)(1,ue,2,1)(2,he,3,3,"ng-template",null,0,j)(4,ze,2,1,"ng-template",null,1,j)),e&2&&d(i.isAddOn?0:1)},dependencies:[Lt,It,U],encapsulation:2,changeDetection:0})}return n})(),_e=(()=>{class n{formBuilder;nzDestroyService;otpInputs;nzLength=6;nzSize="default";disabled=!1;nzStatus="";nzFormatter=t=>t;nzMask=null;otpArray;internalValue=[];onChangeCallback;onTouched=()=>{};constructor(t,e){this.formBuilder=t,this.nzDestroyService=e,this.createFormArray()}ngOnChanges(t){t.nzLength?.currentValue&&this.createFormArray(),t.disabled&&this.setDisabledState(this.disabled)}onInput(t,e){let i=e.target,s=this.otpInputs.toArray()[t+1];i.value&&s?s.nativeElement.focus():s||this.selectInputBox(t)}onFocus(t){t.target.select()}onKeyDown(t,e){let i=this.otpInputs.toArray()[t-1];e.keyCode===8&&(e.preventDefault(),this.internalValue[t]="",this.otpArray.at(t).setValue("",{emitEvent:!1}),i&&this.selectInputBox(t-1),this.emitValue())}writeValue(t){if(!t){this.otpArray.reset();return}let e=t.split("");this.internalValue=e,e.forEach((i,s)=>{let o=this.nzFormatter(i),z=this.nzMask?this.nzMask:o;this.otpArray.at(s).setValue(z,{emitEvent:!1})})}registerOnChange(t){this.onChangeCallback=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){t?this.otpArray.disable():this.otpArray.enable()}onPaste(t,e){let i=e.clipboardData?.getData("text")||"";if(!i)return;let s=t;for(let o of i.split(""))if(s<this.nzLength){let z=this.nzFormatter(o);this.internalValue[s]=o;let I=this.nzMask?this.nzMask:z;this.otpArray.at(s).setValue(I,{emitEvent:!1}),s++}else break;e.preventDefault(),this.selectInputBox(s),this.emitValue()}createFormArray(){this.otpArray=this.formBuilder.array([]),this.internalValue=new Array(this.nzLength).fill("");for(let t=0;t<this.nzLength;t++){let e=this.formBuilder.nonNullable.control("",[Rt.required]);e.valueChanges.pipe(nt(i=>{let s=this.nzFormatter(i);this.internalValue[t]=s,e.setValue(this.nzMask??s,{emitEvent:!1}),this.emitValue()}),f(this.nzDestroyService)).subscribe(),this.otpArray.push(e)}}emitValue(){let t=this.internalValue.join("");this.onChangeCallback&&this.onChangeCallback(t)}selectInputBox(t){let e=this.otpInputs.toArray();t>=e.length&&(t=e.length-1),e[t].nativeElement.select()}static \u0275fac=function(e){return new(e||n)(p(Bt),p(y))};static \u0275cmp=F({type:n,selectors:[["nz-input-otp"]],viewQuery:function(e,i){if(e&1&&Ct(ge,5),e&2){let s;P(s=L())&&(i.otpInputs=s)}},hostAttrs:[1,"ant-otp"],inputs:{nzLength:[2,"nzLength","nzLength",vt],nzSize:"nzSize",disabled:[2,"disabled","disabled",C],nzStatus:"nzStatus",nzFormatter:"nzFormatter",nzMask:"nzMask"},exportAs:["nzInputOtp"],features:[M([{provide:Mt,useExisting:it(()=>n),multi:!0},y]),T,O],decls:2,vars:0,consts:[["otpInput",""],["nz-input","","type","text","maxlength","1","size","1",1,"ant-otp-input",3,"nzSize","formControl","nzStatus"],["nz-input","","type","text","maxlength","1","size","1",1,"ant-otp-input",3,"input","focus","keydown","paste","nzSize","formControl","nzStatus"]],template:function(e,i){e&1&&dt(0,Ce,2,3,"input",1,ct),e&2&&ft(i.otpArray.controls)},dependencies:[jt,Gt,$t,Vt,Et,Ht],encapsulation:2,changeDetection:0})}return n})();var pn=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=rt({type:n});static \u0275inj=st({imports:[xe,Lt,_e]})}return n})();export{en as a,nn as b,sn as c,on as d,rn as e,jt as f,an as g,xe as h,pn as i};
