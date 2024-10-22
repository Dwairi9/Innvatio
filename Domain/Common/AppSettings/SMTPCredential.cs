namespace Domain.Common.AppSettings
{
    public class SMTPCredential
    {
        public string OutGoingHost { get; set; }
        public int OutGoingPort { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string WorkflowEmail { get; set; }
    }
}
