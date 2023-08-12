import mongoose from 'mongoose'

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    petInfo: {
      type: String,
      required: false,
    },
    petImage: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      requried: true,
    },
    gender: {
      type: String,
      required: true,
    },
    vaccinated: {
      type: Boolean,
      required: true,
    },
    neutered: {
      type: Boolean,
      required: true,
    },
    petOwner: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Pet = mongoose.model('Pet', petSchema)
export default Pet
