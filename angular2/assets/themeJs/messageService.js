function MessageService () {

	var me = this;

	this.callMobile = function(phone) {
		var returnData = {};
		console.log("Lets make a call");
		console.info('This was passed through: ', phone);
		$.ajax({
			type: 'POST',
			url: 'http://192.168.99.100/final/call',
			data: {to: phone},
			success: function(data) {
				returnData = {success: true,
							  message: 'calling you now!'};
			}
		});

		return returnData;
	}

	this.sendEmail = function(email, message) {
		var returnData = {};
		console.log("Lets send an email");
		console.warn(email, message);

 		$.ajax({
 			type: 'POST',
 			url: 'http://192.168.99.100/final/email',
 			data: {},
 			success: function(data) {
 				returnData = {success: true,
 							  message: 'Email was sent!'};
 			}
 		});

		return returnData;
	}

	this.sendTxt = function(phone, message) {
		var returnData = {};
		console.log("Lets send a txt");
		console.warn(phone, message);

		$.ajax({
			type: 'POST',
			url: 'http://192.168.99.100/final/text',
			data: {to: phone,
				   body: message},
			success: function(data) {
				returnData = {
					txtSuccess: true,
					txtMessage: 'Txt has been sent'
				}
			}
		});

		
		return returnData;
	}

}