# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stock.create([{name: 'Apple'},{name: 'Google'},{name: 'Microsoft'}])

AveragePrice.create([
    {price: 19.5, stock_id: 1},
    {price: 20.5, stock_id: 1},
    {price: 21, stock_id: 1},
    {price: 16.5, stock_id: 2},
    {price: 18, stock_id: 2},
    {price: 20, stock_id: 2},
    {price: 21, stock_id: 3},
    {price: 22, stock_id: 3},
    {price: 23, stock_id: 3}
])