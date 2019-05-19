using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Identity.Client;
using Microsoft.Graph;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Threading;

namespace GraphProxy
{
    public class AuthHandler : DelegatingHandler
    {
        private IAuthenticationProvider _authenticationProvider;

        public AuthHandler(IAuthenticationProvider authenticationProvider, HttpMessageHandler innerHandler)
        {
            InnerHandler = innerHandler;
            _authenticationProvider = authenticationProvider;
        }

        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            await _authenticationProvider.AuthenticateRequestAsync(request);
            return await base.SendAsync(request, cancellationToken);
        }

        public static GraphServiceClient GetAuthenticatedGraphClient(GraphCfg config)
        {
            var authenticationProvider = CreateAuthorizationProvider(config);
            GraphServiceClient client = new GraphServiceClient(authenticationProvider);
            return client;
        }

        public static HttpClient GetAuthenticatedHTTPClient(GraphCfg config)
        {
            var authenticationProvider = CreateAuthorizationProvider(config);
            HttpClient _httpClient = new HttpClient(new AuthHandler(authenticationProvider, new HttpClientHandler()));
            return _httpClient;
        }

        private static IAuthenticationProvider CreateAuthorizationProvider(GraphCfg config)
        {
            var authority = $"https://login.microsoftonline.com/{config.tenantId}/v2.0";

            //this specific scope means that application will default to what is defined in the application registration rather than using dynamic scopes
            List<string> scopes = new List<string>();
            scopes.Add("https://graph.microsoft.com/.default");

            var cca = new ConfidentialClientApplication(config.clientId, authority, config.returnUrl, new ClientCredential(config.clientSecret), null, null);
            return new MsalAuthenticationProvider(cca, scopes.ToArray());
        }
    }
}
