export type UserType = {
  name: string
  hair: number
  address: {
    city: string
    house: number
  }
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {
  books: string[]
}

export type CompanyType = {
  id: number
  title: string
}

export type UserWithCompaniesType = UserType & {
  companies: CompanyType[]
}

export type UserCompaniesType = {
  [userName: string]: CompanyType[]
}

export function makeHairstyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power,
  }

  return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
  return {
    ...u,
    address: {
      ...u.address,
      city: city,
    },
  } as UserWithLaptopType
}

export function moveUserToAnotherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
  return {
    ...u,
    address: {
      ...u.address,
      house: house,
    },
  } as UserWithLaptopType
}

export function upgradeLaptop(u: UserWithLaptopType, laptop: string) {
  return {
    ...u,
    laptop: {
      title: laptop,
    },
  } as UserWithLaptopType
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, books: string[]) {
  return {
    ...u,
    books: [...u.books, ...books],
  } as UserWithLaptopType & UserWithBooksType
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
  const copy = {
    ...u,
    books: u.books.map((book) => (book === oldBook ? newBook : book)),
  } as UserWithLaptopType & UserWithBooksType
  // map returns new array
  return copy
}

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) =>
  ({
    ...u,
    books: u.books.filter((book) => book !== bookForDelete),
  } as UserWithLaptopType & UserWithBooksType)

export const updateCompany = (u: UserWithLaptopType & UserWithCompaniesType, companyId: number, newTitle: string) =>
  ({
    ...u,
    companies: u.companies.map((c) => (c.id === companyId ? { ...c, title: newTitle } : c)),
  } as UserWithLaptopType & UserWithCompaniesType)

export const updateCompanyTitle = (
  companies: UserCompaniesType,
  userName: string,
  companyId: number,
  newTitle: string
) => ({
  ...companies,
  [userName]: companies[userName].map((c) => (c.id === companyId ? { ...c, title: newTitle } : c)),
})
