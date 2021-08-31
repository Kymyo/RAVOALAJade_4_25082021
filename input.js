class InputElement {
    constructor(element, errorMessage) {
        this.element = element;
        this.errorMessage = errorMessage;
    }

    getParent() {
        return this.element.parentElement;
    }

    displayError() {
        this.getParent().setAttribute("data-error-visible", "true");
        this.getParent().setAttribute("data-error, this.errorMessage");
    }

    removeDisplayError() {
        this.getParent().removeAttribuate("data-error-visible");
        this.getParent().removeAttribuate("data-error");
    }
}