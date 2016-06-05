using SMS.Business.Entities;
using SMS.Data.Contracts.Repository_Interface;
using System;
using System.Collections.Generic;
using System.ComponentModel.Composition;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMS.Data.Data_Repositories
{
    [Export(typeof(IStudentRepository))]
    [PartCreationPolicy(CreationPolicy.NonShared)]
    public class StudentRepository : DataRepositoryBase<Student>, IStudentRepository
    {
        protected override Student AddEntity(SMSContext entityContext, Student entity)
        {
            return entityContext.StudentSet.Add(entity);
        }

        protected override IEnumerable<Student> GetEntities(SMSContext entityContext)
        {
            return from e in entityContext.StudentSet select e;
        }

        protected override Student GetEntity(SMSContext entityContext, int id)
        {
            var query = (from e in entityContext.StudentSet where e.StudentID == id select e);

            var results = query.FirstOrDefault();

            return results;
        }

        protected override Student UpdateEntity(SMSContext entityContext, Student entity)
        {
            return (from e in entityContext.StudentSet where e.StudentID == entity.StudentID select e).FirstOrDefault();

        }
    }
}
