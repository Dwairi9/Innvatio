using Domain.Common;
using Domain.Dashboard;

namespace Application.IServices
{
    public interface IDashboardService
    {
        Task<ResponseMessage<bool>> UploadAttachment(DashboardDto dashboardDto);
    }
}
