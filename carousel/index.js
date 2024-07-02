class ImageCarousel {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", this.click)
    this.imgs = this.element.getAttribute("data-imgs").split(" ");
    this.imgElement = this.element.querySelector("img");
    this.lastImgIndex = 0;
  }
  updateDots(index) {
    const lastDot = this.element.querySelector(`[data-img="${this.lastImgIndex}"]`);
    lastDot.classList.remove("active");
    const currentDot = this.element.querySelector(`[data-img="${index}"]`);
    currentDot.classList.add("active");
    this.lastImgIndex = index;
  }
  gotoImg(index) {
    this.updateDots(index);
    this.imgElement.setAttribute("src", this.imgs[index]);
  }
  click(e) {
    if (e.target.textContent === ">") {
      this.nextImg();
    } else if (e.target.textContent === "<") {
      this.prevImg();
    } else if (e.target.getAttribute("data-img")) {
      this.gotoImg(e.target.getAttribute("data-img"));
    }
  }
}
