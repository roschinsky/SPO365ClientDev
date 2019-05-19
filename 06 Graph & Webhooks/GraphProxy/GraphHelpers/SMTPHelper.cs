using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Identity.Client;
using Microsoft.Graph;

namespace GraphProxy
{
    public class SMTPHelper
    {

        public static void sendMail(AppConfig config)
        {
            GraphServiceClient graphClient = AuthHandler.GetAuthenticatedGraphClient(config.GraphCfg);
            List<QueryOption> options = new List<QueryOption>
            {
                new QueryOption("$top", "1")
            };

            var graphResult = graphClient.Users.Request(options).GetAsync().Result;
            Console.WriteLine("Graph SDK Result");
            Console.WriteLine(graphResult[0].DisplayName);

            //Direct query using HTTPClient (for beta endpoint calls or not available in Graph SDK)
            HttpClient httpClient = AuthHandler.GetAuthenticatedHTTPClient(config.GraphCfg);
            Uri Uri = new Uri($"{config.GraphCfg.endpoints.graphApiUri}/v1.0/users?$top=1");
            var httpResult = httpClient.GetStringAsync(Uri).Result;

            Console.WriteLine("HTTP Result");
            Console.WriteLine(httpResult);
        }

    }

}