var table;
function initTableData() {
	
    //Data from an URL ?
    $.getJSON("data.json", function(responseData) {
    	table = $('#users').DataTable({
       ajax: "Data.json"
    	"processing": true,
    	columns:[
    		{ data: 'STT' },		
    		{ data: 'TÊN VẮC XIN' },
    		{ data: 'NSX' },
    		{ data: 'PHÒNG BỆNH' },
    		{ data: 'GIÁ' },
        { data: 'SỐ MŨI TIÊM' }, 
        { data: 'THÔNG TIN VẮC XIN' },
        { data: 'ĐỐI TƯỢNG' },
        { data: 'Phác đồ, lịch tiêm' },                            
        { data: 'Điều kiện trước tiêm' },
        { data: 'Khoảng cách với các vắc xin khác' },   
        { data: 'Phản ứng sau tiêm chủng' },
        { data: 'Các câu hỏi thường gặp' }, 
        { data: 'HÌNH ẢNH' }                            
    	]
    	});
    }).fail(function() {
    	alert( "Cannot get data from URL" );
    });
}

$(document).ready(function (){
	initTableData();
	$("#list-header").on({
		mouseenter: function() {
			$(this).css("background-color", "lightgray");
		},
		mouseleave: function(){
        	$(this).css("background-color", "lightblue");
    	}, 
	});
	
});
