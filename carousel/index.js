class ImageCarousel {
  constructor(element) {
    this.element = element;
    this.element.addEventListener("click", this.click.bind(this));
    this.imgs = this.element.getAttribute("data-imgs").split(" ");
    this.imgElement = this.element.querySelector("img");
    this.lastIndex = 0;
    this.timeout = setTimeout(this.nextImg.bind(this), 3000);
  }
  updateDots(index) {
    const lastDot = this.element.querySelector(
      `[data-img="${this.lastIndex}"]`,
    );
    lastDot.classList.remove("active");
    const currentDot = this.element.querySelector(`[data-img="${index}"]`);
    currentDot.classList.add("active");
    this.lastIndex = index;
  }
  gotoImg(index) {
    this.updateDots(index);
    this.imgElement.setAttribute("src", this.imgs[index]);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.nextImg.bind(this), 3000);
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
    if (this.lastIndex === this.imgs.length - 1) {
      index = 0;
    } else {
      index = this.lastIndex + 1;
    }
    this.gotoImg(index);
  }
  click(e) {
    const dataImg = e.target.getAttribute("data-img");
    if (e.target.textContent === ">") {
      this.nextImg();
    } else if (e.target.textContent === "<") {
      this.prevImg();
    } else if (dataImg) {
      const index = parseInt(dataImg, 10)
      this.gotoImg(index);
    }
  }
}

const carousels = document.querySelectorAll("div.carousel");
const nodes = [...carousels];
nodes.forEach((elem) => new ImageCarousel(elem));
