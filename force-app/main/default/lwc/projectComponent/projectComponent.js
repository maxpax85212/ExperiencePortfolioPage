import { LightningElement, api, track } from 'lwc';

export default class ProjectComponent extends LightningElement {
    @track displayPortfolio;
    @track displayLookup;
    @track displayDataFactory;
    @track displayRecordTriggerWorkaround;

    @api displayPortfolio;
    @api displayLookup;
    @api displayDataFactory;
    @api displayRecordTriggerWorkaround;
    
    portfolioClick() {
        this.displayPortfolio = true;
        this.displayLookup = false;
        this.displayDataFactory = false;
        this.displayRecordTriggerWorkaround = false;
    }

    lookupClick() {
        this.displayPortfolio = false;
        this.displayLookup = true;
        this.displayDataFactory = false;
        this.displayRecordTriggerWorkaround = false;
    }

    dataFactoryClick() {
        this.displayPortfolio = false;
        this.displayLookup = false;
        this.displayDataFactory = true;
        this.displayRecordTriggerWorkaround = false;
    }

    recordTriggerWorkaroundClick() {
        this.displayPortfolio = false;
        this.displayLookup = false;
        this.displayDataFactory = false;
        this.displayRecordTriggerWorkaround = true;
    }

}