using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SkillsApi;
using Swashbuckle.AspNetCore.Swagger;

namespace MSALAPI {
    public class Startup {
        private IWebHostEnvironment env { get; }
        public IConfiguration Configuration { get; }

        public Startup (IConfiguration configuration, IWebHostEnvironment environment) {
            Configuration = configuration;
            env = environment;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

            //Configuration
            IConfigurationBuilder cfgBuilder = new ConfigurationBuilder ()
                .SetBasePath (env.ContentRootPath)
                .AddJsonFile ("appsettings.json");
            IConfigurationRoot configuration = cfgBuilder.Build ();

            //EF
            var conStrLite = configuration["ConnectionStrings:SQLiteDBConnection"];
            services.AddEntityFrameworkSqlite ().AddDbContext<SkillDBContext> (options => options.UseSqlite (conStrLite));

            //Cors
            services.AddCors (options => {
                options.AddPolicy ("AllowFrontend",
                    builder => builder.WithOrigins ("https://localhost:4200")
                    .AllowAnyMethod ()
                    .AllowAnyHeader ()
                    .AllowCredentials ());
            });

            //Swagger
            // services.AddSwaggerGen (c => {
            //     c.SwaggerDoc ("v1", new Info { Title = "Skills API", Version = "v1" });
            // });

            //Controllers
            services.AddControllers ();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }

            //Cors
            app.UseCors ("AllowFrontend");

            app.UseHttpsRedirection ();

            app.UseRouting ();

            app.UseAuthorization ();

            // app.UseSwagger ();
            // app.UseSwaggerUI (c => {
            //     c.SwaggerEndpoint ("/swagger/v1/swagger.json", "Skills API V1");
            //     c.RoutePrefix = string.Empty;
            // });

            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
            });
        }
    }
}