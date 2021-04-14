class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Velasco Carreto Irving ALfredo.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);