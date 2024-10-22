using Application.IServices;
using Domain.Common;
using Domain.Common.AppSettings;
using Domain.Dashboard;
using MimeKit;
using Newtonsoft.Json;
using System.Diagnostics.Metrics;
using System.Net.Mail;

namespace Application.Servecies
{
    public class DashboardService : IDashboardService
    {
        private readonly IEmailService _emailService;
        private readonly IAppSettingService _appSettingService;

        public DashboardService(IEmailService emailService, IAppSettingService appSettingService)
        {
            _emailService = emailService;
            _appSettingService = appSettingService;
        }

        public async Task<ResponseMessage<bool>> UploadAttachment(DashboardDto dashboardDto) 
        {
            var response = new ResponseMessage<bool>() { IsSuccess = false };

            var smtpCreds = _appSettingService.GetSection<SMTPCredential>("SMTPCredentials"); 
            var message = new MimeMessage();

            message.From.Add(new MailboxAddress("Sender Name", "noreply@innvatio.com"));
            message.To.Add(new MailboxAddress("Recipient Name", smtpCreds.WorkflowEmail)); 
            message.Subject = dashboardDto.AttachmentType.Value();
                
            string body = JsonConvert.SerializeObject(new { 
                type = dashboardDto.AttachmentType.Value(),
                properties = new 
                {
                    country = dashboardDto.Country,
                    passport_number = dashboardDto.PassportNumber,
                    name_in_english = dashboardDto.NameEnglish,
                    name_in_arabic = dashboardDto.NameArabic,
                    date_of_birth = dashboardDto.DateOfBirth,
                    sex = dashboardDto.Sex,
                    date_of_expiry = dashboardDto.DateOfExpiry,
                    nationalty = dashboardDto.Nationalty,
                    employer = dashboardDto.Employer,
                    employer_name = dashboardDto.EmployerName
                }
            });
            var bodyBuilder = new BodyBuilder { HtmlBody = body };

            if (dashboardDto.Attachment != null && dashboardDto.Attachment.Length > 0)
            {
                using (var stream = dashboardDto.Attachment.OpenReadStream())
                { 
                    bodyBuilder.Attachments.Add(dashboardDto.Attachment.FileName, stream, ContentType.Parse(dashboardDto.Attachment.ContentType));
                }
            }

            message.Body = bodyBuilder.ToMessageBody(); 
            await _emailService.SendEmail(message);

            response.IsSuccess = true;
            return response;
        }
    }
}
