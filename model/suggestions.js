import mongoose from "mongoose";

const SuggestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    suggestions: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("user", SuggestionSchema);

export default User;