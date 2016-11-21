//Bee Movie Ipsum Generator
//Created by Leo Generali, started on 11/20


//------Model-----//

var model = {
	sentences: [
		'According to all known laws of aviation, there is no way a bee should be able to fly.',
		'You got lint on your fuzz.',
		'It must be dangerous being a Pollen Jock.',
		'Ma\'am, I was already a bloodsucking parasite. All I needed was a briefcase!',
		'Flying is exhausting. Why don\'t you humans just run everywhere, isn\'t that faster?',
		'I don\'t remember the sun having a big 75 on it.',
		'Will some angel of mercy come crawl to suck the poison from my heaving buttocks? Fine! Talking bees, No yogurt night... My nerves are fried from riding on this emotional rollarcoaster!',
		'Watermelon? I thought you said Guatamelan, why would I marry a watermelon?',
		'Ken, Barry was looking at your résumé and he agreed with me that eating with chopsticks is not really a special skill.',
		'Why is yogurt night so hard?',
		'Stand back! These are winter boots!',
		'Yellow, black. Yellow, black. Yellow, black. Yellow, black.',
		'Barry, I told you, stop flying in the house!',
		'You have got to start thinking bee, my friend.',
		'Our top-secret formula is automatically color-corrected, scent-adjusted and bubble-contoured into this soothing sweet syrup with its distinctive golden glow you know as... Honey!',
		'Those ladies? Aren\'t they our cousins too?',
		'We\'re hitting a sunflower patch six miles from here tomorrow.',
		'Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz! Buzz, buzz, buzz, buzz!',
		'Nobody move. If you don\'t move, he won\'t sting you. Freeze!',
		'I\'m talking to a bee. And the bee is talking to me!',
		'Bees are funny. If we didn\'t laugh, we\'d cry with what we have to deal with.',
		'Well, I met someone. You did? Was she Bee-ish?',
		'Oh, no! You\'re dating a human florist!',
		'Thinking bee! Thinking bee! Thinking bee! Thinking bee!',
		'Ray Liotta Private Select.',
		'Mosquito girls try to trade up, get with a moth, dragonfly.',
		'Bob Bumble at the anchor desk.',
		'Weather with Storm Stinger.',
		'Sports with Buzz Larvi.',
		'Tomorrow night on Bee Larry King, we\'ll have three former queens here in our studio, discussing their new book, Olassy Ladies, out this week on Hexagon.',
		'Instead of flowers, people are giving balloon bouquets now. Those are great, if you\'re three.',
		'Bears kill bees!',
		'And so here we have yet another example of bee culture casually stolen by a human for nothing more than a prance-about stage name.',
		'Wait a minute... Are you her little... ...bedbug?',
		'So those aren\'t your real parents!',
		'Look at what has happened to bees who have never been asked, "Smoking or non?"	',
		'They\'re doing nothing. It\'s amazing. Honey really changes people.',
		'It\'s not just flowers. Fruits, vegetables, they all need bees.',
		'Flowers, bees, pollen!',
		'Official floral business.',
		'Isn\'t John Travolta a pilot?',
		'You snap out of it. You snap out of it.',
		'Wait a minute. I think I\'m feeling something. Like a 27-million-year-old instinct.',
		'That\'s a fat guy in a flowered shirt.'
	],
};

//------Controller-----//

var controller = {
	//Get sentence length
	init: function(){
		this.ipsumObj = {
			sentences: model.sentences,
			sentencesLen: model.sentences.length
		};
	view.init();
	},

	randomNumber: function(){
		return(Math.floor((Math.random() * this.ipsumObj.sentencesLen)));
	},

	pickQuote: function(){
		var generatedSingleBeeIpsum = this.ipsumObj.sentences[this.randomNumber()];
		return(generatedSingleBeeIpsum);
	},

	generateText: function(){
		this.ipsumMods = view.generatorModifiers();
		this.generatedIpsum = '';
		if(this.ipsumMods.type === 'Sentence(s)'){
			this.generateSentences(this.ipsumMods.count);
		}else{
			this.generateParagraphs(this.ipsumMods.count);
		}
		view.displayIpsum(this.generatedIpsum);
	},

	generateSentences: function(sentencesToGenerate){
		for(var i = 0; i < sentencesToGenerate; i++){
			this.generatedIpsum += this.pickQuote() + ' ';
		}
		this.generatedIpsum += '<br><br>';
	},

	generateParagraphs: function(paragraphsToGenerate){
		for(var i = 0; i < paragraphsToGenerate; i++){
			this.generateSentences(5);
		}
	}
};

//------View-----//

var view = {
	init: function(){
		this.resultElem = document.getElementById('bee-result');

		this.generateButtomElem = document.getElementById('generateTextBtn')
		this.generateButtomElem.addEventListener('click', this.generateText);

		this.numberModifierElem = document.getElementById('numberModifier');
		this.typeModifierElem = document.getElementById('typeModifier');
	},

	generatorModifiers: function(){
		this.modifierObj = {
			count: this.numberModifierElem.value,
			type: this.typeModifierElem.value
		};
		return this.modifierObj;
	},

	displayIpsum: function(generatedText){
		this.resultElem.innerHTML = generatedText.replace(/^<br\s*\/?>|<br\s*\/?>$/g,'');
	},

	generateText: function(){
		controller.generateText();
	}
};

//-----Start the App-----//
controller.init();
