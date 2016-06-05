using Core.Common.Contracts;
using SMS.Business.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMS.Data.Contracts.Repository_Interface
{
    public interface IStudentRepository : IDataRepository<Student>
    {
        // Other than CRUD opertations anything else should go here and implemented in the repository
    }
}
