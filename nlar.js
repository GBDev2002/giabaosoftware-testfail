var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "Dịch vụ cài đặt phần mềm Gia Bảo";
	$scope.verify = "Verify";
	$scope.des = "Description about me";
	$scope.cv = "Công việc";
	$scope.job1 = "fb.com/BoMonCNTTUTCHCMC";
	$scope.job2 = "fb.com/CLBSangtaokythuatUTC2";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "giabao.dev@gmail.com";
	$scope.contact2 = "fb.com/CuaXamNao";
	$scope.contactmi = "LIÊN HỆ TÔI";
	$scope.ifyou = "Mọi thắc mắc xin vui lòng liên hệ thông qua:";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/CuaXamNao";
	$scope.linkzl = "https://zalo.me/0563390416";
	$scope.linkgm = "giabao.dev@gmail.com";
	$scope.phonenumber = "0766741227 - Mobifone";
	$scope.email = "giabao.dev@gmail.com";
	$scope.title2 = "Giới thiệu dịch vụ";
	$scope.contentStory1 = "Gia Bảo chuyên cung cấp dịch vụ cài đặt phần mềm có bản quyền đến từ hãng Ad0b3 và Aut0d3sk với giá cả cạnh tranh. Khách hàng cần cài đặt Ph0t0sh0p, L1ghtr00m, Pr3mi3r3, 1llustr@t0r, Aff3r 3ff3ct, Aut0C@d, 3Ds M@x, Dr3@mw3@v3r có thể liên hệ Gia Bảo để được hưởng ưu đãi tốt nhất.";
	$scope.contentStory2 = "Quý khách có thể tham khảo bảng giá dịch vụ tại link: https://docs.google.com/spreadsheets/d/1gseBOAMFuF3d01TLcYdRwc8bihEAjpKCSqcNRpOBKa8/edit?usp=sharing";
	$scope.storytitle1 = "Giới thiệu dịch vụ cài đặt phần mềm Gia Bảo";
	$scope.storytitle2 = "Bảng giá dịch vụ";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn quý khách đã ủng hộ";
	$scope.au = "Gia Bảo";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});