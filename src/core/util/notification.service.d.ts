import { AppConfig } from '../app.config';
/**
 * NotificationService will notify using Desktop Notifications
 * https://developer.mozilla.org/en-US/docs/Web/API/notification
 * Can change icons by setting iconPath in the AppConfig if needed
 */
export declare class NotificationService {
    private config;
    iconPath: string;
    constructor(config: AppConfig);
    /**
     * Displays an error message
     * @param body
     */
    displayErrorMessage(body: string): void;
    /**
     * Displays a success message
     * @param body
     */
    displaySuccessMessage(body: string): void;
    /**
     * Displays an Info message
     * @param body
     */
    displayInfoMessage(body: string): void;
    /**
     * Display message for passed in type
     * @param title
     * @param body
     * @param type
     */
    displayMessage(title: string, body: string, type: string): void;
}
