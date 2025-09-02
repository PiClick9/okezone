        (function(w) {
        "use strict";
        const p = w.parent;
        const z = p.document;
        const a = z.getElementsByClassName("komentar")[0];
        const b = z.createElement("iframe");
        const k = "//comment-portal.mncportal.id";
        const u = w.location.protocol + k;
        const d = p.dataLayer;
        const i = d.findIndex((x) => x.article_id);
        const e = d[i];
        const g = w.location.host;
        const j = g.split(".");
        const l = {
            q: encodeURIComponent(z.location.href),
            i: e.article_id,
            p: j[1],
            t: e.article_title,
            c: e.content_type,
        };

        w.addEventListener("message", (e) => {
            if (e.origin == u) {
                if (e.data.h) b.style.height = e.data.h + "px";
                if (e.data.u) location.replace(e.data.u);
            }
        });

        b.id = "orion-comment";
        b.title = "comment";
        b.src = u;
        b.name = JSON.stringify(l);
        b.width = "100%";
        b.height = "100%";
        b.frameBorder = "0";
        b.scrolling = "no";
        b.horizontalscrolling = "no";
        b.verticalscrolling = "no";
        a.appendChild(b);
        b.sandbox = "allow-storage-access-by-user-activation allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals allow-same-origin allow-top-navigation"
    })("undefined" != typeof window ? window : this);