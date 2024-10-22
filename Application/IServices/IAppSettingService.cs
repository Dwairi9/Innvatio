namespace Application.IServices
{
    public interface IAppSettingService
    {
        T GetSection<T>(string key);
    }
}
