using Application.IServices;
using Domain.Common.AppSettings;
using Microsoft.Extensions.Configuration; 
using MailKit.Net.Smtp;
using MimeKit;

namespace Application.Servecies
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        private readonly IAppSettingService _appSettingService;

        public EmailService(IConfiguration configuration, IAppSettingService appSettingService)
        {
            _configuration = configuration;
            _appSettingService = appSettingService;
        } 

        public async Task SendEmail(MimeMessage message)
        {
            var smtpCreds = _appSettingService.GetSection<SMTPCredential>("SMTPCredentials"); 
              
            using (var client = new SmtpClient())
            {
                try
                { 
                    await client.ConnectAsync(smtpCreds.OutGoingHost, smtpCreds.OutGoingPort, true); 
                    await client.AuthenticateAsync(smtpCreds.Username, smtpCreds.Password);
                     
                    var response = await client.SendAsync(message);
                }
                catch (Exception ex)
                {  
                    throw ex;
                }
                finally
                { 
                    await client.DisconnectAsync(true);
                    client.Dispose();
                }
            }
        }
    }
}
