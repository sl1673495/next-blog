(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{N5xF:function(E,B,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Vue\u6e90\u7801\u5b66\u4e60\uff082\uff09\u521d\u59cb\u5316",function(){var E=A("lr3m");return{page:E.default||E}}])},lr3m:function(E,B,A){"use strict";A.r(B);var e=A("4fS0");A("hUnW"),A("zVQR");B.default=Object(e.a)({title:"Vue\u6e90\u7801\u5b66\u4e60\uff082\uff09\u521d\u59cb\u5316",html:"%3Ch3%20id%3D%22_init%22%3E_init%3C%2Fh3%3E%0A%3Cp%3E_init%20%E6%96%B9%E6%B3%95%E5%9C%A8%20src%2Fcore%2Finstance%2Finit.js%20%E6%96%87%E4%BB%B6%E8%A2%AB%E6%B7%BB%E5%8A%A0%E5%88%B0%20Vue%20%E7%9A%84%E5%8E%9F%E5%9E%8B%E4%B8%8A%EF%BC%8C%E4%B8%8B%E9%9D%A2%E6%88%91%E4%BB%AC%E5%B0%B1%E7%9C%8B%E7%9C%8B%20_init%20%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3E%2F%2F%20a%20flag%20to%20avoid%20this%20being%20observed%0Avm._isVue%20%3D%20true%0A%2F%2F%20merge%20options%0Aif%20(options%20%26amp%3B%26amp%3B%20options._isComponent)%20%7B%0A%20%20%20%20%2F%2F%20optimize%20internal%20component%20instantiation%0A%20%20%20%20%2F%2F%20since%20dynamic%20options%20merging%20is%20pretty%20slow%2C%20and%20none%20of%20the%0A%20%20%20%20%2F%2F%20internal%20component%20options%20needs%20special%20treatment.%0A%20%20%20%20initInternalComponent(vm%2C%20options)%0A%7D%20else%20%7B%0A%20%20%20%20vm.%24options%20%3D%20mergeOptions(%0A%20%20%20%20resolveConstructorOptions(vm.constructor)%2C%0A%20%20%20%20options%20%7C%7C%20%7B%7D%2C%0A%20%20%20%20vm%0A%20%20%20%20)%0A%7D%0A%2F*%20istanbul%20ignore%20else%20*%2F%0Aif%20(process.env.NODE_ENV%20!%3D%3D%20%26%2339%3Bproduction%26%2339%3B)%20%7B%0A%20%20%20%20initProxy(vm)%0A%7D%20else%20%7B%0A%20%20%20%20vm._renderProxy%20%3D%20vm%0A%7D%0A%2F%2F%20expose%20real%20self%0Avm._self%20%3D%20vm%0AinitLifecycle(vm)%0AinitEvents(vm)%0AinitRender(vm)%0AcallHook(vm%2C%20%26%2339%3BbeforeCreate%26%2339%3B)%0AinitInjections(vm)%20%2F%2F%20resolve%20injections%20before%20data%2Fprops%0AinitState(vm)%0AinitProvide(vm)%20%2F%2F%20resolve%20provide%20after%20data%2Fprops%0AcallHook(vm%2C%20%26%2339%3Bcreated%26%2339%3B)%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22vue%E9%80%89%E9%A1%B9%E7%9A%84%E8%A7%84%E8%8C%83%E5%8C%96%22%3EVue%E9%80%89%E9%A1%B9%E7%9A%84%E8%A7%84%E8%8C%83%E5%8C%96%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%3Evm.%24options%20%3D%20mergeOptions(%0A%20%20%20%20resolveConstructorOptions(vm.constructor)%2C%0A%20%20%20%20options%20%7C%7C%20%7B%7D%2C%0A%20%20%20%20vm%0A)%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E8%A6%81%E6%90%9E%E6%87%82%E8%BF%99%E4%B8%AAmergeOptions%EF%BC%8C%E6%88%91%E4%BB%AC%E8%A6%81%E5%85%88%E7%9C%8BresolveConstructorOptions%E6%96%B9%E6%B3%95%EF%BC%8C%3Cbr%3E%E5%B0%86vm%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BC%A0%E5%85%A5%E8%BF%9B%E5%8E%BB%EF%BC%8C%E5%85%B6%E5%AE%9E%E6%98%AF%E5%9B%A0%E4%B8%BAVue.extend()%E5%8F%AF%E4%BB%A5%E8%BF%94%E5%9B%9E%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%EF%BC%8C%3Cbr%3E%E5%A6%82%E6%9E%9C%E6%98%AF%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%EF%BC%8C%E4%BC%9A%E5%BB%BA%E7%AB%8B%E8%B5%B7%E5%92%8C%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84%E7%BB%A7%E6%89%BF%E5%85%B3%E7%B3%BB%2C%20%E6%89%80%E4%BB%A5%E8%BF%99%E9%87%8C%E5%B0%B1%E6%98%AF%E5%90%88%E5%B9%B6%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E4%B8%80%E4%BA%9Boptions%3C%2Fp%3E%0A%3Cp%3E%E5%9C%A8Vue%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E6%97%B6%E5%80%99%20%E4%B8%8D%E4%BC%9A%E8%B5%B0if%E9%80%BB%E8%BE%91%20%E6%89%80%E4%BB%A5%E5%8F%AA%E4%BC%9A%E8%BF%94%E5%9B%9EVue.options%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Eexport%20function%20resolveConstructorOptions%20(Ctor%3A%20Class%26lt%3BComponent%26gt%3B)%20%7B%0A%20%20let%20options%20%3D%20Ctor.options%0A%20%20if%20(Ctor.super)%20%7B%0A%20%20%20%20const%20superOptions%20%3D%20resolveConstructorOptions(Ctor.super)%0A%20%20%20%20const%20cachedSuperOptions%20%3D%20Ctor.superOptions%0A%20%20%20%20if%20(superOptions%20!%3D%3D%20cachedSuperOptions)%20%7B%0A%20%20%20%20%20%20%2F%2F%20super%20option%20changed%2C%0A%20%20%20%20%20%20%2F%2F%20need%20to%20resolve%20new%20options.%0A%20%20%20%20%20%20Ctor.superOptions%20%3D%20superOptions%0A%20%20%20%20%20%20%2F%2F%20check%20if%20there%20are%20any%20late-modified%2Fattached%20options%20(%234976)%0A%20%20%20%20%20%20const%20modifiedOptions%20%3D%20resolveModifiedOptions(Ctor)%0A%20%20%20%20%20%20%2F%2F%20update%20base%20extend%20options%0A%20%20%20%20%20%20if%20(modifiedOptions)%20%7B%0A%20%20%20%20%20%20%20%20extend(Ctor.extendOptions%2C%20modifiedOptions)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20options%20%3D%20Ctor.options%20%3D%20mergeOptions(superOptions%2C%20Ctor.extendOptions)%0A%20%20%20%20%20%20if%20(options.name)%20%7B%0A%20%20%20%20%20%20%20%20options.components%5Boptions.name%5D%20%3D%20Ctor%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20options%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E4%BD%BF%E7%94%A8mergeHook%E5%90%88%E5%B9%B6%E6%95%B0%E7%BB%84%E9%87%8C%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%3Cbr%3E%E4%BC%98%E5%85%88%E6%8A%8A%E7%88%B6%E5%AD%90%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0%E7%9A%84concat%E5%9C%A8%E4%B8%80%E8%B5%B7%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Eexport%20const%20LIFECYCLE_HOOKS%20%3D%20%5B%0A%20%20%26%2339%3BbeforeCreate%26%2339%3B%2C%0A%20%20%26%2339%3Bcreated%26%2339%3B%2C%0A%20%20%26%2339%3BbeforeMount%26%2339%3B%2C%0A%20%20%26%2339%3Bmounted%26%2339%3B%2C%0A%20%20%26%2339%3BbeforeUpdate%26%2339%3B%2C%0A%20%20%26%2339%3Bupdated%26%2339%3B%2C%0A%20%20%26%2339%3BbeforeDestroy%26%2339%3B%2C%0A%20%20%26%2339%3Bdestroyed%26%2339%3B%2C%0A%20%20%26%2339%3Bactivated%26%2339%3B%2C%0A%20%20%26%2339%3Bdeactivated%26%2339%3B%2C%0A%20%20%26%2339%3BerrorCaptured%26%2339%3B%0A%5D%0A%0Afunction%20mergeHook%20(%0A%20%20parentVal%3A%20%3FArray%26lt%3BFunction%26gt%3B%2C%0A%20%20childVal%3A%20%3FFunction%20%7C%20%3FArray%26lt%3BFunction%26gt%3B%0A)%3A%20%3FArray%26lt%3BFunction%26gt%3B%20%7B%0A%20%20return%20childVal%0A%20%20%20%20%3F%20parentVal%0A%20%20%20%20%20%20%3F%20parentVal.concat(childVal)%0A%20%20%20%20%20%20%3A%20Array.isArray(childVal)%0A%20%20%20%20%20%20%20%20%3F%20childVal%0A%20%20%20%20%20%20%20%20%3A%20%5BchildVal%5D%0A%20%20%20%20%3A%20parentVal%0A%7D%0A%0Areturn%20(%E6%98%AF%E5%90%A6%E6%9C%89%20childVal%EF%BC%8C%E5%8D%B3%E5%88%A4%E6%96%AD%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%89%E9%A1%B9%E4%B8%AD%E6%98%AF%E5%90%A6%E6%9C%89%E5%AF%B9%E5%BA%94%E5%90%8D%E5%AD%97%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0)%0A%20%20%3F%20%E5%A6%82%E6%9E%9C%E6%9C%89%20childVal%20%E5%88%99%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%9C%89%20parentVal%0A%20%20%20%20%3F%20%E5%A6%82%E6%9E%9C%E6%9C%89%20parentVal%20%E5%88%99%E4%BD%BF%E7%94%A8%20concat%20%E6%96%B9%E6%B3%95%E5%B0%86%E4%BA%8C%E8%80%85%E5%90%88%E5%B9%B6%E4%B8%BA%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%0A%20%20%20%20%3A%20%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%20parentVal%20%E5%88%99%E5%88%A4%E6%96%AD%20childVal%20%E6%98%AF%E4%B8%8D%E6%98%AF%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%0A%20%20%20%20%20%20%3F%20%E5%A6%82%E6%9E%9C%20childVal%20%E6%98%AF%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E5%88%99%E7%9B%B4%E6%8E%A5%E8%BF%94%E5%9B%9E%0A%20%20%20%20%20%20%3A%20%E5%90%A6%E5%88%99%E5%B0%86%E5%85%B6%E4%BD%9C%E4%B8%BA%E6%95%B0%E7%BB%84%E7%9A%84%E5%85%83%E7%B4%A0%EF%BC%8C%E7%84%B6%E5%90%8E%E8%BF%94%E5%9B%9E%E6%95%B0%E7%BB%84%0A%20%20%3A%20%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%20childVal%20%E5%88%99%E7%9B%B4%E6%8E%A5%E8%BF%94%E5%9B%9E%20parentVal%3C%2Fcode%3E%3C%2Fpre%3E"})}},[["N5xF",1,0]]]);