using Application.IServices;
using Microsoft.Extensions.Configuration; 

namespace Application.Servecies
{
    public class AppSettingService : IAppSettingService
    {
        private readonly IConfiguration _configuration;

        public AppSettingService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public T GetSection<T>(string key) 
        {
            var section = _configuration.GetSection(key).Get<T>();
            return section;
        }
    }
}
