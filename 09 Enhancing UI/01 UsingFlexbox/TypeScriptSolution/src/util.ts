import { Promise } from "es6-promise";
import * as $ from "jquery";

export class SPUtil {
  log() {
    console.log("hello word logged from SPUtil");
  }

  static getWebTitleCSOM(url: string): Promise<string> {
    console.log("Executing CSOM");
    //wrapping call in Promise - not necessary but nicer to use
    return new Promise<string>((resolve, reject) => {
      let context: SP.ClientContext = new SP.ClientContext(url);
      let web: SP.Web = context.get_web();
      context.load(web);
      context.executeQueryAsync(
        () => {
          resolve(web.get_title());
        },
        (sender, args) => {
          console.log("Request failed. " + args.get_message());
          reject("Err happened - see console for details");
        }
      );
    });
  }

  static getWebTitleREST(url: string) {
    console.log("executing rest");
    let qry = url + "/_api/web/title";

    $.ajax({
      type: "GET",
      url: qry,
      dataType: "json",
      headers: {
        accept: "application/json;odata=verbose",
        "content-type": "application/json;odata=verbose"
      }
    })
      .then(data => {
        console.log(`Web Title received by REST is: ${data.d.response}`);
      })
      .fail(err => {
        console.log(err);
      });
  }
}
