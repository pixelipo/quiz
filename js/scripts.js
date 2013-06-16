var current = 1;

$.getJSON('data/quiz.json', function(data) {
	var items = [];
	var qNum = 1;
	var length = data.Questions.length;
	$("#total-questions").html(length);
	$("#current-question").html(current);
	$.each(data.Questions, function(key, val) {
			items.push('<li id="'+qNum+'" class="question">' + val.Question + '<ul>');
			$.each(val.Answers, function(k, v) {
				if (localStorage["question:"+val.Question] == v)
					var checked = 'checked';
				else
					var checked = '';
				items.push('<li><input class="answer" '+checked+' onclick="checkAnswer(\''+val.Question+'\', \''+v+'\')" type="radio" name="'+val.Question+'" value="'+v+'" id="'+v+'"><label for="'+v+'">' + v + '</label></li>');
			});
			qNum++;
			if (qNum <= length) {
				items.push('</ul><a href="#" onclick="nextQuestion('+length+');$(this).parent().hide();">next</a></li>');
			} else {
				items.push('</ul><a href="#" onclick="showResults('+length+');">Show Results</a></li>');
			}
	});
	$('<ul/>', {
		'class': 'question-list',
		html: items.join('')
	}).appendTo('#questions');
});


function checkAnswer(question, answer)
{
	if(typeof(Storage)!=="undefined") {
		if (localStorage["question:"+question]) {
			localStorage["question:"+question]=answer;
		} else {
			localStorage["question:"+question]=1;
		}
	} else {
		document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
	}
}

function nextQuestion(length)
{
	current++;
	if (current <= length) {
		$("#current-question").html(current);
		$("#"+current+"").show();
	}
}
