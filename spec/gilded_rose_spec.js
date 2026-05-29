describe("Gilded Rose", function() {

  it("For Dexterity Vest should sell_in and quality decrease by 1", function() {
    items = [ new Item("+5 Dexterity Vest", 20, 30) ];
    update_quality();
    expect(items[0].sell_in).toBe(19);
    expect(items[0].quality).toBe(29);
  });
});