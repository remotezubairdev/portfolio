import mongoose from 'mongoose'

export function connectToDB() {
    const dbURL = process.env.DB_URL
    
    if (!dbURL) {
        throw new Error('DB URL is not defined in your environment variables')
    }
    
    mongoose.connect(dbURL)
    .then(() => {
        console.log("Successfully connected to MongoDB!")
    })
    .catch(err => console.log("There was an error", err))
}