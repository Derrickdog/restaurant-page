(()=>{"use strict";function t(t){const e=document.createElement("p");return e.classList.add("text"),e.textContent=t,e}const e=function(){const e=document.getElementById("container");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("img");return n.classList.add("image"),n.src="sunset-grill.jpeg",n.alt="Sunset Grill Dining Room",e.appendChild(t("The best breakfast in Ithaca!")),e.appendChild(n),e.appendChild(t("Open 7AM to 9PM")),e.appendChild(t("Visit us today!")),e}())};function n(){const t=document.createElement("div");t.id="header";const n=document.createElement("h1");return n.id="title",n.textContent="Sunset Grill",t.appendChild(n),t.appendChild(function(){const t=document.createElement("div");t.classList.add("buttons");const n=document.createElement("button");n.classList.add("tab"),n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(n),e())}));const a=document.createElement("button");a.classList.add("tab"),a.textContent="Menu",a.addEventListener("click",(t=>{t.target.classList.contains("active")||(c(a),function(){const t=document.getElementById("container");t.textContent="",t.appendChild(function(){const t=document.createElement("img");return t.id="menu",t.src="menu.jpeg",t.alt="Sunset Grill Menu",t}())}())}));const d=document.createElement("button");return d.classList.add("tab"),d.textContent="Contact",n.addEventListener("click",(t=>{t.target.classList.contains("active")||c(d)})),t.appendChild(n),t.appendChild(a),t.appendChild(d),t}()),t}function c(t){document.querySelectorAll(".tab").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const t=document.getElementById("content");t.appendChild(n()),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("container"),t.id="container",t}()),c(document.querySelector(".tab")),e()}()})();