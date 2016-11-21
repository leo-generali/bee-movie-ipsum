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
		'Stand back! These are winter boots!'
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
		this.resultElem.style.display = 'none';

		this.generateButtomElem = document.getElementById('generateTextBtn')
		this.generateButtomElem.addEventListener('click', this.generateText);

		this.numberModifierElem = document.getElementById('nummberModifier');
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
		view.resultElem.style.display = 'block';
	}
};

//-----Start the App-----//
controller.init();
