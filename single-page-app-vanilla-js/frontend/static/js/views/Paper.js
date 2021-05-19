import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Paper");
    }

    async getHtml() {
        return `
            <h1>Paper</h1>
            <embed src="static/resources/paper.pdf" width="100%" height="800vh" type="application/pdf" style="border:10px solid black">
        `;
    }
}