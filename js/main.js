// header //
	var audio = document.getElementById("audio");

	var audioClips = [
		'audio/fart-1.mp3',
		'audio/fart-2.mp3',
		'audio/fart-3.mp3',
		'audio/fart-4.mp3',
		'audio/fart-5.mp3',
		'audio/fart-6.mp3',
		'audio/fart-7.mp3',
		'audio/fart-8.mp3'
	];

	function play() {
		var randomAudioClip = audioClips[Math.floor(Math.random()*audioClips.length)];

		audio.src = randomAudioClip;
		audio.play();
	}

// main //

	function changeImage() {
		var image = document.getElementById('fly');

		if (image.src.match("pedroThePoop.gif")) {
			image.src = "img/fly.gif";
		}

		else {
			image.src = "img/pedroThePoop.gif";
		}
	}

	$('#fly1').on('click',function(){
		$('#fly1').addClass('move-1');
	});

	$('#fly2').on('click',function(){
		$('#fly2').addClass('move-2');
	});

	



