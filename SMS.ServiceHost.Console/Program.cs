using Core.Common.Core;
using SMS.Business.Bootstrapper;
using SMS.Business.Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SM = System.ServiceModel;

namespace SMS.ServiceHost
{
    class Program
    {
        static void Main(string[] args)
        {
            ObjectBase.Container = MEFLoader.Init();

            Console.WriteLine("Starting up services");
            Console.WriteLine("");

            SM.ServiceHost hostStudentService = new SM.ServiceHost(typeof(StudentService));

            StartService(hostStudentService, "StudentService");

            Console.WriteLine("");
            Console.WriteLine("Press [Enter] to exit.");
            Console.ReadLine();

            Console.WriteLine("Reservation Monitor Stopped");

            StopService(hostStudentService, "StudentService");
        }

        static void StartService(SM.ServiceHost host, string serviceDescription)
        {
            host.Open();
            Console.WriteLine("Service {0} started.", serviceDescription);

            foreach (var endpoint in host.Description.Endpoints)
            {
                Console.WriteLine("Listening on endpoint:");
                Console.WriteLine("Address: {0}", endpoint.Address.Uri);
                Console.WriteLine("Binding: {0}", endpoint.Binding.Name);
                Console.WriteLine("Contract: {0}", endpoint.Contract.Name);
            }

            Console.WriteLine();

        }

        static void StopService(SM.ServiceHost host, string serviceDescription)
        {
            host.Close();
            Console.WriteLine("Service {0} Stopped.", serviceDescription);
        }
    }
}
