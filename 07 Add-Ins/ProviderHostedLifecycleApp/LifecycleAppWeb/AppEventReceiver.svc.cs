using System;
using Microsoft.SharePoint.Client;
using Microsoft.SharePoint.Client.EventReceivers;

namespace LifecycleAppWeb
{
    public class AppEventReceiver : IRemoteEventService
    {
        public SPRemoteEventResult ProcessEvent(SPRemoteEventProperties properties)
        {
            var result = new SPRemoteEventResult();

            using (var clientContext = new ClientContext(properties.AppEventProperties.HostWebFullUrl))
            {
                ListItemCreationInformation itemCreateInfo;
                ListItem newItem;

                switch (properties.EventType)
                {
                    case SPRemoteEventType.AppUninstalling:
                        var announcementsList = clientContext.Web.Lists.GetByTitle("News");

                        itemCreateInfo = new ListItemCreationInformation();
                        newItem = announcementsList.AddItem(itemCreateInfo);
                        newItem["Title"] = "The app is being uninstalled!";
                        newItem["Body"] = "The app is being uninstalled at " + DateTime.Now.ToLongTimeString();
                        newItem.Update();

                        clientContext.ExecuteQuery();
                        clientContext.Load(clientContext.Web);
                        clientContext.ExecuteQuery();
                        break;
                    case SPRemoteEventType.AppInstalled:
                        var list = clientContext.Web.Lists.GetByTitle("News");

                        itemCreateInfo = new ListItemCreationInformation();
                        newItem = list.AddItem(itemCreateInfo);
                        newItem["Title"] = "The app was installed!";
                        newItem["Body"] = "The app installed at " + DateTime.Now.ToLongTimeString();
                        newItem.Update();

                        clientContext.ExecuteQuery();
                        clientContext.Load(clientContext.Web);
                        clientContext.ExecuteQuery();
                        break;
                }

                return result;
            }
        }

        public void ProcessOneWayEvent(SPRemoteEventProperties properties)
        {
            // This method is not used by app events
        }
    }
}
