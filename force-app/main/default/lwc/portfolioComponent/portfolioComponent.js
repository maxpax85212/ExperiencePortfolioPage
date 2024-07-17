import { LightningElement, api, wire } from 'lwc';
import getContent from '@salesforce/apex/ManagedContentController.getContent';
import basePath from '@salesforce/community/basePath';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';

export default class PortfolioComponent extends NavigationMixin(
    LightningElement
) {
    @api action;
    @api linkedInImage;
    @api
    set selected(value) {
        this._selected = value;
        if (!this._cmsData) return;
        if (this._selected) {
            this.handleMouseOver();
        } else {
            this.handleMouseOut();
        }
    }
    get selected() {
        return this._selected;
    }
    @api title;

    @wire(CurrentPageReference)
    pageReference({ state }) {
        if (state && state.type && state.type === this.action) {
            this.dispatchEvent(
                new CustomEvent('imageselected', {
                    detail: {
                        action: this.action
                    }
                })
            );
        }
    }

    @wire(getContent, {
        contentKey: '$linkedInImage',
    })
    wiredContent({ data, error }) {
        if (data) {
            this._cmsData = data;
            if (this._selected && this._cmsData.selectedImageAltText) {
                this.altText = this._cmsData.selectedImageAltText.value;
                this.url =
                    basePath +
                    '/sfsites/c' +
                    this._cmsData.selectedImage.unauthenticatedUrl;
            } else if (this._cmsData.unselectedImageAltText) {
                this.altText = this._cmsData.unselectedImageAltText.value;
                this.url =
                    basePath +
                    '/sfsites/c' +
                    this._cmsData.unselectedImage.unauthenticatedUrl;
            } 
            else {
                // this.altText = this._cmsData.altText.value;
                this.url = basePath + '/sfsites/c' ;
                //+ this._cmsData.source.url;
            }
        }
        if (error) {
            console.log('Error: ' + JSON.stringify(error));
        }
    }

    altText;
    url;

    _cmsData;
    _hover;
    _isRendered;
    _selected;

    handleClick() {
        if (this.action !== undefined) {
            this.altText = this._cmsData.selectedImageAltText.value;
            this.url =
                basePath +
                '/sfsites/c' +
                this._cmsData.selectedImage.unauthenticatedUrl;
            this.dispatchEvent(
                new CustomEvent('imageselected', {
                    detail: {
                        action: this.action
                    }
                })
            );
            this._selected = true;
        }
    }

    handleMouseOver() {
        this.altText = this._cmsData.selectedImageAltText.value;
        this.url =
            basePath +
            '/sfsites/c' +
            this._cmsData.selectedImage.unauthenticatedUrl;
    }

    handleMouseOut() {
        if (!this._selected) {
            this.altText = this._cmsData.unselectedImageAltText.value;
            this.url =
                basePath +
                '/sfsites/c' +
                this._cmsData.unselectedImage.unauthenticatedUrl;
        }
    }

    get wrapperCss() {
        return this.action !== undefined
            ? `slds-grid slds-text-align_center slds-wrap action`
            : 'slds-grid slds-text-align_center slds-wrap';
    }

    get imgCss() {
        return this._selected ? 'selected' : '';
    }

    

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