using System;
using System.Threading;
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
            CancellationTokenSource source = new CancellationTokenSource();
            CrashEvent ceReturn;
            
            CrashEvent ce1 = new CrashEvent {
                City = "Gainesville",
                County = "Alachua",
                CrashDate = new DateTime(2020, 12, 30),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 100,
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
            };
            
            CrashEvent ce2 = new CrashEvent {
                City = "Ocala",
                County = "Marion",
                CrashDate = new DateTime(2020, 11, 13),
                CrashInjury = 4,
                FormType = 'S',
                HsmvReportNumber = 200,
                IntersectingStreet = "Silver Springs Rd.",
                OffsetDirection = "East",
                OffsetDistance = 45,
                OnStreet = "9th St",
                RoadwaySystemId = 1,
                StreetAddressNumber = "1",
                OnPublicRoads = true,
                SideOfRoad = "P",
                CrashLane = "V",
                Ownership = "FDOT",
                RouteSignage = "No Fishing"
            };
            
            CrashEvent ce3 = new CrashEvent {
                City = "Lake City",
                County = "Columbia",
                CrashDate = new DateTime(2020, 10, 30),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 300,
                IntersectingStreet = "Farmer Rd.",
                OffsetDirection = "South",
                OffsetDistance = 45,
                OnStreet = "Yarguth St",
                RoadwaySystemId = 1,
                StreetAddressNumber = "399990000",
                OnPublicRoads = true,
                SideOfRoad = "P",
                CrashLane = "V",
                Ownership = "Your momma",
                RouteSignage = "No littering"
            };
            
            CrashEvent ce4 = new CrashEvent {
                City = "Crap",
                County = "Crap",
                CrashDate = new DateTime(2020, 10, 30),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 300,
                IntersectingStreet = "Farmer Rd.",
                OffsetDirection = "South",
                OffsetDistance = 45,
                OnStreet = "Yarguth St",
                RoadwaySystemId = 1,
                StreetAddressNumber = "399990000",
                OnPublicRoads = true,
                SideOfRoad = "P",
                CrashLane = "V",
                Ownership = "Your momma",
                RouteSignage = "No littering"
            };
            
            return Task.Run(async delegate
            {
                if (hsmvReportNumber == 100)
                {
                    ceReturn = ce1;
                } 
                else if (hsmvReportNumber == 200)
                {
                    ceReturn = ce2;
                } 
                else if (hsmvReportNumber == 300)
                {
                    ceReturn = ce3;
                }
                else
                {
                    ceReturn = ce4;
                }
                await Task.Delay(5000);
                return ceReturn;
            });
        }
    }
}
