import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
<<<<<<< HEAD
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }
  //   create Account/Register
=======
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

>>>>>>> 2a902b2 (Completed the work)
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
<<<<<<< HEAD
        // Calling Another method ---> it directly allows user to login after successfull registering by calling userLogin func
        this.login(email, password);
=======
        // call another method
        return this.login({ email, password });
>>>>>>> 2a902b2 (Completed the work)
      } else {
        return userAccount;
      }
    } catch (error) {
<<<<<<< HEAD
      console.log(error);
      throw error;
    }
  }
  //   login method
  async login({ email, password }) {
    try {
      const userLogin = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return userLogin;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // getUser
=======
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

>>>>>>> 2a902b2 (Completed the work)
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
<<<<<<< HEAD
      console.log(
        "Appwrite Service Error in :: getCurrentUser :: error",
        error
      );
    }
    return null;
  }

  //   logout method
  async logout() {
    try {
      const logoutUser = await this.account.deleteSessions();
      return logoutUser;
    } catch (error) {
      console.log(error);
      throw error;
=======
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
>>>>>>> 2a902b2 (Completed the work)
    }
  }
}

const authService = new AuthService();
<<<<<<< HEAD
=======

>>>>>>> 2a902b2 (Completed the work)
export default authService;
