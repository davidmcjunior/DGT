using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DGT.Models
{
	public class CrashRecordPool
	{
		public string               Name                 { get; set; }
		public DateTime             Year                 { get; set; }
		public DateTime             StartDate            { get; set; }
		public DateTime             EndDate              { get; set; }
		public County               County               { get; set; }
		public bool                 OnFdotProperty       { get; set; }
		public EmphasisArea         EmphasisArea         { get; set; }
		public RoadwaySystem        RoadwaySystem        { get; set; }
		public CrashReportForm      Form                 { get; set; }
		public EtlGeolocationStatus EtlGeolocationStatus { get; set; }

		[JsonExtensionData]
		public Dictionary<string, object> ExtensionData  { get; set; }
	}
}
