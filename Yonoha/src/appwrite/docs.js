import { Client, Databases, ID } from "appwrite";
import conf from "../conf/conf";

export class DocumentService {
  client = new Client();
  databases;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
  }

  async createCartItems({
    name,
    price,
    defaultPrice,
    description,
    imageId,
    userId,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          name,
          price,
          defaultPrice,
          description,
          imageId,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite :: createCartitems :: error", error);
    }
  }
}

const docService = new DocumentService();

export default docService;
