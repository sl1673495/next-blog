(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"7wHi":function(E,B,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/365037816",function(){var E=A("Gjni");return{page:E.default||E}}])},Gjni:function(E,B,A){"use strict";A.r(B);var e=A("4fS0");A("hUnW"),A("zVQR"),A("KYme");B.default=Object(e.a)({title:"vue-router\u6e90\u7801\u5b66\u4e60",html:"%3Ch3%20id%3D%22%E5%88%9D%E5%A7%8B%E5%8C%96%22%3E%E5%88%9D%E5%A7%8B%E5%8C%96%3C%2Fh3%3E%0A%3Cp%3E%E9%80%9A%E8%BF%87Vue.mixin%E6%B7%B7%E5%85%A5beforeCreate%E6%96%B9%E6%B3%95%E6%89%A7%E8%A1%8C%E5%88%9D%E5%A7%8B%E5%8C%96%3C%2Fp%3E%0A%3Cp%3E%E6%A0%B9%E7%BB%84%E4%BB%B6%EF%BC%9A%3Cbr%3E%E6%8A%8Athis._routerRoot%E5%AE%9A%E4%B9%89%E4%B8%BA%E6%A0%B9%E5%AE%9E%E4%BE%8B%3Cbr%3E%E5%AD%90%E7%BB%84%E4%BB%B6%EF%BC%9A%3Cbr%3E%E9%80%9A%E8%BF%87Vue.util.defineReactive%E6%8A%8A_route%E4%BD%9C%E4%B8%BA%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AF%B9%E8%B1%A1%E5%AE%9A%E4%B9%89%E5%88%B0Vue%E5%AE%9E%E4%BE%8Bthis%E4%B8%8B(%E6%8C%87%E5%90%91this._router.history.current)%EF%BC%8C%3Cbr%3E%E5%B9%B6%E4%B8%94%E6%8A%8A%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84this._routerRoot%E6%8C%87%E5%90%91%E6%A0%B9%E5%AE%9E%E4%BE%8B%3C%2Fp%3E%0A%3Cp%3E%E9%80%9A%E8%BF%87Vue.component%E5%B0%86router-view%E5%92%8Crouter-link%E6%B3%A8%E5%86%8C%E6%88%90%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6%3C%2Fp%3E%0A%3Cp%3E%E9%80%9A%E8%BF%87Object.defineProperty%E5%BE%80Vue.prototype%E4%B8%8A%E6%8C%82%E4%B8%8A%E4%BA%86%3Cbr%3E%24router(%E6%8C%87%E5%90%91this._routerCurrent._router)%3Cbr%3E%24router(%E6%8C%87%E5%90%91this._routerCurrent._route%20%E4%B9%8B%E5%89%8D%E8%A2%AB%E5%AE%9A%E4%B9%89%E4%B8%BA%E5%93%8D%E5%BA%94%E5%BC%8F%E4%BA%86)%3Cbr%3E%E6%89%80%E4%BB%A5%E6%AF%8F%E4%B8%AAVue%E5%AE%9E%E4%BE%8B%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%8B%BF%E5%88%B0%E8%BF%99%E4%BF%A9%E4%B8%AA%E5%BE%88%E9%87%8D%E8%A6%81%E7%9A%84%E5%AF%B9%E8%B1%A1%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22hash%E8%B7%AF%E7%94%B1%E6%A8%A1%E5%BC%8F%22%3Ehash%E8%B7%AF%E7%94%B1%E6%A8%A1%E5%BC%8F%3C%2Fh3%3E%0A%3Cp%3E%E5%9B%9E%E9%80%80%EF%BC%9A%20%E7%9B%91%E5%90%AC%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84popstate%E6%88%96hashchange%E4%BA%8B%E4%BB%B6%EF%BC%8C%E9%87%8D%E6%96%B0%E6%89%A7%E8%A1%8CtransitionTo%E6%96%B9%E6%B3%95%E3%80%82%3Cbr%3E%E6%94%B9%E5%8F%98%EF%BC%9A%20%E8%B0%83%E7%94%A8window.history%E7%9A%84pushState%E3%80%81replaceState%20api%3C%2Fp%3E%0A%3Cp%3Ethis.%24router.push%20%E6%9C%AC%E8%B4%A8%E4%B8%8A%E8%B0%83%E7%94%A8%E4%BA%86%E5%86%85%E9%83%A8history%E5%AE%9E%E4%BE%8B%E7%9A%84push%E6%96%B9%E6%B3%95%EF%BC%8C%E8%AE%A1%E7%AE%97%E5%87%BA%E5%B8%A6hash%E5%80%BC%E7%9A%84%E6%96%B0%E8%B7%AF%E5%BE%84%EF%BC%8C%E6%89%A7%E8%A1%8CtransitionTo%E5%88%87%E6%8D%A2%E8%B7%AF%E7%94%B1%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22router-view%EF%BC%9A%22%3Erouter-view%EF%BC%9A%3C%2Fh3%3E%0A%3Cp%3Efuncitional%20component%3Cbr%3E%E5%9C%A8render%E5%87%BD%E6%95%B0%E7%9A%84%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%E5%8F%AF%E4%BB%A5%E8%A7%A3%E6%9E%84%E5%87%BA%7Bprops%2C%20children%2C%20parent%2C%20data%7D%3Cbr%3E%E9%80%9A%E8%BF%87%20const%20h%20%3D%20parent.%24createElement%20%E6%8B%BF%E5%88%B0%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84Vue%E5%AE%9E%E4%BE%8B%E7%9A%84%E5%88%9B%E5%BB%BAVNode%E6%96%B9%E6%B3%95%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E5%88%9D%E5%A7%8B%E5%8C%96%3A%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20data.routerView%20%3D%20true%0A%20%20%20%20%2F%2F%20directly%20use%20parent%20context%26%2339%3Bs%20createElement()%20function%0A%20%20%20%20%2F%2F%20so%20that%20components%20rendered%20by%20router-view%20can%20resolve%20named%20slots%0A%20%20%20%20%2F%2F%20%E8%BF%99%E4%B8%AA%E6%B3%A8%E9%87%8A%E5%80%BC%E5%BE%97%E6%B3%A8%E6%84%8F%EF%BC%8C%E5%9B%A0%E4%B8%BA%E8%B0%83%E7%94%A8%E4%BA%86%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84createElement%20%E6%89%80%E4%BB%A5context%E6%98%AF%E7%88%B6%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%EF%BC%8C%0A%20%20%20%20%2F%2F%20%E4%B9%8B%E5%89%8D%E5%9C%A8%E5%AD%A6%E4%B9%A0Vue%E6%BA%90%E7%A0%81%E7%9A%84slot%E9%83%A8%E5%88%86%E6%9C%89%E6%B3%A8%E6%84%8F%E5%88%B0%20%E5%91%BD%E5%90%8Dslot%E5%8F%AA%E6%9C%89%E5%9C%A8context%E6%AD%A3%E7%A1%AE%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E6%89%8D%E4%BC%9A%E6%B8%B2%E6%9F%93%0A%20%20%20%20const%20h%20%3D%20parent.%24createElement%0A%20%20%20%20const%20name%20%3D%20props.name%0A%20%20%20%20const%20route%20%3D%20parent.%24route%0A%20%20%20%20const%20cache%20%3D%20parent._routerViewCache%20%7C%7C%20(parent._routerViewCache%20%3D%20%7B%7D)%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E9%80%9A%E8%BF%87%E5%88%9D%E5%A7%8B%E5%8C%96%E6%97%B6%E5%80%99%E5%AE%9A%E4%B9%89%E7%9A%84data.routerView%20%3D%20true%E7%BD%91%E4%B8%8A%E5%AF%BB%E6%89%BE%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84routerView%3Cbr%3E%E4%BB%8E%E8%80%8C%E7%A1%AE%E5%AE%9ArouterView%E7%9A%84%E5%B1%82%E7%BA%A7%EF%BC%8C%E8%BF%99%E4%B8%AA%E5%B1%82%E7%BA%A7%E5%8F%AF%E4%BB%A5%E7%94%A8%E6%9D%A5%E5%8C%B9%E9%85%8Drouter%E9%85%8D%E7%BD%AE%E9%87%8C%E7%9A%84%E5%B1%82%E7%BA%A7%EF%BC%8C%E6%96%B9%E4%BE%BF%E6%89%BE%E5%88%B0%E5%BA%94%E8%AF%A5%E6%B8%B2%E6%9F%93%E7%9A%84%E7%BB%84%E4%BB%B6!%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20%2F%2F%20determine%20current%20view%20depth%2C%20also%20check%20to%20see%20if%20the%20tree%0A%20%20%20%20%2F%2F%20has%20been%20toggled%20inactive%20but%20kept-alive.%0A%20%20%20%20let%20depth%20%3D%200%0A%20%20%20%20let%20inactive%20%3D%20false%0A%20%20%20%20while%20(parent%20%26amp%3B%26amp%3B%20parent._routerRoot%20!%3D%3D%20parent)%20%7B%0A%20%20%20%20%20%20%2F%2F%20%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84data.routerView%E4%B8%BAtrue%20%E8%AF%B4%E6%98%8E%E6%98%AF%E5%B5%8C%E5%A5%97%E7%9A%84router-view%20%E5%B0%86depth%20%2B%201%0A%20%20%20%20%20%20if%20(parent.%24vnode%20%26amp%3B%26amp%3B%20parent.%24vnode.data.routerView)%20%7B%0A%20%20%20%20%20%20%20%20depth%2B%2B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(parent._inactive)%20%7B%0A%20%20%20%20%20%20%20%20inactive%20%3D%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20parent%20%3D%20parent.%24parent%0A%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%E8%AE%B0%E5%BD%95%E8%BF%99%E4%B8%AArouterView%E7%9A%84%E6%B7%B1%E5%BA%A6%0A%20%20%20%20data.routerViewDepth%20%3D%20depth%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E9%80%9A%E8%BF%87depth%20%E5%92%8Croute.matched%E8%BF%99%E4%B8%AArecords%E6%95%B0%E7%BB%84%20%E6%89%BE%E5%88%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6%20%E5%B9%B6%E4%B8%94cache%E4%B8%8B%E6%9D%A5%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%2F%2F%20render%20previous%20view%20if%20the%20tree%20is%20inactive%20and%20kept-alive%0A%20%20%20%20if%20(inactive)%20%7B%0A%20%20%20%20%20%20return%20h(cache%5Bname%5D%2C%20data%2C%20children)%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20matched%20%3D%20route.matched%5Bdepth%5D%0A%20%20%20%20%2F%2F%20render%20empty%20node%20if%20no%20matched%20route%0A%20%20%20%20if%20(!matched)%20%7B%0A%20%20%20%20%20%20cache%5Bname%5D%20%3D%20null%0A%20%20%20%20%20%20return%20h()%0A%20%20%20%20%7D%0A%0A%20%20%20%20const%20component%20%3D%20cache%5Bname%5D%20%3D%20matched.components%5Bname%5D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20return%20h(component%2C%20data%2C%20children)%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%8F%A6%E5%A4%96%E6%9D%A5%E7%9C%8B%20%E4%B8%AD%E9%97%B4%E6%9C%89%E4%B8%80%E6%AE%B5%E7%BB%99data%E4%B8%8A%E6%8C%82%E8%BD%BDregisterRouteInstance%E6%96%B9%E6%B3%95%3Cbr%3E%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E4%BC%9A%E5%9C%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E6%97%B6%E5%80%99%E6%8C%87%E5%AE%9AbeforeCreate%E8%B0%83%E7%94%A8%20registerInstance(this%2C%20this)%20%E4%B9%9F%E5%B0%B1%E6%98%AF%E6%B3%A8%E5%86%8C%E4%B8%BA%E5%BD%93%E5%89%8D%E5%AE%9E%E4%BE%8B%3Cbr%3E%E5%B9%B6%E4%B8%94destory%E8%B0%83%E7%94%A8%20registerInstance(this)%20%E4%B9%9F%E5%B0%B1%E6%98%AF%E6%B3%A8%E5%86%8C%E4%B8%BA%E7%A9%BA%EF%BC%8C%E9%94%80%E6%AF%81%3Cbr%3E%E8%BF%99%E4%B8%AA%E5%AE%9E%E4%BE%8B%E6%98%AF%E7%BB%99vue-router%E5%86%85%E9%83%A8%E7%94%9F%E6%88%90%E5%AF%BC%E8%88%AA%E5%AE%88%E5%8D%AB%E6%97%B6%E7%94%A8%E7%9A%84%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20%2F%2F%20attach%20instance%20registration%20hook%0A%20%20%20%20%2F%2F%20this%20will%20be%20called%20in%20the%20instance%26%2339%3Bs%20injected%20lifecycle%20hooks%0A%20%20%20%20data.registerRouteInstance%20%3D%20(vm%2C%20val)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%2F%2F%20val%20could%20be%20undefined%20for%20unregistration%0A%20%20%20%20%20%20const%20current%20%3D%20matched.instances%5Bname%5D%0A%20%20%20%20%20%20if%20(%0A%20%20%20%20%20%20%20%20(val%20%26amp%3B%26amp%3B%20current%20!%3D%3D%20vm)%20%7C%7C%0A%20%20%20%20%20%20%20%20(!val%20%26amp%3B%26amp%3B%20current%20%3D%3D%3D%20vm)%0A%20%20%20%20%20%20)%20%7B%0A%20%20%20%20%20%20%20%20matched.instances%5Bname%5D%20%3D%20val%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%86%99%E5%88%B0%E8%BF%99%E9%87%8C%20%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B7%AF%E5%BE%84%E5%88%87%E6%8D%A2%E4%BA%86%20router-view%E4%BC%9A%E9%87%8D%E6%96%B0render%E8%BF%98%E6%98%AF%E4%B8%AA%E6%82%AC%E5%BF%B5%EF%BC%8C%E6%8E%A5%E4%B8%8B%E6%9D%A5%E6%88%91%E4%BB%AC%E6%8F%AD%E6%99%93%EF%BC%9A%3Cbr%3E%E5%9C%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E6%97%B6%E5%80%99%EF%BC%8C_route%E8%A2%AB%E5%AE%9A%E4%B9%89%E4%B8%BA%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B1%9E%E6%80%A7%E4%BA%86%E3%80%82%3Cbr%3Erouter-view%E7%9A%84render%E5%88%9A%E5%BC%80%E5%A7%8B%E7%9A%84%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20const%20route%20%3D%20parent.%24route%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%AE%B5%E4%BB%A3%E7%A0%81%E8%AE%BF%E9%97%AE%E4%BA%86%24route%2C%20%E6%94%B6%E9%9B%86%E5%88%B0%E4%BA%86%E4%BE%9D%E8%B5%96%2C%3Cbr%3E%E5%9C%A8init%E4%B8%AD%E6%9C%89%E4%B8%80%E4%B8%AA%E7%9B%91%E5%90%AC%2C%20%E5%AF%B9_route%E5%81%9A%E4%BA%86%E4%BF%AE%E6%94%B9%EF%BC%8C%20%E6%AD%A4%E6%97%B6%E5%B0%B1%E4%BC%9A%E8%A7%A6%E5%8F%91Watcher%E7%9A%84%E9%87%8D%E6%96%B0%E6%B8%B2%E6%9F%93%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20history.listen(route%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20this.apps.forEach((app)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20app._route%20%3D%20route%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20%7D)%3C%2Fcode%3E%3C%2Fpre%3E%0A"})}},[["7wHi",1,0]]]);