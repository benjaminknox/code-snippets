db.exampleCollection.createIndex(
  { "createdAt": 1 },
  { expireAfterSeconds: 3600 }  // 3600 seconds = 1 hour
)
