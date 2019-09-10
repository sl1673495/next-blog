
      import withMd from '../../lib/with-md'

      export default withMd({
        blog: {"url":"https://api.github.com/repos/sl1673495/blogs/issues/5","repository_url":"https://api.github.com/repos/sl1673495/blogs","labels_url":"https://api.github.com/repos/sl1673495/blogs/issues/5/labels{/name}","comments_url":"https://api.github.com/repos/sl1673495/blogs/issues/5/comments","events_url":"https://api.github.com/repos/sl1673495/blogs/issues/5/events","html_url":"https://github.com/sl1673495/blogs/issues/5","id":367088504,"node_id":"MDU6SXNzdWUzNjcwODg1MDQ=","number":5,"title":"react-component源码学习（1） rc-form","user":{"login":"sl1673495","id":23615778,"node_id":"MDQ6VXNlcjIzNjE1Nzc4","avatar_url":"https://avatars1.githubusercontent.com/u/23615778?v=4","gravatar_id":"","url":"https://api.github.com/users/sl1673495","html_url":"https://github.com/sl1673495","followers_url":"https://api.github.com/users/sl1673495/followers","following_url":"https://api.github.com/users/sl1673495/following{/other_user}","gists_url":"https://api.github.com/users/sl1673495/gists{/gist_id}","starred_url":"https://api.github.com/users/sl1673495/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/sl1673495/subscriptions","organizations_url":"https://api.github.com/users/sl1673495/orgs","repos_url":"https://api.github.com/users/sl1673495/repos","events_url":"https://api.github.com/users/sl1673495/events{/privacy}","received_events_url":"https://api.github.com/users/sl1673495/received_events","type":"User","site_admin":false},"labels":[{"id":1525741429,"node_id":"MDU6TGFiZWwxNTI1NzQxNDI5","url":"https://api.github.com/repos/sl1673495/blogs/labels/React","name":"React","color":"60DAFb","default":false}],"state":"open","locked":false,"assignee":null,"assignees":[],"milestone":null,"comments":0,"created_at":"2018-10-05T07:18:31Z","updated_at":"2019-08-29T09:43:33Z","closed_at":null,"author_association":"OWNER"},
        comments: [],
        html: `%3Cp%3Erc-form%E4%BD%9C%E4%B8%BAant-design%E7%B3%BB%E5%88%97%E5%AE%9E%E7%8E%B0%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6%E7%9A%84%E5%BA%95%E5%B1%82%E7%BB%84%E4%BB%B6%EF%BC%8C%20%E9%80%9A%E7%94%A8%E6%80%A7%E5%92%8C%E5%BC%BA%E5%A4%A7%E7%9A%84%E5%8A%9F%E8%83%BD%E5%85%BC%E5%BE%97%EF%BC%8C%E8%BF%99%E5%BE%97%E7%9B%8A%E4%BA%8E%E5%AE%83%E5%BA%95%E5%B1%82%E7%9A%84%E7%B2%BE%E5%A6%99%E5%AE%9E%E7%8E%B0%EF%BC%8Crc-form%E6%98%AF%E5%85%B8%E5%9E%8B%E7%9A%84%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6%EF%BC%88higher-order%20component%EF%BC%89%3C%2Fp%3E%0A%3Cp%3E%E4%B8%8B%E9%9D%A2%E4%BB%8E%E4%B8%80%E4%B8%AA%E5%AE%98%E6%96%B9%E7%9A%84%E7%AE%80%E5%8D%95%E7%A4%BA%E4%BE%8B%E8%AF%B4%E8%B5%B7%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eimport%20%7B%20createForm%2C%20formShape%20%7D%20from%20'rc-form'%3B%0A%0Aclass%20Form%20extends%20React.Component%20%7B%0A%20%20static%20propTypes%20%3D%20%7B%0A%20%20%20%20form%3A%20formShape%2C%0A%20%20%7D%3B%0A%0A%20%20submit%20%3D%20()%20%3D%26gt%3B%20%7B%0A%20%20%20%20this.props.form.validateFields((error%2C%20value)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20console.log(error%2C%20value)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20let%20errors%3B%0A%20%20%20%20const%20%7B%20getFieldProps%2C%20getFieldError%20%7D%20%3D%20this.props.form%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%26lt%3Bdiv%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Binput%20%7B...getFieldProps('normal')%7D%2F%26gt%3B%0A%20%20%20%20%20%20%20%20%26lt%3Binput%20%7B...getFieldProps('required'%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20onChange()%7B%7D%2C%20%2F%2F%20have%20to%20write%20original%20onChange%20here%20if%20you%20need%0A%20%20%20%20%20%20%20%20%20%20rules%3A%20%5B%7Brequired%3A%20true%7D%5D%2C%0A%20%20%20%20%20%20%20%20%7D)%7D%2F%26gt%3B%0A%20%20%20%20%20%20%20%20%7B(errors%20%3D%20getFieldError('required'))%20%3F%20errors.join('%2C')%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%26lt%3Bbutton%20onClick%3D%7Bthis.submit%7D%26gt%3Bsubmit%26lt%3B%2Fbutton%26gt%3B%0A%20%20%20%20%20%20%26lt%3B%2Fdiv%26gt%3B%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aexport%20createForm()(Form)%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E5%9C%A8%E6%9C%80%E5%90%8E%E7%94%A8createForm%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E6%89%A7%E8%A1%8C%E8%BF%94%E5%9B%9E%E7%9A%84%E5%87%BD%E6%95%B0%E5%8C%85%E8%A3%B9%E4%BA%86Form%E7%BB%84%E4%BB%B6%EF%BC%8C%0A%E6%AD%A3%E5%9B%A0%E4%B8%BA%E5%A6%82%E6%AD%A4%E5%9C%A8render%E4%B8%AD%E6%89%8D%E5%8F%AF%E4%BB%A5%E4%BB%8Eprops%E9%87%8C%E6%8B%BF%E5%88%B0from%EF%BC%8C%20%E8%BF%99%E6%98%AFrc-form%E6%8F%90%E4%BE%9B%E7%BB%99%E6%88%91%E4%BB%AC%E7%9A%84%EF%BC%8C%E6%8E%A5%E4%B8%8B%E6%9D%A5%E7%9C%8B%E7%9C%8B%E8%BF%99%E4%B8%AAform%E6%98%AF%E5%A6%82%E4%BD%95%E6%B3%A8%E5%85%A5%E8%BF%9B%E5%8E%BB%E7%9A%84%E3%80%82%3C%2Fp%3E%0A%3Ch3%3EcreateForm.js%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eimport%20createBaseForm%20from%20'.%2FcreateBaseForm'%3B%0A%0Aexport%20const%20mixin%20%3D%20%7B%0A%20%20getForm()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20getFieldsValue%3A%20this.fieldsStore.getFieldsValue%2C%0A%20%20%20%20%20%20getFieldValue%3A%20this.fieldsStore.getFieldValue%2C%0A%20%20%20%20%20%20getFieldInstance%3A%20this.getFieldInstance%2C%0A%20%20%20%20%20%20setFieldsValue%3A%20this.setFieldsValue%2C%0A%20%20%20%20%20%20setFields%3A%20this.setFields%2C%0A%20%20%20%20%20%20setFieldsInitialValue%3A%20this.fieldsStore.setFieldsInitialValue%2C%0A%20%20%20%20%20%20getFieldDecorator%3A%20this.getFieldDecorator%2C%0A%20%20%20%20%20%20getFieldProps%3A%20this.getFieldProps%2C%0A%20%20%20%20%20%20getFieldsError%3A%20this.fieldsStore.getFieldsError%2C%0A%20%20%20%20%20%20getFieldError%3A%20this.fieldsStore.getFieldError%2C%0A%20%20%20%20%20%20isFieldValidating%3A%20this.fieldsStore.isFieldValidating%2C%0A%20%20%20%20%20%20isFieldsValidating%3A%20this.fieldsStore.isFieldsValidating%2C%0A%20%20%20%20%20%20isFieldsTouched%3A%20this.fieldsStore.isFieldsTouched%2C%0A%20%20%20%20%20%20isFieldTouched%3A%20this.fieldsStore.isFieldTouched%2C%0A%20%20%20%20%20%20isSubmitting%3A%20this.isSubmitting%2C%0A%20%20%20%20%20%20submit%3A%20this.submit%2C%0A%20%20%20%20%20%20validateFields%3A%20this.validateFields%2C%0A%20%20%20%20%20%20resetFields%3A%20this.resetFields%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%7D%3B%0A%0Afunction%20createForm(options)%20%7B%0A%20%20return%20createBaseForm(options%2C%20%5Bmixin%5D)%3B%0A%7D%0A%0Aexport%20default%20createForm%3B%0A%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%98%AF%E6%88%91%E4%BB%AC%E5%9C%A8render%E4%B8%AD%E8%B0%83%E7%94%A8%E7%9A%84createForm%20%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0mixin%E4%B8%AD%E7%9A%84getForm%E9%87%8C%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%88%91%E4%BB%AC%E4%BD%BF%E7%94%A8%E7%9A%84%E5%BE%88%E7%9B%B8%E4%BC%BC%EF%BC%8C%E5%85%B6%E5%AE%9E%E8%BF%99%E5%B0%B1%E6%98%AF%E6%9C%80%E7%BB%88%E6%B3%A8%E5%85%A5%E7%9A%84props.form%E5%B1%9E%E6%80%A7%EF%BC%8C%20%E5%AF%B9%E5%A4%96%E6%9A%B4%E9%9C%B2%E7%9A%84createForm%E6%96%B9%E6%B3%95%E6%9C%80%E7%BB%88%E8%B0%83%E7%94%A8%E4%BA%86createBaseForm%E5%B9%B6%E5%B0%86mixin%E4%BC%A0%E5%85%A5%E3%80%82%3C%2Fp%3E%0A%3Ch3%3EcreateBaseForm.js%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Efunction%20createBaseForm(option%20%3D%20%7B%7D%2C%20mixins%20%3D%20%5B%5D)%20%7B%0A%20%20const%20%7B%0A%20%20%20%20validateMessages%2C%0A%20%20%20%20onFieldsChange%2C%0A%20%20%20%20onValuesChange%2C%0A%20%20%20%20mapProps%20%3D%20identity%2C%0A%20%20%20%20mapPropsToFields%2C%0A%20%20%20%20fieldNameProp%2C%0A%20%20%20%20fieldMetaProp%2C%0A%20%20%20%20fieldDataProp%2C%0A%20%20%20%20formPropName%20%3D%20'form'%2C%0A%20%20%20%20name%3A%20formName%2C%0A%20%20%20%20%2F%2F%20%40deprecated%0A%20%20%20%20withRef%2C%0A%20%20%7D%20%3D%20option%3B%0A%0A%20%20return%20function%20decorate(WrappedComponent)%20%7B%0A%20%20%20%20const%20Form%20%3D%20createReactClass(%7B%0A%20%20%20%20%20%20mixins%2C%0A%20%20%20%20%20%20.......%2C%0A%20%20%20%20%20%20render()%20%7B%0A%20%20%20%20%20%20%20%20const%20%7B%20wrappedComponentRef%2C%20...restProps%20%7D%20%3D%20this.props%3B%0A%20%20%20%20%20%20%20%20const%20formProps%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%5BformPropName%5D%3A%20this.getForm()%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20if%20(withRef)%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(process.env.NODE_ENV%20!%3D%3D%20'production'%20%26amp%3B%26amp%3B%20process.env.NODE_ENV%20!%3D%3D%20'test')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20warning(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%60withRef%60%20is%20deprecated%2C%20please%20use%20%60wrappedComponentRef%60%20instead.%20'%20%2B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'See%3A%20https%3A%2F%2Fgithub.com%2Freact-component%2Fform%23note-use-wrappedcomponentref-instead-of-withref-after-rc-form140'%0A%20%20%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20formProps.ref%20%3D%20'wrappedComponent'%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20(wrappedComponentRef)%20%7B%0A%20%20%20%20%20%20%20%20%20%20formProps.ref%20%3D%20wrappedComponentRef%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20const%20props%20%3D%20mapProps.call(this%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20...formProps%2C%0A%20%20%20%20%20%20%20%20%20%20...restProps%2C%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20return%20%26lt%3BWrappedComponent%20%7B...props%7D%2F%26gt%3B%3B%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20return%20argumentContainer(Form%2C%20WrappedComponent)%3B%0A%20%20%7D%3B%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%87%BAcreateBaseForm%E6%98%AF%E4%B8%80%E4%B8%AA%E5%85%B8%E5%9E%8B%E7%9A%84%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0%EF%BC%8C%E6%8E%A5%E5%8F%97options%E5%92%8Cmixin%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0%EF%BC%8C%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E8%A3%85%E9%A5%B0%E5%99%A8decorate%E5%87%BD%E6%95%B0%2C%20%E8%BF%99%E4%B8%AAdecorate%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%97%E4%B8%80%E4%B8%AAreact%20component%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0%EF%BC%8C%E6%89%80%E4%BB%A5%E6%88%91%E4%BB%AC%E5%9C%A8%E5%A4%96%E9%83%A8%E8%B0%83%E7%94%A8%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EcreateForm()(Form)%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E6%A0%B7%E5%8E%BB%E8%8E%B7%E5%BE%97%E4%B8%80%E4%B8%AA%E6%B3%A8%E5%85%A5%E4%BA%86props%E7%9A%84%E7%BB%84%E4%BB%B6%2C%20%E6%8E%A5%E4%B8%8B%E6%9D%A5%E7%9C%8Brender%E4%B8%AD%E7%9A%84%E5%AE%9E%E7%8E%B0%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20%20%20%20%20%20%20const%20formProps%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%5BformPropName%5D%3A%20this.getForm()%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20return%20%26lt%3BWrappedComponent%20%7B...props%7D%2F%26gt%3B%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3EformPropName%E5%9C%A8defaultProps%E4%B8%AD%E9%BB%98%E8%AE%A4%E8%A2%AB%E8%AE%BE%E7%BD%AE%E4%B8%BA'form'%2C%20getForm%E6%98%AF%E4%BB%8Emixin%E4%B8%AD%E6%B3%A8%E5%85%A5%E7%9A%84%EF%BC%8C%0A%E5%85%B6%E5%AE%9E%E5%B0%B1%E7%9B%B8%E5%BD%93%E4%BA%8E%E6%B3%A8%E5%85%A5%E4%BA%86%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%7B%0A%20%20form%3A%20%7B%0A%20%20%20%20%20%20getFieldsValue%3A%20this.fieldsStore.getFieldsValue%2C%0A%20%20%20%20%20%20getFieldValue%3A%20this.fieldsStore.getFieldValue%2C%0A%20%20%20%20%20%20getFieldInstance%3A%20this.getFieldInstance%2C%0A%20%20%20%20%20%20setFieldsValue%3A%20this.setFieldsValue%2C%0A%20%20%20%20%20%20setFields%3A%20this.setFields%2C%0A%20%20%20%20%20%20setFieldsInitialValue%3A%20this.fieldsStore.setFieldsInitialValue%2C%0A%20%20%20%20%20%20getFieldDecorator%3A%20this.getFieldDecorator%2C%0A%20%20%20%20%20%20getFieldProps%3A%20this.getFieldProps%2C%0A%20%20%20%20%20%20getFieldsError%3A%20this.fieldsStore.getFieldsError%2C%0A%20%20%20%20%20%20getFieldError%3A%20this.fieldsStore.getFieldError%2C%0A%20%20%20%20%20%20isFieldValidating%3A%20this.fieldsStore.isFieldValidating%2C%0A%20%20%20%20%20%20isFieldsValidating%3A%20this.fieldsStore.isFieldsValidating%2C%0A%20%20%20%20%20%20isFieldsTouched%3A%20this.fieldsStore.isFieldsTouched%2C%0A%20%20%20%20%20%20isFieldTouched%3A%20this.fieldsStore.isFieldTouched%2C%0A%20%20%20%20%20%20isSubmitting%3A%20this.isSubmitting%2C%0A%20%20%20%20%20%20submit%3A%20this.submit%2C%0A%20%20%20%20%20%20validateFields%3A%20this.validateFields%2C%0A%20%20%20%20%20%20resetFields%3A%20this.resetFields%2C%0A%20%20%7D%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E7%9C%8B%E6%BA%90%E7%A0%81%E5%85%88%E4%BB%8E%E4%B8%BB%E6%B5%81%E7%A8%8B%E7%9C%8B%E8%B5%B7%EF%BC%8C%20%E7%9F%A5%E9%81%93%E4%BA%86form%E6%98%AF%E5%A6%82%E4%BD%95%E6%B3%A8%E5%85%A5%E4%BB%A5%E5%90%8E%EF%BC%8C%E6%88%91%E4%BB%AC%E5%B0%B1%E4%BB%8E%E7%A4%BA%E4%BE%8B%E5%85%A5%E6%89%8B%EF%BC%8C%20%E5%85%88%E7%9C%8B%E7%9C%8B%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%26lt%3Binput%20%7B...getFieldProps('normal')%7D%2F%26gt%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E4%B8%AD%E7%9A%84getFieldProps%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E3%80%82%3C%2Fp%3E%0A%3Ch3%3EgetFieldProps%3C%2Fh3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EgetFieldProps(name%2C%20usersFieldOption%20%3D%20%7B%7D)%20%7B%0A%20%20%20%20%20%20%20%20if%20(!name)%20%7B%0A%20%20%20%20%20%20%20%20%20%20throw%20new%20Error('Must%20call%20%60getFieldProps%60%20with%20valid%20name%20string!')%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20if%20(process.env.NODE_ENV%20!%3D%3D%20'production')%20%7B%0A%20%20%20%20%20%20%20%20%20%20warning(%0A%20%20%20%20%20%20%20%20%20%20%20%20this.fieldsStore.isValidNestedFieldName(name)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'One%20field%20name%20cannot%20be%20part%20of%20another%2C%20e.g.%20%60a%60%20and%20%60a.b%60.'%0A%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%20%20warning(%0A%20%20%20%20%20%20%20%20%20%20%20%20!('exclusive'%20in%20usersFieldOption)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20'%60option.exclusive%60%20of%20%60getFieldProps%60%7C%60getFieldDecorator%60%20had%20been%20remove.'%0A%20%20%20%20%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20delete%20this.clearedFieldMetaCache%5Bname%5D%3B%0A%0A%20%20%20%20%20%20%20%20const%20fieldOption%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20%20%20trigger%3A%20DEFAULT_TRIGGER%2C%0A%20%20%20%20%20%20%20%20%20%20valuePropName%3A%20'value'%2C%0A%20%20%20%20%20%20%20%20%20%20validate%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20...usersFieldOption%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20const%20%7B%0A%20%20%20%20%20%20%20%20%20%20rules%2C%0A%20%20%20%20%20%20%20%20%20%20trigger%2C%0A%20%20%20%20%20%20%20%20%20%20validateTrigger%20%3D%20trigger%2C%0A%20%20%20%20%20%20%20%20%20%20validate%2C%0A%20%20%20%20%20%20%20%20%7D%20%3D%20fieldOption%3B%0A%0A%20%20%20%20%20%20%20%20const%20fieldMeta%20%3D%20this.fieldsStore.getFieldMeta(name)%3B%0A%20%20%20%20%20%20%20%20if%20('initialValue'%20in%20fieldOption)%20%7B%0A%20%20%20%20%20%20%20%20%20%20fieldMeta.initialValue%20%3D%20fieldOption.initialValue%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20const%20inputProps%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20...this.fieldsStore.getFieldValuePropValue(fieldOption)%2C%0A%20%20%20%20%20%20%20%20%20%20ref%3A%20this.getCacheBind(name%2C%20%60%24%7Bname%7D__ref%60%2C%20this.saveRef)%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20if%20(fieldNameProp)%20%7B%0A%20%20%20%20%20%20%20%20%20%20inputProps%5BfieldNameProp%5D%20%3D%20formName%20%3F%20%60%24%7BformName%7D_%24%7Bname%7D%60%20%3A%20name%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20const%20validateRules%20%3D%20normalizeValidateRules(validate%2C%20rules%2C%20validateTrigger)%3B%0A%20%20%20%20%20%20%20%20const%20validateTriggers%20%3D%20getValidateTriggers(validateRules)%3B%0A%20%20%20%20%20%20%20%20validateTriggers.forEach((action)%20%3D%26gt%3B%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(inputProps%5Baction%5D)%20return%3B%0A%20%20%20%20%20%20%20%20%20%20inputProps%5Baction%5D%20%3D%20this.getCacheBind(name%2C%20action%2C%20this.onCollectValidate)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20make%20sure%20that%20the%20value%20will%20be%20collect%0A%20%20%20%20%20%20%20%20if%20(trigger%20%26amp%3B%26amp%3B%20validateTriggers.indexOf(trigger)%20%3D%3D%3D%20-1)%20%7B%0A%20%20%20%20%20%20%20%20%20%20inputProps%5Btrigger%5D%20%3D%20this.getCacheBind(name%2C%20trigger%2C%20this.onCollect)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20const%20meta%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20...fieldMeta%2C%0A%20%20%20%20%20%20%20%20%20%20...fieldOption%2C%0A%20%20%20%20%20%20%20%20%20%20validate%3A%20validateRules%2C%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20this.fieldsStore.setFieldMeta(name%2C%20meta)%3B%0A%20%20%20%20%20%20%20%20if%20(fieldMetaProp)%20%7B%0A%20%20%20%20%20%20%20%20%20%20inputProps%5BfieldMetaProp%5D%20%3D%20meta%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20if%20(fieldDataProp)%20%7B%0A%20%20%20%20%20%20%20%20%20%20inputProps%5BfieldDataProp%5D%20%3D%20this.fieldsStore.getField(name)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20return%20inputProps%3B%0A%20%20%20%20%20%20%7D%2C%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%97name%EF%BC%8C%E5%92%8CusersFieldOption%E4%B8%A4%E4%B8%AA%E5%8F%82%E6%95%B0%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Econst%20fieldOption%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20%20%20trigger%3A%20DEFAULT_TRIGGER%2C%20%2F%2F%20onChange%0A%20%20%20%20%20%20%20%20%20%20valuePropName%3A%20'value'%2C%0A%20%20%20%20%20%20%20%20%20%20validate%3A%20%5B%5D%2C%0A%20%20%20%20%20%20%20%20%20%20...usersFieldOption%2C%0A%7D%3B%0A%0A%20const%20fieldMeta%20%3D%20this.fieldsStore.getFieldMeta(name)%3B%0A%20if%20('initialValue'%20in%20fieldOption)%20%7B%0A%20%20%20%20fieldMeta.initialValue%20%3D%20fieldOption.initialValue%3B%0A%20%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%85%88%E6%98%AF%E4%B8%80%E6%B3%A2%E7%AE%80%E5%8D%95%E7%9A%84%E5%90%88%E5%B9%B6%E9%85%8D%E7%BD%AE%EF%BC%8C%20%E5%B0%86usersFieldOption%E6%B7%B7%E5%85%A5fiedOption%E4%B8%AD%2C%0A%E7%84%B6%E5%90%8E%E4%BB%8Ethis.fieldsStore%E4%B8%AD%E6%A0%B9%E6%8D%AEname%E6%8F%90%E5%8F%96%E5%87%BAfieldMeta%2C%20%E5%B0%86initialValue%E5%A1%AB%E5%85%A5%E3%80%82%0AfieldsStore%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AD%98%E5%82%A8%E7%B1%BB%EF%BC%8Cform%E7%BB%84%E4%BB%B6%E5%86%85%E9%83%A8%E6%9C%89%E5%A4%A7%E9%87%8F%E7%9A%84%E6%95%B0%E6%8D%AE%E9%9C%80%E8%A6%81%E5%AD%98%E5%82%A8%E5%92%8C%E8%AF%BB%E5%8F%96%EF%BC%8C%E6%89%80%E4%BB%A5%E5%AE%9E%E7%8E%B0%E4%BA%86%E4%B8%80%E4%B8%AAfieldsStore%E7%B1%BB%E5%8E%BB%E5%A4%84%E7%90%86%E6%95%B0%E6%8D%AE%E7%9A%84%E6%B5%81%E8%BD%AC%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eclass%20FieldsStore%20%7B%0A%20%20constructor(fields)%20%7B%0A%20%20%20%20this.fields%20%3D%20this.flattenFields(fields)%3B%0A%20%20%20%20this.fieldsMeta%20%3D%20%7B%7D%3B%0A%20%20%7D%0A%20%20...%0A%20%20getFieldMeta(name)%20%7B%0A%20%20%20%20this.fieldsMeta%5Bname%5D%20%3D%20this.fieldsMeta%5Bname%5D%20%7C%7C%20%7B%7D%3B%0A%20%20%20%20return%20this.fieldsMeta%5Bname%5D%3B%0A%20%20%7D%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%9B%A0%E4%B8%BA%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84this.fieldsStore%E5%BA%94%E8%AF%A5%E6%98%AF%E7%A9%BA%E7%9A%84%EF%BC%8C%20%E6%89%80%E4%BB%A5%E8%BF%99%E9%87%8C%E4%B9%9F%E5%8F%AA%E6%98%AF%E8%AF%BB%E5%8F%96%E5%88%B0%E4%BA%86%E4%B8%80%E4%B8%AA%E7%A9%BA%E5%AF%B9%E8%B1%A1%EF%BC%8C%E7%BB%A7%E7%BB%AD%E5%BE%80%E4%B8%8B%E8%B5%B0%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Econst%20inputProps%20%3D%20%7B%0A%20%20%20...this.fieldsStore.getFieldValuePropValue(fieldOption)%2C%0A%20%20%20ref%3A%20this.getCacheBind(name%2C%20%60%24%7Bname%7D__ref%60%2C%20this.saveRef)%2C%0A%7D%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3EinputProps%E4%B8%AD%E5%85%88%E6%98%AF%E9%80%9A%E8%BF%87fieldsStore%E5%AE%9E%E4%BE%8B%E7%9A%84getFieldValuePropValue%E6%96%B9%E6%B3%95%E4%BC%A0%E5%85%A5fieldOption%E6%8B%BF%E5%88%B0%E4%B8%80%E4%BA%9B%E5%B1%9E%E6%80%A7%EF%BC%8C%0A%E5%9C%A8%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E6%97%B6%E5%80%99%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%7B%20value%3A%20undefined%20%7D%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20getFieldValuePropValue(fieldMeta)%20%7B%0A%20%20%20%20%2F%2F%20%E5%AF%B9%E5%BA%94%E7%A4%BA%E4%BE%8B%E4%B8%AD%20name%3A%20'normal'%2C%20valuePropName%3A%20'value'%0A%20%20%20%20const%20%7B%20name%2C%20getValueProps%2C%20valuePropName%20%7D%20%3D%20fieldMeta%3B%0A%20%20%20%2F%2F%20%E5%BE%97%E5%88%B0%20%7B%20%20name%3A%20'normal'%20%20%7D%EF%BC%8C%20%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E6%97%B6%E5%80%99fields%E8%BF%98%E4%B8%BA%E7%A9%BA%0A%20%20%20%20const%20field%20%3D%20this.getField(name)%3B%0A%20%20%20%2F%2F%20field%E4%B8%AD%E6%B2%A1%E6%9C%89value%EF%BC%8C%20%E6%89%80%E4%BB%A5%E5%8E%BB%E5%8F%96initialValue%EF%BC%8C%20%E7%A4%BA%E4%BE%8B%E4%B8%AD%E6%9C%AA%E4%BC%A0%E5%85%A5%EF%BC%8C%E5%90%8C%E6%A0%B7%E4%B8%BA%E7%A9%BA%20%0A%20%20%20%20const%20fieldValue%20%3D%20'value'%20in%20field%20%3F%0A%20%20%20%20%20%20field.value%20%3A%20fieldMeta.initialValue%3B%0A%20%20%20%20if%20(getValueProps)%20%7B%0A%20%20%20%20%20%20return%20getValueProps(fieldValue)%3B%0A%20%20%20%20%7D%0A%20%20%20%2F%2F%20%E5%88%9D%E5%A7%8B%E5%8C%96%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E8%BF%94%E5%9B%9E%20%7B%20value%3A%20undefined%20%7D%0A%20%20%20%20return%20%7B%20%5BvaluePropName%5D%3A%20fieldValue%20%7D%3B%0A%20%20%7D%0A%0A%20%20getField(name)%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20...this.fields%5Bname%5D%2C%0A%20%20%20%20%20%20name%2C%0A%20%20%20%20%7D%3B%0A%20%20%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3Eref%E5%88%99%E6%98%AF%E9%80%9A%E8%BF%87this.cacheBind%E7%9A%84%E7%BC%93%E5%AD%98%E6%96%B9%E6%B3%95%E5%8E%BB%E5%8F%96%E7%BC%93%E5%AD%98%E4%BA%86%E7%9A%84%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0ref%0A%E6%AD%A4%E6%97%B6inputProps%20%3D%20%7B%0Avalue%3A%20undefined%2C%0Aref%3A%20component%2C%0A%7D%3C%2Fp%3E%0A%3Cp%3E%E6%8E%A5%E4%B8%8B%E6%9D%A5%E6%98%AF%E5%A4%84%E7%90%86%E6%9C%89%E5%85%B3%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81%E7%9A%84%E9%80%BB%E8%BE%91%EF%BC%8C%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Econst%20validateRules%20%3D%20normalizeValidateRules(validate%2C%20rules%2C%20validateTrigger)%3B%0Aconst%20validateTriggers%20%3D%20getValidateTriggers(validateRules)%3B%0AvalidateTriggers.forEach((action)%20%3D%26gt%3B%20%7B%0A%20%20%20if%20(inputProps%5Baction%5D)%20return%3B%0A%20%20%20inputProps%5Baction%5D%20%3D%20this.getCacheBind(name%2C%20action%2C%20this.onCollectValidate)%3B%0A%7D)%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3EnormalizeValidateRules%E6%96%B9%E6%B3%95%E6%8E%A5%E5%8F%97%E7%9A%84validate%E5%9C%A8%E7%A4%BA%E4%BE%8B%E6%9C%AA%E4%BC%A0%E5%85%A5%EF%BC%8C%E6%98%AF%E7%A9%BA%E6%95%B0%E7%BB%84%EF%BC%8Crules%E6%98%AF%20%5B%7Brequired%3A%20true%7D%5D%2C%20validateTrigger%E6%98%AF%E9%BB%98%E8%AE%A4%E7%9A%84onChange%2C%20%E7%9C%8BnormalizeValidateRules%E7%9A%84%E5%AE%9E%E7%8E%B0%EF%BC%9A%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eexport%20function%20normalizeValidateRules(validate%2C%20rules%2C%20validateTrigger)%20%7B%0A%20%20const%20validateRules%20%3D%20validate.map((item)%20%3D%26gt%3B%20%7B%0A%20%20%20%20const%20newItem%20%3D%20%7B%0A%20%20%20%20%20%20...item%2C%0A%20%20%20%20%20%20trigger%3A%20item.trigger%20%7C%7C%20%5B%5D%2C%0A%20%20%20%20%7D%3B%0A%20%20%20%20if%20(typeof%20newItem.trigger%20%3D%3D%3D%20'string')%20%7B%0A%20%20%20%20%20%20newItem.trigger%20%3D%20%5BnewItem.trigger%5D%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20newItem%3B%0A%20%20%7D)%3B%0A%20%20if%20(rules)%20%7B%0A%20%20%20%20validateRules.push(%7B%0A%20%20%20%20%20%20trigger%3A%20validateTrigger%20%3F%20%5B%5D.concat(validateTrigger)%20%3A%20%5B%5D%2C%0A%20%20%20%20%20%20rules%2C%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%20%20return%20validateRules%3B%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%88%91%E4%BB%AC%E5%8F%91%E7%8E%B0%E5%85%B6%E5%AE%9E%E8%BF%94%E5%9B%9E%E4%BA%86%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3EvalidateRules%3A%20%5B%7B%0A%20%20trigger%3A%20%5B'onChange'%5D%2C%0A%20%20rules%3A%20%5B%7Brequired%3A%20true%7D%5D%0A%7D%5D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%9C%A8%E7%9C%8BgetValidateTriggers%20%E5%B0%86%E4%B8%8A%E9%9D%A2%E7%9A%84%E6%95%B0%E7%BB%84%E4%BC%A0%E5%85%A5%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eexport%20function%20getValidateTriggers(validateRules)%20%7B%0A%20%20return%20validateRules%0A%20%20%20%20.filter(item%20%3D%26gt%3B%20!!item.rules%20%26amp%3B%26amp%3B%20item.rules.length)%0A%20%20%20%20.map(item%20%3D%26gt%3B%20item.trigger)%0A%20%20%20%20.reduce((pre%2C%20curr)%20%3D%26gt%3B%20pre.concat(curr)%2C%20%5B%5D)%3B%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E7%AE%80%E5%8D%95%E7%9A%84%E6%8A%8Arules%E4%B8%BA%E7%A9%BA%E7%9A%84%E9%A1%B9%E8%BF%87%E6%BB%A4%E6%8E%89%2C%20%E5%9B%A0%E4%B8%BA%E6%AF%8F%E4%B8%AArule%E7%9A%84trigger%E5%8F%AF%E8%83%BD%E6%9C%89%E5%A4%9A%E4%B8%AA%20%E6%89%80%E4%BB%A5reduce%E7%9A%84%E7%9B%AE%E7%9A%84%E6%98%AF%E6%8B%89%E5%B9%B3%E6%88%90%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84%2C%20%E6%9C%80%E5%90%8E%E8%BF%94%E5%9B%9E%5B'onChange'%5D%E8%BF%99%E6%A0%B7%E7%9A%84%E6%95%B0%E7%BB%84%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20%20validateTriggers%20%3D%20%5B'onChange'%5D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%9C%80%E5%90%8E%E5%AF%B9validateTriggers%E8%BF%9B%E8%A1%8C%E5%BE%AA%E7%8E%AF%EF%BC%8C%E5%BE%AA%E7%8E%AF%E4%BD%93%E5%86%85%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(inputProps%5Baction%5D)%20return%3B%0AinputProps%5Baction%5D%20%3D%20this.getCacheBind(name%2C%20action%2C%20this.onCollectValidate)%3B%0A%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E6%8A%8AonChange%3A%20onCollectValidate%20%E8%BF%99%E6%A0%B7%E7%9A%84%E6%A0%A1%E9%AA%8C%E8%A7%A6%E5%8F%91%E9%80%BB%E8%BE%91%E6%B7%B7%E5%85%A5inputProps%EF%BC%8C%E5%85%B3%E4%BA%8E%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%9A%84%E9%80%BB%E8%BE%91%E5%85%B6%E5%AE%9E%E6%98%AF%E7%94%A8%E4%BA%86heyiming%E5%A4%A7%E5%A4%A7%E5%86%99%E7%9A%84async-validator%E8%BF%99%E4%B8%AA%E5%BA%93%EF%BC%8C%E4%BD%BF%E7%94%A8%E9%9D%9E%E5%B8%B8%E5%B9%BF%E6%B3%9B%EF%BC%8C%E6%9C%89%E7%A9%BA%E7%9A%84%E8%AF%9D%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E4%B8%80%E4%B8%8B%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%8F%A6%E5%BC%80%E4%B8%80%E7%AF%87%E4%BA%86~%3C%2Fp%3E%0A%3Cp%3E%E6%8E%A5%E4%B8%8B%E6%9D%A5%E5%B0%B1%E6%98%AF%E5%90%88%E5%B9%B6%E6%96%B0%E7%9A%84meta%E5%AF%B9%E8%B1%A1%EF%BC%8C%E5%B9%B6%E4%B8%94%E5%AD%98%E5%85%A5fieldsStore%E4%B8%AD%E5%AF%B9%E5%BA%94%E7%9A%84name%E5%AD%98%E5%82%A8%E7%A9%BA%E9%97%B4%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Econst%20meta%20%3D%20%7B%0A%20%20%20...fieldMeta%2C%20%2F%2F%20%E5%88%9D%E5%A7%8B%E5%8C%96%E4%B8%8D%E5%AD%98%E5%9C%A8%0A%20%20%20...fieldOption%2C%20%2F%2F%20%E5%A4%96%E9%83%A8%E4%BC%A0%E5%85%A5%E5%92%8C%E5%86%85%E9%83%A8%E9%BB%98%E8%AE%A4%E5%90%88%E5%B9%B6%E5%90%8E%E7%9A%84options%0A%20%20%20validate%3A%20validateRules%2C%20%2F%2F%20%E4%B8%8A%E6%96%87%E5%B7%B2%E7%BB%8F%E7%BB%99%E5%87%BA%E7%A4%BA%E4%BE%8B%E4%B8%AD%E7%BB%93%E6%9E%9C%0A%7D%3B%0Athis.fieldsStore.setFieldMeta(name%2C%20meta)%3B%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3EsetFieldMeta%E5%AE%9E%E7%8E%B0%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E8%B5%8B%E5%80%BC%EF%BC%8C%E8%BF%99%E6%A0%B7fieldStore%E5%86%85%E9%83%A8name%E8%BF%99%E4%B8%AAkey%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%AF%BB%E5%8F%96%E5%88%B0%E5%AD%98%E5%82%A8%E7%9A%84%E6%95%B0%E6%8D%AE%E4%BA%86%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20setFieldMeta(name%2C%20meta)%20%7B%0A%20%20%20%20this.fieldsMeta%5Bname%5D%20%3D%20meta%3B%0A%20%20%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%9C%80%E5%90%8E%E8%BF%94%E5%9B%9EinputProps%E5%AF%B9%E8%B1%A1%20%E6%B7%B7%E5%85%A5input%E7%BB%84%E4%BB%B6%EF%BC%8C%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%20return%20inputProps%3B%0A%0A%2F%2F%E5%A4%A7%E6%A6%82%E7%9A%84%E6%A0%BC%E5%BC%8F%E6%98%AF%20%0A%7B%0A%20%20%20name%3A%20'required'%2C%0A%20%20%20onChange()%7B%7D%2C%20%0A%20%20%20rules%3A%20%5B%7Brequired%3A%20true%7D%5D%2C%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E7%A4%BA%E4%BE%8B%E4%B8%AD%E7%9A%84onSubmit%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E4%BA%86validateFields%2C%0A%E6%8A%9B%E5%BC%80%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%9A%84%E9%80%BB%E8%BE%91%E4%B8%8D%E7%9C%8B%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E5%86%85%E9%83%A8%E8%BF%99%E5%8F%A5%E3%80%82%3C%2Fp%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3Eif%20(callback)%20%7B%0A%20%20%20callback(null%2C%20this.fieldsStore.getFieldsValue(fieldNames))%3B%0A%7D%0A%3C%2Fcode%3E%3C%2Fpre%3E%0A%3Cp%3E%E6%9C%80%E7%BB%88%E6%95%B4%E5%90%88%E6%88%90%7B%0Akey%3A%20value%0A%7D%0A%E8%BF%99%E6%A0%B7%E7%9A%84%E7%BB%93%E6%9E%9C%E7%BB%99%E5%A4%96%E9%83%A8%E5%81%9A%E8%A1%A8%E5%8D%95%E6%8F%90%E4%BA%A4%E3%80%82%3C%2Fp%3E%0A`,
      })
    