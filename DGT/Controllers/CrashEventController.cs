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
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = hsmvReportNumber,
                IntersectingStreet = "Archer Rd.",
                OffsetDirection = "North",
                OffsetDistance = 45,
                OnStreet = "SW 13th St.",
                RoadwaySystemId = 1,
                StreetAddressNumber = "231",
                OnPublicRoads = true,
                SideOfRoad = "P",
                CrashLane = "V",
                Ownership = "Florida Dept of W and M",
                RouteSignage = "No Fishing"
            });
        }
    }
}
