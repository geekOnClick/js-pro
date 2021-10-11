class Hamburger {

  constructor(size, filling, addings = 0){
    this.size = size;
    this.filling = filling;
    this.addings = addings;
    this.pattern = this.createPattern()
    this.showOrder()
  }

  createPattern(){
    const pattern = [
      [
      {size: 'big', sum: 100, cal: 40},
      {size: 'small', sum: 50, cal: 20},
      ],
      [
      {filling: 'cheese', sum: 10, cal: 20},
      {filling: 'salat', sum: 20, cal: 5},
      {filling: 'potato', sum: 15, cal: 10},
      ],
      [
      {addings: 'spice', sum: 15, cal: 0},
      {addings: 'mayo', sum: 20, cal: 5},
      ]
    ]
    return pattern;
  }

  calcSum(){
    let total = 0;
    this.pattern[0].map(item => {
      if(item.size == this.size) total += item.sum;
    })
    this.pattern[1].map(item => {
      if(item.filling == this.filling) total += item.sum;
    })
    this.pattern[2].map(item => {
      if(item.addings == this.addings) total += item.sum;
    })
    return total;
  }

  calcCalories(){
    let total = 0;
    this.pattern[0].map(item => {
      if(item.size == this.size) total += item.cal;
    })
    this.pattern[1].map(item => {
      if(item.filling == this.filling) total += item.cal;
    })
    this.pattern[2].map(item => {
      if(item.addings == this.addings) total += item.cal;
    })
    return total;
  }

  showOrder(){
    if(this.addings != 0){
      console.log(`Вы заказали: Гамбургер размером ${this.size}, c наполнением: ${this.filling}, с добавлением: ${this.addings}. Сумма к оплате: ${this.calcSum()} рублей, всего калорий: ${this.calcCalories()}`)
    } else {
      console.log(`Вы заказали: Гамбургер размером ${this.size}, c наполнением: ${this.filling}, без добавок. Сумма к оплате: ${this.calcSum()} рублей, всего калорий: ${this.calcCalories()}.`)
    }
  }

}

const big = new Hamburger('big', 'salat', 'mayo')
