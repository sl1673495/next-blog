(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"m5R+":function(E,A,B){"use strict";B.r(A);var e=B("4fS0");A.default=Object(e.a)({blog:{url:"https://api.github.com/repos/sl1673495/blogs/issues/3",repository_url:"https://api.github.com/repos/sl1673495/blogs",labels_url:"https://api.github.com/repos/sl1673495/blogs/issues/3/labels{/name}",comments_url:"https://api.github.com/repos/sl1673495/blogs/issues/3/comments",events_url:"https://api.github.com/repos/sl1673495/blogs/issues/3/events",html_url:"https://github.com/sl1673495/blogs/issues/3",id:365105510,node_id:"MDU6SXNzdWUzNjUxMDU1MTA=",number:3,title:"Vue\u6e90\u7801\u5b66\u4e60\uff081\uff09\u8d77\u6e90",user:{login:"sl1673495",id:23615778,node_id:"MDQ6VXNlcjIzNjE1Nzc4",avatar_url:"https://avatars1.githubusercontent.com/u/23615778?v=4",gravatar_id:"",url:"https://api.github.com/users/sl1673495",html_url:"https://github.com/sl1673495",followers_url:"https://api.github.com/users/sl1673495/followers",following_url:"https://api.github.com/users/sl1673495/following{/other_user}",gists_url:"https://api.github.com/users/sl1673495/gists{/gist_id}",starred_url:"https://api.github.com/users/sl1673495/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/sl1673495/subscriptions",organizations_url:"https://api.github.com/users/sl1673495/orgs",repos_url:"https://api.github.com/users/sl1673495/repos",events_url:"https://api.github.com/users/sl1673495/events{/privacy}",received_events_url:"https://api.github.com/users/sl1673495/received_events",type:"User",site_admin:!1},labels:[{id:1525733797,node_id:"MDU6TGFiZWwxNTI1NzMzNzk3",url:"https://api.github.com/repos/sl1673495/blogs/labels/Vue",name:"Vue",color:"c2e0c6",default:!1}],state:"open",locked:!1,assignee:null,assignees:[],milestone:null,comments:0,created_at:"2018-09-29T07:09:38Z",updated_at:"2019-08-29T09:38:56Z",closed_at:null,author_association:"OWNER"},html:"%3Ch3%20id%3D%22%E4%B8%80%E5%88%87%E7%9A%84%E5%BC%80%E5%A7%8B%22%3E%E4%B8%80%E5%88%87%E7%9A%84%E5%BC%80%E5%A7%8B%3C%2Fh3%3E%0A%3Cp%3EVue%E8%BF%99%E4%B8%AA%E7%A5%9E%E5%A5%87%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E8%B5%B7%E6%BA%90%EF%BC%9A.%2Finstance%2Findex.js%3C%2Fp%3E%0A%3Cp%3E%E8%B0%83%E7%94%A8%E5%87%A0%E7%A7%8Dmixin%E6%96%B9%E6%B3%95%E7%BB%99Vue%E6%B7%BB%E5%8A%A0%E4%BA%86%E5%BE%88%E5%A4%9A%E8%83%BD%E5%8A%9B%E3%80%82%3Cbr%3E%E5%9C%A8%E7%94%A8%E6%88%B7%E6%89%A7%E8%A1%8Cnew%20Vue()%E7%9A%84%E6%97%B6%E5%80%99%20%E6%89%A7%E8%A1%8Cthis._init%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3E%2F%2F%20%E4%BB%8E%E4%BA%94%E4%B8%AA%E6%96%87%E4%BB%B6%E5%AF%BC%E5%85%A5%E4%BA%94%E4%B8%AA%E6%96%B9%E6%B3%95%EF%BC%88%E4%B8%8D%E5%8C%85%E6%8B%AC%20warn%EF%BC%89%0Aimport%20%7B%20initMixin%20%7D%20from%20%26%2339%3B.%2Finit%26%2339%3B%0Aimport%20%7B%20stateMixin%20%7D%20from%20%26%2339%3B.%2Fstate%26%2339%3B%0Aimport%20%7B%20renderMixin%20%7D%20from%20%26%2339%3B.%2Frender%26%2339%3B%0Aimport%20%7B%20eventsMixin%20%7D%20from%20%26%2339%3B.%2Fevents%26%2339%3B%0Aimport%20%7B%20lifecycleMixin%20%7D%20from%20%26%2339%3B.%2Flifecycle%26%2339%3B%0Aimport%20%7B%20warn%20%7D%20from%20%26%2339%3B..%2Futil%2Findex%26%2339%3B%0A%0A%2F%2F%20%E5%AE%9A%E4%B9%89%20Vue%20%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%0Afunction%20Vue%20(options)%20%7B%0A%20%20if%20(process.env.NODE_ENV%20!%3D%3D%20%26%2339%3Bproduction%26%2339%3B%20%26amp%3B%26amp%3B%0A%20%20%20%20!(this%20instanceof%20Vue)%0A%20%20)%20%7B%0A%20%20%20%20warn(%26%2339%3BVue%20is%20a%20constructor%20and%20should%20be%20called%20with%20the%20%60new%60%20keyword%26%2339%3B)%0A%20%20%7D%0A%20%20this._init(options)%0A%7D%0A%0A%2F%2F%20%E5%B0%86%20Vue%20%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%E7%BB%99%E5%AF%BC%E5%85%A5%E7%9A%84%E4%BA%94%E4%B8%AA%E6%96%B9%E6%B3%95%0AinitMixin(Vue)%0AstateMixin(Vue)%0AeventsMixin(Vue)%0AlifecycleMixin(Vue)%0ArenderMixin(Vue)%0A%0A%2F%2F%20%E5%AF%BC%E5%87%BA%20Vue%0Aexport%20default%20Vue%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22initmixin%22%3EinitMixin%3C%2Fh3%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%9C%E7%94%A8%E5%B0%B1%E6%98%AF%E5%9C%A8%20Vue%20%E7%9A%84%E5%8E%9F%E5%9E%8B%E4%B8%8A%E6%B7%BB%E5%8A%A0%E4%BA%86%20_init%20%E6%96%B9%E6%B3%95%EF%BC%8C%E8%BF%99%E4%B8%AA%20_init%20%E6%96%B9%E6%B3%95%E7%9C%8B%E4%B8%8A%E5%8E%BB%E5%BA%94%E8%AF%A5%E6%98%AF%E5%86%85%E9%83%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E4%B8%80%E4%B8%AA%E6%96%B9%E6%B3%95%EF%BC%8C%E5%85%B6%E5%AE%9E%E5%9C%A8%20instance%2Findex.js%20%E6%96%87%E4%BB%B6%E4%B8%AD%E6%88%91%E4%BB%AC%E6%98%AF%E8%A7%81%E8%BF%87%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E7%9A%84%EF%BC%8C%E5%A6%82%E4%B8%8B%EF%BC%9A%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Eexport%20function%20initMixin%20(Vue%3A%20Class%26lt%3BComponent%26gt%3B)%20%7B%0A%20%20Vue.prototype._init%20%3D%20function%20(options%3F%3A%20Object)%20%7B%0A%20%20%20%20%2F%2F%20...%20_init%20%E6%96%B9%E6%B3%95%E7%9A%84%E5%87%BD%E6%95%B0%E4%BD%93%EF%BC%8C%E6%AD%A4%E5%A4%84%E7%9C%81%E7%95%A5%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22statemixin%22%3EstateMixin%3C%2Fh3%3E%0A%3Cp%3EVue%E7%A4%BA%E4%BE%8B%E4%B8%8A%E7%9A%84%24data%E5%92%8C%24props%E5%AE%9E%E9%99%85%E6%8C%87%E5%90%91this._data%E5%92%8Cthis._props%EF%BC%8C%E5%8F%AA%E8%AF%BB%E5%B1%9E%E6%80%A7%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Econst%20dataDef%20%3D%20%7B%7D%0A%20%20dataDef.get%20%3D%20function%20()%20%7B%20return%20this._data%20%7D%0A%20%20const%20propsDef%20%3D%20%7B%7D%0A%20%20propsDef.get%20%3D%20function%20()%20%7B%20return%20this._props%20%7D%0A%20%20if%20(process.env.NODE_ENV%20!%3D%3D%20%26%2339%3Bproduction%26%2339%3B)%20%7B%0A%20%20%20%20dataDef.set%20%3D%20function%20(newData%3A%20Object)%20%7B%0A%20%20%20%20%20%20warn(%0A%20%20%20%20%20%20%20%20%26%2339%3BAvoid%20replacing%20instance%20root%20%24data.%20%26%2339%3B%20%2B%0A%20%20%20%20%20%20%20%20%26%2339%3BUse%20nested%20data%20properties%20instead.%26%2339%3B%2C%0A%20%20%20%20%20%20%20%20this%0A%20%20%20%20%20%20)%0A%20%20%20%20%7D%0A%20%20%20%20propsDef.set%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20warn(%60%24props%20is%20readonly.%60%2C%20this)%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20Object.defineProperty(Vue.prototype%2C%20%26%2339%3B%24data%26%2339%3B%2C%20dataDef)%0A%20%20Object.defineProperty(Vue.prototype%2C%20%26%2339%3B%24props%26%2339%3B%2C%20propsDef)%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E5%AE%9A%E4%B9%89%E4%BA%863%E4%B8%AA%E5%BE%88%E9%87%8D%E8%A6%81%E7%9A%84api%EF%BC%8C%E5%90%8E%E9%9D%A2%E5%93%8D%E5%BA%94%E5%BC%8F%E6%88%91%E4%BB%AC%E5%86%8D%E7%BB%86%E7%BB%86%E5%93%81%E5%91%B3%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3E%20%20Vue.prototype.%24set%20%3D%20set%0A%20%20Vue.prototype.%24delete%20%3D%20del%0A%0A%20%20Vue.prototype.%24watch%20%3D%20function%20(%0A%20%20%20%20expOrFn%3A%20string%20%7C%20Function%2C%0A%20%20%20%20cb%3A%20any%2C%0A%20%20%20%20options%3F%3A%20Object%0A%20%20)%3A%20Function%20%7B%0A%20%20%20%20%20%20%2F%2F%20...%0A%20%20%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22eventsmixin%22%3EeventsMixin%3C%2Fh3%3E%0A%3Cp%3E%E4%B9%9F%E6%98%AF%E5%AE%9A%E4%B9%89%E4%BA%86%E5%87%A0%E4%B8%AA%E7%86%9F%E6%82%89%E7%9A%84api%EF%BC%8C%E7%94%A8%E6%9D%A5%E5%9C%A8vue%E5%86%85%E9%83%A8%E5%AE%9E%E7%8E%B0%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BF%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3EVue.prototype.%24on%20%3D%20function%20(event%3A%20string%20%7C%20Array%26lt%3Bstring%26gt%3B%2C%20fn%3A%20Function)%3A%20Component%20%7B%7D%0AVue.prototype.%24once%20%3D%20function%20(event%3A%20string%2C%20fn%3A%20Function)%3A%20Component%20%7B%7D%0AVue.prototype.%24off%20%3D%20function%20(event%3F%3A%20string%20%7C%20Array%26lt%3Bstring%26gt%3B%2C%20fn%3F%3A%20Function)%3A%20Component%20%7B%7D%0AVue.prototype.%24emit%20%3D%20function%20(event%3A%20string)%3A%20Component%20%7B%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22lifecyclemixin%22%3ElifecycleMixin%3C%2Fh3%3E%0A%3Cp%3E%E8%BF%99%E5%87%A0%E4%B8%AA%E5%B0%B1%E7%9B%B8%E5%AF%B9%E9%99%8C%E7%94%9F%E7%82%B9%E4%BA%86%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3EVue.prototype._update%20%3D%20function%20(vnode%3A%20VNode%2C%20hydrating%3F%3A%20boolean)%20%7B%7D%0AVue.prototype.%24forceUpdate%20%3D%20function%20()%20%7B%7D%0AVue.prototype.%24destroy%20%3D%20function%20()%20%7B%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22rendermixin%22%3ErenderMixin%3C%2Fh3%3E%0A%3Cp%3E%E4%B8%BAVue%E6%B7%BB%E5%8A%A0%E6%B8%B2%E6%9F%93%E6%96%B9%E6%B3%95%EF%BC%8C%E5%92%8C%E7%86%9F%E6%82%89%E7%9A%84%24nextTick%20%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Eexport%20function%20installRenderHelpers%20(target%3A%20any)%20%7B%0A%20%20target._o%20%3D%20markOnce%0A%20%20target._n%20%3D%20toNumber%0A%20%20target._s%20%3D%20toString%0A%20%20target._l%20%3D%20renderList%0A%20%20target._t%20%3D%20renderSlot%0A%20%20target._q%20%3D%20looseEqual%0A%20%20target._i%20%3D%20looseIndexOf%0A%20%20target._m%20%3D%20renderStatic%0A%20%20target._f%20%3D%20resolveFilter%0A%20%20target._k%20%3D%20checkKeyCodes%0A%20%20target._b%20%3D%20bindObjectProps%0A%20%20target._v%20%3D%20createTextVNode%0A%20%20target._e%20%3D%20createEmptyVNode%0A%20%20target._u%20%3D%20resolveScopedSlots%0A%20%20target._g%20%3D%20bindObjectListeners%0A%7D%0A%0AVue.prototype.%24nextTick%20%3D%20function%20(fn%3A%20Function)%20%7B%7D%0AVue.prototype._render%20%3D%20function%20()%3A%20VNode%20%7B%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E8%87%B3%E6%AD%A4%EF%BC%8Cinstance%2Findex.js%20%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E4%BB%A3%E7%A0%81%E5%B0%B1%E8%BF%90%E8%A1%8C%E5%AE%8C%E6%AF%95%E4%BA%86%3C%2Fp%3E%0A%3Ch3%20id%3D%22vue-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%EF%BC%88%E5%85%A8%E5%B1%80api%EF%BC%89%22%3EVue%20%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E7%9A%84%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95%EF%BC%88%E5%85%A8%E5%B1%80API%EF%BC%89%3C%2Fh3%3E%0A%3Cp%3E%E7%BB%99Vue%E6%B7%BB%E5%8A%A0%E5%85%A8%E5%B1%80%E5%87%BD%E6%95%B0%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3EinitGlobalAPI(Vue)%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E8%BF%99%E9%87%8C%E6%9C%89%E4%B8%80%E6%AE%B5%E6%B3%A8%E9%87%8A%EF%BC%8C%E5%A4%A7%E6%A6%82%E6%84%8F%E6%80%9D%E6%98%AF%20Vue.util%20%E4%BB%A5%E5%8F%8A%20util%20%E4%B8%8B%E7%9A%84%E5%9B%9B%E4%B8%AA%E6%96%B9%E6%B3%95%E9%83%BD%E4%B8%8D%E8%A2%AB%E8%AE%A4%E4%B8%BA%E6%98%AF%E5%85%AC%E5%85%B1API%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%EF%BC%8C%E8%A6%81%E9%81%BF%E5%85%8D%E4%BE%9D%E8%B5%96%E4%BB%96%E4%BB%AC%EF%BC%8C%E4%BD%86%E6%98%AF%E4%BD%A0%E4%BE%9D%E7%84%B6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%EF%BC%8C%E5%8F%AA%E4%B8%8D%E8%BF%87%E9%A3%8E%E9%99%A9%E4%BD%A0%E8%A6%81%E8%87%AA%E5%B7%B1%E6%8E%A7%E5%88%B6%E3%80%82%E5%B9%B6%E4%B8%94%EF%BC%8C%E5%9C%A8%E5%AE%98%E6%96%B9%E6%96%87%E6%A1%A3%E4%B8%8A%E4%B9%9F%E5%B9%B6%E6%B2%A1%E6%9C%89%E4%BB%8B%E7%BB%8D%E8%BF%99%E4%B8%AA%E5%85%A8%E5%B1%80API%EF%BC%8C%E6%89%80%E4%BB%A5%E8%83%BD%E4%B8%8D%E7%94%A8%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E7%94%A8%E3%80%82%E5%B0%B1%E5%83%8Feval%E5%87%BD%E6%95%B0%E4%B8%80%E6%A0%B7%EF%BC%8C%E5%85%85%E6%BB%A1%E7%A5%9E%E5%A5%87%E7%9A%84%E9%AD%94%E5%8A%9B%EF%BC%8C%E4%BD%86%E5%8F%88%E5%BE%88%E5%8D%B1%E9%99%A9%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3EVue.util%20%3D%20%7B%0A%20%20%20%20warn%2C%0A%20%20%20%20extend%2C%0A%20%20%20%20mergeOptions%2C%0A%20%20%20%20defineReactive%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E5%9C%A8%20initGlobalAPI%20%E6%96%B9%E6%B3%95%E7%9A%84%E6%9C%80%E5%90%8E%E9%83%A8%E5%88%86%EF%BC%8C%E4%BB%A5%20Vue%20%E4%B8%BA%E5%8F%82%E6%95%B0%E8%B0%83%E7%94%A8%E4%BA%86%E5%9B%9B%E4%B8%AA%20init*%20%E6%96%B9%E6%B3%95%EF%BC%9A%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3EinitUse(Vue)%0AinitMixin(Vue)%0AinitExtend(Vue)%0AinitAssetRegisters(Vue)%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22inituse%22%3EinitUse%3C%2Fh3%3E%0A%3Cp%3E%E5%AE%9A%E4%B9%89%E4%BA%86use%E6%96%B9%E6%B3%95%EF%BC%8C%E7%BB%99%E5%A4%96%E9%83%A8%E6%89%A9%E5%B1%95Vue%E5%8A%9F%E8%83%BD%E7%94%A8%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3E%2F*%20%40flow%20*%2F%0A%0Aimport%20%7B%20toArray%20%7D%20from%20%26%2339%3B..%2Futil%2Findex%26%2339%3B%0A%0Aexport%20function%20initUse%20(Vue%3A%20GlobalAPI)%20%7B%0A%20%20Vue.use%20%3D%20function%20(plugin%3A%20Function%20%7C%20Object)%20%7B%0A%20%20%20%20%2F%2F%20...%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22initmixin-1%22%3EinitMixin%3C%2Fh3%3E%0A%3Cp%3E%E5%AE%9A%E4%B9%89%E4%BA%86mixin%E6%96%B9%E6%B3%95%EF%BC%8C%E5%85%B6%E5%AE%9E%E5%86%85%E9%83%A8%E8%B0%83%E7%94%A8%E4%BA%86mergeOptions%E8%BF%99%E4%B8%AAapi%EF%BC%8C%E5%90%88%E5%B9%B6%E4%BA%86%E9%85%8D%E7%BD%AE%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3E%2F*%20%40flow%20*%2F%0A%0Aimport%20%7B%20mergeOptions%20%7D%20from%20%26%2339%3B..%2Futil%2Findex%26%2339%3B%0A%0Aexport%20function%20initMixin%20(Vue%3A%20GlobalAPI)%20%7B%0A%20%20Vue.mixin%20%3D%20function%20(mixin%3A%20Object)%20%7B%0A%20%20%20%20this.options%20%3D%20mergeOptions(this.options%2C%20mixin)%0A%20%20%20%20return%20this%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22initextend%22%3EinitExtend%3C%2Fh3%3E%0A%3Cp%3EinitExtend%20%E6%96%B9%E6%B3%95%E5%9C%A8%20Vue%20%E4%B8%8A%E6%B7%BB%E5%8A%A0%E4%BA%86%20Vue.cid%20%E9%9D%99%E6%80%81%E5%B1%9E%E6%80%A7%EF%BC%8C%E5%92%8C%20Vue.extend%20%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Eexport%20function%20initExtend%20(Vue%3A%20GlobalAPI)%20%7B%0A%20%20%2F**%0A%20%20%20*%20Each%20instance%20constructor%2C%20including%20Vue%2C%20has%20a%20unique%0A%20%20%20*%20cid.%20This%20enables%20us%20to%20create%20wrapped%20%26quot%3Bchild%0A%20%20%20*%20constructors%26quot%3B%20for%20prototypal%20inheritance%20and%20cache%20them.%0A%20%20%20*%2F%0A%20%20Vue.cid%20%3D%200%0A%20%20let%20cid%20%3D%201%0A%0A%20%20%2F**%0A%20%20%20*%20Class%20inheritance%0A%20%20%20*%2F%0A%20%20Vue.extend%20%3D%20function%20(extendOptions%3A%20Object)%3A%20Function%20%7B%0A%20%20%20%20%2F%2F%20...%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22initassetregisters%22%3EinitAssetRegisters%3C%2Fh3%3E%0A%3Cp%3E%E7%BB%8F%E8%BF%87%E4%BA%86%E8%BF%99%E4%B8%80%E6%AD%A5%20Vue%E5%8F%88%E5%A4%9A%E4%BA%86%E4%B8%89%E4%B8%AA%E9%9D%99%E6%80%81%E6%96%B9%E6%B3%95%3Cbr%3EVue.component%3Cbr%3EVue.directive%3Cbr%3EVue.filter%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3Eexport%20function%20initAssetRegisters%20(Vue%3A%20GlobalAPI)%20%7B%0A%20%20%2F**%0A%20%20%20*%20Create%20asset%20registration%20methods.%0A%20%20%20*%2F%0A%20%20ASSET_TYPES.forEach(type%20%3D%26gt%3B%20%7B%0A%20%20%20%20Vue%5Btype%5D%20%3D%20function%20(%0A%20%20%20%20%20%20id%3A%20string%2C%0A%20%20%20%20%20%20definition%3A%20Function%20%7C%20Object%0A%20%20%20%20)%3A%20Function%20%7C%20Object%20%7C%20void%20%7B%0A%20%20%20%20%20%20%2F%2F%20......%0A%20%20%20%20%7D%0A%20%20%7D)%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E4%B8%BAVue%E7%A4%BA%E4%BE%8B%E6%B7%BB%E5%8A%A0%3Cstrong%3Epatch%3C%2Fstrong%3E%E5%92%8C%24mount%E6%96%B9%E6%B3%95%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%3E%2F%2F%20install%20platform%20patch%20function%0AVue.prototype.__patch__%20%3D%20inBrowser%20%3F%20patch%20%3A%20noop%0A%0A%2F%2F%20public%20mount%20method%0AVue.prototype.%24mount%20%3D%20function%20(%0A%20%20el%3F%3A%20string%20%7C%20Element%2C%0A%20%20hydrating%3F%3A%20boolean%0A)%3A%20Component%20%7B%0A%20%20el%20%3D%20el%20%26amp%3B%26amp%3B%20inBrowser%20%3F%20query(el)%20%3A%20undefined%0A%20%20return%20mountComponent(this%2C%20el%2C%20hydrating)%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%3Ch3%20id%3D%22with-compiler%22%3Ewith%20compiler%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%3E%2F%2F%20...%20%E5%85%B6%E4%BB%96%20import%20%E8%AF%AD%E5%8F%A5%0A%0A%2F%2F%20%E5%AF%BC%E5%85%A5%20%E8%BF%90%E8%A1%8C%E6%97%B6%20%E7%9A%84%20Vue%0Aimport%20Vue%20from%20%26%2339%3B.%2Fruntime%2Findex%26%2339%3B%0A%0A%2F%2F%20...%20%E5%85%B6%E4%BB%96%20import%20%E8%AF%AD%E5%8F%A5%0A%0A%2F%2F%20%E4%BB%8E%20.%2Fcompiler%2Findex.js%20%E6%96%87%E4%BB%B6%E5%AF%BC%E5%85%A5%20compileToFunctions%0Aimport%20%7B%20compileToFunctions%20%7D%20from%20%26%2339%3B.%2Fcompiler%2Findex%26%2339%3B%0A%0A%2F%2F%20%E6%A0%B9%E6%8D%AE%20id%20%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0%E7%9A%84%20innerHTML%0Aconst%20idToTemplate%20%3D%20cached(id%20%3D%26gt%3B%20%7B%0A%20%20const%20el%20%3D%20query(id)%0A%20%20return%20el%20%26amp%3B%26amp%3B%20el.innerHTML%0A%7D)%0A%0A%2F%2F%20%E4%BD%BF%E7%94%A8%20mount%20%E5%8F%98%E9%87%8F%E7%BC%93%E5%AD%98%20Vue.prototype.%24mount%20%E6%96%B9%E6%B3%95%0Aconst%20mount%20%3D%20Vue.prototype.%24mount%0A%2F%2F%20%E9%87%8D%E5%86%99%20Vue.prototype.%24mount%20%E6%96%B9%E6%B3%95%0AVue.prototype.%24mount%20%3D%20function%20(%0A%20%20el%3F%3A%20string%20%7C%20Element%2C%0A%20%20hydrating%3F%3A%20boolean%0A)%3A%20Component%20%7B%0A%20%20%2F%2F%20...%20%E5%87%BD%E6%95%B0%E4%BD%93%E7%9C%81%E7%95%A5%0A%7D%0A%0A%2F**%0A%20*%20%E8%8E%B7%E5%8F%96%E5%85%83%E7%B4%A0%E7%9A%84%20outerHTML%0A%20*%2F%0Afunction%20getOuterHTML%20(el%3A%20Element)%3A%20string%20%7B%0A%20%20if%20(el.outerHTML)%20%7B%0A%20%20%20%20return%20el.outerHTML%0A%20%20%7D%20else%20%7B%0A%20%20%20%20const%20container%20%3D%20document.createElement(%26%2339%3Bdiv%26%2339%3B)%0A%20%20%20%20container.appendChild(el.cloneNode(true))%0A%20%20%20%20return%20container.innerHTML%0A%20%20%7D%0A%7D%0A%0A%2F%2F%20%E5%9C%A8%20Vue%20%E4%B8%8A%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%85%A8%E5%B1%80API%20%60Vue.compile%60%20%E5%85%B6%E5%80%BC%E4%B8%BA%E4%B8%8A%E9%9D%A2%E5%AF%BC%E5%85%A5%E8%BF%9B%E6%9D%A5%E7%9A%84%20compileToFunctions%0AVue.compile%20%3D%20compileToFunctions%0A%0A%2F%2F%20%E5%AF%BC%E5%87%BA%20Vue%0Aexport%20default%20Vue%3C%2Fcode%3E%3C%2Fpre%3E%3Cp%3E%E4%B8%8A%E9%9D%A2%E4%BB%A3%E7%A0%81%E6%98%AF%E7%AE%80%E5%8C%96%E8%BF%87%E7%9A%84%EF%BC%8C%E4%BD%86%E6%98%AF%E4%BF%9D%E7%95%99%E4%BA%86%E6%89%80%E6%9C%89%E9%87%8D%E8%A6%81%E7%9A%84%E9%83%A8%E5%88%86%EF%BC%8C%E8%AF%A5%E6%96%87%E4%BB%B6%E7%9A%84%E5%BC%80%E5%A7%8B%E6%98%AF%E4%B8%80%E5%A0%86%20import%20%E8%AF%AD%E5%8F%A5%EF%BC%8C%E5%85%B6%E4%B8%AD%E9%87%8D%E8%A6%81%E7%9A%84%E4%B8%A4%E5%8F%A5%20import%20%E8%AF%AD%E5%8F%A5%E5%B0%B1%E6%98%AF%E4%B8%8A%E9%9D%A2%E4%BB%A3%E7%A0%81%E4%B8%AD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%82%A3%E4%B8%A4%E5%8F%A5%EF%BC%8C%E4%B8%80%E5%8F%A5%E6%98%AF%E5%AF%BC%E5%85%A5%E8%BF%90%E8%A1%8C%E6%97%B6%E7%9A%84%20Vue%EF%BC%8C%E4%B8%80%E5%8F%A5%E6%98%AF%E4%BB%8E%20.%2Fcompiler%2Findex.js%20%E6%96%87%E4%BB%B6%E5%AF%BC%E5%85%A5%20compileToFunctions%EF%BC%8C%E5%B9%B6%E4%B8%94%E5%9C%A8%E5%80%92%E6%95%B0%E7%AC%AC%E4%BA%8C%E5%8F%A5%E4%BB%A3%E7%A0%81%E5%B0%86%E5%85%B6%E6%B7%BB%E5%8A%A0%E5%88%B0%20Vue.compile%20%E4%B8%8A%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E7%84%B6%E5%90%8E%E5%AE%9A%E4%B9%89%E4%BA%86%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%20idToTemplate%EF%BC%8C%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E7%9A%84%E4%BD%9C%E7%94%A8%E6%98%AF%EF%BC%9A%E8%8E%B7%E5%8F%96%E6%8B%A5%E6%9C%89%E6%8C%87%E5%AE%9A%20id%20%E5%B1%9E%E6%80%A7%E7%9A%84%E5%85%83%E7%B4%A0%E7%9A%84%20innerHTML%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E4%B9%8B%E5%90%8E%E7%BC%93%E5%AD%98%E4%BA%86%E8%BF%90%E8%A1%8C%E6%97%B6%E7%89%88%20Vue%20%E7%9A%84%20Vue.prototype.%24mount%20%E6%96%B9%E6%B3%95%EF%BC%8C%E5%B9%B6%E4%B8%94%E8%BF%9B%E8%A1%8C%E4%BA%86%E9%87%8D%E5%86%99%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E6%8E%A5%E4%B8%8B%E6%9D%A5%E5%8F%88%E5%AE%9A%E4%B9%89%E4%BA%86%20getOuterHTML%20%E5%87%BD%E6%95%B0%EF%BC%8C%E7%94%A8%E6%9D%A5%E8%8E%B7%E5%8F%96%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%20outerHTML%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AA%E6%96%87%E4%BB%B6%E8%BF%90%E8%A1%8C%E4%B8%8B%E6%9D%A5%EF%BC%8C%E5%AF%B9%20Vue%20%E7%9A%84%E5%BD%B1%E5%93%8D%E6%9C%89%E4%B8%A4%E4%B8%AA%EF%BC%8C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%BD%B1%E5%93%8D%E6%98%AF%E5%AE%83%E9%87%8D%E5%86%99%E4%BA%86%20Vue.prototype.%24mount%20%E6%96%B9%E6%B3%95%EF%BC%9B%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%BD%B1%E5%93%8D%E6%98%AF%E6%B7%BB%E5%8A%A0%E4%BA%86%20Vue.compile%20%E5%85%A8%E5%B1%80API%EF%BC%8C%E7%9B%AE%E5%89%8D%E6%88%91%E4%BB%AC%E5%8F%AA%E9%9C%80%E8%A6%81%E8%8E%B7%E5%8F%96%E8%BF%99%E4%BA%9B%E4%BF%A1%E6%81%AF%E5%B0%B1%E8%B6%B3%E5%A4%9F%E4%BA%86%EF%BC%8C%E6%88%91%E4%BB%AC%E6%8A%8A%E8%BF%99%E4%BA%9B%E5%BD%B1%E5%93%8D%E5%90%8C%E6%A0%B7%E6%9B%B4%E6%96%B0%E5%88%B0%20%E9%99%84%E5%BD%95%20%E5%AF%B9%E5%BA%94%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%AD%EF%BC%8C%E4%B9%9F%E9%83%BD%E5%8F%AF%E4%BB%A5%E6%9F%A5%E7%9C%8B%E7%9A%84%E5%88%B0%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E5%88%B0%E8%BF%99%E9%87%8C%EF%BC%8CVue%20%E7%A5%9E%E7%A7%98%E9%9D%A2%E5%85%B7%E4%B8%8B%E7%9C%9F%E5%AE%9E%E7%9A%84%E6%A0%B7%E5%AD%90%E5%9F%BA%E6%9C%AC%E5%B7%B2%E7%BB%8F%E5%B1%95%E7%8E%B0%E5%87%BA%E6%9D%A5%E4%BA%86%E3%80%82%E7%8E%B0%E5%9C%A8%E6%B7%B1%E5%91%BC%E5%90%B8%EF%BC%8C%E7%BB%A7%E7%BB%AD%E6%88%91%E4%BB%AC%E7%9A%84%E6%8E%A2%E7%B4%A2%E5%90%A7%EF%BC%81%3C%2Fp%3E%0A"})},ykn2:function(E,A,B){(window.__NEXT_P=window.__NEXT_P||[]).push(["/365105510",function(){var E=B("m5R+");return{page:E.default||E}}])}},[["ykn2",1,0]]]);