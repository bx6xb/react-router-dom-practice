import {
  UserType,
  UserWithBooksType,
  UserWithCompaniesType,
  UserWithLaptopType,
  addNewBooksToUser,
  makeHairstyle,
  moveUser,
  moveUserToAnotherHouse,
  updateBook,
  updateCompany,
  updateCompanyTitle,
  upgradeLaptop,
} from "./10"

test("reference type test", () => {
  let user: UserType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
  }

  const awesomeUser = makeHairstyle(user, 2)

  expect(user.hair).toBe(100)
  expect(awesomeUser.hair).toBe(50)
})

test("change address type", () => {
  let user: UserWithLaptopType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
  }

  const movedUser = moveUser(user, "Astana")

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(movedUser.address.city).toBe("Astana")
  expect(user.laptop).toBe(movedUser.laptop)
})

test("upgrade laptop to macbook", () => {
  let user: UserWithLaptopType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
  }

  const movedUser = upgradeLaptop(user, "Macbook")

  expect(user).not.toBe(movedUser)
  expect(user.address).toBe(movedUser.address)
  expect(user.laptop).not.toBe(movedUser.laptop)
  expect(movedUser.laptop.title).toBe("Macbook")
  expect(user.laptop.title).toBe("Asus")
})

test("upgrade laptop to macbook", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
    books: ["html", "css", "js", "react"],
  }

  const movedUser = moveUserToAnotherHouse(user, 16)

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(user.laptop.title).toBe("Asus")
  expect(movedUser.address.house).toBe(16)
})

test("add new books to user", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
    books: ["html", "css", "js", "react"],
  }

  const userCopy = addNewBooksToUser(user, ["redux", "vue"])

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)

  expect(userCopy.books[4]).toBe("redux")
  expect(userCopy.books[5]).toBe("vue")
})

test("update js to ts", () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
    books: ["html", "css", "js", "react"],
  }

  const userCopy = updateBook(user, "js", "ts")

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe("ts")
})

test("update company", () => {
  let user: UserWithLaptopType & UserWithCompaniesType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
    companies: [
      { id: 1, title: "Гугл" },
      { id: 2, title: "Nvidia" },
    ],
  }

  const userCopy = updateCompany(user, 1, "Google")

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.companies).not.toBe(userCopy.companies)
  expect(userCopy.companies[0].title).toBe("Google")
})

test("update company", () => {
  let user: UserWithLaptopType = {
    name: "Yan",
    hair: 100,
    address: {
      city: "Almaty",
      house: 36,
    },
    laptop: {
      title: "Asus",
    },
  }

  let companies = {
    Yan: [
      { id: 1, title: "Гугл" },
      { id: 2, title: "Nvidia" },
    ],
  }

  let companiesCopy = updateCompanyTitle(companies, "Yan", 1, "Google")

  expect(companies).not.toBe(companiesCopy)
  expect(companies.Yan[1]).toBe(companiesCopy.Yan[1])
  expect(companies.Yan).not.toBe(companiesCopy.Yan)

  expect(companiesCopy.Yan[0].title).toBe("Google")
  expect(companies.Yan[0].title).not.toBe("Google")
})
