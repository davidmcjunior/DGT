using System;

namespace DGT.Models
{
    public class CrashEvent
    {
          public int HsmvReportNumber { get; set; }

          public string StreetAddressNumber { get; set; }
          
          public DateTime CrashDate { get; set; }

          public string County { get; set; }

          public string City { get; set; }

          public string OnStreetName { get; set; }

          public string IntersectingStreetName { get; set; }

          public int OffsetDistance { get; set; }

          public string OffsetDirection { get; set; }

          public int CrashSeverity { get; set; }

          public int RoadwaySystemId { get; set; }

          public char FormType { get; set; }

          public int BicyclistCount { get; set; }

          public int PedestrianCount { get; set; }

          public int PoolId { get; set; }

          public int UserId { get; set; }

          public DateTime EditDate { get; set; }

          public string EditStatus { get; set; }

          public DateTime ReviewDate { get; set; }

          public string ReviewStatus { get; set; }

          public string SiteLocation { get; set; }

          public bool OffNetwork { get; set; }

          public string FdotPropertyCode { get; set; }

          public string SideOfRoad { get; set; }

          public string CrashLane { get; set; }

          public string Narrative { get; set; }

    }
}
