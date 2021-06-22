using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DGT.Models
{
	public class CrashRecordPool
	{


		[JsonExtensionData]
		public Dictionary<string, object> ExtensionData  { get; set; }
	}
}
