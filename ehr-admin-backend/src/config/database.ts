import mongoose, { Connection } from 'mongoose';
import { env } from './env';

export let practiceConnection: Connection;
export async function connectDatabases(): Promise<void> {
  await mongoose.connect(env.adminMongoUri);
  practiceConnection = await mongoose.createConnection(env.mongoUri).asPromise();
}
