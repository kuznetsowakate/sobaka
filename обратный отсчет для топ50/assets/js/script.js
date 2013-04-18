$(function(){
	
	 /*var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;
	
	if((new Date()) > ts){
		// Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
		// Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
		ts = (new Date("July 1, 2013")).getTime();
		newYear = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";

			getNumEnding(seconds, ['секунда', 'секунды', 'секунд']);
			
			message +=  days + " дней ";
			message +=  hours + " часов ";
			message +=  minutes + " минут ";
			message +=  (seconds < 10) ? "0"+seconds : seconds + " секунд ";

			function declOfNum(number, titles) {
cases = [2, 0, 1, 1, 1, 2];
return "<b>" + number + "</b> " + titles[ (number%100<4 && number%100<20)? 2 : cases[Math.min(number%10, 5)] ];
}
			
			
			note.html("До конца голосования - " + message);
		}
	});*/


	function countDown(num) {
work_number = time_diff[num]--;
if (work_number<0) {document.getElementById('counter'+num).innerHTML = 'отсчет окончен'; } else {
days = Math.floor(work_number / 86400);
work_number -= days * 86400;
hours = Math.floor(work_number / 3600);
work_number -= hours * 3600;
minutes = Math.floor(work_number / 60);
work_number -= minutes * 60;
seconds = Math.floor(work_number % 60);
days = (days < 10) ? "0"+days : days;
hours = (hours < 10) ? "0"+hours : hours;
minutes = (minutes < 10) ? "0"+minutes : minutes;
seconds = (seconds < 10) ? "0"+seconds : seconds;
values = [
declOfNum(days, ["день", "дня", "дней"]),
declOfNum(hours, ["час", "часа", "часов"]),  //
declOfNum(minutes, ["минута", "минуты", "минут"]),  //
declOfNum(seconds, ["секунда", "секунды", "секунд"]) //
];
document.getElementById('counter'+num).innerHTML =  values.join(" ");// + "."; }
}
function declOfNum(number, titles) {
cases = [2, 0, 1, 1, 1, 2];
return "<b>" + number + "</b> " + titles[ (number%100<4 && number%100<20)? 2 : cases[Math.min(number%10, 5)] ];
}
	
}


});




