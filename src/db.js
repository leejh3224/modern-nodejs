import mongoose from 'mongoose'

export default {
  connect: () => {
    mongoose
      .connect(
        `mongodb://${process.env.DB_HOST || 'localhost'}:27017/${
          process.env.DB
        }`,
      )
      .catch(console.log)
  },
}
