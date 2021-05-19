import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Text");
    }

    async getHtml() {
        return `
            <h1>Text</h1>
            <div>
				<textarea id="input-text" rows="30" cols="230" placeholder="Enter the text for which you want to compute the complexity."></textarea>
				<center>
				<button class="button" onclick="
					document.getElementById('complexity-score').innerText = ''
					text = document.getElementById('input-text').value
					
					if (text.length > 0) {
						document.getElementById('loader').style.visibility = 'visible';
						
						var xmlHttp = new XMLHttpRequest();
						xmlHttp.onreadystatechange = function() { 
							if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
								document.getElementById('complexity-score').innerText = 'Complexity score: ' + xmlHttp.responseText;
								document.getElementById('loader').style.visibility = 'hidden';
							}
						}
						xmlHttp.open('GET', '/compute?text=' + text, true);
						xmlHttp.send(null);
					}
				">Compute</button>
				<div class="loader" id="loader" style="visibility: hidden"></div>
				<h3 id="complexity-score"></h3> 
				</center>
			</div>
        `;
    }
}