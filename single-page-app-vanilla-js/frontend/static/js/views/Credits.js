import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Credits");
    }

    async getHtml() {
        return `
            <h1>Credits</h1>
			<center>
				<img src="https://docs.google.com/uc?export=download&id=1lE0PkxTtKr0A_UAvjkXcjxc4FGsACtsy" alt="University 'Alexandru Ioan Cuza' Iasi, Faculty of Computer Science" width="30%" height="30%">
            </center>
			<p>
				The team that developed the application and the prediction model is comprised of:
				<ul>
					<li>Nistor Marian-Sergiu</li>
					<li>Sescu Alexandra</li>
					<li>Popescu C&#259;lin</li>
				</ul><br>
				Coordinator: Dr. G&icirc;fu Daniela
			</p>
			<p>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			Source code:
			<ul>
			<li><a href="https://github.com/SergiuDeveloper/Lexical-Complexity---V3">Complexity prediction model (Jupyter notebook)</a></li>
			<li><a href="https://github.com/SergiuDeveloper/Lexical-Complexity-Website">Web application</a></li>
			</ul>
			</p>
        `;
    }
}