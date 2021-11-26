var app = angular.module('myApp',[]);
app.controller('myController', function($scope) {
	$scope.abm = "About Me";
	$scope.updateInfo = "Updated 20 minuted ago";
	$scope.verify = "Verify";
	$scope.des = "Description about me !";
	$scope.cv = "Công việc";
	$scope.job1 = "Sinh viên";
	$scope.job2 = "Đẹp trai nhất nhà";
	$scope.contact = "Thông tin liên lạc";
	$scope.contact1 = "doanmanhtri15@gmail.com";
	$scope.contact2 = "fb.com/manh.tri.15";
	$scope.contactmi = " LIÊN HỆ TÔI";
	$scope.ifyou = "Nếu bạn xinh đẹp cute thì liên lạc mình !";
	$scope.modal1 = "Facebook";
	$scope.modal2 = "Zalo";
	$scope.modal3 = "SnapChat";
	$scope.modal4 = "Email";
	$scope.modal5 = "Sms";
	$scope.linkfb = "https://fb.com/manh.tri.15";
	$scope.linkzl = "";
	$scope.linksc = "";
	$scope.linkgm = "doanmanhtri15@gmail.com";
	$scope.phonenumber = "0968519191";
	$scope.email = "doanmanhtri15@gmail.com";
	$scope.title2 = "My Story";
	$scope.contentStory1 = "title test 1.";
	$scope.contentStory2 = "title test 2";
	$scope.storytitle1 = "content test 1";
	$scope.storytitle2 = "content test 2";
	$scope.nothinglikeus = "Thank for watching";
	$scope.thankall = "Cảm ơn mọi người đã ủng hộ";
	$scope.au = "Lmint";
	$scope.phone = false;
	$scope.reverse = function () {
		$scope.phone= !$scope.phone;
	}
	$scope.gmail = false;
	$scope.reverse2 = function () {
		$scope.gmail= !$scope.gmail;
	};
});