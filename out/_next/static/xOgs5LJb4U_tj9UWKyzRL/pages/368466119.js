(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+VmP":function(t,e,B){(window.__NEXT_P=window.__NEXT_P||[]).push(["/368466119",function(){var t=B("wxxt");return{page:t.default||t}}])},wxxt:function(t,e,B){"use strict";B.r(e);var s=B("4fS0");e.default=Object(s.a)({blog:{url:"https://api.github.com/repos/sl1673495/blogs/issues/6",repository_url:"https://api.github.com/repos/sl1673495/blogs",labels_url:"https://api.github.com/repos/sl1673495/blogs/issues/6/labels{/name}",comments_url:"https://api.github.com/repos/sl1673495/blogs/issues/6/comments",events_url:"https://api.github.com/repos/sl1673495/blogs/issues/6/events",html_url:"https://github.com/sl1673495/blogs/issues/6",id:368466119,node_id:"MDU6SXNzdWUzNjg0NjYxMTk=",number:6,title:"react-component\u6e90\u7801\u5b66\u4e60\uff082\uff09 rc-steps",user:{login:"sl1673495",id:23615778,node_id:"MDQ6VXNlcjIzNjE1Nzc4",avatar_url:"https://avatars1.githubusercontent.com/u/23615778?v=4",gravatar_id:"",url:"https://api.github.com/users/sl1673495",html_url:"https://github.com/sl1673495",followers_url:"https://api.github.com/users/sl1673495/followers",following_url:"https://api.github.com/users/sl1673495/following{/other_user}",gists_url:"https://api.github.com/users/sl1673495/gists{/gist_id}",starred_url:"https://api.github.com/users/sl1673495/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/sl1673495/subscriptions",organizations_url:"https://api.github.com/users/sl1673495/orgs",repos_url:"https://api.github.com/users/sl1673495/repos",events_url:"https://api.github.com/users/sl1673495/events{/privacy}",received_events_url:"https://api.github.com/users/sl1673495/received_events",type:"User",site_admin:!1},labels:[{id:1525741429,node_id:"MDU6TGFiZWwxNTI1NzQxNDI5",url:"https://api.github.com/repos/sl1673495/blogs/labels/React",name:"React",color:"60DAFb",default:!1}],state:"open",locked:!1,assignee:null,assignees:[],milestone:null,comments:0,created_at:"2018-10-10T02:11:33Z",updated_at:"2019-08-29T09:43:25Z",closed_at:null,author_association:"OWNER"},html:"%3Cp%3Erc-steps%E6%98%AFantd%E7%9A%84%E6%AD%A5%E9%AA%A4%E7%BB%84%E4%BB%B6%E6%89%80%E4%BE%9D%E8%B5%96%E7%9A%84%E5%BA%95%E5%B1%82%E7%BB%84%E4%BB%B6%EF%BC%8C%E5%85%88%E7%9C%8B%E5%AE%98%E6%96%B9%E7%BB%99%E7%9A%84%E7%94%A8%E6%B3%95%E7%A4%BA%E4%BE%8B%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%26lt%3BSteps%20current%3D%7B1%7D%26gt%3B%0A%20%20%26lt%3BSteps.Step%20title%3D%26quot%3Bfirst%26quot%3B%20%2F%26gt%3B%0A%20%20%26lt%3BSteps.Step%20title%3D%26quot%3Bsecond%26quot%3B%20%2F%26gt%3B%0A%20%20%26lt%3BSteps.Step%20title%3D%26quot%3Bthird%26quot%3B%20%2F%26gt%3B%0A%26lt%3B%2FSteps%26gt%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E7%AE%80%E6%B4%81%E6%98%8E%E4%BA%86%E7%9A%84%E7%88%B6%E5%AD%90%E5%B5%8C%E5%A5%97%E7%BB%84%E4%BB%B6%E3%80%82%3Cbr%3E%E5%85%88%E4%BB%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E7%9A%84%E6%BA%90%E7%A0%81%E7%9C%8B%E8%B5%B7%E3%80%82%3C%2Fp%3E%0A%3Ch2%20id%3D%22stepsjsx%22%3ESteps.jsx%3C%2Fh2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%2F*%20eslint%20react%2Fno-did-mount-set-state%3A%200%20*%2F%0Aimport%20React%2C%20%7B%20cloneElement%2C%20Children%2C%20Component%20%7D%20from%20%26%2339%3Breact%26%2339%3B%3B%0Aimport%20PropTypes%20from%20%26%2339%3Bprop-types%26%2339%3B%3B%0Aimport%20%7B%20findDOMNode%20%7D%20from%20%26%2339%3Breact-dom%26%2339%3B%3B%0Aimport%20classNames%20from%20%26%2339%3Bclassnames%26%2339%3B%3B%0Aimport%20debounce%20from%20%26%2339%3Blodash%2Fdebounce%26%2339%3B%3B%0Aimport%20%7B%20isFlexSupported%20%7D%20from%20%26%2339%3B.%2Futils%26%2339%3B%3B%0A%0Aexport%20default%20class%20Steps%20extends%20Component%20%7B%0A%20%20static%20propTypes%20%3D%20%7B%0A%20%20%20%20prefixCls%3A%20PropTypes.string%2C%0A%20%20%20%20className%3A%20PropTypes.string%2C%0A%20%20%20%20iconPrefix%3A%20PropTypes.string%2C%0A%20%20%20%20direction%3A%20PropTypes.string%2C%0A%20%20%20%20labelPlacement%3A%20PropTypes.string%2C%0A%20%20%20%20children%3A%20PropTypes.any%2C%0A%20%20%20%20status%3A%20PropTypes.string%2C%0A%20%20%20%20size%3A%20PropTypes.string%2C%0A%20%20%20%20progressDot%3A%20PropTypes.oneOfType(%5B%0A%20%20%20%20%20%20PropTypes.bool%2C%0A%20%20%20%20%20%20PropTypes.func%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20style%3A%20PropTypes.object%2C%0A%20%20%20%20initial%3A%20PropTypes.number%2C%0A%20%20%20%20current%3A%20PropTypes.number%2C%0A%20%20%20%20icons%3A%20PropTypes.shape(%7B%0A%20%20%20%20%20%20finish%3A%20PropTypes.node%2C%0A%20%20%20%20%20%20error%3A%20PropTypes.node%2C%0A%20%20%20%20%7D)%2C%0A%20%20%7D%3B%0A%20%20static%20defaultProps%20%3D%20%7B%0A%20%20%20%20prefixCls%3A%20%26%2339%3Brc-steps%26%2339%3B%2C%0A%20%20%20%20iconPrefix%3A%20%26%2339%3Brc%26%2339%3B%2C%0A%20%20%20%20direction%3A%20%26%2339%3Bhorizontal%26%2339%3B%2C%0A%20%20%20%20labelPlacement%3A%20%26%2339%3Bhorizontal%26%2339%3B%2C%0A%20%20%20%20initial%3A%200%2C%0A%20%20%20%20current%3A%200%2C%0A%20%20%20%20status%3A%20%26%2339%3Bprocess%26%2339%3B%2C%0A%20%20%20%20size%3A%20%26%2339%3B%26%2339%3B%2C%0A%20%20%20%20progressDot%3A%20false%2C%0A%20%20%7D%3B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%0A%20%20%20%20%20%20flexSupported%3A%20true%2C%0A%20%20%20%20%20%20lastStepOffsetWidth%3A%200%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20this.calcStepOffsetWidth%20%3D%20debounce(this.calcStepOffsetWidth%2C%20150)%3B%0A%20%20%7D%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.calcStepOffsetWidth()%3B%0A%20%20%20%20if%20(!isFlexSupported())%20%7B%0A%20%20%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20%20%20flexSupported%3A%20false%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20componentDidUpdate()%20%7B%0A%20%20%20%20this.calcStepOffsetWidth()%3B%0A%20%20%7D%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20if%20(this.calcTimeout)%20%7B%0A%20%20%20%20%20%20clearTimeout(this.calcTimeout)%3B%0A%20%20%20%20%7D%0A%20%20%20%20if%20(this.calcStepOffsetWidth%20%26amp%3B%26amp%3B%20this.calcStepOffsetWidth.cancel)%20%7B%0A%20%20%20%20%20%20this.calcStepOffsetWidth.cancel()%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20calcStepOffsetWidth%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20if%20(isFlexSupported())%20%7B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20Just%20for%20IE9%0A%20%20%20%20const%20domNode%20%3D%20findDOMNode(this)%3B%0A%20%20%20%20if%20(domNode.children.length%20%26gt%3B%200)%20%7B%0A%20%20%20%20%20%20if%20(this.calcTimeout)%20%7B%0A%20%20%20%20%20%20%20%20clearTimeout(this.calcTimeout)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20this.calcTimeout%20%3D%20setTimeout(()%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%2B1%20for%20fit%20edge%20bug%20of%20digit%20width%2C%20like%2035.4px%0A%20%20%20%20%20%20%20%20const%20lastStepOffsetWidth%20%3D%20(domNode.lastChild.offsetWidth%20%7C%7C%200)%20%2B%201%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20Reduce%20shake%20bug%0A%20%20%20%20%20%20%20%20if%20(this.state.lastStepOffsetWidth%20%3D%3D%3D%20lastStepOffsetWidth%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20Math.abs(this.state.lastStepOffsetWidth%20-%20lastStepOffsetWidth)%20%26lt%3B%3D%203)%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20this.setState(%7B%20lastStepOffsetWidth%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%0A%20%20%20%20%20%20prefixCls%2C%20style%20%3D%20%7B%7D%2C%20className%2C%20children%2C%20direction%2C%0A%20%20%20%20%20%20labelPlacement%2C%20iconPrefix%2C%20status%2C%20size%2C%20current%2C%20progressDot%2C%20initial%2C%0A%20%20%20%20%20%20icons%2C%0A%20%20%20%20%20%20...restProps%2C%0A%20%20%20%20%7D%20%3D%20this.props%3B%0A%20%20%20%20const%20%7B%20lastStepOffsetWidth%2C%20flexSupported%20%7D%20%3D%20this.state%3B%0A%20%20%20%20const%20filteredChildren%20%3D%20React.Children.toArray(children).filter(c%20%3D%26gt%3B%20!!c)%3B%0A%20%20%20%20const%20lastIndex%20%3D%20filteredChildren.length%20-%201%3B%0A%20%20%20%20const%20adjustedlabelPlacement%20%3D%20!!progressDot%20%3F%20%26%2339%3Bvertical%26%2339%3B%20%3A%20labelPlacement%3B%0A%20%20%20%20const%20classString%20%3D%20classNames(prefixCls%2C%20%60%24%7BprefixCls%7D-%24%7Bdirection%7D%60%2C%20className%2C%20%7B%0A%20%20%20%20%20%20%5B%60%24%7BprefixCls%7D-%24%7Bsize%7D%60%5D%3A%20size%2C%0A%20%20%20%20%20%20%5B%60%24%7BprefixCls%7D-label-%24%7BadjustedlabelPlacement%7D%60%5D%3A%20direction%20%3D%3D%3D%20%26%2339%3Bhorizontal%26%2339%3B%2C%0A%20%20%20%20%20%20%5B%60%24%7BprefixCls%7D-dot%60%5D%3A%20!!progressDot%2C%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%26lt%3Bdiv%20className%3D%7BclassString%7D%20style%3D%7Bstyle%7D%20%7B...restProps%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20Children.map(filteredChildren%2C%20(child%2C%20index)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!child)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20null%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20stepNumber%20%3D%20initial%20%2B%20index%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20childProps%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20stepNumber%3A%20%60%24%7BstepNumber%20%2B%201%7D%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20prefixCls%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconPrefix%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20wrapperStyle%3A%20style%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20progressDot%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20icons%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20...child.props%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!flexSupported%20%26amp%3B%26amp%3B%20direction%20!%3D%3D%20%26%2339%3Bvertical%26%2339%3B%20%26amp%3B%26amp%3B%20index%20!%3D%3D%20lastIndex)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.itemWidth%20%3D%20%60%24%7B100%20%2F%20lastIndex%7D%25%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.adjustMarginRight%20%3D%20-Math.round(lastStepOffsetWidth%20%2F%20lastIndex%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20fix%20tail%20color%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(status%20%3D%3D%3D%20%26%2339%3Berror%26%2339%3B%20%26amp%3B%26amp%3B%20index%20%3D%3D%3D%20current%20-%201)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.className%20%3D%20%60%24%7BprefixCls%7D-next-error%60%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!child.props.status)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(stepNumber%20%3D%3D%3D%20current)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.status%20%3D%20status%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(stepNumber%20%26lt%3B%20current)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.status%20%3D%20%26%2339%3Bfinish%26%2339%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.status%20%3D%20%26%2339%3Bwait%26%2339%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20cloneElement(child%2C%20childProps)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E9%A6%96%E5%85%88%E7%9C%8B%E5%88%B0%E5%9C%A8componentDidMount%2C%20componentDidUpdate%E9%98%B6%E6%AE%B5%E9%83%BD%E8%B0%83%E7%94%A8%E4%BA%86calcStepOffsetWidth%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%EF%BC%8C%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E8%AE%A1%E7%AE%97lastStepOffsetWidth%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E6%AD%A5%E9%AA%A4%E6%9D%A1%E7%9A%84%E5%81%8F%E7%A7%BB%E8%B7%9D%E7%A6%BB%20%E7%94%A8%E6%9D%A5%E8%B0%83%E6%95%B4%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E9%97%B4%E8%B7%9D%E5%88%B0%E6%AD%A3%E5%A5%BD%E6%92%91%E6%BB%A1%E5%AE%B9%E5%99%A8%E7%9A%84%E6%95%88%E6%9E%9C%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22calcstepoffsetwidth%22%3EcalcStepOffsetWidth%3C%2Fh3%3E%0A%3Cp%3E%E5%9C%A8%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E7%9A%84%E5%BC%80%E5%A4%B4%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9C%8B%E5%88%B0%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(isFlexSupported())%20%7B%0A%20%20%20return%3B%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%A6%82%E6%9E%9C%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81flex%EF%BC%8C%E5%B0%B1%E7%9B%B4%E6%8E%A5return%EF%BC%8C%E5%9B%A0%E4%B8%BAflex%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E5%BC%B9%E6%80%A7%E8%87%AA%E9%80%82%E5%BA%94%E5%B8%83%E5%B1%80%EF%BC%8C%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eexport%20function%20isFlexSupported()%20%7B%0A%20%20if%20(typeof%20window%20!%3D%3D%20%26%2339%3Bundefined%26%2339%3B%20%26amp%3B%26amp%3B%20window.document%20%26amp%3B%26amp%3B%20window.document.documentElement)%20%7B%0A%20%20%20%20const%20%7B%20documentElement%20%7D%20%3D%20window.document%3B%0A%20%20%20%20return%20%26%2339%3Bflex%26%2339%3B%20in%20documentElement.style%20%7C%7C%0A%20%20%20%20%20%20%26%2339%3BwebkitFlex%26%2339%3B%20in%20documentElement.style%20%7C%7C%0A%20%20%20%20%20%20%26%2339%3BFlex%26%2339%3B%20in%20documentElement.style%20%7C%7C%0A%20%20%20%20%20%20%26%2339%3BmsFlex%26%2339%3B%20in%20documentElement.style%3B%0A%20%20%7D%0A%20%20return%20false%3B%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%A6%82%E6%9E%9C%E4%B8%8D%E6%94%AF%E6%8C%81flex%EF%BC%8C%3Cbr%3E%E5%88%99%E5%85%88%E7%94%A8React.findDomNode(this)%E6%8B%BF%E5%88%B0%E5%BD%93%E5%89%8D%E7%BB%84%E4%BB%B6%E7%9A%84dom%E8%8A%82%E7%82%B9%EF%BC%8C%E7%84%B6%E5%90%8E%E7%94%A8%E4%BA%86%E4%B8%80%E4%B8%AA%E7%B1%BB%E4%BC%BCdebouce%E7%9A%84%E5%A4%84%E7%90%86%EF%BC%8C%E5%88%A9%E7%94%A8setTimout%E5%9C%A8%E4%B8%8B%E4%B8%80%E4%B8%AA%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E9%87%8C%E5%A4%84%E7%90%86%EF%BC%8C%E5%B9%B6%E4%B8%94%E4%BF%9D%E8%AF%81%E4%B8%80%E4%B8%AA%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF%E9%87%8C%E8%A7%A6%E5%8F%91%E7%9A%84%E5%A4%9A%E6%AC%A1%E6%AD%A4%E6%96%B9%E6%B3%95%E8%A2%AB%E5%BD%92%E5%B9%B6%E6%88%90%E4%B8%80%E6%AC%A1%EF%BC%8C%3Cbr%3E%E6%8B%BF%E5%88%B0children%E4%B8%ADlastChild%E7%9A%84offsetWidth%E5%B9%B6%E4%B8%94%E8%B5%8B%E7%BB%99state%E7%9A%84lastStepOffsetWidth%E3%80%82%3C%2Fp%3E%0A%3Ch3%20id%3D%22render%22%3Erender%3C%2Fh3%3E%0A%3Cp%3EfilteredChildren%E6%98%AF%E5%88%A9%E7%94%A8React.Children.toArray%E6%8A%8A%E5%AD%90%E8%8A%82%E7%82%B9%E8%BD%AC%E6%88%90%E6%95%B0%E7%BB%84%E4%B8%94%E8%BF%87%E6%BB%A4%E6%8E%89%E7%A9%BA%E8%8A%82%E7%82%B9%EF%BC%8C%E7%84%B6%E5%90%8E%E6%8B%BF%E5%88%B0lastIndex%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B9%E7%9A%84%E5%BA%8F%E5%8F%B7%EF%BC%8C%E5%9C%A8%E6%9C%80%E5%90%8E%E7%9A%84return%E4%B8%AD%E8%B0%83%E7%94%A8React.Children.map%E5%BE%AA%E7%8E%AF%E5%AD%90%E8%8A%82%E7%82%B9%E6%95%B0%E7%BB%84%EF%BC%8C%E5%9C%A8%E8%BF%99%E4%B8%AA%E5%BE%AA%E7%8E%AF%E4%B8%AD%EF%BC%8CstepNumber%E6%98%AFprops.initial%20%2B%20index%EF%BC%8CchildProps%E5%9C%A8child%E5%8E%9F%E6%9C%89%E7%9A%84props%E5%9F%BA%E7%A1%80%E4%B8%8A%E6%89%A9%E5%B1%95%E4%BA%86%3Cbr%3EstepNumber%E6%AD%A5%E9%AA%A4%E5%BA%8F%E5%8F%B7%E5%92%8C%E4%B8%80%E7%B3%BB%E5%88%97%E6%A0%B7%E5%BC%8F%EF%BC%8C%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(!flexSupported%20%26amp%3B%26amp%3B%20direction%20!%3D%3D%20%26%2339%3Bvertical%26%2339%3B%20%26amp%3B%26amp%3B%20index%20!%3D%3D%20lastIndex)%20%7B%0A%20%20%20%20%20%20childProps.itemWidth%20%3D%20%60%24%7B100%20%2F%20lastIndex%7D%25%60%3B%0A%20%20%20%20%20%20childProps.adjustMarginRight%20%3D%20-Math.round(lastStepOffsetWidth%20%2F%20lastIndex%20%2B%201)%3B%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%9C%A8%E4%B8%8D%E6%94%AF%E6%8C%81flex%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E7%BB%A7%E7%BB%AD%E6%89%A9%E5%B1%95%3Cbr%3EitemWidth%E4%B8%BA%20100%E9%99%A4%E4%BB%A5%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B9%E7%9A%84%E4%B8%8B%E6%A0%87%3Cbr%3EadjustMarginRight%20%E6%98%AF%E4%B8%8A%E9%9D%A2%E8%AE%A1%E7%AE%97%E7%9A%84lastStepOffsetWidth%E9%99%A4%E4%BB%A5%E5%AD%90%E5%85%83%E7%B4%A0%E6%95%B0%E9%87%8F%E5%B9%B6%E5%8F%96%E8%B4%9F%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%2F%2F%20fix%20tail%20color%0A%20%20%20if%20(status%20%3D%3D%3D%20%26%2339%3Berror%26%2339%3B%20%26amp%3B%26amp%3B%20index%20%3D%3D%3D%20current%20-%201)%20%7B%0A%20%20childProps.className%20%3D%20%60%24%7BprefixCls%7D-next-error%60%3B%0A%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3Estatus%E4%BB%A3%E8%A1%A8props%E4%B8%AD%E4%BC%A0%E5%85%A5%E7%9A%84%E5%BD%93%E5%89%8D%E6%AD%A5%E9%AA%A4%E7%9A%84%E7%8A%B6%E6%80%81%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%98%AF%E9%94%99%E8%AF%AF%E5%B9%B6%E4%B8%94%E8%BF%99%E6%97%B6%E5%80%99%E7%9A%84step%E6%98%AF%E5%BD%93%E5%89%8D%E6%AD%A5%E9%AA%A4%E7%9A%84%E5%89%8D%E4%B8%80%E4%B8%AA%E7%9A%84%E8%AF%9D%EF%BC%8C%E5%8A%A0%E4%B8%80%E4%B8%AAnext-error%E7%9A%84class%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20%20%20%20%20%20%20if%20(!child.props.status)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(stepNumber%20%3D%3D%3D%20current)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.status%20%3D%20status%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20if%20(stepNumber%20%26lt%3B%20current)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.status%20%3D%20%26%2339%3Bfinish%26%2339%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20childProps.status%20%3D%20%26%2339%3Bwait%26%2339%3B%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%AE%B5%E6%98%AF%E5%81%87%E8%AE%BE%E7%94%A8%E6%88%B7%E4%B8%8D%E4%BC%A0%E5%85%A5status%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E8%87%AA%E5%8A%A8%E8%AE%A1%E7%AE%97%E5%BD%93%E5%89%8D%E5%BA%94%E8%AF%A5%E7%9A%84%E7%8A%B6%E6%80%81%EF%BC%8C%3Cbr%3Ecurrent%E4%B9%8B%E5%89%8D%E6%98%AFfinished%20%E4%B9%8B%E5%90%8E%E6%98%AFwait%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20return%20cloneElement(child%2C%20childProps)%3B%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%9C%80%E5%90%8E%E8%B0%83%E7%94%A8React.cloneElement%E6%8A%8Achild%E5%92%8CchildProps%E5%90%88%E5%B9%B6%E6%88%90%E4%B8%80%E4%B8%AA%E6%96%B0%E8%8A%82%E7%82%B9%E8%BF%94%E5%9B%9E%E3%80%82%3C%2Fp%3E%0A%3Ch2%20id%3D%22stepjsx%22%3EStep.jsx%3C%2Fh2%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eimport%20React%20from%20%26%2339%3Breact%26%2339%3B%3B%0Aimport%20PropTypes%20from%20%26%2339%3Bprop-types%26%2339%3B%3B%0Aimport%20classNames%20from%20%26%2339%3Bclassnames%26%2339%3B%3B%0A%0Afunction%20isString(str)%20%7B%0A%20%20return%20typeof%20str%20%3D%3D%3D%20%26%2339%3Bstring%26%2339%3B%3B%0A%7D%0A%0Aexport%20default%20class%20Step%20extends%20React.Component%20%7B%0A%20%20static%20propTypes%20%3D%20%7B%0A%20%20%20%20className%3A%20PropTypes.string%2C%0A%20%20%20%20prefixCls%3A%20PropTypes.string%2C%0A%20%20%20%20style%3A%20PropTypes.object%2C%0A%20%20%20%20wrapperStyle%3A%20PropTypes.object%2C%0A%20%20%20%20itemWidth%3A%20PropTypes.oneOfType(%5B%0A%20%20%20%20%20%20PropTypes.number%2C%0A%20%20%20%20%20%20PropTypes.string%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20status%3A%20PropTypes.string%2C%0A%20%20%20%20iconPrefix%3A%20PropTypes.string%2C%0A%20%20%20%20icon%3A%20PropTypes.node%2C%0A%20%20%20%20adjustMarginRight%3A%20PropTypes.oneOfType(%5B%0A%20%20%20%20%20%20PropTypes.number%2C%0A%20%20%20%20%20%20PropTypes.string%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20stepNumber%3A%20PropTypes.string%2C%0A%20%20%20%20description%3A%20PropTypes.any%2C%0A%20%20%20%20title%3A%20PropTypes.any%2C%0A%20%20%20%20progressDot%3A%20PropTypes.oneOfType(%5B%0A%20%20%20%20%20%20PropTypes.bool%2C%0A%20%20%20%20%20%20PropTypes.func%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20tailContent%3A%20PropTypes.any%2C%0A%20%20%20%20icons%3A%20PropTypes.shape(%7B%0A%20%20%20%20%20%20finish%3A%20PropTypes.node%2C%0A%20%20%20%20%20%20error%3A%20PropTypes.node%2C%0A%20%20%20%20%7D)%2C%0A%20%20%7D%3B%0A%20%20renderIconNode()%20%7B%0A%20%20%20%20const%20%7B%0A%20%20%20%20%20%20prefixCls%2C%20progressDot%2C%20stepNumber%2C%20status%2C%20title%2C%20description%2C%20icon%2C%0A%20%20%20%20%20%20iconPrefix%2C%20icons%2C%0A%20%20%20%20%7D%20%3D%20this.props%3B%0A%20%20%20%20let%20iconNode%3B%0A%20%20%20%20const%20iconClassName%20%3D%20classNames(%60%24%7BprefixCls%7D-icon%60%2C%20%60%24%7BiconPrefix%7Dicon%60%2C%20%7B%0A%20%20%20%20%20%20%5B%60%24%7BiconPrefix%7Dicon-%24%7Bicon%7D%60%5D%3A%20icon%20%26amp%3B%26amp%3B%20isString(icon)%2C%0A%20%20%20%20%20%20%5B%60%24%7BiconPrefix%7Dicon-check%60%5D%3A%20!icon%20%26amp%3B%26amp%3B%20status%20%3D%3D%3D%20%26%2339%3Bfinish%26%2339%3B%20%26amp%3B%26amp%3B%20(icons%20%26amp%3B%26amp%3B%20!icons.finish)%2C%0A%20%20%20%20%20%20%5B%60%24%7BiconPrefix%7Dicon-close%60%5D%3A%20!icon%20%26amp%3B%26amp%3B%20status%20%3D%3D%3D%20%26%2339%3Berror%26%2339%3B%20%26amp%3B%26amp%3B%20(icons%20%26amp%3B%26amp%3B%20!icons.error)%2C%0A%20%20%20%20%7D)%3B%0A%20%20%20%20const%20iconDot%20%3D%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon-dot%60%7D%26gt%3B%26lt%3B%2Fspan%26gt%3B%3B%0A%20%20%20%20%2F%2F%20%60progressDot%60%20enjoy%20the%20highest%20priority%0A%20%20%20%20if%20(progressDot)%20%7B%0A%20%20%20%20%20%20if%20(typeof%20progressDot%20%3D%3D%3D%20%26%2339%3Bfunction%26%2339%3B)%20%7B%0A%20%20%20%20%20%20%20%20iconNode%20%3D%20(%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon%60%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7BprogressDot(iconDot%2C%20%7B%20index%3A%20stepNumber%20-%201%2C%20status%2C%20title%2C%20description%20%7D)%7D%0A%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fspan%26gt%3B%0A%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20iconNode%20%3D%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon%60%7D%26gt%3B%7BiconDot%7D%26lt%3B%2Fspan%26gt%3B%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20if%20(icon%20%26amp%3B%26amp%3B%20!isString(icon))%20%7B%0A%20%20%20%20%20%20iconNode%20%3D%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon%60%7D%26gt%3B%7Bicon%7D%26lt%3B%2Fspan%26gt%3B%3B%0A%20%20%20%20%7D%20else%20if%20(icons%20%26amp%3B%26amp%3B%20icons.finish%20%26amp%3B%26amp%3B%20status%20%3D%3D%3D%20%26%2339%3Bfinish%26%2339%3B)%20%7B%0A%20%20%20%20%20%20iconNode%20%3D%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon%60%7D%26gt%3B%7Bicons.finish%7D%26lt%3B%2Fspan%26gt%3B%3B%0A%20%20%20%20%7D%20else%20if%20(icons%20%26amp%3B%26amp%3B%20icons.error%20%26amp%3B%26amp%3B%20status%20%3D%3D%3D%20%26%2339%3Berror%26%2339%3B)%20%7B%0A%20%20%20%20%20%20iconNode%20%3D%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon%60%7D%26gt%3B%7Bicons.error%7D%26lt%3B%2Fspan%26gt%3B%3B%0A%20%20%20%20%7D%20else%20if%20(icon%20%7C%7C%20status%20%3D%3D%3D%20%26%2339%3Bfinish%26%2339%3B%20%7C%7C%20status%20%3D%3D%3D%20%26%2339%3Berror%26%2339%3B)%20%7B%0A%20%20%20%20%20%20iconNode%20%3D%20%26lt%3Bspan%20className%3D%7BiconClassName%7D%20%2F%26gt%3B%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20iconNode%20%3D%20%26lt%3Bspan%20className%3D%7B%60%24%7BprefixCls%7D-icon%60%7D%26gt%3B%7BstepNumber%7D%26lt%3B%2Fspan%26gt%3B%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20iconNode%3B%0A%20%20%7D%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%0A%20%20%20%20%20%20className%2C%20prefixCls%2C%20style%2C%20itemWidth%2C%0A%20%20%20%20%20%20status%20%3D%20%26%2339%3Bwait%26%2339%3B%2C%20iconPrefix%2C%20icon%2C%20wrapperStyle%2C%0A%20%20%20%20%20%20adjustMarginRight%2C%20stepNumber%2C%0A%20%20%20%20%20%20description%2C%20title%2C%20progressDot%2C%20tailContent%2C%0A%20%20%20%20%20%20icons%2C%0A%20%20%20%20%20%20...restProps%2C%0A%20%20%20%20%7D%20%3D%20this.props%3B%0A%0A%20%20%20%20const%20classString%20%3D%20classNames(%0A%20%20%20%20%20%20%60%24%7BprefixCls%7D-item%60%2C%0A%20%20%20%20%20%20%60%24%7BprefixCls%7D-item-%24%7Bstatus%7D%60%2C%0A%20%20%20%20%20%20className%2C%0A%20%20%20%20%20%20%7B%20%5B%60%24%7BprefixCls%7D-item-custom%60%5D%3A%20icon%20%7D%2C%0A%20%20%20%20)%3B%0A%20%20%20%20const%20stepItemStyle%20%3D%20%7B%20...style%20%7D%3B%0A%20%20%20%20if%20(itemWidth)%20%7B%0A%20%20%20%20%20%20stepItemStyle.width%20%3D%20itemWidth%3B%0A%20%20%20%20%7D%0A%20%20%20%20if%20(adjustMarginRight)%20%7B%0A%20%20%20%20%20%20stepItemStyle.marginRight%20%3D%20adjustMarginRight%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%26lt%3Bdiv%0A%20%20%20%20%20%20%20%20%7B...restProps%7D%0A%20%20%20%20%20%20%20%20className%3D%7BclassString%7D%0A%20%20%20%20%20%20%20%20style%3D%7BstepItemStyle%7D%0A%20%20%20%20%20%20%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bdiv%20className%3D%7B%60%24%7BprefixCls%7D-item-tail%60%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%7BtailContent%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bdiv%20className%3D%7B%60%24%7BprefixCls%7D-item-icon%60%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%7Bthis.renderIconNode()%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Bdiv%20className%3D%7B%60%24%7BprefixCls%7D-item-content%60%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%26lt%3Bdiv%20className%3D%7B%60%24%7BprefixCls%7D-item-title%60%7D%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%7D%0A%20%20%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%20%20%7Bdescription%20%26amp%3B%26amp%3B%20%26lt%3Bdiv%20className%3D%7B%60%24%7BprefixCls%7D-item-description%60%7D%26gt%3B%7Bdescription%7D%26lt%3B%2Fdiv%26gt%3B%7D%0A%20%20%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%AD%90%E7%BB%84%E4%BB%B6%E9%87%8C%E5%B0%B1%E6%98%AF%E6%A0%B9%E6%8D%AE%E7%88%B6%E7%BB%84%E4%BB%B6%E8%AE%A1%E7%AE%97%E7%9A%84%E4%B8%80%E4%BA%9Bprops%E5%92%8C%E6%9C%AC%E8%BA%AB%E7%9A%84props%E8%AE%A1%E7%AE%97%E5%87%BA%E5%9B%BE%E6%A0%87%E5%92%8C%E7%8A%B6%E6%80%81%E8%BF%9B%E8%A1%8C%E6%B8%B2%E6%9F%93%E3%80%82%3C%2Fp%3E%0A"})}},[["+VmP",1,0]]]);