(function () {

	chrome.storage.local.get('userData', function (obj) {
		if(obj.hasOwnProperty('userData')) {
			$('body').html('<b>Logged In</b>');
			var userData = obj['userData'];
			signIn(userData['username'], userData['password']);
		}
	});

	$('#submit').on("click", function (e) {
		e.preventDefault();
		var username = $('#username').val();
		var password = $('#password').val();
		chrome.storage.local.set({'userData': {"username": username, "password": password}});
		signIn(username, password);
	});

	var signIn = function (username, password) {
		ajax("http://tnp.dtu.ac.in/rm3y/login.php", "post", function (err) {}, {
			"stud_username": username,
			"stud_password": password,
			"stud_login": "Student Login"
		}).done(function (data) {
			
		});
	}

	function ajax(urlpassed, requestType, errorFunc, dynamicData) {
        return $.ajax({
            url: urlpassed,
            type: requestType,
            data: dynamicData,
            error: errorFunc
        });
    }

}).call(this);