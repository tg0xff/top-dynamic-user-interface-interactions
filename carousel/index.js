class ImageCarousel {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", this.click)
    this.imgs = this.element.getAttribute("data-imgs").split(" ");
    this.imgElement = this.element.querySelector("img");
    this.lastIndex = 0;
  }
  updateDots(index) {
    const lastDot = this.element.querySelector(`[data-img="${this.lastIndex}"]`);
    lastDot.classList.remove("active");
    const currentDot = this.element.querySelector(`[data-img="${index}"]`);
    currentDot.classList.add("active");
    this.lastIndex = index;
  }
  gotoImg(index) {
    this.updateDots(index);
    this.imgElement.setAttribute("src", this.imgs[index]);
  }
  prevImg() {
    let index = 0;
    if (this.lastIndex === 0) {
      index = this.imgs.length - 1;
    } else {
      index = this.lastIndex - 1;
    }
    this.gotoImg(index);
  }
  nextImg() {
    let index = 0;
    if (this.lastIndex === (this.imgs.length - 1)) {
      index = 0;
    } else {
      index = this.lastIndex + 1;
    }
    this.gotoImg(index);
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
