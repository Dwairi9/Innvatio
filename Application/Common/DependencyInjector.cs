using Application.IServices;
using Application.Servecies;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Common
{
    public static class DependencyInjector
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddSingleton(typeof(IAppSettingService), typeof(AppSettingService));
            services.AddScoped(typeof(IEmailService), typeof(EmailService));
            services.AddScoped(typeof(IDashboardService), typeof(DashboardService));
             
            return services;
        }
    }
}
