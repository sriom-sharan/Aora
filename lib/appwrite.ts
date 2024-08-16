import { Account, Client, ID, Avatars, Databases } from "react-native-appwrite";

export const config = {
  endpoint: " https://cloud.appwrite.io/v1",
  platform: "com.sriom.aora",
  projectId: "66bf685b002a7dead749",
  databaseId: "66bf6a050035d06aa226",
  userCollectionId: "66bf6a30002af56dc5b0",
  videosCollectionId: "66bf6a5800172a68a44f",
  storageId: "66bf710c001d90c50d6b",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Sign up Logic
export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    //Get user initials

    const avatarURL = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarURL,
      }
    );
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
};

// Sign In Logic
export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: any) {
    throw new Error(error);
  }
}
