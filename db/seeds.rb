# The data can then be loaded with the rails db:seed 
puts 'Deleting Old Data...🗑'
# User.destroy_all
NewIceBreaker.destroy_all
# Icebreaker.destroy_all
# Response.destroy_all

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

puts '🌱...Done Seeding Data...🌱'
# puts 'Creating Icebreakers...'
# Icebreaker.create!(content: "Would you rather live where it only snows or the temperature never falls below 100 degrees?", flames: 0,tags: "would you rather, basic, life")
# Icebreaker.create!(content: "Did you attend college? What was your major, or what would it have been?", flames: 0,tags: "history, life, potentially sensitive" )
# Icebreaker.create!(content: "What was your dream job when you were a kid?", flames: 0,tags: "childhood, history, work" )
# Icebreaker.create!(content: "Are there any interesting things your name spells with the letters rearranged?", flames: 0,tags: "PIDK, general" )
# Icebreaker.create!(content: "On what reality show would you most like to appear?", flames: 0,tags: "if you could, pop culture, PIDK" )
# Icebreaker.create!(content: " Which of Snow White’s seven dwarfs describes you best (Bashful, Doc, Dopey, Grumpy, Happy, Sleepy or Sneezy)?", flames: 0,tags: "pop culture, personality" )
# Icebreaker.create!(content: "Are you a listener or a talker?", flames: 0,tags: "would you rather, personality" )
# Icebreaker.create!(content: "If you could only listen to one album for the rest of your life, what would it be?", flames: 0,tags: "if you could, favorites, music" )
# Icebreaker.create!(content: "What was the worst movie you’ve ever watched?", flames: 0,tags: "favorites, pop culture, media, PIDK" )
# Icebreaker.create!(content: "Would you rather have invisibility or flight?", flames: 0,tags: "would you rather, super powers")
# Icebreaker.create!(content: "Would you prefer to always be slightly late or always be an hour early?", flames: 0,tags: "would you rather, personality" )
# Icebreaker.create!(content: "What was your first job?", flames: 0,tags: "personality, history, basic" )
# Icebreaker.create!(content: "What year would you visit if you had a time machine?", flames: 0,tags: "if you could, history, PIDK" )
# Icebreaker.create!(content: "What's your favorite breakfast cereal or breakfast food?", flames: 0,tags: "favorites, basic" )
# Icebreaker.create!(content: "What’s something new or interesting you’ve learned recently?", flames: 0,tags: "personality, history, basic" )
# Icebreaker.create!(content: "If you could safely eat any inedible object, what would it be?", flames: 0,tags: "funny, personality, PIDK" )
# Icebreaker.create!(content: "If you did not have to sleep, how would you spend the extra 8 hours?", flames: 0,tags: "basic, personality, PIDK" )
# Icebreaker.create!(content: "What season would you be? Why?", flames: 0,tags: "basic, personality" )
# Icebreaker.create!(content: "If you did not have to sleep, how would you spend the extra 8 hours?", flames: 0,tags: "basic, personality, PIDK" )
# Icebreaker.create!(content: "Do you work better with or without music? What are you listening to while you work?", flames: 0,tags: "basic, personality, work" )
# Icebreaker.create!(content: "What’s a TV show you recommend to everyone?", flames: 0,tags: "basic, pop culture, television" )
# Icebreaker.create!(content: "Where did you grow up? What did you like most about it? Dislike most?", flames: 0,tags: "basic, personality, PIDK" )

# puts 'Creating Reponses...'
# Response.create!(new_ice_breaker_id:i1, response:"just do it")

