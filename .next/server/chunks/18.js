"use strict";exports.id=18,exports.ids=[18],exports.modules={24934:(e,a,t)=>{t.d(a,{$:()=>i});var n=t(60687),s=t(96241);let i=t(43210).forwardRef(({className:e,variant:a="default",size:t="default",...i},r)=>(0,n.jsx)("button",{className:(0,s.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{"bg-primary text-primary-foreground hover:bg-primary/90":"default"===a,"bg-destructive text-destructive-foreground hover:bg-destructive/90":"destructive"===a,"border border-input bg-background hover:bg-accent hover:text-accent-foreground":"outline"===a,"bg-secondary text-secondary-foreground hover:bg-secondary/80":"secondary"===a,"hover:bg-accent hover:text-accent-foreground":"ghost"===a,"text-primary underline-offset-4 hover:underline":"link"===a},{"h-10 px-4 py-2":"default"===t,"h-9 rounded-md px-3":"sm"===t,"h-11 rounded-md px-8":"lg"===t,"h-10 w-10":"icon"===t},e),ref:r,...i}));i.displayName="Button"},45882:(e,a,t)=>{t.d(a,{R:()=>h});var n=t(60687),s=t(59821),i=t(24934),r=t(95347),o=t(96241),l=t(13861),c=t(25541),d=t(48730),m=t(15807),u=t(70334),g=t(11437);function h({post:e,adaptation:a,isAdapting:t}){let h=a||{content:e.content,fcl:e.originalFCL,language:e.originalLanguage,culturalContext:void 0},p=!a,f=(0,r.vL)(h.language),x=h.culturalContext?(0,r.qe)(h.culturalContext):null,b=a?{complexityChange:{from:e.originalFCL,to:a.fcl,direction:a.fcl<e.originalFCL?"simplified":a.fcl>e.originalFCL?"enhanced":"maintained"},languageChange:{from:e.originalLanguage,to:a.language},culturalAdaptations:a.culturalContext?[`Adapted for ${x?.name||a.culturalContext} context`]:[],keyChanges:[`Vocabulary adjusted for FCL ${a.fcl}`,"Sentence structure optimized","Examples culturally relevant"],preservedConcepts:["Core technical concepts","Main learning objectives","Practical applications"]}:null;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsxs)("div",{className:"mb-6 p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg border",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(s.E,{variant:p?"default":"secondary",className:"text-sm",children:p?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{className:"h-3 w-3 mr-1"}),"Original Content"]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.A,{className:"h-3 w-3 mr-1"}),"Adapted Content"]})}),(0,n.jsxs)("div",{className:"flex items-center gap-2 text-sm text-gray-600",children:[(0,n.jsxs)("span",{className:`font-medium ${(0,o.f6)(h.fcl)}`,children:["FCL ",h.fcl]}),(0,n.jsx)("span",{children:"•"}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[f&&(0,n.jsx)("span",{children:f.flag}),(0,n.jsx)("span",{children:f?.name||h.language})]}),x&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"•"}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)("span",{children:x.icon}),(0,n.jsx)("span",{children:x.name})]})]})]})]}),(0,n.jsx)("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{className:"h-3 w-3"}),(0,n.jsxs)("span",{children:["Generated ",(0,o.Yq)(a.generatedAt)]})]})})]}),(0,n.jsxs)("div",{className:"mt-2",children:[(0,n.jsx)(s.E,{variant:"outline",className:"text-xs",children:(0,o.I0)(h.fcl)}),!p&&b&&(0,n.jsxs)("span",{className:"ml-2 text-xs text-gray-600",children:["simplified"===b.complexityChange.direction&&"Simplified from","enhanced"===b.complexityChange.direction&&"Enhanced from","maintained"===b.complexityChange.direction&&"Maintained at","maintained"!==b.complexityChange.direction&&` FCL ${b.complexityChange.from}`]})]})]}),(0,n.jsx)("div",{className:`prose prose-lg max-w-none transition-opacity duration-300 ${t?"opacity-50":"opacity-100"}`,children:t?(0,n.jsx)("div",{className:"flex items-center justify-center py-16",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),(0,n.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Adapting Content..."}),(0,n.jsxs)("p",{className:"text-sm text-gray-600 max-w-sm",children:["Generating content at FCL ",h.fcl," in"," ",f?.name,x&&` with ${x.name} context`]})]})}):(0,n.jsx)("div",{className:"content-fade-in",dangerouslySetInnerHTML:{__html:h.content.replace(/\n/g,"<br />")}})}),b&&!t&&(0,n.jsxs)("div",{className:"mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,n.jsx)(m.A,{className:"h-5 w-5 text-blue-600"}),(0,n.jsx)("h4",{className:"font-medium text-blue-900",children:"\uD83D\uDCA1 Adaptation Insights"})]}),(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{className:"text-sm font-medium text-blue-800 mb-2",children:"\uD83D\uDD04 Key Adaptations"}),(0,n.jsxs)("ul",{className:"text-sm text-blue-700 space-y-1",children:[b.keyChanges.map((e,a)=>(0,n.jsxs)("li",{className:"flex items-start gap-2",children:[(0,n.jsx)("span",{className:"text-blue-500 mt-0.5",children:"•"}),(0,n.jsx)("span",{children:e})]},a)),b.culturalAdaptations.map((e,a)=>(0,n.jsxs)("li",{className:"flex items-start gap-2",children:[(0,n.jsx)("span",{className:"text-blue-500 mt-0.5",children:"•"}),(0,n.jsx)("span",{children:e})]},`cultural-${a}`))]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{className:"text-sm font-medium text-blue-800 mb-2",children:"✅ Concepts Preserved"}),(0,n.jsx)("ul",{className:"text-sm text-blue-700 space-y-1",children:b.preservedConcepts.map((e,a)=>(0,n.jsxs)("li",{className:"flex items-start gap-2",children:[(0,n.jsx)("span",{className:"text-green-500 mt-0.5",children:"•"}),(0,n.jsx)("span",{children:e})]},a))})]})]}),(0,n.jsx)("div",{className:"mt-4 pt-4 border-t border-blue-200",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"text-sm text-blue-800",children:[(0,n.jsx)("strong",{children:"Reading level progression:"})," Try FCL"," ",h.fcl+10," next"]}),(0,n.jsxs)(i.$,{variant:"outline",size:"sm",className:"text-blue-600 border-blue-200",children:[(0,n.jsx)(u.A,{className:"h-3 w-3 mr-1"}),"Try Higher Level"]})]})})]}),!p&&(0,n.jsx)("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200",children:(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsxs)("div",{className:"text-sm text-gray-600",children:[(0,n.jsx)(g.A,{className:"h-4 w-4 inline mr-1"}),(0,n.jsx)("strong",{children:"Original:"})," FCL ",e.originalFCL," •"," ",e.originalLanguage.toUpperCase()," •"," ",e.metadata.readingTime," min read"]}),(0,n.jsxs)(i.$,{variant:"ghost",size:"sm",className:"text-gray-600",children:[(0,n.jsx)(l.A,{className:"h-3 w-3 mr-1"}),"View Original"]})]})})]})}},59821:(e,a,t)=>{t.d(a,{E:()=>i});var n=t(60687),s=t(96241);let i=t(43210).forwardRef(({className:e,variant:a="default",...t},i)=>(0,n.jsx)("div",{ref:i,className:(0,s.cn)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{"border-transparent bg-primary text-primary-foreground hover:bg-primary/80":"default"===a,"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80":"secondary"===a,"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80":"destructive"===a,"text-foreground":"outline"===a},e),...t}));i.displayName="Badge"},83183:(e,a,t)=>{t.d(a,{s:()=>n});let n=[{id:"welcome-to-my-random-access-mind",slug:"welcome-to-my-random-access-mind",title:"Welcome to My Random Access Mind \uD83E\uDDE0",excerpt:"Organising the chaos of a curious brain. Hey Hey \uD83D\uDC4B, I'm Steve, and my brain feels like a web browser with about 50 tabs open. Constantly.",content:`# Welcome to My Random Access Mind 🧠

**Steve Campbell** ~ *Smile* 😎

*June 19, 2025*

**Organising the chaos of a curious brain.**

## Hey Hey 👋

I'm Steve, and my brain feels like a web browser with about 50 tabs open. Constantly. (And for anyone who's ever seen my actual laptop, you'll know that's not just a metaphor! 💻)

For instance, just last night my mental tabs took me to:

- **Bowtie Analysis** 📊: Deep-diving into integrating bowtie analysis data into asset management decision-making.
- **Mindful Drinking App** 📱: Building a new app for mindful drinking and reduction.
- **Functional Complexity Level (FCL)** 🤔: Exploring an idea for a new communication framework I call Functional Complexity Level (FCL).
- **AI Co-creation** 🤖: Co-creating with AI and exploring the paradigm shifts it brings.
- **Digital Twin** 👤➡️💻: Started training an AI digital twin of myself
- **HaloMap.io** 🗺️: Actively working on my startup, HaloMap.io, which focuses on business architecture and process management.

And yes, amidst all that, there are also tabs open on global politics 🌍, Bitcoin ₿, and of course most importantly golf ⛳.

That's not just a day for me. That's my default setting.

## Welcome to my Random Access Mind 🚀

I call this blog 'Random Access Mind' because my thoughts are often highly abstract, constantly zooming out to see the bigger picture and connect seemingly unrelated dots. They don't file neatly from A to B. They're pulled from all over the place, all at once, much like how a computer retrieves data from its RAM. 💾

For years, this felt like a constant stream of information without a filter, something to be managed or suppressed.

**It's a fantastic engine for creativity and curiosity, but it can also be a bit... chaotic.** 🌪️

It's actually only in the last six months that I've truly begun to understand this unique way my mind operates—not as a challenge to be overcome, but as a powerful tool to be utilised.

Embracing this has allowed me to be more authentic and real with myself about how I want to live and who I want to be.

Recently though, I've had a breakthrough. Instead of fighting this relentless mental activity, I've decided it's time to harness it.

## The Core of the Project: From Chaos to Clarity ✨

So, how do I plan to harness it? This is the core of the entire project. I realised it's not enough to just throw ideas at a wall or a machine and see what sticks. I needed a more disciplined approach.

Over the past few months, I've been developing a personal framework for this process—a specific methodology for capturing my own 'train of thought' as it happens. It's a way for me to separate the creative signal from the distracting noise and to authenticate which ideas are truly mine.

I call the AI helper in this workflow 'My Brain's External Processor,' or you may have heard me call it "My Best Friend", but it's the framework that does the heavy lifting. This blog is the first public output of that system.

For instance, just this morning, my brain was jumping between the intricacies of a new software development workflow and a deep philosophical debate about consciousness. After running it through my process, the distilled thought emerged:

> **How can we use deep, abstract frameworks to build practical tools that genuinely help people navigate their own lives and decisions?** 💡

That's the real magic—connecting theory to tangible reality. That's the kind of rabbit hole we'll be going down here. 🐇

## What to Expect from Random Access Mind

So, what can you expect from Random Access Mind? It's the full spectrum. One week, it might be a practical guide on how to prototype an app from scratch in less than 1 hour using AI. The next, we could be exploring a philosophical concept like 'Industry 5.0' and what it means to be 'Human 5.0', or diving into better frameworks for cross-cultural communication.

We'll share deep learnings on technical subjects, and musings on the future of collaboration.

**It's a space for the deeply curious, designed to connect the dots between technology, philosophy, and practical application. It's the product of a restless mind, finally organised.**

Before we get into the details, I want to be upfront about my approach. My next post will outline the specific framework I've developed for this project – the blueprint for how I'm trying to bring some order to the chaos.

## Join the Journey

If any of this sounds familiar, if your brain also has too many tabs open, I'd love for you to follow along. This is an experiment in clarity, and I have a feeling it's going to be a fun ride.

Cheers,

**Steve** 😎🤙

---

## PS: Unlock Your Ideas

If you made it this far, thanks heaps! You've officially unlocked the secret 51st tab in my brain – it's where the really interesting stuff is hidden, just like Area 51, but with less conspiracy and more creativity.

I truly believe everyone has the capacity to build their own app. The tools are readily available; you've essentially got access to a Ferrari, and I want to help you find the keys. 🏎️

While writing this post, I whipped up a quick app to show just how easy it is. It took less than 30 minutes, and it'll help you prototype an idea. Plus, it'll send me an email so we can chat, and I can help you launch 🚀`,originalFCL:68,originalLanguage:"en",publishedAt:new Date("2025-06-19"),updatedAt:new Date("2025-06-19"),author:{name:"Steve Campbell",bio:"Building tools and frameworks for curious minds. Entrepreneur, AI enthusiast, and professional tab-keeper-opener.",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",social:{twitter:"@stevecampbell",github:"stevencampbell",linkedin:"steven-campbell"}},metadata:{tags:["Personal","Philosophy","AI","Creativity","Frameworks"],readingTime:6,featured:!0,category:"Personal"},seo:{metaTitle:"Welcome to My Random Access Mind",metaDescription:"Organising the chaos of a curious brain. Join me on a journey of connecting dots between technology, philosophy, and practical application.",ogImage:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=630&fit=crop"}},{id:"my-framework-for-organizing-chaos",slug:"my-framework-for-organizing-chaos",title:"My Framework for Organizing Chaos \uD83C\uDFAF",excerpt:'The specific methodology I\'ve developed for capturing my own "train of thought" as it happens. How to separate creative signal from distracting noise.',content:`# My Framework for Organizing Chaos 🎯

*Coming Soon...*

This will be my next post where I outline the specific framework I've developed for this project – the blueprint for how I'm trying to bring some order to the chaos.

Stay tuned! 🚀`,originalFCL:65,originalLanguage:"en",publishedAt:new Date("2025-06-22"),updatedAt:new Date("2025-06-22"),author:{name:"Steve Campbell",bio:"Building tools and frameworks for curious minds. Entrepreneur, AI enthusiast, and professional tab-keeper-opener.",avatar:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",social:{twitter:"@stevecampbell",github:"stevencampbell",linkedin:"steven-campbell"}},metadata:{tags:["Frameworks","Methodology","Productivity","Organization"],readingTime:8,featured:!1,category:"Frameworks"},seo:{metaTitle:"My Framework for Organizing Chaos",metaDescription:"The specific methodology for capturing train of thought and separating creative signal from noise.",ogImage:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"}}]},94443:(e,a,t)=>{t.d(a,{f:()=>N});var n=t(60687),s=t(59821),i=t(24934),r=t(96241),o=t(18224),l=t(78272),c=t(43210);let d=o.bL;o.YJ;let m=o.WT,u=c.forwardRef(({className:e,children:a,...t},s)=>(0,n.jsxs)(o.l9,{ref:s,className:(0,r.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:[a,(0,n.jsx)(o.In,{asChild:!0,children:(0,n.jsx)(l.A,{className:"h-4 w-4 opacity-50"})})]}));u.displayName=o.l9.displayName;let g=c.forwardRef(({className:e,children:a,position:t="popper",...s},i)=>(0,n.jsx)(o.ZL,{children:(0,n.jsx)(o.UC,{ref:i,className:(0,r.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===t&&"translate-y-1",e),position:t,...s,children:(0,n.jsx)(o.LM,{className:(0,r.cn)("p-1","popper"===t&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a})})}));g.displayName=o.UC.displayName,c.forwardRef(({className:e,...a},t)=>(0,n.jsx)(o.JU,{ref:t,className:(0,r.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...a})).displayName=o.JU.displayName;let h=c.forwardRef(({className:e,children:a,...t},s)=>(0,n.jsx)(o.q7,{ref:s,className:(0,r.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...t,children:(0,n.jsx)(o.p4,{children:a})}));h.displayName=o.q7.displayName,c.forwardRef(({className:e,...a},t)=>(0,n.jsx)(o.wv,{ref:t,className:(0,r.cn)("-mx-1 my-1 h-px bg-muted",e),...a})).displayName=o.wv.displayName;var p=t(24851);let f=c.forwardRef(({className:e,...a},t)=>(0,n.jsxs)(p.bL,{ref:t,className:(0,r.cn)("relative flex w-full touch-none select-none items-center",e),...a,children:[(0,n.jsx)(p.CC,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,n.jsx)(p.Q6,{className:"absolute h-full bg-primary"})}),(0,n.jsx)(p.zi,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));f.displayName=p.bL.displayName;var x=t(95347),b=t(56476),y=t(97499),v=t(11437),w=t(13943),j=t(82080),C=t(45583);function N({post:e,currentAdaptation:a,onAdaptationChange:t,isLoading:o=!1}){let[l,p]=(0,c.useState)(a?.fcl||e.originalFCL),[N,A]=(0,c.useState)(a?.language||e.originalLanguage),[I,k]=(0,c.useState)(a?.culturalContext),[L,F]=(0,c.useState)(!1),S=l===e.originalFCL&&N===e.originalLanguage&&!I,T=l!==(a?.fcl||e.originalFCL)||N!==(a?.language||e.originalLanguage)||I!==a?.culturalContext,M=(0,x.vL)(N),D=I?(0,x.qe)(I):null;return(0,n.jsxs)("div",{className:"adaptation-panel rounded-xl p-6 mb-8 border",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)("div",{className:"p-2 bg-blue-100 rounded-lg",children:(0,n.jsx)(b.A,{className:"h-5 w-5 text-blue-600"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-lg font-semibold text-gray-900",children:"\uD83C\uDFAF Adapt This Content"}),(0,n.jsx)("p",{className:"text-sm text-gray-600",children:"Customize complexity, language, and cultural context"})]})]}),(0,n.jsx)("div",{className:"flex items-center gap-2",children:(0,n.jsxs)(s.E,{variant:"outline",className:"text-xs",children:["Original: FCL ",e.originalFCL," •"," ",e.originalLanguage.toUpperCase()]})})]}),(0,n.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("label",{className:"text-sm font-medium text-gray-700",children:"Complexity Level"}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsxs)("span",{className:`text-sm font-medium ${(0,r.f6)(l)}`,children:["FCL ",l]}),(0,n.jsx)(s.E,{variant:"secondary",className:"text-xs",children:(0,r.I0)(l)})]})]}),(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)(f,{value:[l],onValueChange:e=>p(e[0]),min:35,max:95,step:5,className:"w-full"}),(0,n.jsxs)("div",{className:"flex justify-between text-xs text-gray-500",children:[(0,n.jsx)("span",{children:"Simple (35)"}),(0,n.jsx)("span",{children:"Expert (95)"})]})]}),(0,n.jsx)("div",{className:"h-2 rounded-full fcl-indicator opacity-20 relative",children:(0,n.jsx)("div",{className:"absolute top-0 left-0 h-full bg-white rounded-full shadow-sm border",style:{width:"8px",left:`${(l-35)/60*100}%`,transform:"translateX(-50%)"}})})]}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsxs)("label",{className:"text-sm font-medium text-gray-700 flex items-center gap-2",children:[(0,n.jsx)(y.A,{className:"h-4 w-4"}),"Language"]}),(0,n.jsxs)(d,{value:N,onValueChange:e=>A(e),children:[(0,n.jsx)(u,{children:(0,n.jsx)(m,{children:M&&(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("span",{children:M.flag}),(0,n.jsx)("span",{children:M.name})]})})}),(0,n.jsx)(g,{children:x.Fc.map(e=>(0,n.jsx)(h,{value:e.code,children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("span",{children:e.flag}),(0,n.jsx)("span",{children:e.name}),(0,n.jsxs)("span",{className:"text-xs text-gray-500",children:["(",e.nativeName,")"]})]})},e.code))})]})]}),(0,n.jsxs)("div",{className:"space-y-3",children:[(0,n.jsxs)("label",{className:"text-sm font-medium text-gray-700 flex items-center gap-2",children:[(0,n.jsx)(v.A,{className:"h-4 w-4"}),"Cultural Context"]}),(0,n.jsxs)(d,{value:I||"global",onValueChange:e=>k("global"===e?void 0:e),children:[(0,n.jsx)(u,{children:(0,n.jsx)(m,{children:D?(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("span",{children:D.icon}),(0,n.jsx)("span",{children:D.name})]}):(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("span",{children:"\uD83C\uDF0D"}),(0,n.jsx)("span",{children:"Global Perspective"})]})})}),(0,n.jsx)(g,{children:x.Yt.filter(e=>e.languages.includes(N)||"global"===e.code).map(e=>(0,n.jsx)(h,{value:e.code,children:(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("span",{children:e.icon}),(0,n.jsx)("span",{children:e.name})]})},e.code))})]})]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between pt-4 border-t border-gray-100",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(i.$,{onClick:()=>{t({postId:e.id,targetFCL:l,targetLanguage:N,culturalContext:I,priority:"normal"})},disabled:o||!T,className:"bg-blue-600 hover:bg-blue-700 text-white",size:"sm",children:o?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"}),"Adapting..."]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.A,{className:"h-4 w-4 mr-2"}),"Adapt Content"]})}),(0,n.jsxs)(i.$,{variant:"outline",onClick:()=>{p(e.originalFCL),A(e.originalLanguage),k(void 0),t({postId:e.id,targetFCL:e.originalFCL,targetLanguage:e.originalLanguage,priority:"normal"})},disabled:S||o,size:"sm",children:[(0,n.jsx)(j.A,{className:"h-4 w-4 mr-2"}),"Show Original"]})]}),(0,n.jsx)("div",{className:"flex items-center gap-2",children:(0,n.jsxs)(i.$,{variant:"ghost",size:"sm",className:"text-purple-600",children:[(0,n.jsx)(C.A,{className:"h-4 w-4 mr-2"}),"Auto-Adapt"]})})]}),T&&!o&&(0,n.jsx)("div",{className:"mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200",children:(0,n.jsxs)("p",{className:"text-sm text-blue-800",children:['✨ Click "Adapt Content" to generate a version at FCL ',l," in"," ",M?.name,D&&` with ${D.name} context`]})})]})}},95347:(e,a,t)=>{t.d(a,{Fc:()=>s,MO:()=>o,Yt:()=>i,jv:()=>r,qe:()=>c,vL:()=>l});let n={"ai-content-frameworks-en-35":{id:"adapt-1",postId:"ai-content-frameworks",content:`# Making AI Tools for Content

AI can help you make better content. It's easier than you think!

## What Are AI Content Tools?

AI content tools are smart programs that help you write better. They can:
- Make your writing clearer
- Check your grammar
- Suggest better words
- Help organize your ideas

## Why Use AI for Content?

1. **Save Time**: AI works fast
2. **Better Quality**: AI catches mistakes
3. **New Ideas**: AI suggests things you might miss
4. **Consistent Style**: AI keeps your voice the same

## Simple Steps to Start

1. Pick one AI tool to try
2. Start with small tasks
3. Learn how it works
4. Use it for bigger projects

AI content tools are not scary. They're just helpers that make your work better and faster.`,fcl:35,language:"en",culturalContext:"global",generatedAt:new Date("2024-12-01"),cached:!0,adaptationMeta:{originalFCL:72,adaptationStrategy:"simplified-vocabulary-short-sentences",qualityScore:8.5,wordCount:145,readingTime:1}},"ai-content-frameworks-ja-45":{id:"adapt-2",postId:"ai-content-frameworks",content:`# AIコンテンツフレームワークの構築

AIを使ったコンテンツ作成は、思っているより簡単です。

## AIコンテンツツールとは

AIコンテンツツールは、コンテンツ作成を支援するスマートなシステムです：

- **文章の改善**: より読みやすい文章に
- **アイデア生成**: 新しい視点を提供
- **品質管理**: 一貫した品質を維持
- **効率化**: 作業時間を大幅に短縮

## 日本企業での活用例

多くの日本企業がAIコンテンツツールを導入しています：

1. **マーケティング資料**の自動生成
2. **技術文書**の翻訳と最適化
3. **社内研修**コンテンツの作成
4. **顧客対応**の自動化

## 実装のステップ

### 1. 目標設定
- 何を改善したいか明確に
- 期待する成果を数値化

### 2. ツール選択
- 日本語対応の確認
- 企業セキュリティの考慮
- コストパフォーマンス

### 3. 段階的導入
- 小さなプロジェクトから開始
- フィードバックを収集
- 徐々に規模を拡大

AIコンテンツフレームワークは、日本のビジネス文化に合わせて調整することが重要です。`,fcl:45,language:"ja",culturalContext:"japanese",generatedAt:new Date("2024-12-01"),cached:!0,adaptationMeta:{originalFCL:72,adaptationStrategy:"japanese-business-culture-adaptation",qualityScore:9.2,wordCount:280,readingTime:2}},"ai-content-frameworks-es-55":{id:"adapt-3",postId:"ai-content-frameworks",content:`# Construyendo Frameworks de Contenido con IA

La inteligencia artificial est\xe1 revolucionando la creaci\xf3n de contenido, y implementar estos sistemas es m\xe1s accesible de lo que imaginas.

## Arquitectura de Frameworks de IA

Un framework efectivo de contenido con IA requiere varios componentes clave:

### 1. Procesamiento de Lenguaje Natural (PLN)
- **An\xe1lisis sem\xe1ntico** para comprender el contexto
- **Generaci\xf3n de texto** adaptada al p\xfablico objetivo
- **Optimizaci\xf3n de tono** seg\xfan la marca

### 2. Motor de Personalizaci\xf3n
- Algoritmos de aprendizaje autom\xe1tico
- An\xe1lisis de comportamiento del usuario
- Adaptaci\xf3n cultural y regional

### 3. Sistema de Control de Calidad
- Validaci\xf3n autom\xe1tica de contenido
- Detecci\xf3n de sesgos y errores
- M\xe9tricas de engagement predictivo

## Implementaci\xf3n Pr\xe1ctica

### Fase 1: An\xe1lisis y Planificaci\xf3n

1. Auditor\xeda de contenido existente
2. Definici\xf3n de objetivos KPI
3. Selecci\xf3n de tecnolog\xedas apropiadas

### Fase 2: Desarrollo del MVP
- Prototipo con funcionalidades b\xe1sicas
- Testing con usuarios reales
- Iteraci\xf3n basada en feedback

### Fase 3: Escalamiento
- Integraci\xf3n con sistemas existentes
- Automatizaci\xf3n de workflows
- Monitoreo continuo de performance

## Consideraciones T\xe9cnicas

La implementaci\xf3n exitosa requiere atenci\xf3n a:
- **Latencia**: Respuesta en tiempo real
- **Escalabilidad**: Manejo de vol\xfamenes altos
- **Seguridad**: Protecci\xf3n de datos sensibles
- **Compliance**: Regulaciones locales e internacionales

Los frameworks de contenido con IA representan el futuro de la comunicaci\xf3n digital eficiente.`,fcl:55,language:"es",culturalContext:"spanish",generatedAt:new Date("2024-12-01"),cached:!0,adaptationMeta:{originalFCL:72,adaptationStrategy:"technical-spanish-intermediate",qualityScore:8.8,wordCount:320,readingTime:3}}},s=[{code:"en",name:"English",nativeName:"English",flag:"\uD83C\uDDFA\uD83C\uDDF8"},{code:"ja",name:"Japanese",nativeName:"日本語",flag:"\uD83C\uDDEF\uD83C\uDDF5"},{code:"es",name:"Spanish",nativeName:"Espa\xf1ol",flag:"\uD83C\uDDEA\uD83C\uDDF8"},{code:"pt",name:"Portuguese",nativeName:"Portugu\xeas",flag:"\uD83C\uDDE7\uD83C\uDDF7"},{code:"fr",name:"French",nativeName:"Fran\xe7ais",flag:"\uD83C\uDDEB\uD83C\uDDF7"},{code:"de",name:"German",nativeName:"Deutsch",flag:"\uD83C\uDDE9\uD83C\uDDEA"},{code:"zh",name:"Chinese",nativeName:"中文",flag:"\uD83C\uDDE8\uD83C\uDDF3"},{code:"ko",name:"Korean",nativeName:"한국어",flag:"\uD83C\uDDF0\uD83C\uDDF7"}],i=[{code:"global",name:"Global Perspective",description:"Universal approach suitable for international audiences",icon:"\uD83C\uDF0D",languages:["en","es","pt","fr","de"]},{code:"japanese",name:"Japanese Business Culture",description:"Adapted for Japanese business practices and cultural norms",icon:"\uD83C\uDFEF",languages:["ja","en"]},{code:"brazilian",name:"Brazilian Context",description:"Tailored for Brazilian culture and business environment",icon:"\uD83C\uDDE7\uD83C\uDDF7",languages:["pt","en"]},{code:"spanish",name:"Hispanic Context",description:"Adapted for Spanish-speaking markets and culture",icon:"\uD83C\uDFDB️",languages:["es","en"]},{code:"european",name:"European Perspective",description:"EU-focused approach considering GDPR and European values",icon:"\uD83C\uDDEA\uD83C\uDDFA",languages:["en","fr","de","es"]},{code:"american",name:"American Context",description:"US-focused business and cultural perspective",icon:"\uD83E\uDD85",languages:["en"]}];function r(e,a,t,s){return n[d(e,a,t,s)]||null}async function o(e){await new Promise(e=>setTimeout(e,2e3));let a=n[d(e.postId,e.targetFCL,e.targetLanguage,e.culturalContext)];return a||{id:`adapt-${Date.now()}`,postId:e.postId,content:`# Adapted Content (${e.targetLanguage.toUpperCase()}, FCL ${e.targetFCL})

This content has been adapted to FCL level ${e.targetFCL} in ${e.targetLanguage}.

*This is a placeholder adaptation. In production, this would be generated using your RandomAccessMind AI system.*

The original content would be processed through:
1. Language translation (if needed)
2. Complexity adjustment to FCL ${e.targetFCL}
3. Cultural context adaptation${e.culturalContext?` for ${e.culturalContext}`:""}
4. Quality assurance and validation

The adapted content maintains the core concepts while optimizing for your specified parameters.`,fcl:e.targetFCL,language:e.targetLanguage,culturalContext:e.culturalContext,generatedAt:new Date,cached:!1,adaptationMeta:{originalFCL:72,adaptationStrategy:"ai-generated-placeholder",qualityScore:7.5,wordCount:120,readingTime:1}}}function l(e){return s.find(a=>a.code===e)}function c(e){return i.find(a=>a.code===e)}function d(e,a,t,n){let s=n?`-${n}`:"";return`${e}-${t}-${a}${s}`}},96241:(e,a,t)=>{function n(...e){let a=[];for(let t of e)if(t){if("string"==typeof t)a.push(t);else if("object"==typeof t)for(let[e,n]of Object.entries(t))n&&a.push(e)}return a.join(" ")}function s(e,a="MMM dd, yyyy"){return("string"==typeof e?new Date(e):e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function i(e){return e<40?"Beginner Friendly":e<50?"Easy to Follow":e<60?"Intermediate":e<70?"Advanced":e<80?"Expert Level":e<90?"Highly Technical":"Research Grade"}function r(e){return e<40?"text-green-600":e<50?"text-green-500":e<60?"text-yellow-500":e<70?"text-orange-500":e<80?"text-red-500":e<90?"text-red-600":"text-purple-600"}t.d(a,{I0:()=>i,Yq:()=>s,cn:()=>n,f6:()=>r})}};