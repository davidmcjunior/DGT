import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PopupKey, popups } from '../../constants';
import { NameAndDescription } from '../../models';
import { Align } from '@progress/kendo-angular-popup';

@Component({
    selector: 's4-popup',
    templateUrl: './popup.component.html'
})

export class PopupComponent implements OnInit {
    @Input() key: PopupKey;
    @Input() hasIcon = true;
    @Input() anchorAlign: Align = { horizontal: 'right', vertical: 'center' }; // position on anchor where the popup will attach
    @Input() popupAlign: Align = { horizontal: 'left', vertical: 'center' }; // position on the popup to attach to point indicated in this.anchorAlign
    @Input() popupMargin: { horizontal: number, vertical: number } = { horizontal: 25, vertical: 0 };

    isReady = false; // has this.popup been populated yet?
    isOpen = false; // am i showing my stuff to the user
    popup: NameAndDescription = { name: undefined, description: undefined }; // my details

    // popups can align around or on top of the element that they anchor to
    // you can play with different alignments at https://www.telerik.com/kendo-angular-ui/components/popup/aligning-positioning/

    @HostListener('keydown', ['$event'])
    public keydown(event: any): void {
        if (event.keyCode === 27) { // ESC keypress
            this.close();
        }
    }

    ngOnInit() {
        // console.log('i am a popup initializing')
        let pop = popups[this.key];
        if (pop) {
            this.popup.name = pop.name;
            if (pop.description) {
                this.popup.description = pop.description.trim();
            }
            else {
                this.popup.description = '';
            }
            // console.log(pop);
            this.isReady = true;
        } else {
            // console.log('popup faled to load', this.key)
        }
    }

    public toggleOpen(): void {
        // console.log('should toggle');
        this.isOpen = !this.isOpen;
    }

    public close(): void {
        this.isOpen = false;
    }
}
