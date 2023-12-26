"use strict";(self.webpackChunksmd_knowledge_base=self.webpackChunksmd_knowledge_base||[]).push([[8955],{18:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var n=t(5893),i=t(1151);const l={id:"Support-issue-2",title:"FMR Not Tally With Fuel Sales",sidebar_label:"FMR Not Tally With Fuel Sales"},r="FMR Not Tally With Fuel Sales",o={id:"support-issues/Support-issue-2",title:"FMR Not Tally With Fuel Sales",description:"Background Context",source:"@site/docs/support-issues/fmr-not-tally-with-fuel-sales.md",sourceDirName:"support-issues",slug:"/support-issues/Support-issue-2",permalink:"/test1-smd-knowledge-base/docs/support-issues/Support-issue-2",draft:!1,unlisted:!1,editUrl:"https://github.com/n42rain/test1-smd-knowledge-base/tree/master/docs/support-issues/fmr-not-tally-with-fuel-sales.md",tags:[],version:"current",frontMatter:{id:"Support-issue-2",title:"FMR Not Tally With Fuel Sales",sidebar_label:"FMR Not Tally With Fuel Sales"},sidebar:"supportSidebar",previous:{title:"EOD Not Tally With Reconciliation Report",permalink:"/test1-smd-knowledge-base/docs/support-issues/Support-issue-1"},next:{title:"Product Not Reflect on IWC",permalink:"/test1-smd-knowledge-base/docs/support-issues/Support-issue-3"}},c={},a=[{value:"Background Context",id:"background-context",level:2},{value:"Example tickets",id:"example-tickets",level:3},{value:"Possible Causes",id:"possible-causes",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"To Investigate",id:"to-investigate",level:3},{value:"To Resolve",id:"to-resolve",level:3},{value:"Investigation Steps",id:"investigation-steps",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"softwareSystem(s): BOS\r\ncontainer(s): Wetstock Microservice, Cloud Report Microservice, Wetstock DB, Transaction Report Microservice, Transaction Report DB\n"})}),"\n",(0,n.jsx)(s.h1,{id:"fmr-not-tally-with-fuel-sales",children:"FMR Not Tally With Fuel Sales"}),"\n",(0,n.jsx)(s.h2,{id:"background-context",children:"Background Context"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"FMR data is from Wetstock DB which Fuel Sales data is from Transaction Report DB."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Usually the issue is with FMR data."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Different timezone when viewing Fuel Sales report as compared to viewing FMR report."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Issue has a high change of reoccuring."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Medium term solution:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Fix the issue with multiple fuel sales in 1 receipt not being processed in Wetstock."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Possible long term solution:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Use data warehouse to query for both reports to ensure both tally."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"example-tickets",children:"Example tickets"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsxs)(s.a,{href:"https://app.clickup.com/t/86ctxb9nc",children:["SmartSD",":WO-0001209"," FIMR not tally with fuel sales- SH Jalan Ampang"]})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"possible-causes",children:"Possible Causes"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Multiple fuel sales in 1 receipt which is not currently handled by Wetstock. Only the first line item is saved into Wetstock DB since receipt number is a unique index in the fuel sales table."}),"\n",(0,n.jsx)(s.li,{children:"Mismatch between FCC config and Wetstock config causing error when saving to Wetstock DB."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"to-investigate",children:"To Investigate"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Read access to Tenant DB and Wetstock DB in affected environment."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"query to get tank config in Wetstock DB"}),"\n",(0,n.jsx)(s.li,{children:"query to get failed jobs in the affected date range"}),"\n",(0,n.jsx)(s.li,{children:"query to get receipts with multiple fuels in Transaction Report DB"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Credentials to access BOS in affected environment."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Details required:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"outlet id - get from Tenant DB"}),"\n",(0,n.jsx)(s.li,{children:"relevant date range - get from ticket"}),"\n",(0,n.jsx)(s.li,{children:"tanks affected - get from ticket"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"to-resolve",children:"To Resolve"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Write access to Wetstock DB."}),"\n",(0,n.jsx)(s.li,{children:"sshuttle to connect to Wetstock DB from local Wetstock Microservice."}),"\n",(0,n.jsx)(s.li,{children:"Access to resync wetstock failed jobs script."}),"\n",(0,n.jsx)(s.li,{children:"AWS Account credentials in given environment to repush failed jobs to SQS."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"investigation-steps",children:"Investigation Steps"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Try to replicate issue in affected environment similar to ticket."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Get the relevant details from to investigate section."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Check for multiple fuel sales in Transaction Report DB for the given outlet and date range. If there are multiple fuel sales, mark the ticket as blocked and link to this ticket."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Check the failed jobs table in Wetstock DB to see if there are any failed jobs for the outlet in the given date range."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Check the tank configuration in Wetstock to see if there are any tanks without attached hoses."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(7294);const i={},l=n.createContext(i);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);