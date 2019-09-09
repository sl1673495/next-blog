
      import withMd from '../lib/with-md'
      import '../asset/hljs.css'
      import '../asset/reset.css'
      import '../asset/index.css'

      export default withMd({
        title: 'Vue源码学习（5）观察属性watch',
        html: `%3Cp%3E%E4%B8%8A%E4%B8%80%E7%AF%87%E4%BB%8B%E7%BB%8Dcomputed%E7%9A%84%E6%96%87%E7%AB%A0%E8%AE%B2%E5%88%B0%E4%BA%86%EF%BC%8C%E8%89%AF%E5%A5%BD%E7%9A%84%E8%AE%BE%E8%AE%A1%E5%AF%B9%E4%BA%8E%E5%8A%9F%E8%83%BD%E7%9A%84%E5%AE%9E%E7%8E%B0%E9%9D%9E%E5%B8%B8%E6%9C%89%E5%B8%AE%E5%8A%A9%EF%BC%8Ccomputed%E7%9A%84%E6%A0%B8%E5%BF%83%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E6%98%AF%E8%AE%A1%E7%AE%97watcher%EF%BC%8C%E9%82%A3%E4%B9%88watch%E5%85%B6%E5%AE%9E%E4%B9%9F%E6%98%AF%E5%9F%BA%E4%BA%8Ewatcher%E6%9D%A5%E5%AE%9E%E7%8E%B0%E7%9A%84%EF%BC%8C%E6%88%91%E4%BB%AC%E8%BF%98%E6%98%AF%E4%BB%8EinitWatch%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9C%8B%E8%B5%B7%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22initwatch%22%3EinitWatch%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Efunction%20initWatch%20(vm%2C%20watch)%20%7B%0A%20%20for%20(var%20key%20in%20watch)%20%7B%0A%20%20%20%20%2F%2F%20%E9%81%8D%E5%8E%86%E7%94%A8%E6%88%B7%E5%AE%9A%E4%B9%89%E7%9A%84watch%E5%B1%9E%E6%80%A7%20%0A%20%20%20%20var%20handler%20%3D%20watch%5Bkey%5D%3B%0A%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9Cwatch%E6%98%AF%E6%95%B0%E7%BB%84%20%E5%B0%B1%E5%BE%AA%E7%8E%AFcreateWatcher%0A%20%20%20%20if%20(Array.isArray(handler))%20%7B%0A%20%20%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%26lt%3B%20handler.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20createWatcher(vm%2C%20key%2C%20handler%5Bi%5D)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20%E5%90%A6%E5%88%99%E7%9B%B4%E6%8E%A5createWatcher%0A%20%20%20%20%20%20createWatcher(vm%2C%20key%2C%20handler)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%EF%BC%8C%E5%AF%B9%E4%BA%8E%E7%94%A8%E6%88%B7%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8D%95%E4%B8%AAwatch%E5%B1%9E%E6%80%A7%EF%BC%8C%E6%9C%80%E7%BB%88vue%E8%B0%83%E7%94%A8%E4%BA%86createWatcher%E6%96%B9%E6%B3%95%3C%2Fp%3E%0A%3Ch3%20id%3D%22createwatcher%22%3EcreateWatcher%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Efunction%20createWatcher%20(%0A%20%20vm%2C%0A%20%20expOrFn%2C%0A%20%20handler%2C%0A%20%20options%0A)%20%7B%0A%20%20if%20(isPlainObject(handler))%20%7B%0A%20%20%20%20options%20%3D%20handler%3B%0A%20%20%20%20handler%20%3D%20handler.handler%3B%0A%20%20%7D%0A%20%20if%20(typeof%20handler%20%3D%3D%3D%20%26%2339%3Bstring%26%2339%3B)%20%7B%0A%20%20%20%20handler%20%3D%20vm%5Bhandler%5D%3B%0A%20%20%7D%0A%20%20return%20vm.%24watch(expOrFn%2C%20handler%2C%20options)%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%AE%B5%E4%BB%A3%E7%A0%81%E7%9A%84%E5%BC%80%E5%A4%B4%E5%AF%B9%E5%8F%82%E6%95%B0%E8%BF%9B%E8%A1%8C%E4%BA%86%E8%A7%84%E8%8C%83%E5%8C%96%EF%BC%8C%E5%9B%A0%E4%B8%BAwatch%E6%98%AF%E5%8F%AF%E4%BB%A5%E6%94%AF%E6%8C%81%E5%A4%9A%E7%A7%8D%E5%BD%A2%E5%BC%8F%E7%9A%84%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%7B%0A%20%20%20key%3A%20function()%20%7B%7D%0A%7D%0A%7B%0A%20%20%20key%3A%20%7B%0A%20%20%20%20%20%20handle%3A%20function()%20%7B%7D%2C%0A%20%20%20%20%20%20deep%3A%20true%2C%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%9C%80%E7%BB%88%E8%B0%83%E7%94%A8%E4%BA%86%24watch%EF%BC%8C%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%E6%98%AF%E8%A6%81%E8%A7%82%E6%B5%8B%E7%9A%84key%E6%88%96%E8%80%85%26%2339%3Ba.b.c%26%2339%3B%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F%EF%BC%8Chandler%E6%98%AF%E7%94%A8%E6%88%B7%E5%AE%9A%E4%B9%89%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%EF%BC%8Coptions%E6%98%AF%7Bdeep%3A%20true%7D%E8%BF%99%E6%A0%B7%E7%9A%84watch%E9%85%8D%E7%BD%AE%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20vm.%24watch(expOrFn%2C%20handler%2C%20options)%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Ch3%20id%3D%22watch%22%3E%24watch%3C%2Fh3%3E%0A%3Cp%3E%E5%9C%A8vue%E4%B8%AD%E4%BB%A5%24%E5%BC%80%E5%A4%B4%E7%9A%84api%E4%B8%80%E8%88%AC%E4%B9%9F%E6%8F%90%E4%BE%9B%E7%BB%99%E7%94%A8%E6%88%B7%E5%9C%A8%E5%A4%96%E9%83%A8%E4%BD%BF%E7%94%A8%EF%BC%8C%E6%89%80%E4%BB%A5%E6%88%91%E4%BB%AC%E5%9C%A8%E5%A4%96%E9%83%A8%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E5%87%BD%E6%95%B0%E7%9A%84%E6%96%B9%E5%BC%8F%E5%8E%BB%E8%B0%83%E7%94%A8%24watch%2C%20%E6%AF%94%E5%A6%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Ethis.%24watch(%0A%20%20%26%2339%3Ba%26%2339%3B%2C%20%0A%20%20function()%20%7B%7D%2C%20%0A%20%20%7B%20deep%3A%20true%20%7D%0A)%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%8E%A5%E4%B8%8B%E6%9D%A5%E6%88%91%E4%BB%AC%E6%9D%A5%E7%9C%8B%E7%9C%8B%24watch%E7%9A%84%E5%AE%9E%E7%8E%B0%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EVue.prototype.%24watch%20%3D%20function%20(%0A%20%20%20%20expOrFn%2C%0A%20%20%20%20cb%2C%0A%20%20%20%20options%0A%20%20)%20%7B%0A%20%20%20%20var%20vm%20%3D%20this%3B%0A%20%20%20%20if%20(isPlainObject(cb))%20%7B%0A%20%20%20%20%20%20return%20createWatcher(vm%2C%20expOrFn%2C%20cb%2C%20options)%0A%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%E6%8A%8Aoptions%E7%9A%84user%E5%B1%9E%E6%80%A7%E8%AE%BE%E4%B8%BAtrue%EF%BC%8C%E8%AE%A9watcher%E5%86%85%E9%83%A8%E4%BD%BF%E7%94%A8%0A%20%20%20%20options%20%3D%20options%20%7C%7C%20%7B%7D%3B%0A%20%20%20%20options.user%20%3D%20true%3B%0A%20%20%20%20%2F%2F%20%E8%B0%83%E7%94%A8Watcher%0A%20%20%20%20var%20watcher%20%3D%20new%20Watcher(vm%2C%20expOrFn%2C%20cb%2C%20options)%3B%0A%20%20%20%20if%20(options.immediate)%20%7B%0A%20%20%20%20%20%20cb.call(vm%2C%20watcher.value)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20function%20unwatchFn%20()%20%7B%0A%20%20%20%20%20%20watcher.teardown()%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%EF%BC%8C%20%E5%9C%A8%E6%8A%8Aoptions%E7%9A%84user%E8%AE%BE%E4%B8%BAtrue%E4%BB%A5%E5%90%8E%EF%BC%8C%3Cbr%3E%E8%B0%83%E7%94%A8%E4%BA%86%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Evar%20watcher%20%3D%20new%20Watcher(vm%2C%20expOrFn%2C%20cb%2C%20options)%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%88%91%E4%BB%AC%E7%9C%8B%E7%9C%8B%E8%BF%99%E6%AE%B5%E5%87%BD%E6%95%B0%E8%BF%9B%E5%85%A5Watcher%E4%BB%A5%E5%90%8E%E4%BC%9A%E5%81%9A%E4%BB%80%E4%B9%88%3C%2Fp%3E%0A%3Ch3%20id%3D%22watcher%22%3EWatcher%3C%2Fh3%3E%0A%3Cp%3E%E8%BF%9B%E5%85%A5%E4%BA%86watcher%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%BB%A5%E5%90%8E%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20if%20(options)%20%7B%0A%20%20%20%20this.deep%20%3D%20!!options.deep%3B%0A%20%20%20%20this.user%20%3D%20!!options.user%3B%0A%20%20%20%20this.computed%20%3D%20!!options.computed%3B%0A%20%20%20%20this.sync%20%3D%20!!options.sync%3B%0A%20%20%20%20this.before%20%3D%20options.before%3B%0A%20%20%7D%0Athis.cb%20%3D%20cb%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AAwatcher%E7%A4%BA%E4%BE%8B%E7%9A%84user%E5%B1%9E%E6%80%A7%E4%BC%9A%E8%A2%AB%E8%AE%BE%E7%BD%AE%E4%B8%BAtrue%EF%BC%8C%3Cbr%3Esync%E5%B1%9E%E6%80%A7%E4%B9%9F%E4%BC%9A%E8%A2%AB%E8%AE%BE%E7%BD%AE%E4%B8%BA%E7%94%A8%E6%88%B7%E5%AE%9A%E4%B9%89%E7%9A%84sync%20%E8%A1%A8%E7%A4%BA%E8%BF%99%E4%B8%AAwatcher%E7%9A%84update%E5%87%BD%E6%95%B0%E4%BC%9A%E5%90%8C%E6%AD%A5%E6%89%A7%E8%A1%8C%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(typeof%20expOrFn%20%3D%3D%3D%20%26%2339%3Bfunction%26%2339%3B)%20%7B%0A%20%20%20%20this.getter%20%3D%20expOrFn%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20this.getter%20%3D%20parsePath(expOrFn)%3B%0A%20%20%20%20if%20(!this.getter)%20%7B%0A%20%20%20%20%20%20this.getter%20%3D%20function%20()%20%7B%7D%3B%0A%20%20%20%20%20%20process.env.NODE_ENV%20!%3D%3D%20%26%2339%3Bproduction%26%2339%3B%20%26amp%3B%26amp%3B%20warn(%0A%20%20%20%20%20%20%20%20%26quot%3BFailed%20watching%20path%3A%20%5C%26quot%3B%26quot%3B%20%2B%20expOrFn%20%2B%20%26quot%3B%5C%26quot%3B%20%26quot%3B%20%2B%0A%20%20%20%20%20%20%20%20%26%2339%3BWatcher%20only%20accepts%20simple%20dot-delimited%20paths.%20%26%2339%3B%20%2B%0A%20%20%20%20%20%20%20%20%26%2339%3BFor%20full%20control%2C%20use%20a%20function%20instead.%26%2339%3B%2C%0A%20%20%20%20%20%20%20%20vm%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%97%B6%E5%80%99%E6%88%91%E4%BB%AC%E7%9A%84expOrFn%E5%BA%94%E8%AF%A5%E6%98%AF%E4%B8%AAkey%20%E6%88%96%E8%80%85%20%26%2339%3Ba.b.c%26%2339%3B%E8%BF%99%E6%A0%B7%E7%9A%84%E8%AE%BF%E9%97%AE%E8%B7%AF%E5%BE%84%EF%BC%8C%E6%89%80%E4%BB%A5%E4%BC%9A%E8%BF%9B%E5%85%A5else%E9%80%BB%E8%BE%91%E3%80%82%3Cbr%3E%E9%A6%96%E5%85%88%E7%9C%8B%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Ethis.getter%20%3D%20parsePath(expOrFn)%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Ch3%20id%3D%22parsepath%22%3EparsePath%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Evar%20bailRE%20%3D%20%2F%5B%5E%5Cw.%24%5D%2F%3B%0Afunction%20parsePath%20(path)%20%7B%0A%20%20if%20(bailRE.test(path))%20%7B%0A%20%20%20%20return%0A%20%20%7D%0A%20%20var%20segments%20%3D%20path.split(%26%2339%3B.%26%2339%3B)%3B%0A%20%20return%20function%20(obj)%20%7B%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%26lt%3B%20segments.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20if%20(!obj)%20%7B%20return%20%7D%0A%20%20%20%20%20%20obj%20%3D%20obj%5Bsegments%5Bi%5D%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20obj%0A%20%20%7D%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%88%91%E4%BB%AC%E8%BF%98%E6%98%AF%E4%BB%A5a.b.c%E8%BF%99%E4%B8%AA%E8%B7%AF%E5%BE%84%E4%B8%BA%E4%BE%8B%EF%BC%8C%3Cbr%3Esegments%E8%A2%AB%E4%BB%A5.%E5%8F%B7%E5%88%86%E9%9A%94%E6%88%90%5B%26%2339%3Ba%26%2339%3B%2C%26%2339%3Bb%26%2339%3B%2C%26%2339%3Bc%26%2339%3B%5D%E8%BF%99%E6%A0%B7%E7%9A%84%E6%95%B0%E7%BB%84%EF%BC%8C%3Cbr%3E%E7%84%B6%E5%90%8E%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Efunction%20(obj)%20%7B%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%26lt%3B%20segments.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20if%20(!obj)%20%7B%20return%20%7D%0A%20%20%20%20%20%20obj%20%3D%20obj%5Bsegments%5Bi%5D%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20obj%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%97%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%20%E7%84%B6%E5%90%8E%E4%BC%9A%E4%BE%9D%E6%AC%A1%E5%8E%BB%E8%AE%BF%E9%97%AE%E5%AF%B9%E8%B1%A1%E7%9A%84.a%20%E5%86%8D%E5%8E%BB%E8%AE%BF%E9%97%AE.a.b%20%E5%86%8D%E5%8E%BB%E8%AE%BF%E9%97%AE.a.b.c%EF%BC%8C%3Cbr%3E%E5%85%B6%E5%AE%9E%E8%BF%99%E4%B8%AA%E7%9A%84%E7%9B%AE%E7%9A%84%E5%B0%B1%E6%98%AF%E5%9C%A8%E8%AE%BF%E9%97%AE%E7%9A%84%E8%BF%87%E7%A8%8B%E4%B8%AD%E4%B8%BA%E8%BF%99%E4%BA%9B%E5%B1%9E%E6%80%A7%E4%B8%8B%E6%8C%82%E8%BD%BD%E7%9A%84dep%E5%8E%BB%E6%94%B6%E9%9B%86%E4%BE%9D%E8%B5%96%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E5%9B%9E%E5%88%B0%E6%88%91%E4%BB%AC%E7%9A%84watcher%E7%9A%84%E5%88%9D%E5%A7%8B%E5%8C%96%EF%BC%8C%E6%8E%A5%E4%B8%8B%E6%9D%A5%E6%89%A7%E8%A1%8C%E7%9A%84%E6%98%AF%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(this.computed)%20%7B%0A%20%20%20%20this.value%20%3D%20undefined%3B%0A%20%20%20%20this.dep%20%3D%20new%20Dep()%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20this.value%20%3D%20this.get()%3B%0A%20%20%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%98%BE%E7%84%B6%E6%88%91%E4%BB%AC%E4%BC%9A%E8%B5%B0else%E9%80%BB%E8%BE%91%EF%BC%8C%E6%88%91%E4%BB%AC%E7%BB%A7%E7%BB%AD%E7%9C%8Bthis.get()%3C%2Fp%3E%0A%3Ch3%20id%3D%22watcherprototypeget%22%3EWatcher.prototype.get%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EWatcher.prototype.get%20%3D%20function%20get%20()%20%7B%0A%20%20%2F%2F%20%E5%B0%86%E5%85%A8%E5%B1%80%E7%9A%84Dep.target%E8%AE%BE%E7%BD%AE%E6%88%90%E8%BF%99%E4%B8%AAwatch%E5%B1%9E%E6%80%A7%E7%9A%84watcher%0A%20%20pushTarget(this)%3B%0A%20%20var%20value%3B%0A%20%20var%20vm%20%3D%20this.vm%3B%0A%20%20try%20%7B%0A%20%20%20%20%2F%2F%20%E8%B0%83%E7%94%A8%E5%88%9A%E5%88%9A%E7%94%9F%E6%88%90%E7%9A%84getter%E5%87%BD%E6%95%B0%EF%BC%8C%E5%B0%B1%E6%98%AFparsePath%E8%BF%94%E5%9B%9E%E7%9A%84%E9%82%A3%E4%B8%AA%E5%87%BD%E6%95%B0%0A%20%20%20%20%2F%2F%20%E8%BF%99%E9%87%8C%E6%8A%8Avm%E4%BD%9C%E4%B8%BAobj%E4%BC%A0%E5%85%A5%EF%BC%8C%E6%89%80%E4%BB%A5%E4%BC%9A%E4%BE%9D%E6%AC%A1%E5%8E%BB%E8%AF%BB%E5%8F%96vm.a%20vm.a.b%20vm.a.b.c%20%E5%B9%B6%E4%B8%94%E4%B8%BA%E8%BF%99%E5%87%A0%E4%B8%AA%E5%85%83%E7%B4%A0%E9%83%BD%E6%94%B6%E9%9B%86%E4%BA%86%E4%BE%9D%E8%B5%96%E3%80%82%0A%20%20%20%20value%20%3D%20this.getter.call(vm%2C%20vm)%3B%0A%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20if%20(this.user)%20%7B%0A%20%20%20%20%20%20handleError(e%2C%20vm%2C%20(%26quot%3Bgetter%20for%20watcher%20%5C%26quot%3B%26quot%3B%20%2B%20(this.expression)%20%2B%20%26quot%3B%5C%26quot%3B%26quot%3B))%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20throw%20e%0A%20%20%20%20%7D%0A%20%20%7D%20finally%20%7B%0A%20%20%20%20%2F%2F%20%26quot%3Btouch%26quot%3B%20every%20property%20so%20they%20are%20all%20tracked%20as%0A%20%20%20%20%2F%2F%20dependencies%20for%20deep%20watching%0A%20%20%20%20if%20(this.deep)%20%7B%0A%20%20%20%20%20%20%2F%2F%20%E5%A6%82%E6%9E%9Cwatch%E7%9A%84options%E9%87%8C%E8%AE%BE%E7%BD%AE%E4%BA%86deep%EF%BC%8C%E5%B0%B1%E9%80%92%E5%BD%92%E7%9A%84%E5%8E%BB%E6%94%B6%E9%9B%86%E4%BE%9D%E8%B5%96%E3%80%82%0A%20%20%20%20%20%20traverse(value)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%E6%94%B6%E9%9B%86%E5%AE%8C%E6%AF%95%EF%BC%8C%E5%B0%86Dep.target%E5%BC%B9%E5%87%BA%E6%A0%88%0A%20%20%20%20popTarget()%3B%0A%20%20%20%20this.cleanupDeps()%3B%0A%20%20%7D%0A%20%20return%20value%0A%7D%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%87%B3%E6%AD%A4%E4%B8%BA%E6%AD%A2%EF%BC%8C%E6%88%91%E4%BB%ACvm%E4%B8%8B%E7%9A%84a%20a%E4%B8%8B%E7%9A%84b%20b%E4%B8%8B%E7%9A%84c%E9%83%BD%E6%94%B6%E9%9B%86%E4%BA%86%E8%BF%99%E4%B8%AAwatcher%E4%BD%9C%E4%B8%BA%E4%BE%9D%E8%B5%96%EF%BC%8C%3Cbr%3E%E9%82%A3%E4%B9%88%E5%BD%93%E8%BF%99%E4%BA%9B%E5%80%BC%E4%B8%AD%E7%9A%84%E4%BB%BB%E6%84%8F%E5%80%BC%E8%BF%9B%E8%A1%8C%E6%94%B9%E5%8F%98%EF%BC%8C%20%E4%BC%9A%E8%A7%A6%E5%8F%91%E4%BB%96%E4%BB%AC%E5%86%85%E9%83%A8dep.notify()%3C%2Fp%3E%0A%3Ch3%20id%3D%22depnotify%22%3Edep.notify%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EDep.prototype.notify%20%3D%20function%20notify%20()%20%7B%0A%20%20%2F%2F%20stabilize%20the%20subscriber%20list%20first%0A%20%20var%20subs%20%3D%20this.subs.slice()%3B%0A%20%20for%20(var%20i%20%3D%200%2C%20l%20%3D%20subs.length%3B%20i%20%26lt%3B%20l%3B%20i%2B%2B)%20%7B%0A%20%20%20%20subs%5Bi%5D.update()%3B%0A%20%20%7D%0A%7D%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3Esubs%5Bi%5D.update()%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E8%B0%83%E7%94%A8%E4%BA%86watcher%E7%9A%84update%E6%96%B9%E6%B3%95%EF%BC%8C%E5%86%8D%E5%9B%9E%E5%88%B0watcher%3C%2Fp%3E%0A%3Ch3%20id%3D%22watcherupdate%22%3Ewatcher.update()%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EWatcher.prototype.update%20%3D%20function%20update%20()%20%7B%0A%20%20%20%2F%2F%20%E7%9C%81%E7%95%A5%E5%A4%9A%E4%BD%99%E9%80%BB%E8%BE%91%0A%20%20%20if%20(this.sync)%20%7B%0A%20%20%20%20this.run()%3B%0A%20%20%20%7D%20else%20%7B%0A%20%20%20%20queueWatcher(this)%3B%0A%20%20%7D%0A%7D%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AAupdate%E6%98%AF%E7%9C%81%E7%95%A5%E6%8E%89%E5%85%B6%E4%BB%96%E9%80%BB%E8%BE%91%E7%9A%84%EF%BC%8C%E6%88%91%E4%BB%AC%E4%B9%8B%E5%89%8D%E8%AF%B4%E8%BF%87%20%E5%A6%82%E6%9E%9Cwatch%E7%9A%84sync%E8%AE%BE%E7%BD%AE%E4%B8%BAtrue%EF%BC%8C%3Cbr%3E%E9%82%A3%E4%B9%88%E5%B0%B1%E4%BC%9A%E7%9B%B4%E6%8E%A5%E6%89%A7%E8%A1%8C%20this.run()%3B%3C%2Fp%3E%0A%3Ch3%20id%3D%22watcherrun%22%3Ewatcher.run%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EWatcher.prototype.run%20%3D%20function%20run%20()%20%7B%0A%20%20if%20(this.active)%20%7B%0A%20%20%20%20this.getAndInvoke(this.cb)%3B%0A%20%20%7D%0A%7D%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E9%87%8C%E8%B0%83%E7%94%A8%E4%BA%86getAndInvoke(this.cb)%EF%BC%8C%E5%B0%86%E6%88%91%E4%BB%AC%E5%AE%9A%E4%B9%89%E7%9A%84watch%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E4%BC%A0%E5%85%A5%3C%2Fp%3E%0A%3Ch3%20id%3D%22watchergetandinvoke%22%3Ewatcher.getAndInvoke%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EWatcher.prototype.getAndInvoke%20%3D%20function%20getAndInvoke%20(cb)%20%7B%0A%20%20var%20value%20%3D%20this.get()%3B%0A%20%20if%20(%0A%20%20%20%20value%20!%3D%3D%20this.value%20%7C%7C%0A%20%20%20%20isObject(value)%20%7C%7C%0A%20%20%20%20this.deep%0A%20%20)%20%7B%0A%20%20%20%20if%20(this.user)%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20cb.call(this.vm%2C%20value%2C%20oldValue)%3B%0A%20%20%20%20%20%20%7D%20catch%20(e)%20%7B%0A%20%20%20%20%20%20%20%20handleError(e%2C%20this.vm%2C%20(%26quot%3Bcallback%20for%20watcher%20%5C%26quot%3B%26quot%3B%20%2B%20(this.expression)%20%2B%20%26quot%3B%5C%26quot%3B%26quot%3B))%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E5%81%9A%E4%BA%86%E4%B8%AA%E5%88%A4%E6%96%AD%EF%BC%8C%E5%A6%82%E6%9E%9C%E4%B8%8A%E4%B8%80%E6%AC%A1%E7%9A%84%E5%80%BC%E5%92%8C%E8%BF%99%E6%AC%A1%E7%9A%84%E5%80%BC%E4%B8%8D%E7%9B%B8%E7%AD%89%EF%BC%8C%E6%88%96%E8%80%85deep%E4%B8%BAtrue%EF%BC%8C%E9%83%BD%E4%BC%9A%E7%9B%B4%E6%8E%A5%E5%87%BA%E5%8F%91cb.call(this.vm)%EF%BC%8C%E5%B9%B6%E4%B8%94%E5%B0%86%E6%96%B0%E5%80%BC%E5%92%8C%E6%97%A7%E5%80%BC%E4%BC%A0%E5%85%A5%EF%BC%8C%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E5%9C%A8watch%E7%9A%84%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E9%87%8C%E8%8E%B7%E5%8F%96%E6%96%B0%E5%80%BC%E5%92%8C%E6%97%A7%E5%80%BC%E7%9A%84%E6%9D%A5%E6%BA%90%E3%80%82%3C%2Fp%3E%0A%3Cp%3E%E8%87%B3%E6%AD%A4watch%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%B0%B1%E5%88%86%E6%9E%90%E5%AE%8C%E6%AF%95%E4%BA%86%EF%BC%8C%E5%86%8D%E6%AC%A1%E6%84%9F%E5%8F%B9%E4%B8%80%E4%B8%8B%EF%BC%8C%E8%89%AF%E5%A5%BD%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%98%AF%E6%88%90%E5%8A%9F%E7%9A%84%E5%BC%80%E7%AB%AF%E5%95%8A%EF%BC%81%3C%2Fp%3E%0A`,
      })
    