$(function () {

    // 参数界面切换交互
    $('.api_menu li').on('click', function () {
        $(this).addClass('menu_on').siblings().removeClass('menu_on');
        console.log($(this).index());

        $('.data_box').eq($(this).index()).addClass('Box_on').siblings().removeClass(' Box_on');
    })

    // query 参数页面 单选操作
    $('#query_box').on('change', '#is_select', function () {

        // 获取所有 tr 转原生
        let tr = $(this).parents('tbody')[0].children;
        // 获取所有 tr 的数量
        let len = $(this).parents('tbody')[0].children.length;

        // 预设值
        let allType = true;

        // 判断是否全选
        for (let i = 0; i < len; i++) {
            // 遍历 选择框
            if (!$(tr).find('#is_select').eq(i)[0].checked) {
                allType = false;
            }
        }

        // 如果全选
        if (allType) {
            $('#query_box #is_select_all')[0].checked = true;
        } else {
            $('#query_box #is_select_all')[0].checked = false;
        }
    })

    // query 参数页面 全选操作
    $('#query_box').on('change', '#is_select_all', function () {

        console.log(1);
        // 获取当前 全选值
        let type = $(this)[0].checked;
        let len = $('#query_box #is_select').length;

        // 为每个 子选项赋予全选值 状态
        for (let i = 0; i < len; i++) {
            $('#query_box #is_select').eq(i)[0].checked = type;
        }
    })

    // query 增加一项子项
    $('#query_box #add_data').on('click', function () {
        // 获取 tbody 对象 转原生
        let tbody = $('#query_box tbody')[0];
        // 创造 tr
        let tr = document.createElement('tr');
        // 赋值样式
        tr.innerHTML = '<td><input type="checkbox" checked name="select" id="is_select"></td><td><input type="text" placeholder="添加参数"></td><td><input type="text"><a href="JavaScript:;"  id="del">删除</a></td>';
        // 插入 tr
        tbody.appendChild(tr);
        // 选中框 改变事件
        $('#query_box #is_select').change();
    })

    // body 参数页面 单选操作
    $('#body_box').on('change', '#is_select', function () {

        // 获取所有 tr 转原生
        let tr = $(this).parents('tbody')[0].children;
        // 获取所有 tr 的数量
        let len = $(this).parents('tbody')[0].children.length;

        // 预设值
        let allType = true;

        // 判断是否全选
        for (let i = 0; i < len; i++) {
            // 遍历 选择框
            if (!$(tr).find('#is_select').eq(i)[0].checked) {
                allType = false;
            }
        }

        // 如果全选
        if (allType) {
            $('#body_box #is_select_all')[0].checked = true;
        } else {
            $('#body_box #is_select_all')[0].checked = false;
        }
    })

    // body 参数页面 全选操作
    $('#body_box').on('change', '#is_select_all', function () {

        console.log(1);
        // 获取当前 全选值
        let type = $(this)[0].checked;
        let len = $('#body_box #is_select').length;

        // 为每个 子选项赋予全选值 状态
        for (let i = 0; i < len; i++) {
            $('#body_box #is_select').eq(i)[0].checked = type;
        }
    })

    // body 增加一项子项
    $('#body_box #add_data').on('click', function () {
        // 获取 tbody 对象 转原生
        let tbody = $('#body_box tbody')[0];
        // 创造 tr
        let tr = document.createElement('tr');
        // 赋值样式
        tr.innerHTML = '<td><input type="checkbox" checked name="select" id="is_select"></td><td><input type="text" placeholder="添加参数"></td><td><input type="text"><a href="JavaScript:;"  id="del">删除</a></td>';
        // 插入 tr
        tbody.appendChild(tr);
        // 选中框 改变事件
        $('#body_box #is_select').change();
    })
    
     // headers 增加一项子项
     $('#headers_box #add_data').on('click', function () {
        // 获取 tbody 对象 转原生
        let tbody = $('#headers_box tbody')[0];
        // 创造 tr
        let tr = document.createElement('tr');
        // 赋值样式
        tr.innerHTML = '<td><input type="checkbox" checked name="select" id="is_select"></td><td><input type="text" placeholder="添加参数"></td><td><input type="text"><a href="JavaScript:;"  id="del">删除</a></td>';
        // 插入 tr
        tbody.appendChild(tr);
        // 选中框 改变事件
        $('#headers_box #is_select').change();
    })

    // Headers 参数页面 单选操作
    $('#headers_box').on('change', '#is_select', function () {

        // 获取所有 tr 转原生
        let tr = $(this).parents('tbody')[0].children;
        // 获取所有 tr 的数量
        let len = $(this).parents('tbody')[0].children.length;

        // 预设值
        let allType = true;

        // 判断是否全选
        for (let i = 0; i < len; i++) {
            // 遍历 选择框
            if (!$(tr).find('#is_select').eq(i)[0].checked) {
                allType = false;
            }
        }

        // 如果全选
        if (allType) {
            $('#headers_box #is_select_all')[0].checked = true;
        } else {
            $('#headers_box #is_select_all')[0].checked = false;
        }
    })

    // Headers 参数页面 全选操作
    $('#headers_box').on('change', '#is_select_all', function () {

        console.log(1);
        // 获取当前 全选值
        let type = $(this)[0].checked;
        let len = $('#headers_box #is_select').length;

        // 为每个 子选项赋予全选值 状态
        for (let i = 0; i < len; i++) {
            $('#headers_box #is_select').eq(i)[0].checked = type;
        }
    })

    // 删除选项
    $('.api_data_Box').on('click', '#del', function () {
        $(this).parents('tr').remove();
    })

    // 补全前缀
    $('#api_search').on('focus', function () {
        if (!$(this).val()) {
            $(this).val('http://');
        }
    })

    // 发起请求
    $('#sub_api_form').on('submit', function (e) {
        e.preventDefault();

        if ($('#only_formDate')[0].checked) {
            // 采用 formData 方式上传数据
            $('#formData_from').submit();
        } else {
            // 采用 x-www-form-urlencoded 方式
            getRequestData();
        }
    })

    // 拼接对象值
    function mergeObj(queryArr) {
        const arr = queryArr;
        let obj = {}
        arr.forEach(x => {
            obj = { ...obj, ...x }
        })
        return obj;
    }

    // getRequestData();
    // 获取 所有 请求数据
    function getRequestData() {

        // 基础参数结构
        let request = {
            method: $('#api_type').val(),
            url: $('#api_search').val(),
            headers: mergeObj(getHeadersData()),
            success: function (res) {
                $('#api_data_content').val(JSON.stringify(res));
            }
        }
        
        console.log(request);

        console.log(mergeObj(getQueryData()));

        //传入数据
        request.data = request.method === 'GET' ? mergeObj(getQueryData()) : mergeObj(getBodyData());

        // 初始化
        $('#api_data_content').val('');

        // 发起请求
        $.ajax(request);
    }


    // 获取 body 数据
    function getBodyData() {
        // 选择 选中的 tr 条目
        let select_tr = $('#body_box #is_select:checked').parents('tr');
        // 获取 选中的 tr 条目 数量
        let len = select_tr.length;

        let bodyStr = '[';
        let bodyList = [];
        for (let i = 0; i < len; i++) {
            if (select_tr[i].children[1].children[0].value) {
                bodyList.push(`{"${select_tr[i].children[1].children[0].value}":"${select_tr[i].children[2].children[0].value ? select_tr[i].children[2].children[0].value : ''}"}`);
            }
        }

        bodyStr += bodyList.join(',');
        bodyStr += ']'

        console.log(bodyStr);
        return JSON.parse(bodyStr);

    }

    // 获取 query 数据
    function getQueryData() {
        // 选择 选中的 tr 条目
        let select_tr = $('#query_box #is_select:checked').parents('tr');
        // 获取 选中的 tr 条目 数量
        let len = select_tr.length;

        let bodyStr = '[';
        let bodyList = [];
        for (let i = 0; i < len; i++) {
            if (select_tr[i].children[1].children[0].value) {
                bodyList.push(`{"${select_tr[i].children[1].children[0].value}":"${select_tr[i].children[2].children[0].value ? select_tr[i].children[2].children[0].value : ''}"}`);
            }
        }

        bodyStr += bodyList.join(',');
        bodyStr += ']'

        console.log(bodyStr);
        return JSON.parse(bodyStr);
    }

    // 获取 headers 数据
    function getHeadersData() {
        // 选择 选中的 tr 条目
        let select_tr = $('#headers_box #is_select:checked').parents('tr');
        // 获取 选中的 tr 条目 数量
        let len = select_tr.length;

        let bodyStr = '[';
        let bodyList = [];
        for (let i = 0; i < len; i++) {
            if (select_tr[i].children[1].children[0].value) {
                bodyList.push(`{"${select_tr[i].children[1].children[0].value}":"${select_tr[i].children[2].children[0].value ? select_tr[i].children[2].children[0].value : ''}"}`);
            }
        }

        bodyStr += bodyList.join(',');
        bodyStr += ']'

        console.log(bodyStr);
        return JSON.parse(bodyStr);
    }


    // formData 提交表单 处理函数
    $('#formData_from').on('submit', function (e) {
        e.preventDefault();
        console.log('使用formData方式上传');
        let fd = new FormData($(this)[0]);

        // 基础参数结构
        let request = {
            method: $('#api_type').val(),
            url: $('#api_search').val(),
            data: fd,
            //注意：如果向服务器提交的是FormData格式的数据
            //必须添加以下两个配置项
            contentType: false,
            processData: false,
            headers: getHeadersData()[0] ? getHeadersData()[0] : {},
            success: function (res) {
                $('#api_data_content').val(JSON.stringify(res));
            }
        }

        $.ajax(request);

    })


    $('#formData_from').on('change', '.fromdata_select', function () {
        // 获取对应的值
        $(this).parents('tr')[0].querySelector('#from_data').type = $(this).val();
        console.log($(this).val());
    })

    $('#formData_from').on('change', '#data_name', function () {
        // 获取对应的值
        if ($(this).val()) {
            $(this).parents('tr')[0].querySelector('#from_data').name = $(this).val();
        } else {
            $(this).parents('tr')[0].querySelector('#from_data').removeAttribute('name');
        }
    })

    // formData 增加一项子项
    $('#formData_box #add_data').on('click', function () {
        // 获取 tbody 对象 转原生
        let tbody = $('#formData_box tbody')[0];
        // 创造 tr
        let tr = document.createElement('tr');
        // 赋值样式
        tr.innerHTML = '<td><input type="text" placeholder="添加参数" id="data_name"></td><td><select class="fromdata_select"><option value="text">文本</option><option value="file">文件</option></select></td><td><input type="text" id="from_data"><a href="JavaScript:;"  id="del">删除</a></td>';
        // 插入 tr
        tbody.appendChild(tr);
    })
});