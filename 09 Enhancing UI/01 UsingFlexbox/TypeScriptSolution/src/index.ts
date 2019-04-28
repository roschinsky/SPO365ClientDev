import { SPUtil } from "./util";
import { Car } from "./car";
import { State } from "./state";

let util = new SPUtil();
util.log();

SPUtil.getWebTitleCSOM("http://sp2016").then(data =>
  console.log(`Web Title received by CSOM is: ${data}`)
);

SPUtil.getWebTitleREST("http://sp2016");

function drivePorsche() {
  let porsche = new Car();
  porsche.drive();
}

//export method to global namespace - otherwise is is not available for function call
(<any>window).drive = drivePorsche;

//exporting an object
(<any>window).state = new State();
