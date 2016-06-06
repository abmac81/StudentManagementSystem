using SMS.Business.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SMS.Business.Entities;
using System.ServiceModel;
using System.ComponentModel.Composition;
using Core.Common.Contracts;
using SMS.Data.Contracts.Repository_Interface;

namespace SMS.Business.Services.Services
{
    [ServiceBehavior(InstanceContextMode = InstanceContextMode.PerCall,
    ConcurrencyMode = ConcurrencyMode.Multiple,
    ReleaseServiceInstanceOnTransactionComplete = false)]
    public class StudentService : BaseService, IStudentService
    {
        [Import]
        private IDataRepositoryFactory _DataRepositoryFactory;

        public StudentService()
        {

        }

        public StudentService(IDataRepositoryFactory dataRepositoryFactory)
        {
            _DataRepositoryFactory = dataRepositoryFactory;
        }

        [OperationBehavior(TransactionScopeRequired = true)]
        public void DeleteStudent(string studentId)
        {
            ExecuteFaultHandledOperation(() =>
            {
                int studId = Convert.ToInt32(studentId);
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();
                studentRepository.Remove(studId);
            });
        }

        public List<Student> GetAllStudent()
        {
            return ExecuteFaultHandledOperation(() =>
            {
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();

                IEnumerable<Student> allStudents = studentRepository.Get();

                List<Student> students = new List<Student>();

                foreach (var student in allStudents)
                {
                    students.Add(student);
                }
                return students;
            });
        }

        public Student GetStudentDetails(string studentId)
        {
            return ExecuteFaultHandledOperation(() =>
            {
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();
                int studId = Convert.ToInt32(studentId);
                Student studentEntity = studentRepository.Get(studId);

                if (studentEntity == null)
                {
                    throw new FaultException<string>("Student Not Found");

                }

                return studentEntity;
            });
        }

        [OperationBehavior(TransactionScopeRequired = true)]
        public Student UpdateStudent(Student student)
        {
            return ExecuteFaultHandledOperation(() =>
            {
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();

                Student updatedEntity = null;

                if (student.StudentID == 0)
                {
                    updatedEntity = studentRepository.Add(student);
                }
                else
                {
                    updatedEntity = studentRepository.Update(student);
                }

                return updatedEntity;
            });
        }
    }
}
