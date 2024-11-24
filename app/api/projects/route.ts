import { connectToDB } from "@/app/db/connectToDB";
import Project from "@/app/schemas/projectSchema";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Connect to the database
        const db = await connectToDB();

        // Query the Project collection
        const projects = await Project.find({});

        // Return the projects as JSON response
        return NextResponse.json(projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}
