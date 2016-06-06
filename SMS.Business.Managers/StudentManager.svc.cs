using Core.Common.Contracts;
using SMS.Business.Contracts;
using SMS.Business.Entities;
using SMS.Data.Contracts.Repository_Interface;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.ServiceModel;

namespace SMS.Business.Managers
{
    public class StudentManager : ManagerBase, IStudentService
    {
        [Import]
        private IDataRepositoryFactory _DataRepositoryFactory;

        public StudentManager()
        {

        }

        public StudentManager(IDataRepositoryFactory dataRepositoryFactory)
        {
            _DataRepositoryFactory = dataRepositoryFactory;
        }

        [OperationBehavior(TransactionScopeRequired = true)]
        public void DeleteStudent(string studentId)
        {
            ExecuteFaultHandledOperation(() =>
            {
                int student_id = Convert.ToInt32(studentId);
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();

                studentRepository.Remove(student_id);

            });
        }

        public List<Student> GetAllStudent()
        {
            return this.ExecuteFaultHandledOperation(() =>
            {
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();

                IEnumerable<Student> students = studentRepository.Get();
                List<Student> studentList = new List<Student>();
                foreach (var student in students)
                {
                    studentList.Add(student);
                }

                return studentList;
            });
        }

        public Student GetStudentDetails(string studentId)
        {
            return ExecuteFaultHandledOperation(() =>
            {
                int student_id = Convert.ToInt32(studentId);
                IStudentRepository studentRepository = _DataRepositoryFactory.GetDataRepository<IStudentRepository>();

                Student student = studentRepository.Get(student_id);

                return student;
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
