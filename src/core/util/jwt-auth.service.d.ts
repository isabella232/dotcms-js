import { NotificationService } from './notification.service';
import { LoggerService } from './logger.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { SettingsStorageService } from './settings-storage.service';
import 'rxjs/add/operator/map';
/**
 * Service for managing JWT Auth Token from dotCMS Site/Host
 */
export declare class JWTAuthService {
    private http;
    private notificationService;
    private log;
    private settingsStorageService;
    constructor(http: Http, notificationService: NotificationService, log: LoggerService, settingsStorageService: SettingsStorageService);
    /**
     * Will POST to the dotCMS to retrieve a dotCMS Auth Token
     * @param siteURL Site/Host of dotCMS
     * @param username
     * @param password
     * @returns {Observable<R>} String return for the token
     */
    getJWT(siteURL: string, username: string, password: string): Observable<string>;
    /**
     * Will login and save the Auth Token to local storage
     * @param siteURL
     * @param username
     * @param password
     * @returns {Observable<R>}
     */
    login(siteURL: string, username: string, password: string): Observable<string>;
    private doPostAuth(siteUrl, data);
    private extractJWT(res);
    private handleError(error);
}
