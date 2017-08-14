import { Observable } from 'rxjs';
import { Treeable } from '../treeable/shared/treeable.model';
import { Site } from '../treeable/shared/site.model';
/**
 * Manages the state of objects in dotcms-js so compoents can Observe changes and reload as needed
 */
export declare class SiteBrowserState {
    currentFolder: Observable<string>;
    currentSetingsUpdated: Observable<boolean>;
    currentSite: Observable<Site>;
    currentTreeable: Observable<Treeable>;
    currentURI: Observable<string>;
    private currentSiteSubject;
    private currentFolderSubject;
    private currentURISubject;
    private currentTreeableSubject;
    private currentSettingsUpdatedSubject;
    constructor();
    changeSite(siteName: Site): void;
    getSelectedSite(): Site;
    changeFolder(folderName: string): void;
    getSelectedFolder(): string;
    changeURI(uri: string): void;
    getURI(): string;
    changeTreeable(treeable: Treeable): void;
    getSelectedTreeable(): Treeable;
    changeSettingsUpdated(settingsUpdated: boolean): void;
    getSettingsUpdated(): boolean;
}
