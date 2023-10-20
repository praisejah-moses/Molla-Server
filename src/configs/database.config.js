import { db } from '../../init.module.js';

// CONNECTING TO DATABASE
const connectDB = async () => {
  try {
    const conn = await db.connect(process.env.DB_URL);
    return conn
  } catch (error) {
    console.error(`Error, ${error.message}`);
    process.exit(1)
  }
}

const dbReady = await connectDB()
export default dbReady