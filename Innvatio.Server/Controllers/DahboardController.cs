using Application.IServices;
using Domain.Common;
using Domain.Dashboard;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Innvatio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DahboardController : ControllerBase
    {
        private readonly ILogger<DahboardController> _logger;
        private readonly IDashboardService _dashboardService;

        public DahboardController(ILogger<DahboardController> logger, IDashboardService dashboardService)
        {
            _logger = logger;
            _dashboardService = dashboardService;
        }

        public IActionResult Get()
        {
            return Ok("Success");
        }

        [HttpPost("UploadAttachment")]
        public async Task<IActionResult> UploadAttachment([FromForm] DashboardDto dashboardDto) 
        {
            var response = new ResponseMessage<bool>() { IsSuccess = false };

            try
            {
                response = await _dashboardService.UploadAttachment(dashboardDto);
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                response.Message = "Something went wrong, please try again later!";

                return BadRequest(response);
            } 
        }
    }
}
