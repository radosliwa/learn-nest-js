// create blog schema
import { Schema } from 'mongoose';
// schema document

export const BlogSchema = new Schema({
    title: String,
    description: String,
    body: String,
    author: String,
    date_posted: String,
});
