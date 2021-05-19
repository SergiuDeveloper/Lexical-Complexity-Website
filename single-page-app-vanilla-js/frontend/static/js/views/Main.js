import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Lexical Complexity Prediction");
    }

    async getHtml() {
        return `
            <h1>Lexical Complexity Prediction</h1>
            <p>
				The Lexical Complexity Prediction application is a tool which has the sole purpose of providing an approximation
				for the level of complexity of a given word, an expression comprised of several words, or an entire text.
            </p>
            <p>
                <a href="/expressions" data-link>Expressions</a> is a dashboard for predicting the complexity of an
				expression, which can contain one or more words.<br>
			</p>
			<p>
				<a href="/text" data-link>Text</a> is a dashboard for predicting the complexity of an
				entire text.<br>
			</p>
			<p>
				<a href="/presentation" data-link>Presentation</a> contains a presentation which briefly explains the methods used
				in order to achieve the task of predicting expressions complexity.
			</p>
			<p>
				<a href="/paper" data-link>Paper</a> contains a document that explains the prediction methods in more detail.<br>
			</p>
			<p>			
				<a href="/credits" data-link>Credits</a> states the members that contributed to this tool.
            </p>
        `;
    }
}