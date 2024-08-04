import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.project_id); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
