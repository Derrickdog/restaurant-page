(()=>{"use strict";function t(t){const e=document.createElement("p");return e.classList.add("text"),e.textContent=t,e}const e=function(){const e=document.getElementById("container");e.textContent="",e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("img");return n.classList.add("image"),n.src="sunset-grill.jpeg",n.alt="Sunset Grill Dining Room",e.appendChild(t("The best breakfast in Ithaca!")),e.appendChild(n),e.appendChild(t("Open 7AM to 9PM")),e.appendChild(t("Visit us today!")),e}())};function n(t){document.querySelectorAll(".tab").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("div");t.id="header";const c=document.createElement("h1");return c.id="title",c.textContent="Sunset Grill",t.appendChild(c),t.appendChild(function(){const t=document.createElement("div");t.classList.add("buttons");const c=document.createElement("button");c.classList.add("tab"),c.textContent="Home",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(c),e())}));const a=document.createElement("button");a.classList.add("tab"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||n(loadButton)}));const d=document.createElement("button");return d.classList.add("tab"),d.textContent="Contact",c.addEventListener("click",(t=>{t.target.classList.contains("active")||n(d)})),t.appendChild(c),t.appendChild(a),t.appendChild(d),t}()),t}()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("container"),t.id="container",t}()),n(document.querySelector(".tab")),e()}()})();