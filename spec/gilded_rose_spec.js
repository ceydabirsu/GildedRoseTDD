describe("Gilded Rose", function() {

  it("For Dexterity Vest should sell_in and quality decrease by 1", function() {
    items = [ new Item("+5 Dexterity Vest", 20, 30) ];
    update_quality();
    expect(items[0].sell_in).toBe(19);
    expect(items[0].quality).toBe(29);
  });

  it("For Dexterity Vest, quality decreases by 2 after sell_in is less than 0", function() {
  items = [ new Item("+5 Dexterity Vest", 0, 30) ];
  update_quality();
  expect(items[0].sell_in).toBe(-1);
  expect(items[0].quality).toBe(28);
  });

  it("For Dexterity Vest, quality never goes below 0", function() {
  items = [ new Item("+5 Dexterity Vest", 1, 0) ];
  update_quality();
  expect(items[0].sell_in).toBe(0);
  expect(items[0].quality).toBe(0);
  });

  it("For Aged Brie, quality increases by 1 if sell_in is bigger than 0", function() {
  items = [ new Item("Aged Brie", 5, 10) ];
  update_quality();
  expect(items[0].sell_in).toBe(4);
  expect(items[0].quality).toBe(11);
  });

  it("For Aged Brie, quality increases by 2 if sell_in is less than 0", function() {
  items = [ new Item("Aged Brie", 0, 10) ];
  update_quality();
  expect(items[0].sell_in).toBe(-1);
  expect(items[0].quality).toBe(12);
  });

  it("For Sulfuras, quality remains 80 always", function() {
  items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
  update_quality();
  expect(items[0].sell_in).toBe(0);
  expect(items[0].quality).toBe(80);
  });

  it("For Backstage passes, quality increases by 1 if sell_in is greater than 10", function() {
  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 11) ];
  update_quality();
  expect(items[0].sell_in).toBe(10);
  expect(items[0].quality).toBe(12);
  });

  it("For Backstage passes, quality increases by 2 if sell_in is 10 or less", function() {
  items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
  update_quality();
  expect(items[0].sell_in).toBe(9);
  expect(items[0].quality).toBe(22);
  });
});