function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (const item of items) {
    if (item.name == 'Aged Brie') {
      updateAgedBrie(item);
    } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
      updateSulfuras(item);
    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      updateBackstagePass(item);
    } else if (item.name == 'Conjured Mana Cake') {
      updateConjuredItem(item);
    } else {
      generalUpdate(item);
    }
  }
}

function generalUpdate(item) {
  item.sell_in -= 1;

  if (item.quality > 0) {
    item.quality -= 1;
  }

  if (item.sell_in < 0 && item.quality > 0) {
    item.quality -= 1;
  }

  if (item.quality < 0) {
    item.quality = 0;
  }
}

function updateAgedBrie(item) {
  item.sell_in -= 1;

  if (item.quality < 50) {
    item.quality += 1;
  }

  if (item.sell_in < 0 && item.quality < 50) {
    item.quality += 1;
  }

  if (item.quality > 50) {
    item.quality = 50;
  }
}

function updateSulfuras(item) {
  item.sell_in = item.sell_in;
  item.quality = 80;
}

function updateBackstagePass(item) {
  if (item.quality < 50) {
    item.quality += 1;

    if (item.sell_in <= 10 && item.quality < 50) {
      item.quality += 1;
    }

    if (item.sell_in <= 5 && item.quality < 50) {
      item.quality += 1;
    }
  }

  item.sell_in -= 1;

  if (item.sell_in < 0) {
    item.quality = 0;
  }

  if (item.quality > 50) {
    item.quality = 50;
  }
}

function updateConjuredItem(item) {
  if (item.sell_in > 0) {
    item.quality -= 2;
  } else {
    item.quality -= 4;
  }

  if (item.quality < 0) {
    item.quality = 0;
  }

  item.sell_in -= 1;
}