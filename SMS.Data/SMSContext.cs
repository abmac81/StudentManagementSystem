using SMS.Business.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMS.Data
{
    public class SMSContext : DbContext
    {
        public SMSContext()
            : base("name=StudentManagementSystem")
        {
            Database.SetInitializer<SMSContext>(null);
            //Database.SetInitializer<CarRentalContext>(new CreateDatabaseIfNotExists<SMSContext>());
        }

        public DbSet<Student> StudentSet { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<Student>().HasKey<int>(e => e.StudentID);

            // There may be attributes which you have only in business entitites yet not in the DB. These could also be ignored here
        }
    }
}
