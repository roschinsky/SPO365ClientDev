namespace GraphProxy {
    public class LogLevel {
        public string Default { get; set; }
    }

    public class Logging {
        public LogLevel LogLevel { get; set; }
    }

    public class Endpoints {
        public string graphApiUri { get; set; }
    }

    public class GraphCfg {
        public string tenantId { get; set; }
        public string clientId { get; set; }
        public string clientSecret { get; set; }
        public string cacheLocation { get; set; }
        public Endpoints endpoints { get; set; }
        public string returnUrl { get; set; }
    }

    public class Certificate {
        public string Path { get; set; }
        public string Password { get; set; }
    }

    public class HTTPS {
        public string Url { get; set; }
        public Certificate Certificate { get; set; }
    }

    public class Endpoints2 {
        public HTTPS HTTPS { get; set; }
    }

    public class Kestrel {
        public Endpoints2 Endpoints { get; set; }
    }

    public class AppConfig {
        public Logging Logging { get; set; }
        public string AllowedHosts { get; set; }
        public GraphCfg GraphCfg { get; set; }
        public Kestrel Kestrel { get; set; }
    }
}