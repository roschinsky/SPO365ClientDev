import {login} from "./login"
import {Utils} from "./utils"

debugger;
login('admin', 'pwd');

let utils = new Utils();
utils.log("all loaded and executed!");
utils.getUsers();