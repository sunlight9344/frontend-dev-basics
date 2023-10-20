var tabBox = {
	liSelected: null,
	_init: function() {
		var elDiv = document.getElementsByClassName('tab-box')[0];
		var elUl = elDiv.childNodes[1];
		var elLis = elUl.getElementsByTagName('li');
		
		console.log(elLis.length, elLis instanceof Array);
		
		Array.prototype.forEach.call(elLis, function(li) {
			li.onclick = this.onTabClicked.bind(this);
		}.bind(this));
	},
	init: function() {
		window.onload = this._init.bind(this);
	},
	onTabClicked: function(e) {
		console.log(e);
		if(this.liSelected != null) {
			this.liSelected.className = '';
		}
		
		e.target.className = 'selected';
		this.liSelected = e.target;
	}
}