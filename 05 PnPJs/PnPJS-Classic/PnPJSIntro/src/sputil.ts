import { sp } from "@pnp/sp";

export class SPUtil {
  constructor() {
    console.log("Initializing SPUtil");
  }

  static setResult(val: any) {
    document.querySelector(".workbench").innerHTML = val;
  }

  result: HTMLElement;

  getWebTitle(): void {
    sp.web
      .select()
      .get()
      .then(w => {
        SPUtil.setResult(w.Title);
      });
  }

  getListForWeb() {
    sp.web.lists
      .select("Id", "Title")
      .orderBy("Title")
      .get()
      .then(function(listIds) {
        for (var index in listIds) {
          var l = sp.web.lists.getById(listIds[index].Id);
          l.get()
            .then(function(list) {
              for (var key in list) {
                console.log(key + ": " + list[key]);
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getListItems() {
    let list = sp.web.lists.getByTitle("News");

    list.items
      .get()
      .then(function(items) {
        for (var i = 0; i < items.length; i++) {
          for (var key in items[i]) {
            console.log(key + ": " + items[i][key]);
          }
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addListItem() {
    let list = sp.web.lists.getByTitle("News");

    list.items
      .add({
        Title: "Title",
        Body: "Body for PnP Core JS List Item"
      })
      .then(iar => {
        console.log(iar);
      });
  }

  updateListItem() {
    let list = sp.web.lists.getByTitle("News");

    list.items
      .getById(1)
      .update({
        Title: "My New Title",
        Body: "Here is a new body"
      })
      .then(i => {
        console.log(i);
      });
  }

  deleteListItem() {
    let list = sp.web.lists.getByTitle("News");

    list.items
      .getById(1)
      .delete()
      .then(() => console.log("item deleted"));
  }
}
