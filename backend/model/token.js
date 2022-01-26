import mongoose, { Schema } from 'mongoose'

const tokenSchema = new mongoose.Schema ({
    userId : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true
    },
    cretedAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    }
});

export const Token = mongoose.model('Token', tokenSchema)
 