import * as SDK from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  PAAMY_PULSE_DB,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new SDK.Client();

client.setEndpoint(ENDPOINT!).setKey(API_KEY!).setProject(PROJECT_ID!);

export const databases = new SDK.Databases(client);
export const storage = new SDK.Storage(client);
export const messages = new SDK.Messaging(client);
export const users = new SDK.Users(client);
