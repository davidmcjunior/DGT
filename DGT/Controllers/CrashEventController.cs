using System;
using System.Threading.Tasks;
using DGT.Models;
using Microsoft.AspNetCore.Mvc;

namespace DGT.Controllers
{
    public class CrashEventController : ControllerBase
    {

        [HttpGet("api/v1/crash-event/{hsmvReportNumber}")]
        public Task<CrashEvent> Get(int hsmvReportNumber)
        {
            return Task.FromResult(new CrashEvent
            {
                City = "Gainesville",
                County = "Alachua",
                CrashDate = new DateTime(2020, 12, 30),
                CrashSeverity = 2,
                FormType = 'L',
                HsmvReportNumber = hsmvReportNumber,
                IntersectingStreetName = "Archer Rd.",
                OffsetDirection = "North",
                OffsetDistance = 45,
                OnStreetName = "SW 13th St.",
                RoadwaySystemId = 1,
                StreetAddressNumber = "231",
            });
        }
    }
}
