import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectID);
    this.account = new Account(this.client);
  }
  //   create Account/Register
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // Calling Another method ---> ie directly allow user to login after successfull registering by calling userLogin func
        this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  //   login method
  async login({ email, password }) {
    try {
      const userLogin = await this.account.createEmailSession(email, password);
      return userLogin;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  //   logout method
  async logout() {
    try {
      const logoutUser = await this.account.deleteSessions();
      return logoutUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  // getUser
  async getUser(){
    try {
        const user = await this.account.get()
    } catch (error) {
        console.log("Appwrite Service Error in :: getUser :: error",error)
        throw 
    }
    return null
  }

}
const authService = new AuthService();
export default authService;
