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
});