import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Presentation");
    }

    async getHtml() {
        return `
            <h1>Presentation</h1>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQFlPak9LEfct6UOhM8n842CNCEDK7aX0SmShyJUcvjkvZ-I0jtop2A-mkd-szaTw/embed?start=false&loop=false&delayms=3000" frameborder="0"  width="100%" height="800vh" type="application/pdf" style="border:10px solid black" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
		`;
    }
}