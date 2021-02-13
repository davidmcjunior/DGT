import { Component, OnInit } from '@angular/core';
import { AppStateService, IdentityService, UIStateService, EventAnalysisStateService, QueryStateService } from 'src/app/core/services';
import {
    fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideOutLeftOnLeaveAnimation,
    slideInLeftOnEnterAnimation, flipOutYOnLeaveAnimation,
    flipInYOnEnterAnimation, bounceInDownOnEnterAnimation, fadeInLeftOnEnterAnimation, fadeInDownOnEnterAnimation
} from '../../animations';
import { splitOnHyphens } from '../../utilities';
import { AppCategory, ViewType } from '../../constants';
import { NavigationLink } from '../../models';

@Component({
    selector: 's4-navigation',
    templateUrl: './navigation.component.html',
    animations: [
        slideInLeftOnEnterAnimation({ anchor: 'delayedSlideInLeft', duration: 300, delay: 100 }),
        slideInLeftOnEnterAnimation({ anchor: 'slideLeftEnter', duration: 300 }),
        slideOutLeftOnLeaveAnimation({ anchor: 'slideLeftExit', duration: 200 }),
        fadeInOnEnterAnimation({ anchor: 'fadeInOnEnter', duration: 125 }),
        fadeInDownOnEnterAnimation({ anchor: 'delayedFadeInOnEnter', duration: 250, delay: 125 }),
        fadeOutOnLeaveAnimation({ anchor: 'fadeOutOnExit', duration: 100 }),
        fadeInOnEnterAnimation({ anchor: 'overlayIn', duration: 400 }),
        fadeOutOnLeaveAnimation({ anchor: 'overlayOut', duration: 200 }),
        flipInYOnEnterAnimation({ anchor: 'flipIn' }),
        flipOutYOnLeaveAnimation({ anchor: 'flipOut' }),
        bounceInDownOnEnterAnimation({ anchor: 'bounceInDown', delay: 100, duration: 1000, animateChildren: 'after' }),
        fadeInLeftOnEnterAnimation({ anchor: 'fadeInLink', duration: 300 }),
    ]
})

export class NavigationComponent implements OnInit {
    isReady = false; // trigger init animations
    _isSideMenuOpen = false;
    _isUserMenuOpen = false;
    navigationLinks: NavigationLink[] = [
        { name: 'Dashboard', icon: 'fa-file-chart-line', url: '/' },
        { name: 'Record Search', icon: 'fa-map-marked-alt', url: '/analysis', page: 'record' },
        { name: 'Event Analysis', icon: 'fa-map-marked-alt', url: '/analysis', page: 'attribute' },
        { name: 'Standard Reports', icon: 'fa-file-spreadsheet', url: '/crash-summary' },
    ];
    constructor(
        private app: AppStateService,
        private identity: IdentityService,
        private eventAnalysis: EventAnalysisStateService,
        private ui: UIStateService) { }

    ngOnInit() {
        setTimeout(() => this.isReady = true); // trigger enter animations
    }
    get pageTitle() {
        let page = this.currentPage;
        if (!page) { page = ''; }
        if (page === 'dashboard') {
            page = 'florida traffic safety dashboard';
        }
        if (page === 'analysis') {
            page = this.eventAnalysis.analysisType === 'attribute' ? 'event analysis' : 'record search';
        }
        return splitOnHyphens(page);
    }
    get currentPage(): string {
        return this.app.currentPage;
    }

    get isAuthenticated(): boolean {
        return this.identity.isAuthenticated;
    }

    get isAdmin(): boolean {
        return this.identity.isAdmin;
    }

    get isGlobalAdmin(): boolean {
        return this.identity.isGlobalAdmin;
    }

    get showLogging(): boolean {
        return this.isAuthenticated && this.isGlobalAdmin;
    }

    get isSideMenuOpen() { return this._isSideMenuOpen; }
    set isSideMenuOpen(value) { this._isSideMenuOpen = value; }

    get isUserMenuOpen() { return this._isUserMenuOpen; }
    set isUserMenuOpen(value) { this._isUserMenuOpen = value; }
    get windowWidth(): number { return this.ui.windowWidth.value; }
    public handleUserMenu(value?: boolean): void {
        if (value) { this.isUserMenuOpen = value; return; }
        else {
            this.isUserMenuOpen = !this.isUserMenuOpen;
        }
    }

    public enterDelay(i: number): number { return 75 * i + 100; }

    // pass a valid route path, all view routing goes through here
    public goToPage(path: string, analysisType?: 'attribute' | 'record'): void {
        this.isSideMenuOpen = false;
        this.isUserMenuOpen = false;
        if (analysisType) {
            if (this.eventAnalysis.analysisType !== analysisType) {
                this.eventAnalysis.analysisType = analysisType;
            }
        }

        if (this.app.currentPage !== 'analysis') {
            this.app.goTo(path);
        } else { if (path !== '/analysis') { this.app.goTo(path) } }
    }
    public onSelectCategory = (category: AppCategory): void => {
        this.app.category = category;
    }
}
