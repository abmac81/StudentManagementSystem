module services {
    //client token and session token which is passed with each call can be included here
    export interface IRequestBase { }

    export interface IResponseBase {
        HasError: boolean;
        ErrorMessage: string;
    }

    export interface IBaseService {
        
    }

    export class BaseService implements IBaseService {
        public httpService: ng.IHttpService;

        private clientToken: string;
        private sessionToken: string;

        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        public ServiceRequest<TRequest extends IRequestBase, TResponse extends IResponseBase>(serviceUrl: string, request: TRequest): ng.IPromise<TResponse> {

            // can hold information in cookies and retrieve them using the configuration provider in order to append those information to each call here
            var serviceHostUrl = 'http://localhost:4094/StudentService.svc/';

            return this.httpService
                .post<TResponse>(serviceHostUrl + serviceUrl, request)
                .then(
                (result) => {
                    // if required an alert can be displayed here if there is an error
                    //if (result.data.IsError)
                    //    alert(result.data.ErrorMessage);
                    //else
                        return <TResponse>result.data;
                },
                (exception) => {
                    alert("Connection Error");
                });
        }
    }
}