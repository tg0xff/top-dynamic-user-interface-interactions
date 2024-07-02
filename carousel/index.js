class ImageCarousel {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", this.click)
    this.imgs = this.element.getAttribute("data-imgs").split(" ");
    this.imgElement = this.element.querySelector("img");
    this.lastImgIndex = 0;
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
