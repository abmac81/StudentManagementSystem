using SMS.Business.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace SMS.Business.Managers
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IStudentManager" in both code and config file together.
    [ServiceContract]
    public interface IStudentManager
    {
        [OperationContract]
        [WebInvoke(Method = "GET",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "/GetAllStudent/")]
        List<Student> GetAllStudent();

        [OperationContract]
        [WebGet(RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "/GetStudentDetails/{StudentId}")]
        Student GetStudentDetails(string studentId);

        [OperationContract]
        [WebInvoke(Method = "POST",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "/UpdateStudent")]
        Student UpdateStudent(Student student);

        [OperationContract]
        [WebInvoke(Method = "DELETE",
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "DeleteStudent/{StudentId}")]
        void DeleteStudent(string studentId);
    }
}
