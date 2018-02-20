class Sorter {
  constructor() {
    this.elements = [];
    this.comparator = (a, b) => (a - b);
  }

  // add element and store it in any way inside
  add(element) {
    this.elements.push(element);
  }

  // просто берёт и выводит значение элемента номер которого был передан,
  // в тестах и в index она есть
  at(index) {
    return this.elements[index];
  }

  // return the count of current elements, which were added to Sorter instance
  // via add method
  get length() {
    return this.elements.length;
  }

  // return all elements in array. For example:
  toArray() {
    return this.elements;
  }

  // takes indices of already added elements and sorts only these elements
  sort(indices=[]) {
    let arr = this.elements;
    let arr2 = []; // массив элементов по заданным индексам
    // arr.sort(this.setComparator(this.comparator));
    for (let i = 0; i < indices.length; i++) {
      arr2.push(this.at(indices[i]));
    }

    arr2.sort(this.setComparator(this.comparator));

    for (let i = 0; i < indices.length; i++) {
      arr[indices[i]] = arr2[i];
    }
  }

  // takes compareFunction as parameter and use it while sorting elements
  // Sort should work for numbers by default
  // (if compareFunction was not set directly using this method)
  setComparator(compareFunction) {
    // console.log('this.comparator', this.comparator);
    this.comparator = compareFunction;
    return this.comparator;
  }
}

module.exports = Sorter;
