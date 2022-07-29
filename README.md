# SmmApi
一个轻盈简单的api测试接口工具，采用原生HTML写的界面，引用 jQuery包 辅助 js逻辑层开发

![img](https://raw.githubusercontent.com/smmcat/SmmApi/main/img/img1.png)

## 使用方式

### 特性

类似 **apiFix** ,用户可直接在输入框填写接口地址 + url 路径，并选择对应的 GET 和 POST 请求，传递对应参数

### 携带参数

通过下方选择栏中对应的表格可填写对应的不同类型的请求数据进行传参，可添加多条请求数据

### 可选参数

在填写在表格中的每行请求参数左侧有勾选框，需要勾选后，才能将此行的请求参数发送，

默认勾选，如若不需要传递该行参数，取消勾选即可


### 发送 formData对象数据

formData对象 与 application/x-www-form-urlencoded 对象的参数 只能二选一，

如若需要发起 formData对象的数据，请勾选 formData选项

## 后记

 浏览器还真不太适合做接口测试工具嗯..(CORS警告)
