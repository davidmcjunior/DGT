using System;

namespace DGT.Models
{
    public class CrashEvent
    {
          // HSMV Report { get; set; }– an identifying number, unique statewide, that is assigned by the Florida Department of Highway Safety and Motor Vehicles to each Traffic Crash Report.
          public int HsmvReportNumber { get; set; }

          // Street Address { get; set; }– house number
          public int StreetAddressNumber { get; set; }

          // Crash Date – the date on which a crash event occurred
          // Note: Date(string) takes an ISO 8601-defined format string: https://www.w3.org/TR/NOTE-datetime
          public DateTime CrashDate { get; set; }

          // County – the County in which the crash occurred
          public string County { get; set; }

          // City – the City in which the crash occurred
          public string City { get; set; }

          // On Street – the street name on which vehicle 1 was traveling prior to the crash
          public string OnStreetName { get; set; }

          // Intersecting Street – the street name of the nearest intersecting street, for reference
          public string IntersectingStreetName { get; set; }

          // Offset Distance – the distance from the nearest intersection to the crash point
          public int OffsetDistance { get; set; }

          // Offset Direction – the direction from the nearest intersection to the crash point
          public string OffsetDirection { get; set; }

          // Crash Severity – the maximum injury severity for any driver, passenger or non-motorist involved
          public string CrashSeverity { get; set; }

          // Road System Identifier – the primary road system identifier:
          public string RoadwaySystemId { get; set; }

          // Form Type
          public string FormType { get; set; }

          // Bicyclist Count – a count of non-motorists having description of 3 – Bicyclist or 4 – Other Cyclist
          public int BicyclistCount { get; set; }

          // Pedestrian Count – a count of non-motorists having description of 1 – Pedestrian or 2 – Other Pedestrian
          public int PedestrianCount { get; set; }

          // Pool Id – identifies an administrative pool
          public int PoolId { get; set; }

          // User Id – identifies a Signal4 user
          public int UserId { get; set; }

          // Edit Date
          public DateTime EditDate { get; set; }

          // Edit Status
          public string EditStatus { get; set; }

          // Review Date
          public DateTime ReviewDate { get; set; }

          // Review Status
          public string ReviewStatus { get; set; }

          // Site Location
          public string SiteLocation { get; set; }

          // Location Only Code
          public bool offNetwork { get; set; }

          // FDOT Property Code – indicates if any properties damaged are owned by FDOT
          public string FdotPropertyCode { get; set; }

          // Side of Road
          public string SideOfRoad { get; set; }

          // Crash Lane
          public string CrashLane { get; set; }

          // Narrative – describes the crash scene, including the sequence of events prior to, at, and post
          // collision for each vehicle, driver, and non-motorist
          public string Narrative { get; set; }

          // Diagram – an illustration of the crash scene, including road names, width of each lane and road
          // markings, any physical evidence on the roadway, and each vehicle’s position prior to, at, and post collision.
          // diagram { get; set; }
          //
          // originalGeocoding { get; set; }
          //
          // editedGeocodings { get; set; }

    }
}
