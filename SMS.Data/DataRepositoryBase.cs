using Core.Common.Data;

namespace SMS.Data
{
    public abstract class DataRepositoryBase<T> : DataRepositoryBase<T, SMSContext> where T: class, new()
    {

    }
}
