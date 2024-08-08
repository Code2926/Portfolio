(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
      return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      i(e);
  new MutationObserver(e=>{
      for (const t of e)
          if (t.type === "childList")
              for (const c of t.addedNodes)
                  c.tagName === "LINK" && c.rel === "modulepreload" && i(c)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
      t
  }
  function i(e) {
      if (e.ep)
          return;
      e.ep = !0;
      const t = n(e);
      fetch(e.href, t)
  }
}
)();
const m = ()=>{
  document.querySelectorAll(".Title-img").forEach((r,n)=>{
      r.addEventListener("mousemove", ()=>{
          let i = r.children[1];
          console.log(i),
          gsap.to(i, {
              opacity: 1,
              height: 140,
              width: 200,
              zIndex: 10
          })
      }
      ),
      r.addEventListener("mouseleave", ()=>{
          let i = r.children[1];
          console.log(i),
          gsap.to(i, {
              opacity: 0,
              height: 0,
              width: 0
          })
      }
      )
  }
  )
}
;
m();
const l = ()=>{
  gsap.to(s, {
      opacity: 0
  }),
  s.classList.remove("block"),
  s.classList.add("hidden"),
  d.classList.remove("blur-sm")
}
, p = ()=>{
  gsap.to(s, {
      opacity: 1
  }),
  s.classList.remove("hidden"),
  s.classList.add("block"),
  d.classList.add("blur-sm")
}
;
let y = document.querySelector(".hamburger")
, s = document.querySelector(".menu-wrap")
, f = document.querySelector(".cross")
, d = document.querySelector(".main")
, g = document.querySelectorAll(".menu-list");
y.addEventListener("click", p);
f.addEventListener("click", l);
g.forEach(a=>{
  a.addEventListener("click", l)
}
);
let o = gsap.timeline();
o.from(".name-slide h1", {
  x: 200,
  opacity: 0,
  stagger: .8,
  duration: 1.2
});
o.from(".name-slide p", {
  y: 200,
  opacity: 0,
  duration: 1.2
});
o.to(".name-slide h1", {
  x: -200,
  opacity: 0,
  stagger: .4,
  duration: .4
});
o.to(".name-slide p", {
  y: 200,
  opacity: 0,
  duration: .4
});
o.to(".slider", {
  top: "-100%",
  duration: 1
});
o.from(".title", {
  y: 100,
  opacity: 0,
  duration: .5
}, "a");
o.from(".logo-img", {
  y: 100,
  opacity: 0,
  duration: .5
}, "a");
o.from(".menu", {
  y: 100,
  opacity: 0,
  duration: .5
}, "a");
o.from(".hero-title", {
  y: 100,
  opacity: 0,
  duration: .5
}, "b");
o.from(".hero-para", {
  y: 100,
  opacity: 0,
  duration: .5
}, "b");
let u = gsap.timeline({
  scrollTrigger: {
      trigger: "#Project",
      start: "-10% 50%",
      end: "35% 50%",
      delay: 1
  }
});
u.from(".project-l", {
  y: 100,
  opacity: 0
});
u.from(".car-1", {
  y: 100,
  opacity: 0,
  stagger: 1
});
