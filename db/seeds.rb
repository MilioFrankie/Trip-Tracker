require 'faker'

5.times do 
  trip = Trip.create(
    name: Faker::Address.city
  )
  puts "5 Trips Created"
end