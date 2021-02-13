export * from './common/interfaces';
export * from './attention-seekers';
export * from './bouncing';
export * from './fading';
export * from './flippers';
export * from './rotating';
export * from './sliding';
export * from './zooming';
export * from './specials';
export * from './other';

/*

// Use :enter && :leave as transition state to pair animation with *ngIf

export let enterLeaveLeft = trigger('enterLeaveLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate(`${durationExpand} ${easingDecelerate}`, style({ transform: 'translateX(0%)' }))
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0%)' }),
    animate(`${durationCollapse} ${easingAccelerate}`, style({ transform: 'translateX(-100%)' }))
  ]),
]);


export let maintainCenterPanel = trigger('maintainCenterPanel', [
  state('left', style({ width: `100vw - ${onePanelWidth}px` })),
  state('right', style({ width: `100vw - ${onePanelWidth}px` })),
  state('both', style({ width: `100vw - ${twoPanelWidth}px` })),
  state('none', style({ width: '100vw - 10px' })),

  transition('* =>  both', [animate(`${durationExpand} ${easingDecelerate}`)]),
  transition('both =>  *', [animate(`${durationCollapse} ${easingAccelerate}`)]),
  transition('* =>  none', [animate(`${durationCollapse} ${easingStandard}`)]),
  transition('none =>  *', [animate(`${durationExpand} ${easingDecelerate}`)]),
])
// Event Analysis Component
export let showHideSidePanel = trigger('showHideSidePanel', [
  state('showPanel', style({ left: 0 })),
  state('hidePanel', style({ left: '-388px' })),
  transition('* => hidePanel', [
    animate(`${durationCollapse} ${easingAccelerate}`)
  ]),
  transition('* => showPanel', [
    animate(`${durationExpand} ${easingDecelerate}`)
  ])
]);

// export let slideGrid = trigger('slideGrid', [
//   state('panelClosed', style({
//     left: '-388px',
//     width: 'calc(100vw - 12px)'
//   })),
//   state('panelOpen', style({
//     left: 0,
//     width: 'calc(100vw - 400px)'
//   })),
//   transition('* => panelOpen', [
//     animate(`${durationOpen} ${easingDecelerate}`)
//   ]),
//   transition('* => panelClosed', [
//     animate(`${durationClose} ${easingAccelerate}`)
//   ])
// ]);

export let showHideExtentPanel = trigger('showHideExtentPanel', [
  state('hidePanel', style({
    transform: 'translateX(395px)'
  })),
  state('hidePanelAndPane', style({
    transform: 'translateX(408px)'
  })),
  state('showPanel', style({
    transform: 'translateX(0)'
  })),
  transition('* => *', [
    animate('0.2s ease-out')
  ])
]);

export let tabSelected = trigger('tabSelected', [
  state('selected', style({
    background: white
  })),
  state('unselected', style({
    background: midLight
  })),
  transition('* <=> *', [
    animate(`${durationSelect} ${easingStandard}`)
  ])
]);

// export let showFilters = trigger('showFilters', [
//   state('selected', style({
//     opacity: 1,
//     pointerEvents: 'Auto'
//   })),
//   state('unselected', style({
//     opacity: 0,
//     pointerEvents: 'None'
//   })),
//   transition('* => *', [
//     animate(`${durationSelect} ${easingStandard}`)
//   ])
// ]);

// export let sidePanelOpen = trigger('sidePanelOpen', [
//   state('panelClosed', style({
//     transform: 'translateX(0)',
//   })),
//   state('panelOpen', style({
//     transform: 'translateX(408px)',
//   })),
//   transition('panelOpen => panelClosed', [
//     animate(`${durationCollapse} ${easingAccelerate}`)
//   ]),
//   transition('panelClosed => panelOpen', [
//     animate(`${durationExpand} ${easingDecelerate}`)
//   ]),
//   transition(':enter', [
//     animate(`${durationExpand} ${easingDecelerate}`)
//   ]),
//   transition(':exit', [
//     animate(`${durationCollapse} ${easingAccelerate}`)
//   ])
// ]);





// export let showHideFilterPane = trigger('showHideFilterPane', [
//   state('showPane', style({
//     opacity: 1,
//     pointerEvents: 'Auto'
//   })),
//   state('hidePane', style({
//     opacity: 0,
//     pointerEvents: 'None'
//   })),
//   transition('* => *', [
//     animate('0.2s ease-in')
//   ])
// ]);

// export let animateShowFiltersButtons = trigger('animateShowFiltersButton', [
//   state('paneOpen', style({
//     transform: 'translateY(calc(100vh - 200px))',
//     backgroundColor: offwhite,
//     width: '408px',
//     left: '0'
//   })),
//   state('paneClosed', style({
//     transform: 'translateY(0)',
//     backgroundColor: midLight,
//     width: '390px',
//     left: '8px'
//   })),
//   transition('* => *', [
//     animate('0.2s ease-out')
//   ])
// ]);

// export let animateSidePanelButton = trigger('animateSidePanelButton', [
//   state('paneOpen', style({
//     opacity: 1,
//     pointerEvents: 'Auto'
//   })),
//   state('paneClosed', style({
//     opacity: 0,
//     pointerEvents: 'None'
//   })),
//   transition('* => *', [
//     animate('0.2s ease-in')
//   ])
// ]);




// export let showHideNetworkPane = trigger('showHideNetworkPane', [
//   state('paneOpen', style({
//     opacity: 1,
//     pointerEvents: 'Auto'
//   })),
//   state('paneClosed', style({
//     opacity: 0,
//     pointerEvents: 'None'
//   })),
//   transition('* => *', [
//     animate('0.2s ease-in')
//   ])
// ]);

// export let animatePanelButton = trigger('animatePanelButton', [
//   state('paneOpen', style({
//     transform: 'translateX(-13px)'
//   })),
//   state('paneClosed', style({
//     transform: 'translateX(0)'
//   })),
//   transition('* => *', [
//     animate('0.2s')
//   ])
// ]);

// export let animateNetworkPaneButton = trigger('animateNetworkPaneButton', [
//   state('paneOpen', style({
//     transform: 'translateY(143px)',
//     width: '408px',
//     backgroundColor: '#F1F3F7'
//   })),
//   state('paneClosed', style({
//     transform: 'translateY(0)',
//     width: '382px',
//     backgroundColor: '#D4D7DB'
//   })),
//   transition('* => *', [
//     animate('0.2s ease-out')
//   ])
// ]);
*/
