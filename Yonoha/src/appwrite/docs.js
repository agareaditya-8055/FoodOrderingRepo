import { Client, Databases, ID, Query } from "appwrite";
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
    id,
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
        id,
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
      throw error;
    }
  }

  async showCartItems(userId) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteCartItems(itemId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        itemId
      );
    } catch (error) {
      throw error;
    }
  }
}

const docService = new DocumentService();

export default docService;
