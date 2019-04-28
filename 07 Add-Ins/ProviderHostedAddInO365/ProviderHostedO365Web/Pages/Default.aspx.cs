using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.SharePoint.Client;

namespace ProviderHostedO365Web
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_PreInit(object sender, EventArgs e)
        {
            Uri redirectUrl;
            switch (SharePointContextProvider.CheckRedirectionStatus(Context, out redirectUrl))
            {
                case RedirectionStatus.Ok:
                    return;
                case RedirectionStatus.ShouldRedirect:
                    Response.Redirect(redirectUrl.AbsoluteUri, endResponse: true);
                    break;
                case RedirectionStatus.CanNotRedirect:
                    Response.Write("An error occurred while processing your request.");
                    Response.End();
                    break;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void readHostWebCSOM(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);

            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                Web web = clientContext.Web;
                IEnumerable<List> lists = clientContext.LoadQuery(web.Lists.Include(list => list.Title, list => list.Id));
                clientContext.ExecuteQuery();
                StringBuilder sb = new StringBuilder("Read Host Web CSOM - Lists in Hosts web<br>");
                foreach (List list in lists)
                {
                    sb.Append(list.Title + "<br>");
                }
                lcResult.Text = sb.ToString();
            }
        }

        protected void readAddInWebCSOM(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);

            using (var clientContext = spContext.CreateUserClientContextForSPAppWeb())
            {
                Web web = clientContext.Web;
                IEnumerable<List> lists = clientContext.LoadQuery(web.Lists.Include(list => list.Title, list => list.Id));
                clientContext.ExecuteQuery();
                StringBuilder sb = new StringBuilder("Read App Web CSOM - Lists in Hosts web<br>");
                foreach (List list in lists)
                {
                    sb.Append(list.Title + "<br>");
                }
                lcResult.Text = sb.ToString();
            }
        }

        protected void writeHostWebCSOM(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);
            using (var clientContext = spContext.CreateUserClientContextForSPHost())
            {
                Web web = clientContext.Web;
                ListCreationInformation creationInfo = new ListCreationInformation
                {
                    Title = "Employees",
                    TemplateType = (int)ListTemplateType.Contacts
                };
                List list = web.Lists.Add(creationInfo);
                list.Description = "Companys employees list";
                list.Update();
                clientContext.ExecuteQuery();
                lcResult.Text = "Employees list created in HostWeb";
            }
        }

        protected void writeAddInWebCSOM(object sender, EventArgs e)
        {
            var spContext = SharePointContextProvider.Current.GetSharePointContext(Context);

            using (var clientContext = spContext.CreateUserClientContextForSPAppWeb())
            {
                List list = clientContext.Web.Lists.GetByTitle("AppWebNews");
                ListItemCreationInformation itemCreateInfo = new ListItemCreationInformation();
                ListItem newItem = list.AddItem(itemCreateInfo);
                newItem["Title"] = "My New News Entry!";
                newItem["Body"] = "Hello World!";
                newItem.Update();
                clientContext.ExecuteQuery();
                CamlQuery query = CamlQuery.CreateAllItemsQuery(100);
                ListItemCollection items = list.GetItems(query);
                clientContext.Load(items);
                clientContext.ExecuteQuery();
                StringBuilder sb = new StringBuilder("Read App Web CSOM - Lists in Hosts web<br>");
                foreach (ListItem li in items)
                {
                    sb.Append(li["Title"] + "<br>");
                }
                lcResult.Text = sb.ToString();
            }
        }
    }
}