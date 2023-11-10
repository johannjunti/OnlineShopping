const calculatePrice = require('./calculatePrice');


test('Test user 20 buying A product', () => {
  expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe("Customer does not meet the purchase requirements.");
});
test('Test user 21 buying A product', () => {
  expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(38);
});
test('Test user 21 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(21, 'C', false, false)).toBe("Customer does not meet the purchase requirements.");
});
test('Test user 25 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(25, 'C', false, false)).toBe("Customer does not meet the purchase requirements.");
});
test('Test user 26 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(26, 'C', false, false)).toBe(47);
});
test('Loyal user 25 buying A product', () => {
  expect(calculatePrice.calculateProductPrice(25, 'A', false, true)).toBe(38);
});
test('Returning user 25 buying A product', () => {
  expect(calculatePrice.calculateProductPrice(25, 'A', true, false)).toBe(192);
});
test('Loyal and returning user 25 buying A product', () => {
  expect(calculatePrice.calculateProductPrice(25, 'A',  true, true)).toBe(173);
});
test('Loyal and returning user 25 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(25, 'C',  true, true)).toBe("Customer does not meet the purchase requirements.");
});
test('Loyal user 26 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(26, 'C',  false, true)).toBe(42);
});
test('Returning user 26 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(26, 'C',  true, false)).toBe(197);
});
test('Loyal and returning user 26 buying C product', () => {
  expect(calculatePrice.calculateProductPrice(26, 'C',  true, true)).toBe(177);
});



