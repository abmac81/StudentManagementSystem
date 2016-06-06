module services {

    //#region UpdateStudent

    export interface IUpdateStudentRequest extends IRequestBase {
        student: entities.sms.IStudent;
    };

    export interface IUpdateStudentResponse extends IResponseBase {
        student: entities.sms.IStudent;
    };

    //#endregion

    //#region DeleteStudent

    export interface IDeleteStudentRequest extends IRequestBase {
        studentId: string;
    };

    export interface IDeleteStudentResponse extends IResponseBase {
       
    };

    //#endregion

    //#region GetStudent

    export interface IGetStudentRequest extends IRequestBase {
        studentId: string;
    };

    export interface IGetStudentResponse extends IResponseBase {
        student: entities.sms.IStudent;
    };

    //#endregion

    //#region GetAllStudent

    export interface IGetAllStudentRequest extends IRequestBase {

    };

    export interface IGetAllStudentResponse extends IResponseBase {
        StudentCollection: Array<entities.sms.IStudent>;
    };

    //#endregion

    export interface ISMSService
    {
        UpdateStudent(request: IUpdateStudentRequest): ng.IPromise<IUpdateStudentResponse>;
        DeleteStudent(request: IDeleteStudentRequest): ng.IPromise<IDeleteStudentResponse>;
        GetStudentDetails(request: IGetStudentRequest): ng.IPromise<IGetStudentResponse>;
        GetAllStudent(request: IGetAllStudentRequest): ng.IPromise<IGetAllStudentResponse>;
    }

    export class JKCSService extends services.BaseService implements ISMSService
    {
        static $inject = ['$http'];
        constructor($http: ng.IHttpService) {
            super($http);
        }

        UpdateStudent(request: IUpdateStudentRequest): ng.IPromise<IUpdateStudentResponse> {
            return this.ServiceRequest<IUpdateStudentRequest, IUpdateStudentResponse>('UpdateStudent', request);
        }

        DeleteStudent(request: IDeleteStudentRequest): ng.IPromise<IDeleteStudentResponse>
        {
            return this.ServiceRequest<IDeleteStudentRequest, IDeleteStudentResponse>('DeleteStudent', request);
        }

        GetStudentDetails(request: IGetStudentRequest): ng.IPromise<IGetStudentResponse>
        {
            return this.ServiceRequest<IGetStudentRequest, IGetStudentResponse>('GetStudentDetails', request);
        }

        GetAllStudent(request: IGetAllStudentRequest): ng.IPromise<IGetAllStudentResponse>
        {
            return this.ServiceRequest<IGetAllStudentRequest, IGetAllStudentResponse>('GetAllStudent', request);
        }
    }
}