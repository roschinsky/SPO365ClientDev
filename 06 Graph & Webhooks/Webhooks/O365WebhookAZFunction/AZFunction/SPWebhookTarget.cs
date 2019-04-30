#r "Newtonsoft.Json"
  
 using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
  
 public static async Task<object> Run(HttpRequestMessage req, TraceWriter log)
 {
     log.Info($"Webhook was triggered!");
     // Get the validationToken URL parameter
     string validationToken = req.GetQueryNameValuePairs()
         .FirstOrDefault(q => string.Compare(q.Key, "validationtoken", true) == 0)
         .Value;
  
     if (validationToken != null)
     {
       log.Info($"Validation token {validationToken} received");
       var response = req.CreateResponse(HttpStatusCode.OK);
       response.Content = new StringContent(validationToken);
       return response;
     }
     log.Info($"SharePoint triggered our webhook");
     var content = await req.Content.ReadAsStringAsync();
     log.Info($"Received following payload: {content}");
  
     var notifications = JsonConvert.DeserializeObject<ResponseModel<NotificationModel>>(content).Value;
     log.Info($"Found {notifications.Count} notifications");
  
     if (notifications.Count > 0)
     {
         log.Info($"Processing notifications...");
         foreach(var notification in notifications)
         {
             // add message to the queue
             log.Info($"Before adding a message to the queue. Message content: {notification}");
             // Process your request here - better way to user ChangeToken to get latest update from SharePoint
             // Add this notification to Azure Queue and let it take care rest
             log.Info($"Triggered time is {DateTime.Now.ToUniversalTime()}");
         }
     }
  
     // if we get here we assume the request was well received
     return new HttpResponseMessage(HttpStatusCode.OK);
 }
  
 // supporting classes
 public class ResponseModel<T>
 {
     [JsonProperty(PropertyName = "value")]
     public List<T> Value { get; set; }
 }
  
 public class NotificationModel
 {
     [JsonProperty(PropertyName = "subscriptionId")]
     public string SubscriptionId { get; set; }
  
     [JsonProperty(PropertyName = "clientState")]
     public string ClientState { get; set; }
  
     [JsonProperty(PropertyName = "expirationDateTime")]
     public DateTime ExpirationDateTime { get; set; }
  
     [JsonProperty(PropertyName = "resource")]
     public string Resource { get; set; }
  
     [JsonProperty(PropertyName = "tenantId")]
     public string TenantId { get; set; }
  
     [JsonProperty(PropertyName = "siteUrl")]
     public string SiteUrl { get; set; }
  
     [JsonProperty(PropertyName = "webId")]
     public string WebId { get; set; }
 }
  
 public class SubscriptionModel
 {
     [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
     public string Id { get; set; }
  
     [JsonProperty(PropertyName = "clientState", NullValueHandling = NullValueHandling.Ignore)]
     public string ClientState { get; set; }
  
     [JsonProperty(PropertyName = "expirationDateTime")]
     public DateTime ExpirationDateTime { get; set; }
  
     [JsonProperty(PropertyName = "notificationUrl")]
     public string NotificationUrl {get;set;}
  
     [JsonProperty(PropertyName = "resource", NullValueHandling = NullValueHandling.Ignore)]
     public string Resource { get; set; }
 }
  