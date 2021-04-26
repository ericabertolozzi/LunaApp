

import { Component, ViewChild, OnInit } from '@angular/core';
import {
    MbscCalendarEvent,
    MbscDatepickerOptions,
    MbscEventcalendarOptions,
    MbscPopup,
    MbscPopupOptions,
    Notifications,
    setOptions
    
} from '@mobiscroll/angular';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});


const now = new Date();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
    providers: [Notifications]
})
export class CalendarComponent implements OnInit {
    constructor(private notify: Notifications) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    @ViewChild('popup', { static: false })
    popup!: MbscPopup;
    popupEventTitle: string | undefined;
    popupEventDescription = '';
    popupEventAllDay = true;
    popupEventDates: any;
    popupEventStatus = 'busy';
    calendarSelectedDate: any = now;
    switchLabel: any = 'All-day';
    myEvents: MbscCalendarEvent[] = [{
        id: 1,
        start: new Date(now.getFullYear(), now.getMonth(), 8, 13),
        end: new Date(now.getFullYear(), now.getMonth(), 8, 13, 30),
        title: 'Gyno appointment',
        color: '#A5A5EF'
    }];
    tempEvent!: MbscCalendarEvent;
    calendarOptions: MbscEventcalendarOptions = {
        clickToCreate: 'double',
        dragToCreate: true,
        dragToMove: true,
        dragToResize: true,
        view: {
            calendar: { type: 'month', labels: true }
        },
        onEventClick: (args) => {
            this.isEdit = true;
            this.tempEvent = args.event;
            // fill popup form with event data
            this.loadPopupForm(args.event);
            // set popup options
            this.popupHeaderText = 'Edit event';
            this.popupButtons = this.popupEditButtons;
            this.popupAnchor = args.domEvent.currentTarget;
            // open the popup
            this.popup.open();
        },
        onEventCreated: (args) => {
            setTimeout(() => {
                this.isEdit = false;
                this.tempEvent = args.event;
                // fill popup form with event data
                this.loadPopupForm(args.event);
                // set popup options
                this.popupHeaderText = 'Menstruation Cycle';
                this.popupButtons = this.popupAddButtons;
                this.popupAnchor = args.target;
                // open the popup
                this.popup.open();
            });
        },
        onEventDeleted: (args) => {
            setTimeout(() => {
                this.deleteEvent(args.event);
            });
        },
        onEventUpdated: (args) => {
            // here you can update the event in your storage as well, after drag & drop or resize
            // ...
        }
    };
    popupHeaderText!: string;
    popupAnchor: HTMLElement | undefined;
    popupAddButtons = ['cancel', {
        handler: () => {
            this.saveEvent();
        },
        keyCode: 'enter',
        text: 'Add',
        cssClass: 'mbsc-popup-button-primary'
    }];
    popupEditButtons = ['cancel', {
        handler: () => {
            this.saveEvent();
        },
        keyCode: 'enter',
        text: 'Save',
        cssClass: 'mbsc-popup-button-primary'
    }];
    popupButtons: any = [];
    popupOptions: MbscPopupOptions = {
        display: 'bottom',
        contentPadding: false,
        fullScreen: true,
        onClose: () => {
            if (!this.isEdit) {
                // refresh the list, if add popup was canceled, to remove the temporary event
                this.myEvents = [...this.myEvents];
            }
        },
        responsive: {
            medium: {
                display: 'bubble',
                width: 400,
                fullScreen: false,
                touchUi: false
            }
        }
    };
    datePickerControls = ['date'];
    datePickerResponsive: any = {
        medium: {
            controls: ['calendar'],
            touchUi: false
        }
    };
    datetimePickerControls = ['datetime'];
    datetimePickerResponsive = {
        medium: {
            controls: ['calendar', 'time'],
            touchUi: false
        }
    };
    datePickerOptions: MbscDatepickerOptions = {
        select: 'range',
        showRangeLabels: false,
        touchUi: true
    };
    isEdit = false;
    loadPopupForm(event: MbscCalendarEvent): void {
        this.popupEventTitle = event.title;
        this.popupEventDescription = event.description;
        this.popupEventDates = [event.start, event.end];
        this.popupEventAllDay = event.allDay || true;
        this.popupEventStatus = event.status || 'busy';
    }
    saveEvent(): void {
        this.tempEvent.title = this.popupEventTitle;
        this.tempEvent.description = this.popupEventDescription;
        this.tempEvent.start = this.popupEventDates[0];
        this.tempEvent.end = this.popupEventDates[1];
        this.tempEvent.allDay = this.popupEventAllDay;
        this.tempEvent.status = this.popupEventStatus;
        if (this.isEdit) {
            // update the event in the list
            this.myEvents = [...this.myEvents];
            // here you can update the event in your storage as well
            // ...
        } else {
            // add the new event to the list
            this.myEvents = [...this.myEvents, this.tempEvent];
            // here you can add the event to your storage as well
            // ...
        }
        // navigate the calendar
        this.calendarSelectedDate = this.popupEventDates[0];
        // close the popup
        this.popup.close();
    }
    deleteEvent(event: MbscCalendarEvent): void {
        this.myEvents = this.myEvents.filter(item => item.id !== event.id);
        this.notify.snackbar({
            button: {
                action: () => {
                    this.myEvents = [...this.myEvents, event];
                },
                text: 'Undo'
            },
            message: 'Event deleted'
        });
        // here you can delete the event from your storage as well
        // ...
    }
    onDeleteClick(): void {
        this.deleteEvent(this.tempEvent);
        this.popup.close();
    }
}


