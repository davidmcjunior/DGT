using System;
using System.Collections.Generic;
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

            CrashEvent ce1 = new CrashEvent
            {
                City = "Gainesville",
                County = "Alachua",
                CrashDate = new DateTime(2020, 12, 30),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 100,
                DotProperty = true,
                IntersectingStreet = "Archer Rd.",
                OffsetDirection = "North",
                OffsetDistance = 45,
                OnStreet = "SW 13th St.",
                RoadwaySystemId = 1,
                StreetAddressNumber = "231",
                OnPublicRoads = false,
                SideOfRoad = "P",
                CrashLane = "V",
                Ownership = "Florida Dept of W and M",
                RouteSignage = "No Fishing",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 100,
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.31088991384530, Y = 29.659140056990618 },
                        new Geocoding.MapPoint{ X = -82.31088991384531, Y = 29.649150056990612 },
                        new Geocoding.MapPoint{ X = -82.31088991384530, Y = 29.649140056990614 }
                    }
                }
            };

            CrashEvent ce2 = new CrashEvent
            {
                City = "Ocala",
                County = "Marion",
                CrashDate = new DateTime(2020, 11, 13),
                CrashInjury = 4,
                FormType = 'S',
                HsmvReportNumber = 200,
                IntersectingStreet = "Silver Springs Rd.",
                OffsetDirection = "East",
                DotProperty = false,
                OffsetDistance = 45,
                OnStreet = "9th St",
                RoadwaySystemId = 1,
                StreetAddressNumber = "1",
                OnPublicRoads = true,
                SideOfRoad = "P",
                CrashLane = "V",
                Ownership = "FDOT",
                RouteSignage = "No Fishing",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 200,
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.310889913845303, Y = 29.649140056990618 },
                        new Geocoding.MapPoint{ X = -82.310889913845301, Y = 29.649140056990612 },
                        new Geocoding.MapPoint{ X = -82.310889913845306, Y = 29.649140056990614 }
                    }
                }
            };

            CrashEvent ce3 = new CrashEvent
            {
                City = "Lake City",
                County = "Columbia",
                CrashDate = new DateTime(2020, 10, 30),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 300,
                // DotProperty = null,
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
                RouteSignage = "No littering",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 300,
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.310889913845303, Y = 29.649140056990618 },
                        new Geocoding.MapPoint{ X = -82.310889913845301, Y = 29.649140056990612 },
                        new Geocoding.MapPoint{ X = -82.310889913845306, Y = 29.649140056990614 }
                    }
                }
            };

            CrashEvent ce4 = new CrashEvent
            {
                City = "Crap",
                County = "Crap",
                CrashDate = new DateTime(2020, 10, 30),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 400,
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
                RouteSignage = "No littering",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 300,
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.310889913845303, Y = 29.649140056990618 },
                        new Geocoding.MapPoint{ X = -82.310889913845301, Y = 29.649140056990612 },
                        new Geocoding.MapPoint{ X = -82.310889913845306, Y = 29.649140056990614 }
                    }
                }
            };

            CrashEvent ce5 = new CrashEvent
            {
                City = "Newberry",
                County = "Alachua",
                CrashDate = new DateTime(2021, 3, 3),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 88416900,
                DotProperty = false,
                IntersectingStreet = "NW 122nd St.",
                OffsetDirection = "West",
                OffsetDistance = 50,
                OnStreet = "State Road 26",
                RoadwaySystemId = 3,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "R",
                Ownership = "",
                RouteSignage = "",
                OriginalLat = 29.6599,
                OriginalLng = -82.472399999999993,
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 88416900,
                    EtlGeoLocationStatus = "Officer Mapped",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.4985351780292, Y = 29.6538799881909 }
                    }
                }
            };

            CrashEvent ce6 = new CrashEvent
            {
                City = "Gainesville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 3, 4),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 24089254,
                DotProperty = false,
                IntersectingStreet = "(NW 8th Ave)",
                OffsetDirection = "South",
                OffsetDistance = 300,
                OnStreet = "SR 121 (NW 34th St)",
                RoadwaySystemId = 3,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 24089254,
                    EtlGeoLocationStatus = "Officer Mapped",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.372409999712, Y = 29.6587103530341 }
                    }
                }
            };

            CrashEvent ce7 = new CrashEvent
            {
                City = "Unincorp.",
                County = "Alachua",
                CrashDate = new DateTime(2021, 3, 19),
                CrashInjury = 5,
                FormType = 'L',
                HsmvReportNumber = 88030750,
                DotProperty = false,
                IntersectingStreet = "NE 100th Avenue",
                OffsetDirection = "South",
                OffsetDistance = 116,
                OnStreet = "County Road 1469",
                RoadwaySystemId = 4,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                OriginalLat = 29.7462438852506,
                OriginalLng = -82.103234788391802,
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 88030750,
                    EtlGeoLocationStatus = "Computer Confident",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.1032730228944, Y = 29.7459769612929 }
                    }
                }
            };

            CrashEvent ce8 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 3, 10),
                CrashInjury = 1,
                FormType = 'L',
                HsmvReportNumber = 24089323,
                DotProperty = false,
                IntersectingStreet = "",
                OffsetDirection = "",
                OffsetDistance = 0,
                OnStreet = "NW 39th Ave",
                RoadwaySystemId = 8,
                StreetAddressNumber = "110",
                OnPublicRoads = false,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 24089323,
                    EtlGeoLocationStatus = "Computer Confident",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.3255200749578, Y = 29.6884999544869 }
                    }
                }
            };

            CrashEvent ce9 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 4, 9),
                CrashInjury = 1,
                FormType = 'L',
                HsmvReportNumber = 24089712,
                DotProperty = false,
                IntersectingStreet = "",
                OffsetDirection = "West",
                OffsetDistance = 0,
                OnStreet = "SR 26 (E University Ave.)",
                RoadwaySystemId = 3,
                StreetAddressNumber = "2300",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 24089712,
                    EtlGeoLocationStatus = "Computer Tie",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.2949386900473, Y = 29.6519579589592 },
                        new Geocoding.MapPoint{ X = -82.292273, Y = 29.651972 }
                    }
                }
            };

            CrashEvent ce10 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 4, 11),
                CrashInjury = 1,
                FormType = 'L',
                HsmvReportNumber = 24089722,
                DotProperty = false,
                IntersectingStreet = "",
                OffsetDirection = "",
                OffsetDistance = 0,
                OnStreet = "SR 26 (W Univeristy Ave.)",
                RoadwaySystemId = 3,
                StreetAddressNumber = "912",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 24089722,
                    EtlGeoLocationStatus = "Computer Tie",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.3342971499001, Y = 29.6521085852985 },
                        new Geocoding.MapPoint{ X = -82.334296, Y = 29.652030 },
                    }
                }
            };

            CrashEvent ce11 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 4, 8),
                CrashInjury = 1,
                FormType = 'L',
                HsmvReportNumber = 88472946,
                DotProperty = false,
                IntersectingStreet = "SR-26 (Newberry Rd)",
                OffsetDirection = "South",
                OffsetDistance = 30,
                OnStreet = "I-75 NB Exit 387",
                RoadwaySystemId = 1,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "X",
                Ownership = "",
                RouteSignage = "",
                OriginalLat = 29.658976733325101,
                OriginalLng = -82.417547076736994,
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 88472946,
                    EtlGeoLocationStatus = "Computer Approximate",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.5430961085539, Y = 29.8782798212222 }
                    }
                }
            };

            CrashEvent ce12 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2020, 2, 25),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 89918672,
                DotProperty = false,
                IntersectingStreet = "Museum Rd",
                OffsetDirection = "",
                OffsetDistance = 0,
                OnStreet = "Woodlawn Dr",
                RoadwaySystemId = 5,
                StreetAddressNumber = "779",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 89918672,
                    EtlGeoLocationStatus = "Computer Approximate",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.3554100865971, Y = 29.6449499289423 }
                    }
                }
            };

            CrashEvent ce13 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 4, 5),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 88437234,
                DotProperty = false,
                IntersectingStreet = "W University Ave",
                OffsetDirection = "South",
                OffsetDistance = 600,
                OnStreet = "SW 75th St",
                RoadwaySystemId = 5,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "L",
                Ownership = "",
                RouteSignage = "",
                OriginalLat = 29.6520289681475,
                OriginalLng = -82.422464601299197,
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 88437234,
                    EtlGeoLocationStatus = "Lat Long Plot",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.4223950853538, Y = 29.6520262594005 }
                    }
                }
            };

            CrashEvent ce14 = new CrashEvent
            {
                City = "Gainseville",
                County = "Alachua",
                CrashDate = new DateTime(2021, 4, 9),
                CrashInjury = 2,
                FormType = 'L',
                HsmvReportNumber = 88437237,
                DotProperty = false,
                IntersectingStreet = "State Rd 121",
                OffsetDirection = "South",
                OffsetDistance = 15840,
                OnStreet = "Interstate 75 387MM NB",
                RoadwaySystemId = 1,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                OriginalLat = 29.66845,
                OriginalLng = -82.426419999999993,
                Geocoding = new Geocoding
                {
                    HsmvReportNumber = 88437237,
                    EtlGeoLocationStatus = "Lat Long Plot",
                    MapPoints = new List<Geocoding.MapPoint>
                    {
                        new Geocoding.MapPoint{ X = -82.4264275125337, Y = 29.6684696064396 }
                    }
                }
            };

            CrashEvent ce15 = new CrashEvent
            {
                City = "",
                County = "",
                CrashDate = new DateTime(2021, 4, 8),
                CrashInjury = 0,
                FormType = 'L',
                DotProperty = false,
                IntersectingStreet = "",
                OffsetDirection = "",
                OffsetDistance = 0,
                OnStreet = "",
                RoadwaySystemId = 77,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    EtlGeoLocationStatus = "Not Mapped",
                    MapPoints = new List<Geocoding.MapPoint>
                    {

                    }
                }
            };

            CrashEvent ce16 = new CrashEvent
            {
                City = "",
                County = "",
                CrashDate = new DateTime(2021, 4, 9),
                CrashInjury = 0,
                FormType = 'L',
                DotProperty = false,
                IntersectingStreet = "",
                OffsetDirection = "",
                OffsetDistance = 0,
                OnStreet = "",
                RoadwaySystemId = 77,
                StreetAddressNumber = "",
                OnPublicRoads = true,
                SideOfRoad = "",
                CrashLane = "",
                Ownership = "",
                RouteSignage = "",
                Geocoding = new Geocoding
                {
                    EtlGeoLocationStatus = "Not Mapped",
                    MapPoints = new List<Geocoding.MapPoint>
                    {

                    }
                }
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
                else if (hsmvReportNumber == 400)
                {
                    ceReturn = ce4;
                }
                else if (hsmvReportNumber == 88416900)
                {
                    ceReturn = ce5;
                }
                else if (hsmvReportNumber == 24089254)
                {
                    ceReturn = ce6;
                }
                else if (hsmvReportNumber == 88030750)
                {
                    ceReturn = ce7;
                }
                else if (hsmvReportNumber == 24089323)
                {
                    ceReturn = ce8;
                }
                else if (hsmvReportNumber == 24089712)
                {
                    ceReturn = ce9;
                }
                else if (hsmvReportNumber == 24089722)
                {
                    ceReturn = ce10;
                }
                else if (hsmvReportNumber == 88472946)
                {
                    ceReturn = ce11;
                }
                else if (hsmvReportNumber == 89918672)
                {
                    ceReturn = ce12;
                }
                else if (hsmvReportNumber == 88437234)
                {
                    ceReturn = ce13;
                }
                else if (hsmvReportNumber == 88437237)
                {
                    ceReturn = ce14;
                }
                else
                {
                    ceReturn = ce15;
                }
                await Task.Delay(2000);
                return ceReturn;
            });
        }
    }
}
