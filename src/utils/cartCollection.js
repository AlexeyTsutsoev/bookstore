class cartCollection {
  constructor(array) {
    this.cart = array;
  }

  add(book) {
    console.log("start add");
    let isExist = false;
    for (let i = 0; i < this.cart.length; i++) {
      console.log(`start for ${i}`);
      console.log(book.id);
      console.log(this.cart);
      if (this.cart[i].book.id === book.id) {
        console.log("start if");
        isExist = true;
        this.cart[i].count++;
        break;
      }
    }
    if (!isExist) {
      this.cart.push({ book, count: 1 });
    }
  }

  remove(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].book.id === id) {
        this.cart.splice(i, 1);
        break;
      }
    }
  }

  incrementCounter(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].book.id === id) {
        this.cart[i].count++;
        break;
      }
    }
  }

  decrementCounter(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].book.id === id) {
        if (this.cart[i].count > 1) {
          this.cart[i].count--;
          break;
        } else this.remove(id);
      }
    }
  }
}

export default cartCollection;
