// Read/Query
// Do a query to see all the bounties
// > db.bounties.find().pretty()
// Do a query to find the bounty whose client is Time Bureau
// db.bounties.find(client: "Time Bureau").pretty()
// Do a query to find the bounties who have been captured
// > db.bounties.find({captured: true}).pretty()
// Do a query specific to the bounty you inserted

// Do a query to just return the names of all the bounties
// > db.bounties.find( {},{ name: 1}).pretty()

// Remove
// Starbuck and the Captain have come to an understanding. Remove her record
// db.bounties.remove
// find and remove the duplicate record - be sure to JUST remove the one copy
// > db.bounties.remove({name: 'Malcolm Reynolds'}, {justOne:true})

// Update
// Update Sara Lance's name to be her superhero alias 'White Canary'
// > db.bounties.update({name: "Sara Lance"}, {name: "White Canary"});// Update Rocket's ship to be The Milano 2
//Update Rocket's ship to be The Milano 2
// > db.bounties.update({ship: "The Milano"}, {name: "The Milano 2"});// Update Rocket's ship to be The Milano 2
