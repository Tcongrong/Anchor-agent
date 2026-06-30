var plugin_files = {
	uiMask:[{
		name : "ui.mask",
		files : ['../lib/plugins/ui-mask/mask.js']
	}],
	uiSelect:[{
		name : "ui.select",
		files : ['../lib/plugins/ui-select/select.js','../lib/plugins/ui-select/select.css' ]
	}],
	uiSortable : [ {
		name : 'ui.sortable',
		files : [ '../lib/plugins/ui-sortable/sortable.js' ]
	} ],
	uiTinymce: [{
		name : 'ui.tinymce',
		files : ['../lib/plugins/ui-tinymce-master/tinymce.min.js','../lib/plugins/jquery-file-upload/jquery.fileupload.js','lib/plugins/ui-tinymce-master/ui-tinymce.js']
	}],
	ngGrid : [ {
		name : 'ngGrid',
		files : [ '../lib/plugins/nggrid/ng-grid-2.0.3.min.js' ]
	}, {
		insertBefore : '#loadBefore',
		files : [ '../lib/plugins/nggrid/ng-grid.css' ]
	} ],
	chosen : [ {
		insertBefore : '#loadBefore',
		name : 'localytics.directives',
		files : [ '../lib/plugins/chosen/chosen.css',
				'../lib/plugins/chosen/chosen.jquery.js',
				'../lib/plugins/chosen/chosen.js']

	} ],
	"angularFileUpload":[
	             	    {
	             	    	name: 'angularFileUpload',
	             	    	files: [
	             	    	        '../lib/plugins/angular-upload/angular-file-upload.js'
	             	    	        ]
	             	    }
	             	                  
	             	                  
	             	],
 	"jqueryMedia":[{
 		files: ['../lib/plugins/jquery-media/jquery.media.js']
 	}],
	ngImgCrop : [ {
		name : 'ngImgCrop',
		insertBefore : '#loadBefore',
		files : [ '../lib/plugins/ngImgCrop/ng-img-crop.js',
				'../lib/plugins/ngImgCrop/ng-img-crop.css' ]
	} ],
	datePicker : [ {
		name : 'datePicker',
		files : [ '../lib/plugins/datapicker/angular-datapicker.css',
					'../lib/plugins/datapicker/datePicker.js',
					'../lib/plugins/datapicker/datePickerUtils.js',
					'../lib/plugins/datapicker/dateRange.js' ]
	} ]
}
var getPlugin_files = function(list) {
	var res = [];
	for (var i = 0; i < list.length; i++) {
		res = res.concat(plugin_files[list[i]])
	}
	return res;
}