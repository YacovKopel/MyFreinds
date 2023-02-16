const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

// Schema to create a Thoughts model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        return new Date (date).toLocaleDateString()
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions:
      [reactionSchema],
      
    },
    {
      toJSON: {
        virtual: true,
        getters: true,
      },
      id: false,
    }
);

thoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thoughts = model('Thought', thoughtsSchema);

module.exports = Thoughts;
