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
    [Route("api/[controller]")]
    public class GraphController : ControllerBase
    {
        public GraphController(IOptions<AppConfig> configuration)
        {
            cfg = (AppConfig)configuration.Value;
            SMTPHelper.sendMail(cfg);
        }

        // private GraphServiceClient _graphServiceClient;
        // private HttpClient _httpClient;

        private AppConfig cfg { get; set; }

        // https://localhost:5001/api/graph/executeQry
        [HttpPost]
        [Route("executeQry")]
        public ActionResult<AppConfig> ExecuteQry(string qry)
        {
            return cfg;
        }
    }
}