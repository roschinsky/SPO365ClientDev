using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using Microsoft.SharePoint.Client;

namespace ProviderHostedNG4.Controller
{
    public class SharePointController : ApiController
    {
        [SharePointContextWebAPIFilter]
        public string Get(string name, string number)
        {
            List list = null;

            var spContext = SharePointContextProvider.Current.GetSharePointContext(HttpContext.Current);

            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                if (clientContext != null)
                {
                    list = clientContext.Web.Lists.GetByTitle("AngularList");
                    clientContext.Load(list);
                    clientContext.ExecuteQuery();

                    ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
                    ListItem li = list.AddItem(itemCreateInfo);
                    li["Title"] = name;
                    li["Number"] = number;
                    li.Update();
                    clientContext.ExecuteQuery();
                    return "Data saved!";
                }
                else
                {
                    return "Error occurred!";
                }
            }
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}