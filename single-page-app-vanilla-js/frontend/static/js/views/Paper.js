import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Paper");
    }

    async getHtml() {
        return `
            <h1>Paper</h1>
            <embed src="https://drive.google.com/file/d/1dXfu0R09DVutts_dW3IsEjqAlwZ7KsJy/preview" width="100%" height="800vh" type="application/pdf" style="border:10px solid black">
        `;
    }
}