bkchina.factory('AppConfig', function() {
  return {
	  Style:{color: "positive"},
	  Login:{isLogin:'false'}
  }
}).factory('Session', function() {
	  return {
		  isLogin:false,
		  loginData:{}
	  }
	});