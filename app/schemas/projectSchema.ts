import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    alt: String
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;