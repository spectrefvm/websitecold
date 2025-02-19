(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[326], {
    5030: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 7998))
    },
    7998: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            default: function() {
                return c
            }
        });
        var a = r(7437)
          , s = r(998)
          , n = r(9455)
          , l = r(568)
          , i = r(6920);
        function c() {
            return (0,
            a.jsxs)("main", {
                className: "flex min-h-screen flex-col items-center bg-background text-white scroll-smooth select-none p-76",
                children: [(0,
                a.jsx)(n.default, {}), (0,
                a.jsx)("div", {
                    className: "flex justify-center items-center h-screen",
                    children: (0,
                    a.jsxs)("section", {
                        className: "flex rounded-xl border-borderchild border bg-child max-w-[400px] max-h-[300px] max-xl:max-w-[300px] max-xl:max-h-[300px] p-8 flex-col justify-start items-start",
                        children: [(0,
                        a.jsx)("h1", {
                            className: "text-2xl font-semibold",
                            children: "Sign In"
                        }), (0,
                        a.jsx)("p", {
                            className: "text-sm font-semibold text-textsecundary mb-6",
                            children: "Sign in clicking on button bellow"
                        }), (0,
                        a.jsx)("div", {
                            className: "flex w-full justify-center items-center",
                            children: (0,
                            a.jsxs)("button", {
                                onClick: () => (0,
                                s.signIn)("discord", {
                                    callbackUrl: "/account/dashboard"
                                }),
                                className: "flex justify-center items-center px-4 bg-base_color hover:bg-base_hover py-2 rounded-xl m-1 transition-colors duration-300 ease-in-out",
                                children: ["Sign in with Discord", (0,
                                a.jsx)(i.G, {
                                    className: "text-white ml-3 text-xl",
                                    icon: l.omb
                                })]
                            })
                        })]
                    })
                })]
            })
        }
    },
    9455: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return i
            }
        });
        var a = r(7437)
          , s = r(5272)
          , n = r(6648)
          , l = r(2265);
        function i() {
            let[e,t] = (0,
            l.useState)(!1);
            return (0,
            a.jsxs)("nav", {
                className: "flex items-center justify-between bg-[#0c0c0ee5] backdrop-blur-sm shadow-sm h-20 fixed w-full z-10 p-5 xl:px-72",
                style: {
                    transform: "none"
                },
                children: [(0,
                a.jsx)("div", {
                    className: "flex items-center",
                    children: (0,
                    a.jsx)("a", {
                        href: "/",
                        children: (0,
                        a.jsx)(n.default, {
                            src: s.Z,
                            className: "w-20",
                            alt: "Logo"
                        })
                    })
                }), (0,
                a.jsxs)("ul", {
                    className: "flex items-center space-x-5 md:space-x-8",
                    children: [(0,
                    a.jsx)("li", {
                        className: "hidden md:block",
                        children: (0,
                        a.jsx)("a", {
                            href: "/features",
                            className: "font-medium relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-base_color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left py-2 pl-3 pr-4 text-textsecundary rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-textprimary md:p-0 md:dark:hover:text-textprimary dark:text-textsecundary transition-all duration-300 ease-in-out",
                            children: "Features"
                        })
                    }), (0,
                    a.jsx)("li", {
                        className: "hidden md:block",
                        children: (0,
                        a.jsx)("a", {
                            href: "/#products",
                            className: "font-medium relative after:block after:content-[''] after:absolute after:h-[3px] after:bg-base_color after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left py-2 pl-3 pr-4 text-textsecundary rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-textprimary md:p-0 md:dark:hover:text-textprimary dark:text-textsecundary transition-all duration-300 ease-in-out",
                            children: "Products"
                        })
                    }), (0,
                    a.jsx)("li", {
                        className: "text-white",
                        children: (0,
                        a.jsx)("a", {
                            href: "/account/dashboard",
                            className: "bg-base_color hover:bg-base_hover px-6 py-2 rounded-xl m-1 transition-all duration-300 ease-in-out",
                            children: "Login"
                        })
                    })]
                })]
            })
        }
    },
    5272: function(e, t) {
        "use strict";
        t.Z = {
            src: "/_next/static/media/logosemfundo.e9d6129a.png",
            height: 1080,
            width: 1080,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvElEQVR42mMAgXfv3jP9//+XWYLrGyMDwyfG////MX/48IkJLPnt2zcQAyv4+/cvRO7z5y8R////L4JJ/P//P/7r1285cJW3bj3S/PXry8uZMx7NLiq8O+vPn68vHj167gyWfP78OSuIvnfvdtm5czdenDp1/f6DB3engcTevn3LCjdl6ZL13JcunWu8cuVC++7d+yVBYrt27WIES+7YsR/EQAHHj59BFTt//jzj9+/fGf///8945coVuCQADrJhZBliktIAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
        }
    }
}, function(e) {
    e.O(0, [958, 648, 920, 998, 971, 23, 744], function() {
        return e(e.s = 5030)
    }),
    _N_E = e.O()
}
]);
