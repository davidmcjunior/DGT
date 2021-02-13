import { NameAndDescription } from '../models';

// the values that were in here got absorbed into the popups
// the tooltip component needs the object to build correctly
export let tooltips: { [key: string]: NameAndDescription } = {
    'cluster': {
        name: undefined,
        description: `<span>Cluster</span>`
    },
    'point': {
        name: undefined,
        description: `<span>Point</span>`
    },
    'heat': {
        name: undefined,
        description: `<span>Heatmap</span>`
    },
};

export let popups: { [key: string]: NameAndDescription } = {
    'about': {
        name: 'About',
        description:
            `<span>Signal Four Analytics is developed and hosted for the State of Florida at the Geoplan Center of University of Florida. S4 nextgen version 1.0, updated on July 17, 2020. For more information visit Signal Four Analytics website. Questions or comments email us at s4-support@ufl.edu<span/>`

    },
    'dateRange': {
        name: 'Available Dates',
        description:
            `<span>Date range must fall between January 1, 2018 and today's date.</br> A broader search range will become available as data is processed</span>`

    },
    'disclaimer': {
        name: 'Disclaimer',
        description: `<span>
        This dashboard and analytics system receives data from Florida’s statutory custodian of records, the Florida Department of Highway Safety and Motor Vehicles (FLHSMV).
        Every effort is made to ensure that all data, information, and results posted on this website are accurate and complete.
        However, all data is considered preliminary until the year is reconciled and closed out by the FLHSMV,
        and thus certain adjustments may be made to verify the data where clerical errors are noted.
        For further inquiries on Florida traffic crash and citation reports along with additional statistics please visit <a class="simple-link" href="https://www.flhsmv.gov/resources/crash-citation-reports/" target="_blank">FLHSMV: Crash and Citation Reports & Statistics</a></span>`

    },
    'cmvRelated': {
        name: 'CMV',
        description: '<span class="ml-1">Commercial Motor Vehicle</span>'
    },
    'emphasisAreaDefinitions': {
        name: 'Emphasis Areas',
        description:
            `
      <div class="m-1">
      Below find a brief description of crash classification for each emphasis area. See <a href="assets/documents/FDOT_SHSP_Emphasis_Areas_Definitions.pdf" download>this</a> document for detailed definitions of crash classification for each emphasis area based on the data elements of the Florida crash form.
      </div>

      <ul style="list-style-position: outside">
      <li class="mb-1"><span class="font-heading">Lane Departure Crashes:</span><span class="ml-2">  These are crashes that are not at an intersection where at least one vehicle involved has left its lane of travel.  Everyone in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Intersection Crashes:</span><span class="ml-2">  These are crashes that are at an intersection with a cross-street or possibly a railroad crossing.  Everyone in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Potentially Impaired Driving Crashes:</span><span class="ml-2">  These are crashes in which at least one driver involved either has tested positive for drugs or alcohol or has refused to submit to a drug or alcohol test.  Every person in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Pedestrians and Bicyclists:</span><span class="ml-2">  These are people walking or riding non-motorized vehicles (bicycle or similar, wheelchair, etc.) who have been involved in a crash with a motorized vehicle (car, truck, motorcycle).  Only the individual pedestrians or cyclists are counted.</span></li>
      <li class="mb-1"><span class="font-heading">Unrestrained Occupants:</span><span class="ml-2">  These are people in seat-belt-equipped vehicles who were not using their seatbelts at the time of the crash.  Only the individual un-belted people are counted.</span></li>
      <li class="mb-1"><span class="font-heading">Aging Driver Involved Crashes:</span><span class="ml-2">  These are crashes in which at least one of the drivers involved was 65 years old or older at the time of the crash.  Every person in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Motorcyclists:</span><span class="ml-2">  These are people riding a motorcycle that was involved in a crash.  Only the motorcycle drivers and passengers are counted.</span></li>
      <li class="mb-1"><span class="font-heading">Commercial Vehicle Crashes:</span><span class="ml-2">  These are crashes in which a commercial vehicle – a large truck, bus, or vehicle carrying hazardous materials – was involved.  Every person in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Speeding or Aggressive Driving Crashes:</span><span class="ml-2">  These are crashes in which at least one driver involved was speeding or driving aggressively.  Aggressive driving is a combination of improper driving behaviors.  Every person in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Teen Driver Involved Crashes:</span><span class="ml-2">  These are crashes in which at least one of the drivers involved was between the ages of 15 and 19 at the time of the crash.  Every person in the crash is counted.</span></li>
      <li class="mb-1"><span class="font-heading">Work Zone Crashes:</span><span class="ml-2">  These are crashes that are reported by the law enforcement officer as involving a work zone or on a roadway that is under construction or where maintenance work is taking place.  Every person in the crash is counted.</span></li>

      </ul>`
    },
    'codeable': {
        name: 'Codeable',
        description:
            `<span class="mb-2">Motor vehicle crashes in which one or more of the following conditions occur:</span>
        <div class="ml-2 mb-1">- Result in death or personal injury.</div>
        <div class="ml-2 mb-1">- Involved a commercial motor vehicle.</div>
        <div class="ml-2 mb-1">- Leaving the scene involving damage to an attended vehicle or property (Section 316.061 (1), F.S.)</div>

        <div class="ml-2 mb-1">- A vehicle was rendered inoperable to a degree that required a wrecker to remove it from the scene of the crash.</div>
        <div class="ml-2 mb-1">- Driving while under the influence of alcoholic beverages, chemical or controlled substances,</br>
          <span class="ml-3">or with an unlawful blood alcohol level (Section 316.193, F.S.).</span>
        </div>
      <span class="w100 d-flex flex-row justify-content-end"><span class="brdr brdr-top brdr-light txt8 font-heading">source: Florida DHSMV</span></span>`
    },
    // currently unused
    'crashType': {
        name: 'Crash Types',
        description:
            `In S4 Analytics, crash type is a calculated value based on the values of one or more Florida crash report fields:</br>
      ‘First Harmful Event’, ‘Manner of Collision/Impact’, ‘Number of Vehicles’, ‘Vehicle Maneuver Action’, ‘Vehicle Direction of Travel’, ‘Vehicle Area of Initial Impact’.</br>
      In calculating the crash type, only the first two vehicles are considered.</br>
      There are two levels of crash types, ‘simple’ or ‘detailed’.</br>
      The detailed crash type adds a finer categorization to some of the simple types. Toggle the Simple/Detailed buttons to see the difference.</br>
      'Click on the link below for a full description of crash types and how they are calculated.`
    },
    'fileImport': {
        name: 'Importing a File',
        description:
            `<span>Supports two file types:</span>
      <ul>
        <li>Txt (.txt)</li>
        <li>Comma-separated value (.csv)</li>
      </ul>
      <span class="font-heading opacity-high">CSV Files</span></br>
      <span class="mx-1">List report/case numbers in a column labeled correctly for your search type:</span>
      <ul>
        <li>HSMV - <span class="font-heading opacity-high">HSMV_Crash_Report_Number</span></li>
        <li>Agency - <span class="font-heading opacity-high">Reporting_Agency_Case_Number</span></li>
      </ul>
      <span class="mb-2"><b class="font-heading opacity-high">Txt Files</b></span></br>
      <span class="ml-2">List report/case numbers separated by:</span>
      <ul>
        <li>Commas</li>
        <li>New lines</li>
      </ul>`
    },
    // currently unused
    'violationType': {
        name: 'Violation Types',
        description:
            `The complete list of possible violations has been grouped into </br>
      'a much shorter list of violation types for quick filtering.</br>
      'For a complete list of violations and their types, click the link below.`
    }
};
