import DOM from "./DOM.js";

class Button extends DOM {
    constructor(imgSrc, className, altText) {
        super('button', '', className);

        const img = new Image();
        img.src = imgSrc;
        img.alt = altText; 
        img.className = "icon";

        this.node.appendChild(img); 
    }
}

export default Button;
