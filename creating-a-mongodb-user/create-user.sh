db.createUser({
 user: "example-mongodb-user",
 pwd: "example-password",
 roles: [
   { role: "readWrite", db: "create-user-example-db" }
 ]
})
