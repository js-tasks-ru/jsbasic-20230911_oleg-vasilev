export default class ProductCard {
  constructor(product) {
    this.elem = this.render(product);
    
  }

  btnOnClick(elem, id) {
    let btnAdd = elem.querySelector('.card__button');
    btnAdd.addEventListener('click', (e) => {
      e.target.closest('.card').dispatchEvent(new CustomEvent("product-add", {
        detail : id, 
        bubbles: true,
      }))
    })
  }
  
  render(product) {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card__top">
      <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
      <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `;
    this.btnOnClick(div, product.id)
    return div;

  }
}

