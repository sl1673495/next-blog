(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{M9Uu:function(E,e,A){"use strict";A.r(e);var B=A("4fS0");e.default=Object(B.a)({blog:{url:"https://api.github.com/repos/sl1673495/blogs/issues/11",repository_url:"https://api.github.com/repos/sl1673495/blogs",labels_url:"https://api.github.com/repos/sl1673495/blogs/issues/11/labels{/name}",comments_url:"https://api.github.com/repos/sl1673495/blogs/issues/11/comments",events_url:"https://api.github.com/repos/sl1673495/blogs/issues/11/events",html_url:"https://github.com/sl1673495/blogs/issues/11",id:383686801,node_id:"MDU6SXNzdWUzODM2ODY4MDE=",number:11,title:"Vue\u6e90\u7801\u5b66\u4e60\uff086\uff09 nextTick",user:{login:"sl1673495",id:23615778,node_id:"MDQ6VXNlcjIzNjE1Nzc4",avatar_url:"https://avatars1.githubusercontent.com/u/23615778?v=4",gravatar_id:"",url:"https://api.github.com/users/sl1673495",html_url:"https://github.com/sl1673495",followers_url:"https://api.github.com/users/sl1673495/followers",following_url:"https://api.github.com/users/sl1673495/following{/other_user}",gists_url:"https://api.github.com/users/sl1673495/gists{/gist_id}",starred_url:"https://api.github.com/users/sl1673495/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/sl1673495/subscriptions",organizations_url:"https://api.github.com/users/sl1673495/orgs",repos_url:"https://api.github.com/users/sl1673495/repos",events_url:"https://api.github.com/users/sl1673495/events{/privacy}",received_events_url:"https://api.github.com/users/sl1673495/received_events",type:"User",site_admin:!1},labels:[{id:1525733797,node_id:"MDU6TGFiZWwxNTI1NzMzNzk3",url:"https://api.github.com/repos/sl1673495/blogs/labels/Vue",name:"Vue",color:"c2e0c6",default:!1}],state:"open",locked:!1,assignee:null,assignees:[],milestone:null,comments:0,created_at:"2018-11-23T02:16:39Z",updated_at:"2019-08-29T09:40:26Z",closed_at:null,author_association:"OWNER"},html:"%3Cp%3Evue%E5%9C%A8%E8%A7%86%E5%9B%BE%E6%9B%B4%E6%96%B0%E7%9A%84%E6%97%B6%E5%80%99%E6%98%AF%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%EF%BC%8C%E8%BF%99%E4%B8%AA%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%B7%B2%E7%BB%8F%E7%9F%A5%E9%81%93%E4%BA%86%EF%BC%8C%E8%BF%99%E4%B9%88%E5%81%9A%E7%9A%84%E5%A5%BD%E5%A4%84%E6%9C%89%E5%BE%88%E5%A4%9A%EF%BC%8C%E4%BB%8A%E5%A4%A9%E6%88%91%E4%BB%AC%E5%B0%B1%E6%9D%A5%E7%9C%8B%E7%9C%8Bvue%E6%98%AF%E5%A6%82%E4%BD%95%E8%B0%83%E5%BA%A6%E8%BF%99%E4%B8%AA%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97%E5%8E%BB%E4%BC%98%E5%8C%96%E6%80%A7%E8%83%BD%E7%9A%84%E3%80%82%3C%2Fp%3E%0A%3Cp%3Esrc%2Fcore%2Futil%2Fnext-tick.js%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%2F*%20%40flow%20*%2F%0A%2F*%20globals%20MessageChannel%20*%2F%0A%0Aimport%20%7B%20noop%20%7D%20from%20%26%2339%3Bshared%2Futil%26%2339%3B%0Aimport%20%7B%20handleError%20%7D%20from%20%26%2339%3B.%2Ferror%26%2339%3B%0Aimport%20%7B%20isIOS%2C%20isNative%20%7D%20from%20%26%2339%3B.%2Fenv%26%2339%3B%0A%0Aconst%20callbacks%20%3D%20%5B%5D%0Alet%20pending%20%3D%20false%0A%0Afunction%20flushCallbacks%20()%20%7B%0A%20%20pending%20%3D%20false%0A%20%20const%20copies%20%3D%20callbacks.slice(0)%0A%20%20callbacks.length%20%3D%200%0A%20%20for%20(let%20i%20%3D%200%3B%20i%20%26lt%3B%20copies.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20copies%5Bi%5D()%0A%20%20%7D%0A%7D%0A%0A%2F%2F%20Here%20we%20have%20async%20deferring%20wrappers%20using%20both%20microtasks%20and%20(macro)%20tasks.%0A%2F%2F%20In%20%26lt%3B%202.4%20we%20used%20microtasks%20everywhere%2C%20but%20there%20are%20some%20scenarios%20where%0A%2F%2F%20microtasks%20have%20too%20high%20a%20priority%20and%20fire%20in%20between%20supposedly%0A%2F%2F%20sequential%20events%20(e.g.%20%234521%2C%20%236690)%20or%20even%20between%20bubbling%20of%20the%20same%0A%2F%2F%20event%20(%236566).%20However%2C%20using%20(macro)%20tasks%20everywhere%20also%20has%20subtle%20problems%0A%2F%2F%20when%20state%20is%20changed%20right%20before%20repaint%20(e.g.%20%236813%2C%20out-in%20transitions).%0A%2F%2F%20Here%20we%20use%20microtask%20by%20default%2C%20but%20expose%20a%20way%20to%20force%20(macro)%20task%20when%0A%2F%2F%20needed%20(e.g.%20in%20event%20handlers%20attached%20by%20v-on).%0Alet%20microTimerFunc%0Alet%20macroTimerFunc%0Alet%20useMacroTask%20%3D%20false%0A%0A%2F%2F%20Determine%20(macro)%20task%20defer%20implementation.%0A%2F%2F%20Technically%20setImmediate%20should%20be%20the%20ideal%20choice%2C%20but%20it%26%2339%3Bs%20only%20available%0A%2F%2F%20in%20IE.%20The%20only%20polyfill%20that%20consistently%20queues%20the%20callback%20after%20all%20DOM%0A%2F%2F%20events%20triggered%20in%20the%20same%20loop%20is%20by%20using%20MessageChannel.%0A%2F*%20istanbul%20ignore%20if%20*%2F%0Aif%20(typeof%20setImmediate%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20isNative(setImmediate))%20%7B%0A%20%20macroTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20setImmediate(flushCallbacks)%0A%20%20%7D%0A%7D%20else%20if%20(typeof%20MessageChannel%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20(%0A%20%20isNative(MessageChannel)%20%7C%7C%0A%20%20%2F%2F%20PhantomJS%0A%20%20MessageChannel.toString()%20%3D%3D%3D%20%26%2339%3B%5Bobject%20MessageChannelConstructor%5D%26%2339%3B%0A))%20%7B%0A%20%20const%20channel%20%3D%20new%20MessageChannel()%0A%20%20const%20port%20%3D%20channel.port2%0A%20%20channel.port1.onmessage%20%3D%20flushCallbacks%0A%20%20macroTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20port.postMessage(1)%0A%20%20%7D%0A%7D%20else%20%7B%0A%20%20%2F*%20istanbul%20ignore%20next%20*%2F%0A%20%20macroTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20setTimeout(flushCallbacks%2C%200)%0A%20%20%7D%0A%7D%0A%0A%2F%2F%20Determine%20microtask%20defer%20implementation.%0A%2F*%20istanbul%20ignore%20next%2C%20%24flow-disable-line%20*%2F%0Aif%20(typeof%20Promise%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20isNative(Promise))%20%7B%0A%20%20const%20p%20%3D%20Promise.resolve()%0A%20%20microTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20p.then(flushCallbacks)%0A%20%20%20%20%2F%2F%20in%20problematic%20UIWebViews%2C%20Promise.then%20doesn%26%2339%3Bt%20completely%20break%2C%20but%0A%20%20%20%20%2F%2F%20it%20can%20get%20stuck%20in%20a%20weird%20state%20where%20callbacks%20are%20pushed%20into%20the%0A%20%20%20%20%2F%2F%20microtask%20queue%20but%20the%20queue%20isn%26%2339%3Bt%20being%20flushed%2C%20until%20the%20browser%0A%20%20%20%20%2F%2F%20needs%20to%20do%20some%20other%20work%2C%20e.g.%20handle%20a%20timer.%20Therefore%20we%20can%0A%20%20%20%20%2F%2F%20%26quot%3Bforce%26quot%3B%20the%20microtask%20queue%20to%20be%20flushed%20by%20adding%20an%20empty%20timer.%0A%20%20%20%20if%20(isIOS)%20setTimeout(noop)%0A%20%20%7D%0A%7D%20else%20%7B%0A%20%20%2F%2F%20fallback%20to%20macro%0A%20%20microTimerFunc%20%3D%20macroTimerFunc%0A%7D%0A%0A%2F**%0A%20*%20Wrap%20a%20function%20so%20that%20if%20any%20code%20inside%20triggers%20state%20change%2C%0A%20*%20the%20changes%20are%20queued%20using%20a%20(macro)%20task%20instead%20of%20a%20microtask.%0A%20*%2F%0Aexport%20function%20withMacroTask%20(fn%3A%20Function)%3A%20Function%20%7B%0A%20%20return%20fn._withTask%20%7C%7C%20(fn._withTask%20%3D%20function%20()%20%7B%0A%20%20%20%20useMacroTask%20%3D%20true%0A%20%20%20%20const%20res%20%3D%20fn.apply(null%2C%20arguments)%0A%20%20%20%20useMacroTask%20%3D%20false%0A%20%20%20%20return%20res%0A%20%20%7D)%0A%7D%0A%0Aexport%20function%20nextTick%20(cb%3F%3A%20Function%2C%20ctx%3F%3A%20Object)%20%7B%0A%20%20let%20_resolve%0A%20%20callbacks.push(()%20%3D%26gt%3B%20%7B%0A%20%20%20%20if%20(cb)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20cb.call(ctx)%0A%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20handleError(e%2C%20ctx%2C%20%26%2339%3BnextTick%26%2339%3B)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20if%20(_resolve)%20%7B%0A%20%20%20%20%20%20_resolve(ctx)%0A%20%20%20%20%7D%0A%20%20%7D)%0A%20%20if%20(!pending)%20%7B%0A%20%20%20%20pending%20%3D%20true%0A%20%20%20%20if%20(useMacroTask)%20%7B%0A%20%20%20%20%20%20macroTimerFunc()%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20microTimerFunc()%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%2F%2F%20%24flow-disable-line%0A%20%20if%20(!cb%20%26amp%3B%26amp%3B%20typeof%20Promise%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20_resolve%20%3D%20resolve%0A%20%20%20%20%7D)%0A%20%20%7D%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E9%A6%96%E5%85%88%E8%BF%99%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E5%BC%80%E5%A4%B4%E5%AE%9A%E4%B9%89%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Econst%20callbacks%20%3D%20%5B%5D%0Alet%20pending%20%3D%20false%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3Ecallbacks%E7%94%A8%E6%9D%A5%E5%AD%98%E6%94%BE%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E5%BC%82%E6%AD%A5%E6%89%A7%E8%A1%8C%E7%9A%84%E5%87%BD%E6%95%B0%E9%98%9F%E5%88%97%EF%BC%8C%3Cbr%3Epending%E7%94%A8%E6%9D%A5%E6%A0%87%E8%AE%B0%E6%98%AF%E5%90%A6%E5%B7%B2%E7%BB%8F%E5%91%BD%E4%BB%A4callbacks%E5%9C%A8%E4%B8%8B%E4%B8%AAtick%E5%85%A8%E9%83%A8%E6%89%A7%E8%A1%8C%EF%BC%8C%E9%98%B2%E6%AD%A2%E5%A4%9A%E6%AC%A1%E8%B0%83%E7%94%A8%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22%E5%85%A5%E5%8F%A3%22%3E%E5%85%A5%E5%8F%A3%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eexport%20function%20nextTick%20(cb%3F%3A%20Function%2C%20ctx%3F%3A%20Object)%20%7B%0A%20%20let%20_resolve%0A%20%20callbacks.push(()%20%3D%26gt%3B%20%7B%0A%20%20%20%20if%20(cb)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20cb.call(ctx)%0A%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20handleError(e%2C%20ctx%2C%20%26%2339%3BnextTick%26%2339%3B)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20if%20(_resolve)%20%7B%0A%20%20%20%20%20%20_resolve(ctx)%0A%20%20%20%20%7D%0A%20%20%7D)%0A%20%20if%20(!pending)%20%7B%0A%20%20%20%20pending%20%3D%20true%0A%20%20%20%20if%20(useMacroTask)%20%7B%0A%20%20%20%20%20%20macroTimerFunc()%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20microTimerFunc()%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%2F%2F%20%24flow-disable-line%0A%20%20if%20(!cb%20%26amp%3B%26amp%3B%20typeof%20Promise%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B)%20%7B%0A%20%20%20%20return%20new%20Promise(resolve%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20_resolve%20%3D%20resolve%0A%20%20%20%20%7D)%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%88%91%E4%BB%AC%E5%9C%A8%E5%A4%96%E9%83%A8%E8%B0%83%E7%94%A8%E9%83%BD%E6%98%AFnextTick(()%20%3D%26gt%3B%20%7B%20%2F%2F%20doSth%20%7D)%3Cbr%3E%E8%BF%99%E6%A0%B7%E5%AD%90%E5%8E%BB%E4%BD%BF%E7%94%A8%EF%BC%8C%20%E6%8A%8A%E4%B8%80%E4%B8%AAcb%E5%87%BD%E6%95%B0%E4%BC%A0%E5%85%A5nextTick%E5%87%BD%E6%95%B0%E4%B8%AD%EF%BC%8C%3Cbr%3EnextTick%E5%87%BD%E6%95%B0%E9%A6%96%E5%85%88%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Ecallbacks.push(()%20%3D%26gt%3B%20%7B%0A%20%20%20%20if%20(cb)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20cb.call(ctx)%0A%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20handleError(e%2C%20ctx%2C%20%26%2339%3BnextTick%26%2339%3B)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20if%20(_resolve)%20%7B%0A%20%20%20%20%20%20_resolve(ctx)%0A%20%20%20%20%7D%0A%20%20%7D)%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%8A%8A%E6%88%91%E4%BB%AC%E7%9A%84cb%E5%87%BD%E6%95%B0%E5%8C%85%E8%A3%85%E4%BA%86%E4%B8%80%E5%B1%82%EF%BC%8C%E5%81%9A%E4%BA%86%E5%88%A4%E6%96%AD%EF%BC%8C%E8%BF%99%E6%98%AF%E4%B8%BA%E4%BA%86nextTick%E5%8F%AF%E4%BB%A5%E7%94%A8then%E6%96%B9%E6%B3%95%EF%BC%8C%E6%88%91%E4%BB%AC%E5%B0%B1%E6%9A%82%E4%B8%94%E5%BD%93%E5%81%9A%E7%9B%B4%E6%8E%A5%E6%8A%8Acb%E5%87%BD%E6%95%B0push%E8%BF%9Bcallbacks%E9%98%9F%E5%88%97%E5%90%A7%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E6%98%AFmicroTask%E6%98%AF%E5%9C%A8%E5%90%8C%E6%AD%A5%E6%96%B9%E6%B3%95%E5%AE%8C%E6%88%90%E7%9A%84%E6%9C%AB%E5%B0%BE%E5%8E%BB%E6%89%A7%E8%A1%8C%EF%BC%8C%20macroTask%E5%88%99%E6%98%AF%E7%9B%B4%E6%8E%A5%E6%98%AF%E5%88%B0%E4%B8%8B%E4%B8%80%E4%B8%AAtask%E4%BA%86%EF%BC%8Ctask%E4%B9%8B%E9%97%B4%E5%8F%88%E5%8F%AF%E8%83%BD%E4%BC%9A%E5%8C%85%E5%90%AB%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E9%87%8D%E6%B8%B2%E6%9F%93%EF%BC%8CsetTimeout%E9%BB%98%E8%AE%A4%E7%9A%844ms%E5%BB%B6%E8%BF%9F%E7%AD%89%E7%AD%89...%E4%BB%8E%E6%80%A7%E8%83%BD%E5%92%8C%E6%97%B6%E6%95%88%E6%80%A7%E6%9D%A5%E7%9C%8B%E9%83%BD%E6%98%AFmicroTask%E6%9B%B4%E4%B8%BA%E4%BC%98%E5%85%88%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E5%85%B3%E4%BA%8EmacroTask%E5%92%8CmicroTask%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8D%E6%98%AF%E6%9C%AC%E6%96%87%E7%9A%84%E9%87%8D%E7%82%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%9C%89%E9%9C%80%E8%A6%81%E7%9A%84%E5%B0%8F%E4%BC%99%E4%BC%B4%E5%8F%AF%E4%BB%A5%E5%8E%BB%E6%9F%A5%E9%98%85%E4%B8%80%E4%B8%8B%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84eventLoop%E7%9B%B8%E5%85%B3%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E9%9A%8F%E5%90%8E%E5%A6%82%E6%9E%9Cpending%E7%9A%84%E6%A0%87%E5%BF%97%E4%BD%8D%E8%BF%98%E6%B2%A1%E6%9C%89%E7%BD%AE%E4%B8%BAtrue%EF%BC%8C%E5%B0%B1%E6%8A%8Apending%E7%BD%AE%E4%B8%BAtrue%EF%BC%8C%3Cbr%3E%E5%B9%B6%E4%B8%94%E5%BC%80%E5%A7%8B%E6%A0%B9%E6%8D%AEuseMacroTask%E8%BF%99%E4%B8%AA%E6%A0%87%E5%BF%97%E5%88%A4%E6%96%AD%20nextTick%E6%98%AF%E9%80%9A%E8%BF%87macroTask%E5%AE%9E%E7%8E%B0%E8%BF%98%E6%98%AFmicroTask%E5%AE%9E%E7%8E%B0%EF%BC%8C%3Cbr%3E%E5%B9%B6%E4%B8%94%E5%8E%BB%E8%B0%83%E7%94%A8%E8%BF%99%E4%B8%AAtask%EF%BC%8C%E8%BF%99%E6%A0%B7%E5%9C%A8%E4%B8%8B%E4%B8%80%E4%B8%AAtick%E5%B0%B1%E4%BC%9A%E5%8E%BB%E6%8A%8Acallbacks%E9%87%8C%E7%9A%84%E6%96%B9%E6%B3%95%E5%85%A8%E9%83%A8%E6%89%A7%E8%A1%8C%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20if%20(!pending)%20%7B%0A%20%20%20%20pending%20%3D%20true%0A%20%20%20%20if%20(useMacroTask)%20%7B%0A%20%20%20%20%20%20macroTimerFunc()%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20microTimerFunc()%0A%20%20%20%20%7D%0A%20%20%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Ch3%20id%3D%22%E5%88%A4%E6%96%ADmacrotask%E5%92%8Cmicrotask%E8%AF%A5%E7%94%A8%E4%BB%80%E4%B9%88api%22%3E%E5%88%A4%E6%96%ADmacroTask%E5%92%8CmicroTask%E8%AF%A5%E7%94%A8%E4%BB%80%E4%B9%88api%3C%2Fh3%3E%0A%3Cp%3E%E5%9B%9E%E5%88%B0%E8%BF%99%E4%B8%AA%E6%96%87%E4%BB%B6%E7%9A%84%E4%B8%8A%E5%8D%8A%E9%83%A8%E5%88%86%20%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Elet%20microTimerFunc%0Alet%20macroTimerFunc%0Alet%20useMacroTask%20%3D%20false%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E9%A6%96%E5%85%88%E5%AE%9A%E4%B9%89%E4%BA%863%E4%B8%AA%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%EF%BC%8C%20%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0useMacroTask%E9%BB%98%E8%AE%A4%E4%B8%BAfalse%EF%BC%8C%E6%8E%A5%E4%B8%8B%E6%9D%A5%E5%B0%B1%E8%A6%81%E5%BC%80%E5%A7%8B%E6%A0%B9%E6%8D%AE%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84api%E5%85%BC%E5%AE%B9%E6%80%A7%E5%88%A4%E6%96%AD%EF%BC%8C%E7%94%A8%E4%BB%80%E4%B9%88%E6%9D%A5%E5%AE%9E%E7%8E%B0microTimerFunc%E5%92%8CmacroTimerFunc%3C%2Fp%3E%0A%3Cp%3E%E6%8E%A5%E4%B8%8B%E6%9D%A5vue%E5%BC%80%E5%A7%8B%E5%88%A4%E6%96%AD%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0macroTimerFunc%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(typeof%20setImmediate%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20isNative(setImmediate))%20%7B%0A%20%20macroTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20setImmediate(flushCallbacks)%0A%20%20%7D%0A%7D%20else%20if%20(typeof%20MessageChannel%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20(%0A%20%20isNative(MessageChannel)%20%7C%7C%0A%20%20%2F%2F%20PhantomJS%0A%20%20MessageChannel.toString()%20%3D%3D%3D%20%26%2339%3B%5Bobject%20MessageChannelConstructor%5D%26%2339%3B%0A))%20%7B%0A%20%20const%20channel%20%3D%20new%20MessageChannel()%0A%20%20const%20port%20%3D%20channel.port2%0A%20%20channel.port1.onmessage%20%3D%20flushCallbacks%0A%20%20macroTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20port.postMessage(1)%0A%20%20%7D%0A%7D%20else%20%7B%0A%20%20%2F*%20istanbul%20ignore%20next%20*%2F%0A%20%20macroTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20setTimeout(flushCallbacks%2C%200)%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%AE%B5%E6%96%B9%E6%B3%95%E5%B0%B1%E6%98%AF%E5%88%A4%E6%96%ADmacroTask%E4%BC%98%E5%85%88%E5%8E%BB%E4%BD%BF%E7%94%A8setImmediate%EF%BC%8C%20%E5%85%B6%E6%AC%A1%E6%98%AFMessageChannel%EF%BC%8C%E6%9C%80%E6%AC%A1%E6%98%AFsetTimeout%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E6%8E%A5%E4%B8%8B%E6%9D%A5%E5%8E%BB%E5%88%A4%E6%96%ADmicroTask%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(typeof%20Promise%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20isNative(Promise))%20%7B%0A%20%20const%20p%20%3D%20Promise.resolve()%0A%20%20microTimerFunc%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20p.then(flushCallbacks)%0A%20%20%20%20if%20(isIOS)%20setTimeout(noop)%0A%20%20%7D%0A%7D%20else%20%7B%0A%20%20microTimerFunc%20%3D%20macroTimerFunc%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3EmicroTask%E5%8F%AA%E6%9C%89Promise%E4%B8%80%E4%B8%AA%E9%80%89%E9%A1%B9%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%B5%8F%E8%A7%88%E5%99%A8%E6%B2%A1%E6%9C%89%E6%8F%90%E4%BE%9Bpromise%E7%9A%84api%20%E5%B0%B1%E5%8F%AA%E8%83%BD%E9%99%8D%E7%BA%A7%E4%B8%BA%E4%B8%8A%E9%9D%A2%E5%88%A4%E6%96%AD%E7%9A%84macroTimerFunc%E4%BA%86%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22%E5%9C%A8%E4%B8%8B%E4%B8%AAtick%E6%89%A7%E8%A1%8C%E5%BC%82%E6%AD%A5%E9%98%9F%E5%88%97%22%3E%E5%9C%A8%E4%B8%8B%E4%B8%AAtick%E6%89%A7%E8%A1%8C%E5%BC%82%E6%AD%A5%E9%98%9F%E5%88%97%3C%2Fh3%3E%0A%3Cp%3E%E6%97%A0%E8%AE%BA%E6%98%AFmicroTask%E8%BF%98%E6%98%AFmacroTask%20%E4%BC%A0%E5%85%A5%E7%9A%84%E6%96%B9%E6%B3%95%E9%83%BD%E6%98%AFflushCallbacks%EF%BC%8C%E9%82%A3%E8%BF%99%E4%B8%AA%E8%82%AF%E5%AE%9A%E5%B0%B1%E6%98%AF%E6%89%A7%E8%A1%8Ccallbacks%E7%9A%84%E6%96%B9%E6%B3%95%E4%BA%86%EF%BC%8C%E6%88%91%E4%BB%AC%E6%9D%A5%E7%9C%8B%E7%9C%8B%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E7%9A%84%E5%AE%9A%E4%B9%89%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Efunction%20flushCallbacks%20()%20%7B%0A%20%20pending%20%3D%20false%0A%20%20const%20copies%20%3D%20callbacks.slice(0)%0A%20%20callbacks.length%20%3D%200%0A%20%20for%20(let%20i%20%3D%200%3B%20i%20%26lt%3B%20copies.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20copies%5Bi%5D()%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E5%BE%88%E7%AE%80%E7%9F%AD%EF%BC%8C%3Cbr%3E%E6%8A%8Apendding%E7%BD%AE%E4%B8%BAfalse%EF%BC%8C%E6%8A%8Acallbacks%E6%8B%B7%E8%B4%9D%E4%B8%80%E4%BB%BD%E5%B9%B6%E4%B8%94%E6%8A%8Acallbacks%E6%B8%85%E7%A9%BA%3Cbr%3E%E8%BF%99%E6%98%AF%E4%B8%BA%E4%BA%86%E5%9C%A8nextTick%E7%9A%84%E6%96%B9%E6%B3%95%E9%87%8C%E5%86%8D%E6%AC%A1%E8%B0%83%E7%94%A8nextTick%EF%BC%8C%E8%83%BD%E5%A4%9F%E6%96%B0%E5%BC%80%E4%B8%80%E4%B8%AA%E5%BC%82%E6%AD%A5%E9%98%9F%E5%88%97%EF%BC%8C%3Cbr%3E%E7%84%B6%E5%90%8E%E5%BE%AA%E7%8E%AF%E8%BF%99%E4%B8%AA%E6%8B%B7%E8%B4%9Dcallbacks%E9%87%8C%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%8C%20%E4%B8%80%E6%AC%A1%E6%80%A7%E6%89%A7%E8%A1%8C%E5%AE%8C%E6%AF%95%EF%BC%8C%3C%2Fp%3E%0A%3Cp%3Evue%E7%9A%84%E5%BC%82%E6%AD%A5%E9%98%9F%E5%88%97%E8%B0%83%E5%BA%A6%E5%B0%B1%E6%98%AF%E8%BF%99%E6%A0%B7%E5%AE%9E%E7%8E%B0%E7%9A%84%EF%BC%8C%3Cbr%3E%E5%B8%8C%E6%9C%9B%E5%9C%A8%E5%A4%A7%E5%AE%B6%E5%9C%A8%E5%B7%A5%E4%BD%9C%E4%B8%AD%E4%B9%9F%E8%83%BD%E8%BF%90%E7%94%A8%E8%BF%99%E7%A7%8D%E6%80%9D%E6%83%B3%EF%BC%8C%20%E6%8A%8A%E5%BD%B1%E5%93%8D%E6%80%A7%E8%83%BD%E8%80%8C%E4%B8%94%E8%83%BD%E5%90%88%E5%B9%B6%E7%9A%84%E6%96%B9%E6%B3%95%E5%BC%82%E6%AD%A5%E5%90%88%E5%B9%B6%E6%89%A7%E8%A1%8C%E3%80%82%3C%2Fp%3E%0A"})},RXNp:function(E,e,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/383686801",function(){var E=A("M9Uu");return{page:E.default||E}}])}},[["RXNp",1,0]]]);