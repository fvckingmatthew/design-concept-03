(self.webpackChunksite_hopfab=self.webpackChunksite_hopfab||[]).push([[986],{6814:function(e,t,l){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}l.d(t,{Z:function(){return a}})},5773:function(e,t,l){"use strict";var a=l(7294),r=l(5444),s=l(7249),n=l(5098),m=l(2045),c=l(734),i=l(8738);t.Z=function(e){var t,l=e.children,o=e.theme,d=(0,r.useStaticQuery)("1055089350");return a.createElement(a.Fragment,null,a.createElement(i.Z,null),a.createElement(n.Z,{siteTitle:(null===(t=d.site.siteMetadata)||void 0===t?void 0:t.title)||"Titre"}),a.createElement("main",null,l),a.createElement(m.Z,{theme:o}),a.createElement(s.Z,null,a.createElement(c.Z,null)))}},1408:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var a=l(7294),r=l(5444),s=function(e){e.projet;var t=e.className;return a.createElement("div",{className:t},a.createElement("div",{className:"projects-section_item "},a.createElement("div",{className:"flex overflow-hidden items-start",style:{maxHeight:"800px"}},a.createElement("img",{src:"/projets.jpg",alt:"projets",className:"w-full"}))))},n=function(){var e=(0,r.useStaticQuery)("532017304").allarchitectprojets.nodes;return a.createElement("div",{className:"projects-section_items grid sm:grid-cols-1 md:gap-x-16 "},a.createElement(s,{key:e[0].id,projet:e[0],className:""}))}},3473:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return E}});var a=l(6814),r=l(7294),s=l(5773),n=l(2132),m=l(5444),c=l(6802),i=function(){var e=(0,m.useStaticQuery)("3159806677"),t=(0,c.d)(e.largeImage),l=(0,c.d)(e.smallImage);if(!t||!l)return r.createElement("div",null,"Image non trouvée");var a=(0,c.w)(t,[{media:"(max-width: 639px)",image:l}]);return r.createElement(c.G,{style:{minHeight:"600px",maxHeight:"700px"},image:a,className:"homepage-illustration-1-art-directed",alt:""})},o=l(740),d=l(82),x=l(1408),u=l(5862),p=l.p+"static/nico-aae89d0d55a1561ebf497fb168b2c8d4.jpg",g=l.p+"static/Lineetraphael-e35862e491e33d4679eeebcd90ae1337.jpg",b=l.p+"static/benjamin-b42d13696c85939abf4388ba1568905f.jpg",f=[{image:g,alt:"Nothing",description:"“Nous travaillons avec Hopfab depuis nos débuts, ils ont suivi toute notre évolution. Ils nous apportent de très belles opportunités avec des projets variés voire inattendus.A chaque fois le cahier des charges est clair et précis cela nous permet de gagner un temps précieux !”",customer:"Line et raphael",company:"menuisiers-ébénistes"},{image:l.p+"static/ValérieetDavid-035240adb212770643572c4bbaa6ff3e.jpg",alt:"Nothing",description:"Pour nous, travailler avec Hopfab c’était vraiment une belle opportunité de se faire connaître, et être artisan chez Hopfab c’est être reconnu comme un artisan de qualité. Nous avons la possibilité de travailler directement avec les clients pour donner vie à des projets qui leur ressemblent.",customer:"Valérie et David",company:"serruriers-métalliers"},{image:b,alt:"Nothing",description:"Au-delà des opportunités de projets, Hopfab m’a donné un cadre. Mes projets, de la négociation commerciale à la livraison, sont mieux structurés. Je me sens en confiance et la preuve c’est que je transforme bien mieux les projets que je chiffre.",customer:"Benjamin",company:"menuisier"},{image:p,alt:"Nothing",description:"J’ai rejoint Hopfab quasiment à la création de mon entreprise. Ils m’ont vraiment permis de lancer mon activité, de me développer sur des projets de plus en plus ambitieux et de structurer mon activité.",customer:"Nicolas",company:"agenceur"}],v=function(){var e=(0,r.useRef)(null),t=(0,r.useState)(!1),l=t[0],a=t[1],s=(0,r.useState)(null),n=s[0],m=s[1],c=(0,r.useState)(null),i=c[0],o=c[1];return r.createElement("div",{className:"flex max-w-full overflow-x-scroll overflow-y-hidden testimonials relative",onMouseDown:function(t){m(e.current.scrollLeft),o(t.pageX-e.current.offsetLeft),a(!0)},onMouseLeave:function(){a(!1)},onMouseUp:function(){a(!1)},onMouseMove:function(t){if(l){t.preventDefault();var a=3*(t.pageX-e.current.offsetLeft-i);e.current.scrollLeft=n-a}},ref:e},f.map((function(e){return r.createElement("div",{className:"mr-10 testimonials-item",key:e.customer},r.createElement("div",{className:"testimonials-item_img overflow-hidden"},r.createElement("img",{src:e.image,alt:e.alt,className:"transform duration-200 ease-in-out scale-100 hover:scale-110 w-full h-full"})),r.createElement("p",{className:" my-4 text-xsm "}," ",r.createElement("span",{className:"font-bold"}," ",e.customer," "),e.company),r.createElement("p",{className:"text-3xl md:text-2.4xl font-medium font-serif"},e.description))})))},E=function(e){(0,a.Z)(e);return r.createElement(s.Z,null,r.createElement(n.Z,{title:"Page d'accueil"}),r.createElement("div",{className:"min-w-screen-lg lg:px-5 xl:px-8 mx-auto"},r.createElement("div",{className:"lg:grid lg:grid-cols-12"},r.createElement("div",{className:"lg:col-span-12 lg:mx-0 px-6 md:px-8.5 md:mx-0 sm:mx-2"},r.createElement("section",{className:"border-b  border-gray-400 flex items-end justify-between mb-6 md:mb-3 pb-3 mt-16"},r.createElement("h1",{className:"font-bold text-4.7xl md:text-7.5xl xl:text-8.1xl"},"ARTISANS"),r.createElement("div",null,r.createElement(d.Z,{className:"w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 "}))),r.createElement("section",{className:"border-b border-gray-400 lg:grid grid-cols-2 md:pt-15 pb-6"},r.createElement("div",{className:"mb-8 md:mb-16 xl:mb-0"},r.createElement("h1",{style:{lineHeight:"1.2"},className:"text-gray-900 text-2.5xl sm:text-4.25xl md:text-5xl  lg:text-3.8xl xl:text-5xl  md:w-10/12  xl:-tracking-px font-bold sm:mt-10 mb-8 lg:mt-40 md:mb-12 "},r.createElement("span",{className:"text-darkgreen"}," Accédez")," à des projets d’architectes d’intérieur et"," ",r.createElement("span",{className:"text-darkgreen"}," collaborez")," en direct."),r.createElement(u.Z,{link:"https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab",className:"cta mt-6 bg-gris-800 text-center relative overflow-hidden uppercase border-1.5 border-transparent hover:border-gray-400 hover:bg-transparent text-xs rounded-full relative mt-5 px-6 py-2 md:px-7 md:py-3 lg:py-2 lg:px-5 xl:px-4 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 ",content:"NOUS REJOINDRE",firstSpan:"text-black ",secondSpan:"text-white "})),r.createElement("div",{className:"hero-section_img_wrapper"},r.createElement(i,null))),r.createElement("section",{className:"projects-section mb-6 py-3 lg:py-0 md:mb-10"},r.createElement("div",{className:"flex items-center justify-between"},r.createElement("h3",{className:"text-3xl md:text-4.5xl lg:text-3xl xl:text-4.8xl font-bold  mb-5 sm:mb-0"},"Plus de ",r.createElement("span",{className:"text-darkgreen "},"1400 projets")," ","réalisés"),r.createElement(u.Z,{link:"/realisations",className:"cta  hidden md:block group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 ",content:"TOUS LES PROJETS",firstSpan:"button-text text-white text-xs ",secondSpan:"button-text text-gray-800 text-xs "})),r.createElement(x.Z,null),r.createElement(u.Z,{link:"/realisations",className:"cta md:hidden group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-6 ",content:"TOUS LES PROJETS",firstSpan:"button-text text-white text-xs ",secondSpan:"button-text text-gray-800 text-xs "})),r.createElement("section",{className:"who-you-section mb-6 md:mb-0 lg-mb-6 py-12"},r.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31"},r.createElement("h3",{className:"text-3xl md:text-4.5xl lg:text-3xl  xl:text-4.8xl font-bold mb-14 md:mb-24 lg:mb-0  lg:w-11/12 xl:w-11/12"},"Développer votre entreprise artisanale avec Hopfab"),r.createElement("div",null,r.createElement("div",{className:"mb-8 md:mb-16"},r.createElement("div",{className:"flex items-start "},r.createElement(d.Z,{className:"w-3 h-3 mt-2 mr-4"}),r.createElement("p",{className:"font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 "},"Choisissez vos projets")),r.createElement("p",{className:"text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8"},"Définissez les types de projets qui vous intéressent.",r.createElement("br",null)," Libre à vous de les accepter ou de les refuser.")),r.createElement("div",{className:"mb-8 md:mb-16"},r.createElement("div",{className:"flex items-start "},r.createElement(d.Z,{className:"w-3 h-3 mt-2 mr-4"}),r.createElement("p",{className:"font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 "},"Traitez en direct avec le porteur de projet")),r.createElement("p",{className:"text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8"}," ","Envoyez votre devis et échangez directement avec le porteur de projet.")),r.createElement("div",{className:"mb-8 md:mb-14"},r.createElement("div",{className:"flex items-start "},r.createElement(d.Z,{className:"w-3 h-3 mt-2 mr-4"}),r.createElement("p",{className:"font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 "},"Bénéficiez d’outils simples et sécurisants")),r.createElement("p",{className:"text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8"},"Hopfab joue le rôle de tiers de confiance et met à votre disposition des outils pour accélérer la contractualisation et le suivi des paiements.")),r.createElement(u.Z,{link:"https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab",className:"cta group text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase  border-1.5 border-transparent hover:border-gray-400 hover:bg-black font-bold text-xs rounded-full border-1.5 border-gray-400 px-6 py-2 md:px-5 focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50 my-8 ",content:"PRENDRE RDV",firstSpan:"button-text text-white text-xs ",secondSpan:"button-text text-gray-800 text-xs "}))))))),r.createElement("section",{className:"about-section bg-green-main  p-6 pt-14 md:p-12 md:pt-20 lg:p-16 lg:pt-26"},r.createElement("p",{className:"border-gray-300 border-t-1.5 flex flex-wrap  mb-20 lg:mb-36 xlg:mb-30 pt-4.5 text-white text-xs"},"LES SAVOIR-FAIRE LES PLUS DEMANDÉS SUR HOPFAB"),r.createElement("div",null,r.createElement("div",{className:" relative  lg:hidden w-4/12 md:w-2/12 architect-logo-letters"},r.createElement("img",{src:"/logo-hopfab-square-white.png",className:"logo-letters architect w-full ml-1 md:ml-0",alt:"project-1"}),r.createElement(o.Z,{className:"hopfab-circle"})),r.createElement("div",null)),r.createElement("div",{className:"about-section_content py-8 pt-10"},r.createElement("div",null,r.createElement("p",{className:"text-3.8xl md:text-4.8xl lg:text-4.8xl xl:text-6.5xl  lg:w-9/12  xl:w-10/12 text-white font-serif",style:{lineHeight:"1.2"}},"Agencement • Décoration • Mobilier • Luminaire • Signalétique • Végétalisation • Retail • Tertiaire • Résidentiel • Hôtellerie • Restaurants/Bars • Culture")),r.createElement("div",{className:"about-section_logo relative hidden lg:block "},r.createElement("img",{src:"/logo-hopfab-square-white.png",className:"logo-letters w-full",alt:"project-1"}),r.createElement(o.Z,{className:"hopfab-circle"})))),r.createElement("div",{className:"min-w-screen-lg lg:px-5 mx-auto"},r.createElement("div",{className:"lg:grid lg:grid-cols-12"},r.createElement("div",{className:"lg:col-span-12 lg:mx-6 md:mx-6 sm:mx-6 mx-6"},r.createElement("section",{className:"who-you-section border-b border-gris-800  mb-6 md:mb-0 lg-mb-6 py-12"},r.createElement("div",{className:"grid grid-cols-1 lg:grid-cols-2 md:gap-x-16 lg:gap-x-21 xl:gap-x-22 2xl:gap-x-31"},r.createElement("h3",{className:"text-3xl md:text-4.5xl lg:text-3xl  xl:text-4.8xl font-bold mb-14 md:mb-24 lg:mb-0  lg:w-11/12 xl:w-11/12"},"Un service simple et adapté aux entreprises artisanales"),r.createElement("div",null,r.createElement("div",{className:"mb-8 md:mb-16"},r.createElement("div",{className:"flex items-start "},r.createElement(d.Z,{className:"w-3 h-3 mt-2 mr-4"}),r.createElement("p",{className:"font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 "},"Créez votre profil simplement")),r.createElement("p",{className:"text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8"},"Définissez en quelques minutes les projets sur lesquels vous souhaitez être consultés. Et commencez à recevoir des projets.")),r.createElement("div",{className:"mb-8 md:mb-16"},r.createElement("div",{className:"flex items-start "},r.createElement(d.Z,{className:"w-3 h-3 mt-2 mr-4"}),r.createElement("p",{className:"font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 "},"Faites baisser votre charge mentale")),r.createElement("p",{className:"text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8"},"On assure vos arrières en vous aidant dans le suivi de vos tâches administratives et commerciales. Pour que vous puissiez être concentré sur l’essentiel.")),r.createElement("div",{className:"mb-8 md:mb-14"},r.createElement("div",{className:"flex items-start "},r.createElement(d.Z,{className:"w-3 h-3 mt-2 mr-4"}),r.createElement("p",{className:"font-bold text-gray-800 ml-10 md:ml-0 sm:w-8/12 lg:w-11/12 text-lg md:text-xl lg:text-xl xl:text-2xl mb-3 "},"Sécurisez les paiements de vos clients")),r.createElement("p",{className:"text-lg md:text-xl lg:text-xl xl:text-2xl md:w-9/12 lg:w-full text-gray-700 ml-18 md:ml-8"},"Utilisez le compte séquestre pour sécuriser les paiements de vos clients. Ne courrez plus après l’argent et recevez le solde de votre projet 48h après sa validation."))))),r.createElement("section",{className:" mb-6 pt-3 md:pb-16 relative artisan"},r.createElement("span",{className:"text-xsm font-bold"},"TÉMOIGNAGES"),r.createElement("h3",{className:"font-bold text-5xl md:text-6.9xl lg:text-7xl xl:text-8.1xl my-10"},"Ils ont choisi Hopfab"),r.createElement("span",{className:"testimonials-drag absolute bg-green-main grid h-24 hidden items-center lg:block  rounded-full text-center text-white text-xsm  w-24 z-10"},"DRAG"),r.createElement(v,null))))),r.createElement("div",{className:"bg-green-main"},r.createElement("div",{className:"sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-11.5 xl:px-4 2xl:px-18.5"},r.createElement("div",{className:"lg:grid lg:grid-cols-13 pb-14 md:pb-48  lg:pb-30"},r.createElement("section",{className:"lg:col-span-11 "},r.createElement("article",{className:" pt-16"},r.createElement("div",{className:"lg:space-y-30 space-y-10 md:w-11/12 lg:space-y-30"},r.createElement("div",null,r.createElement("div",{className:"space-y-4"},r.createElement("div",{className:"flex flex-wrap text-xs  mb-30 md:mb-48 lg:mb-30 uppercase mt-5 md:mt-0  "},r.createElement(d.Z,{className:"h-10 w-10 text-gray-100"})),r.createElement("h2",{className:"font-bold text-5.5xl md:text-6.75xl lg:text-7xl xl:text-8.1xl  text-gray-100"},"Rejoindre la communauté d’artisans")),r.createElement("div",{className:""},r.createElement("p",{className:" md:w-9/12 xl:w-7/12 md:my-8 text-lg md:text-lg  xl:leading-normal flex-1 md:font-thin text-opacity-80 text-white"},"Hopfab c’est aussi une communauté qui fédère des professionnels engagés pour le développement et la préservation du patrimoine artisanal français. Événements, podcasts, partages d’expériences, rejoignez une communauté soudée."),r.createElement("div",{className:""},r.createElement(u.Z,{link:"https://lp.hopfab.com/fr/rejoindre-le-r%C3%A9seau-dartisans-hopfab",className:"cta group mt-5 md:my-8 bg-gris-800 text-xs text-center relative overflow-hidden relative overflow-hidden inline-flex items-center uppercase   hover:bg-white text-xs rounded-full  px-5 py-2 md:px-5 xl:px-6  focus:outline-none focus:ring-4 focus:ring-brown-700 focus:ring-opacity-50",content:"NOUS REJOINDRE",firstSpan:"button-text text-gray-800",secondSpan:"button-text text-white "})))))))))))}}}]);
//# sourceMappingURL=component---src-pages-artisans-tsx-10714e18bef6d5462ad8.js.map