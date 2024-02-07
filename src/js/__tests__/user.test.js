import  legend  from  "../user.js" 

test("legend Check healthy > 50", () => {
  const list = {
    health: 51,
    name: "green"
  }
  const result = legend(list);
  expect(result).toBe("healthy");
})

test("legend Check health <= 50 $$ health >= 15", () => {
  const list = {
    health: 15,
    name: "green"
  }
  const result = legend(list);
  expect(result).toBe("wounded");
})

test("legend Check health < 15", () => {
  const list = {
    health: 10,
    name: "red"
  }
  const result = legend(list);
  expect(result).toBe("critical");
})
 
