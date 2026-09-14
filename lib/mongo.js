import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'portfolio'

export const mongoConfigured = Boolean(uri)

// Reuse the client across hot reloads / lambda invocations.
let clientPromise

function getClientPromise() {
  if (!mongoConfigured) throw new Error('MONGODB_URI is missing')
  if (!clientPromise) {
    if (process.env.NODE_ENV === 'development') {
      if (!global._mongoClientPromise) {
        global._mongoClientPromise = new MongoClient(uri).connect()
      }
      clientPromise = global._mongoClientPromise
    } else {
      clientPromise = new MongoClient(uri).connect()
    }
  }
  return clientPromise
}

export async function visitsCollection() {
  const client = await getClientPromise()
  return client.db(dbName).collection('visits')
}
