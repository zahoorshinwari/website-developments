const createName = require("./index");

it("should put out a certain name if I enter an integer between 1 and 10", () => {
  const name = createName(1);
  expect(name).toBe("Prisha");
});

it("should put out a certain name if I enter an integer between 1 and 10", () => {
  const name = createName(9);
  expect(name).toBe("Kiara");
});

it("should not put out a certain name if I enter a string", () => {
  const name = createName("a");
  expect(name).toBe(
    "Please enter a number between 1 and 10, otherwise you do not get a name"
  );
});

it("should not put out a certain name if I enter a number >10", () => {
  const name = createName(11);
  expect(name).toBe(
    "Please enter a number between 1 and 10, otherwise you do not get a name"
  );
});

it("should not put out a certain name if I enter 0", () => {
  const name = createName(0);
  expect(name).toBe(
    "Please enter a number between 1 and 10, otherwise you do not get a name"
  );
});

it("should not put out a certain name if I enter a negative integer", () => {
  const name = createName(-5);
  expect(name).toBe(
    "Please enter a number between 1 and 10, otherwise you do not get a name"
  );
});
