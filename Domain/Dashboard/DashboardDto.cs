using Domain.Common;
using Microsoft.AspNetCore.Http; 

namespace Domain.Dashboard
{
    public class DashboardDto
    {
        public string Country { get; set; }
        public string PassportNumber { get; set; }
        public string NameEnglish { get; set; }
        public string NameArabic { get; set; }
        public string Nationalty { get; set; }
        public string Employer { get; set; }
        public string EmployerName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string Sex { get; set; }
        public DateTime? DateOfExpiry { get; set; }
        public AttachmentType AttachmentType { get; set; }
        public IFormFile Attachment { get; set; } 
    }
}
