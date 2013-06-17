<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>VB Polska Quiz</title>
		<meta name="description" content="Really cool quiz">
		<meta name="author" content="Marin Treselj">
		<link rel="stylesheet" href="css/style.css">
		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="main">
			<h1>Welcome to the Quiz!</h1>
			<section id="questions">
				<div id="questions-number" class="number">
					<p>Question <span id="current-question">1</span> of <span id="total-questions"></span></p>
				</div>
				<p id="question"></p>
			</section>
		</div>
		<div id="result" class="result"></div>
		<footer>
			<script src="js/jquery-1.10.1.min.js"></script>
			<script src="js/scripts.js"></script>
		</footer>
	</body>
</html>
