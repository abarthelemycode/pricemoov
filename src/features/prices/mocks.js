// mocks for testing
const agencies = [
  {id: "1", name: "name 1", code: "code 1"},
  {id: "2", name: "name 2", code: "code 2"}
]

const categories = [
  {id: "1", agencyId: "1", name: "name 1", code: "code 1"},
  {id: "6", agencyId: "1", name: "name 6", code: "code 6"}
]

const prices = [
  {id: "1", categoryId: "1", startDate: 1525260909, price: 70, suggestedPrice: 52, isValidated: true},
  {id: "2", categoryId: "1", startDate: 1525260909, price: 15, suggestedPrice: 45, isValidated: false},
  {id: "3", categoryId: "1", startDate: 1525260609, price: 60, suggestedPrice: 15, isValidated: true}
]

export default {
  agencies,
  categories,
  prices
}
