!function(){if(window.pc={markPhysics2dModuleAsUsed(){},markPhysics3dModuleAsUsed(){}},!DEVELOP)return;const s={Physics3d:"physics3d",Physics2d:"physics2d",ParticleSystem:"particle-system",Reflection:"reflection",Prefabs:"prefabs"};const e=new class{constructor(){this.classes=new Map,this.methods=new Map,this.unusedModules=new Set([s.Physics3d,s.Physics2d,s.ParticleSystem,s.Reflection,s.Prefabs]),this.saveTimerId=null,this.allClassesAreDefined=!1,window.addEventListener("luna:starting",(()=>{this.allClassesAreDefined=!0}))}registerClass(s){this.classes.has(s)||(this.classes.set(s,!0),this.save())}markClassAsUsed(s){this.classes.has(s)&&!1!==this.classes.get(s)&&(this.classes.set(s,!1),this.save())}registerMethod(s,e){this.methods.has(s)||this.methods.set(s,new Map);const t=this.methods.get(s);t.has(e)||(t.set(e,!0),this.save())}markMethodAsUsed(s,e){this.methods.has(s)||this.methods.set(s,new Map);const t=this.methods.get(s);!1!==t.get(e)&&(t.set(e,!1),this.save())}markModuleAsUsed(s){this.unusedModules.has(s)&&(this.unusedModules.delete(s),this.save())}serialize(){const s=new Set(window.$environment.forceIncludedClasses),e=[...this.classes.entries()].filter((([s,e])=>e)).filter((([e])=>!s.has(e))).map((([s])=>({name:s,excluded:!0}))),t=[];for(const i of this.methods.keys()){if(!0===this.classes.get(i))continue;if(s.has(i))continue;const n=[...this.methods.get(i).entries()].map((([s,e])=>({name:s,excluded:e})));0===n.length&&e.push({name:i,excluded:!1}),t.push({className:i,staticMethods:[],instanceMethods:n})}for(const[t,i]of this.classes.entries()){const n=!i&&!this.methods.has(t),a=s.has(t);(n||a)&&e.push({name:t,excluded:!1})}return JSON.stringify({unusedClasses:e,unusedMethods:t,unusedModules:[...this.unusedModules]})}save(){this.saveTimerId&&clearTimeout(this.saveTimerId),this.saveTimerId=setTimeout((()=>{this.saveTimerId=null,this.allClassesAreDefined?(fetch(window.location.origin+"/tracing",{method:"POST",body:this.serialize()}),this.syncBackWithLuna()):this.save()}),100)}syncBackWithLuna(){fetch(window.location.origin+"/luna.json").then((s=>s.json())).then((s=>{const e=new Set([...s.unity.unusedClasses.filter((({excluded:s})=>!s)).map((({name:s})=>s)),...s.unity.unusedMethods.map((({className:s})=>s))]),t=[];for(const[s,i]of this.classes.entries())i&&e.has(s)&&t.push(s);for(const s of t)try{Bridge.unroll(s)}catch(s){}}))}};window.traceResults=e,e.EngineModules=s;const t=new Set;function i(s){if(!s)return null;const e=s.$$fullname||s.$$name;return e?e.replace("+","."):null}function n(s,t,n){!Bridge.Class.$queue.includes(s)&&s.prototype&&Bridge.Class.$queue.push(s),e.markClassAsUsed(t);const a=[];s.$$inherits&&s.$$inherits.forEach((function s(e){n.has(e)||(n.add(e),e.$$inherits&&e.$$inherits.forEach(s),e.$genericTypeDefinition?(s(e.$genericTypeDefinition),e.$typeArguments.forEach(s)):a.push(i(e)))})),a.filter((s=>s)).forEach((s=>e.markClassAsUsed(s)))}window.TRACE=(s,i)=>{if(Array.isArray(s))for(let t=0;t<s.length;t++){const i=s[t],[n,...a]=i.split("#");e.registerClass(n),e.registerMethod(n,a.join("#"))}else{if(t.has(s))return;t.add(s);const[i,...n]=s.split("#");e.markClassAsUsed(i),e.markMethodAsUsed(i,n.join("#"))}};const a=/TRACE\(\s*"(.+)"/;let r=null;Object.defineProperty(window,"Bridge",{get:()=>r,set(s){if(r===s)return;!function(s){let t=null;const a=function(a,r,o,h){return!(o||r&&r.$noRegister)&&e.registerClass(a),r?t.call(s,a,"function"==typeof r?function(s,e){const t=function(...t){const a=new Set,r=e(...t);return n({},s,a),t.forEach((s=>n(s,i(s),a))),Array.isArray(r.inherits)&&r.inherits.forEach((s=>n(s,i(s),a))),r};return Object.defineProperty(t,"length",{get:()=>e.length}),t.toString=()=>e.toString(),t.$aliasInit=e.$aliasInit,t}(a,r):function(s,e){let t=e.statics||e.$statics;t||(t={},e.statics=t),["fields","events","props","ctors","methods"].some((s=>s in t))&&(t.ctors=t.ctors||{},t=t.ctors);let i=t.ctor;return i||(i=()=>{},t.ctor=i),t.ctor=function(...e){const t=new Set;n(this,s,t),i.apply(this,e)},e}(a,r),o,h):t.call(s,a,r,o,h)};Object.defineProperty(s,"define",{get:()=>a,set(s){t=s}})}(s);const t=s.fn.cacheBind;s.fn.cacheBind=(s,e,i,n)=>{const r=function(s){const e=s.toString().match(a);return e&&e[1]?e[1]:null}(e);return r&&TRACE(r),t(s,e,i,n)},r=s}})}(),function(){if(!DEVELOP)return;window.shaderVariantsTraceResults=new class{constructor(){this.shaderVariants=new Map,this.saveTimerId=null}registerShaderVariant(s){const e=this.shaderVariants;e.has(s.id)||(e.set(s.id,s),this.save())}hasShaderVariant(s){return this.shaderVariants.has(s)}serialize(){const s=Array.from(this.shaderVariants.values());return JSON.stringify({variants:s})}save(){this.saveTimerId&&clearTimeout(this.saveTimerId),this.saveTimerId=setTimeout((()=>{fetch(window.location.origin+"/tracing/shader/variants",{method:"POST",body:this.serialize()})}),250)}}}(),function(){if(!DEVELOP)return;window.appStatsTracer=new class{constructor(){this.saveTimerId=null,this.ramValue=null}serialize(){return JSON.stringify({ram:this.ramValue})}registerRam(s){this.ramValue=s,this.save()}save(){this.saveTimerId&&clearTimeout(this.saveTimerId),this.saveTimerId=setTimeout((()=>{fetch(window.location.origin+"/tracing/app/stats",{method:"POST",body:this.serialize()})}),1e3)}}}();