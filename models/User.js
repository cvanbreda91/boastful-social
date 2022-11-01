const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/
        },
        thought: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

// get total count of friends and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends
});

const User = model('User', UserSchema);

module.exports = User;
