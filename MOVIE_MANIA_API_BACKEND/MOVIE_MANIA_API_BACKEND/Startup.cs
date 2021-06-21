using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace MOVIE_MANIA_API_BACKEND
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddCors(c =>
            {
                //Enabling CORS Globally
                 c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin());
                //Enabling for origin
                //c.AddPolicy("AllowOrigin", options => options.WithOrigins("http://localhost:4200"));
            });
            


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            //Enabling for origin
            app.UseCors(options => options.WithOrigins("http://localhost:4200"));
            //Enabling CORS Globally
            //app.UseCors(options => options.AllowAnyOrigin());
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
