import{c as o}from"./index-4fcqghbk.js";import{d as r}from"./react-9CHhhXGa.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]],p=o("clipboard-copy",c);function i(){return r.useCallback(async t=>{try{return await navigator.clipboard.writeText(t),!0}catch{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select();const a=document.execCommand("copy");return document.body.removeChild(e),a}},[])}export{p as C,i as u};
