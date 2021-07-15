// CONSTANTS

// Relationship tNetwork – the relationship between a crash point and the roadway network
// Intersection – crash occurred within an at-grade intersection
// Road Segment – crash occurred on a roadway segment not within an intersection
// Ramp – crash occurred on a ramp leading tor from a roadway segment, to or from another
// roadway segment, where there is not an at-grade intersection
// Off Roadway – crash occurred off the roadway, such as in a parking lot
export const RELATIONSHIPS_TO_NETWORK = [
  'Intersection',
  'Road Segment',
  'Ramp',
  'Off Roadway'
];

export const MODES = [
  'INTERSECTION', 'SEGMENT', 'RAMP', 'OFFROADWAY'
];

export const YES_NO = [
  {key: 'yes',  value: 'Yes'},
  {key: 'no',  value: 'No'}
];

// Match Status Code
// F – Final, point placed by law enforcement in the field using S4 MapPoint Service tool
// M – Matched, matching location found by the automatic batch geocoder
// T – Tied, one or more matching locations found, one selected at random
// U – Unmatched
export const MATCH_STATUS_CODES = [
  {key: 'F', value: 'Final'},
  {key: 'M', value: 'Matched'},
  {key: 'T', value: 'Tied'},
  {key: 'U', value: 'Unmatched'}
];

export const EDITOR_QUEUE_REPORT_STATUSES = [
  'In Queue',
  'In Process',
  'Processed'
];

export const CRASH_DIRECTIONS = [
  {key: 'N', value: 'North'},
  {key: 'S', value: 'South'},
  {key: 'E', value: 'East'},
  {key: 'W', value: 'West'}
];

export const SIDE_OF_ROAD_CODES = [
  {key: 'I', value: 'Middle of Intersection'},
  {key: 'E', value: 'Off end of maintained roadway at T-shaped intersection'},
  {key: 'L', value: 'Left (lanes bound in direction of decreasing mile-points)'}, // !
  {key: 'M', value: 'Median/Middle'},
  {key: 'P', value: 'Parking lot/private property'},
  {key: 'R', value: 'Right (lanes bound in direction of increasing mile-points)'},
  {key: 'S', value: 'Right-hand (lanes bound in direction of increasing mile-points) side-road, not on the maintained roadway'},
  {key: 'T', value: 'Left-hand (lanes bound in direction of decreasing mile-points) side-road, not on the maintained roadway'},
  {key: 'U', value: 'Unknown'}
];

export const DOT_PROPERTY_CODES = [];

export const CRASH_LANE_CODES = [
  {key: 'A', value: 'Acceleration/merge lane'},
  {key: 'B', value: 'Tollbooth plaza'},
  {key: 'C', value: 'Pedestrian in crosswalk'},
  {key: 'D', value: 'Driveway'},
  {key: 'E', value: 'Off end of maintained roadway at T-shaped intersection'},
  {key: 'H', value: 'Island (median that divides lanes of traffic going in the same direction)'},
  {key: 'K', value: 'Service/access road'},
  {key: 'L', value: 'Left-turn-only lane'},
  {key: 'M', value: 'Median/middle'},
  {key: 'N', value: 'Not applicable'},
  {key: 'P', value: 'Parking lane (with designated parking spaces)'},
  {key: 'R', value: 'Right-turn-only lane'},
  {key: 'S', value: 'Side of roadway/shoulder/off-road/emergency lane'},
  {key: 'T', value: 'Continuous left-turn lane accessible from both directions'},
  {key: 'U', value: 'Unknown'},
  {key: 'V', value: 'Bicycle in designated bicycle travel lane'},
  {key: 'X', value: 'On/off-ramp'},
];

export const SITE_LOCATION_CODES = [
  {key: 0, value: 'Unknown'},
  {key: 1, value: 'Not at intersection/railroad crossing/bridge'},
  {key: 2, value: 'At intersection'},
  {key: 3, value: 'Influenced by intersection'},
  {key: 4, value: 'Driveway access'},
  {key: 5, value: 'Railroad'},
  {key: 6, value: 'Bridge'},
  {key: 7, value: 'Entrance ramp'},
  {key: 8, value: 'Exit ramp'},
  {key: 9, value: 'Private parking lot'},
  {key: 10, value: 'Public parking lot'},
  {key: 11, value: 'Private property'},
  {key: 12, value: 'Toll booth'},
  {key: 13, value: 'Public bus stop zone'},
  {key: 77, value: 'All other (explained in narrative)'}
];

export const CRASH_REPORT_FORM_TYPES = [
  {key: 'S', value: 'Short Form'},
  {key: 'L', value: 'Long Form'}
];

// ETL Geocode Status – the outcome of the Signal4 automatic batch geocoding process
export const ETL_GEOLOCATION_STATUSES = [
  'Officer Mapped',
  'Computer Confident',
  'Computer Tie',
  'Computer Approximate',
  'Lat Long Plot',
  'Not Mapped'
];

export const BATCH_GEOCODER_MATCH_RESULT_CODES = [
  {key: 0, value: 'Not Geocoded'},
  {key: 1, value: 'Matching'},
  {key: 2, value: 'For Review'},
  {key: 3, value: 'Confident'},
  {key: 4, value: 'Interactive - placed by human editor using S4 Geocoding tool'},
  {key: 5, value: 'Interactive - placed by law enforcement in the field using S4 MapPoint Service tool'},
];

export const BATCH_GEOCODE_FAIL_MATCH_REASON_CODES = [
  {key: 0, value: 'None'},
  {key: 1, value: 'Street Not Found'},
  {key: 2, value: 'Intersection Not Found'},
  {key: 3, value: 'Invalid House Address'},
  {key: 4, value: 'MapPoint is Ambiguous'},
  {key: 5, value: 'Incorrectly Geocoded'},
  {key: 6, value: 'Invalid Site MapPoint'},
];

export const ROAD_SYSTEM_IDS = [
  {key: 1, value: 'Interstate'},
  {key: 2, value: 'US'},
  {key: 3, value: 'State'},
  {key: 4, value: 'County'},
  {key: 5, value: 'Local'},
  {key: 6, value: 'Turnpike / Toll'},
  {key: 7, value: 'Forest Road'},
  {key: 8, value: 'Private Roadway'},
  {key: 9, value: 'Parking Lot'},
  {key: 77, value: 'Other'}
];

export const CRASH_SEVERITIES = [
  {key: 1, value: 'None'},
  {key: 2, value: 'Possible'},
  {key: 3, value: 'Non-incapacitating'},
  {key: 4, value: 'Incapacitating'},
  {key: 5, value: 'Fatal (within 30 days)'},
  {key: 6, value: 'Non-Traffic Fatality'}
];

export const NON_MOTORIST_DESCRIPTIONS = [
  {key: 1, value: 'Pedestrian'},
  {key: 2, value: 'Other Pedestrian'},
  {key: 3, value: 'Bicyclist'},
  {key: 4, value: 'Other Cyclist'},
  {key: 5, value: 'Occupant of Motor Vehicle Not in Transport'},
  {key: 6, value: 'Occupant of a Non-Motor Vehicle Transportation Device'},
  {key: 7, value: 'Unknown Type of Non-Motorist'}
];
