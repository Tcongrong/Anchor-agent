define(['jquery', './xhr', 'COS', 'plupload'], function ($, xhr, COS) {
    // 上传类型枚举类
    var uploadEnum = {
        localhost: 'localhost',
        cos: 'cos'
    };

    // 上传状态枚举类
    var uploadStateEnum = {
        'none': 'none',// 未上传
        'loading': 'loading',// 上传中
        'success': 'success',// 上传成功
        'error': 'error',// 上传失败
    };

    var getBaseUrl = function () {
        var isTeacher = location.href.toLowerCase().indexOf('/teachercenter/') !== -1;
        var isStudent = location.href.toLowerCase().indexOf('/studentcenter/') !== -1;
        var isAdmin = location.href.toLowerCase().indexOf('/admin/') !== -1;

        var urls = {}

        if (isTeacher) {
            urls = {
                type:'teacher',
                authInfo: '/TeacherCenter/Answer/GetTemporaryAuth',// 授权地址
            }
        }

        if (isStudent) {
            urls = {
                type: 'student',
                authInfo: '/StudentCenter/Answer/GetTemporaryAuth',
            }
        }

        if (isAdmin) {
            urls = {
                type: 'admin',
                authInfo: '/Admin/AnswerCourse/GetTemporaryAuth',
            }
        }

        return urls
    }

    // 上传
    var UploadManage = function (options) {
        options = options || {};
        this.files = []; // 存储选择的文件

        this.options = options;
        var uploadType = uploadEnum[this.options.type];
        if (!uploadType) {
            console.error('上传类型错误，请重新填写type字段');
            return;
        }

        // 初始化
        this.layerResult = 0;

        // 初始化上传
        this.initUpload();
    }

    // 初始化上传
    UploadManage.prototype.initUpload = function () {
        var _this = this;

        var elem = typeof this.options.elem === 'string' ? this.options.elem.substring(1) : this.options.elem;
        var storeType = this.options.storeType || 'PI';//存储类型：视频文件(VE),图片文件(PI),文档文件(DO),临时文件(TM),其他(UU),默认TM(storeType)
        var extensions = this.options.extensions || 'png,jpg';// 上传的类型，默认 .png,和.jpg
        var maxFileSize = this.options.maxFileSize || '40M';// 默认10M大小

        // 初始化
        var uploader = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: elem, //触发文件选择对话框的按钮，为那个元素id
            max_file_count: 1,// 最多上传文件数
            multi_selection: false, // 是否可以选择多个文件
            multiple_queues: false, // 不可多次上传
            filters: {
                mime_types: [ //只允许上传图片和zip文件
                    { title: "files", extensions: extensions }
                ],
                max_file_size: maxFileSize,//'400kb', //最大只能上传400kb的文件
                prevent_duplicates: false //不允许选取重复文件
            },
            url: 'https://oss.aliyuncs.com', //服务器端的上传页面地址
            flash_swf_url: 'https://fedcdn.open.com.cn/fedcdn/vendor/plupload/2.1.2/Moxie.swf',
            silverlight_xap_url: 'https://fedcdn.open.com.cn/fedcdn/vendor/plupload/2.1.2/Moxie.xap',
            init: {
                FilesAdded: function (uploader, files) {//当文件添加到上传队列后触发
                    //console.log("FilesAdded--当文件添加到上传队列后触发", "uploader=", uploader, "files=", files)

                    var file = files[0].getNative();

                    var id = window.btoa(encodeURIComponent(file.name)).substring(0, 16);
                    id = id.replace('=','Q')

                    var fileData = {
                        file: file,
                        uploadState: uploadStateEnum.none,// 上传状态
                        authInfo: null,// 上传成功后的授权信息
                        id: id
                    }

                    // 选择文件后触发回调
                    if (_this.options.addBefore) {
                        var addBeforeState = _this.options.addBefore(fileData);
                        // 可以添加文件
                        if (addBeforeState == undefined || addBeforeState == true) {
                            _this.files.push(fileData);
                            // 选择文件后触发回调
                            _this.options.add && _this.options.add(fileData);
                        }
                    } else {
                        _this.files.push(fileData);
                        // 选择文件后触发回调
                        _this.options.add && _this.options.add(fileData);
                    }
                },
                BeforeUpload: function (uploader, files) {//当队列中的某一个文件正要开始上传前触发
                },
                UploadFile: function (uploader, files) {//当上传队列中某一个文件开始上传后触发
                },
                UploadProgress: function (uploader, files) {//会在文件上传过程中不断触发，可以用此事件来显示上传进度
                },
                FileUploaded: function (uploader, files, responseObject) {//当队列中的某一个文件上传完成后触发
                },
                Error: function (uploader, errObject) {//当发生错误时触发
                    var text = '';

                    if (errObject.code == -600) {
                        text = "选择的文件太大了";
                    } else if (errObject.code == -601) {
                        text = "选择的文件类型不对";
                    } else {
                        text = '上传失败，请稍后重新上传' //errObject.message;
                    }

                    layer.alert(text, '提示');

                }
            }
        });
        uploader.init();
    }

    // 是否存在选中的文件
    UploadManage.prototype.isExist = function (id) {
        var isExist = false;
        if (this.files.length === 0) {
            return isExist;
        }

        for (var i = 0; i < this.files.length;i++ ){
            var item = this.files[i];
            if(item.id === id){
                isExist = true;
                break;
            }
        }

        return isExist
    }

    // 开始上传
    UploadManage.prototype.start = function () {
        // 腾讯云上传
        if (this.options.type === uploadEnum.cos) {
            this.COSUpload();
        }

        // 本地 上传
        if (this.options.type === uploadEnum.localhost) {
            this.localhostUpload();
        }
    }

    // 腾讯云上传
    UploadManage.prototype.COSUpload = function () {
        var _this = this;
        if (this.files.length === 0) {
            return;
        }

        for (var i = 0; i < this.files.length; i++) {

            (function (index) {
                var item = _this.files[index];
                var fileItem = item.file;

                // 如果这个在上传中 || 上传成功了，就不去上传当前的
                if (item.uploadState === uploadStateEnum.success || item.uploadState === uploadStateEnum.loading) {
                    return;
                }

                var successCount = 0;
                // 先筛查成功的
                for (var j = 0; j < _this.files.length; j++) {
                    var jtem = _this.files[j];
                    if(jtem.uploadState === uploadStateEnum.success){
                        successCount++;
                    }
                }

                // 开始上传
                UploadManage.COSUploadFunc(fileItem, {
                    taskReady: function (authInfo) {
                        // 修改当前上传状态
                        item.uploadState = uploadStateEnum.loading;

                        // 存储当前的fileId
                        item.authInfo = authInfo;

                        _this.options.taskReady && _this.options.taskReady(index, item);
                    },
                    progress: function (authInfo, percent, speed) {
                        _this.options.progress && _this.options.progress(index, item, percent, speed);
                    },
                    success: function (authInfo) {
                        // 修改当前上传状态
                        item.uploadState = uploadStateEnum.success;

                        successCount++;
                        if (successCount === _this.files.length) {

                            // 全部完成后触发
                            _this.options.successAll && _this.options.successAll();
                        }
                        _this.options.success && _this.options.success(index, item);

                    },
                    error: function (err) {
                        // 修改当前上传状态
                        item.uploadState = uploadStateEnum.error;

                        _this.options.error && _this.options.error(index, err);
                    },
                });

            })(i)
        }
    }

    // 本地上传
    UploadManage.prototype.localhostUpload = function () {
        var _this = this;
        if (this.files.length === 0) {
            return;
        }

        for (var i = 0; i < this.files.length; i++) {

            (function (index) {
                var item = _this.files[index];
                var fileItem = item.file;

                // 如果这个在上传中 || 上传成功了，就不去上传当前的
                if (item.uploadState === uploadStateEnum.success || item.uploadState === uploadStateEnum.loading) {
                    return;
                }

                var successCount = 0;
                // 先筛查成功的
                for (var j = 0; j < _this.files.length; j++) {
                    var jtem = _this.files[j];
                    if (jtem.uploadState === uploadStateEnum.success) {
                        successCount++;
                    }
                }

                // 开始上传
                UploadManage.localhostUploadFunc(item.file, {
                    taskReady: function () {
                        // 修改当前上传状态
                        item.uploadState = uploadStateEnum.loading;

                        _this.options.taskReady && _this.options.taskReady(index, item);
                    },
                    progress: function (percent) {
                        _this.options.progress && _this.options.progress(index, item, percent);
                    },
                    success: function (data) {
                        // 修改当前上传状态
                        item.uploadState = uploadStateEnum.success;

                        item.authInfo = {
                            fileId: data.FilePath
                        }

                        successCount++;
                        if (successCount === _this.files.length) {
                            // 全部完成后触发
                            _this.options.successAll && _this.options.successAll();
                        }
                        _this.options.success && _this.options.success(index, item);

                    },
                    error: function (err) {
                        // 修改当前上传状态
                        item.uploadState = uploadStateEnum.error;
                        _this.options.error && _this.options.error(index);
                    }
                });
            })(i)
        }
    },



    // 获取上传文件的fileId,如果有文件未上传完成，那么则返回【】,全部上传完成才会返回 fieldId
    UploadManage.prototype.getFileId = function () {
        var fileIds = [];
        for (var i = 0; i < this.files.length;i++){
            var item = this.files[i];
            if( item.uploadState === uploadStateEnum.success ){
                fileIds.push(item.authInfo.fileId);
            }
        }

        if( fileIds.length !== this.files.length ){
            return []
        }else{
            return fileIds;
        }
    }

    // 删除对应的文件
    UploadManage.prototype.delete = function (id) {
        if (id) {
            var newFile = []
            for (var i = 0; i < this.files.length;i++){
                var item = this.files[i];

                if (item.authInfo) {
                    if (item.authInfo.fileId != id && item.id != id) {
                        newFile.push(item);
                    }
                } else {
                    if (item.id != id) {
                        newFile.push(item);
                    }
                }
            }

            this.files = newFile;
        } else {
            this.files = []
        }
    }


    // 获取真实地址
    UploadManage.prototype.getUrl = function (fileId, options) {
        if (this.options.type === uploadEnum.cos) {
            // 获取真实地址，静态方法
            UploadManage.getCosUrlFunc(fileId, options);
        }
    }

    // 静态函数，上传方法
    UploadManage.COSUploadFunc = function (file, options) {
        UploadManage.getAuthInfo(file.name, function (result) {

            // 初始化上传
            var openOSS = COS.init({
                FormatType: 'cos',
                SecretId: result.accesskeyid,
                SecretKey: result.accesskeysecret,
                SecurityToken: result.securitytoken,
                Expiration: result.expiration,
                Region: 'ap-beijing',
                Bucket: result.bucketName,
            });

            // 开始上传
            openOSS.uploadFile({
                file: file,
                filename: result.key,
                onTaskReady: function (tid) {
                    console.log('开始上传');
                    options.taskReady && options.taskReady(result);
                },
                onProgress: function (progressData) {
                    console.log('正在上传中', '上传进度 ' + progressData.percent + ' 上传速度 ' + progressData.speed);
                    options.progress && options.progress(result, progressData.percent, progressData.speed);
                },
                onFileFinish: function () {
                    console.log('上传成功222');

                    options.success && options.success(result);
                },
                onError: function (err) {
                    //console.log('错误', err);
                    //debugger
                    options.error && options.error(err.message || '上传错误');
                },
            });
            
        }, function (err) {
            options.error && options.error(err);
        });
    }


    // 静态函数，上传本地方法
    UploadManage.localhostUploadFunc = function (file, options) {
        var _this = this;
        //构建一个FormData存储复杂对象
        var formData = new FormData();
        formData.append('Filedata', file);//默认的文件数据名为“Filedata”

        $.ajax({
            url: '', //单文件上传
            type: 'POST',
            processData: false,
            contentType: false,
            data: formData,
            xhr: function () {
                // 开始上传回调
                options.taskReady && options.taskReady();

                var xhr = new XMLHttpRequest();
                xhr.upload.addEventListener('progress', function (e) {
                    //loaded代表上传了多少
                    //total代表总数为多少
                    var percent = Math.round((e.loaded / e.total) * 100) / 100;

                    //通过设置进度条的宽度达到效果
                    options.progress && options.progress(percent);
                })
                xhr.upload.addEventListener('load', function (e) {
                    //外部资源加载成功时触发。如果后台处理时间过长，可以在此提示“后台正在处理请稍等”
                })
                return xhr;
            },
            success: function (data) {
                var json = JSON.parse(data);
                options.success && options.success(json.Data);
            },
            error: function (xhr, status, error) {
                // 标记为失败
                options.error && options.error();
            }
        });
    }

    // 获取真实地址，静态方法
    UploadManage.getCosUrlFunc = function (fileId, options) {
        if (!fileId) {
            alert('fileId不存在');
            return;
        }

        var ajax = {
            type: 'get',
            url: '/Common/File/GetRequestUrls',
            data: {
                fileIds: fileId,
                //type: '103',
                //transcodeLevel: -1
            },
            success: function (data) {
                if (data.status == 0) {
                    var urlData = [];
                    for (var i = 0; i < data.data.length;i++){
                        var item = data.data[i];
                        urlData.push({
                            Id:item.FileId,
                            Url: item.Url,
                            ow365: item.ow365Url
                        });
                    }
                    options.success && options.success(urlData);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                bootbox.alert("系统错误");
            }
        };
        xhr.callAjax(ajax)
    }

    // 静态函数 获取授权
    UploadManage.getAuthInfo = function (fileName, callback, error) {
        var suffix = UploadManage.getSuffix(fileName);
        var fileStoreType = "";
        if (suffix == "jpg" || suffix == "gif" || suffix == "png" || suffix == "jpeg") {
            fileStoreType = "PI";
        }
        else if (suffix == "mp4" || suffix == "flv" || suffix == "avi" || suffix == "mkv" || suffix == "wmv" || suffix == "3gp") {
            fileStoreType = "VE";
        }
        else if (suffix == "doc" || suffix == "docx" || suffix == "ppt" || suffix == "pptx" || suffix == "xls" || suffix == "xlsx") {
            fileStoreType = "DO";
        }
        else {
            fileStoreType = "UU";
        }

        var urls = getBaseUrl();

        $.ajax({
            url: urls.authInfo,
            type: 'POST',
            async: false,
            data: {
                extendName: '.' + suffix,
                storeType: fileStoreType
            },
            success: function (result) {
                if (result.status === 0) {
                    callback && callback(result.data);
                } else {
                    error && error('授权错误');
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                error && error('授权错误');
            }
        });
    }

    // 静态函数 获取文件后缀名
    UploadManage.getSuffix = function (filename) {
        var pos = filename.lastIndexOf('.')
        var suffix = ''
        if (pos != -1) {
            suffix = filename.substring(pos)
        }
        suffix = suffix.replace(".", "");
        return suffix;
    };


    return UploadManage
})