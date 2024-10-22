using MimeKit;
using System.Net.Mail;

namespace Application.IServices
{
    public interface IEmailService
    {
        Task SendEmail(MimeMessage msg);
    }
}
