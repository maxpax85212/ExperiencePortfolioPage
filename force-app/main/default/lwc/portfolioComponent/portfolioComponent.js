import { LightningElement, api} from 'lwc';

export default class PortfolioComponent extends LightningElement{
    @api linkedInImage;

    displayPortfolio;
    displayLookup;
    displayDataFactory;
    displayRecordTriggerWorkaround;
    
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
    
    handleAMChange() {
        this.displayPortfolio = false;
        this.displayLookup = false;
        this.displayDataFactory = false;
        this.displayRecordTriggerWorkaround = false;
        this.activeSections = [];
    }

    handleGoalsChange(){
        this.displayPortfolio = false;
        this.displayLookup = false;
        this.displayDataFactory = false;
        this.displayRecordTriggerWorkaround = false;
    }

    handleProjectsChange(){
        this.activeSections = [];
    }
    activeSections = [];
}