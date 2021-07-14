using System;
using System.Collections.Generic;

namespace DGT.Models
{
    public class Geocoding
    {
        private int _hsmvReportNumber;
        private List<MapPoint> _mapPoints;
        private DateTime _createDate;
        private DateTime _lastUpdateDate;
        private string _etlGeoLocationStatus;
        private string _relationShipToNetwork;
        private double _centerlineX;
        private double _centerlineY;
        private string _matchStatusCode;
        private int _matchResultCode;
        private int  _failReasonCode;
        private string _crashSegmentId;
        private string _nearestIntersectionId;

        public class MapPoint
        {
            private double _x;
            private double _y;

            public double X
            {
                get => _x;
                set => _x = value;
            }

            public double Y
            {
                get => _y;
                set => _y = value;
            }
        }
        
        public List<MapPoint> MapPoints
        {
            get => _mapPoints;
            set => _mapPoints = value;
        }

        public int HsmvReportNumber
        {
            get => _hsmvReportNumber;
            set => _hsmvReportNumber = value;
        }

        public DateTime CreateDate
        {
            get => _createDate;
            set => _createDate = value;
        }

        public DateTime LastUpdateDate
        {
            get => _lastUpdateDate;
            set => _lastUpdateDate = value;
        }

        public string EtlGeoLocationStatus
        {
            get => _etlGeoLocationStatus;
            set => _etlGeoLocationStatus = value;
        }

        public string RelationShipToNetwork
        {
            get => _relationShipToNetwork;
            set => _relationShipToNetwork = value;
        }

        public double CenterlineX
        {
            get => _centerlineX;
            set => _centerlineX = value;
        }

        public double CenterlineY
        {
            get => _centerlineY;
            set => _centerlineY = value;
        }

        public string MatchStatusCode
        {
            get => _matchStatusCode;
            set => _matchStatusCode = value;
        }

        public int MatchResultCode
        {
            get => _matchResultCode;
            set => _matchResultCode = value;
        }

        public int FailReasonCode
        {
            get => _failReasonCode;
            set => _failReasonCode = value;
        }

        public string CrashSegmentId
        {
            get => _crashSegmentId;
            set => _crashSegmentId = value;
        }

        public string NearestIntersectionId
        {
            get => _nearestIntersectionId;
            set => _nearestIntersectionId = value;
        }
    }
}
