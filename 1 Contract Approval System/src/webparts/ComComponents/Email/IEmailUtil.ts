export interface IEmailUtil {
    SendEmailbyId:(to: number, body: string, subject: string)=>Promise<void>;
    SendEmail:(to: string, body: string, subject: string)=> Promise<void>;
    getsystemlink:()=>string;
}