# The data can then be loaded with the rails db:seed 
puts 'Deleting Old Data...🗑'
# User.destroy_all
NewIceBreaker.destroy_all
# Icebreaker.destroy_all
Response.destroy_all

puts '🌱...Seeding Data...🌱'

# puts 'Creating Users...'
# u1 = User.create!(
#   username: 'poser', password_digest: "1234")

puts 'Creating NewIceBreakers...'
NewIceBreaker.create!(content: "What fictional family would you most like to join?", flames: 0,tags: "media, pop culture, television" )
NewIceBreaker.create!(content: "Do you love working from home or would you rather be in the office? Is there a balance of both that you like best?", flames: 0,tags: "remote, virtual, WFH" )
NewIceBreaker.create!(content: "What’s your number one tip for combating distractions when working from home?", flames: 0,tags: "remote, virtual, WFH, motivation" )
NewIceBreaker.create!(content: "What’s the last great TV show or movie you watched?", flames: 0,tags: "remote, virtual, television, pop culture" )
NewIceBreaker.create!(content: "What is your most used emoji?", flames: 0,tags: "remote, pop culture, communication, funny" )
NewIceBreaker.create!(content: "If you were a wrestler what would be your entrance theme song?", flames: 0,tags: "pop culture, media, funny" )
NewIceBreaker.create!(content: "If you could bring back any fashion trend what would it be?", flames: 0,tags: "pop culture, fashion, trends" )
NewIceBreaker.create!(content: "You have your own late night talk show, who do you invite as your first guest?", flames: 0,tags: "pop culture, media, funny" )
NewIceBreaker.create!(content: "If you had to eat one meal everyday for the rest of your life what would it be?", flames: 0,tags: "funny, childhood, favorites")
NewIceBreaker.create!(content: "If you were left on a deserted island with either your worst enemy or no one, which would you choose? Why?", flames: 0, tags: "funny, would you rather")
NewIceBreaker.create!(content: "What’s the best piece of advice you’ve ever been given?", flames: 0,tags: "work, teamwork, motivation" )
NewIceBreaker.create!(content: "What would the title of your autobiography be?", flames: 0,tags: "remote, literature, motivation" )
NewIceBreaker.create!(content: "Who is your favorite Disney hero or heroine? Would you trade places with them?", flames: 0,tags: "pop culture, media, childhood" )
NewIceBreaker.create!(content: "What languages do you know how to speak?", flames: 0,tags: "basic, work" )
NewIceBreaker.create!(content: "Are you a cat person or a dog person?", flames: 0,tags: "basic, animals, would you rather" )
NewIceBreaker.create!(content: "You can have an unlimited supply of one thing for the rest of your life, what is it? Sushi? Scotch Tape?", flames: 0,tags: "WWYD, unusual, funny" )
NewIceBreaker.create!(content: "If you could live anywhere in the world for a year, where would it be?", flames: 0, tags: "if you could, work")
NewIceBreaker.create!(content: "If you could choose any two famous people to have dinner with who would they be?", flames: 0,tags: "if you could, pop culture, media, history" )
NewIceBreaker.create!(content: "If you could be any animal in the world, what animal would you choose to be?", flames: 0,tags: "if you could, favorites, animals" )
NewIceBreaker.create!(content: "If you could instantly become an expert in something, what would it be?", flames: 0,tags: "if you could, work, motivation" )
NewIceBreaker.create!(content: "Would you rather live in the ocean or on the moon?", flames: 0,tags: "would you rather, funny, life" )
NewIceBreaker.create!(content: "Would you rather meet your travel back in time to meet your ancestors or to the future to meet your descendants?", flames: 0,tags: "would you rather, family, life" )



puts "Seeding Response..."
# Response.create!(response:"yolo", user_id: 10, new_ice_breaker_id: 16)

puts '🌱...Done Seeding Data...🌱'


