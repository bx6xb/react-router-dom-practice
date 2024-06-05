import { fullObjectCopy } from "./11"

test("compare inner objects", () => {
  const user = {
    name: "Yan",
    age: 17,
    technologies: ["html", "css", "js", "react"],
  }

  const userCopy = { ...user, technologies: [...user.technologies] }

  expect(user).not.toBe(userCopy)
  expect(user.technologies).not.toBe(userCopy.technologies)
})

test("compare inner objects 2 test", () => {
  const user = {
    name: "Yan",
    age: 17,
    technologies: ["html", "css", "js", "react"],
    address: {
      city: "Almaty",
      house: 36,
    },
  }

  const userCopy = fullObjectCopy(user)

  expect(user).not.toBe(userCopy)
  expect(user.technologies).not.toBe(userCopy.technologies)
  expect(user.address).not.toBe(userCopy.address)
})

test("array copy", () => {
  const arr = [
    {
      name: "Yan",
      address: {
        city: "Almaty",
        house: 36,
      },
    },
    {
      name: "Veronika",
      address: {
        city: "Almaty",
      },
    },
  ]

  const arrCopy = arr.map((el) => ({ ...el, address: { ...el.address } }))

  expect(arr).not.toBe(arrCopy)
  expect(arr[0].address).not.toBe(arrCopy[0].address)
  expect(arr[1].address).not.toBe(arrCopy[1].address)
  expect(arrCopy.length).toBe(2)
})
